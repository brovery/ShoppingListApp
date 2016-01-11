(function(){
    'use strict';

    angular.module('listService', [])
        .service('listService', listService);

    listService.$inject = [];

    function listService() {

        // list everything
        var ls = this;
        ls.shoppingLists = ['Main'];
        ls.listItems = [];
        ls.curList = 0;
        ls.listCount = 1;
        ls.addList = addList;
        ls.addItem = addItem;
        ls.changeList = changeList;
        ls.deleteItem = deleteItem;
        ls.deleteList = deleteList;
        ls.clearDone = clearDone;
        ls.toggleDone = toggleDone;

        // define functions
        function addList(listname) {
            var dup = false;
            for (var i = 0; i<ls.shoppingLists.length; i++) {
                if (listname == ls.shoppingLists[i]) {
                    dup = true;
                }
            }
            if (dup == false) {
                ls.listCount++;
                ls.curList = ls.listCount-1;
                ls.shoppingLists.push(listname);
            } else {
                alert("You cannot have duplicate list names. Please enter a valid list name.")
            }
        }

        function addItem(name, qty, list) {
            ls.listItems.push({name: name, qty: qty, list: ls.curList, status: 0});
            console.log(ls.listItems);
        }

        function changeList(cur) {
            ls.curList = cur;
        }

        function deleteItem(index) {
            ls.listItems.splice(index, 1);
        }

        function deleteList(index) {
            ls.shoppingLists.splice(index, 1);
            ls.curList = 0;
            for (var i = 0; i<ls.listItems.length; i++) {
                if (ls.listItems[i].list == index) {
                    ls.listItems.splice(i, 1);
                    i--;
                } else if (ls.listItems[i].list > index) {
                    ls.listItems[i].list = ls.listItems[i].list-1;
                }
            }
        }

        function clearDone() {
            // Clears the completed items from the items list for the currently-selected list.
            for (var i = 0; i<ls.listItems.length; i++) {
                if (ls.listItems[i].status == 1 && ls.listItems[i].list == ls.curList) {
                    ls.listItems.splice(i, 1);
                    i--;
                }
            }
        }

        function toggleDone(name, list) {
            // Toggle status of an item.
            // Filter in html causes index to change, so this needs to loop through & find
            // the item by name. In case of same-name items on different lists, need to check list too.
            for (var i = 0; i<ls.listItems.length; i++) {
                if (ls.listItems[i].name == name && ls.listItems[i].list == list) {
                    if (ls.listItems[i].status == 0) {
                        ls.listItems[i].status = 1;
                    } else {
                        ls.listItems[i].status = 0;
                    }
                }
            }
        }
    }

}());
