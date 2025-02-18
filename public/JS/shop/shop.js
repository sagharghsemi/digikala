const shop = async () => {
  let shopping = "";
  try {
    let data = await fetch("http://localhost:3004/shop");
    let res = await data.json();
    shopping = res.map((item) => {
      return `
    <a href="${item.link}"
        <div class="flex flex-col items-center">
          <img src="${item.img}" alt="${item.alt}" class="desktop:w-[100px] desktop:h-[100px] mobile:w-[75px] mobile:h-[75px]" />
          <h4 class="text-center text-[12px] font-bold">${item.text}</h4>
        </div></a>`;
    });
    document.querySelector(".shop .shopping").innerHTML = shopping.join("");
  } catch (error) {
    console.log(error.message);
  }
};
export default shop;
