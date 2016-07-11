import config from "../../../config";

export default class ServiceClient
{
    getUserPlayLists(uid = config.user_id)
    {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `/api/user/playlist/`,
                data: {
                    uid,
                    limit: 1000,
                    offset: 0,
                },
            }).then(res => {
                if (res.code === 200)
                {
                    resolve(res.playlist);
                }
                else
                {
                    reject(`Response with error code: ${res.code}`);
                }
            }, reject);
        });
    }

    getPlayListDetail(id = config.playlist_id)
    {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `/api/playlist/detail`,
                data: {
                    id,
                },
            }).then(res => {
                if (res.code === 200)
                {
                    resolve(res.result);
                }
                else
                {
                    reject(`Response with error code: ${res.code}`);
                }
            }, reject);
        });
    }
}


let __instance = null;
ServiceClient.getInstance = () => __instance || new ServiceClient();
