import ky from "ky-universal";

export const request = ky.extend({
  prefixUrl: "https://api-example.com",
  retry: 3,
  hooks: {
    beforeRequest: [request => request],
    afterResponse: [(_, __, response) => response]
  }
});
