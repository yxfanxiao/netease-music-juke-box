import ListView from "./ListView";

export default class TableView extends ListView
{
    init()
    {
        super.init();

        this.removeStyleClass("nju-list-view");
        this.addStyleClass("nju-table-view");

        this.$container.on("dblclick", this.getItemElementTag(), this._ondblclick.bind(this));
    }

    _initLayout()
    {
        this.$head = $(`<thead />`);
        this.$headItem = this.$createHeadItem();
        this.renderHeadItem(this.$headItem);

        this.$head.append(this.$headItem);
        this.$element.append(this.$head);

        this.$container = $(`<tbody />`);
        this.$element.append(this.$container);
    }

    $createHeadItem()
    {
        return this.$createNewItem();
    }

    renderHeadItem($headItem)
    {
        return this.$createNewItem();
    }

    getElementTag()
    {
        return "table";
    }

    getItemElementTag()
    {
        return "tr";
    }

    _ondblclick(e)
    {
        this.trigger("itemdblclick");
    }
}
