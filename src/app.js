const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = 9000;
require("./db/conn");

const Form = require("./models/form");
const bodyParser = require("body-parser");

const template_path = path.join(__dirname, "../templates/views");

app.set("view engine", "ejs");
app.set("views", template_path);

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/submit", (req,res) => {
    res.render("index");
})
app.post("/submit", async (req,res) => {
    try{
        // userExist = await UserActivation.findOne({emailAddress : emailAddress});
        // if(userExist){
        //     return res.status(422).json({error : "Email Already exists"});
        // }        

        const { fullname, gender, emailAddress, phoneNumber, permanentAddress, currentAddress, dateOfJoining, jobTitle, department, salary, aadharNumber, panNumber, experience } = req.body;

        const employeeData = new Form({
            fullname,
            gender, 
            emailAddress,
            phoneNumber,
            permanentAddress,
            currentAddress,
            dateOfJoining,
            jobTitle,
            department,
            salary,
            // photo : req.body["photo"],
            // sign : req.body["sign"],
            aadharNumber,
            panNumber,
            experience
        })

      const datastored = await employeeData.save();
      res.status(201).redirect("/");

    }catch(error) {
        res.status(400).send(error);
    }
})

app.listen(PORT,() => {
    console.log(`Server running on ${PORT}`);
});
