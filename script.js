const translations = {

es: {
    entrantes: "Entrantes",
    dish1: "Ensalada César",
    dish2: "Croquetas"
},

en: {
    entrantes: "Starters",
    dish1: "Caesar Salad",
    dish2: "Croquettes"
},

fr: {
    entrantes: "Entrées",
    dish1: "Salade César",
    dish2: "Croquettes"
},

de: {
    entrantes: "Vorspeisen",
    dish1: "Caesar Salat",
    dish2: "Kroketten"
},

it: {
    entrantes: "Antipasti",
    dish1: "Insalata Cesare",
    dish2: "Crocchette"
},

pt: {
    entrantes: "Entradas",
    dish1: "Salada Caesar",
    dish2: "Croquetes"
}

};

document.getElementById("language")
.addEventListener("change", function() {

    const lang = this.value;

    document.getElementById("entrantes").innerText =
        translations[lang].entrantes;

    document.getElementById("dish1").innerText =
        translations[lang].dish1;

    document.getElementById("dish2").innerText =
        translations[lang].dish2;

});