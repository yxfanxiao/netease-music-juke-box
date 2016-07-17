import ManagedObject from "../base/ManagedObject.js";
import View from "./View";

export default class ViewController extends ManagedObject
{
    constructor(id, options = {})
    {
        super(id);
        this._view = this.createView(options);
        this.initView(options);
    }

    get view()
    {
        return this._view;
    }

    createView({ viewId = null } = {})
    {
        return new View(viewId);
    }

    applyViewOptions(options = {})
    {
        for (let key in options)
        {
            this.view[key] = options[key];
        }
    }

    initView(options)
    {
        this.applyViewOptions(options);
    }
}
