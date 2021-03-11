const express = require('express');

const mu = require('./controllers/messages_controller')

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'));

const port = 3001
app.listen(port, () => console.log('toss a coin to your local witcher ' + port))

app.post('/api/messages', mu.create)
app.get('/api/messages', mu.read)
app.put('/api/messages/:id', mu.update)
app.delete('/api/messages/:id', mu.delete)