angular.module("app")

.directive("searchDirective", function(){
    function link(scope, element, attrs){
        console.log(element, attrs);
        $(element).autocomplete({
             source:scope[attrs.searchDirective],
            // select: function(ev, ui){
            //     ev .preventDefault();
            //     if (ui.item) {
            //         scope.optionSelected(ui.item.value);
            //     }
            // },
            // focus: function(){
            //     ev.preventDefault();
            //     $(this).val(ui.item.label)
            // }
        })

    }



    return{
        link: link
    }
})
