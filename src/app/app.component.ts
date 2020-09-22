import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
// tslint:disable-next-line: quotemark
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chartsPDF';

  canvas1: any;
  ctx1: any;
  canvas2: any;
  ctx2: any;
  chart1JSON = {
    type: 'bar',
    data: {
      labels: ['USA', 'Spain', 'Italy', 'France', 'Germany', 'UK', 'Turkey', 'Iran', 'China',
        'Russia', 'Brazil', 'Belgium', 'Canada', 'Netherlands', 'Switzerland'],
      datasets: [{
        label: 'Total cases.',
        data: [886789, 213024, 189973, 158183, 153129, 138078, 101790, 87026, 82804, 62773, 50036, 42797,
          42110, 35729, 28496],
        backgroundColor: ['red', , , , , , , , 'orange'],
        borderWidth: 1
      }]
    },
    options: {
      legend: {
        display: false
      },
      responsive: false,
      display: true
    }
  };

  chart2JSON = {
    type: 'bar',
    data: {
      labels: ['USA', 'Spain', 'Italy', 'France', 'Germany', 'UK', 'Turkey', 'Iran', 'China',
        'Russia', 'Brazil', 'Belgium', 'Canada', 'Netherlands', 'Switzerland'],
      datasets: [{
        label: 'Total cases.',
        data: [886789, 213024, 189973, 158183, 153129, 138078, 101790, 87026, 82804, 62773, 50036, 42797,
          42110, 35729, 28496],
        backgroundColor: ['red', , , , , , , , 'orange'],
        borderWidth: 1
      }]
    },
    options: {
      legend: {
        display: false
      },
      responsive: false,
      display: true
    }
  };

constructor() {}
ngOnInit(): void {
  this.canvas1 = document.getElementById('chart1');
  this.canvas2 = document.getElementById('chart2');
  this.ctx1 = this.canvas1.getContext('2d');
  this.ctx2 = this.canvas2.getContext('2d');
  const myChart1 = new Chart(this.ctx1, this.chart1JSON);
  const myChart2 = new Chart(this.ctx2, this.chart2JSON);
  
}
  
  exportToPDF()
  {
    
    const doc = new jsPDF();    
    let canvasElementsArray = document.getElementsByTagName('canvas')
    for (let i = 0; i < canvasElementsArray.length; i++)
    {
      let y = 10;
      doc.text("chart" + " " + i, 10, i*100+y*i+10);
      doc.addImage(canvasElementsArray[i], "PNG", 10, i*100+y*i+20, 200, 100);
      
      }
   
    doc.save("charts.pdf")

  }

}

