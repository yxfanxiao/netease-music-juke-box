import Application from "./app/Application";

import ServiceClient from "./service/ServiceClient";

$(main);

function main()
{
    ServiceClient.getInstance().getUserPlayLists().then(res => {
        console.log(res);
    });
    ServiceClient.getInstance().getPlayListDetail().then(res => {
        console.log(res);
    });
    


    const app = new Application();

    app.placeAt(document.body);
    app.run();
}