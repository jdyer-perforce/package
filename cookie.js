res.setHeader("Set-Cookie", "token=" + token + "; Secure")
const { createHash } = require('crypto');
const hash = createHash('sha256').update(token).digest('hex');
