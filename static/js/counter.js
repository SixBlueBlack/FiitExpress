// const btnMinus = document.querySelector('[data-action="minus"]');
// const btnPlus = document.querySelector('[data-action="plus"]');
// const counter = document.querySelector('[data-counter]');
//
// btnMinus.addEventListener('click', function () {
//     if ( parseInt(counter.innerText) > 1) {
//         --counter.innerText;
//     }
// });
//
// btnPlus.addEventListener('click', function () {
//     ++counter.innerText;
// });
window.addEventListener('click', function (event) {
    const countWrapper = event.target.closest('.counter-wrapper');
    const counter = countWrapper.querySelector('[data-counter]');

    if (event.target.dataset.action === "plus"){
        ++counter.innerText;
    }
    if (event.target.dataset.action === "minus" &&
        parseInt(counter.innerText) > 1){
        --counter.innerText;
    }
})
