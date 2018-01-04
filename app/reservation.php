<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class reservation extends Model
{
    protected $fillable = ['start_date', 'end_date', 'number_people', 'user_id', 'experiences_id'];

    public function experience(){
        return $this->belongsTo('App\experience');
    }
    public function User(){
        return $this->belongsTo('App\User');
    }
}
