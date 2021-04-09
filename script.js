i = 0;
function toggle() {
  if (i === 0) {
    document.querySelector("#nav").style.left = "0%";
    i--;
  } else {
    document.querySelector("#nav").style.left = "-100%";
    i++;
  }
}
