import {APPLICATION_STATUS, type ApplicationStatus} from "@/constants/application-status";


export type Application = {
    id: string;
    title: string;
    status: ApplicationStatus;
    createdAt: string;
};

export type RegisterInput = {
    title: string;
    content: string;
    status: ApplicationStatus;
};

export const APPLICATION_STATUS_FOR_REGISTER: ApplicationStatus[] = [
    "draft",
    "submitted",
];

export const filterApplicationStatus = (
    allowed: readonly ApplicationStatus[]
) =>
    APPLICATION_STATUS.filter(status =>
        allowed.includes(status.value)
    );