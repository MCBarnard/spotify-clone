import "../../css/SongRown.css";

function SongRow({ track = "test" }) {
    return <div className="song-row">
        <img className="song-row_album" src={track.album.images[0].url}/>
        <div className="song-row_info">
            <h1>{track.name}</h1>
            <p>
                {track.artists.map(artist => artist.name).join(", ")}
                {track.album.name}
            </p>
        </div>
    </div>
}

export default SongRow;
