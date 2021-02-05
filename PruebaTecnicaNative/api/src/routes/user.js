require("dotenv").config()
const server = require("express").Router();
const { User } = require("../db");

server.post("/login", (req, res) => {
	const { email, password } = req.body;
	if( !email || !password ){
		return res.status(400).json({ message: "Parametros incompletos o invalidos" })
	}
	User.findOne({
		where: {email: email}
	})
	.then((user) => {
		console.log("EL USER ENCONTRADO ES: ", user.dataValues)
		return res.status(200).json({ message: "USUARIO VALIDO" })
	})
})

server.post("/", (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;
  if (!email || !password || !firstName || !lastName) {
    return res
      .status(400)
      .json({ message: "Parametros incompletos o invalidos" });
  }
  User.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName
  })
  .then((user) => {
  	console.log(user)
  	return res.status(200).json({ message: "Usuario creado exitosamente" })
 	})
 	.catch(next);
});


module.exports = server;