const picture2 = async () => {
  let picture2 = "";
  try {
    let data = await fetch("http://localhost:3004/picture2");
    let res = await data.json();
    picture2 = res.map((item) => {
      return `
          <div class="desktop:w-[660px] h-[264px] mobile:w-[100%] mobile:mx-auto mobile:mt-[4px]">
            <a
              href="${item.link}"
              ><img
                src="${item.img}"
                alt="${item.alt}"
                class="rounded-xl desktop:w-[660px] h-[264px] mobile:w-[80%] mobile:mb-[4px]"
            /></a>
          </div>`;
    });
    document.querySelector(".picture2").innerHTML = picture2.join("");
  } catch (error) {
    console.log(error.message);
  }
};
export default picture2;
