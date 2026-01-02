import {useApplications} from "@/features/applications/hooks/use-applications";
import {Link} from "react-router";
import {paths} from "@/config/paths";


export const ApplicationTable = () => {

    const {data, isLoading, error} = useApplications();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Failed to load applications</p>;
    }

    return (
        <div>
            <table border={1} cellPadding={8}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>タイトル</th>
                    <th>ステータス</th>
                </tr>
                </thead>

                <tbody>
                {data?.map((app) => (
                    <tr key={app.id}>
                        <td>{app.id}</td>
                        <td>{app.title}</td>
                        <td>{app.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div>
                <Link to={paths.app.register.getHref()}>
                    Register
                </Link>
            </div>
        </div>
    );
};
