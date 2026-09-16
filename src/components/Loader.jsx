import { useEffect } from 'react';
const BASE=import.meta.env.BASE_URL;
export default function Loader({onDone}){useEffect(()=>{const t=setTimeout(onDone,650);return()=>clearTimeout(t)},[onDone]);return <div className="cv-loader"><div className="cv-loader-inner"><img src={`${BASE}images/logo.png`} alt="Codevenient"/><span>PREPARING DRAWINGS</span><i/></div></div>}
