import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  productos: IProductos[];
  proveedores: Iproveedor[];
  stocks: Stock[];
  constructor(
    //private chartsData: DashboardChartsData,
    private productosServicio: ProductosService, private proveedorServicio: ProveedoresService, private stocksServicio: StocksService
  ) {}
  
  ngOnInit(): void {
    this.carlista();
    this.carlistaProveedor();
    this.carlistaStock();
    //this.initCharts();
  }
  private carlista() {
    this.productosServicio.todos().subscribe((data) => {
      console.log(data);
      this.productos = data;
    });
  }

  private carlistaProveedor() {
    this.proveedorServicio.todos().subscribe((data) => {
      console.log(data);
      this.proveedores = data;
    });
  }

  private carlistaStock() {
    this.stocksServicio.todos().subscribe((data) => {
      console.log(data);
      this.stocks = data;
    });
  }
}
