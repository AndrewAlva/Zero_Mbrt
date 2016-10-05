
	
	// CAMILA FERNÁNDEZ WEB CAROUSEL INTERACTION
	// Section ID = 14

		// GLOBAL VARS
		var totalCamilaWebScreens = 4;
		var currentDisplayCamilaScreen = 1;

		// INTERACTION BY ARROWS CLICK
		// Next Project Interaction | Arrows Nav Click
		$('#section-14').on('click', '.rightArrow a', function(event) {
			event.preventDefault();
			rightMovementNavigation(currentDisplayCamilaScreen, totalCamilaWebScreens, $('#section-14'), currentSectionId + 1, 'contact');

			// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
			// Update the 'current loaded project' var
			if (currentDisplayCamilaScreen < totalCamilaWebScreens){
				currentDisplayCamilaScreen = currentDisplayCamilaScreen + 1 ;
			}
		});

		// Previous Project Interaction | Arrows Nav Click
		$('#section-14').on('click', '.leftArrow a', function(event) {
			event.preventDefault();
			leftMovementNavigation(currentDisplayCamilaScreen, $('#section-14'));

			// THE LAST MOVE
			// Update the 'current loaded project' var
			if (currentDisplayCamilaScreen > 1){
				currentDisplayCamilaScreen = currentDisplayCamilaScreen - 1 ;
			}
		});


		// INTERACTION BY BOTTOM NAV BARS
		$('#section-14').on('click', '.singleBar', function(event) {
			event.preventDefault();
			projectToLoad = $(this).data("loadprojectid");
			projectsToSkip = Math.abs(projectToLoad - currentDisplayCamilaScreen);
			
			bottomNavBarClick(projectToLoad, projectsToSkip, currentDisplayCamilaScreen, $('#section-14'), totalCamilaWebScreens);

			// THE LAST MOVE
			// Update the 'current loaded stationery id' var
			if (projectToLoad > currentDisplayCamilaScreen) {
				for (var i = 0; i < projectsToSkip; i++) {
					currentDisplayCamilaScreen = currentDisplayCamilaScreen + 1 ;
				};
				console.log('New currentDisplayCamilaScreen value: '+ currentDisplayCamilaScreen);

			} else if (projectToLoad < currentDisplayCamilaScreen) {
				for (var i = 0; i < projectsToSkip; i++) {
					currentDisplayCamilaScreen = currentDisplayCamilaScreen - 1 ;

					// Fix to each(loop) inside bottomNavBarClick() function, it doesn't update the 'current display project' var
					if (currentDisplayCamilaScreen == 1) {
						$('#section-14').find('.leftArrow').addClass('firstArrow');
					};
				};
				console.log('New currentDisplayCamilaScreen value: '+ currentDisplayCamilaScreen);
			};
		});


		// INTERACTION BY KEYBOARD ARROWS
		$(document).keyup(function(event) {

			// TRIGGER THE KEY INTERACTION FUNCTIONS OF THE CURRENT CAROUSEL SECTION
			// RIGHT ARROW INTERACTION (KEYCODE = 39)
			if (event.keyCode == 39 ){
				event.preventDefault();

				// Trigger the functions of the Camila Web Carousel
				if (currentSectionId == 14) {
					rightMovementNavigation(currentDisplayCamilaScreen, totalCamilaWebScreens, $('#section-14'), currentSectionId + 1, 'contact');

					// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
					// Update the 'current loaded project' var
					if (currentDisplayCamilaScreen < totalCamilaWebScreens){
						currentDisplayCamilaScreen = currentDisplayCamilaScreen + 1 ;
					}
				};
			}

			// LEFT ARROW INTERACTION (KEYCODE = 37)
			if (event.keyCode == 37){
				event.preventDefault();

				// Trigger the functions of the Camila Web Carousel
				if (currentSectionId == 14 && currentDisplayCamilaScreen > 1) {
					leftMovementNavigation(currentDisplayCamilaScreen, $('#section-14'));

					// THE LAST MOVE
					// Update the 'current loaded project' var
					if (currentDisplayCamilaScreen > 1){
						currentDisplayCamilaScreen = currentDisplayCamilaScreen - 1 ;
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

				if (currentSectionId == 14) {
					scrollHorizontalCarousel(event.deltaX, event.deltaY, event.deltaFactor, currentDisplayCamilaScreen, totalCamilaWebScreens, $('#section-14'), currentSectionId + 1, 'contact');

					// Detect if user is scrolling right
					if (event.deltaX > 0) {
						// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
						// Update the 'current loaded project' var
						if (currentDisplayCamilaScreen < totalCamilaWebScreens){
							currentDisplayCamilaScreen = currentDisplayCamilaScreen + 1 ;
						}
					} else if (event.deltaX < 0) {
						// THE LAST MOVE
						// Update the 'current loaded project' var
						if (currentDisplayCamilaScreen > 1){
							currentDisplayCamilaScreen = currentDisplayCamilaScreen - 1 ;
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
