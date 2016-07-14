import View from "../../nju/view/View.js";

export default class PlayerView extends View
{
    init()
    {
        super.init();

        this.$track = null;
        this._track = null;
        this.addStyleClass("nm-player-view");
        this._initLayout();
    }

    get track()
    {
        return this._track;
    }
    set track(value)
    {
        this.selectTrack(value);
    }

    _initLayout()
    {
        this.$track = $(`<${this.getElementTag()} />`);

        this.$container.append(this.$track);
    }

    selectTrack(track)
    {
        if (this.track === track)
        {
            return;
        }
        this.renderTrack(track, this.$track);
    }

    renderTrack(track, $track)
    {
        if (track && track.name)
        {
            $track.text(track.name);
        }
    }

    getElementTag()
    {
        return "span";
    }
}
