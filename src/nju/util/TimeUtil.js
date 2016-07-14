export default class TimeUtil
{
    static format(ms)
    {
        const time = Math.round(ms / 1000);   // 秒

        const sec = time % 60;
        const min = (time - sec) / 60;
        return _digt2(min) + ":" + _digt2(sec);
    }
}

function _digt2(num)
{
    return `0${num}`.substr(-2);
    // return num < 10 ? "0" + num : num;
}
