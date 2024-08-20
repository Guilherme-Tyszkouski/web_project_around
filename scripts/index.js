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

const DOM_initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    alt: "Rio passando no meio de arvores",
    trash: "../images/images-elements/elements-trash.svg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    alt: "lago no meio de Montanhas",
    trash: "../images/images-elements/elements-trash.svg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
    alt: "Por do sol em altas montanhas",
    trash: "../images/images-elements/elements-trash.svg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
    alt: "Céu estrelado com montanhas cobertas de neve",
    trash: "../images/images-elements/elements-trash.svg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
    alt: "Lago com montanhas com neve no topo",
    trash: "../images/images-elements/elements-trash.svg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
    alt: "Altas montanhas com um lago, com uma ponte e varios barcos de madeira",
    trash: "../images/images-elements/elements-trash.svg",
  },
];

//funcao do pop up
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

function* generateIdCards() {
  let id = 0;
  while (true) {
    yield id;
    id += 1;
  }
}

const iteradorId = generateIdCards();

// Função que cria os cartoes inicias da pagina

function createCards() {
  DOM_elementsCards.innerHTML = "";

  DOM_initialCards.forEach((obj, index) => {
    const li_tag = document.createElement("li");
    li_tag.classList.add("elements__card");
    li_tag.setAttribute("data-id", index);

    const img_tag = document.createElement("img");
    img_tag.setAttribute("src", obj.link);
    img_tag.setAttribute("alt", obj.alt);
    img_tag.classList.add("elements__card-image");

    const imgTrash_tag = document.createElement("img");
    imgTrash_tag.setAttribute("src", obj.trash);
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
    imgLike_tag.setAttribute("data-id", iteradorId.next().value);
    imgLike_tag.setAttribute("like-states", "inactive");
    imgLike_tag.classList.add("elements__card-button");

    li_tag.appendChild(img_tag);
    li_tag.appendChild(imgTrash_tag);
    li_tag.appendChild(div_tag);
    div_tag.appendChild(p_tag);
    div_tag.appendChild(imgLike_tag);

    DOM_elementsCards.appendChild(li_tag);
  });
}
for (const creator of DOM_initialCards) {
  createCards(creator);
}

const creatNewCard = {
  name: "",
  link: "",
  alt: "",
  trash: "../images/images-elements/elements-trash.svg",
};
createCards(creatNewCard);




// Remover e dar like nas imagens

const removeImage = (target) => {
  if (!(target.className === "elements__card-button-trash")) return;

  const altAttributeTarget = target.getAttribute("alt");

  const cards = document.querySelectorAll(".elements__card");

  cards.forEach((li) => {
    if (li.childNodes.item("img").getAttribute("alt") === altAttributeTarget) {
      li.remove();
    }
  });
};

const likeImage = (target) => {
  const clikedTargetId = target.dataset.id;
  const likes = document.querySelectorAll("[data-id]");
  likes.forEach((like) => {
    if (like.dataset.id === clikedTargetId) {
      if (like.getAttribute("like-states") === "inactive") {
        like.setAttribute(
          "src",
          "../images/images-elements/elements-like-active.svg"
        );
        like.setAttribute("like-states", "active");
      } else {
        like.setAttribute("src", "../images/images-elements/elements-like.svg");
        like.setAttribute("like-states", "inactive");
      }
    }
  });
};

//Botao adicionar imagem

DOM_buttonAddImage.addEventListener("click", (event) => createCard(event));

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

DOM_editButtonPlaces.addEventListener("click", () => {
  DOM_placesForm.classList.add("places__visible");
});

DOM_closeButtonPlaces.addEventListener("click", () => {
  DOM_placesForm.classList.remove("places__visible");
});

// Event listener para detectar clique em qualquer lugar do documento

window.addEventListener("click", (event) => {
  const target = event.target;
  removeImage(target);
  likeImage(target);
});

// Carregar as imagens iniciais ao carregar a página

window.addEventListener("DOMContentLoaded", createCards);
