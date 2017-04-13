/*

    concatArrays

    Ecrire une fonction "concatArrays" qui prend deux tableaux et qui renvoi un tableau avec le contenu des deux tableaux.

    Prototype:
        arr concatArrays(arr1, arr2);

    Exemple:
        concatArrays(["bonjour"], ["ça", "va?", 3, 4]); // ["bonjour", "ça", "va?", 3, 4]

    Fonctions interdites:
        - Array.concat

    La fonction ne doit pas modifier les tableaux initiaux.

*/
function concatArrays(arr1, arr2) 
{
    var a = arr1;
    const taille1 = arr1.length
    const taille2 = arr2.length
    for (var i = 0; i < taille2; i++) 
    {
        a[taille1 + i] = arr2[i];
        console.log(a[taille1 + i])
    }
    return a;
}
