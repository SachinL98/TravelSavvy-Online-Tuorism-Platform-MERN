const express = require("express");
const router = express.Router();
const Review = require('../models/Reviews');

//Add Review
router.route('/add').post(async(req, res)=>{
    const {userID, eventID, userName, rating, reviewData}  = req.body;
    const createdAt = new Date();

    try{
        let review = new Review({userID, eventID, userName, rating, reviewData, createdAt});
        const result = await review.save();
        if(result)
            res.status(201).send("Data added successfully !");
        else
            res.status(500).send("Server Error !");
    }
    catch(err){
        console.log(err);
        res.status(500).send("Server Error !");
    }
})


//Get All Event Reviews
router.route('/:id').get((req, res)=>{
    const {id} = req.params;

    Review.find({eventID: id})
    .then((reviews)=>{
        if(reviews)
            res.status(200).json(reviews);
        else
            res.status(400).send('No events !');
    })
    .catch((err)=>{
        res.status(500).send('Server Error');
        console.log(err);
    })
})

module.exports = router;