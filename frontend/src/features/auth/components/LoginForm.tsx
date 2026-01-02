import {Link, useSearchParams} from 'react-router';
import {paths} from "@/config/paths";
import {useEffect, useState} from "react";
import * as React from "react";
import type {LoginInput} from "@/features/auth/types";
import {useLogin} from "@/lib/Auth";


type LoginFormProps = {
    onSuccess: () => void;
    defaultEmail: string;
};

export const LoginForm = ({onSuccess, defaultEmail}: LoginFormProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [searchParams] = useSearchParams();
    const redirectTo = searchParams.get('redirectTo');


    const login = useLogin({onSuccess});

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        login.mutate({email, password} as LoginInput);
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

                <button type="submit">ログイン</button>
            </form>

            <div>
                <Link to={paths.auth.register.getHref(redirectTo)}>
                    新規登録
                </Link>
            </div>
        </div>
    );
};
