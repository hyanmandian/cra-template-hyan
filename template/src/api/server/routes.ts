import { Server } from ".";

export function routes(this: Server) {
  this.get("/message", () => ({
    message: "Hello world"
  }));

  this.passthrough();
}
