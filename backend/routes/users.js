const express = require('express')
const { updateUser, deleteUser, getAllUsers, getOneUser } = require('../controllers/userController')
const { verifyToken , verifyUser,verifyAdmin } = require('../uitls/verifyToken')
const router = express.Router()


/*
router.get('/checkauthetication',verifyToken,(req,res,next)=>{
    res.send("Hello user you are logied in")
})

router.get('/checkuser/:id',verifyUser,(req,res,next)=>{
    res.send("Hello user you are logiedin and you can delete your account")
})

router.get('/checkadmin/:id',verifyAdmin,(req,res,next)=>{
    res.send("Hello admin, you are logiedin and you can delete all accounts")
})
*/


//UPDATE
router.put('/:id',updateUser)

//DELETE
router.delete('/:id',deleteUser);

//GET All
router.get('/',getAllUsers);

//GET ONE
router.get('/:id',getOneUser);



module.exports = router