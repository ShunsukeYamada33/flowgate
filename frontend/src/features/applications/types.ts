export type ApplicationStatus =
    | "DRAFT"
    | "SUBMITTED"
    | "RETURNED"
    | "APPROVED"
    | "REJECTED";

export type Application = {
    id: string;
    title: string;
    status: ApplicationStatus;
    createdAt: string;
};
