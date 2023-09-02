import $axios from 'utils/$axios';

// 获取页面信息
export function getPageInfoRequest(): Promise<RES<any>> {
  return $axios.get('xx');
}
