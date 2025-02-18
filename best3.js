const best3 = async () => {
  let best = "";
  try {
    let data = await fetch("http://localhost:3004/best3");
    let res = await data.json();
    best = res.map((item) => {
      return `   <a href="${item.link}" class="mobile:mx-auto" > <img
        src="${item.img}"
        alt="${item.alt}"
        class="desktop:w-[320px] desktop:h-[230px] rounded-lg shadow-md mobile:w-[340px] mobile:h-[240px]"
      /></a>`;
    });
    document.querySelector(".best .best3").innerHTML = best.join("");
  } catch (error) {
    console.log(error.message);
  }
};
export default best3;
