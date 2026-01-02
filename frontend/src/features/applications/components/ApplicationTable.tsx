import {useApplications} from "@/features/applications/hooks/use-applications";
import {Link} from "react-router";
import {paths} from "@/config/paths";
import {APPLICATION_STATUS_LABEL_MAP} from "@/constants/application-status.ts";


type ApplicationTableProps = {
    onCheck: (id: string) => void;
}

export const ApplicationTable = ({onCheck}: ApplicationTableProps) => {
    const {data, isLoading, error} = useApplications();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Failed to load applications</p>;
    }

    const handleSubmit = async (id: string) => {
        onCheck(id)
    }

    return (
        <div>
            <table border={1} cellPadding={8}>
                <thead>
                <tr>
                    <th>タイトル</th>
                    <th>コンテンツ</th>
                    <th>ステータス</th>
                </tr>
                </thead>

                <tbody>
                {data?.map((app) => (
                    <tr key={app.id}>
                        <td>{app.title}</td>
                        <td>{app.content}</td>
                        <td>{APPLICATION_STATUS_LABEL_MAP[app.status]}</td>
                        <td>
                            <button type={"submit"} onSubmit={() => handleSubmit(app.id)}>確認</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div>
                <Link to={paths.app.applicationRegister.getHref()}>
                    新規登録
                </Link>
            </div>
        </div>
    );
};
