import { CommonModule, NgFor } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'app-fee',
    standalone: true,
    imports: [ReactiveFormsModule, NgFor, CommonModule],
    templateUrl: './fee.component.html',
    styleUrl: './fee.component.scss'
})
export class FeeComponent implements OnInit {

    constructor(private fb: FormBuilder) {}
    feeForm!: FormGroup;

    data = [
        { id: 1, name: 'Ali' },
        { id: 2, name: 'Naeem' },
    ]

    ngOnInit(): void {
        this.feeForm = this.fb.group({
            Name: new FormControl('Ali'),
            Hours: new FormControl(4),
            Rate: new FormControl(20),
            Total: new FormControl(),
            Discount: new FormControl(),
            GrandTotal: new FormControl()
        });
        this.feeForm.get('Hours')?.valueChanges.subscribe( val => {
            this.updateTotal();
        })
        this.feeForm.get('Rate')?.valueChanges.subscribe( val => {
            this.updateTotal();
        })
        this.feeForm.get('Discount')?.valueChanges.subscribe(val => {
            this.calculateGrandTotal()
        })
        this.updateTotal();
    }

    updateTotal() {
        const hours = this.feeForm.get('Hours')?.value;
        const rate = this.feeForm.get('Rate')?.value;
        this.feeForm.get('Total')?.patchValue(Math.floor(hours * rate).toFixed(2));
        this.calculateGrandTotal();
    }

    calculateGrandTotal() {
        const discountPercentage = this.feeForm.get('Discount')?.value;
        const total = this.feeForm.get('Total')?.value;
        const grandTotal = Math.floor(total - (discountPercentage * 100/total)).toFixed(2);
        this.feeForm.get('GrandTotal')?.patchValue(grandTotal);
    }



}