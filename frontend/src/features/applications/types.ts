import {type ApplicationStatus} from "@/constants/application-status";


export type Application = {
    id: string;
    title: string;
    content: string;
    status: ApplicationStatus;
};

export type RegisterInput = {
    title: string;
    content: string;
    status: ApplicationStatus;
};

export type SubmitInput = {
    id: string;
}
