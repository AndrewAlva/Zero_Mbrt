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
	

