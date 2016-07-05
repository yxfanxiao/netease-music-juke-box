export default class TrackListView
{
    constructor()
    {
        this._tracks = [];

        this.$element = $(`<ul class="nm-track-list-view"></ul>`);
    }

    get tracks()
    {
        return this._tracks;
    }

    set tracks(tracks)
    {
        this._tracks = tracks;
        this.removeTracks();
        this.addTracks(this._tracks);
    }

    removeTracks()
    {
        this.$element.children("li").remove();
    }

    addTracks(tracks)
    {
        if (!Array.isArray(tracks)) {
            return;
        }
        tracks.forEach(track => {
            const $li = $(`
                <li>
                    <a href=${track.mp3Url}>
                        <p class="name">${track.name}</p>
                    </a> 
                </li>
            `);
            this.$element.append($li);
        });
    }
}