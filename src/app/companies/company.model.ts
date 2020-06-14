export class Company {
    name: string;
    numberofEmployee: number;
    address: string;
    imgPath: string;
    establishmentDay: Date;

    constructor(name: string, noe: number, address: string, imgPath:string, esDay:Date){
        this.name=name;
        this.numberofEmployee = noe;
        this.address = address;
        this.imgPath = imgPath;
        this.establishmentDay = esDay;
    }
  }
  