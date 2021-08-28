import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './components/App.jsx'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Min SSR</title>
</head>
<body >
    <div id="root">${ReactDOMServer.renderToString(<App />)}</div>
</body>
</html>`)
})

app.listen(port, () => {
  console.log(`App running at port ${port}`)
})
