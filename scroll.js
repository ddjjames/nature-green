// const sliderleft = document.getElementById("slider-left");
// const sliderright = document.getElementById("slider-right");
const sliders = document.querySelectorAll(".slider");


function addAnimation()
{

    sliders.forEach((slider) => {

        const sliderInner = slider.querySelector(".slider-content");
        const sliderChilds = Array.from(sliderInner.children);

        sliderChilds.forEach(img =>
            {
                const dup = img.cloneNode(true);
                dup.setAttribute("aria-hidden", true);
                sliderInner.appendChild(dup);
            })

    });
}

document.addEventListener("DOMContentLoaded", addAnimation);
  