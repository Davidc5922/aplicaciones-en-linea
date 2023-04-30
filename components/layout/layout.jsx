import Head from "next/head";
import icono from "../../public/img/icono.jpeg";
export default function layout({ children, title, Icono }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={Icono} />
      </Head>
      <main>{children}</main>
    </div>
  );
}
