<?php

namespace App\Helpers;

use Illuminate\Support\Facades\File;

class InlineStyle
{
    public static function fromVite($entry = 'resources/css/app.css')
    {
        $manifest = json_decode(file_get_contents(public_path('build/manifest.json')), true);
        $cssFile = $manifest[$entry]['file'];
        return File::get(public_path("build/{$cssFile}"));
    }
}