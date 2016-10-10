
	// UNIFORM & LIVERY DESIGN CAROUSEL INTERACTION
	// Section ID = 8

		// GLOBAL VARS
		var totalUniforms = 3;
		var currentDisplayUniform = 1;

		// INTERACTION BY ARROWS CLICK
		// Next Project Interaction | Arrows Nav Click
		$('#section-8').on('click', '.rightArrow a', function(event) {
			event.preventDefault();
			rightMovementNavigation(currentDisplayUniform, totalUniforms, $('#section-8'), currentSectionId + 1, 'uniforms');

			// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
			// Update the 'current loaded project' var
			if (currentDisplayUniform < totalUniforms){
				currentDisplayUniform = currentDisplayUniform + 1 ;
			}
		});

		// Previous Project Interaction | Arrows Nav Click
		$('#section-8').on('click', '.leftArrow a', function(event) {
			event.preventDefault();
			leftMovementNavigation(currentDisplayUniform, $('#section-8'));

			// THE LAST MOVE
			// Update the 'current loaded project' var
			if (currentDisplayUniform > 1){
				currentDisplayUniform = currentDisplayUniform - 1 ;
			}
		});


		// INTERACTION BY BOTTOM NAV BARS
		$('#section-8').on('click', '.singleBar', function(event) {
			event.preventDefault();
			projectToLoad = $(this).data("loadprojectid");
			projectsToSkip = Math.abs(projectToLoad - currentDisplayUniform);
			
			bottomNavBarClick(projectToLoad, projectsToSkip, currentDisplayUniform, $('#section-8'), totalUniforms);

			// THE LAST MOVE
			// Update the 'current loaded stationery id' var
			if (projectToLoad > currentDisplayUniform) {
				for (var i = 0; i < projectsToSkip; i++) {
					currentDisplayUniform = currentDisplayUniform + 1 ;
				};
				console.log('New currentDisplayUniform value: '+ currentDisplayUniform);

			} else if (projectToLoad < currentDisplayUniform) {
				for (var i = 0; i < projectsToSkip; i++) {
					currentDisplayUniform = currentDisplayUniform - 1 ;

					// Fix to each(loop) inside bottomNavBarClick() function, it doesn't update the 'current display project' var
					if (currentDisplayUniform == 1) {
						$('#section-8').find('.leftArrow').addClass('firstArrow');
					};
				};
				console.log('New currentDisplayUniform value: '+ currentDisplayUniform);
			};
		});


		// INTERACTION BY KEYBOARD ARROWS
		$(document).keyup(function(event) {

			// TRIGGER THE KEY INTERACTION FUNCTIONS OF THE CURRENT CAROUSEL SECTION
			// RIGHT ARROW INTERACTION (KEYCODE = 39)
			if (event.keyCode == 39 ){
				event.preventDefault();

				// Trigger the functions of the Uniforms Carousel
				if (currentSectionId == 8) {
					rightMovementNavigation(currentDisplayUniform, totalUniforms, $('#section-8'), currentSectionId + 1, 'uniforms');

					// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
					// Update the 'current loaded project' var
					if (currentDisplayUniform < totalUniforms){
						currentDisplayUniform = currentDisplayUniform + 1 ;
					}
				};
			}

			// LEFT ARROW INTERACTION (KEYCODE = 37)
			if (event.keyCode == 37){
				event.preventDefault();

				// Trigger the functions of the Uniforms Carousel
				if (currentSectionId == 8 && currentDisplayUniform > 1) {
					leftMovementNavigation(currentDisplayUniform, $('#section-8'));

					// THE LAST MOVE
					// Update the 'current loaded project' var
					if (currentDisplayUniform > 1){
						currentDisplayUniform = currentDisplayUniform - 1 ;
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

				if (currentSectionId == 8) {
					scrollHorizontalCarousel(event.deltaX, event.deltaY, event.deltaFactor, currentDisplayUniform, totalUniforms, $('#section-8'), currentSectionId + 1, 'uniforms');

					// Detect if user is scrolling right
					if (event.deltaX > 0) {
						// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
						// Update the 'current loaded project' var
						if (currentDisplayUniform < totalUniforms){
							currentDisplayUniform = currentDisplayUniform + 1 ;
						}
					} else if (event.deltaX < 0) {
						// THE LAST MOVE
						// Update the 'current loaded project' var
						if (currentDisplayUniform > 1){
							currentDisplayUniform = currentDisplayUniform - 1 ;
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