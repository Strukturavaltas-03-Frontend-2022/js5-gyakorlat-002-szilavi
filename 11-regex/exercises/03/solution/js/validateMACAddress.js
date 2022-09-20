const validateMACAddress = (macAddress) => {
  const pattern = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
  return macAddress.match(pattern) ? true : false;
};

export default validateMACAddress;
