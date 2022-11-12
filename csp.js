module.exports = {
    dev: {
    "default-src": ["'self'"],
    "connect-src": [
      "'self'",
      "vitals.vercel-insights.com"
    ]
    },
    prod: {
    "default-src": "'self'",  // can be either a string or an array.
    "connect-src": [
      "'self'",
      "vitals.vercel-insights.com"
    ]
    }
  }