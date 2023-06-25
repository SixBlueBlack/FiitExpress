
function SetButtonsActivity() {

    let selectBtn = document.getElementById("category-btn"),
        items = document.querySelectorAll(".item");

    console.log(selectBtn)

    selectBtn.addEventListener("click", () => {
        selectBtn.classList.toggle("open");
    });

    items.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("checked")

            let checked = document.querySelectorAll(".checked"),
                btnText = document.querySelector(".btn-text");

            if (checked && checked.length > 0) {
                btnText.innerText = `${checked.length} Выбрано`;
            } else {
                btnText.innerText = "Категория";
            }
        });
    })

}