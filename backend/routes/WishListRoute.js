const express = require("express");
const router = express.Router();
const WishList = require('../models/WishList');

//Add WishList Item
router.route('/add').post(async(req, res)=>{
    const {userID, event} = req.body;
    
    try{
        const newWish = new WishList({userID, event});
        const result = await newWish.save();

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


//Get WishList Items
router.route('/get/:id').get((req, res)=>{
    const {id} = req.params;

    WishList.find({userID: id})
    .then((events)=>{
        if(events != [])
            res.status(200).json(events);
        else
            res.status(400).send('No events !');
    })
    .catch((err)=>{
        res.status(500).send('Server Error');
        console.log(err);
    })
});

//Romove WishList Item
router.route('/delete/:id').delete((req, res)=>{
    const {id} = req.params;

    WishList.findByIdAndDelete(id)
    .then((res)=>{
        console.log(res);
        res.status(200).send('Item Deleted !')
    })
    .catch((err)=>{
        res.status(500).send('Server Error');
    })
})

module.exports = router;