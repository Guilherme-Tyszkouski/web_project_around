const DOM_editButtonProfile = document.querySelector(".profile__edit-button");
const DOM_closeButtonProfile = document.querySelector(".edit__button-close");
const DOM_editForm = document.querySelector(".edit");
const DOM_formElement = document.querySelector(".form");

const DOM_editButtonPlaces = document.querySelector(".profile__add-image");
const DOM_closeButtonPlaces = document.querySelector(".places__close");
const DOM_placesForm = document.querySelector(".places");
const DOM_placesFormElement = document.querySelector(".places__form");
const DOM_elementsCards = document.querySelector(".elements__cards");
const DOM_buttonAddImage = document.querySelector("[data-button=add-image]");
const DOM_buttonLikedImage = document.querySelector(".elements__card-button");
const DOM_buttonTrashImage = document.querySelector(
  ".elements__card-button-trash"
);

const DOM_initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    alt: "Rio passando no meio de arvores",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    alt: "lago no meio de Montanhas",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
    alt: "Por do sol em altas montanhas",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
    alt: "Céu estrelado com montanhas cobertas de neve",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
    alt: "Lago com montanhas com neve no topo",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
    alt: "Altas montanhas com um lago, com uma ponte e varios barcos de madeira",
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

//funcao que carrega as imagens inicias

function createCards() {
  DOM_initialCards.forEach((obj) => {
    const li_tag = document.createElement("li");
    li_tag.classList.add("elements__card");

    const img_tag = document.createElement("img");
    img_tag.setAttribute("src", obj.link);
    img_tag.setAttribute("alt", obj.alt);
    img_tag.classList.add("elements__card-image");

    const imgTrash_tag = document.createElement("img");
    imgTrash_tag.setAttribute(
      "src",
      "../images/images-elements/elements-trash.svg"
    );
    imgTrash_tag.setAttribute("alt", obj.alt);
    imgTrash_tag.classList.add("elements__card-button-trash");

    const div_tag = document.createElement("div");
    div_tag.classList.add("elements__card-info");

    const p_tag = document.createElement("p");
    p_tag.classList.add("elements__card-name");
    p_tag.textContent = obj.name;

    const imgLike_tag = document.createElement("img");
    imgLike_tag.setAttribute(
      "src",
      "../images/images-elements/elements-like.svg"
    );
    imgLike_tag.setAttribute("alt", obj.alt);
    imgLike_tag.classList.add("elements__card-button");

    li_tag.appendChild(img_tag);
    li_tag.appendChild(div_tag);
    li_tag.appendChild(imgTrash_tag);
    div_tag.appendChild(p_tag);
    div_tag.appendChild(imgLike_tag);

    DOM_elementsCards.appendChild(li_tag);
    console.log(DOM_elementsCards);
  });
}

//funcao pra alterar imagem do site

function createCard() {
  event.preventDefault();
  DOM_initialCards.forEach((obj) => {
    const li_tag = document.createElement("li");
    li_tag.classList.add("elements__card");

    const img_tag = document.createElement("img");
    img_tag.setAttribute("src", obj.link);
    img_tag.setAttribute("alt", obj.alt);
    img_tag.classList.add("elements__card-image");

    const div_tag = document.createElement("div");
    div_tag.classList.add("elements__card-info");

    const p_tag = document.createElement("p");
    p_tag.classList.add("elements__card-name");
    p_tag.textContent = obj.name;

    const imgLike_tag = document.createElement("img");
    imgLike_tag.setAttribute(
      "src",
      "../images/images-elements/elements-like.svg"
    );
    imgLike_tag.setAttribute("alt", obj.alt);
    imgLike_tag.classList.add("elements__card-button");

    li_tag.appendChild(img_tag);
    li_tag.appendChild(div_tag);
    div_tag.appendChild(p_tag);
    div_tag.appendChild(imgLike_tag);

    DOM_elementsCards.appendChild(li_tag);
    console.log(DOM_elementsCards);
  });
}

//Botao adicionar imagem

DOM_buttonAddImage.addEventListener("click", (event) => createCard(event));

//Botao excluir imagem

// DOM_buttonTrashImage.addEventListener("click", function () {
//   const listItem = DOM_buttonTrashImage.closest(".elements__card-button-trash");
//   listItem.remove()
// });

// Botao dar Like images

// DOM_buttonLikedImage.addEventListener("click", () => {
//   classList.add(".elements__card-button:active");
// });

// DOM_buttonLikedImage.addEventListener("click", () => {
//   classList.remove(".elements__card-button:active");
// });




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

window.addEventListener("DOMContentLoaded", createCards);
