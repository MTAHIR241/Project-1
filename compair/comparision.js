// Array of objects for Brand 1
const brand1HairCareProducts = [
  {

  
    id: 0,
    productName: "",
    img: "",
    price: "",
    brand: "s",
    description: "",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
  },
  {
    id:1,
    productName: "Volume Boosting Shampoo",
    img: "/assets/Hairvolumeshampoo.webp",
    price: 9.99,
    brand: "Luxurious Locks",
    description:"Transform thin, lifeless hair into voluminous locks with our Volume Boosting Shampoo, infused with botanical extracts.",
  }, 
  {
    id:2,

    productName: "Silky Smooth Shampoo",
    img: "../assets/Silky Smooth Shampoo.webp",
    price: 8.49,
    brand: "Luxurious Locks",
    description: "Nourish your locks with our Hydrating Conditioner, formulated to moisturize and detangle for manageable hair.",
  },
  {
    id:3,

    productName: "Head & Shoulders",
    img: "../assets/headshoulder.jpg",
    price: 8.49,
    brand: "Procter & Gamble",
    description: "Head & Shoulders: Known for effective anti-dandruff shampoos that leave hair clean, refreshed, and smooth.",
  },
  {
    id:4,

    productName: "Aveda Shampoo",
    img: "../assets/Aveda.webp",
    price: 18.89,
    brand: " Estée Lauder Companies Inc.",
    description: "Aveda shampoos: Harnessing the power of botanicals, Aveda's luxurious formulas cleanse and nourish hair, leaving it beautifully soft, shiny, and healthy.",
  },
  {
    id:5,

    productName: "Hair Oil",
    img: "../assets/intensegrowth.webp",
    price: 18.89,
    brand: "CoNatural",
    description: "Intense Growth Hair Oil: Formulated with potent ingredients, this oil nourishes the scalp and hair follicles, promoting healthy hair growth.",
  },
  
  // Add more products as needed
];

// Array of objects for Brand 2
const brand2HairCareProducts = [
  {

  
    id: 0,
    productName: "",
    img: "",
    price: "",
    brand: "s",
    description: "",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
  },
  {
    id:1,
    brand: "Procter & Gamble",
    productName: "Pantene",
    img: "/assets/pantene.jpg",
    price: 8.99,
    description:  "Pantene shampoos: Infused with advanced Pro-V nutrients, they nourish and strengthen hair from root to tip, leaving it soft, shiny, and resilient.",
  },
  {
    id:2,

    brand: "Organic Oasis",
    productName: "hair oil",
    img: "../assets/hairoil.webp",
    price: 15.99,
    description: "Restore and strengthen damaged hair with our Repairing Hair Mask, packed with proteins and vitamins.",
  },
  {
    id:3,

    brand: "Jheri Redding ",
    productName: "Redken ",
    img: "../assets/redken.webp",
    price: 11.99,
    description: "Redken shampoos are at the forefront of professional hair care, meticulously crafted to cleanse, nourish, and enhance hair health.",
  },
  {
    id:4,

    brand: "Clairol Herbal Essence",
    productName: "Herbal Essences ",
    img: "../assets/herbalessences.avif",
    price: 11.99,
    description: "Redken shampoos are at the forefront of professional hair care, meticulously crafted to cleanse, nourish, and enhance hair health.",
  }, {
    id:5,

    brand: "Moroccanoil",
    productName: " Moroccanoil ",
    img: "../assets/Moroccanoil.jpg",
    price: 16.99,
    description: "Moroccanoil: Infused with nourishing argan oil, Moroccanoil products offer a luxurious hair care experience.",
  },
  // Add more products as needed
];

  function item1(a) {
    if (a != select2) {
        document.getElementById("img1").src = brand1HairCareProducts[a].img
        document.getElementById("price1").innerHTML = brand1HairCareProducts[a].price
        document.getElementById("desc1").innerHTML = brand1HairCareProducts[a].description
        document.getElementById("brand1").innerHTML = brand1HairCareProducts[a].brand
        document.getElementById("material1").innerHTML = brand1HairCareProducts[a].productName

    } else {
        document.getElementById("select1").selectedIndex = 0;
        document.getElementById("img1").src = brand1HairCareProducts[0].img
        document.getElementById("price1").innerHTML = ""
        document.getElementById("desc1").innerHTML = ""
        document.getElementById("brand1").innerHTML = ""  
        document.getElementById("material1").innerHTML = ""

    }
  }
  function item2(b) {
    if (b != select1) {
        document.getElementById("img2").src = brand2HairCareProducts[b].img
        document.getElementById("price2").innerHTML = brand2HairCareProducts[b].price
        document.getElementById("desc2").innerHTML = brand2HairCareProducts[b].description
        document.getElementById("brand2").innerHTML = brand2HairCareProducts[b].brand
        document.getElementById("material2").innerHTML = brand2HairCareProducts[b].productName

    } else {
        document.getElementById("select2").selectedIndex = 0;
        document.getElementById("img2").src = brand2HairCareProducts[0].img
        document.getElementById("price2").innerHTML = ""
        document.getElementById("desc2").innerHTML = ''
        document.getElementById("brand2").innerHTML = ""
        document.getElementById("material2").innerHTML = ""


    }
  }