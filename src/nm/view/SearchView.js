import View from "../../nju/view/View";

export default class SearchView extends View
{
    init()
    {
        super.init();

        this._text = null;
        this.addStyleClass("nm-search-view");

        this.$element.append(`<span class="icon"></span>`);
        this.$input = $(`<input type="search" />`);
        this.$element.append(this.$input);

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

    search(text = this.text)
    {
        this.text = text;
        if (this.text !== "")
        {
            this.trigger("search");
        }
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
