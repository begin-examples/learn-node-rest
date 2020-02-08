let arc = require('@architect/functions')
let auth = require('@architect/shared/auth')
let data = require('@begin/data')

async function create(req) {

  // write the record
  let table = `todos-${req.session.account.id}`
  await data.set({table, ...req.body})

  // render a response
  let todos = await data.get({table})
  let account = req.session.account
  delete account.token

  return {
    json: {account, todos}
  }
}

exports.handler = arc.http.async(auth, create)
