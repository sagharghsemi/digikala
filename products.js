const products = async () => {
  let product;
  try {
    let data = await fetch("http://localhost:3004/products");
    let res = await data.json();
    product = res.map((item) => {
      return `
            <a href="${item.link}">  <div class="flex flex-col items-center"> <img
              class=" px-14 "
              src="${item.image}"
              alt="${item.alt}"
            /><h3 class="text-[12px] text-gray-600">${item.title}</h3></div></a>`;
    });
    document.querySelector(".products .product").innerHTML = product.join("");
  } catch (error) {
    console.log(error.message);
  }
};
export default products;
