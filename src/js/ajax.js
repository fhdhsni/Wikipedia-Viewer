function stringify(obj) {
  let result = "?";

  Object.keys(obj).forEach((key) => {
    result += `${key}=${obj[key]}&`;
  });
  result = result.slice(0, -1);

  return result;
}

module.exports = function (url, options, cb) {
  const script = document.createElement("script");

  window.jsonpParser = cb;
  options.callback = "jsonpParser";
  url = url + stringify(options);

  script.setAttribute("id", "temp-script");
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};
