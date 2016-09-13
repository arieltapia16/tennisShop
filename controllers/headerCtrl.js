angular.module("app")
.controller("headerCtrl", function($scope, $state){
    $scope.option = function(opt){
        // console.log(opt);
        $scope.articles_option = opt
    }

    $scope.popups = [

        {
            title : 'Tennis',
            option: 't',
            items :[
                {
                    name:'Raquetas',
                    url:'/'
                },
                {
                    name:'Indumentaria',
                    url:'/'
                },
                {
                    name:'Grips',
                    url:'/'
                },
                {
                    name:'Pelotas',
                    url:'/'
                },
                {
                    name:'Calzado',
                    url:'/'
                },
                {
                    name:'Accesorios',
                    url:'/'
                },

            ]
        },
        {
            title : 'Padel',
            option: 'p',
            items :[
                {
                    name:'Raquetas',
                    url:'/'
                },
                {
                    name:'Indumentaria',
                    url:'/'
                },
                {
                    name:'Pelotas',
                    url:'/'
                },

                {
                    name:'Accesorios',
                    url:'/'
                },

            ]
        }



    ]

})
