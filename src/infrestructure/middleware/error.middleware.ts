import {
  Request,
  Response,
} from "../../../deps.ts";

import statusCode from "../dicctionaries/status.code.js";
import errorsContent from "../dicctionaries/error.dicctionary.js";

function errorMiddleware(error: Error, req: Request, res: Response) {
  let key = error.message;
  let status = getValueFromDiccionary(key, statusCode);
  let body = getValueFromDiccionary(key, errorsContent);
  res.status(status).send(body);
}

function getValueFromDiccionary(key: string, dicc: any) {
  let toReturn = dicc[key];

  if (toReturn === undefined) {
    toReturn = dicc["internal_server_error"];
  }
  
  return toReturn;
}

export { errorMiddleware };
