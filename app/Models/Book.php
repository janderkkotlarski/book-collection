<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Testing\Fluent\Concerns\Has;

class Book extends Model {
    protected $fillable = ['author_id', 'title', 'summary'];

    use HasFactory;

    public function author(): BelongsTo {
        return $this->belongsTo(Author::class);
    }

    public function reviews(): HasMany {
        return $this->hasMany(Review::class);
    }
}