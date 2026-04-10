import express from "express"
const PORT = 3000

const app = express()
app.use(express.json())

const analyzeText = (text) =>{
    const wordCount = text.length - (text.replace(" ", "")).length + 1

    const vocals = ["a", "e", "i", "o", "u"]
    let vocalCount=0;
    for(const char of text){
        if(char === vocals[0] || char === vocals[1] || char === vocals[2] || char === vocals[3] || char === vocals[4]){
            vocalCount++;
        }
    }
    
    return({
        caracteres: text.length,
        palabras: wordCount,
        vocales: vocalCount,
        consonantes: (text.replace(" ", "").length - vocalCount)
    })
}

app.get("/ej08/:text", (req, res) => {
    const {text} = req.params;

    res.send(analyzeText(text))
})

app.listen(PORT, () => {
        console.log(`localhost:${PORT}/ej08/*ESCRIBI-UNA-PALABRA-ACA*`)

})