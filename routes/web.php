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

Route::get('/logout','Auth\LoginController@logout');
Auth::routes();

Route::group(['middleware' => ['admin','auth']],function(){
      Route::get("/home","HomeController@index");

      Route::get("/users","UserController@index");
      Route::put("/edit/{id}","UserController@edit");

      Route::get("/categories","CategoryController@index");
      Route::post("/categories/store/","CategoryController@store");
      Route::delete("/categories/delete/{id}","CategoryController@destroy");
      Route::put("/categories/edit/{id}","CategoryController@edit");
      Route::put("/categories/update/{id}","CategoryController@update");
});
