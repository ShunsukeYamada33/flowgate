import {Link, useSearchParams} from 'react-router';
import {paths} from "@/config/paths.ts";
import {useEffect, useState} from "react";
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

    useEffect(() => {
        setEmail(defaultEmail);
    }, [defaultEmail]);

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                login.mutate({email, password});
            }}>
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
