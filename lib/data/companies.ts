import type { StaticImageData } from "next/image";

import { companyLogos } from "./companyLogos";

/**
 * Company options for the testimonial form (type-ahead).
 * Logos are imported from public/assets/svg/company in companyLogos.ts.
 */

export interface Company {
    name: string;
    /** Company logo (StaticImageData from import). null if not in companyLogos. */
    logo: StaticImageData | null;
}

const COMPANY_NAMES = [
    "Google", "Amazon", "Meta", "Microsoft", "Apple", "Netflix", "Tesla", "IBM", "Oracle", "Salesforce",
    "Adobe", "SAP", "Intel", "Cisco", "Hewlett Packard Enterprise", "Dell Technologies", "Accenture", "Capgemini",
    "Wipro", "TCS (Tata Consultancy Services)", "Infosys", "HCLTech", "Cognizant", "Atos", "NTT Data", "DXC Technology",
    "Kyndryl", "Tech Mahindra", "LTIMindtree", "CGI", "Persistent Systems", "EPAM Systems", "Globant", "Thoughtworks",
    "Zensar Technologies", "Birlasoft", "Mindtree", "Mphasis", "Sonata Software", "Coforge", "Virtusa", "ITC Infotech",
    "NIIT Technologies", "IGATE", "Syntel", "Hexaware Technologies", "CitiusTech", "Incture Technologies", "UST Global",
    "Data Axle", "Revature", "General Electric", "Siemens", "Honeywell", "Bosch", "3M", "Johnson & Johnson",
    "Procter & Gamble", "Unilever", "Nestlé", "PepsiCo", "Coca-Cola", "McDonald's", "Starbucks", "Walmart", "Target",
    "Costco", "Home Depot", "Lowe's", "Amazon Web Services", "Microsoft Azure", "Google Cloud", "Oracle Cloud Infrastructure",
    "IBM Cloud", "Alibaba Cloud", "SAP Cloud", "Salesforce Cloud", "ServiceNow", "Workday", "Zoom", "Slack", "Atlassian",
    "HubSpot", "Shopify", "Stripe", "PayPal", "Square", "Adyen", "Visa", "Mastercard", "American Express",
    "JPMorgan Chase & Co.", "Bank of America", "Wells Fargo", "Citigroup", "HSBC", "Goldman Sachs", "Morgan Stanley",
    "UBS", "Credit Suisse", "Deloitte", "PwC (PricewaterhouseCoopers)", "EY (Ernst & Young)", "KPMG",
    "McKinsey & Company", "Boston Consulting Group", "Bain & Company", "Tesla Motors", "General Motors", "Ford Motor Company",
    "Toyota", "Volkswagen", "Mercedes-Benz", "BMW", "Honda", "Nissan", "Hyundai", "Samsung", "LG", "Sony", "Panasonic",
    "Philips", "Huawei", "Xiaomi", "Lenovo", "HP (Hewlett-Packard)", "Dell", "Acer", "Asus", "Nvidia", "AMD", "Qualcomm",
    "Broadcom", "Texas Instruments", "Micron Technology", "Applied Materials", "Lam Research", "KLA Corporation", "ASML Holding",
    "Taiwan Semiconductor Manufacturing Company (TSMC)", "Intel Corporation", "Samsung Electronics", "SK Hynix", "Western Digital",
    "Seagate Technology", "SanDisk", "NetApp", "Pure Storage", "Nutanix", "VMware", "Red Hat", "SUSE", "Ubuntu", "Fedora",
    "CentOS", "Debian", "Google Chrome", "Mozilla Firefox", "Microsoft Edge", "Apple Safari", "Opera", "Brave", "Vivaldi",
    "DuckDuckGo", "Bing", "Yahoo", "Baidu", "Yandex", "OpenAI", "Google DeepMind", "Anthropic", "Stability AI", "Midjourney",
    "Hugging Face", "DataRobot", "C3.ai", "Palantir Technologies", "Splunk", "Snowflake", "Databricks", "Confluent", "MongoDB",
    "Couchbase", "Redis Labs", "Elastic", "HashiCorp", "Docker", "Kubernetes", "Cloud Native Computing Foundation (CNCF)", "Git",
    "GitHub", "GitLab", "Bitbucket", "Jenkins", "CircleCI", "Travis CI", "GitLab CI/CD", "Argo CD", "Puppet", "Chef", "Ansible",
    "Terraform", "AWS Lambda", "Azure Functions", "Google Cloud Functions", "Serverless Framework", "Netlify", "Vercel", "Heroku",
    "DigitalOcean", "Linode", "GoDaddy", "Bluehost", "SiteGround", "WP Engine", "Squarespace", "Wix", "Shopify Plus", "Magento",
    "Salesforce Commerce Cloud", "Adobe Commerce", "BigCommerce", "Zoho", "Freshdesk", "Zendesk", "Intercom", "Twilio",
    "SendGrid", "Mailchimp", "Constant Contact", "HubSpot Marketing Hub", "Marketo", "Pardot", "Salesforce Marketing Cloud",
    "Google Analytics", "Adobe Analytics", "Mixpanel", "Amplitude", "Tableau", "Power BI", "Qlik", "Looker", "Domo", "Alteryx",
    "Datastax", "Neo4j", "Cloudera", "Hortonworks", "DataStax Astra DB", "Oracle Autonomous Database", "MongoDB Atlas",
    "Amazon DynamoDB", "Google Cloud Spanner", "Azure Cosmos DB", "Snowflake Data Cloud", "Databricks Lakehouse Platform",
    "Google BigQuery", "Amazon Redshift", "Azure Synapse Analytics", "Teradata", "Vertica", "IBM Netezza", "Yellowbrick Data",
    "SingleStore", "Cockroach Labs", "YugaByteDB", "PlanetScale", "Supabase", "Appwrite", "Firebase", "AWS Amplify",
    "Google Cloud Platform", "Azure App Service", "Heroku Platform", "Netlify Functions", "Vercel Serverless Functions",
    "Cloudflare Workers", "Fastly", "Akamai", "Cloudflare", "Sucuri", "Imperva", "Zscaler", "Palo Alto Networks", "Fortinet",
    "Check Point Software Technologies", "CrowdStrike", "SentinelOne", "Okta", "Auth0", "Ping Identity", "CyberArk", "Duo Security",
    "LastPass", "1Password", "Dashlane", "Keeper Security", "NortonLifeLock", "McAfee", "Avast", "AVG", "Kaspersky", "Bitdefender",
    "ESET", "Sophos", "Trend Micro", "Forcepoint", "Proofpoint", "Mimecast", "Barracuda Networks", "Veeam", "Rubrik", "Cohesity",
    "Commvault", "Dell EMC", "Hitachi Vantara", "Juniper Networks", "Arista Networks", "Extreme Networks", "Ubiquiti Networks",
    "Airbnb", "Uber", "LinkedIn", "Twitter", "Datadog",
    "Time of T", "Funding A", "Twingate", "Roblox", "Figma", "Linear", "Notion", "Neon.tech", "Sentry", "Drizzle ORM",
    "Upstash", "Clerk", "Resend", "X (formerly Twitter)", "Intuit", "Dropbox", "Pinterest", "Snapchat", "TikTok", "Spotify",
    "Discord", "Reddit", "Wikipedia", "Canva", "InVision", "Webflow", "Framer", "LottieFiles", "Storyblok", "Contentful",
    "Sanity", "Strapi", "Hasura", "Stytch", "Magic", "Postmark", "Mailgun", "Vonage", "Plaid", "Braintree", "CloudFront",
    "Render", "Vultr", "Tencent Cloud", "Next.js", "Tailwind CSS", "Shadcn/ui", "Radix UI", "Headless UI", "Tremor",
    "Recharts", "Nivo", "Visx", "d3.js", "Chart.js", "React Query", "SWR", "Zustand", "Jotai", "Recoil", "XState",
    "React Hook Form", "Zod", "Yup", "Valibot", "Formik", "TanStack Table", "Ag-Grid", "React Flow", "React DnD",
    "Framer Motion", "React Spring", "GSAP", "Three.js", "Babylon.js", "Remix", "Astro", "Eleventy", "Gatsby", "Hugo",
    "Jekyll", "Nuxt.js", "SvelteKit", "Qwik", "SolidStart", "7 Eleven", "University of Texas at Arlington", "Hughes Systique Corporation", "ISN Software",
    "Other",
];

/** HashMap of company name → Company. Use for O(1) lookup by name. */
export const companiesMap = new Map<string, Company>(
    COMPANY_NAMES.map((name) => [name, { name, logo: companyLogos[name] ?? null }])
);

/** Ordered array of all companies (for iteration, e.g. type-ahead list). */
export const companies: Company[] = Array.from(companiesMap.values());
