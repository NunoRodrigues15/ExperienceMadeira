<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class time_schedule extends Model
{
    protected $fillable = ['start_time', 'end_time'];

    public function experience(){
        return $this->hasMany('App\experience');
    }
}
