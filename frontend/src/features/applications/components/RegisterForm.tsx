import {useState} from "react";
import * as React from "react";
import {useRegister} from "@/features/applications/hooks/use-register";
import {
    APPLICATION_STATUS_FOR_REGISTER,
    filterApplicationStatus,
    type RegisterInput
} from "@/features/applications/types";

type RegisterFormProps = {
    onSuccess: () => void;
};

const REGISTER_STATUS_OPTIONS = filterApplicationStatus(
    APPLICATION_STATUS_FOR_REGISTER
);

export const RegisterForm = ({onSuccess}: RegisterFormProps) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [status, setStatus] = useState('draft');

    const {register, isLoading, error} = useRegister(onSuccess);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await register({title, content, status} as RegisterInput);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input
                    type="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Content</label>
                <input
                    type="content"
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
