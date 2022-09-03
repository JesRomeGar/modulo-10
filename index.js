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

const myArray = ["Pedro", "Juan", "ALvaro", 4, 5]

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

const arrayPalabras = ["alta", "altura", "alien", "bandida", "coqueta", "dinamita", "expensiva", "emperatriz", "enigma"];

const wordsStartingWith =  words => words.filter(word => word.startsWith ("a"));
console.log(wordsStartingWith(arrayPalabras));


/*
concat
Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva otro string con la concatenación de todos, separados por |.

TIP: No utilices bucles.
*/

const profes = ["Javi", "Lissette", "Dani"];

const concat = randomArray => randomArray.join("|");
console.log(concat(profes));


/*
multArray
Implementa una función llamada multArray que admita un array de números (arr) y otro parámetro que sea un número (x) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.

TIP: No utilices bucles.
*/

const numeros = [4,654,6546,76789,42,1];

const multArray = (randomArray, x) => randomArray.map(cifra => cifra * x);
console.log(multArray(numeros, 3));


/*
calcMult
Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como resultado el producto de todos ellos.

TIP: No utilices bucles.
*/

const numAzar = [3,4,2];

const calcMult = ([...cifras]) => cifras.reduce((mulCifra, n) => mulCifra * n);
console.log(calcMult(numAzar));


/*
swapFirstSecond
Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array donde el primer elemento ha sido intercambiado por el segundo.

TIP: No modifiques el array de entrada original.
*/

const swapFirstToSecond = ([first, second,...array]) => ([second, first,...array]);
console.log(swapFirstToSecond(myArray));


/*
firstEqual
Implementa una función firstEqual tal que admita multiples strings como argumento de entrada así como un carácter cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.

TIP: No utilices bucles. No accedas al primer carácter con corchetes ([]).
*/

const firstEqual = ([...strings], y) => strings.every(word => word.startsWith(y));
console.log(firstEqual(profes, "J"));


/*
longest
Implementa una función longest que admita múltiples arrays como entrada, y devuelva el array más largo.

TIP: No utilices bucles. Hay diversas formas de hacerlo.
*/
const array1 = [1,2,3,4,5];
const array2 = [1,2,3,4,5,6];

const longest = (...array) => array.reduce((chequeado, actual) => chequeado.length > actual.length ? chequeado : actual);
console.log(longest(array1, array2));


/*
searchInStringV1
Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece dicho carácter en el string.

TIP: No utilices bucles.

TIP: Convierte el string a un array mediante Array.from().
*/

const string1 = ("abecedario")

const searchInStringV1 = (string, z) => Array.from(string).reduce((vecesRepetidas, x) => vecesRepetidas + (x === z ? 1 : 0), 0);
console.log(searchInStringV1(string1, "a"));


/*
searchInStringV2
Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2, encontrando otra alternativa sin usar reduce.

TIP: No utilices bucles.

TIP: Convierte el string a un array mediante Array.from().
*/

const string2 = ("tablet")

const searchInStringV2 = (string, z) => Array.from(string).filter(string => string === z).length;
console.log(searchInStringV2(string2, "t"));



/*
sortCharacters
Implementa una función llamada sortCharacters tal que dado un string, lo devuelva con sus letras ordenadas alfabéticamente.

TIP: No utilices bucles. No modifiques el string original de entrada.

TIP: Convierte el string a un array mediante Array.from().
*/

const sortCharacters = string => Array.from(string).sort()
console.log (sortCharacters(string1))


/*
shout
Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, devuelva todas las palabras concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.

TIP: No utilices bucles.
*/

const palabra1 = "Buenos"; 
const palabra2 = "días";
const palabra3 = "mundo";



const shout = ([...strings]) => strings.map(string => `¡${string.toUpperCase()}!`);
console.log(shout(palabra1, palabra2, palabra3));


/*
//Lista de la compra. Dada la siguiente lista de la compra:
*/
const shoppingCart = [
  { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
  { category: "Carne y Pescado", product: "Pechuga de pollo", price: 3.75, units: 2 },
  { category: "Droguería", product: "Gel de ducha", price: 1.15, units: 1 },
  { category: "Droguería", product: "Papel de cocina", price: 0.9, units: 3 },
  { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
  { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
  { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

//A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
const getIva = (iva, products) => products.map((product) => ({...product, IVA: product.price * iva }));
console.log(getIva(0.21, shoppingCart));

//B. Ordena la lista de más a menos unidades.

const arrangeShoppingCart = products => products.sort ((a,b) => (a.units > b.units ? 1 : -1));
arrangeShoppingCart (shoppingCart);
console.log(shoppingCart);

//C. Obtén el subtotal gastado en droguería.

const getTotalDroguería = product => product.filter(product =>product.category === "Droguería")
.reduce((acc, product) => acc + product.price * product.units, 0);
console.log("El total en droguería son", getTotalDroguería(shoppingCart));


//D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.

const orderCategory = products => products
.map((product) => `${product.product} tiene un precio total de ${product.price * product.units}€`)
.sort((a, b) =>  a.category > b.category ? 1 : -1)
.join (" / ")

console.log(orderCategory(shoppingCart));
