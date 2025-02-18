const containe = async () => {
  let container = "";
  try {
    let data = await fetch("http://localhost:3004/container");
    let res = await data.json();
    container = res.map((item) => {
      return `
          <div class="w-[120px] h-[100px] flex flex-col items-center text-center">
            <img class="desktop:rounded-full  desktop:w-[55px] desktop:h-[55px]
            mobile:w-[25px] mobile:h-[25px] mobile:rounded-full" src="${item.image}" alt="${item.title}" />
            <a href="${item.link}" class="text-gray-700 font-[sans] desktop:text-[12px] mobile:text-[9px] font-bold">${item.title}</a>
          </div>`;
    });

    document
      .querySelector(".containe .container")
      .insertAdjacentHTML("beforeend", container.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default containe;
