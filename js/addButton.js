var articles = $(".articles");
var messageText = $("#message-text");
var footerCloseButton = $(".close_modal").on("click", () => {
  closeModal();
});

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
  var removeButton = $(".remove");
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

var inputHeader = $("#header-name").on("keyup change", function () {
  return $(this).val();
});

var inputImage = $("#image").on("keyup change", function () {
  return $(this).val();
});

var inputMessage = $("#message-text").on("keyup change", function () {
  return $(this).val();
});

var teacher = $("#teacher").on("keyup change", function () {
  return $(this).val();
});

function submitModal() {
  articles.prepend(`
  <div class="container mb-3 p-3 border border-1 rounded-3 card">
  <div class="row">
    <div class="col mb-3">
      <a class="text-decoration-none" href="#">
        ${inputHeader.val()}
      </a>
    </div>
  </div>

  <div class="row">
    <div class="col-12 col-md-2 d-flex align-items-center justify-content-center">
      <img
        class="img-fluid mb-3 mb-md-0"
        src="${inputImage.val()}"
        alt="Image"
      />
    </div>
    <div class="col-12 col-md-10">
      <div class="row">
        <div class="col mb-3">${inputMessage.val()}</div>
      </div>
      <div class="col d-flex">
        <ul class="list-unstyled">
          <li>
            <span>Teacher:</span>
            <a class="text-decoration-none text-info-emphasis" href="#">
              ${teacher.val()}
            </a>
          </li>
        </ul>
        <button
          class="btn btn-primary bi bi-trash remove ms-auto"
          type="button"
        ></button>
      </div>
    </div>
  </div>
</div>`);
  closeModal();
  addEvent();
}
