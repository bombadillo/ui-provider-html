import express from 'express'
import path from 'path';

let app = new express();
let port = 5002;

app.set('views', "./views")
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('index'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))