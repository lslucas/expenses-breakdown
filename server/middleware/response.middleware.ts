import * as mung from 'express-mung';

export interface DefaultBody {
  success: boolean;
  data?: any;
  message?: string;
}

function isOk(statusCode: number): boolean {
  return statusCode >= 200 && statusCode < 400;
}

function parseResponse(body, req, res): DefaultBody {
  if (body._id) {
    delete body._id;
  }
  if (body.__v) {
    delete body.__v;
  }
  if (body.password) {
    delete body.password;
  }
  return { success: isOk(res.statusCode), data: body };
}

export const ResponseMiddleware = mung.json(parseResponse);
