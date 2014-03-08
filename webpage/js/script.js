$(document).ready(function(){
	function generate(){
        var college = $("#selectcollege option:selected").text();
        if (college != "Select a college") {
        	$('#college').html(college);
        }
    }
    $('#submitbutton').click(function(){
        generate();
    })
});