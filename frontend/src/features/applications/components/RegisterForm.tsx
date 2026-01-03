import {useState} from "react";
import {useRegister} from "@/features/applications/hooks/use-register";
import {type RegisterInput} from "@/features/applications/types";
import * as React from "react";

type RegisterFormProps = {
    onSuccess: (id: string) => void;
    onBack: () => void;
};

export const RegisterForm = ({onSuccess, onBack}: RegisterFormProps) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const {register, isLoading, error} = useRegister(onSuccess);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await register({title, content, status: "draft"} as RegisterInput);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>タイトル </label>
                    <input
                        type="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>コンテンツ </label>
                    <input
                        type="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <div>
                        <label>ステータス </label>
                        <span>下書き</span>
                    </div>
                </div>

                {error && <p style={{color: 'red'}}>{error}</p>}

                <button type="submit" disabled={isLoading}>
                    {isLoading ? '登録中...' : '登録'}
                </button>
            </form>
            <button type="submit" onClick={onBack}>
                戻る
            </button>
        </div>
    );
};
