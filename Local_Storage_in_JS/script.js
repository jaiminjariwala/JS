const button = document.getElementById("clickButton");
const inputUsername = document.getElementById("input-username");
const username = document.getElementById("username")

button.addEventListener("click", () => {
  const value = inputUsername.value;

  // now we want to push the above value to Local Storage, so for that...
  /*
    localStorage is an object over which we'll call the setItem function, which takes key and value as an argument!
  */
  localStorage.setItem("Name", value)
});



window.addEventListener('load', () => {
    const value = localStorage.getItem("Name")
    username.innerText = `Hello, ${value} from WINDOW REFRESH ;)`
})

button.addEventListener('click', () => {
    const value = localStorage.getItem("Name")
    username.innerText = `Hello, ${value} from BUTTON CLICK ;)`
})