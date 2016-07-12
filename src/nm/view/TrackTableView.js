import View from "../../nju/view/View.js";

export default class TrackTableView extends View
{
    init()
    {
        super.init();
        this.addStyleClass("track-table-view");
    }
    //
    // get tracks()
    // {
    //     return this._tracks;
    // }
    //
    // set tracks(tracks)
    // {
    //     this._tracks = tracks;
    //     this.removeTracks();
    //     this.addTracks(this._tracks);
    // }
    //
    // removeTracks()
    // {
    //     this.$element.children("li").remove();
    // }
    //
    // addTracks(tracks)
    // {
    //     if (!Array.isArray(tracks)) {
    //         return;
    //     }
    //     tracks.forEach(track => {
    //         const $li = $(`
    //             <li>
    //                 <a href=${track.mp3Url}>
    //                     <p class="name">${track.name}</p>
    //                 </a>
    //             </li>
    //         `);
    //         this.$element.append($li);
    //     });
    // }
}
