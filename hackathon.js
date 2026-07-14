const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())

app.use(express.json())

mongoose.connect("mongodb://irfanmhdm:irfanmhdm@ac-se39fxg-shard-00-00.1l1lwd0.mongodb.net:27017,ac-se39fxg-shard-00-01.1l1lwd0.mongodb.net:27017,ac-se39fxg-shard-00-02.1l1lwd0.mongodb.net:27017/?ssl=true&replicaSet=atlas-ly15db-shard-0&authSource=admin&appName=Cluster0")
    .then(() => {
        console.log("Mongo Connected")
    }).catch((error) => {
        console.log(error)
    })

const Hack = mongoose.model("Hack", new mongoose.Schema(
    {
        team_id: String,
        team_name: String,
        team_leader_name: String,
        leader_email: String,
        leader_phone: String,
        college_name: String,
        number_of_members: String,
        project_title: String,
        problem_statement_track: String,
        technology_stack: String,
        mentor_name: String,
        registration_date: String,
        table_station_number: String
    }
))

app.post("/add",async(req,res) => 
{
    await Hack.create(req.body)
    res.json({"status":"success"})
})

app.post("/view",async(req,res) => 
{
    const hack = await Hack.find()
    res.json(hack)
})

app.listen(3000,() => {

    console.log("Server Started")
})
