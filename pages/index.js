export default function Home(){
  return (
    <main>
      <section className="hero">
        <div className="hero-img" style={{backgroundImage:`url(https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop)`}}/>
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <div className="kicker">Boise • Athlete-Focused • Local</div>
          <h1 className="h1">Fuel Your Peak, Every Meal.</h1>
          <p className="sub">Fresh, locally sourced meals packed with 40g+ protein. Built for student athletes, gym-goers, and health-minded pros—delivered weekly.</p>
          <div style={{marginTop:'1.25rem'}}>
            <a href="/plans" className="btn" aria-label="Start your plan">Order This Week’s Meals</a>
            <a href="/menu" className="btn btn-outline" style={{marginLeft:12}}>See Menu</a>
          </div>
        </div>
      </section>

      <section className="container" style={{padding:'3rem 0'}}>
        <div className="grid grid-3">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=800&auto=format&fit=crop" alt="Choose your plan" style={{width:'100%', height:180, objectFit:'cover'}}/>
            <div className="card-content">
              <strong>Choose your plan</strong>
              <p>Pick 10, 15, or 20 meals/week. Delivery or campus pickup.</p>
            </div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=800&auto=format&fit=crop" alt="Select your meals" style={{width:'100%', height:180, objectFit:'cover'}}/>
            <div className="card-content">
              <strong>Select your meals</strong>
              <p>High-protein entrées, plus Overnight Oats and Protein Snack Packs.</p>
            </div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop" alt="We cook & deliver" style={{width:'100%', height:180, objectFit:'cover'}}/>
            <div className="card-content">
              <strong>We cook & deliver</strong>
              <p>Prepared Saturday. Delivered chilled Sunday in insulated bags.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{padding:'1rem 0 3rem'}}>
        <div className="kicker">Featured</div>
        <h2 style={{fontSize:'1.8rem', margin:'0.25rem 0 1rem'}}>Athlete Favorite Meals</h2>
        <div className="grid grid-3">
          {['Gochujang Salmon & Rice Bowl','Teriyaki Chicken, Pineapple & Edamame Rice','Chipotle Beef & Bean Power Bowl'].map((name, i)=> (
            <div key={i} className="card">
              <img src={[
                'https://images.unsplash.com/photo-1606788075761-3f0c163eaf11?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1617191518509-6c191f2de142?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1598511729926-3f8b80b9a3b2?q=80&w=800&auto=format&fit=crop'
              ][i]} alt={name} style={{width:'100%', height:220, objectFit:'cover'}}/>
              <div className="card-content">
                <strong>{name}</strong>
                <div className="meal-macros">~600 kcal • 40g+ protein</div>
                <div style={{marginTop:10}}><a href="/menu" className="btn">Add to Box</a></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
