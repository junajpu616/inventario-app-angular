import { Component } from '@angular/core';
import { ProductoLista } from "./producto-lista/producto-lista";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [ProductoLista]
})
export class App {
  protected title = 'inventario-app';
}
