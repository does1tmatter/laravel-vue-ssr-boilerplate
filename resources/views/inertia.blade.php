<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  >

  <title>Laravel</title>
  {{-- Optional - serve css with initial html --}}
  @if (env('APP_ENV') === 'production')
    <style>
      {!! App\Helpers\InlineStyle::fromVite() !!}
    </style>
  @endif

  @php
    $viteAssets = ['resources/js/app.js'];

    // for local dev
    if (env('APP_ENV') !== 'production') {
        $viteAssets[] = 'resources/css/app.css';
    }
  @endphp
  {{-- Optional --}}

  {{-- Pass both js and css if not using inlined styles --}}
  @vite($viteAssets)
  @inertiaHead
</head>

<body>
  @inertia
</body>

</html>
