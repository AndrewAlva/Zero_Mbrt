
	
	// LUCKY WEB CAROUSEL INTERACTION
	// Section ID = 13

		// GLOBAL VARS
		var totalLuckyWebScreens = 3;
		var currentDisplayLuckyScreen = 1;

		// INTERACTION BY ARROWS CLICK
		// Next Project Interaction | Arrows Nav Click
		$('#section-13').on('click', '.rightArrow a', function(event) {
			event.preventDefault();
			rightMovementNavigation(currentDisplayLuckyScreen, totalLuckyWebScreens, $('#section-13'), currentSectionId + 1, 'camila');

			// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
			// Update the 'current loaded project' var
			if (currentDisplayLuckyScreen < totalLuckyWebScreens){
				currentDisplayLuckyScreen = currentDisplayLuckyScreen + 1 ;
			}
		});

		// Previous Project Interaction | Arrows Nav Click
		$('#section-13').on('click', '.leftArrow a', function(event) {
			event.preventDefault();
			leftMovementNavigation(currentDisplayLuckyScreen, $('#section-13'));

			// THE LAST MOVE
			// Update the 'current loaded project' var
			if (currentDisplayLuckyScreen > 1){
				currentDisplayLuckyScreen = currentDisplayLuckyScreen - 1 ;
			}
		});


		// INTERACTION BY BOTTOM NAV BARS
		$('#section-13').on('click', '.singleBar', function(event) {
			event.preventDefault();
			projectToLoad = $(this).data("loadprojectid");
			projectsToSkip = Math.abs(projectToLoad - currentDisplayLuckyScreen);
			
			bottomNavBarClick(projectToLoad, projectsToSkip, currentDisplayLuckyScreen, $('#section-13'), totalLuckyWebScreens);

			// THE LAST MOVE
			// Update the 'current loaded stationery id' var
			if (projectToLoad > currentDisplayLuckyScreen) {
				for (var i = 0; i < projectsToSkip; i++) {
					currentDisplayLuckyScreen = currentDisplayLuckyScreen + 1 ;
				};
				console.log('New currentDisplayLuckyScreen value: '+ currentDisplayLuckyScreen);

			} else if (projectToLoad < currentDisplayLuckyScreen) {
				for (var i = 0; i < projectsToSkip; i++) {
					currentDisplayLuckyScreen = currentDisplayLuckyScreen - 1 ;

					// Fix to each(loop) inside bottomNavBarClick() function, it doesn't update the 'current display project' var
					if (currentDisplayLuckyScreen == 1) {
						$('#section-13').find('.leftArrow').addClass('firstArrow');
					};
				};
				console.log('New currentDisplayLuckyScreen value: '+ currentDisplayLuckyScreen);
			};
		});


		// INTERACTION BY KEYBOARD ARROWS
		$(document).keyup(function(event) {

			// TRIGGER THE KEY INTERACTION FUNCTIONS OF THE CURRENT CAROUSEL SECTION
			// RIGHT ARROW INTERACTION (KEYCODE = 39)
			if (event.keyCode == 39 ){
				event.preventDefault();

				// Trigger the functions of the Lucky Website Carousel
				if (currentSectionId == 13) {
					rightMovementNavigation(currentDisplayLuckyScreen, totalLuckyWebScreens, $('#section-13'), currentSectionId + 1, 'camila');

					// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
					// Update the 'current loaded project' var
					if (currentDisplayLuckyScreen < totalLuckyWebScreens){
						currentDisplayLuckyScreen = currentDisplayLuckyScreen + 1 ;
					}
				};
			}

			// LEFT ARROW INTERACTION (KEYCODE = 37)
			if (event.keyCode == 37){
				event.preventDefault();

				// Trigger the functions of the Lucky Website Carousel
				if (currentSectionId == 13 && currentDisplayLuckyScreen > 1) {
					leftMovementNavigation(currentDisplayLuckyScreen, $('#section-13'));

					// THE LAST MOVE
					// Update the 'current loaded project' var
					if (currentDisplayLuckyScreen > 1){
						currentDisplayLuckyScreen = currentDisplayLuckyScreen - 1 ;
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

				if (currentSectionId == 13) {
					scrollHorizontalCarousel(event.deltaX, event.deltaY, event.deltaFactor, currentDisplayLuckyScreen, totalLuckyWebScreens, $('#section-13'), currentSectionId + 1, 'camila');

					// Detect if user is scrolling right
					if (event.deltaX > 0) {
						// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
						// Update the 'current loaded project' var
						if (currentDisplayLuckyScreen < totalLuckyWebScreens){
							currentDisplayLuckyScreen = currentDisplayLuckyScreen + 1 ;
						}
					} else if (event.deltaX < 0) {
						// THE LAST MOVE
						// Update the 'current loaded project' var
						if (currentDisplayLuckyScreen > 1){
							currentDisplayLuckyScreen = currentDisplayLuckyScreen - 1 ;
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
