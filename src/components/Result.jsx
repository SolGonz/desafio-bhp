import React from 'react';
import html2pdf from 'html2pdf.js'


function Result(props) {
    const { ERT, LE, ET, ELC } = props
    console.log("LAS PROPS", props)

    const generatePDF = () => {
        const print = document.getElementById("print");
        html2pdf()
            .from(print)
            .save();
    }




    return <div id="result" className="container">
        <form id="print" >
            <img src="https://firebasestorage.googleapis.com/v0/b/elc-bhp.appspot.com/o/bhp_orn_rgb_pos%5B1%5D.png?alt=media&token=e67982c5-67f2-4153-9201-a18c75117eff" width="100px" alt="BHP" />
            <h1 className="name" ><i class="fa fa-check-circle " aria-hidden="true"></i> RESULTADO</h1>
            <h2 className="name" >ESPACIO LIBRE REQUERIDO PARA DETENER LA CAIDA</h2>
            <h1 className="nameForm">{ELC.toFixed(2)} metros</h1>

            <div className="ocult">
                <p > ERT= {ERT.toFixed(1)} LE= {LE.toFixed(1)} ET = {ET.toFixed(1)}</p>
                <p> Información adicional que se necesite mostrar en el informe podrá realizarse en este apartado</p>
            </div>

            <div className="gif">
                <img src="https://firebasestorage.googleapis.com/v0/b/elc-bhp.appspot.com/o/ELC%20(2).gif?alt=media&token=00c040ee-fc2c-40f8-9aae-516897bd2205" width="300px" loop="finite"></img>
            </div>
            <div className="nota">
                <i class="fa fa-exclamation-triangle fa-3x" aria-hidden="true" ></i>
                <span >Trabaja seguro, si no te sientes preparado para proseguir mejor no lo hagas</span>
            </div>

        </form>
        <div className="download" >
            <button  className="btndownload" type="button" onClick={generatePDF}>Descargar PDF <i className="fa fa-download" aria-hidden="true" /></button>
        </div>
        <div className="btnsResult">
            <a href="/calculadora" type="button" className="btn btn-secondary">RECALCULAR</a>
            <a href="/" type="button" className="btn btn-secondary">FINALIZAR</a>
        </div>
    </div>

}

export default Result;

