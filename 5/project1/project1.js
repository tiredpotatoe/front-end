function makeBox() {
    const divNameElement = document.getElementById("divName");
    const colorCodeElement = document.getElementById("colorCode");
    const topSpaceElement = document.getElementById("topSpace");
    const botSpaceElement = document.getElementById("botSpace");
    const leftSpaceElement = document.getElementById("leftSpace");
    const rightSpaceElement = document.getElementById("rightSpace");
    const divWidthElement = document.getElementById("divWidth");
    const divHeightElement = document.getElementById("divHeight");

    const box = document.getElementById("box");

    //nagofte valid budan ro check konim pas neminevisam beman che

    box.innerText = divNameElement.value;
    box.style.backgroundColor = colorCodeElement.value;
    box.style.top = topSpaceElement.value;
    box.style.bottom = botSpaceElement.value;
    box.style.left = leftSpaceElement.value;
    box.style.right = rightSpaceElement.value;
    box.style.width = divWidthElement.value;
    box.style.height = divHeightElement.value;
}