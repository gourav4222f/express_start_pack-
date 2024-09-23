const express = require("express");
const router = express.Router();

/*
* Routes imports
*/

const ProductRoutes = require("./Product-route")


/*
* Routes mounting
*/

router.use("/Product",ProductRoutes)



/*
* Routes export
*/
module.exports = router;