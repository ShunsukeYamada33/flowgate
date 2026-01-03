import {AuthLayout} from '@/components/layouts/AuthLayout';
import {LoginForm} from '@/features/auth/components/LoginForm';
import {useNavigate} from "react-router";
import {paths} from "@/config/paths";
import {useLocation} from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const defaultEmail = location.state?.email ?? '';

    return (
        <AuthLayout title="ログイン">
            <LoginForm
                onSuccess={() => {
                    navigate(
                        paths.home.path,
                        {replace: true, state: {refresh: true}},
                    );
                }}
                defaultEmail={defaultEmail}
            />
        </AuthLayout>
    );
}

export default LoginPage
