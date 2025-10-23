export default function About(){
  return (
    <main className="container" style={{padding:'2rem 0 3rem'}}>
      <h1 className="h1" style={{color:'var(--navy)'}}>About PeakPrepMeals</h1>
      <p className="sub">Boise-sourced, athlete-grade meals crafted every week to keep you training, studying, and performing at your best.</p>

      <section className="grid grid-2" style={{marginTop:'1.25rem'}}>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1200&auto=format&fit=crop" alt="Local sourcing" style={{width:'100%', height:240, objectFit:'cover'}}/>
          <div className="card-content">
            <strong>Local ingredients</strong>
            <p>We partner with Boise suppliers and use fresh, seasonal produce whenever possible.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1533777324565-a040eb52fac1?q=80&w=1200&auto=format&fit=crop" alt="Performance nutrition" style={{width:'100%', height:240, objectFit:'cover'}}/>
          <div className="card-content">
            <strong>Performance nutrition</strong>
            <p>Every entrée targets ~500–620 kcal and 40g+ protein to support training and recovery.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
