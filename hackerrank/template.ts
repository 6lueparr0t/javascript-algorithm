'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
    // Write your code here
    let result : number[] = [0,0];

    let j:number = 0;
    for(let i:number = 0;i<arr.length; i++) {
      result[0] += arr[i][j++];
    }

    for(let i:number = 0;i<arr.length; i++) {
      result[1] += arr[i][--j];
    }

    return Math.abs(result[0] - result[1]);
}

function main() {
    // const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);
    const ws: WriteStream = createWriteStream("output.txt");

    const n: number = parseInt(readLine().trim(), 10);

    let arr: number[][] = Array(n);

    for (let i: number = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result: number = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
