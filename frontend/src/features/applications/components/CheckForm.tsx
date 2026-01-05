import {useSubmitApplication} from "@/features/applications/hooks/use-submit-application.ts";
import {type SubmitInput} from "@/features/applications/types";
import {useGetApplication} from "@/features/applications/hooks/use-get-application";
import * as React from "react";
import {APPLICATION_STATUS_LABEL_MAP} from "@/constants/application-status";

type CheckFormProps = {
    onSuccess: () => void;
    onBack: () => void;
    id: string;
};

export const CheckForm = ({onSuccess, onBack, id}: CheckFormProps) => {
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

    const canSubmit = data?.status === "draft" || data?.status === 'returned';

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
                    <p>タイトル {data?.title}</p>
                </div>
                <div>
                    <p>コンテンツ {data?.content}</p>
                </div>
                <div>
                    <p>ステータス {data?.status && APPLICATION_STATUS_LABEL_MAP[data.status]}</p>
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
