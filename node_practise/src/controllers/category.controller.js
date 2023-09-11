const { categoryService } = require('../services');

/**create category */
const createCategory = async (req, res) => {
    try {
        const reqBody = req.body;

        const category = await categoryService.createCategory(reqBody);
        if (!category) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Category create successfully!",
            data: { category }
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };

}

/** Get category list */
const getCategoryList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { first_name: { $regex: search, $options: "i" } },
                { last_name: { $regex: search, $options: "i" } }
            ];
        }

        const getList = await categoryService.getCategoryList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get category list successfully!",
            data: getList,
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete category */
const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const categoryExists = await categoryService.getCategoryById(categoryId);
        if (!categoryExists) {
            throw new Error("Category not found!");
        }

        await categoryService.deleteCategory(categoryId);
        res.status(200).json({
            success: true,
            message: "Category delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/**category update by id */
const updateDetails = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const categoryExists = await categoryService.getCategoryById(categoryId);
        if (!categoryExists) {
            throw new Error("Category not found...");
        }

        await categoryService.updateDetails(categoryId, req.body);

        res
            .status(200)
            .json({ success: true, message: "Category details update successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error, message });
    }
};

/** Get Category details by id */
const getCategoryDetails = async (req, res) => {
    try {
        const getDetails = await categoryService.getCategoryById(
            req.params.categoryId
        );
        if (!getDetails) {
            throw new Error("Category not found!");
        }

        res.status(200).json({
            success: true,
            message: "Category details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createCategory,
    getCategoryList,
    deleteCategory,
    updateDetails,
    getCategoryDetails
}