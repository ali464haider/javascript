class Empleado{
    constructor(nombre,apellido,id,salario,nrodep){
        this.nombre=nombre || "sin nombre";
        this.apellido=apellido || "sin apellido";
        this.id=id || "sin id";
        this.salario =salario || "sin salario";
        this.nrodep=nrodep || "sin departamento";
    }

    updateSalario(nuevoSalario){
        this.salario=nuevoSalario;
    }
    cambiarDepartamento(nuevoDepartamento){
        this.nrodep=nuevoDepartamento;
    }
}

