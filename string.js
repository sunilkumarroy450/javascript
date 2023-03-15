const defangIPaddr = function (address) {
  let str = address.split(".");
  console.log(str.join("[.]"));
};

defangIPaddr("1.1.1.1");
