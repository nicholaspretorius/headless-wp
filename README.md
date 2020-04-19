# Headless WordPress and Next.js (React)

## WordPress

WordPress is being run on Local.app by Flywheel: 

* [WordPress](http://localhost:10000/)
* [REST API](http://localhost:10000/wp-json/wp/v2)
* [WP Admin](http://localhost:10000/wp-login.php)

Depending on how you run your WordPress sites, whether through Local.app, XAMPP, Docker or some such, you can enter the WP location by editing the `next.config.js` file and setting WP_URL to the appropriate value. 

## Next.js/React 

The Next.js/React frontend client is running on: 

* `npm run dev`
* [Client](http://localhost:3000)

## TODO

1. Move menus API call to _app
2. Pull in WP page content dynamically
3. Testing setup? 

