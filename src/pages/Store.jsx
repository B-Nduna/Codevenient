import { useMemo, useState } from 'react';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import ProductCard from '../components/ProductCard';
import ConsultationCorner from '../components/ConsultationCorner';
import { products, PRODUCT_CATEGORIES } from '../data/products';

export default function Store(){
  const [category,setCategory]=useState('All systems');
  const [query,setQuery]=useState('');
  const [sort,setSort]=useState('featured');
  const filtered=useMemo(()=>{
    let list=products.filter(p=>(category==='All systems'||p.category===category)&&`${p.name} ${p.industry} ${p.type} ${p.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase()));
    if(sort==='price')list=[...list].sort((a,b)=>a.tiers.find(t=>t.price).price-b.tiers.find(t=>t.price).price);
    if(sort==='name')list=[...list].sort((a,b)=>a.name.localeCompare(b.name));
    if(sort==='featured')list=[...list].sort((a,b)=>Number(b.featured)-Number(a.featured));
    return list;
  },[category,query,sort]);
  return <>
    <Seo title="Codevenient Store — Ready-built digital systems" description="Buy a reusable digital product, have Codevenient launch it, or use one as the foundation for tailored development."/>
    <header className="store-hero"><div className="container store-hero-grid"><Reveal><div><p className="label">Sheet 04 — Systems catalogue</p><h1>Don't start from zero<br/>unless you <span>need</span> to.</h1><p className="lead">Websites, stores and applications distilled from real builds. Choose the source, have us launch it, or use one as the first drawing for something custom.</p><div className="hero-actions"><a href="#catalogue" className="btn btn-primary">Browse systems</a><a href="#consultation" className="technical-link hero-secondary-link">Need guidance? Consultation corner →</a></div></div></Reveal><Reveal><div className="store-index-board"><div className="index-head"><span>CATALOGUE INDEX</span><span>REV. 05 / 2026</span></div>{[['10','SYSTEMS'],['05','INDUSTRIES+'],['03','BUYING PATHS'],['100%','CUSTOMISABLE']].map(x=><div className="index-row" key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}<div className="index-foot">SOURCE / LAUNCH / CUSTOM</div></div></Reveal></div></header>
    <section className="store-how"><div className="container store-how-row">{[['01','SOURCE','Own the reusable frontend and adapt it yourself.'],['02','LAUNCH','We brand, populate, configure and deploy it.'],['03','CUSTOM','Use the system as a foundation for a tailored build.']].map(x=><div key={x[0]}><span>{x[0]}</span><b>{x[1]}</b><p>{x[2]}</p></div>)}</div></section>
    <section className="section store-catalogue" id="catalogue"><div className="container"><div className="catalogue-tools"><div className="filter-tabs">{PRODUCT_CATEGORIES.map(c=><button className={category===c?'active':''} onClick={()=>setCategory(c)} key={c}>{c}</button>)}</div><div className="catalogue-search"><label>SEARCH<input aria-label="Search systems" value={query} onChange={e=>setQuery(e.target.value)} placeholder="trade, system, feature..."/></label><label>SORT<select aria-label="Sort systems" value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Featured</option><option value="price">Price / low</option><option value="name">Name / A-Z</option></select></label></div></div><div className="catalogue-meta"><span>DRAWING SET / {String(filtered.length).padStart(2,'0')} RESULTS</span><span>PRICES IN ZAR</span></div>{filtered.length?<div className="catalogue-grid">{filtered.map(p=><ProductCard product={p} key={p.id}/>)}</div>:<div className="no-results"><b>NO MATCHING DRAWINGS</b><p>Try a broader search or switch back to all systems.</p><button className="technical-link" onClick={()=>{setCategory('All systems');setQuery('')}}>RESET FILTERS →</button></div>}</div></section>
    <ConsultationCorner />
  </>;
}
