const mainController = {
  index: (req, res) => {
    console.log("entrando al render de index");
    let cuidadosBasicos = [
      {
        id: 1,
        name: "Sérum demaquillante de ojos y labios",
        image: "/images/products/serumDemaq.png",
        price: 2330,
        description:
          "Sérum siliconado que retira facilmente maquillaje waterproof. Es totalmente oil free.",
        package: "70 ml",
        class: "Cuidados Básicos",
      },
      {
        id: 2,
        name: "Crema de limpieza",
        image: "/images/products/cremaLimpieza.png",
        price: 3500,
        description:
          "Sérum siliconado que retira facilmente maquillaje waterproof. Es totalmente oil free.",
        package: "70 ml",
        class: "Cuidados Básicos",
      },
      {
        id: 3,
        name: "Dermopulido gel",
        image: "/images/products/dermopulidoGel.png",
        price: 3100,
        description:
          "Sérum siliconado que retira facilmente maquillaje waterproof. Es totalmente oil free.",
        package: "70 ml",
        class: "Cuidados Básicos",
      },
      {
        id: 4,
        name: "Leche de limpieza",
        image: "/images/products/lecheLimpieza.png",
        price: 2900,
        description:
          "Sérum siliconado que retira facilmente maquillaje waterproof. Es totalmente oil free.",
        package: "70 ml",
        class: "Cuidados Básicos",
      },
    ];
    let maquillaje = [
      {
        id: 5,
        name: "Iluminador Tonalizador",
        image: "/images/products/IluminadorTonalizador.png",
        price: 2330,
        description:
          "Sérum siliconado que retira facilmente maquillaje waterproof. Es totalmente oil free.",
        package: "70 ml",
        class: "Cuidados Básicos",
      },
      {
        id: 6,
        name: "Paleta Cromatica",
        image: "/images/products/paletaCromatica.png",
        price: 3500,
        description:
          "Sérum siliconado que retira facilmente maquillaje waterproof. Es totalmente oil free.",
        package: "70 ml",
        class: "Cuidados Básicos",
      },
      {
        id: 7,
        name: "Prebase Prime Luminous",
        image: "/images/products/PrebasePrimeLuminous.png",
        price: 3100,
        description:
          "Sérum siliconado que retira facilmente maquillaje waterproof. Es totalmente oil free.",
        package: "70 ml",
        class: "Cuidados Básicos",
      },
      {
        id: 8,
        name: "Neblina Fijadora",
        image: "/images/products/neblinaFijadora.png",
        price: 2900,
        description:
          "Sérum siliconado que retira facilmente maquillaje waterproof. Es totalmente oil free.",
        package: "70 ml",
        class: "Cuidados Básicos",
      },
    ];
    res.render("index", {
      listOfCuidadosBasicos: cuidadosBasicos,
      listOfMaquillaje: maquillaje,
    });
  },
};

module.exports = mainController;
