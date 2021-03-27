import "../css/Dashboard.css";
import Sidebar from "../components/layouts/Sidebar";
import Body from "../components/layouts/Body";
import Footer from "../components/layouts/Footer";

function Dashboard({ spotify }) {
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar />
                <Body spotify={spotify} />
            </div>
            <Footer/>
        </div>
    )
}

export default Dashboard;
