import myRequest from "..";

/**
 *
 * @param {*} offset 偏移数据
 * @param {*} size 请求数据个数
 * @returns
 */
export function getEntireRoomList(offset = 0, size = 20) {
  return myRequest.get({
    url: "entire/list",
    params: {
      offset,
      size,
    },
  });
}
