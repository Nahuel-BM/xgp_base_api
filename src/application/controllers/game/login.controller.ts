import { validateJwt, makeJwt, setExpiration, Jose, Payload, Request, Response} from '../../../../deps.ts';

const key = "your-secret";
const payload: Payload = {
  iss: "joe",
  exp: setExpiration(new Date().getTime() + 60000),
};
const header: Jose = {
  alg: "HS256",
  typ: "JWT",
};

function generateToken(req: Request, res: Response){
    res.status(200).send({ body: makeJwt({ header, payload, key })});
}

async function validateToken(req: Request, res:Response){
    var enc = new TextEncoder();
    let token = enc.encode(req.headers.get('Authorization') || '');
    let jwt = new TextDecoder().decode(token);

    (await validateJwt(jwt, key)).isValid
      ? res.status(200).send({ body: "Valid JWT\n" })
      : res.status(401).send({ body: "Invalid JWT\n"});
}

export {validateToken, generateToken};