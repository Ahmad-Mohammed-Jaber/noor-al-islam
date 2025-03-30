if (process.env.NODE_ENV !== "production") // meaning when somehow this is in production we won't have to load (parse the data in the .env file)
{
    require("dotenv").config()
}


const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")

const indexRouter = require("./routes/index")


app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.set("layout", "layouts/layout")
app.use(expressLayouts)
app.use(express.static("public")) // public files such as stylesheet, markups etc

const mongoose = require("mongoose")
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on("error", error => console.log(error))
db.once("open", () => console.log("Connected to mongoose"))

app.use("/", indexRouter)

app.listen(process.env.PORT || 3000) // here the || checks if the left most value is "falsy" (ex undefined, null, 0, NaN, etc), and if so takes the rightmost number