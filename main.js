import Menu from "./Menu/Menu";
import Story from "./Story/Story";
import Slide from "./Slider/Slider";
import containe from "./containe/containe";
import Amazing from "./Amazing/Amazing";
import best1 from "./Best/best1";
import best2 from "./Best/best2";
import best3 from "./Best/best3";
import shop from "./shop/shop";
import picture from "./picture/picture";
import BrandSwiper from "./brands/brands";
import picture2 from "./picture2/picture2";
import products from "./products/products";
import digi1 from "./digi-1/digi-1";
import digi2 from "./digi-2/digi-2";
Menu();
Story();
Slide();
containe();
Amazing();
best1();
best2();
best3();
shop();
picture();
BrandSwiper();
picture2();
products();
digi1();
digi2();
window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    document.querySelector(".Basket .basket").classList.add("addBasket");
  } else {
    document.querySelector(".Basket .basket").classList.remove("addBasket");
  }
});
