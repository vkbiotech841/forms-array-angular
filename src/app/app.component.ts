import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'replicate-forms-angular';

  items: FormArray;
  orderForm: FormGroup;
  name: FormControl;
  description: FormControl;
  price: FormControl;

  finalFormValue: any[] = [];


  constructor(
    private formBuilder: FormBuilder
  ) { }


  ngOnInit() {
    this.initialFormsArray();
  }

  initialFormsArray() {
    this.orderForm = new FormGroup({ items: new FormArray([]) });
  }


  createFormGroupData(): FormGroup {
    this.name = new FormControl("", []);
    this.description = new FormControl("", []);
    this.price = new FormControl("", []);

    return this.formBuilder.group({
      name: this.name,
      description: this.description,
      price: this.price
    });
  };


  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createFormGroupData());

    // console.log("items of single form group", this.items.controls[0].value,);
    console.log("items of single form group", this.items.value);
  };

  removeItem(index: number) {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.removeAt(index);
  };


  getFormValue() {
    this.finalFormValue = this.orderForm.value.items
    console.log("finalFormValue", this.orderForm.value.items,);
  };

}
