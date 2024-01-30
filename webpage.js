const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
	question.innerHTML = "Weh? press 1 daw dol bi.";
	gif.src = "https://giphy.com/gifs/reaction-meme-my-honest-klmkyfcsuo0hMbbmjY";
});

noBtn.addEventListener("mouseover", () => {
	const noBtnRect =noBtn.getBoudingClientRect();
	const maxX = window.innerWidth - noBtnRect.width;
	const mayY = window.innerHeight - noBtnRect.height;

	const randomX = Math.floor(Math.random() * maxX);
	const randomY = Math.floor(Math.random() * maxY);

	noBtn.style.left = randomX + "px";
	noBtn.style.top = randomY + "px";
});