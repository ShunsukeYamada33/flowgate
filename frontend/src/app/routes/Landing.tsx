import {useUser} from "@/lib/Auth";
import {paths} from "@/config/paths";
import {useNavigate} from "react-router";
import {ROLES} from "@/constants/user-role";

const Landing = () => {
    const navigate = useNavigate();
    const user = useUser();

    const handleStart = () => {
        if (user.data) {
            if (user.data.role === ROLES.ADMIN) {
                navigate(paths.app.applications.getHref()); // 管理者用ページがあればそこへ
            } else if (user.data.role === ROLES.APPROVER) {
                navigate(paths.app.applications.getHref()); // 承認者用ページがあればそこへ
            } else {
                navigate(paths.app.applications.getHref());
            }
        } else {
            navigate(paths.auth.login.getHref());
        }
    };

    return (
        <button onClick={handleStart}>Start</button>
    );
};

export default Landing;