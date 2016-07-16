import NJUApplication from "../../nju/app/Application";

import PlayerView from "../view/PlayerView";
import PlayListView from "../view/PlayListView";
// import SearchView from "../view/SearchView";
import SearchViewController from "../view/SearchViewController";
import TrackTableView from "../view/TrackTableView";


export default class Application extends NJUApplication
{
    init()
    {
        super.init();
        this.addStyleClass("nm-app");

        this._initLayout();

        this._initPlayerView();
        this._initPlayListView();
        this._initSearchViewController();
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

    _initPlayerView()
    {
        this.playerView = new PlayerView("player-view");
        this.addSubview(this.playerView, this.$("> footer"));
    }

    _initPlayListView()
    {
        this.playListView = new PlayListView("play-list");
        this.addSubview(this.playListView, this.$("> main > aside"));
    }

    _initSearchViewController()
    {
        this.searchViewController = new SearchViewController("search-view-controller", {
            viewId: "search-view"
        });
        this.searchView = this.searchViewController.view;
        this.addSubview(this.searchView, this.$("> header"));
    }

    _initTrackTableView()
    {
        this.trackTableView = new TrackTableView("track-table-view");
        this.addSubview(this.trackTableView, this.$("> main > .content"));
    }

}
