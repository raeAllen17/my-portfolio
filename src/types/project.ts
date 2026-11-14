export type Project = {
    id: string;
    title: string;
    kind: string;
    description: string;
    tech?: string[];
    link?: string | null;
};
