const { Router } = require("express");
const router = Router();

router.use('/users', require("./user.js"))

module.exports = router;