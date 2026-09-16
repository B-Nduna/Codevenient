import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
export default function CartDrawer(){
  const {cartOpen,setCartOpen,lines,subtotal,removeFromCart,setQty}=useStore();
  return <div className={`commerce-overlay ${cartOpen?'open':''}`} onMouseDown={e=>{if(e.target===e.currentTarget)setCartOpen(false)}}>
    <aside className="commerce-drawer"><div className="drawer-title"><div><span className="label">Project order</span><h2>Current specification</h2></div><button onClick={()=>setCartOpen(false)}>×</button></div>
      <div className="order-ref">ORDER REF. / CV-{new Date().getFullYear()}-{String(lines.length+1).padStart(3,'0')}</div>
      <div className="cart-lines">{lines.length===0?<div className="drawer-empty"><b>NO SYSTEMS SPECIFIED</b><p>Your project order is clear. Browse the store and add a source or launch package.</p><Link to="/store" onClick={()=>setCartOpen(false)} className="technical-link">BROWSE SYSTEMS →</Link></div>:lines.map(line=><div className="cart-line" key={line.key}><div className="line-code">{line.product.ref}</div><div><strong>{line.product.name}</strong><span>{line.tier.label} / {line.tier.note}</span><div className="qty"><button onClick={()=>setQty(line.key,line.qty-1)}>−</button><b>{line.qty}</b><button onClick={()=>setQty(line.key,line.qty+1)}>+</button></div></div><div className="line-price">R{line.lineTotal.toLocaleString()}<button onClick={()=>removeFromCart(line.key)}>REMOVE</button></div></div>)}</div>
      <div className="drawer-total"><span>PROJECT SUBTOTAL</span><strong>R{subtotal.toLocaleString()}</strong><small>Deployment, domains and custom scope are only included where specified.</small></div>
      <Link to="/checkout" onClick={()=>setCartOpen(false)} className={`btn btn-primary drawer-checkout ${!lines.length?'disabled':''}`}>Proceed to project order →</Link>
    </aside>
  </div>
}
