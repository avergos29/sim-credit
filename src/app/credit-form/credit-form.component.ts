import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TableService } from '../table.service';
import { Data } from '../app.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppService } from '../app.service';

@Component({
  selector: 'app-result-dialog',
  template: 'Mensualités : {{data.result}}',
})
export class ResultDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.css']
})
export class CreditFormComponent implements OnInit {
  public formGroup : FormGroup;
  public hidden: boolean = true;
  public result: number;
  public data: Data[] = [];

  constructor(private fb: FormBuilder, private ts: TableService, private service: AppService, private dialog: MatDialog){
    this.formGroup = this.fb.group({
        prix : [600000, Validators.compose([Validators.pattern('^(0|[1-9][0-9]*)$' ), Validators.required])],
        apport: [250000, Validators.required],
        taux: [1.9, Validators.required],
        duree: [25, Validators.required]
    })
  }

  ngOnInit() {
    this.service.loadData().subscribe((data : Data[]) => {
      this.data = data;
      const lastData = data[data.length-1];
      const lastFormData = {
        prix: lastData.prix,
        apport: lastData.apport,
        taux: lastData.taux,
        duree: lastData.duree/12
      };
      this.formGroup.setValue(lastFormData);
      this.ts.addData(data.reverse());
    });
  }

  private value(name: string): number {
    return this.formGroup.value[name];
  }

  public hasError(name: string) : string {
     return this.formGroup.controls[name].invalid ? 'has-error' : '';
  }

  public validate(){
    this.compute();
    this.openDialog();
    this.hidden = false;
  }

  public compute(){
    console.log('formValid', this.formGroup.valid);
    const txMens = (this.value('taux') / 100 /12);
    const duration = this.value('duree') *12;
    const amount = this.value('prix') - this.value('apport');
    this.result = (amount * txMens)/(1-Math.pow(1 + txMens,-duration));
    this.result = Math.round(this.result*100)/100;
    console.log('compute = ' + this.result);
    const newEntry : Data ={
      'prix': this.value('prix'),
      'apport': this.value('apport'),
      'duree': duration,
      'taux': this.value('taux'),
      'mensualite': this.result
    };
    this.data = [newEntry, ...this.data];
    this.ts.addData(this.data);
    this.service.save(newEntry).subscribe(_ => console.log("posted", newEntry) );
  }

  private openDialog(): void {
   let dialogRef = this.dialog.open(ResultDialogComponent, {
     width: '250px',
     height: '100px',
     data: { result: this.result }
   });
    setTimeout(_ => dialogRef.close(),2000);
  }
}
