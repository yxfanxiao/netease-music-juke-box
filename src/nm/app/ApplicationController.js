import NJUApplicationController from "../../nju/app/ApplicationController";

import Application from "./Application.js";
import ServiceClient from "../service/ServiceClient";

export default class ApplicationController extends NJUApplicationController
{
    createApplication()
    {
        // const appplication = super.createApplication();
        const application = new Application();
        this.playListView = application.playListView;
        this.trackTableView = application.trackTableView;
        return application;
    }


    async run()
    {
        console.log("The app is running.");

        try
        {
            await ServiceClient.getInstance().login();
            this.playListView.items = await ServiceClient.getInstance().getUserPlayLists();
            this.playListView.selection = this.playListView.items[0];

            const playList = await ServiceClient.getInstance().getPlayListDetail(this.playListView.items[10].id);
            this.trackTableView.items = playList.tracks;
        }
        catch (e)
        {
            throw e;
        }
    }
}
