function display() {
  let values = document.getElementById("input").value;
  let displays = document.getElementById("display");
  let names = ["Shakir", "shakir", "Shakir Mansuri", "shakir mansuri"];
  if (values === names[0]) {
    displays.innerHTML = `Chal Bhosdike`;
  } else if (values === names[1]) {
    displays.innerHTML = `Chal Bhosdike`;
  } else if (values === names[2]) {
    displays.innerHTML = `Chal Bhosdike`;
  } else if (values === names[3]) {
    displays.innerHTML = `Chal Bhosdike`;
  } else {
    displays.innerHTML = `${values} Tu Saale Chutiya hai`;
  }
}
