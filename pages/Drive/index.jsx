import Paginas from "@/components/paginas/paginas";
import Dpaso1 from "../../public/img/Dpaso1.png";
import Dpaso2 from "../../public/img/Dpaso2.png";
import Dpaso3 from "../../public/img/Dpaso3.png";
import Dpaso4 from "../../public/img/Dpaso4.png";
import Dpaso5 from "../../public/img/Dpaso5.png";
import Dpaso6 from "../../public/img/Dpaso6.png";
import Dpaso7 from "../../public/img/Dpaso7.png";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function index() {
  return (
    <div>
      <Navbar></Navbar>
      <Paginas
        titulo="Drive"
        descripcion="Drive es el lugar en el que puedes almacenar y acceder a todos tus archivos, mientras que Documentos, Hojas de cálculo y Presentaciones son tipos de editores web, al igual que Formularios y Dibujos. Al paquete de editores web de Google se le denomina editores de Documentos de Google.
      "
        paso1={{
          text: "1.Iniciaremos ingresando al correo en la opción de los puntos que se ubica en la parte superior derecha, una vez hay seleccionaremos la opción de drive.",
          img: Dpaso1,
        }}
        paso2={{
          text: "2.	Una vez que estés en la página de Drive, haz clic en el botón azul que dice (Nuevo) en el lado izquierdo. Selecciona (Presentaciones) en el menú desplegable.",
          img: Dpaso2,
        }}
        paso3={{
          text: "3.	Una vez en la página de las diapositivas, selecciona una de las opciones de la parte superior de la página para crear una nueva. Puedes insertar una diapositiva en blanco presionando el cuadro blanco con un signo más en su interior o usar una plantilla haciendo clic en ella. ",
          img: Dpaso3,
        }}
        paso4={{
          text: "4.	Para agregar una diapositiva da click en la esquina superior izquierda verás un pequeño botón (+), Al hacer clic en él, se creará una diapositiva predeterminada con título y cuerpo. Si prefieres usar una estructura diferente, haz clic en la pequeña flecha hacia abajo que está a la derecha del botón. Al hacerlo, se abrirá un menú desplegable más grande con más diseños destinados a distintos propósitos,También puedes cambiar el diseño de una diapositiva preexistente haciendo clic en la opción (TEMAS) en la barra de edición de la parte superior.",

          img: Dpaso4,
        }}
        paso5={{
          text: "5.	Para insertar una imagen ve a la barra de edición de la parte superior y haz clic en (Insertar). Busca la opción (Imágenes) en el menú desplegable. Aparecerá una ventana con varias opciones para insertar imágenes: puedes subir una imagen de tu computadora, tomar una foto con la cámara web, pegar la URL de una imagen, buscar una imagen en tus álbumes de fotos de Google o en Drive o subir una imagen con el URL.",

          img: Dpaso5,
        }}
        paso6={{
          text: "6.	Si quieres agregar un cuadro de texto, haz clic en el cuadro que tiene una (T) en la barra de edición de la parte superior. Puedes editar la fuente y el tamaño del texto, ponerlo en negrita, cursiva o subrayarlo. Todas estas opciones están una al lado de la otra en la barra de edición. En esta barra también encontrarás opciones de alineación y de espaciado entre líneas. Haz clic en (Más) en el extremo derecho de la barra para ajustar la sangría o agregar listas numeradas o viñetas.",

          img: Dpaso6,
        }}
        paso7={{
          text: "7.	Una vez terminada la presentación le das en compartir y le asignas un nombre a la presentación, Busca el nombre o la dirección de correo electrónico de las personas con quienes quieras compartir la presentación y edita los permisos haciendo clic en el ícono del lápiz que aparece junto a ella. Decide si quieres que puedan verla, editarla o hacer comentarios.",

          img: Dpaso7,
        }}
        Npasos={7}
      ></Paginas>
      <Footer></Footer>
    </div>
  );
}
