import { request } from "#/utils/request";

export type GetMessageReturn = { message: string };

export const getMessage = () => request.get("message").json<GetMessageReturn>();
