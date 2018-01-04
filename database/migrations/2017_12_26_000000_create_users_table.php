<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('email')->unique();
            $table->string('password');
            $table->integer('avatar_id')
                ->unsigned()
                ->nullable();
            $table->integer('role_id')->unsigned();

            $table->rememberToken();
            $table->timestamps();
        });

        Schema::table('users', function($table)
        {
            $table->foreign('avatar_id')
                ->references('id')
                ->on('avatars');
            $table->foreign('role_id')
                ->references('id')
                ->on('roles');
        });
    }






    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
