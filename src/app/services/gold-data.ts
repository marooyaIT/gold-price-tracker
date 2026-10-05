import { Injectable } from '@angular/core';

export interface KaratPrice {
  karat: string;
  price: number;
  unit: string;
}

export interface HistoryEntry {
  date: string;
  k18: number;
  k21: number;
  k22: number;
  k24: number;
}

@Injectable({
  providedIn: 'root'
})
export class GoldDataService {

  // أسعار اليوم
  todayPrices: KaratPrice[] = [
    { karat: '18K', price: 25.5, unit: 'ر.ع/جرام' },
    { karat: '21K', price: 29.8, unit: 'ر.ع/جرام' },
    { karat: '22K', price: 31.2, unit: 'ر.ع/جرام' },
    { karat: '24K', price: 34.0, unit: 'ر.ع/جرام' },
  ];

  // سجل 30 يوم (بيانات تجريبية)
  history: HistoryEntry[] = this.generateHistory();

  private generateHistory(): HistoryEntry[] {
    const data: HistoryEntry[] = [];
    const today = new Date();
    for (let i = 29; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const base = 25 + Math.random() * 10;
      data.push({
        date: d.toISOString().split('T')[0],
        k18: +base.toFixed(2),
        k21: +(base * 1.15).toFixed(2),
        k22: +(base * 1.2).toFixed(2),
        k24: +(base * 1.3).toFixed(2),
      });
    }
    return data;
  }

  getTodayPrices(): KaratPrice[] {
    return this.todayPrices;
  }

  getHistory(): HistoryEntry[] {
    return this.history;
  }

  calculatePrice(karat: string, weight: number): number {
    const item = this.todayPrices.find(p => p.karat === karat);
    if (!item) return 0;
    return +(item.price * weight).toFixed(2);
  }
}