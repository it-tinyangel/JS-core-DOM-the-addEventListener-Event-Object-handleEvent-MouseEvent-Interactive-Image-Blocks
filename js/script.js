const blocks = document.querySelectorAll('.my-block');

// Add a click handler for each block
blocks.forEach((block, index) => {
	block.addEventListener('click', function () {
		let userURL = prompt(`Please enter the image URL for the Box ${index + 1}:`);

		if (userURL !== null && userURL !== '') {
			// Set the image URL as the background for the selected block
			block.style.backgroundImage = `url('${userURL}')`;
			block.style.backgroundPosition = 'center';
			block.style.backgroundRepeat = 'no-repeat';
			block.style.backgroundSize = 'cover';
		} else {
			alert(`You did not enter the URL for the Box ${index + 1}. Please try again.`);
		}
	});
});
