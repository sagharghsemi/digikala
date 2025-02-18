const Menu = async () => {
  try {
    let response = await fetch("http://localhost:3004/Menu");
    let menuItems = await response.json();

    let menuHTML = menuItems
      .map((item) => {
        return ` 
        <li class="flex items-center mx-2 text-sm">
          <a
            href="${item.link}"
            class="text-gray-700 mx-1 group transition-all duration-200 ease-linear hover:text-red-600 font-[sans]"
          >${item.name}</a>
        </li>`;
      })
      .join("");

    // اطمینان از وجود المنت مورد نظر در DOM
    const menuContainer = document.querySelector(".menu nav");
    if (menuContainer) {
      menuContainer.insertAdjacentHTML("beforeend", menuHTML);
    } else {
      console.error("عنصر '.menu nav' در صفحه یافت نشد.");
    }
  } catch (error) {
    console.error("خطا در واکشی منو:", error.message);
  }
};

export default Menu;
