import {useSubmitApplication} from "@/features/applications/hooks/use-submit-application.ts";
import {type SubmitInput} from "@/features/applications/types";
import {useGetApplication} from "@/features/applications/hooks/use-get-application";
import * as React from "react";
import {useEffect, useState} from "react";
import {APPLICATION_STATUS_LABEL_MAP} from "@/constants/application-status";

type EditFormProps = {
    onSuccess: () => void;
    onBack: () => void;
    id: string;
};


export const EditForm = ({onSuccess, onBack, id}: EditFormProps) => {
    const {
        data,
        isLoading: isFetching,
        error: fetchError
    } = useGetApplication(id);

    const {submit, isLoading, error} = useSubmitApplication(onSuccess);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await submit({id} as SubmitInput);
    };

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        const syncFormData = () => {
            if (data) {
                setTitle(data.title ?? '');
                setContent(data.content ?? '');
            }
        };

        syncFormData();
    }, [data]);

    const canSubmit = data?.status === "draft";

    if (isFetching) {
        return <p>Loading...</p>;
    }

    if (fetchError) {
        return <p>Failed to load application</p>;
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>タイトル</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>コンテンツ</label>
                    <input
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>ステータス {data?.status && APPLICATION_STATUS_LABEL_MAP[data.status]}</label>
                </div>

                {error && <p style={{color: 'red'}}>{error}</p>}

                <button type="submit" disabled={isLoading || !canSubmit}>
                    {isLoading ? '提出中...' : '提出'}
                </button>
            </form>
            <button type="submit" onClick={onBack}>
                戻る
            </button>
        </div>
    );
};
