<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExperiencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('experiences', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('company_id')->unsigned();
            $table->integer('categories_id')->unsigned();
            $table->integer('locations_id')->unsigned();
            $table->integer('requirements_id')->unsigned();
            $table->integer('experience_images_id')
                ->unsigned()
                ->nullable();
            $table->string('name');
            $table->longText('description');
            $table->longText('short_description');
            $table->date('start_date');
            $table->date('end_date');
            $table->tinyInteger('weekend_open');
            $table->integer('level');
            $table->string('duration');
            $table->integer('price');
            $table->string('price_unit');
            $table->integer('max_people');
            $table->timestamps();
        });
        Schema::table('experiences', function ($table) {
            $table->foreign('experience_images_id')
                ->references('id')
                ->on('experience_images');
            $table->foreign('requirements_id')
                ->references('id')
                ->on('requirements');
            $table->foreign('locations_id')
                ->references('id')
                ->on('locations');
            $table->foreign('categories_id')
                ->references('id')
                ->on('categories');
            $table->foreign('company_id')
                ->references('id')
                ->on('companies');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('experiences');
    }
}
