import {ContentLayout} from "@/components/layouts/ContentLayout";
import {paths} from "@/config/paths";
import {useNavigate} from "react-router";
import {useLocation} from "react-router-dom";
import {EditForm} from "@/features/applications/components/EditForm";
import {useQueryClient} from "@tanstack/react-query";

function ApplicationEditPage() {
    const navigate = useNavigate();
    const location = useLocation()
    const queryClient = useQueryClient();
    const id = location.state?.id ?? '';

    return (
        <ContentLayout title="申請修正">
            <EditForm
                onSuccess={() => {
                    queryClient.invalidateQueries(({queryKey: ['applications']}));
                    navigate(paths.app.applications.path)
                }}
                onBack={() => {
                    queryClient.invalidateQueries(({queryKey: ['applications']}));
                    navigate(paths.app.applications.path)
                }}
                id={id}
            />
        </ContentLayout>
    );
}

export default ApplicationEditPage;
