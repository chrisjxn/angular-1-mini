angular.module('friendsList').controller('mainCtrl', function($scope){
    $scope.friends = ['Misti', 'Eli', 'Joy', 'Faith', 'Bryant'];

    $scope.add = function(friendName){
        $scope.friends.push(friendName);
        $scope.newFriend = "";
    }

    $scope.delete = function(name){
        let index = $scope.friends.indexOf(name);
        $scope.friends.splice(index, 1);
    }
});