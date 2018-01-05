<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class reservationsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $id = Auth::id();

        $isAdmin = DB::table('users')
            ->join('roles', 'users.role_id', '=', 'roles.id')
            ->select('users.*'
            )
            ->where([
                ['users.id', '=', $id],
                ['roles.id', '=', 1]
            ])
            ->get()->count();
        $isColaborator= DB::table('users')
            ->join('roles', 'users.role_id', '=', 'roles.id')
            ->select('users.*'
            )
            ->where([
                ['users.id', '=', $id],
                ['roles.id', '=', 2]
            ])
            ->get()->count();
        $isUser= DB::table('users')
            ->join('roles', 'users.role_id', '=', 'roles.id')
            ->select('users.*'
            )
            ->where([
                ['users.id', '=', $id],
                ['roles.id', '=', 3]
            ])
            ->get()->count();

            if($isUser == 1){
                $reservations = DB::table('reservations')
                    ->leftJoin('experiences', 'reservations.experiences_id', '=', 'experiences.id')
                    ->select('reservations.*')
                    ->where('reservations.user_id', '=', $id)
                    ->get();

                    return View::make('reservations.index')
                                ->with('$reservations', $nerds);
            }else if($isColaborator == 1){
                $reservations = DB::table('reservations')
                    ->leftJoin('experiences', 'reservations.experiences_id', '=', 'experiences.id')
                    ->leftJoin('companies', 'companies.id', '=', 'experiences.company_id')
                    ->select('reservations.*')
                    ->where('companies.user_id', '=', $id)
                    ->get();

                    return view('reservations');
            }else if($isAdmin == 1){
                $reservations = DB::table('reservations')->get();

                return View::make('reservations.index')
                            ->with('$reservations', $nerds);




            }else{
                return view('home');
            }
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
