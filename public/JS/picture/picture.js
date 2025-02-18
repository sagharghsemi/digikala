const picture = async () => {
  let Picture = "";
  try {
    let data = await fetch("http://localhost:3004/picture");
    let res = await data.json();
    Picture = res.map((item) => {
      return `
        <div class=" desktop:w-[660px] h-[264px] mobile:w-[100%] mobile:mx-auto mobile:mt-[4px]">
          <a
            href="${item.link}"
            ><img
              src="${item.img}"
              alt="${item.alt}"
              class="rounded-xl desktop:w-[660px] h-[264px] mobile:w-[80%] mobile:mb-[4px]"
          /></a>
        </div>`;
    });
    document.querySelector(".picture").innerHTML = Picture.join("");
  } catch (error) {
    console.log(error.message);
  }
};
export default picture;
