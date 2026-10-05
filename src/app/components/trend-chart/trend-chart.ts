import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoldDataService } from '../../services/gold-data';

@Component({
  selector: 'app-trend-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trend-chart.html',
  styleUrl: './trend-chart.css'
})
export class TrendChartComponent implements OnInit {
  selectedKarat: string = '21K';
  karats: string[] = ['18K', '21K', '22K', '24K'];
  history: any[] = [];
  prices: number[] = [];
  currentPrice: number = 0;
  highestPrice: number = 0;
  lowestPrice: number = 0;
  previousPrice: number = 0;
  change: number = 0;
  svgPoints: string = '';

  constructor(private goldService: GoldDataService) {}

  ngOnInit() {
    this.history = this.goldService.getHistory();
    this.updateChart();
  }

  selectKarat(k: string) {
    this.selectedKarat = k;
    this.updateChart();
  }

  updateChart() {
    const key = 'k' + this.selectedKarat.replace('K', '');
    this.prices = this.history.map(h => h[key]);
    this.currentPrice = this.prices[this.prices.length - 1];
    this.highestPrice = Math.max(...this.prices);
    this.lowestPrice = Math.min(...this.prices);
    this.previousPrice = this.prices[this.prices.length - 2];
    this.change = +(this.currentPrice - this.previousPrice).toFixed(2);

    const max = this.highestPrice;
    const min = this.lowestPrice;
    const range = max - min || 1;
    const width = 600;
    const height = 200;
    const stepX = width / (this.prices.length - 1);

    this.svgPoints = this.prices.map((p, i) => {
      const x = i * stepX;
      const y = height - ((p - min) / range) * height;
      return `${x},${y}`;
    }).join(' ');
  }
}