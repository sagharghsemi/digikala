const Amazing = async () => {
  let amazing = "";
  try {
    let data = await fetch("http://localhost:3004/Amazing");
    let res = await data.json();

    // 🛑 قبل از مقداردهی، swiper قبلی رو حذف کن
    if (document.querySelector(".mySwiper")?.swiper) {
      document.querySelector(".mySwiper").swiper.destroy(true, true);
    }

    amazing = res.map((item) => {
      return `
        <swiper-slide>
          <img src="${item.slide}" alt="${item.alt}" />
          <h3 class="text-[12px] text-[#2b2b2b] font-sans font-medium">${item.text}</h3>
        </swiper-slide>`;
    });

    document.querySelector(".Amazing .Swiper-amazing").innerHTML =
      amazing.join("");

    new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
export default Amazing;
