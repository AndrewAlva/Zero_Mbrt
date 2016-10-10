
	
	// ADVERTISING & CAMPAIGNS CAROUSEL INTERACTION
	// Section ID = 11

		// GLOBAL VARS
		var totalAds = 6;
		var currentDisplayAd = 1;

		// INTERACTION BY ARROWS CLICK
		// Next Project Interaction | Arrows Nav Click
		$('#section-11').on('click', '.rightArrow a', function(event) {
			event.preventDefault();
			rightMovementNavigation(currentDisplayAd, totalAds, $('#section-11'), currentSectionId + 1, 'web');

			// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
			// Update the 'current loaded project' var
			if (currentDisplayAd < totalAds){
				currentDisplayAd = currentDisplayAd + 1 ;
			}
		});

		// Previous Project Interaction | Arrows Nav Click
		$('#section-11').on('click', '.leftArrow a', function(event) {
			event.preventDefault();
			leftMovementNavigation(currentDisplayAd, $('#section-11'));

			// THE LAST MOVE
			// Update the 'current loaded project' var
			if (currentDisplayAd > 1){
				currentDisplayAd = currentDisplayAd - 1 ;
			}
		});


		// INTERACTION BY BOTTOM NAV BARS
		$('#section-11').on('click', '.singleBar', function(event) {
			event.preventDefault();
			projectToLoad = $(this).data("loadprojectid");
			projectsToSkip = Math.abs(projectToLoad - currentDisplayAd);
			
			bottomNavBarClick(projectToLoad, projectsToSkip, currentDisplayAd, $('#section-11'), totalAds);

			// THE LAST MOVE
			// Update the 'current loaded stationery id' var
			if (projectToLoad > currentDisplayAd) {
				for (var i = 0; i < projectsToSkip; i++) {
					currentDisplayAd = currentDisplayAd + 1 ;
				};
				console.log('New currentDisplayAd value: '+ currentDisplayAd);

			} else if (projectToLoad < currentDisplayAd) {
				for (var i = 0; i < projectsToSkip; i++) {
					currentDisplayAd = currentDisplayAd - 1 ;

					// Fix to each(loop) inside bottomNavBarClick() function, it doesn't update the 'current display project' var
					if (currentDisplayAd == 1) {
						$('#section-11').find('.leftArrow').addClass('firstArrow');
					};
				};
				console.log('New currentDisplayAd value: '+ currentDisplayAd);
			};
		});


		// INTERACTION BY KEYBOARD ARROWS
		$(document).keyup(function(event) {

			// TRIGGER THE KEY INTERACTION FUNCTIONS OF THE CURRENT CAROUSEL SECTION
			// RIGHT ARROW INTERACTION (KEYCODE = 39)
			if (event.keyCode == 39 ){
				event.preventDefault();

				// Trigger the functions of the Advertising Carousel
				if (currentSectionId == 11) {
					rightMovementNavigation(currentDisplayAd, totalAds, $('#section-11'), currentSectionId + 1, 'web');

					// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
					// Update the 'current loaded project' var
					if (currentDisplayAd < totalAds){
						currentDisplayAd = currentDisplayAd + 1 ;
					}
				};
			}

			// LEFT ARROW INTERACTION (KEYCODE = 37)
			if (event.keyCode == 37){
				event.preventDefault();

				// Trigger the functions of the Advertising Carousel
				if (currentSectionId == 11 && currentDisplayAd > 1) {
					leftMovementNavigation(currentDisplayAd, $('#section-11'));

					// THE LAST MOVE
					// Update the 'current loaded project' var
					if (currentDisplayAd > 1){
						currentDisplayAd = currentDisplayAd - 1 ;
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

				if (currentSectionId == 11) {
					scrollHorizontalCarousel(event.deltaX, event.deltaY, event.deltaFactor, currentDisplayAd, totalAds, $('#section-11'), currentSectionId + 1, 'web');

					// Detect if user is scrolling right
					if (event.deltaX > 0) {
						// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
						// Update the 'current loaded project' var
						if (currentDisplayAd < totalAds){
							currentDisplayAd = currentDisplayAd + 1 ;
						}
					} else if (event.deltaX < 0) {
						// THE LAST MOVE
						// Update the 'current loaded project' var
						if (currentDisplayAd > 1){
							currentDisplayAd = currentDisplayAd - 1 ;
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
