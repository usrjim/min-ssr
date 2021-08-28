import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { App } from './components/App.jsx'

const app = express()
const port = 3000

app.use(express.static('public'))

app.get('*', (req, res) => {
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  )

  res.send(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Min SSR</title>
    <script type="module" src="bundle.js"></script>
  </head>
  <body >
    <div id="root">${app}</div>
  </body>
</html>`)
})

app.listen(port, () => {
  console.log(`App running at port ${port}`)
})
