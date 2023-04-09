const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()

//arquivos estáticos............................................
app.use('/public', express.static("public"));


//handlebars config---------------------------------------------
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}));
app.set('view engine', 'handlebars');


//bodyPArser config--------------------------------------------------
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//ROTAS-------------------------------------------------------------
const routerHome = require("./routers/routerHome")
const productor_route = require("./routers/productor_route")

app.use("/", routerHome);
app.use("/productor", productor_route)

const PORT = process.env.PORT || 1020;
app.listen(PORT, () => {
    console.log("APP plínio modas conectado na porta: ", PORT);
})