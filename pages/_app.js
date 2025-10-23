import '../styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }){
  return (
    <>
      <Head>
        <title>PeakPrepMeals — Fuel Your Peak, Every Meal.</title>
        <meta name="description" content="Athlete-focused meal prep in Boise. 40g+ protein meals, locally sourced, delivered weekly."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <nav>
        <div className="container nav-inner">
          <Link href="/" className="logo" aria-label="PeakPrepMeals home">
            <strong style={{color:'var(--navy)'}}>PeakPrepMeals</strong>
          </Link>
          <div className="nav-links" role="navigation" aria-label="Primary">
            <Link href="/menu">Menu</Link>
            <Link href="/plans">Plans</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="nav-cta">
            <Link href="/plans" className="btn">Order Now</Link>
          </div>
        </div>
      </nav>
      <Component {...pageProps} />
      <footer className="footer">
        <div className="container grid grid-3">
          <div><strong>PeakPrepMeals</strong><br/>Boise-sourced, athlete-grade meals.</div>
          <div>
            <div><a href="/menu">Menu</a></div>
            <div><a href="/plans">Plans</a></div>
            <div><a href="/about">About</a></div>
            <div><a href="/contact">Contact</a></div>
          </div>
          <div>
            <div className="badge">Cutoff: Fridays 5 PM</div>
            <div style={{opacity:.8, marginTop:8}}>Sunday delivery or campus pickup.</div>
          </div>
        </div>
      </footer>
    </>
  )
}
