//Task1

/*<div id="hoverBox" style="width:100px; height:100px; background-color: gray;"></div>*/

  const hoverBox = document.getElementById("hoverBox");
  hoverBox.addEventListener("mouseover", function() {
    hoverBox.style.backgroundColor = "blue";
  });


//Task2

/*<div id="hoverBox2" style="width:100px; height:100px; background-color: gray;"></div>*/
  const hoverBox2 = document.getElementById("hoverBox2");
  hoverBox2.addEventListener("mouseover", function() {
    hoverBox2.style.backgroundColor = "blue";
  });
  hoverBox2.addEventListener("mouseout", function() {
    hoverBox2.style.backgroundColor = "gray";
  });



//Task3

/*<button id="clickBtn">לחץ כאן</button>
<p>נלחץ: <span id="clickCount">0</span> פעמים</p>*/

  let count = 0;
  const button = document.getElementById("clickBtn");
  const display = document.getElementById("clickCount");

  button.addEventListener("click", function() {
    count++;
    display.textContent = count;
  });