/*
Hey i'm taking quiz on testdome to improve my javascript dom skill
I have to fix the bug but i still cannot finish it, when i write the code it'd would score 100%, while mine is 50%. Please help me
, you can read the description here https://www.testdome.com/questions/javascript/loop/13775?visibility=17&skillId=2
*/

function appendChildren(decorateDivFunction) {
  var allDivs = document.getElementsByTagName("div");

  for (var i = 0; i < 2; i++) {      //i have change i comparison 'i < allDivs.length' to 'i < 2'
    var newDiv = document.createElement("div");
    decorateDivFunction(newDiv);
    allDivs[i].appendChild(newDiv);
  }
}

// Example case. 
document.body.innerHTML = `
<div id="a">
  <div id="b">
  </div>
</div>`;

//appendChildren(function(div) {});
console.log(document.body.innerHTML);
