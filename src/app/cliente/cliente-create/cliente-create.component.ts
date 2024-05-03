import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { PedidosService } from '../cliente-create/pedidos.service';

@Component({
  selector: 'app-cliente-create',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './cliente-create.component.html',
  styleUrl: './cliente-create.component.scss'
})
export class ClienteCreateComponent {

  pedidos: any = {
    id_cliente: '',
    fecha_pedido: '',
    total: ''
  }

  data : any 

  constructor(private pedidosSerice: PedidosService) { }


  altaPedidos() {
    console.log(this.pedidos)
    let formData = new FormData();
    formData.append('id_cliente', this.pedidos.id_cliente);
    formData.append('fecha_pedido', this.pedidos.fecha_pedido);
    formData.append('total', this.pedidos.total);

    this.pedidosSerice.postMethod('ventas/crearPedido.php', formData)
      .subscribe((res: any) => {
        console.log(res);
      }, (err: any) => {
        console.log("error", err);
      })


  }
}
