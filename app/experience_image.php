<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class experience_image extends Model
{
    protected $fillable = ['avatar_path','cover','img1','img2'];

    public function experience(){
        return $this->hasOne('App\experience');
    }
}
