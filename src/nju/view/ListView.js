import View from "./View";

export default class ListView extends View
{
    init()
    {
        super.init();

        this._items = null;
        this._selection = null;
        this._$liTemplates = [];
        this.addStyleClass("nju-list-view");

        this._initLayout();
        this.$container.on("click", this.getItemElementTag(), this._onclick.bind(this));
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

    get selection()
    {
        return this._selection;
    }
    set selection(value)
    {
        this.selectItem(value);
    }

    _initLayout()
    {

    }

    clearItems()
    {
        if (this._items !== null)
        {
            if (this._items.length > 0)
            {
                this._items.splice(0, this._items.length);
                this.$container.children(this.getItemElementTag()).remove();
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

    selectItem(item = null)
    {
        if (this.selectItem === item)
        {
            return;
        }
        if (this.selection !== null)
        {
            this.$getItem(this.selection).removeClass("selected");
            this._selection = null;
        }

        this._selection = item;
        if (item)
        {
            const $item = this.$getItem(item);
            console.log($item);
            $item.addClass("selected");

            console.log(item)

        }
    }

    getIdOfItem(item)
    {
        return item.id;
        // throw new Error("Must implement getIdOfItem(itme) in derived class");
    }











    getTypeOfItem(item)
    {
        return 0;
    }

    renderItem(item, $item)
    {
        $item.data("item", item);
        $item.attr("id", "i-" + this.getIdOfItem(item));
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
        return $(`<${this.getItemElementTag()} />`);
    }

    $getItem(item)
    {
        const id = this.getIdOfItem(item);
        return this.$container.children("#i-" + id);
    }

    getElementTag()
    {
        return "ul";
    }

    getItemElementTag()
    {
        return "li";
    }



    _onclick(e)
    {
        const $target = $(e.currentTarget);
        const item = $target.data("item");
        this.selectItem(item);
    }
}
