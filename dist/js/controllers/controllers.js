angular.module('oldmenTest.controllers', [])

.controller('MainCtrl', function($scope, getContacts, $modal, $state, $rootScope) {
    var contactsInfo = getContacts.success(function(data){

        function contactListModal(){
            $modal.open({
              animation: true,
              controller: 'ContactListModalCtrl',
              templateUrl: 'contactList.html'
            });
        };
        

        $scope.contacts = {
            region: 'Europe',
            country: 'Germany'
        };

        $scope.regions = data.regions;
        $scope.countries = data.countries[$scope.contacts.region];



        $scope.chooseRegion = function(){
            $scope.countries = data.countries[$scope.contacts.region];
            if(!$scope.countries){
                $scope.hideCountries = true;
                $rootScope.contactsList = data.contacts[$scope.contacts.region];
                contactListModal();
            }else{
                $scope.hideCountries = false;
                // $scope.contacts.country = undefined;
                $rootScope.contactsList = data.contacts[$scope.contacts.country];
                $scope.contacts.country = data.countries[$scope.contacts.region][0];

                $state.go('regionState.countryState', {countryName: $scope.contacts.country});

                $scope.chooseCountry();
            }
        };

        $scope.chooseCountry = function(){
            $rootScope.contactsList = data.contacts[$scope.contacts.country];
            contactListModal();
        };


    });

})

.controller('ContactListModalCtrl', function($scope, $modalInstance){
    $scope.close = function(){
        $modalInstance.close();
    }
})


;
