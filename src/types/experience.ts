export type ProjectFlow = {
    label: string,
    steps: string[];
};

export type RoleProject = {
    title: string,
    summary: string,
    features?: string[],
    flows?: ProjectFlow[],
    stack: string[];
};

export type Role = {
    title: string,
    start: string,
    end: string | null,
    highlights?: string[],
    projects?: RoleProject[];
};

export type Job = {
    id: string,
    company: string,
    roles: Role[],
    location: string;
};
