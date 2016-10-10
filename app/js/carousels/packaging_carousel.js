
	
	// PACKAGING & PRODUCT DESIGN CAROUSEL INTERACTION
	// Section ID = 7

		// GLOBAL VARS
		var totalPackaging = 6;
		var currentDisplayPackaging = 1;

		// INTERACTION BY ARROWS CLICK
		// Next Project Interaction | Arrows Nav Click
		$('#section-7').on('click', '.rightArrow a', function(event) {
			event.preventDefault();
			rightMovementNavigation(currentDisplayPackaging, totalPackaging, $('#section-7'), currentSectionId + 1, 'uniforms');

			// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
			// Update the 'current loaded project' var
			if (currentDisplayPackaging < totalPackaging){
				currentDisplayPackaging = currentDisplayPackaging + 1 ;
			}
		});

		// Previous Project Interaction | Arrows Nav Click
		$('#section-7').on('click', '.leftArrow a', function(event) {
			event.preventDefault();
			leftMovementNavigation(currentDisplayPackaging, $('#section-7'));

			// THE LAST MOVE
			// Update the 'current loaded project' var
			if (currentDisplayPackaging > 1){
				currentDisplayPackaging = currentDisplayPackaging - 1 ;
			}
		});


		// INTERACTION BY BOTTOM NAV BARS
		$('#section-7').on('click', '.singleBar', function(event) {
			event.preventDefault();
			projectToLoad = $(this).data("loadprojectid");
			projectsToSkip = Math.abs(projectToLoad - currentDisplayPackaging);
			
			bottomNavBarClick(projectToLoad, projectsToSkip, currentDisplayPackaging, $('#section-7'), totalPackaging);

			// THE LAST MOVE
			// Update the 'current loaded stationery id' var
			if (projectToLoad > currentDisplayPackaging) {
				for (var i = 0; i < projectsToSkip; i++) {
					currentDisplayPackaging = currentDisplayPackaging + 1 ;
				};
				console.log('New currentDisplayPackaging value: '+ currentDisplayPackaging);

			} else if (projectToLoad < currentDisplayPackaging) {
				for (var i = 0; i < projectsToSkip; i++) {
					currentDisplayPackaging = currentDisplayPackaging - 1 ;

					// Fix to each(loop) inside bottomNavBarClick() function, it doesn't update the 'current display project' var
					if (currentDisplayPackaging == 1) {
						$('#section-7').find('.leftArrow').addClass('firstArrow');
					};
				};
				console.log('New currentDisplayPackaging value: '+ currentDisplayPackaging);
			};
		});


		// INTERACTION BY KEYBOARD ARROWS
		$(document).keyup(function(event) {

			// TRIGGER THE KEY INTERACTION FUNCTIONS OF THE CURRENT CAROUSEL SECTION
			// RIGHT ARROW INTERACTION (KEYCODE = 39)
			if (event.keyCode == 39 ){
				event.preventDefault();

				// Trigger the functions of the Packaging Carousel
				if (currentSectionId == 7) {
					rightMovementNavigation(currentDisplayPackaging, totalPackaging, $('#section-7'), currentSectionId + 1, 'uniforms');

					// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
					// Update the 'current loaded project' var
					if (currentDisplayPackaging < totalPackaging){
						currentDisplayPackaging = currentDisplayPackaging + 1 ;
					}
				};
			}

			// LEFT ARROW INTERACTION (KEYCODE = 37)
			if (event.keyCode == 37){
				event.preventDefault();

				// Trigger the functions of the Packaging Carousel
				if (currentSectionId == 7 && currentDisplayPackaging > 1) {
					leftMovementNavigation(currentDisplayPackaging, $('#section-7'));

					// THE LAST MOVE
					// Update the 'current loaded project' var
					if (currentDisplayPackaging > 1){
						currentDisplayPackaging = currentDisplayPackaging - 1 ;
					}
				};
			}
		});


		// INTERACTION BY HORIZONTAL SCROLLING
		$('#mbrtWrapper').on('mousewheel', function(event) {
			// CONTROL TRIGGERING
			// Change section only if the current section has been fully loaded
			if(canScroll && event.deltaX != 0){
				event.preventDefault();

				if (currentSectionId == 7) {
					scrollHorizontalCarousel(event.deltaX, event.deltaY, event.deltaFactor, currentDisplayPackaging, totalPackaging, $('#section-7'), currentSectionId + 1, 'uniforms');

					// Detect if user is scrolling right
					if (event.deltaX > 0) {
						// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
						// Update the 'current loaded project' var
						if (currentDisplayPackaging < totalPackaging){
							currentDisplayPackaging = currentDisplayPackaging + 1 ;
						}
					} else if (event.deltaX < 0) {
						// THE LAST MOVE
						// Update the 'current loaded project' var
						if (currentDisplayPackaging > 1){
							currentDisplayPackaging = currentDisplayPackaging - 1 ;
						}
					};
				};
		    } else {
		    	// PREVENT OVERLAPING CHANGE SECTION ANIMATIONS
				// If there is an animation running to change the section, wait until it's over to change of section again
				event.preventDefault();

				// NOTICE YOU HAVE TO WAIT TO SCROLL AGAIN
				// console.log("You can't scroll yet, canScroll: " + canScroll);
		    }
	    });
