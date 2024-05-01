import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { PedidosService } from './pedidos.service';

export interface PedidoElement {
  id_pedido: number;
  id_cliente: number;
  fecha_pedido: string;
  total: number;
}

const ELEMENT_DATA: PedidoElement[] = [];

@Component({
  selector: 'app-cliente-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './cliente-list.component.html',
  styleUrl: './cliente-list.component.scss'
})
export class ClienteListComponent implements OnInit {
  displayedColumns: string[] = ['id_pedido', 'id_cliente', 'fecha_pedido', 'total'];
  dataSource = ELEMENT_DATA;

  constructor(private pedidosService: PedidosService) {

  }

  ngOnInit() {
    this.getPedidos();
  }

  getPedidos() {
    this.pedidosService.getMethod('ventas/getPedidos.php')
      .subscribe(resp => {

        this.dataSource = resp.document;
        console.log(this.dataSource);
      });
  }

}
