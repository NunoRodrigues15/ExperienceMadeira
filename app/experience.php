<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class experience extends Model
{

    protected $fillable = [
        'company_id'
        ,'categories_id'
        ,'locations_id'
        ,'requirements_id'
        ,'experience_images_id'
        ,'name'
        ,'description'
        ,'short_description'
        ,'start_date'
        ,'end_date'
        ,'weekend_open'
        ,'level'
        ,'duration'
        ,'price'
        ,'price_unit'
        ,'max_people'
    ];

    public function company(){
        return $this->belongsTo('App\company');
    }
    public function experience_image(){
        return $this->belongsTo('App\experience_image');
    }
    public function requirement(){
        return $this->belongsTo('App\requirement');
    }

    public function category(){
        return $this->belongsTo('App\category');
    }
    public function location(){
        return $this->belongsTo('App\location');
    }
    public function time_schedule(){
        return $this->belongsTo('App\time_schedule');
    }


    public function reservations(){
        return $this->hasMany('App\reservation');
    }
}
