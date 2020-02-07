import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CausesService } from 'src/app/causes.service';
import { ICause } from 'src/app/shared/interfaces/cause';

@Component({
  selector: 'app-cause-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @ViewChild('amountInput', {static:false}) amountInput: ElementRef<HTMLInputElement>; 

  @Input() selectedCause2: ICause;

  get selectedCause(){ return this.causesCervice.selectedCause; }

  get color(){
    if(this.selectedCause.collectedAmount>=this.selectedCause.neededAmount){
      return 'green';
    }
    if(this.selectedCause.collectedAmount<2*(this.selectedCause.neededAmount/3) &&
    this.selectedCause.collectedAmount>(this.selectedCause.neededAmount/3)){
      return 'yellow';
    }
    return 'red';
  }

  constructor(private causesCervice:CausesService) { 
    
  }

  ngOnInit() {
  }

  makeDonationhandler(amountInput:HTMLInputElement){
    this.causesCervice.donate(+this.amountInput.nativeElement.value)
    /* .subscribe(()=>{
      this.causesCervice.loadCauses();
    this.amountInput.nativeElement.value='';
    }) */
    
}

}
