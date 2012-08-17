# extRating - jQuery Rating Plugin
The extStar Rating Plugin is a plugin for the jQuery Javascript library that creates star rating control based on text input.

# Usage
```javascript
$(document).ready(function () {
  $("#rating_input_id").extRating({
    activeStarPath: 'activeStar.png', //path to active star image, default - '/assets/extRating/activeStar.png'
    inactiveStarPath: 'inactiveStar.png', //path to inctive star image, default - '/assets/extRating/inactiveStar.png'
    numberOfStars: 10 // number of stars, default - 5
  });
});
```
