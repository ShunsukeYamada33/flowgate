import {ContentLayout} from "@/components/layouts/ContentLayout";
import {paths} from "@/config/paths.ts";
import {useNavigate} from "react-router";
import {useLocation} from "react-router-dom";
import {CheckForm} from "@/features/applications/components/CheckForm.tsx";

function ApplicationCheckPage() {
    const navigate = useNavigate();
    const location = useLocation()
    const id = location.state?.id ?? '';

    return (
        <ContentLayout title="申請確認">
            <CheckForm
                onSuccess={() => {
                    navigate(paths.app.applications.path)
                }}
                id={id}
            />
        </ContentLayout>
    );
}

export default ApplicationCheckPage;
