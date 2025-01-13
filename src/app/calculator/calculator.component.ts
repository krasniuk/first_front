import { Component } from '@angular/core';



enum eOperation {sum = '+', min = '-', div ='/', mul = '*'}

type typeHistory = {
  id:number,   val1:number,
  val2:number, result:any,
  operation:eOperation
};

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})

export class CalculatorComponent {
  public Val1:number = 0;
  public Val2:number = 0;
  public Result?:number | null;

  protected History:typeHistory[] = [];
  public History7:string[] = [];

  sum(){this.Result = this.Val1 + this.Val2; this.save_history(eOperation.sum)};
  min(){this.Result = this.Val1 - this.Val2; this.save_history(eOperation.min)};
  division() {this.Result = this.Val1 / this.Val2; this.save_history(eOperation.div)};
  multiplication() {this.Result = this.Val1 * this.Val2; this.save_history(eOperation.mul)};

  protected save_history(Operator:eOperation){
    const Id:number = this.History.length + 1;
    const NewElem:typeHistory = {
      id: Id,
      val1: this.Val1,
      val2: this.Val2,
      operation: Operator,
      result: this.Result
    };
    this.History.push(NewElem);

    if (this.History.length > 7){ this.History7.shift() }
    this.History7.push(`${Id}) ${this.Val1} + ${this.Val2} = ${this.Result}`)
  }
}

