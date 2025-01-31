<?php

namespace App\Providers;

use App\Models\Link;
use App\Models\User;
use App\Observers\LinkObserver;
use App\Observers\UserObserver;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if (config('app.force_https')) {
            URL::forceScheme('https');
        }

        // disable resource wrapping
        ResourceCollection::withoutWrapping();

        // define observers
        User::observe(UserObserver::class);
        Link::observe(LinkObserver::class);
    }
}
