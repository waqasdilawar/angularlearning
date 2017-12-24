import { Injectable } from "@angular/core";
import {Logger} from './logger';
@Injectable()
export class Learning {

    constructor(private logger: Logger) {
        
    }
   public  result: number=0;

   public sum(value1:number, value2:number) {
       this.result = value1 + value2;
       this.logger.log(this.result.toString());
   }
    public sub(value1: number, value2: number) {
        this.result = value1 - value2;
        this.logger.log(this.result.toString());
    }
    public mul(value1: number, value2: number) {
        this.result = value1 * value2;
        this.logger.log(this.result.toString());
    }
}