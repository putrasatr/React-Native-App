import jwt_decode from "jwt-decode"

const tokenDecode = token => {
    let result = jwt_decode(token)
    return result
}

export default tokenDecode