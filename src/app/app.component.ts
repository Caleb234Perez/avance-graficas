import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import {Chart} from 'chart.js/auto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy{
  title = 'apitarget';
   grafica: Chart | null = null;
  @ViewChild('marimekkoChart', { static: true }) chartCanvas!: ElementRef;
  ngAfterViewInit() {
    
  }
 
  generarGrafica(){
  const canvas = document.getElementById('marimekkoChart') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
   this.borrarLienzo(canvas, ctx);

  const data = {
    labels: ['Category 1'],
    datasets: [
      {
        label: 'Subcategory 1',
        data: [Math.random()*100],
        backgroundColor: 'rgba(255, 192, 203, 0.7)',
        borderWidth: 1
      },
      {
        label: 'Subcategory 2',
        data: [Math.random()*100],
        backgroundColor: 'rgba(173, 216, 230, 0.7)',
        borderWidth: 1
      },
      {
        label: 'Subcategory 3',
        data: [Math.random()*100],
        backgroundColor: 'rgba(152, 251, 152, 0.7)',
        borderWidth: 1
      },
      {
      label: 'Subcategory 4',
      data: [Math.random()*100],
      backgroundColor: 'rgba(255, 215, 0, 0.7)',
      borderWidth: 1
      }
    ]
  };

  const options = {
    indexAxis: 'y',
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  };
   this.grafica = new Chart(ctx, {
    type: 'bar',
    data: data,
  });
  
    
}
 borrarLienzo(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (this.grafica) {
      this.grafica.destroy();
      this.grafica = null;
    }
  }
ngOnDestroy() {
  this.generarGrafica;

}
}
