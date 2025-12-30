import {ApplicationTable} from "@/features/applications/components/ApplicationTable.tsx";
import {ContentLayout} from "@/components/layouts/ContentLayout.tsx";

function ApplicationsPage() {

    return (
        <ContentLayout title="申請一覧">
            <ApplicationTable/>
        </ContentLayout>
    );
}

export default ApplicationsPage;
