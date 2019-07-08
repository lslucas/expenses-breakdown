import * as mung from 'express-mung';

export interface DefaultBody {
  success: boolean;
  data?: object;
  message?: string;
}

function isOk(statusCode: number): boolean {
  return statusCode >= 200 && statusCode < 400;
}

function parseResponse(body, req, res): DefaultBody {
  return { success: isOk(res.statusCode), data: body };
}

export const ResponseMiddleware = mung.json(parseResponse);
