let { post } = require('tiny-json-http')

module.exports = async function publish({token, draft}) {

  let path = `${draft.title.toLowerCase().replace(/ /g, '-')}.md`
  let message = `adds ${path}`
  let content = draft.body

  await post({
    url: `https://api.github.com/repos/${process.env.GITHUB_REPO}/contents/src/md/${path}`,
    headers: {
      Accept: 'application/json',
      Authorization: `token ${token}`
    },
    data: {
      message,
      content,
    }
  })
}
  
