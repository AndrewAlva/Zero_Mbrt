	// VARS LOAD CURRENT SECTION
	var currentSectionId;

	window.onload = function(){
		Slider.loaded();
	};

	$(document).ready(function(){
		Slider.init();
		Slider.loading();

		// Set and Initialize all carousels
			var Logos = new Carousel('#section-4', '#logos-', '#logosBar-');
			Logos.init();

			var Stationery = new Carousel('#section-5', '#stationery-', '#stationeryBar-');
			Stationery.init();

			var Packaging = new Carousel('#section-7', '#packaging-', '#packagingBar-');
			Packaging.init();

			var Uniforms = new Carousel('#section-8', '#uniforms-', '#uniformsBar-');
			Uniforms.init();

			var POS = new Carousel('#section-9', '#POS-', '#POSBar-');
			POS.init();

			var Interiorism = new Carousel('#section-10', '#interiorism-', '#interiorismBar-');
			Interiorism.init();

			var Masters = new Carousel('#section-11', '#advertising-', '#advertisingBar-', true, '#advertisingBrandData-', '#advertisingBriefData-', '#advertisingClientData-');
			Masters.init();

			var Lucky = new Carousel('#section-13', '#webLucky-', '#webLuckyBar-');
			Lucky.init();

			var Camila = new Carousel('#section-14', '#camilaWeb-', '#camilaWebBar-');
			Camila.init();
		// END Set and Initialize all carousels

		//// CAROUSELS INTERACTION
			// INTERACTION BY ARROWS CLICK
			// Next Project Interaction | Arrows Nav Click
			$('#mbrtWrapper').on('click', '.rightArrow a', function(event) {
				carouselNextProject();
			});

			// Previous Project Interaction | Arrows Nav Click
			$('#mbrtWrapper').on('click', '.leftArrow a', function(event) {
				carouselPrevProject();
			});

			// INTERACTION BY BOTTOM NAV BARS
			$('#mbrtWrapper').on('click', '.singleBar', function(event) {
				var projectId = $(this).data('loadprojectid');

				carouselGoToProject(projectId);
			});
			
			// INTERACTION BY KEYBOARD ARROWS
			$(document).on('keydown', function(event) {
				// RIGHT ARROW INTERACTION (KEYCODE = 39)
				if (event.keyCode == 39){
					carouselNextProject();
				}

				// LEFT ARROW INTERACTION (KEYCODE = 37)
				if (event.keyCode == 37){
					carouselPrevProject();
				}
			});

			function carouselNextProject(){
				event.preventDefault();
				switch (Slider.sectionActive){
					case 4:
						Logos.next();
						break;

					case 5:
						Stationery.next();
						break;

					case 7:
						Packaging.next();
						break;

					case 8:
						Uniforms.next();
						break;

					case 9:
						POS.next();
						break;

					case 10:
						Interiorism.next();
						break;

					case 11:
						Masters.next();
						break;

					case 13:
						Lucky.next();
						break;

					case 14:
						Camila.next();
						break;
				}
			}

			function carouselPrevProject(){
				event.preventDefault();
				switch (Slider.sectionActive){
					case 4:
						Logos.prev();
						break;

					case 5:
						Stationery.prev();
						break;

					case 7:
						Packaging.prev();
						break;

					case 8:
						Uniforms.prev();
						break;

					case 9:
						POS.prev();
						break;

					case 10:
						Interiorism.prev();
						break;

					case 11:
						Masters.prev();
						break;

					case 13:
						Lucky.prev();
						break;

					case 14:
						Camila.prev();
						break;
				}
			}

			function carouselGoToProject(index){
				event.preventDefault();
				switch (Slider.sectionActive){
					case 4:
						Logos.goTo(index);
						break;

					case 5:
						Stationery.goTo(index);
						break;

					case 7:
						Packaging.goTo(index);
						break;

					case 8:
						Uniforms.goTo(index);
						break;

					case 9:
						POS.goTo(index);
						break;

					case 10:
						Interiorism.goTo(index);
						break;

					case 11:
						Masters.goTo(index);
						break;

					case 13:
						Lucky.goTo(index);
						break;

					case 14:
						Camila.goTo(index);
						break;
				}
			}

	});
	
	// FULL PAGE SLIDER
			var Slider = {
				// Variable user is using an iOS or a Windows device
				is_Mac: undefined,

				// Flag to prevent overlapping transitions between sections
				canScroll: false,

				// Flag to stop loading function
				isLoading: true,

				// Loading instructions array
				instructions: ["Scroll / Keyboard UP & DOWN to change of section.", "Use keyboard LEFT & RIGHT keys to switch projects."],

				// Loading instructions timing between switching
				instructionsTiming: 2500,

				// Loading portfolio quotes, in this case are from Zero
				zeroQuotes: ["God is in the details.", "End to end craftsman.", "80's passionate lover.", "Dog lover."],

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

				// Duration of transition timing animations
				duration: 900,

				// Pause to color screen titles
				pauseColorTitle: 500,

				// Determine the scroll sensibility according to the operative system used
				sensibility: 0,

				// Loading screen function
				loading: function(){
					// Smooth intro of loading elements
					var smoothElements = $('#mbrtLoader').find('.smoothIntro');
					smoothElements.each(function(index, el) {
						setTimeout(function(){
							$(el).removeClass('smoothIntro');
						}, (index * 100));
					});

					// Write loading dots
					dotting(0);

					// SWITCH quotes text
					shuffle(Slider.zeroQuotes);
					$('#loadingQuote').append(Slider.zeroQuotes[0]);
					switchQuotes(1);

					// SWITCH navigation instructions
					switchInstructions(0);

					// HELPER FUNCTIONS
					// Writting Loading dots "...."
					function dotting(index){
						var dots = '....';
						var interval = 500;
						// Check if slider is still loading
						if (Slider.isLoading) {
							// WRITTING Loading dots "..."
							// Check if there are more dots to add
							if (index < dots.length) {
								// Write the next letter
								$('#loadingDots').append(dots[index++]);
								// Set the interval to write the next letter
								setTimeout(function(){
									dotting(index);
								}, interval);

								// When function is about to add the last dot => empty dots, then => start again 
								if (index == (dots.length)) {
									setTimeout(function(){
										$('#loadingDots').empty();
										
										setTimeout(function(){dotting(0);}, interval);
									}, interval );
								};
							};
						};
					}

					// Switching quotes
					function switchQuotes(index){
						if (Slider.isLoading) {
							setTimeout(function(){
								$('#loadingQuote').removeClass('active');

								setTimeout(function(){
									if (index < Slider.zeroQuotes.length) {
										$('#loadingQuote').empty();
										$('#loadingQuote').append(Slider.zeroQuotes[index++]);
										$('#loadingQuote').addClass('active');
										if (index == (Slider.zeroQuotes.length)) {
											switchQuotes(0);
										} else {
											switchQuotes(index);
										};
									};
									
								}, 600);
							}, (Slider.instructionsTiming * 2));
						};
					}

					// Switching navigation instructions
					function switchInstructions(){
						if (Slider.isLoading) {
							setTimeout(function(){
								$('#loadingDescription').removeClass('active');
								$('#mbrtLoader').find('.sliderControl').removeClass('active');
								setTimeout(function(){
									$('#loadingDescription').empty();
									$('#loadingDescription').append(Slider.instructions[1]);
									$('#loadingDescription').addClass('active');
									$('#mbrtLoader').find('.carouselControl').addClass('active');

									setTimeout(function(){
										$('#loadingDescription').removeClass('active');
										$('#mbrtLoader').find('.carouselControl').removeClass('active');

										setTimeout(function(){
											$('#loadingDescription').empty();
											$('#loadingDescription').append(Slider.instructions[0]);
											$('#loadingDescription').addClass('active');
											$('#mbrtLoader').find('.sliderControl').addClass('active');

											switchInstructions();
										}, 600);

									}, Slider.instructionsTiming);

								}, 600);

							}, Slider.instructionsTiming);
						};
					}

					// Shuffle Fisher Yates algorithm
					function shuffle(array){
						var currentIndex = array.length, temporaryValue, randomIndex;

						// While there remain elements to shuffle...
						while (0 !== currentIndex) {

							// Pick a remaining element...
							randomIndex = Math.floor(Math.random() * currentIndex);
							currentIndex -= 1;

							// And swap it with the current element.
							temporaryValue = array[currentIndex];
							array[currentIndex] = array[randomIndex];
							array[randomIndex] = temporaryValue;
						}

						return array;
					}
				},

				// Hide the loading screen
				loaded: function(){
					// Restart Intro gif animation
					$('#mbrtGIF').attr('src', 'img/brand/main_logo.gif?' + Math.random() + ' alt="Mandelbrot Brands Studio">');
						
					setTimeout(function(){
						// Active flag to prevent loading function
						Slider.isLoading = false;

						// Active flag to scroll between sections
						Slider.canScroll = true;

						// Fade out loader
						$('#mbrtLoader').addClass('crystalLoader');

						// Remove loader after fadeout is complete
						setTimeout(function(){$('#mbrtLoader').remove();},1600);

						// Color the new section title
						Slider.colorTitle('.animatedTitle-' + Slider.sectionActive);

					}, Slider.duration);
				},

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

					// Determine the OS of the device and adjust sensibility according to it
					Slider.is_Mac = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
					if (Slider.is_Mac) {
						Slider.sensibility = 10;
					};
				},

				// Go prev section, only if there is a prev section to go
				prev: function(){
					var index = Slider.sectionActive - 1;
					if (index < 0) {
					} else {
						Slider.goTo(index);
					};
				},

				// Go next section, only if there is a next section to go
				next: function(){
					var index = Slider.sectionActive + 1;
					if (index >= Slider.screens.length) {
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

						// Decolor title of actual section
						Slider.decolorTitle('.animatedTitle-' + Slider.sectionActive);

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

								// Color the new section title
								Slider.colorTitle('.animatedTitle-' + index);
								
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
				colorTitle: function(target){
					$(target).addClass('activeTitle');
					
				},

				// Take color (from black to gray) to every title
				decolorTitle: function(target){
					$(target).removeClass('activeTitle');
					
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
	// END FULL PAGE SLIDER

	// FULL PAGE SLIDER INTERACTION
		// MOUSE WHEEL VERTICAL LISTENER (event.deltaY)
		$('#mbrtWrapper').on('mousewheel', function(event) {
			event.preventDefault();

			// Detect if user is scrolling down
			if (event.deltaY < (Slider.sensibility * -1)) {
				Slider.next();

			} else if (event.deltaY > (Slider.sensibility * 1)){
				Slider.prev();

			};
		});

		// INTERACTION BY KEYBOARD ARROWS
		$(document).on('keydown', function(event) {
			// UP ARROW INTERACTION (KEYCODE = 38)
			if (event.keyCode == 38){
				Slider.prev();
			}

			// DOWN ARROW INTERACTION (KEYCODE = 40)
			if (event.keyCode == 40){
				Slider.next();
			}
		});

		// SCROLL TO WELCOME SECTION ON CLICK AT '#START EXPLORING' ELEMENT IN INDEX SECTION
		$('#section-0').on('click', '#startExploring', function(event) {
			event.preventDefault();
			Slider.next();
		});

		// SCROLL TO THE INDEX SECTION ON CLICK AT 'TOP LEFT LOGO' ELEMENT
		$('#mbrtWrapper').on('click', '#topLeftLogo', function(event) {
			event.preventDefault();
			Slider.goTo(0);
		});


		// THIS LISTENER WILL BE WORKING ON '.NAV BAR' ELEMENTS
		$('#rightBarsNav').on('click', '.navBar', function(event) {
			event.preventDefault();
			Slider.goTo($(this).data('sectiontogo'));
		});
	// END FULL PAGE SLIDER INTERACTION

	// CAROUSEL OBJECT CONSTRUCTOR

		function Carousel(sectId, projPrefix, projBarPrefix, carouselOrientation, projBrandPrefix, projBriefPrefix, projClientPrefix){
			// Flag to prevent overlapping transitions between sections
			this.canScroll = true;

			// Declare if the carousel is horizontal or vertical
			this.vertical = carouselOrientation;

			// Section ID where the carousel is
			this.sectionID = sectId;

			// Projects prefix to select them with jQuery $
			this.projectsPrefix = projPrefix;

			// Projects nav bars prefix to select them with jQuery $
			this.projectsBarPrefix = projBarPrefix;

			// Projects brand data prefix to select them with jQuery $
			this.projectsBrandPrefix = projBrandPrefix;
			// Projects brief data prefix to select them with jQuery $
			this.projectsBriefPrefix = projBriefPrefix;
			// Projects client data prefix to select them with jQuery $
			this.projectsClientPrefix = projClientPrefix;

			// Set the array with all the screens to manipulate
			this.projects = [];

			// Declare current active section variable
			this.activeProject = 0;

			// Duration of transition animations
			this.duration = 1300;

			// Duration of data transition animations
			this.dataDuration = 600;

			// Initiate function
			this.init = function(){
				// Init the array of projects images to slide
				this.projects = $(this.sectionID).find('.projectPhoto');
			};

			// Go prev project, only if there is a prev project to go
			this.prev = function(){
				var index = this.activeProject - 1;
				if (index >= 0) {
					this.goTo(index);
				} else {
				};
			};

			// Go next project, only if there is a next project to go
			this.next = function(){
				var index = this.activeProject + 1;
				if (index < this.projects.length) {
					this.goTo(index);
				} else {
					if (this.canScroll == true) {
						Slider.next();
					};
				};
			};

			// Navigation function, "index" is the desired project to go
			this.goTo = function(index){
				// Change of project only after any transition ends
				if (this.canScroll == true && this.activeProject != index) {
					// Turn off the flag to prevent overlapping section transitions
					this.canScroll = false;

					// Declare variables to define the direction of transition animations
					var currentProjectMove;
					var newProjectMove;

					// Detect if user is going to the Next or Prev project, first if check forward move
					if (this.activeProject < index) {
						currentProjectMove = 'left';
						newProjectMove = 'right';
					} else if (this.activeProject > index) {
						currentProjectMove = 'right';
						newProjectMove = 'left';
					};

					// Style the nav bars of the project
					this.setNavs(index);

					// Hide the project data if this is a vertical carousel
					if (this.vertical == true) {
						this.deactiveProjectData();
					};

					// Move the current project outside the wrapper
					$(this.projectsPrefix + this.activeProject).addClass(currentProjectMove);

					// Set the new project in position to enter
					$(this.projectsPrefix + index).addClass(newProjectMove);
					$(this.projectsPrefix + index).addClass('active');

					// Make a tiny pause (100ms) until the new project is in position
					setTimeout((function(){
						// Move the new project into the wrapper
						$(this.projectsPrefix + index).removeClass(newProjectMove);

						// Show the project data after the previous data disappear if this is a vertical carousel
						if (this.vertical == true) {
							setTimeout((function(){
								this.activeNewProjectData(index);
								
							}).bind(this), this.dataDuration);
						};

						// Wait until the new project is in position, then disappear the old active project, update the activeProject var and turn on the 'canScroll' flag again
						setTimeout((function(){
							$(this.projectsPrefix + this.activeProject).removeClass('active');
							$(this.projectsPrefix + this.activeProject).removeClass(currentProjectMove);

							this.setStates(index);
							this.canScroll = true;

						}).bind(this), this.duration);
					}).bind(this), 100);
				};
			};

			// Update 'active project var' according to goTo(this_slide) function result
			this.setStates = function(index){
				this.activeProject = index;
			};

			// Animate the pagination nav bars according to the new showing project. Functionality very similar as goTo() method
			this.setNavs = function(index){
				// Declare variables to define the direction of nav bars animation
				var currentBarMove;
				var newBarMove;

				// Detect if user is going to Next or Prev project, first if check forward movement
				if (this.activeProject < index) {
					currentBarMove = 'right';
					newBarMove = 'left';

				} else if (this.activeProject > index) {
					currentBarMove = 'left';
					newBarMove = 'right';
				};

				// Move the current project bar outside the wrapper
				$(this.projectsBarPrefix + this.activeProject).addClass(currentBarMove);

				// Set the new project bar in position to enter
				$(this.projectsBarPrefix + index).addClass(newBarMove);
				$(this.projectsBarPrefix + index).addClass('active');

				// Make a tiny pause (100ms) to set the new project bar in position
				setTimeout((function(){
					$(this.projectsBarPrefix + index).removeClass(newBarMove);

					// Wait until the new project bar is in position, then disappear the old active bar
					setTimeout((function(){
						$(this.projectsBarPrefix + this.activeProject).removeClass('active');
						$(this.projectsBarPrefix + this.activeProject).removeClass(currentBarMove);
					}).bind(this), this.duration);
				}).bind(this), 100);
			};

			// The next two functions are ONLY for vertical orientation carousels
			// 
			// There are 3 data to move: Brand Data, Brief Data and Client Data
			// So, first let's deactive the current showing data
			this.deactiveProjectData = function(){
				$(this.projectsBrandPrefix + this.activeProject).removeClass('active');
				$(this.projectsClientPrefix + this.activeProject).removeClass('active');

				// Right now there is only one type of brief, so we will only disappear and appear the same object
				$(this.projectsBriefPrefix + '0').removeClass('active');
			};

			// Then we show the new data
			this.activeNewProjectData = function(index){
				$(this.projectsBrandPrefix + index).addClass('active');
				$(this.projectsClientPrefix + index).addClass('active');

				// Right now there is only one type of brief, so we will only disappear and appear the same object
				$(this.projectsBriefPrefix + '0').addClass('active'); 
			};
		}
	// END CAROUSEL OBJECT CONSTRUCTOR

	// PLUGINS FILE
		// Avoid `console` errors in browsers that lack a console.
		(function() {
		    var method;
		    var noop = function () {};
		    var methods = [
		        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
		    ];
		    var length = methods.length;
		    var console = (window.console = window.console || {});

		    while (length--) {
		        method = methods[length];

		        // Only stub undefined methods.
		        if (!console[method]) {
		            console[method] = noop;
		        }
		    }
		}());

		// Place any jQuery/helper plugins in here.
	// END PLUGINS FILE