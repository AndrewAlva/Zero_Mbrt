// VARS
var dataProject;
var projectWrapper;
var importDataId;
var importDataURL;
var importedProjectId;
var nextIdToImport;
var totalProjects;

// PREVIOUS PROJECT PHOTO FUNCTIONS PENDING

// NEXT PROJECT PHOTO FUNCTIONS // Not finished yet.
$('.carouselImages').on('click', '.rightArrow a', function(event) {
	event.preventDefault();

	// GET WHAT PROJECTS ARE SHOWING IN THIS CAROUSEL: LOGOS, STATIONERY, PACKAGING, ETC 
	dataProject = $(this).data("project");

	// SELECTOR OF IN WHICH WRAPPER WILL APPEND, PREPEND AND DELETE PROJECTS
	projectWrapper = '#' + dataProject + 'Wrapper';

	// GET THE ID OF THE PROJECT TO INSERT FROM ANOTHER FILE
	importDataId = $(this).data("idtobring");
	console.log('Import data id: ' + importDataId);

	// DEFINE THE FINAL URL OF THE PROJECT TO IMPORT
	importDataURL = "partials/" + dataProject + "/" + importDataId + ".html";

	// IMPORT THE NEXT PROJECT TO SHOW AT THE END OF THE WRAPPER
	$.get(importDataURL, function(data){
		$(projectWrapper).append(data);
	});

	// SET HTML ID OF THE PROJECT IMPORTED
	importedProjectId = '#' + dataProject + '-' + importDataId;
	console.log('Imported project ID: ' + importedProjectId);

	// DELETE OLD PROJECT FROM WRAPPER
	$(projectWrapper).find('.holdingBackPhoto').remove();

	// STYLE THE REST OF OLD PROJECTS TO THEIR NEW POSITION
		// 'PREVIOUS PHOTO' SEND LAST
		$(projectWrapper).find('.previousPhoto').addClass('holdingBackPhoto');
		$(projectWrapper).find('.previousPhoto').removeClass('previousPhoto');

		// 'CURRENT PHOTO' CHANGE POSITION
		$(projectWrapper).find('.currentPhoto').addClass('previousPhoto');
		$(projectWrapper).find('.currentPhoto').removeClass('currentPhoto');

		// 'NEXT PHOTO' CHANGE POSITION
		$(projectWrapper).find('.nextPhoto').addClass('currentPhoto');
		$(projectWrapper).find('.nextPhoto').removeClass('nextPhoto');

		// 'HOLDING NEXT PHOTO' CHANGE POSITION
		$(projectWrapper).find('.holdingNextPhoto').addClass('nextPhoto');
		$(projectWrapper).find('.holdingNextPhoto').removeClass('holdingNextPhoto');

		// PREVIOUS 'JUST INSERTED PHOTO' CHANGE POSITION
		$(projectWrapper).find('.justInsertedPhoto').addClass('nextPhoto');
		$(projectWrapper).find('.justInsertedPhoto').removeClass('justInsertedPhoto');

	// FINALLY, CHANGE ATTRIBUTES FROM ARROWS TO KEEP THE CAROUSEL INFINITELY
	// Set the next ID for the data you will import data
	nextIdToImport = importDataId + 1;

	// Set the limit of projects to restart the ID
	totalProjects = $(this).data("totalprojects");
	if (nextIdToImport > totalProjects){
		nextIdToImport = 1;
	}
	$('#logosCarousel').find('.leftArrow a').data("idtobring", importDataId);
	$('#logosCarousel').find('.rightArrow a').data("idtobring", nextIdToImport);

	console.log('Total of projects count: ' + totalProjects);
	console.log('Final of the function, importDataId = ' + importDataId);
	console.log('Final of the function, nextIdToImport = ' + nextIdToImport);

	// STYLE OF NEXT PHOTO IS OVERLAPPING ON 2ND -> TRANSITIONS
});