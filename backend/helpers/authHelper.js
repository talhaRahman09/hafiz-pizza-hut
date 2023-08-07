import bcrypt from 'bcrypt';

export const encryptPassword = async (password) => {
  try {
    const saltRounds = 5;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    return hashPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (password, encryptPassword) => {
  return bcrypt.compare(password, encryptPassword);
};
