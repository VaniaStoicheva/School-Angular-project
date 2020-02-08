import { Component, OnInit } from '@angular/core';
import { ICause } from 'src/app/shared/interfaces/cause';
import { CausesService } from '../causes.service';

@Component({
  selector: 'app-cause-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  get causes(){ return this.causesCervice.causes; };

  constructor(private causesCervice:CausesService) { 
    
  }

  ngOnInit() {
   this.causesCervice.loadCauses();
  }
  selectCauseHandler( cause:ICause ){
    this.causesCervice.selectedCause=cause;
  }

}
