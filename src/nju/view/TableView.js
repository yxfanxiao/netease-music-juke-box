import ListView from "./ListView";

export default class TableView extends ListView
{
    init()
    {
        super.init();

        this.removeStyleClass("nju-list-view");
        this.addStyleClass("nju-table-view");

        this._initLayout();
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

    $createNewItem(itemType = 0)
    {
        return $(`<tr />`);
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
}
