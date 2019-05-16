import ky from "ky-universal";

const request = ky.extend({
  retry: 3,
  hooks: {
    beforeRequest: [],
    afterResponse: []
  }
});

export default request;
