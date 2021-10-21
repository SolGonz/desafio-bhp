import React from 'react'
import html2pdf from 'html2pdf.js'


const CheckList = () => {

    const enviar = e => {
        e.preventDefault()
        console.log('enviado')
        generatePDF()
    }

    function generatePDF () {
        const element = document.getElementById("form");

        html2pdf()
        .from(element)
        .save();
    }
  




    return (
        <div className="m-3">
            <form onSubmit={enviar} id="form">
                <h4 id ="h4"> Punto de revisión de arnés de seguridad y puntos de anclaje</h4>
                <p>Por tu seguridad, revisa el estado de el</p>
                <h5>Estado del arnés</h5>
                <input className="form-control" type="text" placeholder="Default input" aria-label="default input example"/>
                <div className="form-check" >
                    <input className="form-check-input my-2" type="checkbox" value="" />
                    <label className="form-check-label my-1" for="flexCheckDefault" id="form1">
                        Se encuentra libre de grasa, pinturas, etc.
                    </label>  
                </div>
                <div className="form-check">
                    <input className="form-check-input my-2" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label my-1" for="flexCheckDefault">
                        No presenta costuras deshilachadas.
                    </label>  
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Posee la placa de identificación.
                    </label>  
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Se encontraba correctamente almacenado.
                    </label>  
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        No presenta cortes o desgarros.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Posee el tag de inspección Cesmec.
                    </label>
                </div>
                <h5>Estado de los accesorios</h5>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Los anillos en ○ NO presentan deformaciones.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Las hebillas están en buen estado.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Mantiene los elementos plásticos.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Los elementos plásticos están en buen estado.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        No presenta costuras deshilachadas.
                    </label>
                </div>
                <h5>Estado de la cuerda de vida</h5>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Se encuentra libre de grasa, pinturas, etc.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Los ganchos están en buen estado.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        No presenta cortes en sus hebras.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        No presenta costuras deshilachadas.
                    </label>
                </div>
                <h5>Estado de los puntos de anclaje</h5>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        No se visualiza alguna modificación o alteración del punto de anclaje.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        ¿El punto de anclaje a utilizar esta identificado de color amarillo?
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        El punto de anclaje se encuentra accesible.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        No existe deformación en alguno de los componentes (argolla, placa, pernos, etc).
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Se encuentra instalada la placa identificadora que muestra el código, capacidad y estado de aprobación.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                    La placa cuenta con la decha de validación, tipo y fijación del anclaje.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                    NO se aprecian fisuras o golpes en el punto de anclaje.
                    </label>
                </div>
                <button type="submit">Enviar</button>
                
            </form>
        </div>
    )
}

export default CheckList;
