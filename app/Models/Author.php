<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Testing\Fluent\Concerns\Has;

class Author extends Model {
    protected $fillable = ['name'];

    use HasFactory;

    public function books() {
        return $this->hasMany(Book::class);
    }
}
