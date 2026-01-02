import {type FormEvent, useState} from "react";
import {USER_ROLES} from "@/constants/user-role";
import type {RegisterInput} from "@/features/auth/types";
import {useRegister} from "@/lib/Auth";

type RegisterFormProps = {
    onSuccess: (email: string) => void;
};

export const RegisterForm = ({onSuccess}: RegisterFormProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('employee');

    const register = useRegister({onSuccess});

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        register.mutate({email, password, role} as RegisterInput);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    maxLength={72}
                    required
                />
            </div>

            <div>
                <label>Role</label>
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                >
                    {USER_ROLES.map(role => (
                        <option key={role.value} value={role.value}>
                            {role.label}
                        </option>
                    ))}
                </select>
            </div>

            <button type="submit">
                登録
            </button>
        </form>
    );
};
