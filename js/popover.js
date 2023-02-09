const button = document.querySelector("#popoverNotification");
const tooltip = document.querySelector("#tooltip");
const popperInstance = Popper.createPopper(button, tooltip, {
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [0, 8],
      },
    },
  ],
});

function show() {
  tooltip.toggleAttribute("data-show");

  // Update its position
  popperInstance.update();
}

button.addEventListener("click", show);
