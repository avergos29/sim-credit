import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.css']
})
export class CreditFormComponent implements OnInit {
  private formGroup : FormGroup;
  private hidden: boolean = true;
  private result: number;

  constructor(private fb: FormBuilder){
    this.formGroup = this.fb.group({
        total : [600000, Validators.compose([Validators.pattern('^(0|[1-9][0-9]*)$' ), Validators.required])],
        apport: [250000, Validators.required],
        taux: [1.9, Validators.required],
        duree: [25, Validators.required]
    })
  }

  ngOnInit() {
    this.compute();
  }

  private value(name: string): number {
    return this.formGroup.value[name];
  }

  private hasError(name: string) : string {
     return this.formGroup.controls[name].invalid ? 'has-error' : '';
  }

  public validate(){
    this.compute();
    this.hidden = false;
  }

  public compute(){
    console.log('formValid', this.formGroup.valid);
    const txMens = (this.value('taux') / 100 /12);
    const duration = this.value('duree') *12;
    const amount = this.value('total') - this.value('apport');
    this.result = (amount * txMens)/(1-Math.pow(1 + txMens,-duration));
    this.result = Math.round(this.result*100)/100;
    console.log('compute = ' + this.result);
  }

}
