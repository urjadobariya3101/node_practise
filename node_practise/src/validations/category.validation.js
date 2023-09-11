const Joi = require('joi');

/**create category */
const createCategory = {
    body : Joi.object().keys({
        category_name : Joi.string().required().trim(),
        category_desc : Joi.string().required().trim(),
        price : Joi.number().integer().required()
    }),
};

/**get category list */
const getCategoryList = {
    query : Joi.object().keys(),
};

/**get category details by id */
const getDetails = {
    params : Joi.object().keys({
        categoryId : Joi.string().required().trim(),
    }),
};

/**update category by id */
const updateDetails = {
    params : Joi.object().keys({
        categoryId : Joi.string().required().trim(),
    }),
    body : Joi.object().keys({
        category_name : Joi.string().required().trim(),
        category_desc : Joi.string().required().trim(),
        price : Joi.number().integer().required()
    }),
};

module.exports = {
    createCategory,
    getCategoryList,
    getDetails,
    updateDetails
}