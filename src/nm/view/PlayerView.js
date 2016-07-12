import View from "../../nju/view/View.js";

export default class PlayerView extends View
{
    constructor(...args)
    {
        super(...args);
    }

    init()
    {
        super.init();
        this.addStyleClass("nm-player-view");
    }
}
