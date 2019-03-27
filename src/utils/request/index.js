import ky from "ky";

const request = ky.extend({
  retry: 3,
  hooks: {
    beforeRequest: [],
    afterResponse: []
  }
});

export default request;
