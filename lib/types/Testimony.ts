export type TestimonyRelation = 'FRIEND' | 'FAMILY' | 'COLLEAGUE' | 'OTHER';

export interface Testimony {
    _id?: string;
    name: string;
    relation: TestimonyRelation;
    comment: string;
    imageUrl?: string;
    whereWeFirstMet?: string;
    professionalRelation?: string;
}

export interface TestimonyRequest {
    name: string;
    relation: TestimonyRelation;
    comment: string;
    whereWeFirstMet: string;
    professionalRelation: string;
    image?: {
        name: string;
        data: string;
    };
}
