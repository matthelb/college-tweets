config = {
        clientId: '8c22d64e58904a28bb30c36fbf6db2d5',
        access_token:'25282556.5b9e1e6.c536dba35ba444be9b42dcdc05464ea8'
      }
    function getPhotosByLocation(latitude, longitude, distance) {
        var url = 'https://api.instagram.com/v1/media/search?lat=%1&lng=%2&distance=%3?client_id=%4&access_token=%5'

            .replace('%1', latitude)
            .replace('%2', longitude)
            .replace('%3', distance*1600)
            .replace('%4', '8c22d64e58904a28bb30c36fbf6db2d5')
            .replace('%5', '25282556.5b9e1e6.c536dba35ba444be9b42dcdc05464ea8')

           
        $.ajax({
           type: 'GET',
           dataType: 'jsonp',
           cache: false,
           url: url,
           success: function(data) {
               $.each(data.data, function(index, value) {
                   if (index<16){
                    var imgurl = value.images.standard_resolution.url;
                    $('.js-small-image').attr('src', imgurl);


                   }
                   

               });
           
          }
        });
        $.getScript('jquery.jsquares.js', function()
{           console.log('df');
          $('#js-container').jsquares(getPhotosByLocation);

    // script is now loaded and executed.
    // put your dependent JS here.
});
   

   
   
}

  //   //     // Construct the containers for the more images section with data 
  //   //     // attributes so users can click to view other photos
  //   //     morePhotos += '<div class="js-image"' +
  //   //                   '     js-smallcaption="' + (value.caption != null ? (value.caption.text.length > 27 ? (value.caption.text.substr(0, 24) + '...') : value.caption.text) : "A photo") + '"' +
  //   //                   '     js-image="' + value.images.low_resolution.url + '"' +
  //   //                   '     <img src="' + value.images.thumbnail.url + '" title="' + (value.caption != null ? value.caption.text : "A photo") + ' by ' + value.user.username + '"/>' +
  //   //                   '</div>';
 
var generateclick = function(){
      $('#js-container').show();
      
    } 

$(document).ready(function() {

    $('#submitbutton').click(function() {
            console.log("click");
            $.get('./ajax/colleges.php', {'collegeId' : $('#selectcollege').find(':selected').val()}, function(data){
              if (data.success) {
                      return getPhotosByLocation(data.college.latitude, data.college.longitude, data.college.radius);


              }
            });      
          }); 
// Get Instagram photos from specific location and add markers
        $('#js-container').hide();
        $('#submitbutton').click(generateclick);



}) 


    
  