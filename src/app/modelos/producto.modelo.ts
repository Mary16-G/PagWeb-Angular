export interface Producto {
    Afeccion: string[];
    Categoria: {
      IdCategoria: string;
      Nombre: string;
    };
    Color: string;
    Costo: number;
    Descripcion: string[];
    Estilo: string;
    Forma: string;
    Foto: string;
    Marca: number;
    Material: string[];
    Medida: string;
    Nombre: string;
    Origen: string;
    Porcentaje_agua: string;
    Precio: number;
    Status: string;
    Tipo: string;
    TipodeArmazon: string;
    Uso: string;
    _id: string;
    cantidad_existente: number;
    fechaAdq: string;
    fechaRegistro: string;
    idProducto: number;
    imagen: string;
    provId: number;
  }
  