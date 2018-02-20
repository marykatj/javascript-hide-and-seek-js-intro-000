function getFirstSelector(selector) {
  var element = document.querySelector(selector);
  return element;
}

function nestedTarget() {
  var element = document.querySelector('div#nested div.target');
  return element;
}
function increaseRankBy(n) {
  var element = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < element.length; i++) {
    element[i].innerHTML = parseInt(i+n).toString()
  }
  return element;
}
