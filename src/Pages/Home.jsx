import Nav from "../Components/nav"
import banner from "../assets/banner.jpg"

const Home = () => {
	return (

		<section>
			<Nav />
			<section className="banner" >
				<img src={banner} height="400"></img>
			</section>

			<section className="texto">
				<h1>Graveyard keeper</h1>
				<section className="texto" id="text1">





					<p>La compañía desarrolladora Lazy Bear Games y la distribuidora TinyBuild Games han sido las encargadas de hacer posible Graveyard Keeper, un título que desde su estreno se ha podido disfrutar en Xbox GamePass. Se trata de un videojuego de rol que nos permite ponernos en la piel del guardián de un cementerio medieval, quien comienza a desempeñar su labor de la forma más extraña. Al comienzo del juego, nuestro personaje vive en el siglo XXI, tiene teléfono móvil y se encuentra en una ciudad. Nos habla del amor romántico y de lo feliz que es por haber encontrado a su media naranja. Pero entonces, todo cambia. Sufre un accidente, mantiene una desconcertante conversación con la parca y aparece en una ciudad medieval con la tarea de mantener el cementerio y dar sepultura a los cadáveres. ​</p>

				</section>
			</section>


		</section>






	)
}

export default Home