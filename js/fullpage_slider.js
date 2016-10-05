	var Slider = {
		// Flag to prevent overlapping transitions between sections
		canScroll: true,

		// Set the array with all the screens to manipulate
		screens: [],

		// Set the names of all the screens
		screenNames: ['index', 'welcome', 'services', 'branding', 'logos', 'stationery', 'communication', 'packaging', 'uniforms', 'pos', 'interiorism', 'advertising', 'web', 'lucky', 'camila', 'contact' ],

		// Set the titles of all the screens
		screenTitles: ['', 'Hello there IA Interactive!', 'What We Do', 'Branding', '', '', 'Brand Communications', '', '', '', '', '', 'Web Design & Development', '', '', 'Then, We Work Together?' ],

		// Set the slider main navigators objects
		mainNavs: [],

		// Declare current active section variable
		sectionActive: 0,

		// Duration of transition animations
		duration: 900,

		// Pause to color screen titles
		pauseColorTitle: 500,

		// Initiate function
		init: function(){
			// Init the array of section screens to slide
			Slider.screens = $('.mainSection');
			// Init the array of main navigators
			Slider.mainNavs = $('.animatableMainNav');

			// Set the current active section
			// Get and clean URL Search
			urlSearch = window.location.search;
			urlSearch = urlSearch.replace('?', '');

			// Check if the search matches with the name of a section, if it does, get its ID and set the 'init states' with it, else set the 'init states' accord to the index section
			if (Slider.screenNames.indexOf(urlSearch) >= 0) {
				Slider.setStates(Slider.screenNames.indexOf(urlSearch));
			} else {
				Slider.setStates(0);
			};

			// Display the current active section
			$('#section-' + Slider.sectionActive).addClass('activeSlide');

			// If the user arrived to any section except index section show the main navs, else hide them
			if(Slider.sectionActive >= 1) Slider.showMainNavs();
			else Slider.hideMainNavs();
		},

		// Go prev section, only if there is a prev section to go
		prev: function(){
			var index = Slider.sectionActive - 1;
			if (index < 0) {
				console.log('You have reached the top of the slider.');
			} else {
				Slider.goTo(index);
			};
		},

		// Go next section, only if there is a next section to go
		next: function(){
			var index = Slider.sectionActive + 1;
			if (index >= Slider.screens.length) {
				console.log('You have reached the bottom of the slider.');
			} else {
				Slider.goTo(index);
			};
		},

		// Navigation function
		goTo: function(index){
			// Change of section only after any transition ends
			if (Slider.canScroll && Slider.sectionActive != index) {
				// Turn on the flag to prevent overlapping section transitions
				Slider.canScroll = false;

				// Check if the user is going/leaving the index section 
				// to hide/show the main navs
				if (index == 0 && Slider.sectionActive >= 1) Slider.hideMainNavs();
				else if (index >= 1 && Slider.sectionActive == 0) Slider.showMainNavs();

				// Declare variables to define the direction of the animations
				var currentSectionMove;
				var newSectionMove;
				// Detect if user is going to the Next or prev section, 
				// sectionActive < index means Next
				if (Slider.sectionActive < index){
					currentSectionMove = 'up';
					newSectionMove = 'down';
				} else if (Slider.sectionActive > index){
					currentSectionMove = 'down';
					newSectionMove = 'up';
				};

				// Move the current section outside the space
				$('#section-' + Slider.sectionActive).addClass(currentSectionMove);
				// Set the new section in position to enter
				$('#section-' + index).addClass(newSectionMove);
				$('#section-' + index).addClass('activeSlide');

				// Update active right nav bar
				Slider.setMainNavs(index);

				// Make a tiny pause(100ms) until the new section is in position
				setTimeout(function(){
					// Move the new section to show it
					$('#section-' + index).removeClass(newSectionMove);
					// Wait untill the new section is in position, 
					// then disappear the old current section, 
					// update the sectionActive var and 
					// turn on the 'canScroll' flag again
					setTimeout(function(){
						$('#section-' + Slider.sectionActive).removeClass('activeSlide');
						$('#section-' + Slider.sectionActive).removeClass(currentSectionMove);
						Slider.setStates(index);
						Slider.canScroll = true;

					}, (Slider.duration));

				},100);

			};
		},

		// Update ['sectionActive var', 'URL search value'] 
		// according to goTo() function
		setStates: function(index){
			Slider.sectionActive = index;

			// Update the search URL
			window.history.pushState("string", "section", "?".concat(Slider.screenNames[Slider.sectionActive]));
		},

		// Showing one by one the main slider navigators
		showMainNavs: function(){
			// Set an interval between showing each nav element, 
			// first display then increase the opacity
			Slider.mainNavs.each(function(index, el) {
				setTimeout(function(){
					$(el).removeClass('hiddenMainNav');
					setTimeout(function(){
						$(el).removeClass('crystalMainNav');
					}, 10);
					
				}, index * 100);
			});

			// Active the current section nav bar
			Slider.setMainNavs(Slider.sectionActive);
		},

		// Hide one by one the main slider navigators
		hideMainNavs: function(){
			// Set an interval between hidding each nav element, 
			// first decrease opacity then hide
			Slider.mainNavs.each(function(index, el) {
				setTimeout(function(){
					$(el).addClass('crystalMainNav');
					setTimeout(function(){
						$(el).addClass('hiddenMainNav');
					}, 700);

				}, index * 100);
			});

			// Also deactivate all nav bars
			$('.navBar').removeClass('activeNavBar');
		},

		// Style the right nav bar according to the section displayed
		setMainNavs: function(index){
			// If user went to any section except index section, update the 'right nav bar' active bar
			if(index >= 1) {
				$('.navBar').not('#navBar-' + index).removeClass('activeNavBar');
				$('#navBar-' + index).addClass('activeNavBar');
			}; 
		},

		// HERE BEGIN THE TEXT ANIMATIONS
		// Empty title to write animation and 
		// clean classes of the all texts to animate
		cleanAnimations: function(targetsWrapper, targetTitle){
			// Reset title
			$(targetTitle).removeClass('activeTitle');
			$(targetTitle).empty();
			// Reset text lines
			$(targetsWrapper).find('.animatedLine').removeClass('active');
			// Reset subtitles
			$(targetsWrapper).find('.animatedSubtitle').removeClass('activeTitle');
		},

		// Writting titles animation, letter by letter
		writeTitle: function(target, title, index, interval, colorCallback){
			// Check if there are more letters to write
			if (index < title.length) {
				// Write the next letter
				$(target).append(title[index++]);
				// Set the interval to write the next letter
				setTimeout(function(){
					Slider.writeTitle(target, title, index, interval, colorCallback);
				}, interval);

				// When function had written the last letter active the title 
				// and trigger the colorCallback() function
				if (index == (title.length - 1)) {
					setTimeout(function(){
						Slider.colorTitle(target, colorCallback);

					}, (interval + Slider.pauseColorTitle));
				};
			};
		},

		// Give color (from gray to black) to every title
		colorTitle: function(target, callback){
			$(target).addClass('activeTitle');
			callback();
		},

		// Display all the text lines in order, 
		// from top to bottom with a little interval (100ms)
		showTextLines: function(targetsWrapper, callback){
			var sectionTextLines = $(targetsWrapper).find('.animatedLine');
			sectionTextLines.each(function(index, el) {
				setTimeout(function(){
					$(el).addClass('active');

					if (index == (sectionTextLines.length - 1)) {
						callback();
					};
				}, (index * 100));
			});
		},

		colorSubtitles: function(targetsWrapper, callback){
			var sectionSubtitles = $(targetsWrapper).find('.animatedSubtitle');
			sectionSubtitles.each(function(index, el) {
				setTimeout(function(){
					$(el).addClass('activeTitle');

					if (index == (sectionSubtitles.length - 1)) {
						callback();
					};
				}, (index * 100)); 
			});	
		},

		// SPECIFIC SECTION CHAINED ANIMATIONS
		// Informative sections [Welcome, Services and Contact]
		informativeAnimation: function(){
			Slider.cleanAnimations('#section-1', '#sectionTitle-1');
			Slider.writeTitle('#sectionTitle-1', Slider.screenTitles[1], 0, 100, function(){
				Slider.showTextLines('#section-1', function(){
					Slider.colorSubtitles('#section-1', function(){
						console.log('Informative animation done!');
					});
				});
			});
		},

		// Cover sections [Branding, Brand communication and Web Design & Development]
		coverAnimation: function(){},

		// Carousel sections
		carouselAnimation: function(){}


	}

