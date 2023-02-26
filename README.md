# aitho-example

## About

The goal was to add new cards from form modal using jQuery and prepared template section and display existing cards in html:

![Preview](https://github.com/sirstanislav/aitho_bootstrap_jQuery/blob/main/assets/images/new_card.png?raw=true)

```js
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
```

![Preview](https://github.com/sirstanislav/aitho_bootstrap_jQuery/blob/main/assets/images/main.png?raw=true)

## Running

To see the changes when you edit scss styles you need run compiler who transform scss format to css

```json
"compile_sass": "sass --watch scss:assets/css"
```

```js
npm run compile_sass
```

And then run the project with some live server extension
