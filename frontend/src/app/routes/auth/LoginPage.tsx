import {AuthLayout} from '@/components/layouts/AuthLayout';
import {LoginForm} from '@/features/auth/components/LoginForm';
import {useNavigate} from "react-router";
import {paths} from "@/config/paths";
import {useLocation} from "react-router-dom";
import {ROLES} from "@/constants/user-role";

function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const defaultEmail = location.state?.email ?? '';

    return (
        <AuthLayout title="ログイン">
            <LoginForm
                onSuccess={(role) => {
                    if (role === ROLES.ADMIN) {
                        navigate(paths.app.applications.path, {replace: true});
                    } else if (role === ROLES.APPROVER) {
                        navigate(paths.app.applications.path, {replace: true});
                    } else {
                        navigate(paths.app.applications.path, {replace: true});
                    }
                }}
                defaultEmail={defaultEmail}
            />
        </AuthLayout>
    );
}

export default LoginPage
