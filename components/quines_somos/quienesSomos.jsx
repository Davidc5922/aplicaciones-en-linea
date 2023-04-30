import Image from "next/image";
import ImgP1 from "../../public/img/stephanie.jpeg";
import ImgP2 from "../../public/img/david.jpeg";
import ImgP3 from "../../public/img/Liliam.jpeg";

import styles from "@/styles/quienesSomos.module.css";
import Aos from "aos";
import { useEffect, useState } from "react";

export default function quienesSomos() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      className={styles.quienesSomos}
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500"
    >
      <h1>¿QUIENES SOMOS?</h1>
      <div className={styles.IMGcont}>
        {/* img1 */}
        <div className={styles.contenedor}>
          <div className={styles.moneda}>
            <div className={styles.cara1}>
              <Image src={ImgP1} alt="logo" className={styles.imgPer1}></Image>
            </div>
            <div className={styles.cara2}>
              <p>
                Stephanie Johana Cárdenas González Soy estudiante de primer
                semestre de la Carrera publicidad y mercadeo de la Corporación
                nacional unificada de educación superior CUN
                stephanie.cardenas@cun.edu.co Ficha: 52228
              </p>
            </div>
          </div>
        </div>
        {/* img2 */}
        <div className={styles.contenedor}>
          <div className={styles.moneda}>
            <div className={styles.cara1}>
              <Image src={ImgP2} alt="logo" className={styles.imgPer1}></Image>
            </div>
            <div className={styles.cara2}>
              <p>
                David Sebastian Carrillo Morato Soy estudiante de primer
                semestre de mercadeo y publicidad de la corporación Nacional
                Unificada de educación superior CUN David.carrillommo@cun.edu.co
                Ficha 52228
              </p>
            </div>
          </div>
        </div>
        {/* img3 */}
        <div className={styles.contenedor}>
          <div className={styles.moneda}>
            <div className={styles.cara1}>
              <Image src={ImgP3} alt="logo" className={styles.imgPer1}></Image>
            </div>
            <div className={styles.cara2}>
              <p>
                Liliam Katherine Cangrejo Bautista Soy estudiante de primer
                semestre de la Carrera publicidad y mercadeo de la Corporación
                nacional unificada de educación superior CUN
                liliam.cangrejo@cun.edu.co Ficha: 52228
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
