<?php

namespace App\Http\Controllers;

use App\experience;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class experiencesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $experienceResult = DB::table('experiences')
            ->leftJoin('experience_images', 'experiences.experience_images_id', '=', 'experience_images.id')
            ->select('experiences.name',
                    'experiences.description',
                    'experiences.id',
                    'experience_images.cover AS experience_images_cover'
            )
            ->get();

        return response($experienceResult, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\experience  $experience
     * @return \Illuminate\Http\Response
     */
    public function show(experience $experience)
    {
        $experienceResult = DB::table('experiences')
            ->leftJoin('companies', 'experiences.company_id', '=', 'companies.id')
            ->leftJoin('categories', 'experiences.categories_id', '=', 'categories.id')
            ->leftJoin('locations', 'experiences.locations_id', '=', 'locations.id')
            ->leftJoin('requirements', 'experiences.requirements_id', '=', 'requirements.id')
            ->leftJoin('experience_images', 'experiences.experience_images_id', '=', 'experience_images.id')
            ->select('experiences.name',
                    'experiences.description',
                    'experiences.short_description',
                    'experiences.start_date',
                    'experiences.end_date',
                    'experiences.weekend_open',
                    'experiences.level',
                    'experiences.duration',
                    'experiences.price',
                    'experiences.price_unit',
                    'experiences.max_people',
                    'companies.name AS companies_name',
                    'categories.name AS categories_name',
                    'experience_images.cover AS experience_images_cover',
                    'experience_images.img1 AS experience_images_img1',
                    'experience_images.img2 AS experience_images_img2',
                    'locations.name AS locations_name',
                    'locations.coord_x AS locations_coord_x',
                    'locations.coord_y AS locations_coord_y',
                    'locations.typical_weather AS locations_typical_weather',
                    'requirements.equipment AS requirements_equipment',
                    'requirements.age AS requirements_age',
                    'requirements.other AS requirements_other'
            )
            ->where('experiences.id', '=', $experience->id)
            ->get();

        return response($experienceResult, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\experience  $experience
     * @return \Illuminate\Http\Response
     */
    public function edit(experience $experience)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\experience  $experience
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, experience $experience)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\experience  $experience
     * @return \Illuminate\Http\Response
     */
    public function destroy(experience $experience)
    {
        //
    }
}
