const Product = require("../models/product.js");

exports.createProduct = async (req, res) => {
    try{    
        const checkProduct = Product.findOne({name: req.body.name});
        if(checkProduct){
            return res.status(400).json({message: "Product already exists"});
        }
        const newProduct = new Product(req.body);
        await newProduct.save();
        return res.status(201).json({message: "Product created successfully"});
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
};

exports.editProduct =  async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { 
            new: true, // Return the updated document
            runValidators: true, // Ensure validation runs
        });
    
        if (!updatedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
    
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
  };