const DOM_editButtonProfile = document.querySelector(".profile__edit-button");
const DOM_closeButtonProfile = document.querySelector(".edit__button-close");
const DOM_editForm = document.querySelector(".edit");
const DOM_formElement = document.querySelector(".form");

function handeleProfileFormSubmit(event) {
  event.preventDefault();
  const nameInput = document.querySelector(".form__input_name");
  const jobInput = document.querySelector(".form__input_about");
  const nameInputValue = nameInput.value.trim();
  const jobInputInputValue = jobInputInput.value.trim();
  const isEmptyNameInputValue = nameInputValue.length === 0;
  const isEmptyJobInputValue = jobInputValue.length === 0;

  if (isEmptyNameInputValue || isEmptyJobInputValue) {
    alert('Preencha todos os campos!');
    return;

  }
}