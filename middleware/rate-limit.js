const rateLimit = require('express-rate-limit')
const limit_exceeds = {
    status:0,
    message: "Your Limit Exceeds for Requesting this route"
}

const limiter = rateLimit({
    windowMs: 1* 60*1000, // 1 minute
    max: 100, // Limit each IP to 100 requests per `window` (here, per 1 minutes)
    message:limit_exceeds,
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
module.exports = limiter