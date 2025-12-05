import { jwtVerify,SignJWT } from "jose";
let SecretKey = 'abcde';

export async function signTotoken (payload) {
    return await new SignJWT(payload).setProtectedHeader({alg: "H5256"}).setExpirationTime("1h").sign(SecretKey);
}


export async function verifyToken (token) {
    try {
        const {payload} = await jwtVerify(token, SecretKey);
        return payload;
    } catch (error) {
        return null;
    }
}