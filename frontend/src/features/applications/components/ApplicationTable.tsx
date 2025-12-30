import {useApplications} from "@/features/applications/hooks/useApplications.ts";


export const ApplicationTable = () => {

    const {data, isLoading, error} = useApplications();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Failed to load applications</p>;
    }

    return (
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
    );
};
