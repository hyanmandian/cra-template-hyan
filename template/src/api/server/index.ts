import { Server as MirageServer } from "miragejs";

import { APP } from "#/constants";

import { routes } from "./routes";

export { Response } from "miragejs";

export type { Request } from "miragejs";

export type Server = MirageServer;

export function Server() {
  const server = new MirageServer({
    routes,
    urlPrefix: APP.API,
    environment: process.env.NODE_ENV,
    trackRequests: true,
  });

  return server;
}
