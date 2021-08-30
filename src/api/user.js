import http from '@/utils/http';

const url = {
  info: 'rest/info',
};

export function getInfo(data) {
  return http({
    url: url.list,
    method: 'GET',
    data,
  });
}
