const Joi = require('joi');

/**create product */
const createProduct = {
    body : Joi.object().keys({
        product_name : Joi.string().required().trim(),
        product_desc : Joi.string().required().trim(),
        price : Joi.number().integer().required(),
        category: Joi.string().required().trim()
    }),
};

/**get product list */
const getProductList = {
    query : Joi.object().keys()
};

/**get products details by id */
const getDetails = {
    params : Joi.object().keys({
        productId : Joi.string().required().trim()
    }),
};

/**update product by id */
const updateDetails = {
    params : Joi.object().keys({
        productId : Joi.string().required().trim()
    }),
    body : Joi.object().keys({
        product_name : Joi.string().required().trim(),
        product_desc : Joi.string().required().trim(),
        price : Joi.number().integer().required()
    })
};

module.exports = {
    createProduct,
    getProductList,
    getDetails,
    updateDetails
}
