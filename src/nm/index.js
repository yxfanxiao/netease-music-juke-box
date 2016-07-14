import ApplicationController from "./app/ApplicationController";

// import ServiceClient from "./service/ServiceClient";

$(main);

function main()
{
    // ServiceClient.getInstance().getUserPlayLists().then(res => {
    //     console.log(res);
    // });
    // ServiceClient.getInstance().getPlayListDetail().then(res => {
    //     console.log(res);
    // });



    const applicationController = new ApplicationController();

    applicationController.view.placeAt(document.body);
    applicationController.run();
}
