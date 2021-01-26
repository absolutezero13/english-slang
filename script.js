"use strict";
const findSlangBtn = document.querySelector(".find-slang");
const result = document.querySelector(".result");
const inputWord = document.querySelector(".input-word");
const error = document.querySelector(".error");

////////////////////////////////
const errors = [
  "What the fuck is that?",
  "The hell did you mean?",
  "Enter a valid word or imma kick your ass",
  "Bruh.. Please enter a valid word..",
  "No such thing.",
];

const getSlangWord = function (word) {
  error.innerHTML = "";
  const randomNumber = Math.floor(Math.random() * 5);
  fetch(
    `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b957481432msh3b62100f3bb045ep19fc0ejsn704144e11e85",
        "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then(
      (data) =>
        (result.innerHTML = data.list[0].definition.replace(/[\][]/g, ""))
    )
    .catch((err) => {
      error.innerHTML = "⚠️ " + errors[randomNumber];
      result.innerHTML = "";
    });
};

findSlangBtn.addEventListener("click", () => getSlangWord(inputWord.value));
inputWord.addEventListener("keydown", (e) => {
  if (e.key === "Enter") getSlangWord(inputWord.value);
});
