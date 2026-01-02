import {ContentLayout} from "@/components/layouts/ContentLayout";
import {RegisterForm} from "@/features/applications/components/RegisterForm";
import {paths} from "@/config/paths.ts";
import {useNavigate} from "react-router";

function ApplicationRegisterPage() {
    const navigate = useNavigate();

    return (
        <ContentLayout title="申請登録">
            <RegisterForm onSuccess={() => {
                navigate(paths.app.applications.path);
            }}/>
        </ContentLayout>
    );
}

export default ApplicationRegisterPage;
