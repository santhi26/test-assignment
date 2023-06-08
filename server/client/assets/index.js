function displayQuote() {

  const quote = {
    content: "More than introversion or logic, though, coding selects for people who can handle endless frustration.",
    author: "Clive Thompson"
  };

  const textElement = document.querySelector("#text");
  const authorElement = document.querySelector("#author");

  textElement.textContent = quote["content"];
  authorElement.textContent = quote["author"];

}

async function createNewQuote(e) {

  e.preventDefault();

  const data = {
      text: e.target.name.value,
      author: e.target.author.value 
  }

  const options = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
  }

  const response = fetch("http://localhost:3000/quotes", options);

  if (response.status == 201) {
    e.target.name.value = ''
    e.target.author.value = ''
    alert("Quote added.")
  }
}

const form = document.querySelector("#create-form");
form.addEventListener("submit", createNewQuote);

const randomiseButton = document.querySelector("#btn-randomise");
randomiseButton.addEventListener('click', displayquote);