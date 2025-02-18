const Slide = async () => {
  let slide = "";
  try {
    let data = await fetch("http://localhost:3004/slide");
    let res = await data.json();
    slide = res.map((item) => {
      return `<swiper-slide
          ><img src="${item.slide}" alt="${item.alt}"
        /></swiper-slide>`;
    });
    document.querySelector(".slide .Swiper-slide").innerHTML = slide.join("");
  } catch (error) {
    console.log(error.message);
  }
};
export default Slide;
