import getRandomElements from "./getRandomElements";
import Table from "./class/table";
import getArrayOfUniqueValues from "./utils/getArrayOfUniqueValues";
import Cell from "./class/cell";
import Row from "./class/row";
import { getRandomValues } from "crypto";

/*
    Здесь вы можете как угодно эксперементировать с написанным вами кодом;

    ARRAY_OF_UNIQUE_VALUES - массив уникальных значений из N элементов,
    возможно, будет полезно :)

*/

//********************************************************************* 

const N = 100;
const ARRAY_OF_UNIQUE_VALUES = getArrayOfUniqueValues(N);

const result = getRandomElements(ARRAY_OF_UNIQUE_VALUES, 5);
console.log(result);


//********************************************************************* 

const table = new Table([['Latin name', 'Description'], ['Vulpecula', 'Fox'], ['Aries', 'Ram'], 
['Cassiopeia', 'Queen of Ethiopia'], ['Ursa Major', 'Big bear']]);
table.addColumn(['Alpha', 'Anser', 'Hamal', 'Schedar', 'Dubhe']);
table.addRow(['Saggita', 'Arrow', 'Sham']);
table.deleteColumn(2);
table.deleteRow();
table.print();
