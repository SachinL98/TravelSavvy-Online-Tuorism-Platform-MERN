const express = require("express");
const router = express.Router();
const Event = require('../models/Event');

//Add Nev Event
router.route('/add').post(async(req, res)=>{
    const {userID, name, description, location, organizerName, type, startDate, duration, image} = req.body
    try{
        const newEvent = new Event({ userID, name, description, location, organizerName, type, startDate, duration, image});
        const result = await newEvent.save();

        if(result)
            res.status(201).send("Data added successfully !");
        else
            res.status(500).send("Server Error !");
    }
    catch(err){
        res.status(500).send('Server Error !');
        console.log(err);
    }
});


//Get All Events
router.route('/').get((req, res)=>{

    Event.find()
    .then((events)=>{
        if(events)
            res.status(200).json(events);
        else
            res.status(400).send('No events !');
    })
    .catch((err)=>{
        res.status(500).send('Server Error');
        console.log(err);
    })
});


//Get One Event
router.route('/:id').get((req, res)=>{
    const {id} = req.params;

    Event.findById(id)
    .then((event)=>{
        if(event)
            res.status(200).json(event);
        else
            res.status(400).send('No events !');
    })
    .catch((err)=>{
        res.status(500).send('Server Error');
        console.log(err);
    })
});

//Get User Specific Events
router.route('/get/:id').get((req, res)=>{
    const {id} = req.params;

    Event.find({userID: id})
    .then((events)=>{
        if(events)
            res.status(200).json(events);
        else
            res.status(400).send('No events !');
    })
    .catch((err)=>{
        res.status(500).send('Server Error');
        console.log(err);
    })
});


//Get events by type
router.route('/getType/:type').get((req, res)=>{
    const {type} = req.params;

    Event.find({type: type})
    .then((events)=>{
        if(events)
            res.status(200).json(events);
        else
            res.status(400).send('No events !');
    })
    .catch((err)=>{
        res.status(500).send('Server Error');
        console.log(err);
    })
});

//Update Event
router.route('/update/:id').patch((req, res)=>{
    const {id} = req.params;
    const {image, name, description, location, organizerName, type, startDate, duration} = req.body;
    const newData = {image, name, description, location, organizerName, type, startDate, duration};

    Event.findByIdAndUpdate(id, newData)
    .then(() => {
        res.status(200).send("Product Updated");
    }).catch((err) => {
        console.log(err);   
        res.send(500).send("Update Failed");
    })
})


//Delete Event
router.route('/delete/:id').delete(async(req, res)=>{
    const {id} = req.params;

    await Event.findByIdAndDelete(id)
    .then((response)=>{
        if(response)
            res.status(200).send('Event Deleted !');
        else
            res.status(400).send('No Event Found !');
    })
    .catch((err)=>{
        res.status(500).send('Server Error !');
        console.log(err);
    })
});


module.exports = router;

