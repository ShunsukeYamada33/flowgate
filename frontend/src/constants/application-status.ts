export const APPLICATION_STATUS = [
    {value: "draft", label: "下書き"},
    {value: "submitted", label: "提出済み"},
    {value: "returned", label: "返却済み"},
    {value: "approved", label: "承認済み"},
    {value: "rejected", label: "却下済み"},
] as const;

export type ApplicationStatus =
    typeof APPLICATION_STATUS[number]["value"];