//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Example service: send people who do not own or manage the land to "You cannot apply"
router.post('/example/eligibility-answer', function (req, res) {
  if (req.session.data.landOwner === 'someone-else') {
    res.redirect('/example/not-eligible')
  } else {
    res.redirect('/example/sign-in')
  }
})
