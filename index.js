const fooditem = [
  {
    FoodName: "Cheese paratha",
    foodimg:
      "https://th.bing.com/th/id/R.db685ebe73803c9f506ff61303ecf27d?rik=ULyfvg8slN2kvg&pid=ImgRaw&r=0",
    price: "RS 250",
    type: "breakFast",
    des: "These cheese flatbreads make for a wholesome breakfast or brunch. There are many many varieties of paratha made and this is one such tasty paratha which the kids are going to love.",
  },
  {
    FoodName: "Aloo Paratha",
    foodimg:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
    price: "RS 200",
    type: "breakFast",
    des: "Aloo Paratha is a bread dish originating from the Indian subcontinent. It is a breakfast dish originated from the Punjab region.",
  },
  {
    FoodName: "Egg Paratha",
    foodimg:
      "https://i1.wp.com/img.buzzfeed.com/buzzfeed-static/static/2015-12/30/13/campaign_images/webdr13/how-to-make-a-froot-loops-white-russian-2-15323-1451499025-0_dblbig.jpg?resize=625%2C415&ssl=1",
    price: "RS 150",
    type: "breakFast",
    des: "Egg paratha recipe — easy breakfast, brunch or dinner recipe that is protein rich, healthy and tasty. Egg paratha is a kids' favorite, so i make it often for their after school snack. To make egg paratha, you can use ready paratha, roti or frozen paratha as well.",
  },
  {
    FoodName: "Daal Chawal",
    foodimg:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
    price: "RS 400",
    type: "Lunch",
    des: "The most fascinating, fabulously fantastic and simple lightweight Pakistan’s most favorite dish, Daal Chawal Recipe (Daal Rice) is here at Sooperchef.pk. It’s simple, fast and delicious Pakistani Recipe.",
  },
  {
    FoodName: "Pakal Paneer",
    foodimg:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
    price: "RS 400",
    type: "Lunch",
    des: "Palak Paneer is a popular Indian dish of Indian cottage cheese cubes in a mild, spiced smooth spinach sauce. This delicious creamy dish is made with fresh spinach leaves, paneer (firm cottage cheese), onions, tomatoes, herbs and spices.",
  },
  {
    FoodName: "Aloo Ghobi",
    foodimg:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
    price: "RS 200",
    type: "Lunch",
    des: "Aloo Gobi ki Sabzi is a classic Pakistani dish of Potatoes and Cauliflower cooked in savory spices and garnished with chillies and cilantro.",
  },
  {
    FoodName: "Aloo Goshat",
    foodimg:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
    price: "RS 200",
    type: "Lunch",
    des: "Aloo Gosht is a spicy, thick and creamy meat gravy that originates from Pakistani and North Indian cuisine.This gravy has potatoes cooked with lamb or mutton in a thick stew.",
  },
  {
    FoodName: "Banana Shakes",
    foodimg:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
    price: "RS 150",
    type: "Shakes",
    des: "You need less than five minutes to make this easy banana smoothie. Use our simple recipe on it’s own or use it as a base for other smoothies.",
  },
  {
    FoodName: "Mango Shakes",
    foodimg:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
    price: "RS 150",
    type: "Shakes",
    des: "Mango shake is a cool and tempting fruit drink prepared by simply blending ripe mango pieces, milk and sugar. To keep things simple and easy, this recipe primarily explains how to make mango shake with milk.",
  },
  {
    FoodName: "Biryani",
    foodimg:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
    price: "RS 600",
    type: "Dinner",
    des: "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat, and sometimes, in addition, eggs and/or vegetables such as potatoes in certain regional varieties.",
  },
  {
    FoodName: "Korma",
    foodimg:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
    price: "RS 250",
    type: "Dinner",
    des: "Korma is a gravy dish that is usually made with yogurt, lots of nuts and spices. A Mughal era original, Chicken Korma is the perfect dinner party dish that is easy, quick and a no fuss recipe.",
  },
];

const menue = document.querySelector(".menue");

const breakfast = document.querySelector(".breakfast");
const Lunch = document.querySelector(".lunch");
const Shakes = document.querySelector(".Shakes");
const all = document.querySelector(".all");
const dinner = document.querySelector(".dinner");
const header = document.querySelector(".header")



