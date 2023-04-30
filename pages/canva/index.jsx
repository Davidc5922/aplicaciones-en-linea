import Paginas from "@/components/paginas/paginas";
import Cpaso1 from "../../public/img/Cpaso1.png";
import Cpaso2 from "../../public/img/Cpaso2.png";
import Cpaso3 from "../../public/img/Cpaso3.png";
import Cpaso4 from "../../public/img/Cpaso4.png";
import Cpaso5 from "../../public/img/Cpaso5.png";
import Cpaso6 from "../../public/img/Cpaso6.png";
import Cpaso7 from "../../public/img/Cpaso7.png";
import Cpaso8 from "../../public/img/Cpaso8.png";
import Cpaso9 from "../../public/img/Cpaso9.png";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function Canva() {
  return (
    <div>
      <Navbar></Navbar>
      <Paginas
        titulo="Canva"
        descripcion="¿Qué es y para que nos sirve?
      Es una aplicación o herramienta para la creación de presentaciones y ediciones de diferentes contenidos como lo son logos, infografía, poster, videos, diapositivas, contenido como edición de videos, invitaciones etc.
      "
        paso1={{
          text: "1. ingresamos a nuestro navegador favorito en la cual colocamos CANVA https://www.canva.com/es_co/free/ ",
          img: Cpaso1,
        }}
        paso2={{
          text: "2.Nos dirige a la página principal de CANVA",
          img: Cpaso2,
        }}
        paso3={{
          text: "3.ara realizar el primer paso nos exige iniciar sesión de alguna de nuestras cuentas como son Gmail, Facebook o crea una cuenta nueva directamente.",
          img: Cpaso3,
        }}
        paso4={{
          text: "4.	Después de que iniciamos sesión nos enseña la página de inicio en la cual nos da diferentes opciones sobre la edición que vamos a realizar",
          text2: [
            "Infografía",
            "Invitaciones",
            "Poster",
            "•	Logos",
            "Post para redes sociales",
            "Mapas conceptuales",
            "Mapas mentales",
            "Videos",
            "Tablero virtual",
            "Documentos",
            "Documentos a cuadro",
            "	Historias en redes sociales ",
            "Hoja de vida",
            "Tarjeta",
            "Graficos",
          ],
          img: Cpaso4,
        }}
        paso5={{
          text: "5.scogemos una presentacion la cual vamos a realizar nos dirige a gran variedad de plantillas la cual vemos cual es de mayor agrado para realizar nuestro trabajo las opciones para el manejo nos da ayuda como imágenes caligrafía dibujo libre combos audios fotos ",

          img: Cpaso5,
        }}
        paso6={{
          text: "6.cuando ya tengamos nuestro proyecto nos da la opción de compartir en la cual nos da las diferentes opciones como, presentar, presentar y guardar enlace de solo lectura compartir en redes sociales prototipos y muchos más.",

          img: Cpaso6,
        }}
        paso7={{
          text: "7.En mi caso tomare el ejemplo de descargar presentación ",

          img: Cpaso7,
        }}
        paso8={{
          text: "8.	Nos presenta diferentes tipos de archivos a descargar como",
          text2: [
            "JPG",
            "PNG ",
            "PDF ESTANDAR ",
            "PDF PARA IMPRESIÓN ",
            "SVG",
            "VIDEO MP4",
            "GIF",
          ],
          img: Cpaso8,
        }}
        paso9={{
          text: "9.	Tomaremos la opción de descargar en MP4, luego de la descarga tenemos lista la presentación para entrega",

          img: Cpaso9,
        }}
        Npasos={9}
      ></Paginas>
      <Footer></Footer>
    </div>
  );
}
