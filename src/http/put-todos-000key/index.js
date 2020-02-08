let arc = require('@architect/functions')
let auth = require('@architect/shared/auth')
let data = require('@begin/data')

async function write(req) {
  let table = `todos-${req.session.account.id}`
  let {key, complete} = req.body
  let copy = await data.get({table, key})
  copy.complete = complete
  await data.set(copy)
}

async function render(req) {
  let todos = await data.get({
    table: `todos-${req.session.account.id}`
  })
  let account = req.session.account
  delete account.token
  return {
    json: {account, todos}
  }
}

exports.handler = arc.http.async(auth, write, render)
