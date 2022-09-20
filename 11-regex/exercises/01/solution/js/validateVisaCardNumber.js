const validateVisaCardNumber = (cardNumber) => {
  const pattern = /^4\d{15}$/;
  return cardNumber.match(pattern) ? true : false;
};

export default validateVisaCardNumber;
