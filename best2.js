const best2 = async () => {
  let Better = "";
  let moreItems = "";
  try {
    let data = await fetch("http://localhost:3004/best2");
    let res = await data.json();

    // تصاویر (اول 6 آیتم)
    Better = res.slice(0, 6).map((item) => {
      return `
      <a href="${item.link}" >  
          <img
            src="${item.image}"
            alt="${item.alt}"
            class="w-[68px] h-[68px] object-contain rounded-full"
          /></a>`;
    });

    // محتوای بیشتر (آیتم آخر)
    moreItems = `
        <div class="flex items-center text-green-600 bg-white text-sm px-3 py-1 rounded-full cursor-pointer hover:bg-green-700 transition w-[150px] h-[50px] text-center">
          <p>${res[6].moreItems.text}</p>
          ${res[6].moreItems.icon.svg}
        </div>
      `;

    // قرار دادن تصاویر و محتوای بیشتر در DOM
    document.querySelector(".best .best2 .Better").innerHTML = Better.join("");
    document.querySelector(".best .best2 .more-items").innerHTML = moreItems;
  } catch (error) {
    console.log(error.message);
  }
};

export default best2;
