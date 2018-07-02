/**
 * Console object used to write information to the console.
 * The reason that the console object is returned by a self-invoking function is to make is so
 * that only one instance of the console can be made and to encapsulate
 * the object so that it's properties and functions can't be accessed elsewhere
 */
var m_console = (function(){
    var log;

    /**
     * Initializes the console object's variables
     */
    function init(){
        log = document.querySelector('#console');
    }

    /**
     * Writes an error message to the console
     * @param {string or number} data error message to be written to the console
     */
    function error(data){
        write('Error: ' + data, 'red');
    }

    /**
     * Writes info text to the console
     * @param {string or number} data info text to be written to the console
     */
    function info(data){
        write('Info: ' + data, 'blue');
    }

    /**
     * Writes success text to the console
     * @param {string or number} data success text to be written to the console
     */
    function success(data){
        write('Success: ' + data, 'green');
    }

    /**
     * Writes text to the console
     * @param {string or number} data text to be written to the console
     */
    function text(text){
        write('Output: ' + text, 'black');
    }

    /**
     * Writes a new line to the console
     */
    function newLine(){
        var newLine = document.createElement('br');
        log.appendChild(newLine);
    }

    /**
     * Writes data to the console with the specified color
     * @param {string or number} data data to be written to the console
     * @param {string} color what color should the data text be
     */
    function write(data, color){
        var span = document.createElement('span');
        span.setAttribute('class', color);
        span.innerHTML = data;
        log.appendChild(span);
        newLine();
    }

    // return an object that encapsulates the console
    return {
        init: init,
        newLine: newLine,
        error: error,
        success: success,
        info: info,
        text: text
    };
})(); 

// when the window finishes loading, init the console
window.addEventListener('load', function(){
    m_console.init();
});