const tabButtonEle = document.querySelectorAll(".content__tab--item");

tabButtonEle.forEach((ele) => {
  ele.addEventListener("click", (event) => {
    const activeItem = document.querySelector(".content__tab--item.active");
    const selectedItem = document.querySelector(
      `.content__${event.currentTarget.dataset.tab}`
    );

    activeItem.classList.remove("active");
    event.currentTarget.classList.add("active");

    document.querySelectorAll(".content__item").forEach((item) => {
      item.classList.add("none");
    });

    selectedItem.classList.remove("none");
  });
});
