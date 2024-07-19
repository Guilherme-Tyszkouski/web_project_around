const DOM_editButtonProfile = document.querySelector(".profile__edit-button");
const DOM_closeButtonProfile = document.querySelector(".edit__button-close");
const DOM_editForm = document.querySelector(".edit");
const DOM_formElement = document.querySelector(".form");

const DOM_editButtonPlaces = document.querySelector(".profile__add-image");
const DOM_closeButtonPlaces = document.querySelector(".places__close");
const DOM_placesForm = document.querySelector(".places");
const DOM_placesFormElement = document.querySelector(".places__form");

const DOM_initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

function handleProfileFormSubmit(event) {
  event.preventDefault();
  const nameInput = document.querySelector(".form__input_name");
  const jobInput = document.querySelector(".form__input_about");
  const nameInputValue = nameInput.value.trim();
  const jobInputValue = jobInput.value.trim();
  const isEmptyNameInputValue = nameInputValue.length === 0;
  const isEmptyJobInputValue = jobInputValue.length === 0;

  if (isEmptyNameInputValue || isEmptyJobInputValue) {
    alert("Preencha todos os campos!");
    return;
  }

  const profileName = document.querySelector(".profile__name");
  profileName.textContent = nameInputValue;

  const profileMore = document.querySelector(".profile__more");
  profileMore.textContent = jobInputValue;

  alert("Dados editados com sucesso!");
  nameInput.value = "";
  jobInput.value = "";
  DOM_editForm.classList.remove("edit__visible");
}

// Modal Section Profile

DOM_formElement.addEventListener("submit", (event) =>
  handleProfileFormSubmit(event)
);

DOM_editButtonProfile.addEventListener("click", () => {
  DOM_editForm.classList.add("edit__visible");
});

DOM_closeButtonProfile.addEventListener("click", () => {
  DOM_editForm.classList.remove("edit__visible");
});

//Modal section places

DOM_editButtonPlaces.addEventListener("click", () => {
  DOM_placesForm.classList.add("places__visible");
});


DOM_closeButtonPlaces.addEventListener("click", () => {
  DOM_placesForm.classList.remove("places__visible");
});


