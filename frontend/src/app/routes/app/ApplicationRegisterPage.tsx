import {ContentLayout} from "@/components/layouts/ContentLayout";
import {RegisterForm} from "@/features/applications/components/RegisterForm";
import {paths} from "@/config/paths";
import {useNavigate} from "react-router";
import {useQueryClient} from "@tanstack/react-query";

function ApplicationRegisterPage() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    return (
        <ContentLayout title="申請登録">
            <RegisterForm
                onSuccess={(id: string) => {
                    navigate(paths.app.applicationCheck.path, {state: {id}, replace: true});
                }}
                onBack={() => {
                    queryClient.invalidateQueries(({queryKey: ['applications']}));
                    navigate(paths.app.applications.path, {replace: true});
                }}/>
        </ContentLayout>
    );
}

export default ApplicationRegisterPage;
