import NJUApplication from "../../nju/app/Application";

import PlayerView from "../view/PlayerView";
import PlayListView from "../view/PlayListView";
import TrackTableView from "../view/TrackTableView";
import ServiceClient from "../service/ServiceClient";

export default class Application extends NJUApplication
{
    init()
    {
        super.init();
        this.addStyleClass("nm-app");

        this._initLayout();
        this._initPlayListView();
        this._initTrackTableView();
    }

    _initLayout()
    {
        this.$element.append(`
            <header><h1>网易云音乐</h1></header>
            <main>
                <aside class="sidebar"></aside>
                <section class="content"></section>
            </main>
            <footer></footer>
        `);
    }

    _initPlayListView()
    {
        this.playListView = new PlayListView("play-list");
        this.addSubview(this.playListView, this.$("> main > aside"));
    }

    _initTrackTableView()
    {
        this.trackTableView = new TrackTableView("track-table-view");
        this.addSubview(this.trackTableView, this.$("> main > .content"));
    }


    async run()
    {
        console.log("The app is running.");

        try
        {
            await ServiceClient.getInstance().login();
            this.playListView.items = await ServiceClient.getInstance().getUserPlayLists();

            const playList = await ServiceClient.getInstance().getPlayListDetail(this.playListView.items[10].id);
            this.trackTableView.items = playList.tracks;
            console.log(playList.tracks);
        }
        catch (e)
        {
            throw e;
        }
    }
}
