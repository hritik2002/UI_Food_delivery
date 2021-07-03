
const Popular = [
  {
    id: "1",
    heading:"top of the week",
    title:"Pepperoni Pizza",
    desc:"Weight 600 gr",
    src: require("./PIZZA.png"),
    Selected:true,
    iconName1 : "crown",
    iconName2 : "plus",
    star:"5.0",
    price: 599 ,
    sizeName: `Medium 14"`,
    sizeNumber: 14 ,
    crust : "Thin Crust",
    diliveryTime: 30 +" min",
    ingredients: [
      {
        id:"1",
        name : "rice",
        image: require("./rice.png")
      },
      {
        id:"2",
        name : "Onion",
        image: require("./onion.png")
      },
      {
        id:"3",
        name : "garlic",
        image: require("./garlic.png")
      },
      {
        id:"4",
        name : "tomato",
        image: require("./tomato.png")
      },
    ]

    
  },
  {
    id: "2",
    heading:"top of the week",
    title:"Veggie Pizza",
    desc:"Weight 540 gr",
    src: require("./PIZZA.png"),
    Selected:false,
    iconName1 : "crown",
    iconName2 : "plus",
    star:"4.7",
    price: 199 ,
    sizeName: "Medium",
    sizeNumber: 14 ,
    crust : "Thin Crust",
    diliveryTime: 30,
    ingredients: [
      {
        id:"3",
        name : "garlic",
        image: require("./garlic.png")
      },
      {
        id:"4",
        name : "tomato",
        image: require("./tomato.png")
      },
    ]
  },
  {
    id: "3",
    heading:"top of the week",
    title:"Margherita Pizza",
    desc:"Weight 400 gr",
    src: require("./PIZZA.png"),
    Selected:false,
    iconName1 : "crown",
    iconName2 : "plus",
    star:"4.8",
    price: 399 ,
    sizeName: "Medium",
    sizeNumber: 14 ,
    crust : "Thin Crust",
diliveryTime: 30,
ingredients: [
  {
    id:"1",
    name : "rice",
    image: require("./rice.png")
  },
  {
    id:"2",
    name : "Onion",
    image: require("./onion.png")
  },
]
}
]


export default Popular;



