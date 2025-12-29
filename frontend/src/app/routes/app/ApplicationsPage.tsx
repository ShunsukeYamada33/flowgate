import {useApplications} from "@/features/applications/hooks/useApplications";

export default function ApplicationsPage() {
    const {data, isLoading, error} = useApplications();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Failed to load applications</p>;
    }

    return (
        <div>
            <h1>申請一覧</h1>

            <table border={1} cellPadding={8}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>タイトル</th>
                    <th>ステータス</th>
                    <th>作成日</th>
                </tr>
                </thead>

                <tbody>
                {data?.map((app) => (
                    <tr key={app.id}>
                        <td>{app.id}</td>
                        <td>{app.title}</td>
                        <td>{app.status}</td>
                        <td>{new Date(app.createdAt).toLocaleDateString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
