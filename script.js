const menuBtn = document.getElementById("menuBtn")
const mobileMenu = document.getElementById("mobileMenu")

menuBtn.addEventListener("click", () => {

mobileMenu.classList.toggle("hidden")

})

const btnTopo = document.getElementById("btnTopo");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btnTopo.classList.remove("hidden");
  } else {
    btnTopo.classList.add("hidden");
  }
};

btnTopo.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
