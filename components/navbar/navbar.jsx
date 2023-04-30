import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import icono from "../../public/img/icono.jpeg";

export default function navbar() {
  return (
    <div className={styles.Navbar}>
      <ul className={styles.ul}>
        <li>
          {" "}
          <Image
            src={icono}
            height={200}
            width={200}
            alt="logo"
            className={styles.logo}
          ></Image>
        </li>
        <li className={styles.li}>
          <Link href="/">
            <h1>INICIO</h1>
          </Link>
        </li>
        <li className={styles.li}>
          <h1>APLICACIONES</h1>
          <ul>
            <li>
              <Link href="/canva">Canva</Link>
            </li>
            <li>
              <Link href="/Drive">Prezi</Link>
            </li>
            <li>
              <Link href="/Prezi">drive</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
