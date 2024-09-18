import Link from 'next/link';
import classes from './page.module.css'
import ImageSlideshow from "@/components/images/image-slideshow";
import News from "@/components/News/News";
export default function Home() {
  return (
      <>
   <header className={classes.header}>
     <div className={classes.slideshow}> 
       <ImageSlideshow />
       <News/>
     </div>
     <div>
       <div className={classes.hero}>
         <h1> Discover the latest news around the world</h1>
         <p> Trusted by millions of users worldwide, this news page is the best place to get the latest news on a variety of topics.</p>
       </div>
       <div className={classes.cta}>
       <Link href={'/community'}>Join the Community</Link>
       <Link href={'/meals'}>Explore news </Link>
     </div>
     </div>
   </header>
        <main>
          <section className={classes.section}>
            <h2>How it works</h2>
            <p>
             My.News is a platform for news lovers to share their favorite news with the world. It&apos;s a place to discover new news, and to 
             share your favorite news with the world.
            </p>
            <p>
              My.News is a place to discover new news, and to connect with other news lovers.
            </p>
          </section>

          <section className={classes.section}>
            <h2>Why My.News ?</h2>
            <p>
              My.News is a platform for news lovers to share their favorite news with the world. It&apos;s a place to discover new news, and to
              share your favorite news with the world.
            </p>
            <p>
            Consider My.News as a place to discover new news, and to connect with other news lovers.
            </p>
          </section>
        </main>
      </>
  );
}
