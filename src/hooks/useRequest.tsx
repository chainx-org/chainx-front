import axios from "axios";
import useSWR from "swr";
export const urlHeadMain = "https://miniscan-server.coming.chat";
export const urlHeadPre = "https://miniscan-server-pre.coming.chat";
// export const urlHeadAxios = "https://minichain-subscan-server-pre.coming.chat";
export const urlSubscanPre = "https://minichain-subscan-server-pre.coming.chat";
export const urlSubscanMain = "https://minichain-subscan-server.coming.chat";
export const urlForIndexPre = "https://coming-ipfs-card-pre.coming.chat/api/v1"
export const urlForIndexMain = "https://coming-ipfs-card.coming.chat/api/v1"

export const fetcher = (net: string, url: string, value: string) =>
{
  return axios.get(net.concat(url).concat(value)).then((res) => res.data);
}


export function useRequest(net: string, url: string, value: string)
{
  const { data, error } = useSWR([net, url, value], fetcher);
  if (error) return false;
  if (!data) return "loading";
  if (data && data.errMsg) return false;
  if (data && !data.errMsg) return data;
}



