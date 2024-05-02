import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { PedidosService } from '../cliente-list/pedidos.service';


@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit {

  data: any;
  dataidcliente: any[]=[];
  dataidpedido: any[]=[];
  datafechapedido: any[]=[];
  datatotal: any[]=[];


  constructor(private pedidosService: PedidosService) {

  }


  ngOnInit() {
    this.pedidosService.getMethod('ventas/getPedidos.php').subscribe(resp => {
      this.data = resp.document; // Accede al array 'document' dentro del objeto de respuesta
      console.log(this.data);
      if (this.data != null) {
        for (let i = 0; i < this.data.length; i++) {
          this.dataidpedido.push(this.data[i].id_pedido);
          this.dataidcliente.push(this.data[i].id_cliente);
          this.datafechapedido.push(this.data[i].fecha_pedido);
          this.datatotal.push(this.data[i].total);
        }
      }
      this.showchartData(this.dataidcliente, this.dataidpedido, this.datafechapedido, this.datatotal);
    });
    
    
  }

  showchartData(dataidpedido: any, dataidproducto: any, datafechapedido: any, datatotal: any){
    // Mostrar solo los primeros 5 elementos
    let labels = datafechapedido.slice(0, 5);
    let data = datatotal.slice(0, 5);
  
    // Array de colores
    let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
  
    console.log(dataidpedido);
    new Chart("myChart", {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Ventas totales por mes',
          data: data,
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


