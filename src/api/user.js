import http from '@/utils/http';

const url = {
  info: 'rest/post/ma/list',
};

export const getInfo = () => {
  return http({
    url: url.info,
    method: 'GET',
  });
}
