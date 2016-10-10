// Class Syntax
	// Attributes
		// canScroll
		// sections[]
		// sectionActive
		// duration

	// Methods
		// init
		// goTo
		// prev
		// next
		// setStates
		// setURL


var Slider = {
	// Flag to prevent overlapping transitions between sections
	canScroll: true,

	// Set the array with all the screens to manipulate
	screens: [],

	// Set the current active section
	sectionActive: 0,

	// Duration of transition animations
	duration: 600,

	// Initiate function
	init: function(){
		// Init the array of section screens to slide
		Slider.screens = $('.mainSection');

		// Set the id of the init section to go to
		var initSection = window.location.search ? Slider.getUrlSectionId() : 0;
		Slider.goTo(initSection);
	},

	// Go prev section
	prev: function(){},

	// Go next section
	next: function(){},

	// Navigation function for everything: prev, next and specific section
	goTo: function(sectionId){
		// Change of section only after any transition ends
		if (Slider.canScroll) {
			// Turn on the flag to prevent overlapping section transitions
			Slider.canScroll = false;

			$('.is-active').removeClass('is-active');
			setTimeout(function(){
				$('.mainSection').not('#section-' + sectionId).removeClass('prev next');
				$('#section-' + sectionId).addClass('is-active');
			}, Slider.duration);

		};
	},

	goToNext: function(sectionId){
		if (Slider.canScroll) {
			Slider.canScroll = false;

			$('.is-active').addClass('prev');

			setTimeout(function(){
				$('#section-' + sectionId).addClass('next');
			}, Slider.duration);
		};
	},

	goToPrev: function(sectionId){
		if (Slider.canScroll) {
			Slider.canScroll = false;

			$('.is-active').addClass('next');

			setTimeout(function(){
				$('#section-' + sectionId).addClass('prev');
			}, Slider.duration);
		};
	},

	// Update the sections position according to goTo() function
	setStates: function(){},

	// Update the URL according the section showed
	setURL: function(){},

	// Get the current section ID
	getUrlSectionId: function(){
		// Get the search value from URL
		urlSearch = window.location.search;

		// Clean the search value
		urlSearch = urlSearch.replace('?', '');

		// Evaluate the URL Search Value and match it to its own section ID
		if (urlSearch == 'index'){
			urlSectionId = 0;
		}else if (urlSearch == 'welcome'){
			urlSectionId = 1;
		}else if (urlSearch == 'services'){
			urlSectionId = 2;
		}else if (urlSearch == 'branding'){
			urlSectionId = 3;
		}else if (urlSearch == 'logos'){
			urlSectionId = 4;
		}else if (urlSearch == 'stationery'){
			urlSectionId = 5;
		}else if (urlSearch == 'communication'){
			urlSectionId = 6;
		}else if (urlSearch == 'packaging'){
			urlSectionId = 7;
		}else if (urlSearch == 'uniforms'){
			urlSectionId = 8;
		}else if (urlSearch == 'pos'){
			urlSectionId = 9;
		}else if (urlSearch == 'interiorism'){
			urlSectionId = 10;
		}else if (urlSearch == 'advertising'){
			urlSectionId = 11;
		}else if (urlSearch == 'web'){
			urlSectionId = 12;
		}else if (urlSearch == 'lucky'){
			urlSectionId = 13;
		}else if (urlSearch == 'camila'){
			urlSectionId = 14;
		}else if (urlSearch == 'contact'){
			urlSectionId = 15;
		}else{
			urlSectionId = 0;
		};

		return urlSectionId;
	}

}






