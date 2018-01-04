<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class requirement extends Model
{
    protected $fillable = ['equipment','age', 'other'];

    public function experience(){
        return $this->hasOne('App\experience');
    }
}
