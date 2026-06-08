function setLang(lang){

// aquí luego puedes cambiar textos si quieres
document.getElementById("screen-lang").classList.add("hidden");
document.getElementById("screen-menu").classList.remove("hidden");
document.getElementById("screen-menu").classList.add("active");

}

function openMenu(section){

document.querySelectorAll(".screen").forEach(s=>{
s.classList.add("hidden");
s.classList.remove("active");
});

document.getElementById(section).classList.remove("hidden");
document.getElementById(section).classList.add("active");

}

function back(){

document.querySelectorAll(".screen").forEach(s=>{
s.classList.add("hidden");
});

document.getElementById("screen-menu").classList.remove("hidden");
document.getElementById("screen-menu").classList.add("active");

}