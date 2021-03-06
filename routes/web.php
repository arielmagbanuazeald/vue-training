<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/spa', function () {
    return view('spa');
});

Route::get('/carousel', function () {
    return view('carousel');
});

Route::get('/counts', function () {
    return view('counts');
});


//Route::get('/statuses', function ()
//{
//    return App\Status::latest()->with('user')->get();
//});

Route::get('/statuses', 'StatusController@index');
Route::post('/statuses', 'StatusController@store');

Route::get('projects/create', 'ProjectsController@create');
Route::post('projects', 'ProjectsController@store');
