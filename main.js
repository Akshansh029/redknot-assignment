const addButton = document.getElementById("add-button");
addButton.addEventListener("click", async () => {
  try {
    const response = await fetch("https://dummyjson.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const { users } = data;
    const checkAge = (item) => {
      if (item.age >= 30) {
        console.log(`${item.firstName} ${item.lastName}`);
      }
    };
    users.forEach(checkAge);
    window.alert("Users with age over 30 have been logged in the console!");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
