// Person object
function Person(name, surname, age, phone){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.phone = phone;
}

// add toString method to the Person prototype
Person.prototype.toString = function(){
    return this.name + ' ' + this.surname + '. Age: ' + this.age + '. Phone number: ' + this.phone;
}

/**
 * Prints a list to the console
 * @param {List} list 
 */
function printList(list){
    for(var element of list){
        m_console.text(element.toString());
    }
}

/**
 * Prints a map to the console
 * @param {Map} map 
 */
function printMap(map){
    for(var value of map){
        m_console.text(value.key + ': ' + value.value);
    }
}

// add load event listener to the window object so that code starts executing when everything is done loading
window.addEventListener('load', function(){
    // create people list
    var people = new List([
        new Person('John', 'Johnny', 18, 654879),
        new Person('Dave', 'Tristan', 28, 321564),
        new Person('Seth', 'Bulk', 34, 741562), 
        new Person('Jeff', 'Jim', 39, 654131)
    ]);

    m_console.info('Initial people list:');
    printList(people);

    // sort people list
    people.sort('asc');
    m_console.info('Sorted people list:');
    printList(people);

    // remove 2nd person
    people.remove(1);
    m_console.info('People list with 2nd person removed:');
    printList(people);

    // create contacts map
    var contacts = new Map();
    contacts.addAll(['XYZ', 'PGH', 'ASD'], ['123', '987', '654']);

    m_console.info('Initial contacts map:');
    printMap(contacts);

    // sort contacts map by key
    contacts.sortByKey('asc');
    m_console.info('Contacts sorted by key:');
    printMap(contacts);

    // sort contacts map by value
    contacts.sortByValue('desc');
    m_console.info('Contacts sorted by value:');
    printMap(contacts);

    // remove PGH contact
    contacts.remove('PGH');
    m_console.info('Contacts with removed PGH:');
    printMap(contacts);

    // print a success message to the console
    m_console.success('Data structures work as expected!');
});