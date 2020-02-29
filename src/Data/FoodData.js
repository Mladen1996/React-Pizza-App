export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export const foodItems = [
  {
    img: "/img/cevapi.jpg",
    name: "Ćevapi",
    section: "Barbecue",
    price: 1.5
  },
  {
    img: "/img/pljeskavica.jpg",
    name: "Pljeskavica",
    section: "Barbecue",
    price: 2
  },
  {
    img: "/img/gurmanska.jpg",
    name: "Gurmanska pljeskavica",
    section: "Barbecue",
    price: 2.5
  },
  {
    img: "/img/punjena-pljeskavica.jpg",
    name: "Punjena pljeskavica",
    section: "Barbecue",
    price: 2.5
  },
  {
    img: "/img/belomeso.jpg",
    name: "Belo meso",
    section: "Barbecue",
    price: 3
  },
  {
    img: "/img/kobasice.jpg",
    name: 'Kobasice',
    section: "Barbecue",
    price: 3
  },
  {
    name: "Cheese Pizza",
    img: "/img/pizza.png",
    section: "Pizza",
    price: 1
  },
  {
    name: "Pepperoni Pizza",
    img: "/img/pizza2.jpeg",
    section: "Pizza",
    price: 1.5
  },
  {
    name: "Chicken Pizza",
    img: "/img/chicken-pizza.jpeg",
    section: "Pizza",
    price: 2
  },
  {
    img: "/img/healthy-pizza.jpeg",
    name: "Veggie Pizza",
    section: "Pizza",
    price: 2
  },
  {
    img: "/img/burger.jpeg",
    name: "Burger",
    section: "Sandwich",
    price: 3
  },
  { img: "/img/gyro.jpeg", name: "Gyro", section: "Sandwich", price: 4.5 },
  {
    img: "/img/sandwich.jpeg",
    name: "Shrimp PoBoy",
    section: "Sandwich",
    price: 6
  },
  {
    img: "/img/fries.jpeg",
    name: "Fries",
    section: "Sides",
    price: 1
  },
  {
    price: 1,
    name: "Soda",
    section: "Drinks",
    img: "/img/soda.jpg",
    choices: ["Coke", "Sprite", "Root Beer"]
  }
 
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});

//  © created by react.school
