userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };