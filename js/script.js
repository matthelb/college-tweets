$(document).ready(function(){
	$.get('./ajax/colleges.php', function(data){
		if (data.success) {
			$.each(data.colleges, function(i, college) {
				$('#selectcollege').append($('<option>').html(college.name).attr('value', college.rowid));
			});
			$('.selectpicker').selectpicker('refresh');
		}
	});

	$('#submitbutton').click(function(){
		$('#college').text($('#selectcollege').find(':selected').text());
		$.get('./ajax/tweet.php', {'college' : $('#selectcollege').find(':selected').text()}, function(data) {
			if (data.success) {
				var tweet = $("<div>");
				var tweetStr = data.tweet;
				var i = 0;
				while(i < tweetStr.length)
				tweet.append($("<span>")
				$('#college-tweet').text(data.tweet);
			}
		});
	});
});