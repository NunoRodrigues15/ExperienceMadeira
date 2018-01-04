<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class company extends Model
{
    protected $fillable = ['user_id', 'name', 'description'];

    public function avatar(){
        return $this->hasOne('App\avatar');
    }

    public function user(){
       return $this->belongsTo('App\user');
   }
   public function experiences(){
        return $this->hasMany('App\experience');
    }

}
