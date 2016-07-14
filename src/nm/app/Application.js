import NJUApplication from "../../nju/app/Application";

import PlayerView from "../view/PlayerView";
import PlayListView from "../view/PlayListView";
import TrackTableView from "../view/TrackTableView";

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
}
