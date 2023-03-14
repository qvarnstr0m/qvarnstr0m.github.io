const changeBg = () => {
  const secretArea = document.getElementById("secret");

  secretArea.onclick = () => {
    document.body.style.backgroundImage = "url('/assets/newbg.png')";
  };
};

changeBg();
