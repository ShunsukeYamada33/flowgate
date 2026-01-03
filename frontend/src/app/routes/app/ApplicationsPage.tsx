import {ApplicationTable} from "@/features/applications/components/ApplicationTable";
import {ContentLayout} from "@/components/layouts/ContentLayout";
import {useNavigate} from "react-router";
import {paths} from "@/config/paths";
import type {Application} from "@/features/applications/types";
import {useQueryClient} from "@tanstack/react-query";

function ApplicationsPage() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    return (
        <ContentLayout title="申請一覧">
            <ApplicationTable onCheck={(app: Application) => {
                const id = app.id;
                queryClient.invalidateQueries(({queryKey: ['applicationCheck', id]}));
                if (app.status === 'draft' || app.status === 'returned') {
                    navigate(
                        paths.app.applicationEdit.path,
                        {
                            state: {id}
                        }
                    )
                } else {
                    navigate(
                        paths.app.applicationCheck.path,
                        {
                            state: {id}
                        }
                    )
                }
            }}/>
        </ContentLayout>
    );
}

export default ApplicationsPage;
