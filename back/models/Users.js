const S = require("sequelize");
const db = require("../db/index");
const crypto = require("crypto");

class User extends S.Model {
  /* static buscaUsuario(params) {
    User.findOne (where)

    
  } */
}

User.init({
    name: {
      type: S.STRING,
      /* allowNull: false, */
    },
    lastName: {
      type: S.STRING,
      /* allowNull: false, */
    },
    email: {
      type: S.STRING,
      allowNull: false,
      unique: true,
      validation: {
        isEmail: true,
      },
    },
    isAdmin: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    fullName: {type: S.VIRTUAL, get(){return this.getDataValue("name") + " " + this.getDataValue("lastName")}},
    
    salt: {
      type: S.STRING,
    },
  },

  {
    sequelize: db,
    modelName: "user"
  }
);

User.addHook("beforeCreate", (user) => {
  user.salt = crypto.randomBytes(20).toString("hex");
  user.password = user.hashPassword(user.password);
});

User.prototype.hashPassword = function (password) {
  return crypto.createHmac("sha1", this.salt).update(password).digest("hex");
};

User.prototype.validatePassword = function (recibPassword) {
  return this.hashPassword(recibPassword) === this.password;
};

module.exports = User;