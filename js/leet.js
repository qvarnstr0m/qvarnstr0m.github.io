const openModal = () => {
  const secretCode = "leet";
  let userInput = "";

  document.addEventListener("keydown", (event) => {
    userInput += event.key.toLowerCase();

    if (userInput.includes(secretCode)) {
      const label = document.querySelector("label[for='secret']");
      label.click();
      userInput = "";
    }
  });
};

openModal();
