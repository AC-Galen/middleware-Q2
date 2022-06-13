const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  const startTime = new Date()
  console.log(`${startTime.toLocaleString()}| ${req.method} from ${req.url}`)
  res.on('finish', () => {
    const EndTime = new Date()
    const delayTime = EndTime - startTime
    console.log(`${EndTime.toLocaleString()}| ${req.method} from ${req.url} | total time: ${delayTime}ms`)
  })
  next()
})

app.get('/', (req, res) => {
  res.send(`列出全部 Todo
  <form action='/' method="POST"><button>新增</button></form>`)
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})