import { Link } from 'react-router-dom';
import Crosshairs from './Crosshairs';
import ProductVisual from './ProductVisual';
import { useStore } from '../context/StoreContext';

export default function ProductCard({product,compact=false}){
  const {wishlist,toggleWishlist}=useStore();
  const from = product.tiers.find(t=>t.price)?.price;
  return <article className={`system-card ${compact?'compact':''}`}>
    <Crosshairs/>
    <div className="system-card-head"><span>{product.ref} / {product.industry.toUpperCase()}</span>{!compact&&<button className={`save-btn ${wishlist.includes(product.id)?'saved':''}`} onClick={()=>toggleWishlist(product.id)} aria-label="Save product">{wishlist.includes(product.id)?'◆':'◇'}</button>}</div>
    <Link to={`/store/${product.id}`} className="system-visual-link"><ProductVisual product={product}/></Link>
    <div className="system-card-body">
      <div className="status-line"><span>{product.type}</span><b>{product.status}</b></div>
      <h3><Link to={`/store/${product.id}`}>{product.name}</Link></h3>
      <p>{product.summary}</p>
      <div className="system-card-spec">{product.tags.slice(0,3).map(t=><span key={t}>{t}</span>)}</div>
      <div className="system-card-bottom"><div><small>FROM</small><strong>R{from?.toLocaleString()}</strong></div><Link className="technical-link" to={`/store/${product.id}`}>VIEW SYSTEM →</Link></div>
    </div>
  </article>
}
