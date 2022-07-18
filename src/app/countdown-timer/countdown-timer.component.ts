import {Component, Input, OnInit} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit{
  @Input()time : any;
  interval :any;
  temp:any;

  load(){
    if (this.time!=0){
      this.interval=setInterval(()=>{
        this.time=+this.time-1;
        if (this.time=0){
          clearInterval(this.interval)
        }
      },200,)
    }
  }
  stop() {
    clearInterval(this.interval)
  }
  reset(){
    this.time=this.temp
  }



  constructor() { }

  ngOnInit(): void {
    this.time=this.temp
  }

}
