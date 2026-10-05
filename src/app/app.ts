import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { PriceCardComponent } from './components/price-card/price-card';
import { CalculatorComponent } from './components/calculator/calculator';
import { TrendChartComponent } from './components/trend-chart/trend-chart';
import { HistoryTableComponent } from './components/history-table/history-table';
import { FooterComponent } from './components/footer/footer';
import { GoldDataService, KaratPrice } from './services/gold-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    PriceCardComponent,
    CalculatorComponent,
    TrendChartComponent,
    HistoryTableComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  todayPrices: KaratPrice[] = [];

  constructor(private goldService: GoldDataService) {
    this.todayPrices = this.goldService.getTodayPrices();
  }
}
