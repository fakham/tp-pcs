import { Ipc } from "./ipc";

export class Computer implements Ipc {

  name:string;
  brand:string;
  price:number;

  constructor(name?:string, brand?:string, price?:number) {
    this.name = name;
    this.brand = brand;
    this.price = price;
  } 

}
