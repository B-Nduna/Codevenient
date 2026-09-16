export default function ProductVisual({product,large=false}){
  const src = product.image ? `${import.meta.env.BASE_URL}${product.image}` : null;
  return <div className={`system-visual ${large?'large':''} ${src?'has-image':'is-schematic'}`} style={{'--product-accent':product.accent}}>
    <div className="visual-top"><span>{product.ref}</span><span>{src?'PROJECT PREVIEW':product.status}</span></div>
    {src ? <div className="visual-image-frame">
      <div className="visual-browserbar" aria-hidden="true"><i/><i/><i/><span>{product.name.toUpperCase()} / LIVE SYSTEM VIEW</span></div>
      <div className="visual-image-crop">
        <img src={src} alt={`${product.name} ${product.industry} digital system preview`} loading={large?'eager':'lazy'} decoding="async" fetchPriority={large?'high':'auto'} />
        <div className="visual-image-mark" aria-hidden="true"><span>+</span></div>
      </div>
    </div> : <div className="visual-window" aria-hidden="true"><div className="visual-nav"><i/><i/><i/><span/></div><div className="visual-body"><div className="visual-copy"><b/><b/><em/><button/></div><div className="visual-panel"><span/><span/><span/><span/></div></div><div className="visual-gridrow"><i/><i/><i/></div></div>}
    <div className="visual-foot"><span>FIG. {product.ref}</span><span>{src?'PROJECT IMAGE':'SCALE N.T.S.'}</span></div>
  </div>;
}
