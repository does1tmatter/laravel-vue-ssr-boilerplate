<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PagesController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'myPageName' => 'Homepage',
            'something' => 'else',
            'trying_number' => 100
        ]);
    }


    public function test()
    {
        return Inertia::render('Test', [
            'testProps' => [
                'hundred' => 100,
                'something' => 'else'
            ]
        ]);
    }
}