const express = require ('express')
const router = express()
const Painting = require('../models/painting')

router.get('/' , async (req , res )=>{
    try{
        const paintings = await Painting.find()
        res.send({
            success: true,
            data: paintings
        })

    }catch(err){
        res.send({
            success: false,
            err: 500,
            data : err.massage
        })
    }
})
router.post('/' , async (req , res )=>{
    console.log(req.body)
    try{
        const newpaintings = await Painting.create(req.body)
        res.send({
            success: true,
            data: newpaintings
        })

    }catch(err){
        res.send({
            success: false,
            data : err.massage
        })
    }
})
router.get('/:id' , async (req , res )=>{
    try{
        const painting = await Painting.findById(req.params.id)
        if(!painting){
            throw new Error ("No painting by that id")
        }
        res.send({
            success: true,
            data: painting
        })

    }catch(err){
        res.send({
            success: false,
            data : err.massage
        })
    }
})
router.delete('/:id' , async (req , res )=>{
    try{
        const painting = await Painting.findByIdAndDelete(req.params.id)
        res.send({
            success: true,
            data: painting
        })
    }catch(err){
        res.send({
            success: false,
            data : err.massage
        })
    }
})
router.put('/:id' , async (req , res )=>{
    try{
        const painting = await Painting.findByIdAndUpdate(req.params.id, req.body, {new:true})
        console.log('im here')
        res.send({
            success: true,
            data: painting
        })

    }catch(err){
        res.send({
            success: false,
            err: 500,
            data : err.massage
        })
    }
})

module.exports = router