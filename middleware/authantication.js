//Basic Auth middleware
const authentication = async (req, res, next) => {
    try {
        const header = req.header('Authorization')
        if (header === undefined) {
            throw new Error()
        }

        //encoded value
        var encodedHeader = header.split(' ')[1];
        // decode using base64
        var decodedHEader = Buffer.from(encodedHeader, 'base64').toString();
        var username = decodedHEader.split(':')[0];
        var password = decodedHEader.split(':')[1];

        if (username !== 'admin' || password !== 'Admin_Pass') {
            throw new Error()
        }

        next()
    } catch (e) {
        res.status(403).send({
            error: ' Wrong Username or Password'
        })
    }
}

module.exports = authentication