import {AuthLayout} from '@/components/layouts/AuthLayout';
import {LoginForm} from '@/features/auth/components/LoginForm.tsx';
import {useNavigate, useSearchParams} from "react-router";
import {paths} from "@/config/paths.ts";
import {useLocation} from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const redirectTo = searchParams.get('redirectTo');
    const location = useLocation();
    const defaultEmail = location.state?.email ?? '';

    return (
        <AuthLayout title="ログイン">
            <LoginForm
                onSuccess={() => {
                    navigate(
                        redirectTo ?? paths.app.dashboard.getHref(),
                        {replace: true}
                    );
                }}
                defaultEmail={defaultEmail}
            />
        </AuthLayout>
    );
}

export default LoginPage
