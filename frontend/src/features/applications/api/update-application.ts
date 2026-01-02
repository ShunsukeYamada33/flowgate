import type {UpdateInput} from "@/features/applications/types";


export const update = async (input: UpdateInput) => {

    const res = await fetch('/api/app/update-application', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(input),
    });

    if (!res.ok) throw new Error('Register failed');
    return res.json();
};