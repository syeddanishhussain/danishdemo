/**
 * Created by dell1 on 07/05/2015.
 */
var app=angular.module("toDoList",["ngMaterial","firebase"]);
app.constant("myUrl","https://danish3rdapp.firebaseio.com/Messages");
app.controller("toDoController",function($scope,$firebaseArray,myUrl){
    var ref = new Firebase(myUrl)
    var messages=$firebaseArray(ref);
    $scope.saveTask=function(){
    messages.$add($scope.task);
    };
});
app.controller("showToDo",function($scope,$firebaseArray,myUrl){
        var ref=new Firebase(myUrl);
        $scope.messages=$firebaseArray(ref);
        $scope.removeTask=function(taskDetails){
            $scope.messages.$remove(taskDetails);
        };
    }
);
