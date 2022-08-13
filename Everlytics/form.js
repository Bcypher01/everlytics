function validate(input, inputEl) {
  valid = false;
  if (!isRequired(input)) {
    showError(inputEl, "This field Cannot be empty");
  } else if (isValidCharacter(input)) {
    showError(inputEl, "Cannot have special characters");
  } else {
    showSuccess(inputEl);
    valid = true;
  }

  return valid;
}

const pipelineEl = document.querySelector("#pipeline");
const projectEl = document.querySelector("#project");
const bucketEl = document.querySelector("#bucket");
const filesEl = document.querySelector("#files");
const credentialsEl = document.querySelector("#credentials");
const runEl = document.querySelector("#run");

const form = document.querySelector("#form");

const isRequired = (value) => (value === "" ? false : true);
const minLength = (length, min) => (length < min ? false : true);
const isValidCharacter = (value) => {
  const re = new RegExp("/^[a-zA-Z]*$/");
  return re.test(value);
};

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;

  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");

  // show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;

  // add the error class
  formField.classList.remove("error");
  formField.classList.add("success");

  // show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};

const checkPipeline = () => {
  let pipeline = pipelineEl.value.trim();

  validate(pipeline, pipelineEl);
};

const checkProject = () => {
  let project = projectEl.value.trim();

  validate(project, projectEl);
};

const checkBucket = () => {
  let bucket = bucketEl.value.trim();

  validate(bucket, bucketEl);
};

const checkFiles = () => {
  let files = filesEl.value.trim();
  validate(files, filesEl);
};

const checkCredentials = () => {
  let credentials = credentialsEl.value.trim();
  validate(credentials, credentialsEl);
};

const checkRun = () => {
  let run = runEl.value.trim();
  validate(run, runEl);
};

form.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault();

  //validate forms
  let isPipelineValid = checkPipeline(),
    isProjectValid = checkProject(),
    isBucketValid = checkBucket(),
    isFilesValid = checkFiles(),
    isCredentialsValid = checkCredentials(),
    isRunValid = checkRun();

  let isFormValid =
    isPipelineValid &&
    isProjectValid &&
    isBucketValid &&
    isFilesValid &&
    isCredentialsValid &&
    isRunValid;

  // submit to the server if the form is valid
  if (isFormValid) {
  }
});
