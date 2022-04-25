let userSubmitsList = [];

const userSubmitObject = {
  id: 0,
  submittedEmail: "",
  submittedPassword: "",
  submittedDate: "",
};

const idGenerator = () => {
  return Math.floor(Math.random() * 100000 + 1);
};

let userSubmitsLS = localStorage.getItem("userSubmitsLS");

const resetSubmissionsOnScreen = () => {
  document.getElementById("form-box").reset();
};

const userSubmit = () => {
  const userEmail = document.getElementById("input_email").value;
  const userPassword = document.getElementById("input_password").value;
  let userSubmitItem;

  userSubmitItem = {
    ...userSubmitObject,
    id: idGenerator(),
    submittedEmail: userEmail,
    submittedPassword: userPassword,
    submittedDate: new Date(),
  };

  userSubmitsList = [...userSubmitsList, userSubmitItem];
  console.log(userSubmitsList);
  saveUserSubmitsToLS();
  resetSubmissionsOnScreen();
};

const saveUserSubmitsToLS = () => {
  localStorage.setItem("userSubmitsLS", JSON.stringify(userSubmitsList));
};
