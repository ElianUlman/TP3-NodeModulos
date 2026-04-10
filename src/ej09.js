import express from "express"
const PORT = 3000

const app = express()
app.use(express.json())

const passMinimunLength = 8

const passwordValidation = (password) => {
    if(password.length < passMinimunLength){return false}

    let containsNumber=false
    let containsCapitalLetter = false


    for(let i=0; i< password.length; i++){

        if(!isNaN(parseInt(password[i]))){
            containsNumber=true;
        }

        if(password[i] != password[i].toLowerCase()){
            containsCapitalLetter=true;
        }
    }

    if(!containsNumber || !containsCapitalLetter){return false}


    return true
}

app.post("/ej09", (req, res) => {


    const {password} = req.body;
    
    res.send(passwordValidation(password))
})

app.listen(PORT, () => {
    console.log("localhost:"+PORT)
})