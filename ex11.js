/*

    *Insert at*

    Ecrire une fonction "insertAt", qui insert une occurrence à un certain index d'un tableau.

    Prototype:
        arr insertAt(arr, occurence, position);

    Exemple:
        insertAt(["Bonjour", "va?"], "ça", 1); // ["Bonjour", "ça", "va?"]

*/


function insertAt(arr, occurence, position) {

    arr1 = arr.splice(position, 0, occurence);
    return arr1;

}