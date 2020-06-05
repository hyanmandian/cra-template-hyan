import { Server } from "#/api/server";

import { request, onRequest, onResponse } from ".";

describe("utils > request", () => {
  let server: Server;

  beforeEach(() => {
    server = Server();
    server.get("", () => ({ ok: "ok" }));
  });

  afterEach(() => {
    server.shutdown();
  });

  it("should call onRequest before request", async () => {
    const callback = jest.fn();
    const off = onRequest(callback);

    expect(callback).not.toBeCalled();
    await request.get("");
    expect(callback).toBeCalledTimes(1);

    off();

    await request.get("");
    expect(callback).toBeCalledTimes(1);
  });

  it("should call onResponse after response", async () => {
    const callback = jest.fn();
    const off = onResponse(callback);

    expect(callback).not.toBeCalled();
    await request.get("");
    expect(callback).toBeCalledTimes(1);

    off();

    await request.get("");
    expect(callback).toBeCalledTimes(1);
  });
});
