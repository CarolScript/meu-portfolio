import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Emelie Noira | Portfólio</title>
        <meta name="description" content="Portfólio de Emelie Noira, CEO da Essência Digital." />
      </Head>

      <header>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/sobre">Sobre</Link></li>
            <li><Link href="/projetos">Projetos</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </nav>
      </header>

      <section>
        <h1>Oi, sou Emilly Caroline!</h1>
        <h2>CEO da Essência Digital | Desenvolvedora Web</h2>
        <p>Crio soluções digitais para empresas que querem crescer.</p>
        <Link href="/projetos"><button>Ver Projetos</button></Link>
      </section>
    </>
  );
}
