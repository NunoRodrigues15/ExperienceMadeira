<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class avatar extends Model
{
    protected $fillable = ['avatar_path'];

    public function user(){
        return $this->hasOne('App\User');
    }
    public function company(){
        return $this->hasOne('App\company');
    }
}
