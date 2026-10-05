import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-card',
  standalone: true,
  imports: [],
  templateUrl: './price-card.html',
  styleUrl: './price-card.css'
})
export class PriceCardComponent {
  @Input() karat: string = '';
  @Input() price: number = 0;
  @Input() unit: string = '';
}
