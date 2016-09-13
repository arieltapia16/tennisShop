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
            img:"img/tennis.jpg",
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
            img:"img/padel.jpg",
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
        },
        {
            title : 'Calzado',
            option: 'c',
            img:"img/calzado.jpg",
            items :[]
        },
        {
            title : 'Indumentaria',
            option: 'i',
            img:"img/indumentaria.jpg",
            items :[]
        }



    ]

})
