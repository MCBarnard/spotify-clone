import "../../css/Body.css";
import Header from "../secondary/Header";
import { useDataLayerValue } from "../../DataLayer";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from "../secondary/SongRow";
import {useEffect, useState} from "react";

function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    const [userImage, setUserImage] = useState("");

    useEffect(() => {
        if (typeof discover_weekly.images !== "undefined") {
            setUserImage(discover_weekly?.images[0].url);
        }
    }, [discover_weekly]);
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body-info">
                {userImage && <img src={userImage} alt=""/>}
                <div className="body_info-text">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon className="body_shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                { discover_weekly?.tracks?.items.map( item => (
                    <SongRow track={item.track} />
                )) }
            </div>
        </div>
    )
}

export default Body;
