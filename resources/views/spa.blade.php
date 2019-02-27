<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My App</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.2.3/css/bulma.css">
    <link rel="stylesheet" href="{{ mix('/css/router.css') }}">
</head>
<body>
    <div id="app">

        <section class="hero is-primary is-medium">
            <!-- Hero head: will stick at the top -->
            <div class="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item">
                                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
                            </a>
                        </div>
                    </div>
                </nav>
            </div>

            <!-- Hero content: will be in the middle -->
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        Title
                    </h1>
                    <h2 class="subtitle">
                        Subtitle
                    </h2>
                </div>
            </div>

            <!-- Hero footer: will stick at the bottom -->
            <div class="hero-foot">
                <nav class="tabs">
                    <div class="container">
                        <ul>
                            {{--<li class="is-active"><a>Overview</a></li>--}}
                            <router-link tag="li" to="/" exact>
                                <a>Home</a>
                            </router-link>
                            <router-link tag="li" to="/about" exact>
                                <a>About</a>
                            </router-link>
                            {{--<li><a>Grid</a></li>--}}
                            {{--<li><a>Elements</a></li>--}}
                            {{--<li><a>Components</a></li>--}}
                            {{--<li><a>Layout</a></li>--}}
                        </ul>
                    </div>
                </nav>
            </div>
        </section>




        <router-view></router-view>
    </div>

    <script src="{{ mix('/js/router-app.js') }}"></script>
</body>
</html>
