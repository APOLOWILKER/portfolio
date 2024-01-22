import Image from 'next/image';
import Header from '../components/header/Header';
import InstagramLogo from '../../public/Instagram.svg';
import GitHubLogo from '../../public/GitHub.svg';
import LinkedinLogo from '../../public/LinkedIn.svg';
import TypewriterEffect from '@/components/AnimatedText/TypewriterEffect';

export default function Home() {
  return (
    <>
    <Header />
    <main className="bg-red-400 flex flex-col items-center w-full space-y-6">
      <section className='grid grid-cols-2 w-full mx-2 h-96'>
        <aside className='bg-blue-300 flex flex-col items-center py-6 space-y-4'>
            <TypewriterEffect text="Hi, I'm Apolo Wilker!"/>
            <p>Fullstack Developer</p>

            <div className='flex my-4'>
              <link rel="stylesheet" href="https://github.com/APOLOWILKER" />
              <Image
                src={GitHubLogo} // Provide the correct type for the src prop
                alt="follow me on github"
                width={50}
                height={50}
              />
              <Image 
                src={LinkedinLogo} // Provide the correct type for the src prop
                alt="follow me on linkedin"
                width={50}
                height={50}
              />
              <Image 
              src={InstagramLogo} // Provide the correct type for the src prop
              alt="follow me on instagram"
              width={50}
              height={50}
              />
            </div>
        </aside>
        
        <div>
          <img src="https://avatars.githubusercontent.com/u/78989862?v=4" alt="Apolo Wilker" width={200} height={200} />
        </div>
      </section>
      
      <section>
        <h2>skills</h2>

      </section>

      <section>
        <h2>projects</h2>
      </section>

      <section>
        <h2>contact</h2>
      </section>
    </main>
    </>
    
  );
}