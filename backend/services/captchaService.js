const axios = require('axios');

const verifyCaptcha = async (token) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
    params: {
      secret: secretKey,
      response: token
    }
  });
  return response.data.success;
};

module.exports = {
  verifyCaptcha,
};
