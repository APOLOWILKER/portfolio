export default function Header() {
  return(
    <header className='grid grid-cols-4 h-16 mx-4 items-center'>

      <div className='bg-indigo-900 rounded-full font-bold max-h-6 max-w-20 my-2'>
        <p>&lt;APW/&gt;</p>
      </div>

      <ul className='flex font-medium justify-between space-x-4'>
        <li><a href="/">Home</a></li>
        <li><a href="/about">Sobre</a></li>
        <li><a href="/Skills">Skills</a></li>
        <li><a href="/Projects">Projetos</a></li>
        <li><a href="/Contact">Contato</a></li>
      </ul>

      <div>
        {/* // dropdown with languages */}
        <select className='bg-black font-semibold'>
          <option value="pt-BR">🇧🇷 Português</option>
          <option value="en-US">🇺🇸 English</option>
          <option value="es-ES">🇪🇸 Español</option>
        </select>
      </div>

      <div>
        <button>Toogle Theme</button>
      </div>
    </header>
  )
}