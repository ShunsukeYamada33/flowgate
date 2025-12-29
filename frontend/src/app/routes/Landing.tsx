import {useUser} from "@/lib/Auth";
import {paths} from "@/config/paths";
import {useNavigate} from "react-router";

const Landing = () => {
    const navigate = useNavigate();
    const user = useUser();

    const handleStart = () => {
        if (user.data) {
            navigate(paths.app.applications.getHref());
        } else {
            navigate(paths.auth.login.getHref());
        }
    };

    return (
        <button onClick={handleStart}>Start</button>
    );
};

export default Landing;