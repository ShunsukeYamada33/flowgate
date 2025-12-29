import {USER_ROLES} from '@/constants/userRole';

export type UserRole = typeof USER_ROLES[number]['value'];

export type LoginInput = {
    email: string;
    password: string;
};

export type RegisterInput = {
    email: string;
    password: string;
    role: UserRole;
};

export type User = {
    email: string;
    role: UserRole;
};

export type AuthResponse = {
    jwt: string;
    user: User;
};
