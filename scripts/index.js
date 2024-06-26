const DOM_editButtonProfile = document.querySelector(".profile__edit-button");
const DOM_closeButtonProfile = document.querySelector(".edit__button-close");
const DOM_editForm = document.querySelector(".edit");
const DOM_formElement = document.querySelector(".form");

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

DOM_formElement.addEventListener("submit", (event) =>
  handleProfileFormSubmit(event)
);

DOM_editButtonProfile.addEventListener("click", () => {
  DOM_editForm.classList.add("edit__visible");
});

DOM_closeButtonProfile.addEventListener("click", () => {
  DOM_editForm.classList.remove("edit__visible");
});

