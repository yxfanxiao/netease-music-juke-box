import TableView from "../../nju/view/TableView";
import TimeUtil from "../../nju/util/TimeUtil";

export default class TrackTableView extends TableView
{
    init()
    {
        super.init();
        this.addStyleClass("track-table-view striped");
    }

    renderHeadItem($tr)
    {
        super.renderHeadItem($tr);
        $tr.children(".name").text("歌名");
        $tr.children(".artist").text("歌手");
        $tr.children(".album").text("专辑");
        $tr.children(".duration").text("时长");
    }

    $createNewItem()
    {
        const $tr = super.$createNewItem();
        $tr.append(`
            <td class="name"></td>
            <td class="artist"></td>
            <td class="album"></td>
            <td class="duration"></td>
        `);
        return $tr;
    }

    renderItem(item, $li)
    {
        super.renderItem(item, $li);
        $li.children(".name").text(item.name);
        $li.children(".artist").text(item.artists.map(artist => artist.name).join(", "));
        $li.children(".album").text(item.album.name);

        let duration = 0;
        if (item.lMusic)
        {
            duration = item.lMusic.playTime;
        }
        else
        {
            duration = item.duration;
        }
        $li.children(".duration").text(TimeUtil.format(duration));
    }
}
