<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <style>
        body {
            padding-top: 0px;
            padding-bottom: 20px;   
            background-image: url("img/bkg.png");
            background-repeat:repeat-x;
        }
    </style>
    <link rel="stylesheet" href="css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="css/main.css">
    <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
</head>
<body>
    <div id="main">
      <p id="title_bar"><img src="img/title.png" /></p>
      <div id="columns">
        <div id="left_c">
            <div id="left_c_1">
                <img src="img/left_top.png" />
                <div id = "generate-counter">
                    <div id="tweets_g">Tweets Generated</div>
                    <div id="generated"></div>
                    <!--<img src="img/left_bottom.png" />-->

                </div>
            </div>
            <div id="left_c_2">
                <p> Colleges We Support</p>
            </div>
        </div>
        <div id="right_c">
            <p id="right_header">Select a school to generate a #college tweet</p>
            <hr />
            <div id = "right_c_top_row">          
                <select style="display:inline-block;" id="selectcollege">
                    <option value="">Select a college</option> 
                </select>
                <div id="submitbutton" class="btn btn-md btn-default" style="display:inline-block;">Generate</div>
            </div>
            <h4>A typical tweet at <span id="college">...</span> </h4>
            <div id="tweet-box">
                <div id="college-pic"></div>
                <div id="college-text" class="clearfix">
                    <p id="college-twitter"></p>
                    <p id="college-tweet"></p>
                </div>
            </div>
        </div>
    </div>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.1.min.js"><\/script>')</script>

    <script src="js/vendor/bootstrap.min.js"></script>
    <script src="js/twitter-text.js"></script>
    <script src="js/main.js"></script>
    <link href="select2/select2.css" rel="stylesheet"/>
    <script src="select2/select2.js"></script>
    <script>
        $(document).ready(function() { $("#selectcollege").select2(); });
    </script>

    <script>
        var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
        (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src='//www.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
    </script>
</div>
</body>
</html>
