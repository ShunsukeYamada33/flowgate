import {AuthLayout} from '@/components/layouts/AuthLayout';
import {useNavigate} from "react-router";
import {paths} from "@/config/paths";
import {RegisterForm} from "@/features/auth/components/RegisterForm";

function RegisterPage() {
    const navigate = useNavigate();

    return (
        <AuthLayout title="ユーザー登録">
            <RegisterForm
                onSuccess={(email) => {
                    console.log(email);
                    console.log(paths.auth.login.getHref());
                    navigate(
                        paths.auth.login.path,
                        {
                            state: {email}
                        }
                    );
                }}
            />
        </AuthLayout>
    );
}

export default RegisterPage
