
function SetButtonsActivity() {

    let selectBtn = document.getElementById("category-btn"),
        items = document.querySelectorAll(".item");

    selectBtn.addEventListener("click", () => {
        selectBtn.classList.toggle("open");
    });

    window.select_items = new Set();

    items.forEach(item => {
        item.addEventListener("click", () => {
            if (window.select_items.has(item.id))
                window.select_items.delete(item.id);
            else
                window.select_items.add(item.id)
            console.log(window.select_items)
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