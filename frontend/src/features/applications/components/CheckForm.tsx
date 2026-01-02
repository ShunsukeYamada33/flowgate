import {useEffect, useState} from "react";
import {useUpdateApplication} from "@/features/applications/hooks/use-update-application";
import {
    APPLICATION_STATUS_FOR_REGISTER,
    filterApplicationStatus,
    type UpdateInput
} from "@/features/applications/types";
import {useGetApplication} from "@/features/applications/hooks/use-get-application";
import * as React from "react";

type RegisterFormProps = {
    onSuccess: () => void;
    id: string;
};

const REGISTER_STATUS_OPTIONS = filterApplicationStatus(
    APPLICATION_STATUS_FOR_REGISTER
);

export const CheckForm = ({onSuccess, id}: RegisterFormProps) => {
    const {
        data,
        isLoading: isFetching,
        error: fetchError
    } = useGetApplication(id);

    const {update, isLoading, error} = useUpdateApplication(onSuccess);

    const [content, setContent] = useState('');
    const [status, setStatus] = useState('draft');

    useEffect(() => {
        const syncFormData = () => {
            if (data) {
                setContent(data.content ?? '');
                setStatus(data.status);
            }
        };

        syncFormData();
    }, [data]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await update({id, content, status} as UpdateInput);
    };

    if (isFetching) {
        return <p>Loading...</p>;
    }

    if (fetchError) {
        return <p>Failed to load application</p>;
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <p>{data?.title}</p>
            </div>
            <div>
                <label>Content</label>
                <input
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Status</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                >
                    {REGISTER_STATUS_OPTIONS.map(status => (
                        <option key={status.value} value={status.value}>
                            {status.label}
                        </option>
                    ))}
                </select>
            </div>

            {error && <p style={{color: 'red'}}>{error}</p>}

            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Registering...' : 'Register'}
            </button>
        </form>
    );
};
