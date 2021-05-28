import { Component, OnInit } from '@angular/core';
import {ExercisesService} from '../../services/exercises.service';
import {PoGaugeRanges} from '@po-ui/ng-components/lib/components/po-gauge/interfaces/po-gauge-ranges.interface';

@Component({
  selector: 'app-hour-grade',
  templateUrl: './hour-grade.component.html',
  styleUrls: ['./hour-grade.component.scss']
})
export class HourGradeComponent implements OnInit {

  itemsTable: any[];
  capacity: Array<PoGaugeRanges>;

  constructor(
    private exercisesService: ExercisesService
  ) { }

  ngOnInit(): void {
    this.setItemsTable();
    this.setGauge();
  }

  setItemsTable(): void {
    this.exercisesService.getAll().subscribe(items => {
      this.itemsTable = items;
    });
  }

  setGauge(): void {
    this.capacity = [
      { from: 0, to: 50, label: 'Baixo', color: '#00b28e' },
      { from: 50, to: 75, label: 'Médio', color: '#ea9b3e' },
      { from: 75, to: 100, label: 'Lotado', color: '#c64840' }
    ];
  }
}
