<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExperiencesTimeSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ExperiencesTimeSchedules', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('experiences_id')->unsigned();
            $table->foreign('experiences_id')
                ->references('id')
                ->on('experiences');

            $table->integer('time_schedules_id')->unsigned();
            $table->foreign('time_schedules_id')
                ->references('id')
                ->on('time_schedules');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
