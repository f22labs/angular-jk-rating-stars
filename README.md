# AngularJS Rating Stars

Amazing AngularJS 1 Rating Stars directive that works with Angular Material.

Demo : https://embed.plnkr.co/q7pgHz/

## Install :

### npm
`npm install angular-star-ratings`

### bower
`bower install angular-star-ratings`

## Usage :

 - Add `angular-star-ratings.js` to your index file:
```html
<script src="angular.js"></script>
<script src="angular-star-ratings.js"></script>
```

 - Add `angular-star-ratings.css` to your index file:
```html
<link href="angular-star-ratings.css" rel="stylesheet" type="text/css" />
```
 - Add the google material icons
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

 - Add a dependency to the `angular-star-ratings` module in your application.
```js
angular.module('MyApp', ['angular-star-ratings']);
```

 - Add a `angular-star-ratings` tag to your html, set the amount of stars and bind a variable that will holds the selected value. If the maxRating variable is not set, we use the default of 5.
```html
<angular-star-ratings max-rating="8" rating="ctrl.rating" read-only="ctrl.readOnly" on-rating="ctrl.onRating(rating)" >
</angular-star-ratings>
```

## TODO :

## License
This module is released under the permissive [MIT license](http://revolunet.mit-license.org). Contributions or suggestions are always welcome :D
