
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