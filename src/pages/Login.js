import "../css/Login.css";
import { loginUrl } from "../lib/spotify";

function Login () {
    return (
        <div className="login">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
            <a className="" href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login;
