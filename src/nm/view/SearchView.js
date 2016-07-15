import View from "../../nju/view/View";

import SuggestView from "./SuggestView";

import SearchViewController from "./SearchViewController";

export default class SearchView extends View
{
    init()
    {
        super.init();

        this._text = null;
        this.addStyleClass("nm-search-view");

        this.$element.append(`<span class="icon iconfont icon-search"></span>`);
        this.$input = $(`<input type="search" placeholder="搜索音乐" />`);
        this.$element.append(this.$input);

        this._initSuggestView();

        this.$element.on("input", this._input.bind(this));
        this.$element.on("keydown", this._keydown.bind(this));
        this.$element.on("click", ".icon", this._item_onclick.bind(this));
    }

    get text()
    {
        return this.$input.val();
    }
    set text(value)
    {
        this.$input.val(typeof(value) === "string" ? value.trim() : "");
    }

    _initSuggestView()
    {
        this.suggestView = new SuggestView("nm-suggest");
        this.addSubview(this.suggestView);
    }

    search(text = this.text)
    {
        this.text = text;
        if (this.text !== "")
        {
            this.trigger("search");
        }
    }

    _input(e)
    {
        this.trigger("input");
    }

    _item_onclick(e)
    {
        this.search();
    }

    _keydown(e)
    {
        if (e.keyCode === 13)
        {
            this.search();
        }
    }
}
