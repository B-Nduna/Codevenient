import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { getProduct } from '../data/products';
export default function WishlistDrawer(){
 const {wishlist,wishlistOpen,setWishlistOpen,toggleWishlist}=useStore(); const items=wishlist.map(getProduct).filter(Boolean);
 return <div className={`commerce-overlay ${wishlistOpen?'open':''}`} onMouseDown={e=>{if(e.target===e.currentTarget)setWishlistOpen(false)}}><aside className="commerce-drawer"><div className="drawer-title"><div><span className="label">Saved systems</span><h2>Reference set</h2></div><button onClick={()=>setWishlistOpen(false)}>×</button></div><div className="order-ref">SHORTLIST / {String(items.length).padStart(2,'0')} SYSTEMS</div><div className="saved-list">{items.length===0?<div className="drawer-empty"><b>NO REFERENCES SAVED</b><p>Use the diamond control on any system to keep it here.</p></div>:items.map(p=><div className="saved-row" key={p.id}><div><span>{p.ref}</span><strong>{p.name}</strong><small>{p.type}</small></div><Link to={`/store/${p.id}`} onClick={()=>setWishlistOpen(false)}>OPEN →</Link><button onClick={()=>toggleWishlist(p.id)}>×</button></div>)}</div></aside></div>
}
