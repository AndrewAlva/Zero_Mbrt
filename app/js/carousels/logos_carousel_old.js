// Hello there! This is the backup of the carousel functionality
// using switch(){case...}; at the arrow navigators. It is very
// useful played alone but when it doesn't work to link it with
// other navigators triggers, for example, a carousel that works
// with the keyboard, the mousewheel, arrow navigators on the UI
// and an extra navigator on the UI too.

// So, this is only a backup, soon I will upload another one,
// completely scalable and integrable with other nav triggers.

// CAROUSEL INTERACTION

	// GLOBAL VARS
	var totalLogos = 5;
	var currentDisplayLogo = 1;

	// INTERACTION BY ARROWS CLICK (PENDING KEYBOARD INTERACTION)
		// Next Project Interaction | Arrows Nav Click
		$('#logosCarousel').on('click', '.rightArrow a', function(event) {
			event.preventDefault();

			// EVALUATE WHICH PROJECT WOULD BRING NEXT BY ID
			switch ($(this).data("idtobring")){
				// IN CASE USER GO FROM PROJECT 1 TO 2
				case 2:

					// SET THE NEW 'CURRENT DISPLAYING LOGO' JS GLOBAL VARIABLE
					currentDisplayLogo = 2;

					// SHOW THE LEFT ARROW TO GO PREVIOUS PHOTOS
					$('#logosCarousel').find('.leftArrow').removeClass('firstArrow');

					// SET THE NEW POSITION OF EACH PROJECT PHOTO
					sendToPrevious($('#logos-1'), $('#logosBar-1'));
					sendToCurrent($('#logos-2'), $('#logosBar-2'));
					sendToNext($('#logos-3'), $('#logosBar-3'));
					sendToFront($('#logos-4'));
					sendToFront($('#logos-5'));

					// SET THE NEW ID OF THE PROJECT PHOTO THAT ARROWS WILL BRING
					// Right Arrow
					setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 3);
					// Left Arrow
					setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 1);

					break;

				// IN CASE USER GO FROM PROJECT 2 TO 3
				case 3:

					currentDisplayLogo = 3;

					sendToBack($('#logos-1'));
					sendToPrevious($('#logos-2'), $('#logosBar-2'));
					sendToCurrent($('#logos-3'), $('#logosBar-3'));
					sendToNext($('#logos-4'), $('#logosBar-4'));
					sendToFront($('#logos-5'));

					setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 4);
					setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 2);
					break;

				// IN CASE USER GO FROM PROJECT 3 TO 4
				case 4:

					currentDisplayLogo = 4;

					sendToBack($('#logos-1'));
					sendToBack($('#logos-2'));
					sendToPrevious($('#logos-3'), $('#logosBar-3'));
					sendToCurrent($('#logos-4'), $('#logosBar-4'));
					sendToNext($('#logos-5'), $('#logosBar-5'));

					setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 5);
					setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 3);
					break;

				// IN CASE USER GO FROM PROJECT 4 TO 5
				case 5:

					currentDisplayLogo = 5;

					sendToBack($('#logos-1'));
					sendToBack($('#logos-2'));
					sendToBack($('#logos-3'));
					sendToPrevious($('#logos-4'), $('#logosBar-4'));
					sendToCurrent($('#logos-5'), $('#logosBar-5'));

					// SET THE RIGHT ARROW ATTRIBUTE TO TRIGGER THE SCROLL AT NEXT SECTION
					setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 'next');
					setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 4);
					break;

				// IN CASE USER IS AT THE FINAL PROJECT AND TRIES TO GO NEXT PROJECT, INSTEAD WE SEND THEM BELOW TO NEXT SECTION
				case 'next':
					// HERE WE SCROLL TO THE NEXT SECTION
					console.log('Here we go to next section');
					break;
			}

			showMeTheNextLogo(currentDisplayLogo);
		});

		//  Previous Project Interaction | Arrows Nav Click
		$('#logosCarousel').on('click', '.leftArrow a', function(event) {
			event.preventDefault();

			// EVALUATE WHICH PROJECT WOULD BRING NEXT BY ID
			switch ($(this).data("idtobring")){
				// IN CASE USER GO FROM PROJECT 2 TO 1
				case 1:

					// SET THE NEW 'CURRENT DISPLAYING LOGO' JS GLOBAL VAR
					currentDisplayLogo = 1;

					// SHOW THE LEFT ARROW TO GO PREVIOUS PHOTOS
					$('#logosCarousel').find('.leftArrow').addClass('firstArrow');

					// SET THE NEW POSITION OF EACH PROJECT PHOTO
					sendToCurrent($('#logos-1'),$('#logosBar-1'));
					sendToNext($('#logos-2'),$('#logosBar-2'));
					sendToFront($('#logos-3'));
					sendToFront($('#logos-4'));
					sendToFront($('#logos-5'));

					// SET THE NEW ID OF THE PROJECT PHOTO THAT ARROWS WILL BRING
					// Left Arrow
					setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 0);
					// Right Arrow
					setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 2);
					break;

				// IN CASE USER GO FROM PROJECT 3 TO 2
				case 2:

					currentDisplayLogo = 2;

					sendToPrevious($('#logos-1'),$('#logosBar-1'));
					sendToCurrent($('#logos-2'),$('#logosBar-2'));
					sendToNext($('#logos-3'),$('#logosBar-3'));
					sendToFront($('#logos-4'));
					sendToFront($('#logos-5'));

					setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 1);
					setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 3);
					break;

				// IN CASE USER GO FROM PROJECT 4 TO 3
				case 3:

					currentDisplayLogo = 3;

					sendToBack($('#logos-1'));
					sendToPrevious($('#logos-2'),$('#logosBar-2'));
					sendToCurrent($('#logos-3'),$('#logosBar-3'));
					sendToNext($('#logos-4'),$('#logosBar-4'));
					sendToFront($('#logos-5'));

					setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 2);
					setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 4);
					break;

				// IN CASE USER GO FROM PROJECT 5 TO 4
				case 4:

					currentDisplayLogo = 4;

					sendToBack($('#logos-1'));
					sendToBack($('#logos-2'));
					sendToPrevious($('#logos-3'), $('#logosBar-3'));
					sendToCurrent($('#logos-4'), $('#logosBar-4'));
					sendToNext($('#logos-5'), $('#logosBar-5'));

					// SET THE RIGHT ARROW ATTRIBUTE TO TRIGGER THE SCROLL AT NEXT SECTION
					setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 3);
					setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 5);
					break;
			}
		});






	// HELPER FUNCTIONS
		// CHANGE POSITION OF PROJECT PHOTOS
			// PUT SELECTED PROJECT PHOTO ON THE LEFT EDGE, OUTSIDE THE VIEWPORT
			function sendToBack(project, projectBar){
				project.addClass('holdingBackPhoto');
				project.removeClass('previousPhoto');
				project.removeClass('currentPhoto');
			}

			// PUT SELECTED PROJECT PHOTO ON THE LEFT SIDE, INSIDE THE VIEWPORT
			function sendToPrevious(project, projectBar){
				project.addClass('previousPhoto');
				project.removeClass('currentPhoto');
				project.removeClass('holdingBackPhoto');

				// CHANGE BARS POSITION OF THE BOTTOM NAV TO THE CORRECT POSITION
				projectBar.addClass('previousBar');
				projectBar.removeClass('currentBar');
				projectBar.removeClass('nextBar');
			}

			// PUT SELECTED PROJECT PHOTO ON CENTER
			function sendToCurrent(project, projectBar){
				project.addClass('currentPhoto');
				project.removeClass('nextPhoto');
				project.removeClass('previousPhoto');

				// CHANGE BARS POSITION OF THE BOTTOM NAV TO THE CORRECT POSITION
				projectBar.addClass('currentBar');
				projectBar.removeClass('previousBar');
				projectBar.removeClass('nextBar');
			}

			// PUT SELECTED PROJECT PHOTO ON THE RIGHT EDGE, INSIDE THE VIEWPORT
			function sendToNext(project, projectBar){
				project.addClass('nextPhoto');
				project.removeClass('currentPhoto');
				project.removeClass('holdingFrontPhoto');

				// CHANGE BARS POSITION OF THE BOTTOM NAV TO THE CORRECT POSITION
				projectBar.addClass('nextBar');
				projectBar.removeClass('currentBar');
				projectBar.removeClass('previousBar');
			}

			// PUT SELECTED PROJECT PHOTO ON THE RIGHT SIDE, OUTSIDE THE VIEWPORT
			function sendToFront(project){
				project.addClass('holdingFrontPhoto');
				project.removeClass('nextPhoto');
				project.removeClass('currentPhoto');
			}

		// SET ATTRIBUTE VALUE
			// SET ID OF THE PROJECT TO BRING
			function setAttrIdToBring(element, idToBring){
				element.data("idtobring", idToBring);
			}

		// GO NEXT LOGO, ONE BY ONE
		function showMeTheNextLogo(currentShowingLogoId){
			// CHECK IF IT'S MOVING FROM THE FIRST PROJECT
			if (currentShowingLogoId == 1) {
				// SHOW THE LEFT ARROW TO GO PREVIOUS PHOTOS
				$('#logosCarousel').find('.leftArrow').removeClass('firstArrow');
			};

			// DISPLACE 1 POSITION PROJECT PHOTOS
			// First move the previous photos to their new positions
				// The 'holding back photos' stay like that, only the 'previous photo' go backwards
				$('#logosCarousel').find('.previousPhoto').addClass('holdingBackPhoto');
				$('#logosCarousel').find('.previousPhoto').removeClass('previousPhoto');

			// Second move the current photo
				// Because you are moving forward, the current photo goes backwards, so put its right class
				$('#logosCarousel').find('.currentPhoto').addClass('previousPhoto');
				$('#logosCarousel').find('.currentPhoto').removeClass('currentPhoto');

			// Finally, move the next photos
				// We will only move the 'next photo' and the first 'holding front photo', so we will start moving first the 'next photo'
				$('#logosCarousel').find('.nextPhoto').addClass('currentPhoto');
				$('#logosCarousel').find('.nextPhoto').removeClass('nextPhoto');

				holdingFrontProjects = $('#logosCarousel').find('.holdingFrontPhoto');
				$(holdingFrontProjects[0]).addClass('nextPhoto');
				$(holdingFrontProjects[0]).removeClass('holdingFrontPhoto');


			// SET THE ATTRIBUTES OF THE ARROWS
			// First set the new attribute for each arrow, depending on the new project loaded, the previous photo id for left arrow and the next photo id for right arrow
			leftIdToBring = currentShowingLogoId;
			rightIdToBring = currentShowingLogoId + 2;

			// If the right id is greater than the total of projects, it means it will scroll down instead of showing the next photo
			if (rightIdToBring > totalLogos) {
				rightIdToBring = 'next';
			};

			$('#logosCarousel').find('.leftArrow a').data("idtobring", leftIdToBring);
			$('#logosCarousel').find('.rightArrow a').data("idtobring", rightIdToBring);


			// SET THE STYLE FOR THE BOTTOM NAV BARS
				// First move the 'current bar' to the 'previous bar' position
				$('#logosCarousel').find('.currentBar').addClass('previousBar');
				$('#logosCarousel').find('.currentBar').removeClass('currentBar');

				// Then, bring only the first 'next bar' to the 'current bar' position
				nextBars = $('#logosCarousel').find('.nextBar');
				$(nextBars[0]).addClass('currentBar');
				$(nextBars[0]).removeClass('nextBar');


			// THE LAST MOVE
				// Update the 'current loaded logo' var
				currentDisplayLogo = currentShowingLogoId + 1 ;
		}

		// GO PREVIOUS LOGO, ONE BY ONE
		function showMeThePreviousLogo(currentShowingLogoId){

			// CHECK IF IT'S MOVING TO THE FIRST PROJECT
			if (currentShowingLogoId == 2) {
				// SHOW THE LEFT ARROW TO GO PREVIOUS PHOTOS
				$('#logosCarousel').find('.leftArrow').addClass('firstArrow');
			};

			// DISPLACE 1 POSITION PROJECT PHOTOS
			// First move the next photos to their new positions
				// The 'holding front photos' stay like that, only the 'next photo' go backwards
				$('#logosCarousel').find('.nextPhoto').addClass('holdingFrontPhoto');
				$('#logosCarousel').find('.nextPhoto').removeClass('nextPhoto');

			// Second move the current photo
				// Because you are moving backwards, the current photo goes frontwards, so put its right class
				$('#logosCarousel').find('.currentPhoto').addClass('nextPhoto');
				$('#logosCarousel').find('.currentPhoto').removeClass('currentPhoto');

			// Finally, move the previous photos
				// We will only move the 'previous photo' and the last 'holding back photo', so we will start moving first the 'previous photo'
				$('#logosCarousel').find('.previousPhoto').addClass('currentPhoto');
				$('#logosCarousel').find('.previousPhoto').removeClass('previousPhoto');

				holdingBackProjects = $('#logosCarousel').find('.holdingBackPhoto');
				$(holdingBackProjects[holdingBackProjects.length - 1]).addClass('previousPhoto');
				$(holdingBackProjects[holdingBackProjects.length - 1]).removeClass('holdingBackPhoto');


			// SET THE ATTRIBUTES OF THE ARROWS
			// First set the new attribute for each arrow, depending on the new project loaded, the previous photo id for left arrow and the next photo id for right arrow
			leftIdToBring = currentShowingLogoId - 2;
			rightIdToBring = currentShowingLogoId;

			$('#logosCarousel').find('.leftArrow a').data("idtobring", leftIdToBring);
			$('#logosCarousel').find('.rightArrow a').data("idtobring", rightIdToBring);


			// SET THE STYLE FOR THE BOTTOM NAV BARS
				// First move the 'current bar' to the 'next bar' position
				$('#logosCarousel').find('.currentBar').addClass('nextBar');
				$('#logosCarousel').find('.currentBar').removeClass('currentBar');

				// Then, bring only the last 'previous bar' to the 'current bar' position
				previousBars = $('#logosCarousel').find('.previousBar');
				$(previousBars[previousBars.length - 1]).addClass('currentBar');
				$(previousBars[previousBars.length - 1]).removeClass('previousBar');


			// THE LAST MOVE
				// Update the 'current loaded logo' var
				currentDisplayLogo = currentShowingLogoId - 1 ;
		}