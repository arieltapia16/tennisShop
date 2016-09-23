angular.module("app")

.directive("searchDirective", function(){
    function link(scope, element, attrs){
        scope.$watch('articlesforsearch', function(searchResult){

            if (searchResult) {
                $(element).autocomplete({
                     source:searchResult

                    
                })
            }
        })
    }


    return{
        link: link
    }
})
