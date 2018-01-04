<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class category extends Model
{
    protected $fillable = ['name','description'];

    public function experiences(){
        return $this->hasMany('App\experience');
    }
}
