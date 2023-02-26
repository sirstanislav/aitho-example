const articles = $(".articles");
const messageText = $("#message-text");
const removeButton = $(".remove");

jQuery(function () {
  //global function
  addEvent();
});

$(".button__add").on("click", function () {
  openModal();
});

$(".close_modal").on("click", function () {
  closeModal();
});

$(".send_modal").on("click", function () {
  submitModal();
});

function addEvent() {
  removeButton.on("click", (e) => {
    deleteArticle(e.currentTarget.offsetParent);
  });
}

function openModal() {
  $("#exampleModal").css("display", "block").addClass("show");
}

function closeModal() {
  $("#exampleModal").css("display", "none").removeClass("show");
}

function deleteArticle(item) {
  item.remove();
}

const inputHeader = $("#header-name").on("keyup change", function () {
  return $(this).val();
});

const inputImage = $("#image").on("keyup change", function () {
  return $(this).val();
});

const inputMessage = $("#message-text").on("keyup change", function () {
  return $(this).val();
});

const inputTeacher = $("#teacher").on("keyup change", function () {
  return $(this).val();
});

function submitModal() {
  this.clone = this.$(".card__template").clone().contents();
  articles.prepend(this.clone);

  const cardHeader = $(this.clone).find(".card__header");
  const cardImage = $(this.clone).find(".card__image");
  const cardTeacher = $(this.clone).find(".card__teacher-link");
  const cardText = $(this.clone).find(".card__text");
  const cardDelete = $(this.clone).find(".remove");

  cardHeader.text(inputHeader.val());
  cardImage.attr({
    src: `${inputImage.val()}`,
    alt: "Card Image",
  });
  cardText.text(inputMessage.val());
  cardTeacher.text(inputTeacher.val());

  cardDelete.on("click", (e) => {
    deleteArticle(e.currentTarget.offsetParent); //eventListener to delete new card
  });
  closeModal();
}
