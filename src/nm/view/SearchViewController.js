import ViewController from "../../nju/view/ViewController";

import SearchView from "./SearchView";
import ServiceClient from "../service/ServiceClient";


export default class SearchViewController extends ViewController
{

    createView({ viewId = null } = options)
    {
        return this.searchView = new SearchView(viewId);
    }

    initView(options)
    {
        super.initView(options);

        this.searchView.on("input", this._searchView_onInput.bind(this));
        this.searchView.on("focus", this._searchView_onFocus.bind(this));
        this.searchView.on("blur", this._searchView_onBlur.bind(this));

        this.suggestView = this.searchView.suggestView;
        this.suggestView.on("itemclick", this._suggestView_onitemclick.bind(this));
    }

    async _searchView_onInput(e)
    {
        const { text, suggest } = e.parameters;
        const songs = await ServiceClient.getInstance().search(text, true);
        this.suggestView.items = songs;
        this.suggestView.toggle(songs && songs.length > 0);
    }

    async _suggestView_onitemclick(e)
    {
        const keyword = e.parameters.item.name;
        this.view.search(keyword);
    }

    _searchView_onFocus()
    {
        this.suggestView.show();
    }

    _searchView_onBlur()
    {
        this.suggestView.hide();
    }
}
