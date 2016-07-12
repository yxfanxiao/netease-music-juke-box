import View from "./View";

export default class ListView extends View
{
    init()
    {
        super.init();

        this._items = null;
        this._$liTemplates = [];
        this.addStyleClass("nju-list-view");
    }

    get items()
    {
        return this._items;
    }

    set items(value)
    {
        this.clearItems();
        this.addItems(value);
    }

    clearItems()
    {
        if (this._items !== null)
        {
            if (this._items.length > 0)
            {
                this._items.splice(0, this._items.length);
                this.$container.children().remove();
            }
        }
        else
        {
            this._items = [];
        }
    }

    addItems(items)
    {
        if (items && items.length)
        {
            items.map((item) => {
                this.addItem(item);
            });
        }

    }

    addItem(item)
    {
        this.items.push(item);
        const $item = this.$createItem(this.getTypeOfItem(item));
        this.renderItem(item, $item);
        this.$container.append($item);
    }

    getTypeOfItem(item)
    {
        return 0;
    }

    renderItem(item, $li)
    {

    }

    $createItem(itemType = 0)
    {
        if (!this._$liTemplates[itemType])
        {
            this._$liTemplates[itemType] = this.$createNewItem(itemType);
        }
        return this._$liTemplates[itemType].clone();
    }

    $createNewItem()
    {
        return $("<li />");
    }

    getElementTag()
    {
        return "ul";
    }
}
