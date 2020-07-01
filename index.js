const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.post('/listener', function(req, res) {
    // request body
    console.log(req.body);
    // print name
    console.log(req.body.live);
    console.log(req.body.notificationItems);

    res.send("[accept]");
})

//express()
//  .use(express.static(path.join(__dirname, 'public')))
//  .set('views', path.join(__dirname, 'views'))
//  .set('view engine', 'ejs')
//  .get('/', (req, res) => res.render('pages/index'))
//  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
