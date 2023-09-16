const { Product } = require('../models');

/**create product */
const createProduct = async (reqBody) => {
    return Product.create(reqBody);
};

/**get product list */
const getProductList = async () => {
    return Product.find().populate('category')
}

/**get product list by id */
const getProductById = async (productId) => {
    return Product.findById(productId);
}

/**delete product */
const deleteProduct = async (productId) => {
    return Product.findByIdAndDelete(productId);
}

/**update product */
const updateDetails = async (productId) => {
    return Product.findByIdAndUpdate(productId);
}

const getProductByName = async (product_name) => {
    return Product.findOne({ product_name });
};

module.exports = {
    createProduct,
    getProductList,
    getProductById,
    deleteProduct,
    updateDetails,
    getProductByName
}