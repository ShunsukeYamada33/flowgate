import type {SubmitInput} from "@/features/applications/types";


/**
 * 申請データの更新
 * @param input id
 */
export const submit = async (input: SubmitInput) => {

    const res = await fetch('/api/app/submit-application', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(input),
    });

    if (!res.ok) throw new Error('Update failed');
    return res.json();
};