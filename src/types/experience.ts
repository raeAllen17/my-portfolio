export type Role = {
    title: string,
    start: string,
    end: string | null;
};

export type Job = {
    id: string,
    company: string,
    roles: Role[],
    highlights: string[],
    location: string;
};