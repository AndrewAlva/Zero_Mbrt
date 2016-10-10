

	// VARS SCROLL LISTENER
	var canScroll = true;
	var transitionsTiming = 900;
	var pauseToLoadSection = 500;
	var lastSectionId = 15;


		// SCROLL LISTENER
		// $('#mbrtWrapper').on('mousewheel', function(event) {

		// 	// CONTROL TRIGGERING
		// 	// Change section only if the current section has been fully loaded
		// 	if(canScroll && event.deltaY != 0){
		// 		// DELAY DEACTIVATING AND REACTIVATING 'CAN SCROLL' FLAG WHILE SCROLLING BETWEEN SECTIONS
		// 		delayBetweenSections();

		//     	// CHECK IF JS IS DETECTING MOUSEWHEEL
		// 		// console.log('Scroll started.');
		//   		// console.log(event.deltaX, event.deltaY, event.deltaFactor);


		// 		// Detect if user is scrolling down
		//     	if (event.deltaY < 0 && currentSectionId < lastSectionId) {

		//     		// CHANGE TO NEXT SECTION
		// 	    	scrollNextSection();

		//     		// CONDITIONAL TO KNOW WHAT SECTION IS
		// 	    	switch (currentSectionId) {

		// 	    		// From Index to Welcome Section
		// 	    		case 0:
		// 	    			showMainNavs();
		// 	    			currentSectionId = 1;
		//     				window.history.pushState("object or string", "section", "?welcome");
		// 		    		break;

		// 	    		// From Welcome to Services Section
		// 	    		case 1:
		// 	    			activeNextNavBar();
		// 	    		 	currentSectionId = 2;
		// 	    		 	window.history.pushState("object or string", "section", "?services");
		// 	    		 	break;

		//     		 	// From Services to Branding cover Section
		//     		 	case 2:
		//     		 		activeNextNavBar();
		//     		 		currentSectionId = 3;
		//     		 		window.history.pushState("object or string", "section", "?branding");
		// 		 			break;

		// 	 			// From Branding cover to Logos carousel Section
		// 	 			case 3:
		// 	 				activeNextNavBar();
		// 	 				currentSectionId = 4;
		// 	 				window.history.pushState("object or string", "section", "?logos");
		// 	 				break;

		//  				// From Logos carousel to Stationery carousel Section
		// 	 			case 4:
		// 	 				activeNextNavBar();
		// 	 				currentSectionId = 5;
		// 	 				window.history.pushState("object or string", "section", "?stationery");
		// 	 				break;

		//  				// From Stationery carousel to Brand Communication cover Section
		// 	 			case 5:
		// 	 				activeNextNavBar();
		// 	 				currentSectionId = 6;
		// 	 				window.history.pushState("object or string", "section", "?communication");
		// 	 				break;

		//  				// From Brand Communication cover to Packaging Carousel Section
		// 	 			case 6:
		// 	 				activeNextNavBar();
		// 	 				currentSectionId = 7;
		// 	 				window.history.pushState("object or string", "section", "?packaging");
		// 	 				break;

		//  				// From Packaging Carousel to Uniforms Carousel Section
		// 	 			case 7:
		// 	 				activeNextNavBar();
		// 	 				currentSectionId = 8;
		// 	 				window.history.pushState("object or string", "section", "?uniforms");
		// 	 				break;

		//  				// From Uniforms Carousel to POS Carousel Section
		// 	 			case 8:
		// 	 				activeNextNavBar();
		// 	 				currentSectionId = 9;
		// 	 				window.history.pushState("object or string", "section", "?pos");
		// 	 				break;

		//  				// From POS Carousel to Interiorism Carousel Section
		// 	 			case 9:
		// 	 				activeNextNavBar();
		// 	 				currentSectionId = 10;
		// 	 				window.history.pushState("object or string", "section", "?interiorism");
		// 	 				break;

		//  				// From Interiorism Carousel to Advertisign Carousel Section
		// 	 			case 10:
		// 	 				activeNextNavBar();
		// 	 				currentSectionId = 11;
		// 	 				window.history.pushState("object or string", "section", "?advertising");
		// 	 				break;

		//  				// From Advertising Carousel to Web Design & Development Cover Section
		// 	 			case 11:
		// 	 				activeNextNavBar();
		// 	 				currentSectionId = 12;
		// 	 				window.history.pushState("object or string", "section", "?web");
		// 	 				break;

		//  				// From Web D&D Cover to Lucky Website Carousel Section
		// 	 			case 12:
		// 	 				activeNextNavBar();
		// 	 				currentSectionId = 13;
		// 	 				window.history.pushState("object or string", "section", "?lucky");
		// 	 				break;

		//  				// From Lucky Website Carousel to Camila Website Carousel Section
		// 	 			case 13:
		// 	 				activeNextNavBar();
		// 	 				currentSectionId = 14;
		// 	 				window.history.pushState("object or string", "section", "?camila");
		// 	 				break;

		//  				// From Camila Website Carousel to Contact Final Section
		// 	 			case 14:
		// 	 				activeNextNavBar();
		// 	 				currentSectionId = 15;
		// 	 				window.history.pushState("object or string", "section", "?contact");
		// 	 				break;
		// 	    	}
		//     	}
		// 		// Detect if user is scrolling up
		// 		else if ( event.deltaY > 0 && currentSectionId > 0){

		// 			// CHANGE TO PREVIOUS SECTION
		// 			scrollPreviousSection();

		// 			// CONDITIONAL TO KNOW WHAT SECTION IS
		// 	    	switch (currentSectionId) {

		// 	    		// From Welcome to Index Section
		// 	    		case 1:
		// 	    			hideMainNavs();
		// 	    			currentSectionId = 0;
		// 	    			window.history.pushState("object or string", "section", "?index");
		// 	    			break;

		//     			// From Services to Welcome Section
		// 	    		case 2:
		// 	    			activePreviousNavBar();
		// 	    			currentSectionId = 1;
		// 	    			window.history.pushState("object or string", "section", "?welcome");
		// 	    			break;

		//     			// From Branding cover to Services Section
		//     			case 3:
		//     				activePreviousNavBar();
		//     				currentSectionId = 2;
		//     				window.history.pushState("object or string", "section", "?services");
		//     				break;

	 //    				// From Logos carousel to Branding cover Section
		// 				case 4:
		// 					activePreviousNavBar();
		// 					currentSectionId = 3;
		// 					window.history.pushState("object or string", "section", "?branding");
		// 					break;

		// 				// From Stationery carousel to Logos carousel Section
		// 				case 5:
		// 					activePreviousNavBar();
		// 					currentSectionId = 4;
		// 					window.history.pushState("object or string", "section", "?logos");
		// 					break;

		// 				// From Brand Communications cover to Stationery carousel Section
		// 				case 6:
		// 					activePreviousNavBar();
		// 					currentSectionId = 5;
		// 					window.history.pushState("object or string", "section", "?stationery");
		// 					break;

		// 				// From Packaging Carousel to Brand Communications cover Section
		// 				case 7:
		// 					activePreviousNavBar();
		// 					currentSectionId = 6;
		// 					window.history.pushState("object or string", "section", "?communication");
		// 					break;

		// 				// From Uniforms Carousel to Packaging Carousel Section
		// 				case 8:
		// 					activePreviousNavBar();
		// 					currentSectionId = 7;
		// 					window.history.pushState("object or string", "section", "?packaging");
		// 					break;

		// 				// From POS Carousel to Uniforms Carousel Section
		// 				case 9:
		// 					activePreviousNavBar();
		// 					currentSectionId = 8;
		// 					window.history.pushState("object or string", "section", "?uniforms");
		// 					break;

		// 				// From Interiorism Carousel to POS Carousel Section
		// 				case 10:
		// 					activePreviousNavBar();
		// 					currentSectionId = 9;
		// 					window.history.pushState("object or string", "section", "?pos");
		// 					break;

		// 				// From Advertising Carousel to Interiorism Carousel Section
		// 				case 11:
		// 					activePreviousNavBar();
		// 					currentSectionId = 10;
		// 					window.history.pushState("object or string", "section", "?interiorism");
		// 					break;

		// 				// From Website Design & Development cover to Advertising Carousel Section
		// 				case 12:
		// 					activePreviousNavBar();
		// 					currentSectionId = 11;
		// 					window.history.pushState("object or string", "section", "?advertising");
		// 					break;

		// 				// From Lucky Website Carousel to Website Design & Development cover Section
		// 				case 13:
		// 					activePreviousNavBar();
		// 					currentSectionId = 12;
		// 					window.history.pushState("object or string", "section", "?web");
		// 					break;

		// 				// From Camila Website Carousel to Lucky Website Carousel Section
		// 				case 14:
		// 					activePreviousNavBar();
		// 					currentSectionId = 13;
		// 					window.history.pushState("object or string", "section", "?lucky");
		// 					break;

		// 				// From Contact Final Section to Camila Website Carousel Section
		// 				case 15:
		// 					activePreviousNavBar();
		// 					currentSectionId = 14;
		// 					window.history.pushState("object or string", "section", "?camila");
		// 					break;
		// 	    	}
		// 		}
		    		
		// 	} else{
		// 		// PREVENT OVERLAPING CHANGE SECTION ANIMATIONS
		// 		// If there is an animation running to change the section, wait until it's over to change of section again
		// 		event.preventDefault();

		// 		// NOTICE YOU HAVE TO WAIT TO SCROLL AGAIN
		// 		// console.log("You can't scroll yet, canScroll: " + canScroll);
		// 	}
		// });

		// HELPER FUNCTIONS
			// CHANGE TO PREVIOUS OR NEXT SECTION BY ID
			function navigateNextSection(fromThis, toThis){
				fromThis.addClass('passed-up');
				fromThis.removeClass('is-active');

				toThis.addClass('is-active');
				toThis.removeClass('coming-up');
			}

			function navigatePrevSection(fromThis, toThis){
				fromThis.addClass('coming-up');
				fromThis.removeClass('is-active');

				toThis.addClass('is-active');
				toThis.removeClass('passed-up');
			}


			// CHANGE OF SECTION BY CLASSES
			function scrollNextSection(){

				// CHANGE POSITION OF CURRENT SECTION TO 'PASSED' SECTION
				$('.is-active').addClass('passed-up');
				$('.is-active').removeClass('is-active');

				// CHANGE POSITION OF THE FIRST 'COMING UP' SECTION TO CURRENT 'ACTIVE' SECTION
				comingUpSections = $('#mbrtWrapper').find('.coming-up');
				$(comingUpSections[0]).addClass('is-active');
				$(comingUpSections[0]).removeClass('coming-up');
			}


			function scrollPreviousSection(){

				// CHANGE POSITION OF CURRENT SECTION TO 'COMING UP' SECTION
				$('.is-active').addClass('coming-up');
				$('.is-active').removeClass('is-active');

				// CHANGE POSITION OF THE LAST 'PASSED UP' SECTION TO CURRENT 'ACTIVE' SECTION
				passedUpSections = $('#mbrtWrapper').find('.passed-up');
				$(passedUpSections[passedUpSections.length - 1]).addClass('is-active');
				$(passedUpSections[passedUpSections.length - 1]).removeClass('passed-up');
			}

			// DELAY WHILE SCROLLING TO NEXT OR PREVIOUS SECTIONS
			function delayBetweenSections(){
				canScroll = false;
		    	setTimeout(function(){
		    		canScroll = true;
		    	},transitionsTiming + pauseToLoadSection);
			}









