import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Paginas from "@/components/paginas/paginas";
import styles from "@/styles/Prezi.module.css";

export default function index() {
  return (
    <div>
      <video
        src="/img/Ppaso2.mp4"
        controls
        autoPlay="true"
        className={styles.video}
      ></video>
      <Navbar></Navbar>
      <Paginas
        titulo="Prezi"
        descripcion="Prezi es un programa de presentaciones para explorar y compartir ideas sobre un documento virtual basado en la informática en nube .​ La aplicación se distingue por su interfaz gráfica con zoom, que permite a los usuarios disponer de una visión más acercada o alejada de la zona de presentación
      "
        paso1={{
          text: "Aqui tiene un pequeño tutorial 😁",
        }}
        Npasos={1}
      ></Paginas>
      <Footer></Footer>
    </div>
  );
}
