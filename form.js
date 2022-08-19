const pipelineEl = document.querySelector("#pipeline");
const projectEl = document.querySelector("#project");
const bucketEl = document.querySelector("#bucket");
const filesEl = document.querySelector("#files");
const credentialsEl = document.querySelector("#credentials");
const runEl = document.querySelector("#run");

const form = document.querySelector("#form");

//validate all form input and display error
function validate(input, inputEl) {
  valid = false;
  switch (valid) {
    case isRequired(input):
      showError(inputEl, "This field Cannot be empty");
      break;
    case minLength(input.length):
      showError(inputEl, "This field cannot be less than 5 characters");
      break;
    case noSpecialChar(input):
      showError(inputEl, "Cannot start with special characters _ or -");
      break;
    case isValidChar(input):
      showError(inputEl, "Cannot contain special characters");
      break;

    default:
      showError(inputEl, "");
      valid = true;
      break;
  }
  return valid;
}

const isRequired = (value) => (value === "" ? false : true);
const minLength = (length) => (length < 5 ? false : true);
const noSpecialChar = (value) => {
  const re = new RegExp(/^[^_-]/);
  return re.test(value);
};
const isValidChar = (value) => {
  const re = new RegExp("/^[a-zA-Z0-9-_]+$/");
  return !re.test(value);
};

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;

  // add the error class
  formField.classList.add("error");

  // show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};

const checkPipeline = () => {
  let pipeline = pipelineEl.value.trim();

  validate(pipeline, pipelineEl);
  return valid;
};

const checkProject = () => {
  let project = projectEl.value.trim();
  validate(project, projectEl);
  return valid;
};

const checkBucket = () => {
  let bucket = bucketEl.value.trim();
  validate(bucket, bucketEl);
  return valid;
};

const checkFiles = () => {
  let files = filesEl.value.trim();
  validate(files, filesEl);
  return valid;
};

const checkCredentials = () => {
  let credentials = credentialsEl.value.trim();
  validate(credentials, credentialsEl);
  return valid;
};

const checkRun = () => {
  let run = runEl.value.trim();
  validate(run, runEl);
  return valid;
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

  // alert welcome if the form is valid
  if (isFormValid) {
    alert("Welcome!!!");
  }
});
