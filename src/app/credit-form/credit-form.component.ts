import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.css']
})
export class CreditFormComponent implements OnInit {
  total : number = 600000;
  apport : number = 250000;
  taux : number = 1.90;
  duree : number = 25;
  result : number = 0;

  constructor() { }

  ngOnInit() {
    this.compute();
  }

  public compute(){
    const txMens = (this.taux / 100 /12);
    const duration = this.duree *12;
    const amount = this.total - this.apport;
    this.result = (amount * txMens)/(1-Math.pow(1 + txMens,-duration));
    this.result = Math.round(this.result*100)/100;
    console.log('compute = ' + this.result);
  }

}
