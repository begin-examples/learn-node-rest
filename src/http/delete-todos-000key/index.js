let arc = require('@architect/functions')
let auth = require('@architect/shared/auth')
let data = require('@begin/data')

async function destroy(req) {

  // destroy the item
  let table = `todos-${req.session.account.id}`
  let key = req.params.key
  await data.destroy({table, key})

  // render response
  let todos = await data.get({table})
  let account = req.session.account
  delete account.token
  return {
    json: {account, todos}
  }
}

exports.handler = arc.http.async(auth, destroy)
