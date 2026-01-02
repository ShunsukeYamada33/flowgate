import {ContentLayout} from "@/components/layouts/ContentLayout";
import {RegisterForm} from "@/features/applications/components/RegisterForm";

function ApplicationRegisterPage() {

    return (
        <ContentLayout title="申請登録">
            <RegisterForm onSuccess={() => {}}/>
        </ContentLayout>
    );
}

export default ApplicationRegisterPage;
