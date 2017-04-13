/*

    *doubleSortNumbers*

    Ecrire une fonction "doubleSortNumbers", qui va trier un tableau de nombres.

    Nous ne passerons que des nombres entiers positifs.

    Prototype:
        void doubleSortNumbers(arr1, arr2);

    Exemples:
        doubleSortNumbers([4, 3, 5, 2], [6, 3, 2]); // [2, 2, 3, 3, 4, 5, 6]

    Fonctions interdites:
        Array.sort

*/
function sortNumbers(arr) {

    for (var i = 0; i < arr.length; i++) {

        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                var temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}


function concatArrays(arr1, arr2) {
    var a = arr1;
    const taille1 = arr1.length
    const taille2 = arr2.length
    for (var i = 0; i < taille2; i++) {
        a[taille1 + i] = arr2[i];
    }
    return a;
}


function doubleSortNumbers(arr1, arr2) {
    arr = concatArrays(arr1, arr2);
    arr= sortNumbers(arr);

}