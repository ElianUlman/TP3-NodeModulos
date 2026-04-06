import express from "express"
const PORT = 3000

const app = express()
app.use(express.json())


const passwordValidation = (password) => {

}

app.post("/ej09", (req, res) => {
    

    const {text} = req.params;

    res.send(analyzeText(text))
})

app.listen(PORT, () => {
    console.log("localhost:"+PORT)
})