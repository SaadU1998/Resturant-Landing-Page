const fooditem = [
  {
    FoodName: "Cheese paratha",
    foodimg:
      "https://th.bing.com/th/id/R.81810d0970dbe1d59878a63c4c784118?rik=PMHjRvB7pOX65A&pid=ImgRaw&r=0",
    price: "RS 250",
    type: "breakFast",
    des: "These cheese flatbreads make for a wholesome breakfast or brunch. There are many many varieties of paratha made and this is one such tasty paratha which the kids are going to love.",
  },
  {
    FoodName: "Aloo Paratha",
    foodimg:
      "https://www.resto-maharaja.fr/wp-content/uploads/2017/09/Aloo-Paratha.jpg",
    price: "RS 200",
    type: "breakFast",
    des: "Aloo Paratha is a bread dish originating from the Indian subcontinent. It is a breakfast dish originated from the Punjab region.",
  },
  {
    FoodName: "Egg Paratha",
    foodimg:
      "https://th.bing.com/th/id/R.cd58812b095ce19bca96bc4cefbd16aa?rik=VCSuZO8MbSlfhQ&pid=ImgRaw&r=0",
    price: "RS 150",
    type: "breakFast",
    des: "Egg paratha recipe — easy breakfast, brunch or dinner recipe that is protein rich, healthy and tasty. Egg paratha is a kids' favorite, so i make it often for their after school snack. To make egg paratha, you can use ready paratha, roti or frozen paratha as well.",
  },
  {
    FoodName: "Daal Chawal",
    foodimg:
      "https://th.bing.com/th/id/R.4dedcf379c93f500ed3832b6d5525e1d?rik=h33k1dxagf5Pgw&riu=http%3a%2f%2fgetsomefoodforthought.com%2fwp-content%2fuploads%2f2020%2f02%2fDaal-Chawal.jpeg&ehk=1vbkxmNOcgSZiPkHofbdn4yCyTQosC%2fD9qTXraKxXMo%3d&risl=&pid=ImgRaw&r=0",
    price: "RS 400",
    type: "Lunch",
    des: "The most fascinating, fabulously fantastic and simple lightweight Pakistan’s most favorite dish, Daal Chawal Recipe (Daal Rice) is here at Sooperchef.pk. It’s simple, fast and delicious Pakistani Recipe.",
  },
  {
    FoodName: "Palak Paneer",
    foodimg:
      "https://th.bing.com/th/id/R.8fee4c504effe3e5eab6c61b2044e166?rik=uDVngoLQ9mFjYw&pid=ImgRaw&r=0",
    price: "RS 400",
    type: "Lunch",
    des: "Palak Paneer is a popular Indian dish of Indian cottage cheese cubes in a mild, spiced smooth spinach sauce. This delicious creamy dish is made with fresh spinach leaves, paneer (firm cottage cheese), onions, tomatoes, herbs and spices.",
  },
  {
    FoodName: "Aloo Ghobi",
    foodimg:
      "https://www.thedeliciouscrescent.com/wp-content/uploads/2020/03/Aloo-Gobi_4.jpg",
    price: "RS 200",
    type: "Lunch",
    des: "Aloo Gobi ki Sabzi is a classic Pakistani dish of Potatoes and Cauliflower cooked in savory spices and garnished with chillies and cilantro.",
  },
  {
    FoodName: "Aloo Goshat",
    foodimg:
      "https://recipe52.com/wp-content/uploads/2019/12/aloo-gosht-3-1.jpg",
    price: "RS 200",
    type: "Lunch",
    des: "Aloo Gosht is a spicy, thick and creamy meat gravy that originates from Pakistani and North Indian cuisine.This gravy has potatoes cooked with lamb or mutton in a thick stew.",
  },
  {
    FoodName: "Banana Shakes",
    foodimg:
      "https://th.bing.com/th/id/OIP.k516AXBW66XGK0ZzW7twrgHaFj?pid=ImgDet&w=1200&h=900&rs=1",
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
      "https://www.chompslurrpburp.com/wp-content/uploads/2017/09/Kathal-biryani-5.jpg",
    price: "RS 600",
    type: "Dinner",
    des: "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat, and sometimes, in addition, eggs and/or vegetables such as potatoes in certain regional varieties.",
  },
  {
    FoodName: "Korma",
    foodimg:
      "https://th.bing.com/th/id/R.94ef0ebc53dd403dd619fa90ad49ed64?rik=Lgz%2b8ICj8%2bGWpw&pid=ImgRaw&r=0",
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
const header = document.querySelector(".header");

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
  header.innerText = "Our Menu";
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
  header.innerText = "Our Shakes Menu";
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
  header.innerText = "Our Breakfast Menu";
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
  header.innerText = "Our Lunch Menu";
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
