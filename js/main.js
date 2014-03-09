$(document).ready(function(){
	$.get('./ajax/colleges.php', function(data){
		if (data.success) {
			$.each(data.colleges, function(i, college) {
				$('#selectcollege').append($('<option>').html(college.name).attr('value', college.rowid));
				$('#left_c_2').append($("<img>").attr("src", "./img/" + college.rowid + ".png"));
			});
		}
	});
	
	$.get('./ajax/get_counter.php', function(d){
		if(d.success){
			$("#generated").text(d.count);
		}
	});

	$('#submitbutton').click(function(){
		if($('#selectcollege').find(':selected').attr('value') == "") return; 
		$('#college').text($('#selectcollege').find(':selected').text());
		$('#college-tweet').empty();
		$('#college-tweet').append($("<div>").append($("<img>").attr("src", "img/twitter_loading.gif").attr('height', '50px')).append($("<div>").text("Generating...")));
		$.get('./ajax/tweet.php', {'college' : $('#selectcollege').find(':selected').text()}, function(data) {
			if (data.success) {
				$('#college-tweet').empty();
				$('#college-tweet').html(linkTweet(data.tweet));
				$.get('./ajax/increment_counter.php', function(d){
					if(d.success){
						$("#generated").text(d.count);
					}
				});
			}
		});
	});
});

function linkTweet(tweetString){
	twttr.txt.extractUrlsWithIndices(tweetString).forEach(function(url, index, array){
		tweetString = tweetString.replace(url.url, 
			'<a href="' + url.url + '" target="_blank">' + url.url + '</a>'
		);
	});
	twttr.txt.extractMentionsWithIndices(tweetString).forEach(function(mention, index, array){
		tweetString = tweetString.replace('@' + mention.screenName,
			'<a href="https://twitter.com/@' + mention.screenName + '" target="_blank">@' + mention.screenName + '</a>');
	});
	twttr.txt.extractHashtagsWithIndices(tweetString).forEach(function(hashtag, index, array){
		tweetString = tweetString.replace('#' + hashtag.hashtag,
			'<a href="https://twitter.com/#' + hashtag.hashtag + '" target="_blank">#' + hashtag.hashtag + '</a>');
	});
	return tweetString;
}