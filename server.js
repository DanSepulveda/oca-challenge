const express = require('express')
const path = require('path')

const app = express()

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + "/client/build/index.html"))
    })
}

const PORT = process.env.PORT || 4000

app.listen(PORT, '0.0.0.0', () => console.log(`Server listening on port ${PORT}`))