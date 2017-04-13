/*

    getValuesByType

    Ecrire une fonction "getValuesByType",
    qui donne un tableau avec uniquement les valeurs d'un type en particulier depuis un autre tableau.
    
    
    Nous testerons avec des nombres, chaines de caractères et avec undefined.


    Prototype:
        arr getValuesByType(arr, type);

    Exemple:
        getValuesByType(["toto", 4, 5], "number"); // [4, 5]

    Attention, la fonction ne doit pas modifier le tableau modèle.

*/
function getValuesByType(arr, type) {
    //on sauvegarde la taille du tableau
    var taille = arr.length;
    var arr1 = new Array;


    for (var i = 0; i < taille; i++) {
        if (typeof (arr[i]) === type) {
            console.log(i)
            arr1.push(arr[i]);
        }
    }
    return arr1;
}