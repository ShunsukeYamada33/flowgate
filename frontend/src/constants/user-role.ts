export const USER_ROLES = [
    { value: "user", label: "一般社員" },
    { value: "approver", label: "承認者" },
    { value: "admin", label: "管理者" },
] as const;

export const ROLES = {
    USER: 'user',
    APPROVER: 'approver',
    ADMIN: 'admin',
} as const;
