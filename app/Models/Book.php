<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Testing\Fluent\Concerns\Has;

class Book extends Model {
    protected $fillable = ['title', 'summary', 'author_id'];

    use HasFactory;

    public function author() {
        return $this->belongsTo(Author::class);
    }
}