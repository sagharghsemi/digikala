const BrandSwiper = async () => {
  try {
    let response = await fetch("http://localhost:3004/brands");
    let brands = await response.json();

    let brandSlides = brands
      .map((item) => {
        let link = item.link ? item.link : "#";
        return `
          <swiper-slide>
            <a href="${link}">
              <img src="${item.slide}" alt="${item.alt}" class="w-full h-auto" />
            </a>
          </swiper-slide>
        `;
      })
      .join("");

    let swiperContainer = document.querySelector(".brands .Swiper-brands");
    if (swiperContainer) {
      swiperContainer.innerHTML = brandSlides;
    } else {
      console.error("عنصر '.brands .mySwiper' پیدا نشد.");
    }
  } catch (error) {
    console.error(error.message);
  }
};

export default BrandSwiper;
