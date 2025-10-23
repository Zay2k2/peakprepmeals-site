const PLANS = [
  { name:'Small', meals:10, pricePer:11.99, blurb:'Great for busy weeks.' },
  { name:'Medium', meals:15, pricePer:10.99, blurb:'Most popular for athletes.' },
  { name:'Large', meals:20, pricePer:9.99, blurb:'For heavy training & teams.' },
];

export default function Plans(){
  return (
    <main className="container" style={{padding:'2rem 0 3rem'}}>
      <h1 className="h1" style={{color:'var(--navy)'}}>Choose Your Plan</h1>
      <p className="sub">Flexible weekly subscriptions. Pause or skip anytime. Delivery or campus pickup.</p>

      <section className="grid grid-3" style={{marginTop:'1.25rem'}}>
        {PLANS.map((p, i)=> {
          const weekly = p.meals * p.pricePer;
          return (
            <div key={i} className={`plan ${i===1?'popular':''}`}>
              <div className="badge">{p.name} Plan</div>
              <h3 style={{margin:'0.35rem 0 0.5rem'}}>{p.meals} meals / week</h3>
              <div><strong>${p.pricePer.toFixed(2)}</strong> per meal</div>
              <div style={{opacity:.8, marginTop:8}}>{p.blurb}</div>
              <hr style={{margin:'1rem 0', borderColor:'#eee'}}/>
              <div style={{fontWeight:700}}>Weekly: ${weekly.toFixed(2)}</div>
              <button className="btn" style={{marginTop:'0.75rem'}}>Start Plan</button>
            </div>
          )
        })}
      </section>

      <section style={{marginTop:'2rem'}}>
        <h2 style={{fontSize:'1.4rem'}}>What’s included</h2>
        <ul>
          <li>6 chef-crafted entrées rotating weekly</li>
          <li>Guaranteed 40g+ protein per meal</li>
          <li>Insulated delivery with gel packs</li>
          <li>Recipe cards & reheating guides</li>
        </ul>
      </section>
    </main>
  )
}