fooditem.forEach(function (item) {
  menue.insertAdjacentHTML(
    "afterbegin",
    `<div class="container menue-item">
<div class="row py-4 g-4">
  <div class=" col-12 d-flex">
    <img
      src="${item.foodimg}"
      class="w-50"
      alt=""
    />
    <div class="ms-3">
      <h3>${item.FoodName}</h3>
      <span class="text-danger">${item.price}</span>
      <p>
        ${item.des}
      </p>
    </div>
  </div>
</div>
</div>`
  );
});

const clearScreen = () => {
  while (menue.firstChild) {
    menue.removeChild(menue.lastChild);
  }
};

// Dinner

dinner.addEventListener("click", (e) => {
  e.preventDefault();
  header.innerText = "Our Dinner Menu";
  fooditem.forEach(function (item) {
    clearScreen();
    
    if (item.type === "Dinner")
      menue.insertAdjacentHTML(
        "afterbegin",
        `<div class="container menue-item">
<div class="row py-4 g-4">
  <div class=" col-12 d-flex">
    <img
      src="${item.foodimg}"
      class="w-50"
      alt=""
    />
    <div class="ms-3">
      <h3>${item.FoodName}</h3>
      <span class="text-danger">${item.price}</span>
      <p>
        ${item.des}
      </p>
    </div>
  </div>
</div>
</div>`
      );
  });
});

// all

all.addEventListener("click", (e) => {
  e.preventDefault();
  header.innerText = "Our Menu"
  clearScreen();

  fooditem.forEach(function (item) {
    menue.insertAdjacentHTML(
      "afterbegin",
      `<div class="container menue-item">
<div class="row py-4 g-4">
  <div class=" col-12 d-flex">
    <img
      src="${item.foodimg}"
      class="w-50"
      alt=""
    />
    <div class="ms-3">
      <h3>${item.FoodName}</h3>
      <span class="text-danger">${item.price}</span>
      <p>
        ${item.des}
      </p>
    </div>
  </div>
</div>
</div>`
    );
  });
});

Shakes.addEventListener("click", (e) => {
  e.preventDefault();
  header.innerText = "Our Shakes Menu"
  clearScreen();

  fooditem.forEach(function (item) {
    if (item.type === "Shakes")
      menue.insertAdjacentHTML(
        "afterbegin",
        `<div class="container menue-item">
<div class="row py-4 g-4">
  <div class=" col-12 d-flex">
    <img
      src="${item.foodimg}"
      class="w-50"
      alt=""
    />
    <div class="ms-3">
      <h3>${item.FoodName}</h3>
      <span class="text-danger">${item.price}</span>
      <p>
        ${item.des}
      </p>
    </div>
  </div>
</div>
</div>`
      );
  });
});

// Breakfast

breakfast.addEventListener("click", (e) => {
  clearScreen();
  header.innerText = "Our Breakfast Menu"
  e.preventDefault();
  fooditem.forEach(function (item) {
    if (item.type == "breakFast")
      menue.insertAdjacentHTML(
        "afterbegin",
        `<div class="container menue-item">
<div class="row py-4 g-4">
  <div class=" col-12 d-flex">
    <img
      src="${item.foodimg}"
      class="w-50"
      alt=""
    />
    <div class="ms-3">
      <h3>${item.FoodName}</h3>
      <span class="text-danger">${item.price}</span>
      <p>
        ${item.des}
      </p>
    </div>
  </div>
</div>
</div>`
      );
  });
});

// Lunch

Lunch.addEventListener("click", (e) => {
  clearScreen();
  header.innerText = "Our Lunch Menu"
  e.preventDefault();
  fooditem.forEach(function (item) {
    if (item.type == "Lunch")
      menue.insertAdjacentHTML(
        "afterbegin",
        `<div class="container menue-item">
<div class="row py-4 g-4">
  <div class=" col-12 d-flex">
    <img
      src="${item.foodimg}"
      class="w-50"
      alt=""
    />
    <div class="ms-3">
      <h3>${item.FoodName}</h3>
      <span class="text-danger">${item.price}</span>
      <p>
        ${item.des}
      </p>
    </div>
  </div>
</div>
</div>`
      );
  });
});
