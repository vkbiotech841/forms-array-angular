import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'replicate-forms-angular';

  public items: FormArray;
  public orderForm: FormGroup;
  public name: FormControl;
  public description: FormControl;
  public price: FormControl;

  public finalFormValue: any[] = [];


  constructor(
    private formBuilder: FormBuilder
  ) { }


  ngOnInit() {
    this.initialFormsArray();
  }

  public initialFormsArray(): void {
    this.orderForm = new FormGroup({ items: new FormArray([]) });
  }


  public createFormGroupData(): FormGroup {
    this.name = new FormControl("", []);
    this.description = new FormControl("", []);
    this.price = new FormControl("", []);

    return this.formBuilder.group({
      name: this.name,
      description: this.description,
      price: this.price
    });
  };


  public addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createFormGroupData());
    console.log("items of single form group", this.items.value);
  };

  public removeItem(index: number): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.removeAt(index);
  };


  public getFormValue(): void {
    this.finalFormValue = this.orderForm.value.items
    console.log("finalFormValue", this.finalFormValue);
    console.log("finalFormValue", this.orderForm.value);
  };

}
