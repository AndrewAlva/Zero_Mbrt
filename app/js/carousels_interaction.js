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
	$(document).keyup(function(event) {
		// RIGHT ARROW INTERACTION (KEYCODE = 39)
		if (event.keyCode == 39){
			carouselNextProject();
		}

		// LEFT ARROW INTERACTION (KEYCODE = 37)
		if (event.keyCode == 37){
			carouselPrevProject()
		}
	});
	
	// INTERACTION BY HORIZONTAL SCROLLING
	$('#mbrtWrapper').on('mousewheel', function(event) {
		if (event.deltaX > 30) {
			carouselNextProject();
		} else if (event.deltaX < -30) {
			carouselPrevProject();
		};
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