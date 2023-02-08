function enableCors(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
    res.setHeader('Aceess-Control-Allow-Headers', 'Content-Type');
    next();
}

module.exports = enableCors;