//Elementos1
const txtFuncion = document.getElementById("txtFuncion");
const txtX = document.getElementById("txtX");

const cbOrden = document.getElementById("cbOrden");
const btnCalcular = document.getElementById("btnCalcular");

//ELEMENTOS 2
const txtX0 = document.getElementById("txtx0");
const txtX1 = document.getElementById("txtx1");
const txtX2 = document.getElementById("txtx2");


//Resultados
const pConfirmacion = document.getElementById("confirmacion");
const lblResultFx = document.getElementById("ResultFx");

const lblPasos0 = document.getElementById("PasosX0");
const lblX0 = document.getElementById("X0");
const lblFx0 = document.getElementById("Fx0");

const lblPasos1 = document.getElementById("PasosX1");
const lblX1 = document.getElementById("X1");
const lblFx1 = document.getElementById("Fx1");

const lblPasos2 = document.getElementById("PasosX2");
const lblX2 = document.getElementById("X2");
const lblFx2 = document.getElementById("Fx2");

//const lblReultados = document.getElementById("Resultados");

btnCalcular.addEventListener('click', Ini)

/*
var xAnt = 0;
var xAct = 0;
var eA = 0;
var expo = 0;
var euler = 0; */

var ecuacionOriginal = "", ecuacionModificada = "";
var xp, fx;
var Xs;


const x = 0, x0 = 0, x1 = 0, x2 = 0;
var fx0,fx1,fx2, Result;

var Bandera;

function Ini(){
    try
    {
        Convertir();
    }
    catch (error)
    {
        pConfirmacion.innerText = "Error Chavalon";
    }

}

function Convertir(){
    try
    {
         x = parseFloat(txtX.Text);

        if (cbOrden == "Orden 1") //Orden 1
        {
             x0 = toDoube(txtX0.Text);
             x1 = parseFloat(txtX1.Text);
            
        }
        else //Orden 2
        {
             x0 = parseFloat(txtX0.Text);
             x1 = parseFloat(txtX1.Text);
             x2 = parseFloat(txtX2.Text);
        }


        Condicion();
    }
    catch (error)
    {
        pConfirmacion.innerText = "Error al convertir";
     //   MessageBox.Show("Error al convertir");
    }
}

function Condicion(){ 

    if (cbOrden == "Orden 1") //Orden 1
    {
        if (x0 < x && x1 > x)
        {
            Bandera = 1;
            Calcular();
        }
        else
        {
            pConfirmacion.innerText = "Los valores de x0 y x1, deben ser menor y mayor a x en ese orden";
            //MessageBox.Show("Los valores de x0 y x1, deben ser menor y mayor a x en ese orden");
        }
    }
    else //Orden2
    {
        if (x0 < x && x1 < x && x2 > x || x0 < x && x1 > x && x2 > x)
        {
            Bandera = 2;
            Calcular();
        }
        else
        {
            pConfirmacion.innerText = "Los valores de x0,x1,x2. Deben rodear al valor de x";
            //MessageBox.Show("Los valores de x0,x1,x2. Deben rodear al valor de x");
        }
    }
}

function Calcular(){
    // int a;
    switch (Bandera)
    {
        case 1:
           // a = 3;
            Orden1();
            break;
        case 2:
            //a = 4;
            Orden2();
            break;

    }
}

function Orden1(){
    
    for (var i = 0; i < 2; i++)
    {
        if (i == 0)
        {
            Xs = x0.toString();
           // Xs = System.Convert.ToString(x0);

            fx0 = parseFloat(Asignar());
           // fx0 = System.Convert.ToDouble(Asignar()); //x actual

            lblPasos0.innerText = i;
            lblX0.innerText = x0;
            lblFx0 = fx0;
            //sdataGridView1.Rows.Add(i,x0,fx0); //FALTA
        }
        else //i = 1
        {
            Xs = x1.toString();
          //  Xs = System.Convert.ToString(x1);

            fx1 = parseFloat(Asignar());
            //fx1 = System.Convert.ToDouble(Asignar()); //x actual

            lblPasos1.innerText = i;
            lblX1.innerText = x1;
            lblFx1.innerText = fx1;
            //dataGridView1.Rows.Add(i, x1, fx1); //FALTA
        }
        
    }

    Result = ((x - x1) / (x0 - x1)) * fx0 + ((x - x0) / (x1 - x0)) * fx1;

        lblResultFx.innerText = Result;
}


function Orden2() //Hasta aqui me quede
{
            for (var i = 0; i < 3; i++)
            {
                if (i == 0)
                {
                    
                    Xs = x0.toString();
         
                    fx0 = parseFloat(Asignar());
         
                    lblPasos0.innerText = i;
                    lblX0.innerText = x0;
                    lblFx0 = fx0;




                  /*  Xs = System.Convert.ToString(x0);

                    fx0 = System.Convert.ToDouble(Asignar()); //x actual
                    
                    dataGridView1.Rows.Add(i, x0, fx0); */
                }
                else if(i == 1)
                {

                    Xs = x1.toString();
          
                    fx1 = parseFloat(Asignar());
          
                    lblPasos1.innerText = i;
                    lblX1.innerText = x1;
                    lblFx1.innerText = fx1;


                   /* Xs = System.Convert.ToString(x1);

                    fx1 = System.Convert.ToDouble(Asignar()); //x actual

                    dataGridView1.Rows.Add(i, x1, fx1); */
                }
                else // i = 2
                {
                    Xs = x2.toString();
                    //Xs = System.Convert.ToString(x2);
                    fx2 = parseFloat(Asignar());
                    //fx2 = System.Convert.ToDouble(Asignar()); //x actual
                    
                    lblPasos2.innerText = i;
                    lblX2.innerText = x2;
                    lblFx2.innerText = fx2;
                    //dataGridView1.Rows.Add(i, x2, fx2);
                }
                
            }

            Result = (((x - x1) * (x - x2)) / ((x0 - x1) * (x0 - x2))) * fx0 + (((x - x0) * (x - x2)) / ((x1 - x0) * (x1 - x2))) * fx1 + (((x - x0) * (x - x1)) / ((x2 - x0) * (x2 - x1))) * fx2;

            lblResult.Text = System.Convert.ToString(Result);
}


function Asignar()
{
    try
    {
        //asigna variables deben ser string
        //   a = txtN.Text; // N
        //  b = txtB.Text; // B


      //  ecuacionOriginal = txtEcOriginal.Text;
        ecuacionModificada = txtFuncion.replace('x', Xs);
        fx = eval(ecuacionModificada);
        
        return fx;

    }
    catch (error)
    {
        return "Error";
    }
}





function je(){
    

    //    const a = parseFloat(txtA.value);
      //  const b = parseFloat(txtB.value);
       // const iteraciones = parseInt(txtIteraciones.value);

       
       
   

        if(!isNaN(x) && !isNaN(b) && !isNaN(iteraciones)){
          
             
                
           
        }
        else{
            pConfirmacion.style = "color:red";
            pConfirmacion.innerText = "Calculo Imposible";
        }

}




let micanvas = document.getElementById('grafica').getContext("2d");
var char = new Chart(micanvas,{
    type:"line",
    data:{
        labels:["x0","x","x1","x2"],
        datasets:[
            {
              label:"Mi Grafica",
              backgroundColor:"rgb(0,0,0)",
              borderColor:"rgb(0,255,0)",
              data:[12,24,65,87]  
            }
        ]
    }
})