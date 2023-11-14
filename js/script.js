// Get all blocks from the DOM using the "block" class
const blocks = document.querySelectorAll('.block');

// Add a click handler for each block
blocks.forEach((block, index) => {
	block.addEventListener('click', function () {
		let userURL = prompt('Please enter the image URL for this Box:');

		// URL validation
		if (userURL !== null && userURL !== '') {
			// Set image URL as background for selected block
			block.style.backgroundImage = `url('${userURL}')`;
			block.style.backgroundPosition = 'center';
			block.style.backgroundRepeat = 'no-repeat';
			block.style.backgroundSize = 'cover';
		} else {
			// Notify the user if they haven't entered a URL
			alert('You did not enter the URL for this Box. Please try again.');
		}
	});
});
