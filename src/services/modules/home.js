import myRequest from "..";

export function getHomeGoodPriceData(params) {
    return myRequest.get({
        url:'/home/goodprice'
    })
}


