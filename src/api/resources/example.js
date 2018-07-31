import request from '@/utils/request';

export default {
  all() {
    return request.get('http://example.com');
  },
};
