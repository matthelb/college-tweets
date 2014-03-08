$(document).ready(function(){
	$.get('./ajax/colleges.php', function(data){
		if (data.success) {
			$.each(data.colleges, function(i, college) {
				$('#selectcollege').append($('<option>').html(college.name).attr('value', college.rowid));
			});
		}
	});

	$('#submitbutton').click(function(){
		$('#college').text($('#selectcollege').find(':selected').text());
		$.get('./ajax/tweet.php', {'college' : $('#selectcollege').find(':selected').text()}, function(data) {
			if (data.success) {
				var tweet = $("<div>");
				var tweetStr = data.tweet;
				console.log("Original: " + tweetStr);
				while(tweetStr.length){
					var index = tweetStr.indexOf('#');
					if(index == -1){
						tweet.append($("<span>").text(tweetStr));
						break;
					}
					else{
						tweet.append($("<span>").text(tweetStr.substr(0, index)));
						tweetStr = tweetStr.substr(index);
						var after = (tweetStr.indexOf(' ') == -1) ? tweetStr.length : tweetStr.indexOf(' ')-1;
						var hashtag = tweetStr.substr(1, after);
						var _href = $("<a>").attr("href", "https://twitter.com/hashtag/" + hashtag);
						_href.text("#" + hashtag);
						tweetStr = tweetStr.substr(after+1);
						tweet.append(_href);
					}
				}
				$('#college-tweet').append(tweet);
			}
		});
	});
});