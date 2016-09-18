angular.module('app')
.filter('capitalizeFirst', function () {

    return function(text, letters) {

      firstLetter = text.slice(0,letters).toUpperCase();
      rest =  text.slice(letters,text.length);

      return firstLetter+rest
    }

});
