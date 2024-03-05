const { body } = require("express-validator");

const userCreateValidation = () => {
    return [
        body("name")
            .isString()
            .withMessage("O nome é obrigatório.")
            .isLength({ min: 3 })
            .withMessage("O nome precisa ter no minimo três caracteres."),
        body("email")
            .isString()
            .withMessage("O email é obrigatório.")
            .isEmail()
            .withMessage("Insira um e-mail válido."),
        body("password")
            .isString()
            .withMessage("A senha é obrigatório.")
            .isLength({ min: 5 })
            .withMessage("Insira uma senha com no minimo 5 caracteres."),
        body("confirmPassword")
            .isString()
            .withMessage("A confirmação de senha é obrigatório.")
            .custom((value, { req }) => {
                if (value != req.body.password) {
                    throw new Error("As senhas não são iguais")
                }
                return true;
            })
    ];
};

const loginValidation = () => {
    return [
        body("email")
            .isString()
            .withMessage("O e-mail é obrigatório")
            .isEmail()
            .withMessage("insira um e-mail válido"),
        body("password")
            .isString()
            .withMessage("A senha é obrigatória"),
    ]
};

const UpdateValidation = () => {
    return [
        body("name")
            .optional()
            .isLength({ min: 3 })
            .withMessage("O nome precisa de pelo menos 3 caracteres."),
        body("password")
            .optional()
            .isLength({ min: 5 })
            .withMessage("A senha precisa ter no minimo 5 caracteres."),
    ]
}

module.exports = {
    userCreateValidation,
    loginValidation,
    UpdateValidation,
}