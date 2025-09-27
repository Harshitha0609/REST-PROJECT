var express = require("express")

var { getAllProducts, getSingleProduct, addProduct, updateProduct, deleteProduct } = require("../controllers/product-controllers")

var router = express.Router()

router.get("/get", getAllProducts)

router.get("/get/:id", getSingleProduct)

router.post("/add", addProduct)

router.put("/update/:id", updateProduct)

router.delete("/delete/:id", deleteProduct)

module.exports = router
