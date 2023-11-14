const blocks = document.querySelectorAll('.block');

// Click handler for each block
blocks.forEach((block, index) => {
	block.addEventListener('click', () => handleBlockClick(block, index));
});

// Function to click handler 
function handleBlockClick(block, index) {
	let userURL = prompt('Please enter the image URL for this Box:');

	if (userURL !== null && userURL !== '') {
		setBackgroundImage(block, userURL);
	} else {
		alert('You did not enter the URL for this Box. Please try again.');
	}
}

// Function to sets the background image for the block
function setBackgroundImage(block, imageURL) {
	block.style.backgroundImage = `url('${imageURL}')`;
	block.style.backgroundPosition = 'center';
	block.style.backgroundRepeat = 'no-repeat';
	block.style.backgroundSize = 'cover';
}
