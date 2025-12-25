import {AuthLayout} from '@/components/layouts/AuthLayout';
import {useNavigate, useSearchParams} from "react-router";
import {paths} from "@/config/paths.ts";
import {RegisterForm} from "@/features/auth/components/RegisterForm.tsx";

function RegisterPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const redirectTo = searchParams.get('redirectTo');

    return (
        <AuthLayout title="ユーザー登録">
            <RegisterForm
                onSuccess={(email) => {
                    navigate(
                        redirectTo ?? paths.auth.login.getHref(),
                        {
                            replace: true,
                            state: {email}
                        }
                    );
                }}
            />
        </AuthLayout>
    );
}

export default RegisterPage
