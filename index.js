/*
Módulo 10 - Conceptos Avanzados ES6 - Laboratorio
Ejercicios Entregables




hasId
Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto tiene una propiedad llamada id (debe devolver booleano true/false).

TIP: No accedas a 'id' con punto (.) o con corchetes ([]).
*/

const user = {
    id: 4451234,
    name: "Javi",
    surname: "Calzado",
    age: 36,
    location: {
        country: "Spain",
        city: "Málaga",
        postalCode: 29017,
    },
};

const hasId = ({ id }) => id ? true : false;
console.log(hasId(user));

/*
head
Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.

TIP: No utilices el corchete ([]) para acceder a la posición 0.
*/

const myArray = ["Pedro", 2, "ALvaro", 4, 5]


const head = ([first]) => first;
console.log(head(myArray));


/*
tail
Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con todos los elementos menos el primero.

TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.
*/


const tail = ([, ...array]) => array;
console.log(tail(myArray));


/*
swapFirstToLast
Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva un nuevo array donde el primer elemento ha sido colocado en la última posición.

TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.
*/

const swapFirstToLast = ([first, ...array]) => ([...array, first]);
console.log(swapFirstToLast(myArray));


/*
excludeId
Implementa una función llamada excludeId tal que, dado un objeto como entrada, devuelva dicho objeto clonado excepto la propiedad id si la hubiera.

TIP: No modifiques el objeto de entrada. Piensa en destructuring y rest.
*/

const excludeId = ({id, ...obj}) => obj;
console.log(excludeId(user));

/*
wordsStartingWithA
Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada, devuelva otro array filtrado con aquellas palabras que empiecen por a.

TIP: No utilices bucles.
*/

const arrayPalabras = ["alta", "altura", "alien", "bandida", "coqueta", "dinamita", "expensiva", "emperatriz", "enigma"]

const wordsStartingWith =  words => words.filter(word => word.startsWith ("a"));
console.log(wordsStartingWith(arrayPalabras))


/*
concat
Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva otro string con la concatenación de todos, separados por |.

TIP: No utilices bucles.
*/

const profes = ["Javi", "Lissette", "Dani"];

const concat = randomArray => randomArray.join("|");
console.log(concat(profes))


/*
multArray
Implementa una función llamada multArray que admita un array de números (arr) y otro parámetro que sea un número (x) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.

TIP: No utilices bucles.
*/

const numeros = [4,654,6546,76789,42,1]

const multArray = (randomArray, x) => randomArray.map(cifra => cifra * x);
console.log(multArray(numeros, 3))


/*
calcMult
Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como resultado el producto de todos ellos.

TIP: No utilices bucles.
*/

const numAzar = [3,4,2];

const calcMult = ([...cifras]) => cifras.reduce((mulCifra, n) => mulCifra * n);
console.log(calcMult(numAzar));