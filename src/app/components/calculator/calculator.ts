import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoldDataService } from '../../services/gold-data';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class CalculatorComponent {
  selectedKarat: string = '21K';
  weight: number = 0;
  result: number | null = null;
  karats: string[] = ['18K', '21K', '22K', '24K'];

  constructor(private goldService: GoldDataService) {}

  calculate() {
    if (this.weight > 0) {
      this.result = this.goldService.calculatePrice(this.selectedKarat, this.weight);
    }
  }
}