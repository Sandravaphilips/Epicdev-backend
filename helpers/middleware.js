module.exports = {
    validateBody: function (req, res, next) {
        if (Object.keys(req.body).length !== 0 && req.body.constructor === Object) {
            next();
        } else {
            res.status(400).json({ message: 'Please supply data in the request body' });
        }
    },
    validateSupplierBody: async function (req, res, next) {
        const { firstName, lastName, location, contactInfo } = req.body;
        if (firstName && lastName && location && contactInfo) {
            next()
        }else {
            res.status(400).json({ message: 'Please fill in the required fields' });
        }
    },
    validateProductsBody: async function (req, res, next) {
        const { name, sku, price } = req.body;
        if (name && sku && price) {
            next()
        }else {
            res.status(400).json({ message: 'Please fill in the required fields' });
        }
    }
}