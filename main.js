const menuButton = document.getElementById("js--menu");
const navigation = document.getElementById("js--nav");
const body = document.getElementById("js--body");

button.onclick = function(){
    navigation.style.visibility = "visible";
    body.style.overflow = "hidden";
};

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("visible");
  menuButton.classList.toggle("open");
  body.style.overflow = navigation.classList.contains("visible") ? "hidden" : "auto";
});