$(document).ready(function(){
	$.get('./ajax/colleges.php', function(data){
		if (data.success) {
			$.each(data.colleges, function(i, college) {
				$('#selectcollege').append($('<option>').html(college.name).attr('value', college.rowid));
			});
		}
	});

	$('#submitbutton').click(function(){
		if($('#selectcollege').find(':selected').attr('value') == "") return; 
		$('#college').text($('#selectcollege').find(':selected').text());
		$('#college-tweet').empty();
		$('#college-tweet').append($("<img>").attr("src", "img/ajax_loader_blue.gif"));
		$.get('./ajax/tweet.php', {'college' : $('#selectcollege').find(':selected').text()}, function(data) {
			if (data.success) {
				$('#college-tweet').html(linkTweet(data.tweet));
			}
		});
	});
});

function linkTweet(tweetString){
	console.log(tweetString);
	twttr.txt.extractMentionsWithIndices(tweetString).forEach(function(mention, index, array){
		tweetString = tweetString.replace(tweetString.substring(mention.indices[0], mention.indices[1]),
			'<a href="https://twitter.com/@' + mention.screenName + '" target="_blank">@' + mention.screenName + '</a>');
	});
	twttr.txt.extractHashtagsWithIndices(tweetString).forEach(function(hashtag, index, array){
		tweetString = tweetString.replace(tweetString.substring(hashtag.indices[0], hashtag.indices[1]),
			'<a href="https://twitter.com/#' + hashtag.hashtag + '" target="_blank">#' + hashtag.hashtag + '</a>');
	});
	twttr.txt.extractUrlsWithIndices(tweetString).forEach(function(url, index, array){
		tweetString = tweetString.replace(url, function(match) {
			return '<a href="' + url + '" target="_blank">' + url + '</a>'
		});
	});
	console.log(tweetString);
	return tweetString;
	/*var tweet = $("<div>");
	var hashtag_type = "hashtag/";
	var atsign_type = "";
	while(tweetStr.length){
		var index;
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
			_href.text(tweetStr.substr(0, after+1));
			tweetStr = tweetStr.substr(after+1);
			tweet.append(_href);
		}
	}
	return tweet;*/
}