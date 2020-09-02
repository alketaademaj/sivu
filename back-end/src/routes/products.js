const router =require('express').Router();
let Product=require('../models/product');

router.route('/').get((req,res)=>{
    Product.find()
        .then(products=>res.json(products))
        .catch(err=>res.status(400).json('Error:'+err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const color=req.body.color;
    const size = req.body.size;
    const stock = req.body.stock;

    const newProduct = new Product({name,price,color,size,stock});

    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;