const router = require('express').Router();
const db = require('../helpers/dbModel');
const { validateProductsBody, validateSupplierBody } = require('../helpers/middleware');

router.get('/suppliers/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const supplier = await db.findBy({id}, 'suppliers');
        const products = await db.findProductsBy({supplierId: id}, 'products');

        if(supplier) {
            supplier.products = products;
        } 
        

        res.status(200).json(supplier)
    }
    catch (error) {
        res.status(500).json({ message: 'Looks like there was an error with the server. Please try again later.', error: error.message })
    }
});

router.post('/suppliers/:id/products', validateProductsBody, async(req, res) => {
    try {
        const { id } = req.params;
        const newProduct = await db.addProduct({ ...req.body, supplierId: id });

        res.status(201).json({ message: 'Product added successfully', newProduct })
    }
    catch (error) {
        res.status(500).json({ message: 'Looks like there was an error with the server. Please try again later.', error: error.message })
    }
});

router.post('/suppliers', validateSupplierBody, async(req, res) => {
    try {
        const newSupplier = await db.addSupplier(req.body);

        res.status(201).json({ message: 'A new supplier has just been added.', newSupplier })
    }
    catch (error) {
        res.status(500).json({ message: 'Looks like there was an error with the server. Please try again later.', error: error.message })
    }
});

router.delete('/products/:id', async(req, res) => {
    try {
        const { id } = req.params;
        await db.removeProduct(id);

        res.status(200).json({ message: 'Product has been deleted successfully' })
    }
    catch (error) {
        res.status(500).json({ message: 'Looks like there was an error with the server. Please try again later.', error: error.message })
    }
});

router.delete('/suppliers/:id', async(req, res) => {
    try {
        const { id } = req.params;
        await db.removeSupplier(id);

        res.status(200).json({ message: 'The supplier has been deleted from our database' })
    }
    catch (error) {
        res.status(500).json({ message: 'Looks like there was an error with the server. Please try again later.', error: error.message })
    }
});

module.exports = router;