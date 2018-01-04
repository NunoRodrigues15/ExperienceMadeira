<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReservationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->increments('id');

            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->integer('number_people');

            $table->integer('user_id')->unsigned();
            $table->integer('experiences_id')->unsigned();

            $table->timestamps();
        });
        Schema::table('reservations', function ($table) {
            $table->foreign('experiences_id')
                ->references('id')
                ->on('experiences');
                $table->foreign('user_id')
                    ->references('id')
                    ->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reservations');
    }
}
