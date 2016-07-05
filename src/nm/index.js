import config from "../../config";
import TrackListView from "./view/TrackListView";


$(main);

function main()
{
    const trackListView = new TrackListView();
    $(document.body).append(trackListView.$element);


    $.ajax({
        url: `http://music.163.com/api/playlist/detail?id=${config.playlist_id}`
    }).then(res => {
        const tracks = res.result.tracks;
        trackListView.tracks = tracks;
    })
}