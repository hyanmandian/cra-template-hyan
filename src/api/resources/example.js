import request from "#/utils/request";

export const all = async () => await request.get("http://example.com").json();
