import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getProduct } from '../data/products';

const StoreContext = createContext(null);
const read = (key, fallback) => {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
};

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => read('cv-cart', []));
  const [wishlist, setWishlist] = useState(() => read('cv-wishlist', []));
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  useEffect(() => localStorage.setItem('cv-cart', JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem('cv-wishlist', JSON.stringify(wishlist)), [wishlist]);

  const addToCart = (productId, tierId='source') => {
    if (tierId === 'custom') return;
    setCart(prev => {
      const key = `${productId}:${tierId}`;
      const found = prev.find(i => i.key === key);
      if (found) return prev.map(i => i.key === key ? {...i, qty:i.qty+1} : i);
      return [...prev, {key, productId, tierId, qty:1}];
    });
    setCartOpen(true);
  };
  const removeFromCart = key => setCart(prev => prev.filter(i => i.key !== key));
  const setQty = (key, qty) => setCart(prev => prev.map(i => i.key === key ? {...i,qty:Math.max(1,qty)} : i));
  const clearCart = () => setCart([]);
  const toggleWishlist = id => setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev,id]);

  const lines = useMemo(() => cart.map(item => {
    const product = getProduct(item.productId);
    const tier = product?.tiers.find(t => t.id === item.tierId);
    return {...item, product, tier, lineTotal:(tier?.price || 0)*item.qty};
  }).filter(x => x.product && x.tier), [cart]);
  const subtotal = lines.reduce((sum,l) => sum+l.lineTotal,0);
  const cartCount = cart.reduce((sum,i) => sum+i.qty,0);

  return <StoreContext.Provider value={{cart,lines,subtotal,cartCount,wishlist,cartOpen,wishlistOpen,setCartOpen,setWishlistOpen,addToCart,removeFromCart,setQty,clearCart,toggleWishlist}}>{children}</StoreContext.Provider>;
}

export const useStore = () => {
  const value = useContext(StoreContext);
  if (!value) throw new Error('useStore must be used inside StoreProvider');
  return value;
};
