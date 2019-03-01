<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Counts</title>
</head>
<body>
    <div id="app">
        <counter :to="100"></counter>
        <counter :to="1955"></counter>
    </div>
</body>

<script src="{{ mix('/js/counts.js') }}"></script>
</html>
