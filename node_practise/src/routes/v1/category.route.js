const express = require('express');

const { categoryValidation } = require('../../validations');
const { categoryController } = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

/**category create */
router.post(
    "/create-category",
    validate(categoryValidation.createCategory),
    categoryController.createCategory
);

/**list of category */
router.get(
    "/list",
    validate(categoryValidation.getCategoryList),
    categoryController.getCategoryList
);

/**delete category */
router.delete(
    "/delete-category/:categoryId",
    validate(categoryValidation.getDetails),
    categoryController.deleteCategory
);

/**update category */

router.put(
    "/update-category/:categoryId",
    validate(categoryValidation.updateDetails),
    categoryController.updateDetails
);

module.exports = router;
