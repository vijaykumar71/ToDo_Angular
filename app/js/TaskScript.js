/// <reference path="angular.js" />


var noteApp = angular.module('noteApp', ['ngStorage']);

noteApp.controller('toDoNoteController', function ($scope, $localStorage) {

    'use Strict';

    $scope.notes = $localStorage.note;

    /*
     add a new note and stored into localstorage
    */
    $scope.addTask = function () {
        alert("hi");
        var date = new Date();
        var utc = date.getTime() + (date.getTimezoneOffset() * 60000);
        var newDate = new Date(utc + (3600000 * (+5.5)));
        var noteObject = {
            title: $scope.title,
            content: $scope.content,
            timestamp: newDate.toLocaleString()
        }
        $scope.notes.unshift(noteObject);
        saveNotesState();
        $scope.title = "";
        $scope.content = "";
        return false;
    }

    $scope.deleteTask = function (delNote) {
        $scope.notes.splice($scope.notes.indexOf(delNote), 1);
        saveNotesState();
    }

    $scope.saveEditedContent = function (updateNoteObj) {
        $scope.notes.indexOf(updateNoteObj).title = $scope.title;
        $scope.notes.indexOf(updateNoteObj).content = $scope.content;
        saveNotesState();
    }

    //saving the notes to localstorage after crud operations
    function saveNotesState() {
        $localStorage.note = $scope.notes;
        return false;
    }
});