export type TestimonyRelation = 'FRIEND' | 'FAMILY' | 'COLLEAGUE' | 'OTHER';

export type TestimonyStatus = 'pending' | 'approved' | 'rejected';

export interface Testimony {
    _id?: string;
    name: string;
    relation: TestimonyRelation;
    comment: string;
    imageUrl?: string;
    imageData?: string;
    whereWeFirstMet?: string;
    professionalRelation?: string;
    /** Current company the person works for */
    company?: string;
    /** Their position at that company */
    position?: string;
    status?: TestimonyStatus;
}

export interface TestimonyRequest {
    name: string;
    relation: TestimonyRelation;
    comment: string;
    whereWeFirstMet: string;
    professionalRelation: string;
    company?: string;
    position?: string;
    /** Public image URL (e.g. from Vercel Blob) */
    imageUrl?: string;
    image?: {
        name: string;
        data: string;
    };
}
