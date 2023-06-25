
function SetButtonsActivity() {


    let optionMenu = document.querySelector(".select-menu"),
        selectBtn_sorted = document.querySelector(".select-btn"),
        options = document.querySelectorAll(".option"),
        sBtn_text = document.querySelector(".sBtn-text");

    selectBtn_sorted.addEventListener("click", () => optionMenu.classList.toggle("active"));

    options.forEach(option => {
        option.addEventListener("click", () => {
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;

            optionMenu.classList.remove("active")
        })
    })



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