import { Component, OnInit } from '@angular/core';
import { Indication } from 'src/app/models/indication.model';
import { IndicationService } from 'src/app/services/indication.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {
  indications?: Indication[]
  currentIndication: Indication = {};
  currentIndex = -1;

  submitted = false;
  message = '';

  constructor(private indicationService: IndicationService) { }

  ngOnInit(): void {
    this.retrieveIndications();
    setTimeout(() => {
      this.submitted = false;
    }, 5000);
  }

  retrieveIndications(): void {
    this.indicationService.getAll()
      .subscribe((any) => {
        this.indications = any.data.indications;
        console.log(any.data.indications);
      });
  }

  refreshList(): void {
    this.retrieveIndications();
    this.currentIndication = {};
    this.currentIndex = -1;
  }

  updateStatus(id: string, statusId?: number): void {
    if(statusId !== 3) {
      this.indicationService.updateStatus(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.mensagem;
          this.submitted = true;
          this.ngOnInit();
        }
      })
    } 
  }

  deleteIndication(id: string, statusId?: number): void {
    if(statusId !== 2) {
      this.indicationService.deleteIndication(id)
      .subscribe({
        next: (res) => {
          this.message = res.mensagem;
          this.submitted = true;
          this.ngOnInit();
        }
      })
    } 
  }

  setActiveIndication(indication: Indication, index: number): void {
    this.currentIndication = indication;
    this.currentIndex = index;
  }

}
