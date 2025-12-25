import {Link, useSearchParams} from 'react-router';
import {paths} from "@/config/paths.ts";
import * as React from "react";
import {useEffect, useState} from "react";
import {useLogin} from "@/features/auth/hooks/useLogin.ts";


type LoginFormProps = {
    onSuccess: () => void;
    defaultEmail: string;
};

export const LoginForm = ({onSuccess, defaultEmail}: LoginFormProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [searchParams] = useSearchParams();
    const redirectTo = searchParams.get('redirectTo');


    const {login, isLoading, error} = useLogin(onSuccess);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login({email, password});
    };

    useEffect(() => {
        setEmail(defaultEmail);
    }, [defaultEmail]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email Address</label>
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
                        required
                    />
                </div>

                {error && <p style={{color: 'red'}}>{error}</p>}

                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Logging in...' : 'Log in'}
                </button>
            </form>

            <div className="mt-2 flex items-center justify-end">
                <Link
                    to={paths.auth.register.getHref(redirectTo)}
                    className="font-medium text-blue-600 hover:text-blue-500"
                >
                    Register
                </Link>
            </div>
        </div>
    );
};
