
	
	// POINT OF SALE DESIGN CAROUSEL INTERACTION
	// Section ID = 9
	

		// GLOBAL VARS
		var totalPOS = 2;
		var currentDisplayPOS = 1;

		// INTERACTION BY ARROWS CLICK
		// Next Project Interaction | Arrows Nav Click
		$('#section-9').on('click', '.rightArrow a', function(event) {
			event.preventDefault();
			rightMovementNavigation(currentDisplayPOS, totalPOS, $('#section-9'), currentSectionId + 1, 'interiorism');

			// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
			// Update the 'current loaded project' var
			if (currentDisplayPOS < totalPOS){
				currentDisplayPOS = currentDisplayPOS + 1 ;
			}
		});

		// Previous Project Interaction | Arrows Nav Click
		$('#section-9').on('click', '.leftArrow a', function(event) {
			event.preventDefault();
			leftMovementNavigation(currentDisplayPOS, $('#section-9'));

			// THE LAST MOVE
			// Update the 'current loaded project' var
			if (currentDisplayPOS > 1){
				currentDisplayPOS = currentDisplayPOS - 1 ;
			}
		});


		// INTERACTION BY BOTTOM NAV BARS
		$('#section-9').on('click', '.singleBar', function(event) {
			event.preventDefault();
			projectToLoad = $(this).data("loadprojectid");
			projectsToSkip = Math.abs(projectToLoad - currentDisplayPOS);
			
			bottomNavBarClick(projectToLoad, projectsToSkip, currentDisplayPOS, $('#section-9'), totalPOS);

			// THE LAST MOVE
			// Update the 'current loaded stationery id' var
			if (projectToLoad > currentDisplayPOS) {
				for (var i = 0; i < projectsToSkip; i++) {
					currentDisplayPOS = currentDisplayPOS + 1 ;
				};
				console.log('New currentDisplayPOS value: '+ currentDisplayPOS);

			} else if (projectToLoad < currentDisplayPOS) {
				for (var i = 0; i < projectsToSkip; i++) {
					currentDisplayPOS = currentDisplayPOS - 1 ;

					// Fix to each(loop) inside bottomNavBarClick() function, it doesn't update the 'current display project' var
					if (currentDisplayPOS == 1) {
						$('#section-9').find('.leftArrow').addClass('firstArrow');
					};
				};
				console.log('New currentDisplayPOS value: '+ currentDisplayPOS);
			};
		});


		// INTERACTION BY KEYBOARD ARROWS
		$(document).keyup(function(event) {

			// TRIGGER THE KEY INTERACTION FUNCTIONS OF THE CURRENT CAROUSEL SECTION
			// RIGHT ARROW INTERACTION (KEYCODE = 39)
			if (event.keyCode == 39 ){
				event.preventDefault();

				// Trigger the functions of the POS Carousel
				if (currentSectionId == 9) {
					rightMovementNavigation(currentDisplayPOS, totalPOS, $('#section-9'), currentSectionId + 1, 'interiorism');

					// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
					// Update the 'current loaded project' var
					if (currentDisplayPOS < totalPOS){
						currentDisplayPOS = currentDisplayPOS + 1 ;
					}
				};
			}

			// LEFT ARROW INTERACTION (KEYCODE = 37)
			if (event.keyCode == 37){
				event.preventDefault();

				// Trigger the functions of the POS Carousel
				if (currentSectionId == 9 && currentDisplayPOS > 1) {
					leftMovementNavigation(currentDisplayPOS, $('#section-9'));

					// THE LAST MOVE
					// Update the 'current loaded project' var
					if (currentDisplayPOS > 1){
						currentDisplayPOS = currentDisplayPOS - 1 ;
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

				if (currentSectionId == 9) {
					scrollHorizontalCarousel(event.deltaX, event.deltaY, event.deltaFactor, currentDisplayPOS, totalPOS, $('#section-9'), currentSectionId + 1, 'interiorism');

					// Detect if user is scrolling right
					if (event.deltaX > 0) {
						// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
						// Update the 'current loaded project' var
						if (currentDisplayPOS < totalPOS){
							currentDisplayPOS = currentDisplayPOS + 1 ;
						}
					} else if (event.deltaX < 0) {
						// THE LAST MOVE
						// Update the 'current loaded project' var
						if (currentDisplayPOS > 1){
							currentDisplayPOS = currentDisplayPOS - 1 ;
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
