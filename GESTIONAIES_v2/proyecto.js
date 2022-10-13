class Proyecto{
    constructor(idProyecto,idCliente,nombre,fechaInicio,fechaFin,Descripcion,estado,imagen){
        this.idProyecto=idProyecto || "SIN ID PROYECTO";
        this.idCliente=idCliente || "SIN ID CLIENTE";
        this.nombre=nombre || "SIN NOMBRE";
        this.fechaInicio=fechaInicio || new Date();

        if(fechaFin){
            this.fechaFin=fechaFin
        }else{
            this.fechaFin= new Date();
            this.fechaFin.setDate(5+this.fechaFin.getDate());
        }
        
        this.Descripcion=Descripcion || "";
        this.estado=estado || "Previo";
        this.imagen=imagen;

         
        }
        cambiarEstado(nuevoEstado){
            this.estado=nuevoEstado;
        }
        mostrarfechaInicio(){
            return this.fechaInicio.getDay()+"/"+
            (this.fechaInicio.getMonth()+1)+"/"+
            this.fechaInicio.getFullYear();
        }
        mostrarfechaFin(){
            return this.fechaFin.getDay()+"/"+
            (this.fechaFin.getMonth()+1)+"/"+
            this.fechaFin.getFullYear();
        }
}



    
   

