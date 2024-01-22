import Image from "next/image";
import Header from './components/header/Header';
export default function Home() {
  return (
    <main className="grid-auto-rows">
      <Header />
      <aside>
        <img src="https://avatars.githubusercontent.com/u/78989862?v=4" alt="Apolo Wilker" width={200} height={200} />
      </aside>
      <section>
        <h2 className="text-2xl font-bold">Sobre</h2>
        <p>Meu nome é Apolo Wilker, desenvolvedor web.</p>
      </section>
    </main>
  );
}