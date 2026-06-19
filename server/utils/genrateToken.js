import jwt from 'jsonwebtoken'

const genrateToken = (id) => {
    jwt.sign(
        {id},
        process.env.jwt_Token,
        {
         expiresIn : '30d'
        }
    )
}

export default genrateToken;