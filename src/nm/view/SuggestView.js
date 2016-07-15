import ListView from "../../nju/view/ListView.js";

export default class SuggestView extends ListView
{
    init()
    {
        super.init();

        this.addStyleClass("nm-suggest-view");
    }

    $createNewItem()
    {
        const $li = super.$createNewItem();

        $li.append(`
            <div class="music"></div>
        `);
        return $li;
    }

    renderItem(item, $li)
    {
        super.renderItem(item, $li);
        $li.children(".music").text(item.name);
    }
}
