window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let l_dand = document.getElementById("dand-left");
  l_dand.style.transform = "rotate(" + window.pageYOffset/3 + "deg)";
  let r_dand = document.getElementById("dand-right");
  r_dand.style.transform = "rotate(" + window.pageYOffset/3 + "deg)";
}