import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'replicate-forms-angular';

  orderForm: FormGroup;
  items: FormArray;

  constructor(
    private formBuilder: FormBuilder
  ) { }


  ngOnInit() {
    this.orderForm = new FormGroup({
      items: new FormArray([])
    });
  }



  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  };


  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  };

}
