<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stat extends Model
{
    use HasFactory;

    /**
     * @var string[]
     */
    protected $fillable = [
        'statable_id',
        'statable_type',
        'device',
        'os',
        'ip',
        'country',
        'is_mobile',
        'is_desktop',
        'is_tablet',
        'user_agent',
        'referer',
        'date',
    ];

    /**
     * @var string[]
     */
    protected $casts = [
        'is_mobile' => 'boolean',
        'is_desktop' => 'boolean',
        'is_tablet' => 'boolean',
        'date' => 'date:Y-m-d',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     */
    public function statable()
    {
        return $this->morphTo();
    }

    /**
     * @param $value
     * @return string
     */
    public function getCountryAttribute($value)
    {
        return strtolower($value);
    }
}
