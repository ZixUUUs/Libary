document.querySelector(".inputs").style.display = "none";

const myLibrary = [];

const bookCards = document.querySelector(".bookCards");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const priceInput = document.querySelector("#price");

function displayBlock() {
  if (document.querySelector(".inputs").style.display === "none") {
    document.querySelector(".inputs").style.display = "block";
  } else {
    document.querySelector(".inputs").style.display = "none";
  }
}

function Book(title, author, pages, price) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.price = price;
}

function addBookToLibrary() {
  document.querySelector(".inputs").style.display = "none";

  const newBook = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    priceInput.value
  );
  myLibrary.push(newBook);

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  priceInput.value = "";

  bookCards.innerHTML = "";

  return myLibrary.forEach((book, index) => {
    const newDiv = document.createElement("div");

    newDiv.id = `book-${index}`;
    newDiv.className = "book";

    const titleElement = document.createElement("h3");
    titleElement.textContent = `Title: ${book.title}`;
    newDiv.appendChild(titleElement);

    const authorElement = document.createElement("h3");
    authorElement.textContent = `Author: ${book.author}`;
    newDiv.appendChild(authorElement);

    const pagesElement = document.createElement("h3");
    pagesElement.textContent = `Pages: ${book.pages}`;
    newDiv.appendChild(pagesElement);

    const priceElement = document.createElement("h3");
    priceElement.textContent = `Price: ${book.price}`;
    newDiv.appendChild(priceElement);

    const BtnD = document.createElement("button");
    BtnD.textContent = "Delete";
    newDiv.appendChild(BtnD);
    BtnD.addEventListener("click", function (index) {
      myLibrary.splice(index, 1);
      newDiv.remove(`book-${index}`);
    });

    bookCards.appendChild(newDiv);
  });
}
console.log(myLibrary);
