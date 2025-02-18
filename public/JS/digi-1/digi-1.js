const digi1 = async () => {
  let digi = "";
  try {
    let data = await fetch("http://localhost:3004/digi-1");
    let res = await data.json();
    digi = res.map((item) => {
      return `
            <a href="${item.link}">
            <img
              class="w-[190px] h-[80px] px-14"
              src="${item.image}"
              alt="${item.alt}"
            /></a>`;
    });
    document.querySelector(".digi .digi-1 .digibrand ").innerHTML =
      digi.join("");
  } catch (error) {
    console.log(error.message);
  }
};
export default digi1;
