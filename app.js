const express = require('express')
const app = express()
const router = express.Router()

router.get('/version', (req, res) => {
  res.send('3') // change this string to ensure a new version deployed
})

router.get('/health', (req, res) => {
  res.send('ok')
})

app.use('/', router)

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
