/**
 * Created by DELL on 21.02.2017.
 */

var Singleton = (function() {

    var instance;

    // Приватные методы и свойства
    // ...

    // Конструктор
    function Singleton() {
        if ( !instance )
            instance = this;
        else return instance;

        // Публичные свойства
    }

    // Публичные методы
    Singleton.prototype.test = function() {return 1};

    return Singleton;

})();

console.log( new Singleton() === new Singleton() );

console.log(Singleton().test());