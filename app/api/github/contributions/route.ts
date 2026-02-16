import { NextResponse } from "next/server";

const GITHUB_USER = "ashwin-athappan";
const GITHUB_GRAPHQL = "https://api.github.com/graphql";

interface ContributionDay {
    date: string;
    contributionCount: number;
}

interface ContributionWeek {
    contributionDays: ContributionDay[];
}

interface ContributionsResponse {
    data?: {
        user?: {
            contributionsCollection?: {
                contributionCalendar?: {
                    weeks: ContributionWeek[];
                };
            };
        };
    };
    errors?: Array<{ message: string }>;
}

export async function GET(): Promise<NextResponse> {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
        return NextResponse.json(
            { error: "GITHUB_TOKEN not configured" },
            { status: 503 }
        );
    }

    const to = new Date();
    const from = new Date(to);
    from.setFullYear(from.getFullYear() - 1);

    const query = `
    query($login: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $login) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }`;

    try {
        const res = await fetch(GITHUB_GRAPHQL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query,
                variables: {
                    login: GITHUB_USER,
                    from: from.toISOString(),
                    to: to.toISOString(),
                },
            }),
            next: { revalidate: 86400 },
        });

        const json: ContributionsResponse = await res.json();

        if (json.errors?.length) {
            console.error("GitHub GraphQL errors:", json.errors);
            return NextResponse.json(
                { error: json.errors[0].message },
                { status: 502 }
            );
        }

        const weeks =
            json.data?.user?.contributionsCollection?.contributionCalendar
                ?.weeks;
        if (!weeks) {
            return NextResponse.json(
                { error: "No contribution data" },
                { status: 502 }
            );
        }

        return NextResponse.json({ weeks });
    } catch (err) {
        console.error("GitHub contributions fetch failed:", err);
        return NextResponse.json(
            { error: "Failed to fetch contributions" },
            { status: 500 }
        );
    }
}
