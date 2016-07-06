import NJUApplication from "../../nju/app/Application.js";

export default class Application extends NJUApplication
{
    init()
    {
        super.init();
        this.addStyleCalss("nm-application");
    }

    run()
    {
        console.log("The app is running.");
    }
}