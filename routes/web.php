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

Auth::routes();

Route::get('/home', 'HomeController@index');

Route::resource('avatars', 'avatarsController');
Route::resource('categories', 'categoriesController');
Route::resource('companies', 'companiesController');
Route::resource('experiences', 'experiencesController');
Route::resource('experiencesimages', 'experiencesimagesController');
Route::resource('locations', 'locationsController');
Route::resource('requirements', 'requirementsController');
Route::resource('reservations', 'reservationsController');
Route::resource('time_schedules', 'time_schedulesController');
Route::resource('users', 'usersController');
