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
		$('#college-pic').empty();
		$('#college-text p').empty();
		$('#tweet-box').prepend($("<div>").addClass('loader').append($("<img>").attr("src", "img/twitter_loading.gif").attr('height', '50px')).append($("<div>").text("Generating...")));
		$.get('./ajax/tweet.php', {'college' : $('#selectcollege').find(':selected').text()}, function(data) {
			if (data.success) {
				$('.loader').remove();
				$('#college-pic').append($("<img>").attr("src", "./img/" + $('#selectcollege').find(':selected').attr('value') + ".png"));
				$('#college-twitter').text($('#selectcollege').find(':selected').text()).addClass('twitter-name');
				$('#college-tweet').html(linkTweet(data.tweet));
				$("#generated").text(data.count);
				var tweet = linkTweet(data.tweet);
				$("#twitter-button").attr("data-text", data.tweet);
				$.getScript('http://platform.twitter.com/widgets.js');
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