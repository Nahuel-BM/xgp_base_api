import {
  Request,
  Response,
  validateJwt,
  parseAndDecode,
} from "../../../deps.ts";
import jwtConfig from "../../../config/jwt.js";
import { TokenPayload } from "../interfaces/payload.interface.ts";


async function validateToken(req: Request, res: Response) {
  let token = new TextEncoder().encode(req.headers.get("Authorization") || "");
  let jwt = getToken(new TextDecoder().decode(token));
  let isValid = (await validateJwt(jwt, jwtConfig.jwt.key)).isValid;
  if (!isValid) {
    throw new Error('unauthorized');
  }
}

async function validateUser(req: Request, res: Response) {
  let token = new TextEncoder().encode(req.headers.get("Authorization") || "");
  let jwt = getToken(new TextDecoder().decode(token));
  let data = <TokenPayload> getDeserializedToken(jwt).payload;

  let userID = Number(req.params.user_id);
  if (userID !== Number(data.userID) || isNaN(userID)) {
    throw new Error('forbidden');
  }
}
async function validateScope(req: Request, res: Response) {
}

function getToken(token: string) {
  return (token.split(" "))[1].trim();
}

function getDeserializedToken(token: string) {
  return parseAndDecode(token);
}

export { validateToken, validateUser, validateScope };
