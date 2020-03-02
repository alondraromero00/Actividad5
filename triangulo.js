function obtenerArea(){
    // var areaResultado = document.getElementById("areaResultado");
    

    var b = parseInt(document.getElementById("base").value);
    var h = parseInt(document.getElementById("altura").value);
    
    if( !b )
    {   
        alert("Por favor ingresa la Base");
        return false;
    }
    if( !h)
    {   
        alert("Por favor ingresa la Altura");
        return false;
    }

    var area = (b * h) / 2;
    var perimetro = (b * 3);
    
    // areaResultado.innerHTML = "" + area;
    // perimetroResultado.innerHTML = "" + perimetro;

    document.getElementById("areaResultado").innerHTML = area;  
    document.getElementById("perimetroResultado").innerHTML = perimetro;

    alert("Perimetro y area calcuada correctamente")

    document.getElementById("base").value = "";
    
    document.getElementById("altura").value = "";
    
}