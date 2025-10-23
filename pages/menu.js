const MEALS = [
  { name:'Gochujang Salmon & Rice Bowl', img:'https://images.unsplash.com/photo-1606788075761-3f0c163eaf11?q=80&w=1200&auto=format&fit=crop', desc:'Glazed salmon over white rice with sesame broccoli and cucumber pickles.', macros:'580 kcal • 42g P' },
  { name:'Mediterranean Turkey Fajita Grain Bowl', img:'https://images.unsplash.com/photo-1604908177073-954a5c9c1e3a?q=80&w=1200&auto=format&fit=crop', desc:'Turkey, peppers & onions over quinoa-bulgur; yogurt-tahini drizzle.', macros:'540 kcal • 40g P' },
  { name:'Cottage-Cheese Taco Bowl', img:'https://images.unsplash.com/photo-1617196039331-9db5b986f9a6?q=80&w=1200&auto=format&fit=crop', desc:'Seasoned beef, roasted sweet potato, avocado, and cottage-cheese “queso”.', macros:'600 kcal • 45g P' },
  { name:'Teriyaki Chicken, Pineapple & Edamame Rice', img:'https://images.unsplash.com/photo-1617191518509-6c191f2de142?q=80&w=1200&auto=format&fit=crop', desc:'Teriyaki chicken on brown rice with pineapple and edamame.', macros:'590 kcal • 46g P' },
  { name:'Anabolic French-Toast Brunch Box', img:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200&auto=format&fit=crop', desc:'Golden French toast with berry compote and turkey bacon.', macros:'520 kcal • 40g P' },
  { name:'Chipotle Beef & Bean Power Bowl', img:'https://images.unsplash.com/photo-1598511729926-3f8b80b9a3b2?q=80&w=1200&auto=format&fit=crop', desc:'Smoky beef with brown rice, corn, black beans, and lime-slaw.', macros:'620 kcal • 44g P' },
];

const ADDONS = [
  { name:'Overnight Oats (Berry Protein)', price:'$4.99', img:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop' },
  { name:'Protein Snack Pack', price:'$5.99', img:'https://images.unsplash.com/photo-1589927986089-35812388d1ab?q=80&w=1200&auto=format&fit=crop' },
];

export default function Menu(){
  return (
    <main className="container" style={{padding:'2rem 0 3rem'}}>
      <h1 className="h1" style={{color:'var(--navy)'}}>This Week’s Menu</h1>
      <p className="sub" style={{margin:'0.5rem 0 1rem'}}>Filter by protein, calories, and allergens soon. For now, browse and add to your box.</p>

      <div className="filters">
        <div className="container" style={{display:'flex', gap:12, alignItems:'center'}}>
          <span className="badge">High Protein</span>
          <span className="badge">Athlete Favorite</span>
          <span className="badge" style={{background:'var(--yellow)', color:'#000'}}>Gluten-Friendly</span>
        </div>
      </div>

      <section className="grid grid-3" style={{marginTop:'1.25rem'}}>
        {MEALS.map((m, i)=> (
          <article key={i} className="card" aria-label={m.name}>
            <img src={m.img} alt={m.name} style={{width:'100%', height:220, objectFit:'cover'}}/>
            <div className="card-content">
              <h3 style={{margin:'0 0 .25rem', fontSize:'1.15rem'}}>{m.name}</h3>
              <div className="meal-macros">{m.macros}</div>
              <p style={{opacity:.85, margin:'0.5rem 0 0.75rem'}}>{m.desc}</p>
              <button className="btn" aria-label={`Add ${m.name} to box`}>Add to Box</button>
            </div>
          </article>
        ))}
      </section>

      <section style={{marginTop:'2.5rem'}}>
        <h2 style={{fontSize:'1.6rem', marginBottom:'.5rem'}}>Boost Your Box</h2>
        <div className="grid grid-2">
          {ADDONS.map((a, i)=> (
            <div key={i} className="card">
              <img src={a.img} alt={a.name} style={{width:'100%', height:200, objectFit:'cover'}}/>
              <div className="card-content">
                <strong>{a.name}</strong>
                <div style={{margin:'0.25rem 0 0.75rem', fontWeight:700}}>{a.price}</div>
                <button className="btn" aria-label={`Add ${a.name} to box`}>Add</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
