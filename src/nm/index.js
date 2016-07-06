import config from "../../config";
import PlayListView from "./view/PlayListView";
import TrackListView from "./view/TrackListView";
import Panel from "./panel/Panel";

$(main);

function main()
{

    const panel = new Panel("panel");
    panel.title = "Panel Title";

    const playListView = new PlayListView("play-list");

    panel.addSubview(playListView)

    $(document.body).append(panel.$element);


    console.log(panel.parent, playListView.parent);
    
    // playListView.parent.removeSubview();

    // const trackListView = new TrackListView();
    // $(document.body).append(trackListView.$element);


    // $.ajax({
    //     url: `http://music.163.com/api/playlist/detail?id=${config.playlist_id}`
    // }).then(res => {
    //     const tracks = res.result.tracks;
    //     trackListView.tracks = tracks;
    // });
}