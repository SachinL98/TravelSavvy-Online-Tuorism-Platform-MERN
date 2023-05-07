const router = require("express").Router();
const multer = require('multer');
const Train = require("../models/Train");
const upload = multer();

//Add new train
router.route("/addTrain").post(upload.single('image'), async(req, res) => {
    //Desctucture the request body and get train details
    const {name, description,startStation,endStation, startTime, endTime, imageLink} = req.body;

    try{
        //Create a train details object and initilize above variables
        let train = new Train({name, description,startStation,endStation, startTime, endTime, imageLink});
        const result = await train.save();
        
        if(result)
            res.status(201).send("Data added successfully !");
        else
            res.status(500).send("Server Error !");
    }
    catch(error){
        console.log(error);
        res.status(500).send("Server Error !");
    }
});

//Get all trains
router.route('/get').get((req, res) =>{
    Train.find().then((trains)=>{
        res.status(200).json(trains);
    }).catch((err)=>{
        console.log(err);
    })
});

//Get one train
router.route('/getOne/:id').get((req, res) => {
    const id = req.params.id;
    Train.findById(id).then((train) => {
        res.status(200).json(train);
    }).catch((err) => {
        console.log(err);
    })
});

//Update train
router.route("/updateTrain/:id").put(async (req, res) => {
    const id = req.params.id;
    const {name, description,startStation,endStation, startTime, endTime, imageLink} = req.body;
    let updatedTrain = {name, description,startStation,endStation, startTime, endTime, imageLink};
    await Train.findByIdAndUpdate(id, updatedTrain) 
    .then(() => {
        res.status(200).send("Train Updated");
    }).catch((err) => {
        console.log(err);   
        res.send(500).send("Update Failed");
    })
});

//Delete train
router.route("/deleteTrain/:id").delete(async (req, res) => {
    const id = req.params.id;
    await Train.findByIdAndDelete(id)
    .then(() => {
        res.status(200).send("TrainDeleted");
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Delete Failed");
    })
});



module.exports = router;