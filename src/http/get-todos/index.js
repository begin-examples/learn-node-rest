let arc = require('@architect/functions')
let auth = require('@architect/shared/auth')
let data = require('@begin/data')

async function read(req) {
  let table = `todos-${req.session.account.id}`
  let todos = await data.get({table})
  let account = req.session.account
  delete account.token
  return {
    json: {
      account,
      todos
    }
  }
}

exports.handler = arc.http.async(auth, read)
