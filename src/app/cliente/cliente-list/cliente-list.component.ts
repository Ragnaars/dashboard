import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { PedidosService } from './pedidos.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';



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
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './cliente-list.component.html',
  styleUrl: './cliente-list.component.scss'
})
export class ClienteListComponent implements OnInit {
  displayedColumns: string[] = ['id_pedido', 'id_cliente', 'fecha_pedido', 'total'];

  dataSource = new MatTableDataSource<PedidoElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private pedidosService: PedidosService) {

  }

  ngOnInit() {
    this.getPedidos();
  }

  getPedidos() {
    this.pedidosService.getMethod('ventas/getPedidos.php')
      .subscribe(resp => {

        this.dataSource = new MatTableDataSource<PedidoElement>(resp.document);
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource);
      });
  }

}
