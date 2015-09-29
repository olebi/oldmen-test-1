angular.module('oldmenTest')

.factory('getContacts', function($http, $rootScope){
    var path = '../data/contacts.json';
    
    return $http.get(path)
        .success(function(data){
            $rootScope.contactsInfo = function(data){
                return data
            }
        })
        .error(function(err){
            console.log(err);
            return err;
        });
})

;
