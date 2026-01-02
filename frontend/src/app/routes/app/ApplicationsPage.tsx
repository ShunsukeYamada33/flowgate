import {ApplicationTable} from "@/features/applications/components/ApplicationTable";
import {ContentLayout} from "@/components/layouts/ContentLayout";

function ApplicationsPage() {

    return (
        <ContentLayout title="申請一覧">
            <ApplicationTable/>
        </ContentLayout>
    );
}

export default ApplicationsPage;
