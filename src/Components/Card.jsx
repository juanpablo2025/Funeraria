import Funeraria from "../assets/Funeraria.json"
import imagen from "../assets/persona.jpg"

const datos = Funeraria.registros_funerarios

const Card = () => {
	return (
		<div className="card">


			{
				datos.map((dato) => (
					<section className="container">
						<img className="imagen" src={imagen}></img>

						<section className="dato2">
							<p><b>Nombre</b></p>
							<p><b>Edad</b></p>
							<p><b>Fecha de muerte</b></p>
							<p><b>Causa</b></p>
							<p><b>Ciudad</b></p>
							<p><b>País</b></p>

						</section >
						<section className="datos">
							<p><b>{dato.nombre}</b></p>
							<p>{dato.edad}</p>
							<p>{dato.fecha_fallecimiento}</p>
							<p>{dato.causa_deceso}</p>
							<p>{dato.ciudad}</p>
							<p>{dato.pais}</p>

						</section >
					</section >




				))

			}




		</div >

	);
};




export default Card