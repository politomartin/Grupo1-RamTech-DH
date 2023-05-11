const express = require("express");
const router = express.Router();

const apisController = require("../../controllers/api/apis")

router.get("/product", apisController.allProducts);
router.get("/product/:id", apisController.productById);

router.get("/users", apisController.allUsers);
router.get("/users/:id", apisController.userById);

module.exports = router;