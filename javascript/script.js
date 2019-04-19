const rectTags = document.querySelectorAll("rect");
const data = [120, 20, 31, 50, 40, 120, 80, 30, 48, 103];


rectTags.forEach((tag, i) => {
    tag.style.fill = "blue";
    const width = 200 * (i + 1);
    tag.setAttribute("width", width + "px");
});

const todaySvg = document.querySelector("svg");

data.forEach((d, i) => {
    const rectTags =  document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rectTags.setAttribute("x", i * 36);
    rectTags.setAttribute("y", 120 - d);
    rectTags.setAttribute("width", "24px");
    rectTags.setAttribute("height", d + "px");

    todaySvg.append(rectTags)
})