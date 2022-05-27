/* eslint-disable @typescript-eslint/no-unused-vars */

/** Basic Types of TypeScript */

let bool: boolean = true;

let num: number = 0;

let str: string = "A";

let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

let tuple: [number, string] = [0, "A"];

let any1: any = false;

// in fact, hovering on funcA shows voiod type
const funcA = (): void => {
  const test = "TEST";
};

let null1: null = null;

let undefined1: undefined = undefined;

// obj2の型の書き方は後から何でも設定できるので実用上意味がなさげ。
// obj3のような書き方はある。
// (obj1はobject以外の型と区別することが主眼??? cf. blueberry book)
let obj1: object = {};
let obj2: {} = {};
let obj3: { id: number; name: string } = { id: 0, name: "AAA" };
let obj4: { id: number; name: string } = { id: 0, name: "AAA" };
// なお、object型の型記述の属性セパレータは ","ではなく";"が正しい筈
// (obj3は正しく、obj4は正しくない)
