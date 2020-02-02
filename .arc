@app
learn-rest

@static
folder _site

@http
get /admin                     # list drafts
get /login                     # create github oauth session
post /logout                   # clear session

get /api/drafts/:key           # edit draft 
post /api/drafts               # create draft
post /api/drafts/:key          # update draft
post /api/drafts/:key/destroy  # destroy draft
post /api/drafts/:key/publish  # publish draft!

###
# a strict REST implementation looks like this:
#
# post /api/drafts
# get /api/drafts/:draftID
# patch /api/drafts/:draftID
# delete /api/drafts/:draftID
# 
# problem is those http verbs do not work with html forms
# so either you are duplicating code or have a less accessible site!
# not worth the tradeoff locally but fine for an external facing APIs

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
