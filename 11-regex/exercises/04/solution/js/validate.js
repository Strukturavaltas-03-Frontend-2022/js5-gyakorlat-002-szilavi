const roles = {
  patterns: {
    visa: /^4\d{15}$/,
    ip: /^(?!0)(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm,
    mac: /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/,
  },
};

const validate = (string, type) => {
  return string.match(roles.patterns[type]) ? true : false;
};

export default validate;
