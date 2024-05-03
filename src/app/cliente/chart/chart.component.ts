import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ChartService } from './chart.service';


@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit {

  data: any;
  dataidcliente: any[] = [];
  datacantidadpedidos: any[] = [];
  dataidpedido: any[] = [];
  datafechapedido: any[] = [];
  datatotal: any[] = [];


  constructor(private chartService: ChartService) {

  }


  ngOnInit() {
    this.chartService.getCantPedByCli('ventas/charts/getCantPedByCli.php').subscribe(resp => {
      this.data = resp.document; // Accede al array 'document' dentro del objeto de respuesta
      console.log(this.data);
      if (this.data != null) {
        for (let i = 0; i < this.data.length; i++) {
          this.dataidcliente.push(this.data[i].id_cliente);
          this.datacantidadpedidos.push(this.data[i].cantidad_pedidos);
        }
      }
      this.showchartData(this.dataidcliente, this.datacantidadpedidos);
    });


  }

  showchartData(dataidcliente: any, datacantidadpedidos: any) {
    // Mostrar solo los primeros 5 elementos

    // Array de colores
    let colors = ['red', 'blue', 'green', 'yellow', 'purple'];

    console.log(dataidcliente);
    new Chart("myChart", {
      type: 'bar',
      data: {
        labels: dataidcliente,
        datasets: [{
          label: 'Ventas totales por mes',
          data: datacantidadpedidos,
          backgroundColor: colors, // Asigna los colores a las barras
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }




}


