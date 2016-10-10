
	

	// HELPER FUNCTIONS
		// ARROWS INTERACTION | by CLICK and by KEYBOARD
			// Next Project | Right Arrow Nav Click
			function rightMovementNavigation(currentDisplayProject, totalProjects, currentCarouselSelector, nextSectionId, nextSectionName){
				// Check if there are next projects to show
				if (currentDisplayProject < totalProjects) {
					showMeTheNextProject(currentDisplayProject, currentCarouselSelector, totalProjects);
					switchNextProjectDataBrand(currentCarouselSelector);
					switchNextProjectDataClient(currentCarouselSelector);
				} 
				// If there aren't, scroll to next section
				else if (currentDisplayProject == totalProjects) {
					// HELPER FUNCTIONS FROM SCROLL_LISTENER.JS
					delayBetweenSections();
					scrollNextSection();
					activeNextNavBar();
		 			window.history.pushState("object or string", "section", "?" + nextSectionName);

		 			setTimeout(function(){
						currentSectionId = nextSectionId;
		 			}, transitionsTiming);
		 			
				};
			}

			//  Previous Project | Left Arrow Nav Click
			function leftMovementNavigation(currentDisplayProject, currentCarouselSelector){
				// Trigger only if there are previous projects to show
				if (currentDisplayProject > 1){
					showMeThePreviousProject(currentDisplayProject, currentCarouselSelector);
					switchPreviousProjectDataBrand(currentCarouselSelector);
					switchPreviousProjectDataClient(currentCarouselSelector);
				}
			}

		// BOTTOM NAV BARS INTERACTION
			function bottomNavBarClick(projectToLoadIdByDataAttr, projectsToSkipByPreviousCalc, currentDisplayProject, currentCarouselSelector, totalProjects){
				
				// CHECK IF USER IS TRYING TO LOAD THE CURRENT PROJECT
				if (projectToLoadIdByDataAttr == currentDisplayProject){
					console.log('Seriously?, you are trying to load the current project');
				} 

				// CHECK IF USER IS LOADING NEXT PROJECTS
				else if(projectToLoadIdByDataAttr > currentDisplayProject){
					// console.log('Ready to go to next project');

					// Repeat the action until reaching the desired project
					for (var i = 0; i < projectsToSkipByPreviousCalc; i++) {
						// ADD A DELAY WHEN THEY SKIP VARIOUS PROJECTS
						setTimeout(function(){
							showMeTheNextProject(currentDisplayProject, currentCarouselSelector, totalProjects);
							switchNextProjectDataBrand(currentCarouselSelector);
							switchNextProjectDataClient(currentCarouselSelector);
						}, i * 100);
					};	
				} 

				// CHECK IF USER IS LOADING PREVIOUS PROJECTS
				else if(projectToLoadIdByDataAttr < currentDisplayProject){
					// console.log('Ready to go to previous project');

					// Repeat the action until reaching the desired project
					for (var i = 0; i < projectsToSkipByPreviousCalc; i++) {
						// ADD A DELAY WHEN THEY SKIP VARIOUS PROJECTS
						setTimeout(function(){
							showMeThePreviousProject(currentDisplayProject, currentCarouselSelector, totalProjects);
							switchPreviousProjectDataBrand(currentCarouselSelector);
							switchPreviousProjectDataClient(currentCarouselSelector);
						}, i * 100);
					};
				}
			}

		// MOUSE WHEEL INTERACTION
			function scrollHorizontalCarousel(scrollXAcceleration, scrollYAcceleration, scrollDeltaFactor, currentDisplayProject, totalProjects, currentCarouselSelector, nextSectionId, nextSectionName){
				delayBetweenSections();

		    	// CHECK IF JS IS DETECTING MOUSEWHEEL
				console.log('Scroll started.');
		  		console.log(scrollXAcceleration, scrollYAcceleration, scrollDeltaFactor);

		  		// Detect if user is scrolling right
	    		if (event.deltaX > 0){
	    			rightMovementNavigation(currentDisplayProject, totalProjects, currentCarouselSelector, nextSectionId, nextSectionName);
	    			
	    		} 
	    		// Detect if user is scrolling left
	    		else if (event.deltaX < 0){
	    			leftMovementNavigation(currentDisplayProject, currentCarouselSelector);
	    			
	    		}
			}


		// GO NEXT PROJECT ONE BY ONE
		function showMeTheNextProject(currentShowingProjectId, currentCarouselSelector, totalProjects){
			// CHECK IF IT'S MOVING FROM THE FIRST PROJECT
			if (currentShowingProjectId == 1) {
				// SHOW THE LEFT ARROW TO GO PREVIOUS PHOTOS
				currentCarouselSelector.find('.leftArrow').removeClass('firstArrow');
			};

			// DISPLACE 1 POSITION PROJECT PHOTOS
			// First move the previous photos to their new positions
				// The 'holding back photos' stay like that, only the 'previous photo' go backwards
				currentCarouselSelector.find('.previousPhoto').addClass('holdingBackPhoto');
				currentCarouselSelector.find('.previousPhoto').removeClass('previousPhoto');

			// Second move the current photo
				// Because you are moving forward, the current photo goes backwards, so put its right class
				currentCarouselSelector.find('.currentPhoto').addClass('previousPhoto');
				currentCarouselSelector.find('.currentPhoto').removeClass('currentPhoto');

			// Finally, move the next photos
				// We will only move the 'next photo' and the first 'holding front photo', so we will start moving first the 'next photo'
				currentCarouselSelector.find('.nextPhoto').addClass('currentPhoto');
				currentCarouselSelector.find('.nextPhoto').removeClass('nextPhoto');

				holdingFrontProjects = currentCarouselSelector.find('.holdingFrontPhoto');
				$(holdingFrontProjects[0]).addClass('nextPhoto');
				$(holdingFrontProjects[0]).removeClass('holdingFrontPhoto');


			// SET THE ATTRIBUTES OF THE ARROWS
			// First set the new attribute for each arrow, depending on the new project loaded, the previous photo id for left arrow and the next photo id for right arrow
			leftIdToBring = currentShowingProjectId;
			rightIdToBring = currentShowingProjectId + 2;

			// If the right id is greater than the total of projects, it means it will scroll down instead of showing the next photo
			if (rightIdToBring > totalProjects) {
				rightIdToBring = 'next';
			};

			currentCarouselSelector.find('.leftArrow a').data("idtobring", leftIdToBring);
			currentCarouselSelector.find('.rightArrow a').data("idtobring", rightIdToBring);


			// SET THE STYLE FOR THE BOTTOM NAV BARS
				// First move the 'current bar' to the 'previous bar' position
				currentCarouselSelector.find('.currentBar').addClass('previousBar');
				currentCarouselSelector.find('.currentBar').removeClass('currentBar');

				// Then, bring only the first 'next bar' to the 'current bar' position
				nextBars = currentCarouselSelector.find('.nextBar');
				$(nextBars[0]).addClass('currentBar');
				$(nextBars[0]).removeClass('nextBar');
		}

		// GO PREVIOUS PROJECT, ONE BY ONE
		function showMeThePreviousProject(currentShowingProjectId, currentCarouselSelector){

			// CHECK IF IT'S MOVING TO THE FIRST PROJECT
			if (currentShowingProjectId == 2) {
				// SHOW THE LEFT ARROW TO GO PREVIOUS PHOTOS
				currentCarouselSelector.find('.leftArrow').addClass('firstArrow');
			};

			// DISPLACE 1 POSITION PROJECT PHOTOS
			// First move the next photos to their new positions
				// The 'holding front photos' stay like that, only the 'next photo' go backwards
				currentCarouselSelector.find('.nextPhoto').addClass('holdingFrontPhoto');
				currentCarouselSelector.find('.nextPhoto').removeClass('nextPhoto');

			// Second move the current photo
				// Because you are moving backwards, the current photo goes frontwards, so put its right class
				currentCarouselSelector.find('.currentPhoto').addClass('nextPhoto');
				currentCarouselSelector.find('.currentPhoto').removeClass('currentPhoto');

			// Finally, move the previous photos
				// We will only move the 'previous photo' and the last 'holding back photo', so we will start moving first the 'previous photo'
				currentCarouselSelector.find('.previousPhoto').addClass('currentPhoto');
				currentCarouselSelector.find('.previousPhoto').removeClass('previousPhoto');

				holdingBackProjects = currentCarouselSelector.find('.holdingBackPhoto');
				$(holdingBackProjects[holdingBackProjects.length - 1]).addClass('previousPhoto');
				$(holdingBackProjects[holdingBackProjects.length - 1]).removeClass('holdingBackPhoto');


			// SET THE ATTRIBUTES OF THE ARROWS
			// First set the new attribute for each arrow, depending on the new project loaded, the previous photo id for left arrow and the next photo id for right arrow
			leftIdToBring = currentShowingProjectId - 2;
			rightIdToBring = currentShowingProjectId;

			currentCarouselSelector.find('.leftArrow a').data("idtobring", leftIdToBring);
			currentCarouselSelector.find('.rightArrow a').data("idtobring", rightIdToBring);


			// SET THE STYLE FOR THE BOTTOM NAV BARS
				// First move the 'current bar' to the 'next bar' position
				currentCarouselSelector.find('.currentBar').addClass('nextBar');
				currentCarouselSelector.find('.currentBar').removeClass('currentBar');

				// Then, bring only the last 'previous bar' to the 'current bar' position
				previousBars = currentCarouselSelector.find('.previousBar');
				$(previousBars[previousBars.length - 1]).addClass('currentBar');
				$(previousBars[previousBars.length - 1]).removeClass('previousBar');
		}

		// SWITCH PROJECT DATA ON VERTICAL CAROUSEL
			// Switch Brand Data
			function switchNextProjectDataBrand(currentCarouselSelector){
				// First modify the 'current showing brand' data to 'previous brand' position
				currentCarouselSelector.find('.currentBrand').addClass('previousBrand');
				currentCarouselSelector.find('.currentBrand').removeClass('currentBrand');

				// Then switch only the first 'next brand' data to the current position
				nextBrands = currentCarouselSelector.find('.nextBrand');
				$(nextBrands[0]).addClass('currentBrand');
				$(nextBrands[0]).removeClass('nextBrand');
			}

			function switchPreviousProjectDataBrand(currentCarouselSelector){
				// First modify the 'current showing brand' data to 'next brand' position
				currentCarouselSelector.find('.currentBrand').addClass('nextBrand');
				currentCarouselSelector.find('.currentBrand').removeClass('currentBrand');

				// Then switch only the last 'previous brand' data to the current position
				previousBrands = currentCarouselSelector.find('.previousBrand');
				$(previousBrands[previousBrands.length - 1]).addClass('currentBrand');
				$(previousBrands[previousBrands.length - 1]).removeClass('previousBrand');
			}


			// Switch Client Data
			function switchNextProjectDataClient(currentCarouselSelector){
				// First modify the 'current showing brand' data to 'previous brand' position
				currentCarouselSelector.find('.currentClient').addClass('previousClient');
				currentCarouselSelector.find('.currentClient').removeClass('currentClient');

				// Then switch only the first 'next Client' data to the current position
				nextClients = currentCarouselSelector.find('.nextClient');
				$(nextClients[0]).addClass('currentClient');
				$(nextClients[0]).removeClass('nextClient');
			}

			function switchPreviousProjectDataClient(currentCarouselSelector){
				// First modify the 'current showing Client' data to 'next Client' position
				currentCarouselSelector.find('.currentClient').addClass('nextClient');
				currentCarouselSelector.find('.currentClient').removeClass('currentClient');

				// Then switch only the last 'previous Client' data to the current position
				previousClients = currentCarouselSelector.find('.previousClient');
				$(previousClients[previousClients.length - 1]).addClass('currentClient');
				$(previousClients[previousClients.length - 1]).removeClass('previousClient');
			}












