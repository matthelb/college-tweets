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
				$('#college-tweet').empty();
				var tweet = link_tweet(data.tweet);
				$('#college-tweet').append(tweet);
			}
		});
	});
});

function link_tweet(tweetStr){
	console.log(tweetStr);
	var tweet = $("<div>");
	while(tweetStr.length){
		var index;
		var hashtag_type = "hashtag/";
		var atsign_type = "/";
		var hashtag = tweetStr.indexOf('#');
		var atsign = tweetStr.indexOf('@');
		var type;
		if(hashtag == -1){
			if(atsign == -1){
				index = -1;
			}
			else{
				index = atsign;
				type = atsign_type;
			}
		}
		else if(atsign == -1){
			index = hashtag;
			type = hashtag_type;
		}
		else{
			type = (hashtag > atsign) ? atsign_type : hashtag_type;
			index = Math.min(hashtag, atsign);
		}
		if(index == -1){
			tweet.append($("<span>").text(tweetStr));
			break;
		}
		else{
			tweet.append($("<span>").text(tweetStr.substr(0, index)));
			tweetStr = tweetStr.substr(index);
			var after = (tweetStr.indexOf(' ') == -1) ? tweetStr.length : tweetStr.indexOf(' ')-1;
			var target = tweetStr.substr(1, after);
			var _href = $("<a>").attr("href", "https://twitter.com/" + type + target).attr('target', '_blank');
			if(type == hashtag_type) _href.text("#" + target);
			else _href.text("@" + target);
			tweetStr = tweetStr.substr(after+1);
			tweet.append(_href);
		}
	}
	return tweet;
}