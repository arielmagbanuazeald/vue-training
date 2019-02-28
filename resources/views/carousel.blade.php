<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Carousel</title>

    <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
</head>
<body>
    <div class="main-carousel" data-flickity='{ "cellAlign": "left", "contain": true }'>
        <img src="http://placeimg.com/640/480/any">
        <img src="http://placeimg.com/640/480/any">
        <img src="http://placeimg.com/640/480/any">
        <img src="http://placeimg.com/640/480/any">
        <img src="http://placeimg.com/640/480/any">
    </div>

    {{--<div id="app">--}}
        {{--<carousel>--}}
            {{--<img src="http://placeimg.com/640/480/arch/sepia?t=1551322391461">--}}
            {{--<img src="http://placeimg.com/640/480/arch/sepia?t=1551322417603">--}}
            {{--<img src="http://placeimg.com/640/480/arch/sepia?t=1551322433224">--}}
            {{--<img src="http://placeimg.com/640/480/arch/sepia?t=1551322482930">--}}
            {{--<img src="http://placeimg.com/640/480/arch/sepia?t=1551322455595">--}}
        {{--</carousel>--}}
    {{--</div>--}}

    <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
    <script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>
