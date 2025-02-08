import { Component } from '@angular/core';

@Component({
  selector: 'app-protfolio',
  imports: [],
  templateUrl: './protfolio.component.html',
  styleUrl: './protfolio.component.css'
})
export class ProtfolioComponent {

isHeaden: boolean=true;

imgSrcs:string [] =[
  './imges/poert1.png',
  './imges/port2.png',
  './imges/port3.png',
  './imges/port2.png',
  './imges/port3.png',
  './imges/poert1.png'
]
modelImg:string ='';


hideModel ( eleTarget:EventTarget |null , imgRef:HTMLImageElement):void{
if (eleTarget == imgRef){
  return;

}else{
  this.isHeaden = true;
}
}



}





