document.write('<table>');
document.write('<tbody>');

//créé 9 lignes
for(var ligne=1;ligne<=9;ligne++) {
    document.write('<tr>')
// dans les 9 lignes ,crée 9 cellules
    for (var cellule=1 ; cellule<=9 ;cellule++) {
        if (ligne==cellule) {
            document.write('<td class="color">');
        }
        else {document.write('<td>')
        }
        //calcul le nombre de cellule x ligne
        document.write(ligne*cellule);
        document.write('</td>');
    }

    document.write('</tr>');
}






document.write('</tbody>');
document.write('</table>');
