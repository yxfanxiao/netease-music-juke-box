import ViewController from "../../nju/view/ViewController";

import SearchView from "./SearchView";
import ServiceClient from "../service/ServiceClient";


export default class SearchViewController extends ViewController
{

    createView({ viewId = null } = options)
    {
        this.searchView =  new SearchView(viewId);
        this.suggestView = this.searchView.suggestView;

        this.searchView.on("input", this._searchView_onInput.bind(this));
        this.suggestView.on("itemclick", this._suggestView_onitemclick.bind(this));
        return this.searchView;
    }

    async _searchView_onInput(e)
    {
        const { text, suggest } = e.parameters;
        const songs = await ServiceClient.getInstance().search(text, true);
        this.suggestView.items = songs;
    }

    async _suggestView_onitemclick(e)
    {
        const keyword = e.parameters.item.name;
        this.view.search(keyword);
    }
}
