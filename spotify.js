// find template and then compilee it
//based on http://jsfiddle.net/UT7bQ/10/
//used their ajax and external javascript files and consulted their code when I was stuck
//my boyfriend also knows ajax and jquery and also helped me when I was stuck
//I think this chapter kinda sucked in the book because I had a lot of trouble and was stuck a lot


var templateSource = document.getElementById('displayAlbums').innerHTML,
	template = Handlebars.compile(templateSource),
	resultsPlaceholder = document.getElementById('results'),
	playingCssClass = 'playing',
	audioObject = null;

	
var fetchTracks = function (albumId, callback) {
	$.ajax({
		url: 'https://api.spotify.com/v1/albums/' + albumId,
		 success: function (response) {
				callback(response);
				}
			});
};


//uses the spotify api
//does not need a key like google
var searchAlbums = function (query) {
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'album'
        },
        success: function (response) {
            resultsPlaceholder.innerHTML = template(response);
        }
    });
};


//my variable was targetArtist but it didn't work.. well the images would still show up but no sound
//I think it's cooler with the little chunks of the songs so I went with what was on the fiddle
results.addEventListener('click', function(e) {
    var target = e.target;
    if (target !== null && target.classList.contains('cover')) {
        if (target.classList.contains(playingCssClass)) {
            audioObject.pause();
        } else {
            if (audioObject) {
                audioObject.pause();
            }
            fetchTracks(target.getAttribute('data-album-id'), function(data) {            
                audioObject = new Audio(data.tracks.items[0].preview_url);
                audioObject.play();
                target.classList.add(playingCssClass);
                audioObject.addEventListener('ended', function() {
                    target.classList.remove(playingCssClass);
                });
                audioObject.addEventListener('pause', function() {
                    target.classList.remove(playingCssClass);
               });
            });
        }
    } //no else statment
});


document.getElementById('spotifyForm').addEventListener('submit', function (e) {
    e.preventDefault();
    searchAlbums(document.getElementById('query').value);
}, false);


//function setUpPage(); {
	//insert functions here
//}


//runs setup of functions when page finishes loading
//if (window.addEventListener) {
//	window.addEventListener("load", setUpPage, false);
//} else if (window.attachEvent) {
//	window.attachEvent("onload", setUpPage);
//}