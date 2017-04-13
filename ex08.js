/*
    3D array

    Ecrire une fonction "getValuesFrom3DArray", qui va mettre dans un tableau à une dimension chaque valeurs trouvé.

    Prototype:
        arr getValuesFrom3DArray(arr);

    Exemple:
        getValuesFrom3DArray([
            [
                ["Oulala", "ça", "fait"],
                  [
                ["Pourtant c'est la même chose quasiment !"]
            ]
                ["beaucoup", "de", "crochets!!!"]
            ],
            [
                ["Pourtant c'est la même chose quasiment !"]
            ]
        ]);
        // ["Oulala", "ça", "fait", "beaucoup", "de", "crochets!!!", "Pourtant c'est la même chose quasiment !"]

*/

//à améliorer 
function getValuesFrom3DArray(arr) {

    var arrFinal = new Array;
    const nbRow = arr.length
    var curentRow

    for (var row = 0; row < nbRow; row++) {

        curentRow = arr[row]
        for (var col = 0; col < curentRow.length; col++) {

            curentRow[col].forEach(function (element) {
                arrFinal.push(element)
            }, this);

        }

    }
    return arrFinal;
}
