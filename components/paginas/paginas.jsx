import Image from "next/image";
import styles from "@/styles/paginas.module.css";

export default function paginas({
  titulo,
  descripcion,
  paso1,
  paso2,
  paso3,
  paso4,
  paso5,
  paso6,
  paso7,
  paso8,
  paso9,
  Npasos,
}) {
  const pasos = [];

  for (let i = 1; i <= Npasos; i++) {
    const paso = eval(`paso${i}`);
    const text2Elements = [];
    if (paso.text2) {
      if (typeof paso.text2 === "object") {
        for (let j = 0; j < paso.text2.length; j++) {
          text2Elements.push(<li key={j}>{paso.text2[j]}</li>);
        }
      }
    }
    pasos.push(
      <div key={i} className={styles.paso}>
        <div>
          <p>{paso.text}</p>
          {text2Elements}
        </div>
        {paso.img ? (
          <Image src={paso.img} alt="logo" className={styles.IMGpaso} />
        ) : (
          <div className={styles.video}></div>
        )}
      </div>
    );
  }
  return (
    <div className={styles.Cont}>
      <h1 className={styles.titulo}>{titulo}</h1>
      <p className={styles.Descripcion}>{descripcion}</p>
      {pasos}
    </div>
  );
}
