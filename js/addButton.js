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

// function submitModal() {
//   articles.prepend(
//     $("<div>")
//       .addClass("container mb-3 p-3 border border-1 rounded-3 card")
//       .prepend(
//         $("<div>")
//           .addClass("row")
//           .prepend(
//             $("<div>")
//               .addClass("col mb-3")
//               .prepend(
//                 $("<a>")
//                   .addClass("text-decoration-none card__header")
//                   .attr("href", "#")
//                   .text(`${inputHeader.val()}`)
//               )
//           ),
//         $("<div>")
//           .addClass(
//             "row flex-column flex-md-row align-content-center align-content-md-start"
//           )
//           .prepend(
//             $("<div>")
//               .addClass(
//                 "col-12 col-md-2 d-flex align-items-center justify-content-center"
//               )
//               .prepend(
//                 $("<img>")
//                   .addClass("img-fluid mb-3 mb-md-0 card__image")
//                   .attr("src", `${inputImage.val()}`)
//               ),
//             $("<div>")
//               .addClass("col-12 col-md-10")
//               .prepend(
//                 $("<div>")
//                   .addClass("row")
//                   .prepend(
//                     $("<div>")
//                       .addClass("col mb-3 card__text")
//                       .text(inputMessage.val())
//                   ),
//                 $("<div>")
//                   .addClass("col d-flex")
//                   .prepend(
//                     $("<ul>")
//                       .addClass("list-unstyled")
//                       .prepend(
//                         $("<li>").prepend(
//                           $("<span>").text("Teacher: "),
//                           $("<a>")
//                             .addClass(
//                               "text-decoration-none text-info-emphasis card__teacher-link"
//                             )
//                             .attr("href", "#")
//                             .text(inputTeacher.val())
//                         )
//                       ),
//                     $("<button>")
//                       .addClass("btn btn-primary bi bi-trash remove ms-auto")
//                       .attr("id", "remove")
//                       .on("click", (e) => {
//                         deleteArticle(e.currentTarget.offsetParent); //eventListener to delete new card
//                       })
//                   )
//               )
//           )
//       )
//   );

//   closeModal();
// }

// function submitModal() {
//   articles.prepend(`
//   <div class="container mb-3 p-3 border border-1 rounded-3 card">
//   <div class="row">
//     <div class="col mb-3">
//       <a class="text-decoration-none" href="#">
//         ${inputHeader.val()}
//       </a>
//     </div>
//   </div>

//   <div class="row">
//     <div class="col-12 col-md-2 d-flex align-items-center justify-content-center">
//       <img
//         class="img-fluid mb-3 mb-md-0"
//         src="${inputImage.val()}"
//         alt="Image"
//       />
//     </div>
//     <div class="col-12 col-md-10">
//       <div class="row">
//         <div class="col mb-3">${inputMessage.val()}</div>
//       </div>
//       <div class="col d-flex">
//         <ul class="list-unstyled">
//           <li>
//             <span>Teacher:</span>
//             <a class="text-decoration-none text-info-emphasis" href="#">
//               ${teacher.val()}
//             </a>
//           </li>
//         </ul>
//         <button
//           class="btn btn-primary bi bi-trash remove ms-auto"
//           type="button"
//         ></button>
//       </div>
//     </div>
//   </div>
// </div>`);
//   closeModal();
//   addEvent();
// }

// {
//   $.ajax({
//     url: "https://parallelum.com.br/fipe/api/v1/carros/marcas",
//     dataType: "json",
//     method: "get", // type also ok
//     success: (data) => {
//       console.log(data);
//     },
//     error: (jqXHR, textStatus, errorThrow) => {
//       console.log(jqXHR, textStatus, errorThrow);
//     },
//   });
// }

// {
//   async function doAjax() {
//     var result;

//     try {
//       result = await $.ajax({
//         url: "https://parallelum.com.br/fipe/api/v1/carros/marcas",
//         dataType: "json",
//         type: "get", // type also ok
//       });

//       return result;
//     } catch (error) {
//       console.log(error);
//     }
//     console.log(result);
//   }

//   doAjax();
// }

// {
//   async function f() {
//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("Ready"), 3000);
//     });

//     let result = await promise;

//     alert(result);
//   }

//   f();
// }

// {
//   $.get("https://parallelum.com.br/fipe/api/v1/carros/marcas", (data) => {
//     console.log(data);
//   }).fail((error) => {
//     console.log(error);
//   });

// {
//   async function loadJson(url) {
//     let response = await fetch(url);

//     if (response.status === 200) {
//       let json = await response.json();
//       console.log(json);
//       return json;
//     }
//     throw new ThrowUrlError("BAD URL - 404");
//   }

//   loadJson("https://parallelum.com.br/fipe/api/v1/carros/marcas") // (3)
//     .catch(console.log()); // Bad URL - 404
// }

// {
//   console.log("aspetto 5 secondi");
//   async function delay() {
//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("sono passati 5 secondi");
//       }, 5000);
//     });
//     console.log(await promise);
//   }
//   console.log(delay())
// }

// {
//   console.log(
//     "aspetto 5 secondi",
//     setTimeout(() => {
//       console.log("sono passati 5 secondi");
//     }, 5000)
//   );
// }

// }
