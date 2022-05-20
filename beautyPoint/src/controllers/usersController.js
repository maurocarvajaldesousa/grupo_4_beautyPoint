const JsonModel = require("../models/jsonModel");
const usersModel = new JsonModel("users");
const { validationResult } = require("express-validator"); // trae el resultados de las validaciones que hicimos
const bcrypt = require("bcryptjs");

const usersController = {
  register: (req, res) => {
    console.log("entrando al método register del userController.js");
    return res.status(200).render("users/register");
  },
  processRegister: (req, res) => {
    //res.send({ body: req.body, file: req.file });
    const resultValidation = validationResult(req); // esta variable es un objeto con varias propiedades, una de ellas es is Empty
    //res.send(resultValidation);
    //res.send(resultValidation.mapped());
    //res.send(resultValidation.errors.length > 0)
    //Antes de hacer la creación, verificar que el usuario no haya sido cargado previamente:
    let userInDB = usersModel.filtrarPorCampoValor("email", req.body.email);
    console.log(userInDB);
    if (userInDB.length >= 1) {
      res.render("users/register", {
        errors: { email: { msg: "Un usuario ya se registró con este mail" } },
        oldData: req.body,
      });
    } else if (resultValidation.isEmpty()) {
      console.log("Entró al método processRegister del usersController.js");
      console.log(req.file);

      //Ahora piso las propiedades password e image:
      (req.body.password = bcrypt.hashSync(req.body.password, 10)), // encripto password con la librería bcryptjs
        (req.body.image = "/images/avatars/" + req.file.filename);

      let userId = usersModel.save(req.body);
      res.redirect("/users/profile/" + userId);
    } else {
      //resultValidation es un objeto lit. con la prop. errors, hay elementos en errors?
      res.render("users/register", {
        errors: resultValidation.mapped(), // envío los errores como un obj. lit. para que sea + facil trabajarlo
        oldData: req.body, // envío los datos anteriores a la vista, para que no tengan que volver a cargar todo
      });
    }
    //return res.send("Ok, las validaciones se pasaron, no hay errores");
  },
  login: (req, res) => {
    return res.status(200).render("users/login");
  },
  processLogin: (req, res) => {
    let userToLogin = usersModel.filtrarPorCampoValor("email", req.body.email);
    console.log(userToLogin);
    console.log(userToLogin[0].password);
    console.log(req.body.password);
    if (userToLogin) {
      let isOkThePassword = bcrypt.compareSync(
        req.body.password,
        userToLogin[0].password
      );
      if (isOkThePassword) {
        req.session.userLogged = userToLogin[0];

        return res.render("users/profile/" + req.session.userLogged.id);
      }
      return res.render("/users/login", {
        errors: {
          email: {
            msg: "Las credenciales son inválidas",
          },
        },
      });
    }

    return res.render("/users/login", {
      errors: {
        email: {
          msg: "No se encuentra este email en nuestra base de datos",
        },
      },
    });
  },
  profile: (req, res) => {
    res.render("users/profile");
  },
};

module.exports = usersController;
