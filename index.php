<!DOCTYPE html>
<html>
<head>
<title>#college</title>

<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/bootstrap-select.css">

<link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet">
<script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>

<!-- Make responsive -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Link to other files -->
<link rel="stylesheet" type="text/css" href="css/style.css">
<link rel="stylesheet" type="text/css" href="css/font-awesome.css">

<script type="text/javascript"> // start selectpicker
    $(window).on('load', function () {
        $('.selectpicker').selectpicker({
            'selectedText': 'cat'
        });
    });
</script>

</head>

<body>
<div class="container">

<h1>#college</h1>

<select class="selectpicker" id="selectcollege">
	<option value="">Select a college</option>
	<!--<option value="usc">USC</option>
	<option value="ucla">UCLA</option>
	<option value="uofa">University of Arizona</option>
	<option value="asu">Arizona State University</option>
	<option value="stanford">Stanford University</option>
	<option value="berkeley">UC Berkeley</option>
	<option value="colorado">CU Boulder</option>
	<option value="uofo">University of Oregon</option>
	<option value="osu">Oregon State University</option>
	<option value="udub">University of Washington</option>
	<option value="wsu">Washington State University</option>-->
</select>
<div id="submitbutton" class="btn btn-md btn-default">Submit</div>

<h4>
<span>Here's a typical tweet from a student at </span><span id="college">...</span><span></span>
</h4>
<p id="college-tweet"></p>
</div> <!-- close container -->

<script type="text/javascript" src="js/bootstrap-select.js"></script>
<script src="js/script.js" type="text/javascript"></script>
</body>

</html>