const digi2 = async () => {
  let digi = "";
  try {
    let data = await fetch("http://localhost:3004/digi-2");
    let res = await data.json();
    digi = res.map((item) => {
      return `
              <a href="${item.link}">
              <img
                class="w-[260px] h-[80px] px-14 "
                src="${item.image}"
                alt="${item.alt}"
              /></a>`;
    });
    document.querySelector(".digi .digi-2 .digibrand2 ").innerHTML =
      digi.join("");
  } catch (error) {
    console.log(error.message);
  }
};
export default digi2;
