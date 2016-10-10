
	

	// CAROUSEL INTERACTION

		// GLOBAL VARS
		var totalLogos = 5;
		var currentDisplayLogo = 1;

		// INTERACTION BY ARROWS CLICK
		// Next Project Interaction | Arrows Nav Click
		$('#section-4').on('click', '.rightArrow a', function(event) {
			event.preventDefault();
			rightMovementNavigation(currentDisplayLogo, totalLogos, $('#section-4'), currentSectionId + 1, 'stationery');

			// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
			// Update the 'current loaded project' var
			if (currentDisplayLogo < totalLogos){
				currentDisplayLogo = currentDisplayLogo + 1 ;
			}
		});

		//  Previous Project Interaction | Arrows Nav Click
		$('#section-4').on('click', '.leftArrow a', function(event) {
			event.preventDefault();
			leftMovementNavigation(currentDisplayLogo, $('#section-4'));

			// THE LAST MOVE
			// Update the 'current loaded project' var
			if (currentDisplayLogo > 1){
				currentDisplayLogo = currentDisplayLogo - 1 ;
			}
		});


		// INTERACTION BY BOTTOM NAV BARS
		$('#section-4').on('click', '.singleBar', function(event) {
			event.preventDefault();
			projectToLoad = $(this).data("loadprojectid");
			projectsToSkip = Math.abs(projectToLoad - currentDisplayLogo);
			console.log('loadprojectid data attribute value: ' + projectToLoad);
			
			bottomNavBarClick(projectToLoad, projectsToSkip, currentDisplayLogo, $('#section-4'), totalLogos);

			// THE LAST MOVE
			// Update the 'current loaded stationery id' var
			if (projectToLoad > currentDisplayLogo) {
				for (var i = 0; i < projectsToSkip; i++) {
					currentDisplayLogo = currentDisplayLogo + 1 ;
				};
				console.log('New currentDisplayLogo value: '+ currentDisplayLogo);

			} else if (projectToLoad < currentDisplayLogo) {
				for (var i = 0; i < projectsToSkip; i++) {
					currentDisplayLogo = currentDisplayLogo - 1 ;

					// Fix to each(loop) inside bottomNavBarClick() function, it doesn't update the 'current display project' var
					if (currentDisplayLogo == 1) {
						$('#section-4').find('.leftArrow').addClass('firstArrow');
					};
				};
				console.log('New currentDisplayLogo value: '+ currentDisplayLogo);
			};
		});


		// INTERACTION BY KEYBOARD
		$(document).keyup(function(event) {
			// TRIGGER THE KEY INTERACTION FUNCTIONS OF THE CURRENT CAROUSEL SECTION
			// RIGHT ARROW INTERACTION (KEYCODE = 39)
			if (event.keyCode == 39 ){
				event.preventDefault();

				// Trigger the functions of the Logos Carousel
				if (currentSectionId == 4) {
					rightMovementNavigation(currentDisplayLogo, totalLogos, $('#section-4'), currentSectionId + 1, 'stationery');

					// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
					// Update the 'current loaded project' var
					if (currentDisplayLogo < totalLogos){
						currentDisplayLogo = currentDisplayLogo + 1 ;
					}
				};
			}

			// LEFT ARROW INTERACTION (KEYCODE = 37)
			if (event.keyCode == 37){
				event.preventDefault();

				// Trigger the functions of the Logos Carousel
				if (currentSectionId == 4 && currentDisplayLogo > 1) {
					leftMovementNavigation(currentDisplayLogo, $('#section-4'));

					// THE LAST MOVE
					// Update the 'current loaded project' var
					if (currentDisplayLogo > 1){
						currentDisplayLogo = currentDisplayLogo - 1 ;
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

				if (currentSectionId == 4) {
					scrollHorizontalCarousel(event.deltaX, event.deltaY, event.deltaFactor, currentDisplayLogo, totalLogos, $('#section-4'), currentSectionId + 1, 'stationery');

					// Detect if user is scrolling right
					if (event.deltaX > 0) {
						// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
						// Update the 'current loaded project' var
						if (currentDisplayLogo < totalLogos){
							currentDisplayLogo = currentDisplayLogo + 1 ;
						}
					} else if (event.deltaX < 0) {
						// THE LAST MOVE
						// Update the 'current loaded project' var
						if (currentDisplayLogo > 1){
							currentDisplayLogo = currentDisplayLogo - 1 ;
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




