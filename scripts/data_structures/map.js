/**
 * Map data structure constructor
 */
function Map(){
    // initialize the map
    var data = {};
    
    /**
     * Adds a single key/value pair to the map
     * @param {*} key 
     * @param {*} value 
     */
    function add(key, value){
        data[key] = value;
    }

    /**
     * Adds all key/value pairs to the map
     * @param {array} keys 
     * @param {array} values 
     */
    function addAll(keys, values){
        for(var index in keys){
            add([keys[index]], values[index]);
        }
    }

    /**
     * Adds all key/value pairs found in the specified map object to the map
     * @param {Map} map map to take key/value pairs from
     */
    function addAllFromMap(map){
        for(var value of map){
            add(value.key, value.value);
        }
    }

    /**
     * Gets the value with the associated key from the map
     * @param {*} key key of the wanted value
     */
    function get(key){
        return data[key];
    }

    /**
     * Removes key/value pair from the map
     * @param {*} key key to remove
     * @returns removed value
     */
    function remove(key){
        var value = data[key];
        delete data[key];
        return value;
    }

    /**
     * Sorts the map by key in the specified order
     * @param {string} order order in which to sort the map 'asc' (ascending) or 'desc' (descending)
     */
    function sortByKey(order){
        var keys = getKeys();

        sortArray(keys, order);

        var newData = {};

        for(var key of keys){
            newData[key] = data[key];
        }

        data = newData;
    }

    /**
     * Gets all keys that are present in the map
     * @returns array containing all keys
     */
    function getKeys(){
        var keys = [];

        for(var key in data){
            keys.push(key);
        }

        return keys;
    }

    /**
     * Sorts the map by value in the specified order
     * @param {string} order order to sort the map 'asc' (ascending) or 'desc' (descending)
     */
    function sortByValue(order){
        var values = getValues();

        sortArray(values, order);

        var newData = {};

        for(var value of values){
            var key = findKey(value);

            if(key !== undefined){
                newData[key] = value;
            }
        }

        data = newData;
    }

    /**
     * Finds the key of the specified value
     * @param {*} value 
     * @returns key of the value
     */
    function findKey(value){
        for(var key in data){
            if(data[key] === value){
                return key;
            }
        }
    }

    /**
     * Gets all values that are present in the map
     * @returns array containing all values
     */
    function getValues(){
        var values = [];

        for(var key in data){
            values.push(data[key]);
        }

        return values;
    }

    /**
     * Sorts the given array in the given order 'asc' (ascending) or 'desc' (descending)
     * @param {array} array 
     * @param {string} order 
     */
    function sortArray(array, order){
        if(order === 'asc'){
            array.sort();
        }else{
            array.sort(function(a, b){
                if(a === b){
                    return 0;
                }

                return a > b ? -1 : 1;
            });
        }
    }

    /**
     * Converts the map to a string
     * @returns string containing all key/value pairs that are in the map
     */
    function toString(){
        var string = '';

        for(var key in data){
            string += '| Key: ' + key + ' Value: ' + data[key] + ' ';
        }

        return string;
    }

    /**
     * Iterator used to loop through the map using for..of loop
     * @returns object conforming to the iterator protocol
     */
    this[Symbol.iterator] = function(){
        var keys = [];
        var currentKey = 0;

        for(var key in data){
            keys.push(key);
        }
        
        return {
            next: function(){
                return currentKey < keys.length ? 
                    {value: {key: keys[currentKey], value: data[keys[currentKey++]]}, done: false} : {done: true};
            }
        };
    }

    // add methods to Map object
    this.add = add;
    this.addAll = addAll;
    this.addAllFromMap = addAllFromMap;
    this.get = get;
    this.remove = remove;
    this.toString = toString;
    this.sortByKey = sortByKey;
    this.sortByValue = sortByValue;
}