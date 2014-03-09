
var dbFile:File = File.applicationDirectory.resolvePath("db/Universities.sqlite.");
$(document).ready(function() {
// Get Instagram photos from specific location and add markers
  
    function getPhotosByLocation(latitude, longitude, dst) {
        var url = 'https://api.instagram.com/v1/media/search?lat=%1&lng=%2&distance=%3?client_id=%4&access_token=%5'
            .replace('%1', File.latitude)
            .replace('%2', File.longitude)
            .replace('%3', File.dst)
            .replace('%4', config.clientId)
            .replace('%5', config.accessToken);
        
        $.ajax({
           type: 'GET',
           dataType: 'jsonp',
           cache: false,
           url: url,
           success: function(data) {
               console.log('Photos found for current location: ' + data.data.length);
               $.each(data.data, function(index, value) {
                   var title = value.caption != null ? value.caption.text : "",
                       resizedImage = 'http://src.sencha.io/10/10/' + value.images.thumbnail.url;

                   
               })
           }
             $('#submitbutton').click(function(e) {
                $.get('./ajax/colleges.php', {'collegeId' : $('#selectcollege').find(':selected').value()}, function(data){
                  if (data.success) {
                    getPhotosByLocation(data.college.latitude, data.college.longitude, data.college.radius);
                  }
                });      
              }); 

        });
    }

        $.each(allItems, function(index, value) {
            if (index > 16) { return; }
            $('#js-container').jsquares();
            // Construct the containers for the more images section with data 
            // attributes so users can click to view other photos
            morePhotos += '<div class="js-image"' +
                          '     js-smallcaption="' + (value.caption != null ? (value.caption.text.length > 27 ? (value.caption.text.substr(0, 24) + '...') : value.caption.text) : "A photo") + '"' +
                          '     js-image="' + value.images.low_resolution.url + '"' +
                          '     <img src="' + value.images.thumbnail.url + '" title="' + (value.caption != null ? value.caption.text : "A photo") + ' by ' + value.user.username + '"/>' +
                          '</div>';
        })
  } 


    

  