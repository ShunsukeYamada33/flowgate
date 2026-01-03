import type {UpdateInput} from "@/features/applications/types";


/**
 * 申請データの更新
 * @param input id
 */
export const update = async (input: UpdateInput) => {

    const res = await fetch('/api/app/update-application', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(input),
    });

    if (!res.ok) throw new Error('Update failed');
    return res.json();
};