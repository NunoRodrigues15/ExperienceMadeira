<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class location extends Model
{
    protected $fillable = ['name','coord_x', 'coord_y', 'typical_weather'];

    public function experiences(){
        return $this->hasMany('App\experience');
    }

}
