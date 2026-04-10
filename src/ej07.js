import express from "express"
const PORT = 3000

const app = express()
app.use(express.json())

let timer = 0
const timerLimit = 10

    const intervalID = setInterval(()=>{
        timer++;
        
    }, 1000)

app.get("/ej07", (req, res) => {
    if(timer < timerLimit){
        res.send(timer)
        return
    }
    res.send("fin del contador")
    
})

app.listen(PORT, () => {
    console.log(`localhost:${PORT}/ej07`)
})