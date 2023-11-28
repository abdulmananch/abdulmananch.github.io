// This JavaScript code will add the CSS class "bg-change" to the "introduction" section
// every time you hover over the "introduction" section. This will create a color changing
// background animation for the section.

document.getElementById("introduction").addEventListener("mouseover", function() {
    this.classList.add("bg-change");
});

document.getElementById("introduction").addEventListener("mouseout", function() {
    this.classList.remove("bg-change");
});
