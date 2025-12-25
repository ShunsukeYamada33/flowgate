import {useState} from "react";
import * as React from "react";
import {useRegister} from "@/features/auth/hooks/useRegister";
import {USER_ROLES} from "@/constants/userRole.ts";
import type {RegisterInput} from "@/features/auth/types.ts";

type RegisterFormProps = {
    onSuccess: (email: string) => void;
};

export const RegisterForm = ({onSuccess}: RegisterFormProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('employee');

    const {register, isLoading, error} = useRegister(onSuccess);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await register({email, password, role} as RegisterInput);
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

            {error && <p style={{color: 'red'}}>{error}</p>}

            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Registering...' : 'Register'}
            </button>
        </form>
    );
};
