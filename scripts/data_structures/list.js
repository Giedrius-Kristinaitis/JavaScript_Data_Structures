/**
 * List constructor that takes an array as a parameter and adds all it's elements to the list
 * @param {array} elementsToAdd elements to add to the list
 */
function List(elementsToAdd){
    // initialize the list
    var elements = [];

    // add elements if supplied
    if(elementsToAdd !== undefined){
        addAll(elementsToAdd);
    }

    /**
    * Adds a single element to the end of the list
    * @param {anything} element element to add to the array
    */
    function add(element){
        elements.push(element);
    }

    /**
     * Adds all array elements to the end of the list
     * @param {array} elements array of elements to add
     */
    function addAll(elements){
        for(var index in elements){
            add(elements[index]);
        }
    }

    /**
     * Removes an element with the specified index from the list
     * @param {integer} index element to remove
     * @returns removed element
     */
    function remove(index){
        var element = elements[index];

        if(elements.length > 1) {
            for(var i = index; i < elements.length - 1; i++){
                elements[i] = elements[i + 1];
            }
        }

        elements.pop();

        return element;
    }

    /**
     * Returns the lement with the specified index
     * @param {integer} index 
     * @returns element at position 'index'
     */
    function get(index){
        return elements[index];
    }

    /**
     * Sorts the list in the given order
     * 'asc' - sort in ascending order
     * 'desc' - sort in descending order
     * If comparison function is provided then the order is ignored
     * @param {string 'asc' or 'desc'} order order in which to sort the list
     * @param {function} func optional comparison function
     */
    function sort(order, func){
        // comparison function is defined, use it
        if(func !== undefined){
            elements.sort(func);
        }
        // comparison function is undefined, sort in ascending or descending order
        else{
            elements.sort(function(a, b){
                if(a == b){
                    return 0;
                }else{
                    if(order === 'asc'){
                        return a > b ? 1 : -1;
                    }else if(order === 'desc'){
                        return a > b ? -1 : 1;
                    }else{
                        return Math.floor(Math.random() * 10);
                    }
                }
            });
        }
    }

    /**
     * Converts the list to a string
     * @returns list elements as a string
     */
    function toString(){
        var string = '';

        for(var index in elements){
            string += elements[index];

            if(index !== elements.length - 1){
                string += ' ';
            }
        }

        return string;
    }

    /**
     * Iterator used to iterate through the list using for..of loop
     * @returns object conforming to the iterator protocol
     */
    this[Symbol.iterator] = function(){
        var index = 0;

        return {
            next: function(){
                return index < elements.length ? {value: elements[index++], done: false} :  {done: true};
            }
        };
    }
    
    // add methods to List object
    this.add = add;
    this.addAll = addAll;
    this.get = get;
    this.remove = remove;
    this.sort = sort;
    this.toString = toString;
}