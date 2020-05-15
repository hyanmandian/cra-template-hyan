import ky from "ky-universal";
import mitt from "mitt";

import { APP } from "#/constants";

const emitter = mitt();

export const request = ky.extend({
  retry: 0,
  hooks: {
    beforeRequest: [
      (request) => {
        emitter.emit("request", request);

        return request;
      },
    ],
    afterResponse: [
      (_, __, response) => {
        emitter.emit("response", response);

        return response;
      },
    ],
  },
  timeout: 30000,
  prefixUrl: APP.API,
});

export function onRequest(callback: (request: Request) => void) {
  emitter.on("request", callback);

  return () => {
    emitter.off("request", callback);
  };
}

export function onResponse(callback: (response: Response) => void) {
  emitter.on("response", callback);

  return () => {
    emitter.off("response", callback);
  };
}
