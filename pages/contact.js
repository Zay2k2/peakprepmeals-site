export default function Contact(){
  return (
    <main className="container" style={{padding:'2rem 0 3rem'}}>
      <h1 className="h1" style={{color:'var(--navy)'}}>Contact & Support</h1>
      <p className="sub">Questions about delivery, allergens, or partnerships? We’re here to help.</p>

      <form className="card" style={{padding:'1rem', maxWidth:680}} onSubmit={(e)=>e.preventDefault()}>
        <div className="card-content">
          <label>Name<br/><input type="text" required placeholder="Your name" style={{width:'100%', padding:'0.7rem', border:'1px solid #ddd', borderRadius:10}}/></label><br/><br/>
          <label>Email<br/><input type="email" required placeholder="you@example.com" style={{width:'100%', padding:'0.7rem', border:'1px solid #ddd', borderRadius:10}}/></label><br/><br/>
          <label>Message<br/><textarea rows={5} placeholder="How can we help?" style={{width:'100%', padding:'0.7rem', border:'1px solid #ddd', borderRadius:10}}/></label><br/>
          <button className="btn" style={{marginTop:12}}>Send</button>
        </div>
      </form>
    </main>
  )
}
