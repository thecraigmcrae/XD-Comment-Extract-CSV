var csvArray = [],
sectionName = "",
userName = "",
annotation = " ",
comment = "",
changed = 0,
pageName = document.title;

function comma4dash(commaStr) {
  return commaStr.replace(/,/g, '-'); //will replace commas for a dash
}


var elements = document.querySelectorAll('#ccx-comments-list li');
var pageUrl = window.location.href;

Array.prototype.forEach.call(elements, function(el, i){
  if(el.closest('section')){
    sectionName = el.closest('section').querySelectorAll('h3 span')[0].textContent;
  }

  if (el.querySelectorAll(".user-name").length>0) {
    userName = el.querySelectorAll(".user-name")[0].childNodes[0].textContent;
    changed = 1;
  }

  if (el.querySelectorAll(".timestamp").length>0) {
    timeStamp = el.querySelectorAll(".timestamp")[0].textContent;
    changed = 1;
  }

  if (el.querySelectorAll(".comment-text").length>0) {
    comment = el.querySelectorAll(".comment-text span div")[0].textContent;
    comment = comment.replace(/(\r\n|\n|\r)/gm,""); //remove line breaks
    changed = 1;
  }
  if (el.querySelectorAll(".annotation-marker").length>0) {
    annotation = el.querySelectorAll(".annotation-marker")[0].textContent;
    changed = 1;
  } else (annotation = " ");

  changed?(csvArray.push(pageName + "," + pageUrl + "," + comma4dash(sectionName) + "," + comma4dash(timeStamp) + "," + comma4dash(userName) + ",\"" + comma4dash(comment) + "\"," + annotation + "\n"), changed=0):'';

});

console.dir (csvArray.join(""));
