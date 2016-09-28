(function () {
  console.log("hi there");
  const getValueOfElement = require("./input.js");
  const ajaxCallToWikipedia = require("./ajax.js");
  const addToPage = require("./addToPage.js");
  const options = {
    action: "opensearch",
    format: "json",
    limit: 10,
  };

  const searchInput = document.getElementById("search");

  searchInput.addEventListener("keyup", function () {
    const query = getValueOfElement(this);

    options.search = query;
    ajaxCallToWikipedia("https://en.wikipedia.org/w/api.php", options, addToPage);
  }, false);
}());
