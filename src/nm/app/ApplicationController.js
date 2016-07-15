import NJUApplicationController from "../../nju/app/ApplicationController";

import Application from "./Application.js";
import ServiceClient from "../service/ServiceClient";

export default class ApplicationController extends NJUApplicationController
{
    init()
    {
        super.init();
        this._playLists = [];
        this._activePlayList = null;
        this._activeTrack = null;
    }

    get playLists()
    {
        return this._playLists;
    }
    set playLists(value)
    {
        this._playLists = value;
        this._onPlayListsChanged();
    }

    get activePlayList()
    {
        return this._activePlayList;
    }
    set activePlayList(value)
    {
        if (this.activePlayList !== value)
        {
            this._activePlayList = value;
            this._onActivePlayListChanged();
        }
    }

    get activeTrack()
    {
        return this._activeTrack;
    }
    set activeTrack(value)
    {
        if (this.activeTrack !== value)
        {
            this._activeTrack = value;
            this._onActiveTrackChanged();
        }
    }

    createApplication()
    {
        const application = new Application();

        this.playerView = application.playerView;
        this.playListView = application.playListView;
        this.playListView.on("selectionchanged", this._playListView_selectionchanged.bind(this));
        this.searchView = application.searchView;
        this.searchView.on("search", this._searchView_search.bind(this));
        this.trackTableView = application.trackTableView;
        this.trackTableView.on("itemdblclick", this._trackTableView_itemdblclick.bind(this));
        return application;
    }

    async _playListView_selectionchanged(e)
    {
        if (this.playListView.selectedId)
        {
            this.activePlayList = await ServiceClient.getInstance().getPlayListDetail(this.playListView.selectedId);
        }
        else
        {
            this.activePlayList.selectedId = null;
        }
    }

    async run()
    {
        console.log("The app is running.");

        try
        {
            await ServiceClient.getInstance().login();
            await this._loadUserPlayList();
        }
        catch (e)
        {
            throw e;
        }
    }

    async _loadUserPlayList()
    {
        this.playLists = await ServiceClient.getInstance().getUserPlayLists();
        if (this.playLists.length > 0)
        {
            this.playListView.selection = this.playLists[0];
        }
    }

    _onPlayListsChanged()
    {
        this.playListView.items = this.playLists;
    }

    _onActivePlayListChanged()
    {
        if (this.activePlayList !== null)
        {
            if (this.activePlayList.id)
            {
                this.playListView.selectedId = this.activePlayList.id;
            }
            else
            {
                this.playListView.selection = null;
            }
            this.trackTableView.items = this.activePlayList.tracks;
        }
        else
        {
            this.playListView.selectedId = null;
            this.trackTableView.items = [];
        }
    }

    _onActiveTrackChanged()
    {
        if (this.activeTrack !== null)
        {
            this.playerView.track = this.activeTrack;
        }
        else
        {
            this.playerView.track = null;
        }
    }

    _trackTableView_itemdblclick()
    {
        this.activeTrack = this.trackTableView.selection;
    }

    async _searchView_search()
    {
        const songs = await ServiceClient.getInstance().search(this.searchView.text);
        this.activePlayList = {
            tracks: songs,
        };

    }
}
