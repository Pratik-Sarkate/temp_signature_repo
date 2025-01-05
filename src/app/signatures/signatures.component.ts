import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signatures',
  standalone: true, // Mark this component as standalone
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './signatures.component.html',
  styleUrls: ['./signatures.component.css']
})
export class SignaturesComponent {
  signatures = new Array(9).fill(null); // Creates 9 placeholder signatures
}
