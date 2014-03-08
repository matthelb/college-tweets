// Get Instagram photos from specific location and add markers
    function getPhotosByLocation(latitude, longitude, dst) {
        var url = 'https://api.instagram.com/v1/media/search?lat=%1&lng=%2&distance=%3?client_id=%4&access_token=%5'
            .replace('%1', latitude)
            .replace('%2', longitude)
            .replace('%3', dst)
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
                   
                   addMarker(value.location.latitude, value.location.longitude, title, resizedImage, value, data.data);
               })
           }
        });
    }
    

  