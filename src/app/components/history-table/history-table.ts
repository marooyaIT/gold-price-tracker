import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoldDataService } from '../../services/gold-data';

@Component({
  selector: 'app-history-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-table.html',
  styleUrl: './history-table.css'
})
export class HistoryTableComponent implements OnInit {
  history: any[] = [];

  constructor(private goldService: GoldDataService) {}

  ngOnInit() {
    this.history = this.goldService.getHistory();
  }
}