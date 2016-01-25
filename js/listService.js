(function(){
    'use strict';

    angular.module('listService', ['ngStorage'])
        .service('listService', listService);

    listService.$inject = ['$localStorage', '$firebaseArray', '$firebaseObject'];

    function listService($localStorage, $firebaseArray, $firebaseObject) {
        var url = "https://brovery-shop-app.firebaseio.com";
        var listref = new Firebase(url + "/Lists");
        var itemref = new Firebase(url + "/Items");

        // list everything
        var ls = this;
        ls.shoppingLists = $firebaseArray(listref);
        ls.listItems = $firebaseArray(itemref);
        ls.curList = 0;
        ls.addList = addList;
        ls.addItem = addItem;
        ls.changeList = changeList;
        ls.deleteItem = deleteItem;
        ls.deleteList = deleteList;
        ls.clearDone = clearDone;
        ls.toggleDone = toggleDone;
        ls.editItem = editItem;


        // define functions
        function addList(listname) {
            ls.shoppingLists.$add({'listName': listname});
        }

        function addItem(name, qty) {
            if (qty == undefined) {
                qty = "";
            }
            ls.listItems.$add({name: name, qty: qty, list: ls.curList, status: false});
        }

        function changeList(cur) {
            ls.curList = cur;
        }

        function deleteItem(id) {
            ls.listItems.$remove(id);
        }

        function deleteList(index) {
            ls.shoppingLists.$remove(index);
            // Need to remove the items that exist under the list.
            for (var i = 0; i < ls.listItems.length; i++) {
                if (ls.listItems[i].list == index) {
                    ls.listItems.$remove(ls.listItems[i]);
                }
            // decrement listnum for lists to match new list array.
                else if (ls.listItems[i].list > index) {
                    ls.listItems[i].list = ls.listItems[i].list-1;
                    ls.listItems.$save(i);
                }
            }
        }

        function toggleDone(item) {
            // Toggle status of an item.
            for (var i = 0; i < ls.listItems.length; i++) {
                if (ls.listItems[i].$id == item.$id) {
                    ls.listItems[i].status = !ls.listItems[i].status;
                    ls.listItems.$save(i);
                }
            }
        }

        function clearDone() {
            // Clears the completed items from the items list for the currently-selected list.
            for (var i = 0; i<ls.listItems.length; i++) {
                if (ls.listItems[i].status == true && ls.listItems[i].list == ls.curList) {
                    ls.listItems.$remove(ls.listItems[i]);
                }
            }
        }

        function editItem(id) {
            console.log("editing item: " + id);
        }
    }

}());
