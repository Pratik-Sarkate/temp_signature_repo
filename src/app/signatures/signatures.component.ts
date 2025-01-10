import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-signatures',
  standalone: true, // Mark this component as standalone
  imports: [CommonModule, MatIconModule], // Import CommonModule here
  templateUrl: './signatures.component.html',
  styleUrls: ['./signatures.component.css']
})
export class SignaturesComponent {
  @ViewChildren('nameInput') nameInputs!: QueryList<ElementRef>;
  // signatures = new Array(9).fill(null); // Creates 9 placeholder signatures
  signatures = [
    { name: 'Monica Jacobs', isEditing: false },
    { name: 'John Doe', isEditing: false },
    { name: 'Jane Smith', isEditing: false },
    { name: 'Alex Johnson', isEditing: false },
    { name: 'Megan Williams', isEditing: false },
    { name: 'Chris Brown', isEditing: false },
    { name: 'Samantha Davis', isEditing: false },
    { name: 'Michael Wilson', isEditing: false },
    { name: 'Jessica Lee', isEditing: false }
  ];

  constructor(
    public router: Router,
  ){}

  onClickDelete(index: number): void {
    console.log(`Delete button clicked for signature at index ${index}`);
    this.signatures.splice(index, 1);
  }

  onClickEdit(index: number): void {
    console.log(`Edit button clicked for signature at index ${index}`);
    this.signatures.forEach(signature => (signature.isEditing = false));
    this.signatures[index].isEditing = true;

    setTimeout(() => {
      const inputElement = this.nameInputs.toArray()[index]?.nativeElement;
      if (inputElement) {
        inputElement.focus();

        const length = inputElement.value.length;
        inputElement.setSelectionRange(length, length);
      }
    },500);
  }

  onSaveName(event: any, index: number): void {
    const updatedName = event.target.value.trim();
    if (updatedName) {
      this.signatures[index].name = updatedName;
    }
    this.signatures[index].isEditing = false;
  }
}
