const router =require('express').Router();
let Product=require('../models/product');

router.route('/').get((req,res)=>{
    Product.find()
        .then(products=>res.json(products))
        .catch(err=>res.status(400).json('Error:'+err));
});

router.route('/:id').get((req, res) => { //endpoints / (id) its called endpoint because its the last piece of URL 
    Product.findById(req.params.id)    
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Our products ehehehe are deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});   

router.route('/:id').put((req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body) // accessing id from req.params.id = URL -> it is reading URL 
    .then(() => res.json('Our products ihihihi are updated.'))
    .catch(err => res.status(400).json('Error: ' + err));
});  

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const discountPercentage = req.body.discountPercentage;
    const color=req.body.color;
    const size = req.body.size;
    const stock = req.body.stock;

    const newProduct = new Product({name,price,discountPercentage,color,stock,size});

    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;