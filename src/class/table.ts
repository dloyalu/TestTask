import { table } from "console";
import Cell from "./cell";
import Row from "./row";

class Table 
{
    rows!: Row[];
    private columnLenght: number[] = [];

    constructor (array: string[][] = []) 
    {
        this.rows = [];
    
        for (let i:number = 0; i < array.length; i++)
        {
            const row = new Row([]);
    
            for (let j: number = 0; j < array[0].length; j++)
                {
                    const c = new Cell(array[i][j]);
                    row.cells.push(c);
                }
    
            this.rows.push(row);
        }
        
    }

    private columnsLength(): void
    {
        for(let i in this.rows)
            for (let j in this.rows[i].cells)
                if (!this.columnLenght[j] || this.rows[i].cells[j].value.length > this.columnLenght[j])
                    this.columnLenght[j] = this.rows[i].cells[j].value.length;
    }

    addColumn(array: string[]): void
    {
        for (let i in this.rows)
            {
                const c = new Cell(array[i]);
                this.rows[i].cells.push(c);
            }
    }

    addRow(array: string[]): void
    {
        const newRow = new Row([]);

        for (let i in array)
            {
                const c = new Cell(array[i]);
                newRow.cells.push(c);
            }

        this.rows.push(newRow);
    }

    deleteColumn(number:number = -1): void
    {
        if (number == -1)
            number = this.rows[0].cells.length;

        for (let i in this.rows)
            this.rows[i].cells.splice(number - 1, 1);

    }

    deleteRow(number:number = -1): void
    {
        if (number == -1)
            number = this.rows.length;
            
        this.rows.splice(number - 1, 1);
    }

    print(): void 
    {
        let lowBorder: string = '╚═';
        let topBorder: string = '╔═';
        let midBorder:string = '╠═';

        this.columnsLength();

        if (this.columnLenght.length == 0)
        {
            return;
        }

        this.columnLenght.forEach((val: number, ind: number) => 
         {
            if (ind == (this.columnLenght.length - 1))
            {
                topBorder += '═'.repeat(this.columnLenght[ind]) + '═╗';
                midBorder += '═'.repeat(this.columnLenght[ind]) + '═╣';
                lowBorder += '═'.repeat(this.columnLenght[ind]) + '═╝';
            }
            else
            {
                topBorder += '═'.repeat(this.columnLenght[ind]) + '═╦═';
                midBorder += '═'.repeat(this.columnLenght[ind]) + '═╬═';
                lowBorder += '═'.repeat(this.columnLenght[ind]) + '═╩═';
            }
         })

        console.log(topBorder);

        for (let i:number = 0; i < this.rows.length; i++)
        {
            let curRow:string[] = [];

            for (let j in this.rows[i].cells)
            {
                curRow.push(this.rows[i].cells[j].value);
                let m: number = this.columnLenght[j] - this.rows[i].cells[j].value.length;
                curRow[j] += ' '.repeat(m);
            }

            console.log('║ ' + curRow.join(' ║ ') + ' ║');
            i == (this.rows.length - 1)? console.log(lowBorder) : console.log(midBorder);   
        }
    }

}

export default Table;