const blocks = document.querySelectorAll('.block');

// Click handler for each block
blocks.forEach((block, index) => {
	block.addEventListener('click', setBackgroundImage);
});

// Function to click handler  that sets the background image for the block
function setBackgroundImage() {
	let userURL = prompt('Please enter the image URL for this Box:');

	if (userURL !== null && userURL !== '') {
		this.style.backgroundImage = `url('${userURL}')`;
		this.style.backgroundPosition = 'center';
		this.style.backgroundRepeat = 'no-repeat';
		this.style.backgroundSize = 'cover';
	} else {
		alert('You did not enter the URL for this Box. Please try again.');
	}
}
