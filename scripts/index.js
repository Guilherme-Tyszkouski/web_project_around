const editButtonProfile = document.querySelector(".profile__edit-button");
const closeButtonProfile = document.querySelector(".edit__button-close");
const editForm = document.querySelector(".edit");
const formElement = document.querySelector(".form");

const addNewCardImage = document.querySelector(".profile__add-image");
const closeButtonPlaces = document.querySelector(".places__close");
const placesForm = document.querySelector(".places");
const placesFormElement = document.querySelector(".places__form");
const elementsCards = document.querySelector(".elements__cards");
const buttonAddImage = document.querySelector("#submit-new-card-button");
const buttonLikedImage = document.querySelector(".elements__card-button");

const initialCards = [
  {
    nameImage: "Vale de Yosemite",
    linkImage:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    altImage: "Rio passando no meio de arvores",
    trash: "../images/images-elements/elements-trash.svg",
    trashAlt: "imagem de lixeira",
    like: "../images/images-elements/elements-like.svg",
    likeAlt: "Image de coração",
  },
  {
    nameImage: "Lago Louise",
    linkImage:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    altImage: "lago no meio de Montanhas",
    trash: "../images/images-elements/elements-trash.svg",
    trashAlt: "imagem de lixeira",
    like: "../images/images-elements/elements-like.svg",
    likeAlt: "Image de coração",
  },
  {
    nameImage: "Montanhas Carecas",
    linkImage:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
    altImage: "Por do sol em altas montanhas",
    trash: "../images/images-elements/elements-trash.svg",
    trashAlt: "imagem de lixeira",
    like: "../images/images-elements/elements-like.svg",
    likeAlt: "Image de coração",
  },
  {
    nameImage: "Latemar",
    linkImage:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
    altImage: "Céu estrelado com montanhas cobertas de neve",
    trash: "../images/images-elements/elements-trash.svg",
    trashAlt: "imagem de lixeira",
    like: "../images/images-elements/elements-like.svg",
    likeAlt: "Image de coração",
  },
  {
    nameImage: "Parque Nacional da Vanoise ",
    linkImage:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
    altImage: "Lago com montanhas com neve no topo",
    trash: "../images/images-elements/elements-trash.svg",
    trashAlt: "imagem de lixeira",
    like: "../images/images-elements/elements-like.svg",
    likeAlt: "Image de coração",
  },
  {
    nameImage: "Lago di Braies",
    linkImage:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
    altImage:
      "Altas montanhas com um lago, com uma ponte e varios barcos de madeira",
    trash: "../images/images-elements/elements-trash.svg",
    trashAlt: "imagem de lixeira",
    like: "../images/images-elements/elements-like.svg",
    likeAlt: "Image de coração",
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
  editForm.classList.remove("edit__visible");
}

function createCard(card) {
  const template = document.querySelector("#template").content;
  const cardItem = template.querySelector(".elements__card").cloneNode(true);

  cardItem
    .querySelector(".elements__card-image")
    .setAttribute("src", card.linkImage);

  cardItem
    .querySelector(".elements__card-image")
    .setAttribute("alt", card.altImage);

  cardItem
    .querySelector(".elements__card-button-trash")
    .setAttribute("src", card.trash);

  cardItem
    .querySelector(".elements__card-button-trash")
    .setAttribute("alt", card.trashAlt);

  cardItem.querySelector(".elements__card-name").textContent = card.nameImage;

  cardItem
    .querySelector(".elements__card-button") // botao like
    .setAttribute("src", card.like);

  cardItem
    .querySelector(".elements__card-button") // botao like
    .setAttribute("alt", card.likeAlt);

  cardItem
    .querySelector(".elements__card-button-trash")
    .addEventListener("click", function (event) {
      const cardItemParent = event.target.parentElement;

      if (cardItemParent.getAttribute("id") === "elements__card-parent") {
        cardItemParent.remove();
      }
    });

  cardItem
    .querySelector(".elements__card-button")
    .addEventListener("click", function (event) {
      const target = event.target;
      if (target.dataset.likeStates === "inactive") {
        target.setAttribute(
          "src",
          "../images/images-elements/elements-like-active.svg"
        );
        target.setAttribute("data-like-states", "active");
      } else {
        target.setAttribute(
          "src",
          "../images/images-elements/elements-like.svg"
        );
        target.setAttribute("data-like-states", "inactive");
      }
    });

  return cardItem;
}

function addNewCard() {
  const imageName = document.querySelector("#title-new-card");
  const imageLink = document.querySelector("#link-new-card");

  const imageNameValue = imageName.value.trim();
  const imageLinkValue = imageLink.value.trim();

  const isEmptimageNameValue = imageNameValue.length === 0;
  const isEmptyimageLinkValue = imageLinkValue.length === 0;

  if (isEmptimageNameValue || isEmptyimageLinkValue) {
    alert("Preencha todos os campos!");
    return;
  }

  const card = {
    nameImage: imageNameValue,
    linkImage: imageLinkValue,
    altImage: imageNameValue,
    trash: "../images/images-elements/elements-trash.svg",
    trashAlt: "imagem de lixeira",
    like: "../images/images-elements/elements-like.svg",
    likeAlt: "Image de coração",
  };

  const newCard = createCard(card);
  elementsCards.prepend(newCard);

  imageName.value = "";
  imageLink.value = "";

  placesForm.classList.remove("places__visible");
}

buttonAddImage.addEventListener("click", function (event) {
  event.preventDefault();
  addNewCard();
});

formElement.addEventListener("submit", (event) =>
  handleProfileFormSubmit(event)
);

editButtonProfile.addEventListener("click", () => {
  editForm.classList.add("edit__visible");
});

closeButtonProfile.addEventListener("click", () => {
  editForm.classList.remove("edit__visible");
});

addNewCardImage.addEventListener("click", () => {
  placesForm.classList.add("places__visible");
});

closeButtonPlaces.addEventListener("click", () => {
  placesForm.classList.remove("places__visible");
});

window.addEventListener("DOMContentLoaded", function () {
  initialCards.forEach(function (card) {
    elementsCards.appendChild(createCard(card));
  });
});
