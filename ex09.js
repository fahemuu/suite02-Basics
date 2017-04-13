/*

    *sortNumbers*

    Ecrire une fonction "sortNumbers", qui va trier un tableau de nombres.

    Nous ne passerons que des nombres entiers positifs.

    Prototype:
        void sortNumbers(arr);

    Exemples:
        sortNumbers([4, 3, 5, 2]); // [2, 3, 4, 5]

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
console.log(sortNumbers([4, 3, 5, 2]))
