
	
	// STATIONERY CAROUSEL INTERACTION
	// Section ID = 5

		// GLOBAL VARS
		var totalStationery = 2;
		var currentDisplayStationery = 1;

		// INTERACTION BY ARROWS CLICK
		// Next Project Interaction | Arrows Nav Click
		$('#section-5').on('click', '.rightArrow a', function(event) {
			event.preventDefault();
			rightMovementNavigation(currentDisplayStationery, totalStationery, $('#section-5'), currentSectionId + 1, 'communication');

			// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
			// Update the 'current loaded project' var
			if (currentDisplayStationery < totalStationery){
				currentDisplayStationery = currentDisplayStationery + 1 ;
			}
		});

		// Previous Project Interaction | Arrows Nav Click
		$('#section-5').on('click', '.leftArrow a', function(event) {
			event.preventDefault();
			leftMovementNavigation(currentDisplayStationery, $('#section-5'));

			// THE LAST MOVE
			// Update the 'current loaded project' var
			if (currentDisplayStationery > 1){
				currentDisplayStationery = currentDisplayStationery - 1 ;
			}
		});


		// INTERACTION BY BOTTOM NAV BARS
		$('#section-5').on('click', '.singleBar', function(event) {
			event.preventDefault();
			projectToLoad = $(this).data("loadprojectid");
			projectsToSkip = Math.abs(projectToLoad - currentDisplayStationery);
			
			bottomNavBarClick(projectToLoad, projectsToSkip, currentDisplayStationery, $('#section-5'), totalStationery);

			// THE LAST MOVE
			// Update the 'current loaded stationery id' var
			if (projectToLoad > currentDisplayStationery) {
				currentDisplayStationery = currentDisplayStationery + 1 ;
			} else if (projectToLoad < currentDisplayStationery) {
				currentDisplayStationery = currentDisplayStationery - 1 ;
			};
		});


		// INTERACTION BY KEYBOARD ARROWS
		$(document).keyup(function(event) {

			// TRIGGER THE KEY INTERACTION FUNCTIONS OF THE CURRENT CAROUSEL SECTION
			// RIGHT ARROW INTERACTION (KEYCODE = 39)
			if (event.keyCode == 39 ){
				event.preventDefault();

				// Trigger the functions of the Stationery Carousel
				if (currentSectionId == 5) {
					rightMovementNavigation(currentDisplayStationery, totalStationery, $('#section-5'), currentSectionId + 1, 'communication');

					// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
					// Update the 'current loaded project' var
					if (currentDisplayStationery < totalStationery){
						currentDisplayStationery = currentDisplayStationery + 1 ;
					}
				};
			}

			// LEFT ARROW INTERACTION (KEYCODE = 37)
			if (event.keyCode == 37){
				event.preventDefault();

				// Trigger the functions of the Stationery Carousel
				if (currentSectionId == 5 && currentDisplayStationery > 1) {
					leftMovementNavigation(currentDisplayStationery, $('#section-5'));

					// THE LAST MOVE
					// Update the 'current loaded project' var
					if (currentDisplayStationery > 1){
						currentDisplayStationery = currentDisplayStationery - 1 ;
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

				if (currentSectionId == 5) {
					scrollHorizontalCarousel(event.deltaX, event.deltaY, event.deltaFactor, currentDisplayStationery, totalStationery, $('#section-5'), currentSectionId + 1, 'communication');

					// Detect if user is scrolling right
					if (event.deltaX > 0) {
						// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
						// Update the 'current loaded project' var
						if (currentDisplayStationery < totalStationery){
							currentDisplayStationery = currentDisplayStationery + 1 ;
						}
					} else if (event.deltaX < 0) {
						// THE LAST MOVE
						// Update the 'current loaded project' var
						if (currentDisplayStationery > 1){
							currentDisplayStationery = currentDisplayStationery - 1 ;
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








