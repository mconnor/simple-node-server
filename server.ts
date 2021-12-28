import express from 'express'
const app = express()
const port =3000

app.get('/data', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.json({ foo: 'bar'})
})

app.listen(port, ()=>  {
    console.log('listening on port ' + port)
})
