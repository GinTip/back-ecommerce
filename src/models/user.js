const { Schema, model } = require("mongoose");

const UserSchema = Schema(
  {
    email: {
      type: String,
      require: [true, "El email es requerido"],
      unique: true,
    },
    username: {
      type: String,
      require: [true, "El nombre de usuario es requerido"],
      unique: true,
    },
    password: {
      type: String,
    }
  }
);

UserSchema.methods.toJSON = function() {
  const { __v, _id, ...rest } = this.toObject();
  rest.id = _id;
  return rest;
}

const User = model("user", UserSchema);
module.exports = User;