let swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidesPerView: 4.5,
        },
        1000: {
            slidesPerView: 4,
        },
        770: {
            pagination: {
                el: null,
            },
            slidesPerView: 3,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        },
        550: {
            slidesPerView: 2,
        },
    },
    slidesPerView: 1,
    spaceBetween: 20,
});

let modal = document.getElementById("myModal");
let btn = document.getElementById("open-modal");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


const input = document.querySelector("#phone");

const iti = window.intlTelInput(input, {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.16/build/js/utils.js",
    showSelectedDialCode: true,
    initialCountry: 'ua'
});

function validateForm() {
    let nameInput = document.getElementById("name");
    let phoneInput = document.getElementById("phone");
    let subscribeCheckbox = document.getElementById("subscribe");
    let supportButton = document.querySelector(".modal-btn");

    if (nameInput.value.trim() !== ""
        && phoneInput.value.trim() !== ""
        && subscribeCheckbox.checked
    ) {
        supportButton.disabled = false;
    }
}

document.getElementById("name").addEventListener("input", validateForm);
document.getElementById("phone").addEventListener("input", validateForm);
document.getElementById("subscribe").addEventListener("change", validateForm);

function contactSales() {
    console.log("Contact sales button clicked");
}
