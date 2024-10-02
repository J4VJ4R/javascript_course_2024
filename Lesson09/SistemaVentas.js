class Producto{
  static contadorProducto = 0;
  constructor(nombre, precio ){
    this._idProducto = ++Producto.contadorProducto;
    this._nombre = nombre;
    this._precio = precio;
  }
  get idProducto(){
    return this._idProducto;
  }
  get nombre(){
    return this._nombre;
  }  
  set nombre(nombre){
    this._nombre = nombre;
  }
  get precio(){
    return this._precio;
  }
  set precio(precio){
    this._precio = precio;
  }
  toString(){
    return `idProducto: ${this._idProducto} nombre: ${this._nombre} precio: ${this._precio}`
  }
}
//ordenes
class Orden{
  static contadorOrden = 0;
  static get MAX_PRODUCTOS(){
    return 5;
  }
  constructor(){
    this._idOrden = ++Orden.contadorOrden;
    this._productos = [];
    this._contadorProductosAgregados = 0;
  }

  get idOrden(){
    return this._idOrden;
  }
  agregarProducto(producto){
    if(this._productos.length < Orden.MAX_PRODUCTOS){
      this._productos.push(producto);
    }else{
      console.log("Productos máximos superados...");
    }
  }
  calcularTotal(){
    let totalVenta = 0;
    for(let producto of this._productos){
      totalVenta += producto.precio;
    }
    return totalVenta;
  }
  mostrarOrden(){
    let verProductos = '';
    for(let producto of this._productos){
      verProductos += '\n{' + producto.toString() + '}';
    }
    console.log(`idOrden: ${this._idOrden} Total: ${this.calcularTotal()} Productos: ${this.verProductos}`)
  }
}

producto1 = new Producto('Pantalón', 2000);
producto2 = new Producto('Camisa', 3000);
producto3 = new Producto('Cinturon', 3000);
producto4 = new Producto('Camiseta', 3000);
producto5 = new Producto('Camison', 3000);
producto6 = new Producto('Bufanda', 3000);
console.log(producto1.toString());
console.log(producto2.toString());
console.log(producto3.toString());
console.log(producto4.toString());
console.log(producto5.toString());
console.log(producto6.toString());

orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);
orden1.agregarProducto(producto5);
orden1.agregarProducto(producto6);
orden1.agregarProducto(producto7);

orden1.mostrarOrden()
