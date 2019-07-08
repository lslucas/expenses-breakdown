import * as mung from 'express-mung';

function isOk(statusCode: number) {
  return statusCode >= 200 && statusCode < 400 ? 'Ok' : 'Fail';
}

function parseResponse(body, req, res) {
  return { status: isOk(res.statusCode) , data: body };
}

export const ResponseMiddleware = mung.json(parseResponse);
