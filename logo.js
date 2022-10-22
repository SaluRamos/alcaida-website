const bull_logo_svg = document.getElementById("bull_logo_svg")
const circle_logo_svg = document.getElementById("circle_logo_svg")

const inside_circle_svg = document.getElementById("inside_circle_svg")
const outside_circle_svg = document.getElementById("outside_circle_svg")

const outside_circular_path = document.getElementById("outside_circular_path")
const outside_circular_text = document.getElementById("outside_circular_text")

const inside_circular_path = document.getElementById("inside_circular_path")
const inside_circular_text = document.getElementById("inside_circular_text")

const logo_size_slider = document.getElementById("logo_size")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function setLogo(){
    await sleep(10)

    let bull_left_padding = Number(document.defaultView.getComputedStyle(bull_logo_svg, "").getPropertyValue("padding-left").replace("px", ""))
    let bull_right_padding = Number(document.defaultView.getComputedStyle(bull_logo_svg, "").getPropertyValue("padding-right").replace("px", ""))
    let bull_top_padding = Number(document.defaultView.getComputedStyle(bull_logo_svg, "").getPropertyValue("padding-top").replace("px", ""))
    let bull_bottom_padding = Number(document.defaultView.getComputedStyle(bull_logo_svg, "").getPropertyValue("padding-bottom").replace("px", ""))
    let bull_x_center = bull_logo_svg.width/2 + bull_left_padding
    let circle_x_decrement = 0
    let bull_y_center = bull_logo_svg.height/2 + bull_top_padding

    circle_logo_svg.style.maxHeight = bull_logo_svg.height + bull_top_padding + bull_bottom_padding
    circle_logo_svg.style.width = bull_logo_svg.width + bull_left_padding + bull_right_padding

    if(window.innerWidth < (bull_logo_svg.width + bull_left_padding + bull_right_padding)){
        circle_x_decrement = ((bull_logo_svg.width + bull_left_padding + bull_right_padding) - window.innerWidth)/2
    }

    inside_circle_svg.setAttribute("cx", (bull_x_center - circle_x_decrement) + "px")
    inside_circle_svg.setAttribute("cy", bull_y_center + "px")
    inside_circle_svg.setAttribute("r", (bull_logo_svg.height/2.1) + "px")
    inside_circle_svg.style.strokeWidth = bull_logo_svg.height*0.03

    outside_circle_svg.setAttribute("cx", (bull_x_center- circle_x_decrement) + "px")
    outside_circle_svg.setAttribute("cy", bull_y_center + "px")
    outside_circle_svg.setAttribute("r", (bull_logo_svg.height/1.5) + "px")
    outside_circle_svg.style.strokeWidth = bull_logo_svg.height*0.05

    let outside_text_scale = bull_logo_svg.height
    outside_circular_path.style.transform = `translateX(${bull_x_center - outside_text_scale/2}px) translateY(${bull_y_center - outside_text_scale/2}px) scale(${outside_text_scale})`
    outside_circular_text.style.fontSize = bull_logo_svg.height*0.16
    outside_circular_text.style.letterSpacing = bull_logo_svg.height*0.025

    let inside_text_scale = outside_text_scale*1.22
    inside_circular_path.style.transform = `translateX(${bull_x_center - inside_text_scale/2}px) translateY(${bull_y_center - inside_text_scale/2}px) scale(${inside_text_scale})`
    inside_circular_text.style.fontSize = bull_logo_svg.height*0.16
    inside_circular_text.style.letterSpacing = bull_logo_svg.height*0.025
}

addEventListener('resize', (event) => {
    setLogo()
});

function newLogoSize(){

    bull_logo_svg.style.setProperty("--svg_scale", `${logo_size_slider.value}px`)
    setLogo()

}

setInterval(function(){

    newLogoSize()

}, 100)

setLogo()