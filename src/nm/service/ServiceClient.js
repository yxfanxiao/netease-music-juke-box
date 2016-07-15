import config from "../../../config";

const NM_API_URI = "/api";

export default class ServiceClient
{

    static _instance = null;

    constructor()
    {
        this._userId = null;
    }

    static getInstance = function()
    {
        return  ServiceClient._instance || new ServiceClient();
    }

    get userId()
    {
        return this._userId;
    }

    async login()
    {
        await this.__pseudoLogin();
    }

    async __pseudoLogin()
    {
        this._userId = config.user_id;
    }

    async getUserPlayLists(uid = config.user_id)
    {
        let res = null;
        try {
            res = await $.ajax({
                url: `${NM_API_URI}/user/playlist/`,
                data: {
                    uid,
                    limit: 1000,
                    offset: 0,
                },
            });
        }
        catch (e)
        {
            throw e;
        }

        if (res.code === 200)
        {
            return res.playlist;
        }
        else
        {
            throw new Error(`Response with error code: ${res.code}`);
        }
    }

    async getPlayListDetail(id = config.playlist_id)
    {
        let res = null;
        try
        {
            res = await $.ajax({
                url: `${NM_API_URI}/playlist/detail`,
                data: {
                    id,
                },
            });
        }
        catch (e)
        {
            throw e;
        }

        if (res.code === 200)
        {
            return res.result;
        }
        else
        {
            throw new Error(`Response with error code: ${res.code}`);
        }
    }

    async search(keyword, suggest = false)
    {
        let res = null;
        try
        {
            res = await $.ajax({
                url: suggest ? `${NM_API_URI}/search/suggest/web/` : `${NM_API_URI}/search/get/`,
                method: "post",
                data: {
                    s: keyword,
                    type: 1,
                    offset: 0,
                    limit: 100,
                    sub: false,
                },
            });
        }
        catch (e)
        {
            throw e;
        }

        if (res)
        {
            res = JSON.parse(res);
        }

        if (res.code === 200)
        {
            return res.result.songs;
        }
        else
        {
            throw new Error(`Response with error code: ${res.code}`);
        }
    }
}
