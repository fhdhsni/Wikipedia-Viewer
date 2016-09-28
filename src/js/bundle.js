(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

/* eslint no-param-reassign: "off" */
function append(parent, child) {
  parent.appendChild(child);
}

function cleanUpTheElement(element) {
  element.innerHTML = "";
}

function addHeadline(result) {
  var li = document.createElement("li");
  var span = document.createElement("span");
  var liText = document.createTextNode("WIKIPEDIA");
  var spanText = document.createTextNode("VIEWER");

  li.setAttribute("id", "headline");
  append(li, liText);
  append(span, spanText);
  append(li, span);
  append(result, li);
}
module.exports = function (data) {
  var resultContainer = document.getElementById("result");

  cleanUpTheElement(resultContainer);
  if (data[1]) {
    data[1].forEach(function (title, index) {
      var entry = document.createElement("li");
      var a = document.createElement("a");
      var aText = document.createTextNode(title);
      var p = document.createElement("p");
      var pText = document.createTextNode(data[2][index]);

      entry.setAttribute("class", "entry");
      a.setAttribute("href", data[3][index]);
      a.setAttribute("class", "wiki-links");
      append(a, aText);
      append(p, pText);
      append(entry, a);
      append(entry, p);
      append(resultContainer, entry);
    });
  } else {
    addHeadline(resultContainer);
  }
  if (document.getElementById("temp-script")) {
    document.getElementById("temp-script").remove();
  }
};

},{}],2:[function(require,module,exports){
"use strict";

function stringify(obj) {
  var result = "?";

  Object.keys(obj).forEach(function (key) {
    result += key + "=" + obj[key] + "&";
  });
  result = result.slice(0, -1);

  return result;
}

module.exports = function (url, options, cb) {
  var script = document.createElement("script");

  window.jsonpParser = cb;
  options.callback = "jsonpParser";
  url = url + stringify(options);

  script.setAttribute("id", "temp-script");
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

},{}],3:[function(require,module,exports){
"use strict";

},{}],4:[function(require,module,exports){
"use strict";

(function () {
  module.exports = function (element) {
    return element.value;
  };
})();

},{}],5:[function(require,module,exports){
"use strict";

(function () {
  console.log("hi there");
  var getValueOfElement = require("./input.js");
  var ajaxCallToWikipedia = require("./ajax.js");
  var addToPage = require("./addToPage.js");
  var options = {
    action: "opensearch",
    format: "json",
    limit: 10
  };

  var searchInput = document.getElementById("search");

  searchInput.addEventListener("keyup", function () {
    var query = getValueOfElement(this);

    options.search = query;
    ajaxCallToWikipedia("https://en.wikipedia.org/w/api.php", options, addToPage);
  }, false);
})();

},{"./addToPage.js":1,"./ajax.js":2,"./input.js":4}]},{},[1,2,3,4,5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYWRkVG9QYWdlLmpzIiwic3JjL2pzL2FqYXguanMiLCJzcmMvanMvYnVuZGxlLmpzIiwic3JjL2pzL2lucHV0LmpzIiwic3JjL2pzL3NjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7QUFDQSxTQUFTLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0IsS0FBeEIsRUFBK0I7QUFDN0IsU0FBTyxXQUFQLENBQW1CLEtBQW5CO0FBQ0Q7O0FBRUQsU0FBUyxpQkFBVCxDQUEyQixPQUEzQixFQUFvQztBQUNsQyxVQUFRLFNBQVIsR0FBb0IsRUFBcEI7QUFDRDs7QUFFRCxTQUFTLFdBQVQsQ0FBcUIsTUFBckIsRUFBNkI7QUFDM0IsTUFBTSxLQUFLLFNBQVMsYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0EsTUFBTSxPQUFPLFNBQVMsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsTUFBTSxTQUFTLFNBQVMsY0FBVCxDQUF3QixXQUF4QixDQUFmO0FBQ0EsTUFBTSxXQUFXLFNBQVMsY0FBVCxDQUF3QixRQUF4QixDQUFqQjs7QUFFQSxLQUFHLFlBQUgsQ0FBZ0IsSUFBaEIsRUFBc0IsVUFBdEI7QUFDQSxTQUFPLEVBQVAsRUFBVyxNQUFYO0FBQ0EsU0FBTyxJQUFQLEVBQWEsUUFBYjtBQUNBLFNBQU8sRUFBUCxFQUFXLElBQVg7QUFDQSxTQUFPLE1BQVAsRUFBZSxFQUFmO0FBQ0Q7QUFDRCxPQUFPLE9BQVAsR0FBaUIsVUFBVSxJQUFWLEVBQWdCO0FBQy9CLE1BQU0sa0JBQWtCLFNBQVMsY0FBVCxDQUF3QixRQUF4QixDQUF4Qjs7QUFHQSxvQkFBa0IsZUFBbEI7QUFDQSxNQUFJLEtBQUssQ0FBTCxDQUFKLEVBQWE7QUFDWCxTQUFLLENBQUwsRUFBUSxPQUFSLENBQWdCLFVBQUMsS0FBRCxFQUFRLEtBQVIsRUFBa0I7QUFDaEMsVUFBTSxRQUFRLFNBQVMsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsVUFBTSxJQUFJLFNBQVMsYUFBVCxDQUF1QixHQUF2QixDQUFWO0FBQ0EsVUFBTSxRQUFRLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFkO0FBQ0EsVUFBTSxJQUFJLFNBQVMsYUFBVCxDQUF1QixHQUF2QixDQUFWO0FBQ0EsVUFBTSxRQUFRLFNBQVMsY0FBVCxDQUF3QixLQUFLLENBQUwsRUFBUSxLQUFSLENBQXhCLENBQWQ7O0FBRUEsWUFBTSxZQUFOLENBQW1CLE9BQW5CLEVBQTRCLE9BQTVCO0FBQ0EsUUFBRSxZQUFGLENBQWUsTUFBZixFQUF1QixLQUFLLENBQUwsRUFBUSxLQUFSLENBQXZCO0FBQ0EsUUFBRSxZQUFGLENBQWUsT0FBZixFQUF3QixZQUF4QjtBQUNBLGFBQU8sQ0FBUCxFQUFVLEtBQVY7QUFDQSxhQUFPLENBQVAsRUFBVSxLQUFWO0FBQ0EsYUFBTyxLQUFQLEVBQWMsQ0FBZDtBQUNBLGFBQU8sS0FBUCxFQUFjLENBQWQ7QUFDQSxhQUFPLGVBQVAsRUFBd0IsS0FBeEI7QUFDRCxLQWZEO0FBZ0JELEdBakJELE1BaUJPO0FBQ0wsZ0JBQVksZUFBWjtBQUNEO0FBQ0QsTUFBSSxTQUFTLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBSixFQUE0QztBQUMxQyxhQUFTLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUMsTUFBdkM7QUFDRDtBQUNGLENBNUJEOzs7OztBQ3JCQSxTQUFTLFNBQVQsQ0FBbUIsR0FBbkIsRUFBd0I7QUFDdEIsTUFBSSxTQUFTLEdBQWI7O0FBRUEsU0FBTyxJQUFQLENBQVksR0FBWixFQUFpQixPQUFqQixDQUF5QixVQUFDLEdBQUQsRUFBUztBQUNoQyxjQUFhLEdBQWIsU0FBb0IsSUFBSSxHQUFKLENBQXBCO0FBQ0QsR0FGRDtBQUdBLFdBQVMsT0FBTyxLQUFQLENBQWEsQ0FBYixFQUFnQixDQUFDLENBQWpCLENBQVQ7O0FBRUEsU0FBTyxNQUFQO0FBQ0Q7O0FBRUQsT0FBTyxPQUFQLEdBQWlCLFVBQVUsR0FBVixFQUFlLE9BQWYsRUFBd0IsRUFBeEIsRUFBNEI7QUFDM0MsTUFBTSxTQUFTLFNBQVMsYUFBVCxDQUF1QixRQUF2QixDQUFmOztBQUVBLFNBQU8sV0FBUCxHQUFxQixFQUFyQjtBQUNBLFVBQVEsUUFBUixHQUFtQixhQUFuQjtBQUNBLFFBQU0sTUFBTSxVQUFVLE9BQVYsQ0FBWjs7QUFFQSxTQUFPLFlBQVAsQ0FBb0IsSUFBcEIsRUFBMEIsYUFBMUI7QUFDQSxTQUFPLEdBQVAsR0FBYSxHQUFiO0FBQ0EsV0FBUyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxFQUF5QyxXQUF6QyxDQUFxRCxNQUFyRDtBQUNELENBVkQ7OztBQ1hBO0FBQ0E7Ozs7QUNEQyxhQUFZO0FBQ1gsU0FBTyxPQUFQLEdBQWlCLFVBQVUsT0FBVixFQUFtQjtBQUNsQyxXQUFPLFFBQVEsS0FBZjtBQUNELEdBRkQ7QUFHRCxDQUpBLEdBQUQ7Ozs7O0FDQUMsYUFBWTtBQUNYLFVBQVEsR0FBUixDQUFZLFVBQVo7QUFDQSxNQUFNLG9CQUFvQixRQUFRLFlBQVIsQ0FBMUI7QUFDQSxNQUFNLHNCQUFzQixRQUFRLFdBQVIsQ0FBNUI7QUFDQSxNQUFNLFlBQVksUUFBUSxnQkFBUixDQUFsQjtBQUNBLE1BQU0sVUFBVTtBQUNkLFlBQVEsWUFETTtBQUVkLFlBQVEsTUFGTTtBQUdkLFdBQU87QUFITyxHQUFoQjs7QUFNQSxNQUFNLGNBQWMsU0FBUyxjQUFULENBQXdCLFFBQXhCLENBQXBCOztBQUVBLGNBQVksZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsWUFBWTtBQUNoRCxRQUFNLFFBQVEsa0JBQWtCLElBQWxCLENBQWQ7O0FBRUEsWUFBUSxNQUFSLEdBQWlCLEtBQWpCO0FBQ0Esd0JBQW9CLG9DQUFwQixFQUEwRCxPQUExRCxFQUFtRSxTQUFuRTtBQUNELEdBTEQsRUFLRyxLQUxIO0FBTUQsQ0FuQkEsR0FBRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiBlc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246IFwib2ZmXCIgKi9cbmZ1bmN0aW9uIGFwcGVuZChwYXJlbnQsIGNoaWxkKSB7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFuVXBUaGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBhZGRIZWFkbGluZShyZXN1bHQpIHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgbGlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJXSUtJUEVESUFcIik7XG4gIGNvbnN0IHNwYW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJWSUVXRVJcIik7XG5cbiAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkbGluZVwiKTtcbiAgYXBwZW5kKGxpLCBsaVRleHQpO1xuICBhcHBlbmQoc3Bhbiwgc3BhblRleHQpO1xuICBhcHBlbmQobGksIHNwYW4pO1xuICBhcHBlbmQocmVzdWx0LCBsaSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGNvbnN0IHJlc3VsdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpO1xuXG5cbiAgY2xlYW5VcFRoZUVsZW1lbnQocmVzdWx0Q29udGFpbmVyKTtcbiAgaWYgKGRhdGFbMV0pIHtcbiAgICBkYXRhWzFdLmZvckVhY2goKHRpdGxlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICBjb25zdCBhVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlKTtcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IHBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YVsyXVtpbmRleF0pO1xuXG4gICAgICBlbnRyeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVudHJ5XCIpO1xuICAgICAgYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGRhdGFbM11baW5kZXhdKTtcbiAgICAgIGEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ3aWtpLWxpbmtzXCIpO1xuICAgICAgYXBwZW5kKGEsIGFUZXh0KTtcbiAgICAgIGFwcGVuZChwLCBwVGV4dCk7XG4gICAgICBhcHBlbmQoZW50cnksIGEpO1xuICAgICAgYXBwZW5kKGVudHJ5LCBwKTtcbiAgICAgIGFwcGVuZChyZXN1bHRDb250YWluZXIsIGVudHJ5KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBhZGRIZWFkbGluZShyZXN1bHRDb250YWluZXIpO1xuICB9XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXAtc2NyaXB0XCIpKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wLXNjcmlwdFwiKS5yZW1vdmUoKTtcbiAgfVxufTtcbiIsImZ1bmN0aW9uIHN0cmluZ2lmeShvYmopIHtcbiAgbGV0IHJlc3VsdCA9IFwiP1wiO1xuXG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgcmVzdWx0ICs9IGAke2tleX09JHtvYmpba2V5XX0mYDtcbiAgfSk7XG4gIHJlc3VsdCA9IHJlc3VsdC5zbGljZSgwLCAtMSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zLCBjYikge1xuICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuXG4gIHdpbmRvdy5qc29ucFBhcnNlciA9IGNiO1xuICBvcHRpb25zLmNhbGxiYWNrID0gXCJqc29ucFBhcnNlclwiO1xuICB1cmwgPSB1cmwgKyBzdHJpbmdpZnkob3B0aW9ucyk7XG5cbiAgc2NyaXB0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGVtcC1zY3JpcHRcIik7XG4gIHNjcmlwdC5zcmMgPSB1cmw7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKaWRXNWtiR1V1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNlcxMTkiLCIoZnVuY3Rpb24gKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQudmFsdWU7XG4gIH07XG59KCkpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS5sb2coXCJoaSB0aGVyZVwiKTtcbiAgY29uc3QgZ2V0VmFsdWVPZkVsZW1lbnQgPSByZXF1aXJlKFwiLi9pbnB1dC5qc1wiKTtcbiAgY29uc3QgYWpheENhbGxUb1dpa2lwZWRpYSA9IHJlcXVpcmUoXCIuL2FqYXguanNcIik7XG4gIGNvbnN0IGFkZFRvUGFnZSA9IHJlcXVpcmUoXCIuL2FkZFRvUGFnZS5qc1wiKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBhY3Rpb246IFwib3BlbnNlYXJjaFwiLFxuICAgIGZvcm1hdDogXCJqc29uXCIsXG4gICAgbGltaXQ6IDEwLFxuICB9O1xuXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hcIik7XG5cbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBxdWVyeSA9IGdldFZhbHVlT2ZFbGVtZW50KHRoaXMpO1xuXG4gICAgb3B0aW9ucy5zZWFyY2ggPSBxdWVyeTtcbiAgICBhamF4Q2FsbFRvV2lraXBlZGlhKFwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3cvYXBpLnBocFwiLCBvcHRpb25zLCBhZGRUb1BhZ2UpO1xuICB9LCBmYWxzZSk7XG59KCkpO1xuIl19
