import ManagedObjected from "../base/ManagedObject.js";

export default class View extends ManagedObjected
{
    init()
    {
        super.init();

        this._subviews = [];
        this.$element = $(`<${this.getElementTag()} />`);
        if (this.id !== null)
        {
            this.$element.attr("id", this.id);
        }
        this.$container = this.$element;
    }

    getElementTag()
    {
        return "div";
    }

    addSubview(view, $container = this.$container)
    {
        if (view instanceof View)
        {
            if (view.parent)
            {
                view.removeFromParent();
            }
            view._parent = this;
            this._subviews.push(view);
            view.placeAt($container);
        }
    }

    removeSubview(view, neverUseAgain = false)
    {
        const index = this.subviews.indexOf(view);
        if (index > -1)
        {
            view._parent = null;
            this.subviews.splice(index, 1);
            if (neverUseAgain)
            {
                view.$element.remove();
            }
            else
            {
                view.$element.detach();
            }
        }
    }

    addSubviews(views, $container = this.$container)
    {
        if (Array.isArray(views))
        {
            views.forEach(view => {
                this.addSubview(view, $container);
            });
        }
    }

    removeAllSubviews(neverUseAgain = false)
    {
        while (this.subviews.length > 0)
        {
            this.removeSubview(this.subviews[0], neverUseAgain);
        }
    }

    removeFromParent()
    {
        if (this.parent)
        {
            this.parent.removeSubview(this);
        }
    }

    placeAt(target)
    {
        const $target = target instanceof $ ? target : $(target);
        $target.append(this.$element);
    }

    addStyleClass(...args)
    {
        this.$element.addClass(...args);
    }

    removeStyleClass(...args)
    {
        this.$element.removeClass(...args);
    }

    toggleStyleClass(...args)
    {
        this.$element.toggleClass(...args);
    }

    get subviews()
    {
        return this._subviews;
    }

    $(...args)
    {
        return this.$element.find(...args);
    }
}
