const Story = async () => {
  try {
    let data = await fetch("http://localhost:3004/story");
    let res = await data.json();

    let story = res.map((item) => {
      return `<swiper-slide>
                <img src="${item.image}" alt="${item.alt}" class="w-[80px] h-[80px] object-cover rounded-full border-2 border-purple-500"/>
              </swiper-slide>`;
    });

    const swiperContainer = document.querySelector(
      ".story .story_slide1 .mySwiper1"
    );

    if (!swiperContainer) return; // جلوگیری از خطا درصورت نبود عنصر

    swiperContainer.innerHTML = story.join("");

    // مقداردهی مجدد به swiper-container با breakpoints
    Object.assign(swiperContainer, {
      pagination: true,
      navigation: true,
      spaceBetween: 10,
      slidesPerView: 12.5,
      breakpoints: {
        320: { slidesPerView: 3.5, spaceBetween: 5 }, // موبایل کوچک
        480: { slidesPerView: 5, spaceBetween: 8 }, // موبایل متوسط
        768: { slidesPerView: 7, spaceBetween: 10 }, // تبلت
        1024: { slidesPerView: 12.5, spaceBetween: 10 }, // دسکتاپ
      },
    });

    swiperContainer.initialize(); // مقداردهی دوباره برای اجرا شدن
  } catch (error) {
    console.log("Error fetching story data:", error.message);
  }
};

export default Story;
