import {ApplicationTable} from "@/features/applications/components/ApplicationTable";
import {ContentLayout} from "@/components/layouts/ContentLayout";
import {useNavigate} from "react-router";
import {paths} from "@/config/paths.ts";

function ApplicationsPage() {
    const navigate = useNavigate();

    return (
        <ContentLayout title="申請一覧">
            <ApplicationTable onCheck={(id: string) => {
                navigate(
                    paths.app.applicationCheck.path,
                    {
                        state: {id}
                    }
                )
            }}/>
        </ContentLayout>
    );
}

export default ApplicationsPage;
