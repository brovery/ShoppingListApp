(function () {
    'use strict';

    angular.module('basicController', [])
        .controller('basicController', basicController);


    basicController.$inject = ['listService'];

    function basicController(listService) {

        // list everything
        var bc = this;
        bc.items = ['item1', 'item2', 'item2'];
        bc.shoppingLists = listService.shoppingLists;
        bc.listItems = listService.listItems;
        bc.currentList = listService.curList;
        bc.curItem = listService.curItem;
        bc.addList = addList;
        bc.addItem = addItem;
        bc.changeList = changeList;
        bc.deleteItem = deleteItem;
        bc.deleteList = deleteList;
        bc.clearDone = clearDone;
        bc.toggleDone = toggleDone;
        bc.editItem = editItem;
        bc.slists = listService.slists;


        // define functions
        function addList() {
            listService.addList(bc.listName);
            bc.listName = '';
        }

        function addItem() {
            listService.addItem(bc.itemName, bc.itemQty);
            bc.itemName = '';
            bc.itemQty = '';
        }

        function changeList(i) {
            bc.currentList = i;
            listService.changeList(i);
        }

        function deleteItem(i) {
            listService.deleteItem(i);
        }

        function deleteList(i, l) {
            listService.deleteList(i, l);
            bc.currentList = 0;
        }

        function clearDone() {
            listService.clearDone();
        }

        function toggleDone(item) {
            listService.toggleDone(item);
        }

        function editItem(i) {
            listService.editItem(i);
        }

    //    TODO: Have cleared items stored to a History array of items.
    //    TODO: Give ability to add historical items back to an existing list.
    //    TODO: Add store to file functionality so multiple users can access the same list.

    }

}());
