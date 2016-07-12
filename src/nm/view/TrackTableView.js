import TableView from "../../nju/view/TableView.js";

export default class TrackTableView extends TableView
{
    init()
    {
        super.init();
        this.addStyleClass("track-table-view");
    }

    // $createHeadItem()
    // {
    //     const $tr = super.$createHeadItem();
    //     // $tr.append(`
    //     //     <td class="name">歌名</td>
    //     //     <td class="artist">歌手</td>
    //     //     <td class="album">专辑</td>
    //     // `);
    //
    //
    //
    //     // const $tr = this.$createNewItem();
    //     // $tr.children(".name").text("歌名");
    //     // $tr.children(".artist").text("歌手");
    //     // $tr.children(".album").text("专辑");
    //     return $tr;
    // }

    renderHeadItem($tr)
    {
        this.renderItem({
            name: "歌名",
            artists: [{ name: "歌手" }],
            album: {
                name: "专辑",
            },
        }, $tr);
    }

    $createNewItem()
    {
        const $tr = super.$createNewItem();
        $tr.append(`
            <td class="name"></td>
            <td class="artist"></td>
            <td class="album"></td>
        `);
        return $tr;
    }

    renderItem(item, $li)
    {
        super.renderItem(item, $li);
        $li.children(".name").text(item.name);
        $li.children(".artist").text(item.artists.map(artist => artist.name).join(", "));
        $li.children(".album").text(item.album.name);

    }
}
