/*

    *Split*

    Ecrire une fonction "splitStr" qui, d'où son nom,
    sépare une chaine de caractère par une occurence donnée,
    et renvoi un tableau contenant le résultat de la séparation de donnée.

    Prototype:
        arr splitStr(str, occurence);

    Exemples:
        splitStr("Bonjour comment tu vas ? ça va merci.", " ");
        // ["Bonjour", "comment", "tu", "vas", "?", "ça", "va", "merci."]

    Fonctions interdites:
        - String.split
*/
function splitStr(str, occurence) {
    var i = 0,
        len = str.length,
        s = "";
    var arr = new Array;

    while (i < len) {
        if (str[i] != occurence) {
            s = s + str[i];

        }
        else {
            arr.push(s);
            s = ""
        }
        i++;

        console.log(s)
    }
    arr.push(s);

    return arr;
}