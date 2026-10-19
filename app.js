/* Vanya storefront. Frontend only. Cart is kept in localStorage. */
const BRAND = "Vanya";
const IMG = {hero:"4-hero.jpg",saree1:"5-saree.jpg",saree2:"9-saree2.jpg",saree3:"10-saree3.jpg",fabric1:"6-fabric.jpg",fabric2:"11-fabric2.jpg",fabric3:"12-fabric3.jpg",stole1:"7-stole.jpg",stole2:"13-stole2.jpg",swatch:"14-swatch.jpg",preserve:"15-preserve.jpg",workshop:"16-workshop.jpg",craft:"8-craft.jpg"};
const FREE_SHIP = 3000, SHIP_FEE = 99;
const FABRICS = [
 ["Silk","Lustrous and fluid, with soft botanical imprints.","fabric1"],["Organza Silk","Light and sheer, ideal for dupattas and layering.","fabric3"],
 ["Chanderi","Silk-cotton blend with a luminous texture.","saree3"],["Cotton Linen","Breathable and earthy, softer with every wash.","fabric2"],
 ["Kota Silk","A structured, airy weave for bold prints.","saree2"],["Gauze Cotton","Soft, textured and relaxed.","craft"],
 ["Mulberry Silk","Smooth and luxurious, a keepsake fabric.","fabric1"],["Cotton Satin","Gentle lustre with cotton comfort.","fabric2"]];
const COLOURS = ["Rust","Wine","Teal","Cream","Rose","Mustard"];
const P = [];
function add(id,name,cat,fabric,price,img,colour,desc,extra={}){P.push(Object.assign({id,name,cat,fabric,price,img,colour,desc,stock:true,new:0,unit:cat==="fabric"?"per metre":""},extra));}
add("leaf-drift-silk-saree","Leaf Drift Silk Saree","saree","Silk",14500,"saree1","Rust","Pure silk saree with hand-laid leaf imprints in rust and brown, finished with a plain border. Six metres with an unstitched blouse piece.",{compare:16500,new:9});
add("fern-garden-chanderi-saree","Fern Garden Chanderi Saree","saree","Chanderi",8900,"saree3","Cream","Light chanderi with a fern print border that glows in daylight. Comes with a matching blouse piece.",{new:8});
add("petal-bloom-kota-saree","Petal Bloom Kota Saree","saree","Kota Silk",7200,"saree2","Teal","Square-weave kota silk with teal and wine petal prints. Airy and easy to drape.",{new:7});
add("marigold-linen-saree","Marigold Linen Saree","saree","Cotton Linen",5400,"saree1","Mustard","Soft cotton linen saree printed with marigold and leaf imprints. Gets softer with every wash.",{new:6,compare:6200});
add("rosewood-mulberry-saree","Rosewood Mulberry Saree","saree","Mulberry Silk",21500,"saree2","Wine","Fine mulberry silk with deep wine botanical prints. A keepsake piece, made to order in about three weeks.",{new:5});
add("sage-gauze-saree","Sage Gauze Cotton Saree","saree","Gauze Cotton",4200,"saree3","Teal","Textured gauze cotton in teal tones with an all-over leaf print. Relaxed, everyday wear.",{new:4});
add("dawn-satin-saree","Dawn Cotton Satin Saree","saree","Cotton Satin",6100,"saree1","Rose","Smooth cotton satin with a gentle lustre and rose-toned petal prints.",{new:3});
add("ember-organza-saree","Ember Organza Silk Saree","saree","Organza Silk",11800,"saree2","Rust","Sheer organza silk with rust leaf imprints. Pairs well with a plain silk blouse.",{new:2,stock:false});
add("silk-yardage","Eco-printed Silk Yardage","fabric","Silk",2400,"fabric1","Rust","Silk yardage with leaf and flower imprints. Priced per metre, cut to the length you choose.",{new:9});
add("organza-yardage","Organza Silk Yardage","fabric","Organza Silk",1800,"fabric3","Rose","Light organza with soft pink and teal botanical prints. Good for dupattas and layered outfits.",{new:8});
add("chanderi-yardage","Chanderi Yardage","fabric","Chanderi",1500,"saree3","Cream","Silk-cotton chanderi yardage with a fern print. Per metre.",{new:7});
add("linen-yardage","Cotton Linen Yardage","fabric","Cotton Linen",950,"fabric2","Mustard","Breathable cotton linen with marigold imprints. Per metre.",{new:6});
add("kota-yardage","Kota Silk Yardage","fabric","Kota Silk",1650,"saree2","Teal","Kota silk yardage with a structured drape. Per metre.",{new:5,compare:1850});
add("gauze-yardage","Gauze Cotton Yardage","fabric","Gauze Cotton",780,"craft","Cream","Soft gauze cotton with a lived-in texture. Per metre.",{new:4});
add("mulberry-yardage","Mulberry Silk Yardage","fabric","Mulberry Silk",3200,"fabric1","Wine","Fine mulberry silk with deep wine imprints. Per metre.",{new:3});
add("satin-yardage","Cotton Satin Yardage","fabric","Cotton Satin",890,"fabric2","Rose","Cotton satin with a soft sheen. Per metre.",{new:2});
add("silk-yardage-teal","Teal Leaf Silk Yardage","fabric","Silk",2600,"fabric3","Teal","Silk yardage in teal with eucalyptus-style leaf prints. Per metre.",{new:1,stock:false});
add("blossom-silk-stole","Blossom Silk Stole","stole","Silk",3200,"stole2","Rose","Silk stole with rose petal imprints. About 180 x 70 cm.",{new:9});
add("forest-linen-stole","Forest Linen Stole","stole","Cotton Linen",1800,"stole1","Teal","Cotton linen stole with leaf prints in teal and brown. About 180 x 70 cm.",{new:8});
add("blessings-stole","Blessings Stole","stole","Silk",3800,"stole1","Cream","Made to order from floral offerings, each stole is eco-printed in our studio. No two pieces are identical.",{new:7});
add("dusk-organza-stole","Dusk Organza Stole","stole","Organza Silk",2600,"stole2","Wine","Sheer organza stole with wine and pink imprints.",{new:6});
add("earth-gauze-stole","Earth Gauze Stole","stole","Gauze Cotton",1400,"stole1","Mustard","Soft gauze cotton stole in earthy mustard tones.",{new:5,compare:1700});
add("swatch-book","Fabric Swatch Book","swatch","Mixed",1999,"swatch","Cream","A 19 x 11 inch book of 16 eco-printed fabric samples. Feel the texture, weight and drape beyond the screen.",{new:10,unit:""});
const CATS = {saree:["Sarees","Eco-printed sarees in silk, chanderi, kota and cotton."],fabric:["Fabric","Eco-printed yardage, sold per metre."],stole:["Stoles","Stoles and dupattas, each one unique."],swatch:["Swatch Book","Sixteen fabric samples in one book."],all:["All products","Everything from the studio."]};
const ALT = {saree1:["saree2","fabric1"],saree2:["saree3","fabric3"],saree3:["saree1","fabric2"],fabric1:["fabric3","craft"],fabric2:["fabric1","craft"],fabric3:["fabric2","saree2"],stole1:["stole2","craft"],stole2:["stole1","fabric3"],swatch:["fabric1","fabric2"],craft:["fabric1"]};

/* helpers */
const $ = (s,r=document)=>r.querySelector(s), $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const inr = n => "\u20B9" + Math.round(n).toLocaleString("en-IN");
const esc = s => String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const find = id => P.find(p=>p.id===id);
const src = k => IMG[k]||k;
let toastT; function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("on");clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove("on"),2200);}
const store = {get(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};

/* cart */
let cart = store.get("vanya_cart",[]).filter(i=>find(i.id));
const saveCart=()=>store.set("vanya_cart",cart);
const count=()=>cart.reduce((a,i)=>a+i.q,0);
const subtotal=()=>cart.reduce((a,i)=>a+find(i.id).price*i.q,0);
const shipping=()=>cart.length===0?0:(subtotal()>=FREE_SHIP?0:SHIP_FEE);
function addToCart(id,q=1,open=true){const p=find(id);if(!p||!p.stock)return;const l=cart.find(i=>i.id===id);if(l)l.q=Math.min(l.q+q,20);else cart.push({id,q});saveCart();renderHeaderCount();renderDrawer();if(open)openDrawer();else toast("Added to cart");}
function setQty(id,q){const l=cart.find(i=>i.id===id);if(!l)return;l.q=q;if(l.q<=0)cart=cart.filter(i=>i.id!==id);if(l&&l.q>20)l.q=20;saveCart();renderHeaderCount();renderDrawer();if(location.hash.startsWith("#/checkout"))route();}
function openDrawer(){renderDrawer();$("#drawer").classList.add("on");$("#overlay").classList.add("on");}
function closeAll(){$("#drawer").classList.remove("on");$("#overlay").classList.remove("on");$$(".mnav").forEach(m=>m.classList.remove("on"));}
function renderDrawer(){
 const lines = cart.map(i=>{const p=find(i.id);return `<div class="ci"><a href="#/product/${p.id}" data-close><img src="${src(p.img)}" alt="${esc(p.name)}"></a><div><h4>${esc(p.name)}</h4><div class="meta">${esc(p.fabric)}${p.unit?" | "+p.unit:""}</div><div class="row"><div class="qty"><button data-dec="${p.id}" aria-label="Decrease">-</button><span>${i.q}</span><button data-inc="${p.id}" aria-label="Increase">+</button></div><b>${inr(p.price*i.q)}</b></div><button class="rm" data-rm="${p.id}">Remove</button></div></div>`}).join("");
 const left = Math.max(0,FREE_SHIP-subtotal()), pct=Math.min(100,subtotal()/FREE_SHIP*100);
 $("#drawer").innerHTML = `<div class="dh"><h3>Your cart (${count()})</h3><button class="x" data-close aria-label="Close cart">&times;</button></div>
 <div class="db">${cart.length?`<div class="bar"><i style="width:${pct}%"></i></div><div class="note">${left?`Add ${inr(left)} more for free shipping`:"You have free shipping"}</div>${lines}`:`<div class="empty"><p>Your cart is empty.</p><a class="btn" href="#/collections/all" data-close>Continue shopping</a></div>`}</div>
 ${cart.length?`<div class="df"><div class="sub"><span>Subtotal</span><b>${inr(subtotal())}</b></div><p class="note">Shipping and taxes are shown at checkout.</p><a class="btn w" href="#/checkout" data-close>Checkout</a></div>`:""}`;
}
function renderHeaderCount(){const b=$("#cbadge");if(b){b.textContent=count();b.style.display=count()?"grid":"none";}}

/* header and footer */
const SVG={search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',bag:'<svg viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8a3 3 0 016 0"/></svg>',menu:'<svg viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18"/></svg>'};
const NAV = [
 ["Shop",null,[["Sarees","#/collections/saree"],["Fabric","#/collections/fabric"],["Stoles","#/collections/stole"],["Swatch Book","#/collections/swatch"],["All products","#/collections/all"]]],
 ["Fabrics",null,FABRICS.map(f=>[f[0],"#/collections/fabric?fabric="+encodeURIComponent(f[0])])],
 ["Preserve","#/page/preserve",null],
 ["Services",null,[["Business (B2B)","#/page/b2b"],["Workshops","#/page/workshops"],["Gifting","#/page/gifting"]]],
 ["About","#/page/about",null],["Contact","#/page/contact",null]];
function renderHeader(){
 $("#hdr").innerHTML = `<div class="hd"><button class="ib" id="burger" aria-label="Menu">${SVG.menu}</button><a class="logo" href="#/">${BRAND.toUpperCase()}</a>
 <nav class="nav">${NAV.map(n=>n[2]?`<div class="ni"><button>${n[0]} &#9662;</button><div class="dd">${n[2].map(l=>`<a href="${l[1]}">${l[0]}</a>`).join("")}</div></div>`:`<div class="ni"><a href="${n[1]}">${n[0]}</a></div>`).join("")}</nav>
 <div class="icons"><button class="ib" id="sbtn" aria-label="Search">${SVG.search}</button><button class="ib" id="cbtn" aria-label="Open cart">${SVG.bag}<span class="badge" id="cbadge"></span></button></div></div>
 <div class="sbar" id="sbar"><form id="sform"><input id="sq" type="search" placeholder="Search sarees, fabrics, stoles" aria-label="Search" autocomplete="off"><button class="btn">Search</button></form><div id="sug" class="wrap muted" style="max-width:700px;padding:0"></div></div>`;
 const m=document.createElement("div");m.className="mnav";m.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center"><b class="logo" style="font-size:24px">${BRAND.toUpperCase()}</b><button class="x" data-close aria-label="Close menu">&times;</button></div>`+NAV.map(n=>n[2]?`<details><summary>${n[0]}</summary>${n[2].map(l=>`<a href="${l[1]}" data-close>${l[0]}</a>`).join("")}</details>`:`<a href="${n[1]}" data-close>${n[0]}</a>`).join("");
 document.body.appendChild(m);
 renderHeaderCount();
}
function renderFooter(){
 $("#ftr").innerHTML=`<div class="fg"><div><h4>${BRAND}</h4><p style="font-size:15px;color:#bbb">Eco-printed sarees, fabrics and stoles, made with leaves, flowers and natural dyes.</p></div>
 <div><h4>Shop</h4><a href="#/collections/saree">Sarees</a><a href="#/collections/fabric">Fabric</a><a href="#/collections/stole">Stoles</a><a href="#/collections/swatch">Swatch Book</a></div>
 <div><h4>Studio</h4><a href="#/page/about">About</a><a href="#/page/preserve">Preserve with ${BRAND}</a><a href="#/page/workshops">Workshops</a><a href="#/page/b2b">Business</a><a href="#/page/gifting">Gifting</a><a href="#/page/shipping">Shipping and returns</a><a href="#/page/contact">Contact</a></div>
 <div><h4>Stay in touch</h4><form id="news"><input type="email" required placeholder="Your email" aria-label="Email"><button>Join</button></form><p id="newsmsg" style="font-size:13px;color:#aaa;margin:8px 0 0"></p></div></div>
 <div class="copy">&copy; ${new Date().getFullYear()} ${BRAND}. Sample store: products are placeholders and orders are not processed.</div>`;
}

/* components */
function card(p){const cls=!p.stock?`<span class="tag so">Sold out</span>`:p.compare?`<span class="tag">Sale</span>`:"";
 return `<a class="pc" href="#/product/${p.id}"><div class="ph"><img loading="lazy" src="${src(p.img)}" alt="${esc(p.name)}">${cls}${p.stock?`<button class="qa" data-add="${p.id}">Quick add</button>`:""}</div><div class="ty">${esc(p.fabric)}</div><h3>${esc(p.name)}</h3><div class="pr">${p.compare?`<s>${inr(p.compare)}</s>`:""}${inr(p.price)}${p.unit?` <small class="muted">${p.unit}</small>`:""}</div></a>`;}

/* pages */
function home(){
 return `<section class="hero" style="background-image:url(${IMG.hero})"><div class="in"><div class="tx"><h1>Rooted in Nature, Crafted with Purpose</h1><p>${BRAND} is a celebration of craft, sustainability and mindful making. We turn leaves, petals and natural dyes into timeless textiles, blending age-old techniques with contemporary design.</p><a class="btn" href="#/collections/all">Shop our collections</a></div></div></section>
 <section class="sec"><div class="wrap"><h2 class="sh">Shop Our Collections</h2><div class="grid g4">${["saree","fabric","stole","swatch"].map(c=>`<a class="tile" href="#/collections/${c}"><div class="ph"><img src="${src(find(P.find(p=>p.cat===c).id).img)}" alt="${CATS[c][0]}"></div><h3>${CATS[c][0]}</h3></a>`).join("")}</div></div></section>
 <section class="sec alt"><div class="wrap"><h2 class="sh">Fabrics of ${BRAND}</h2><div class="grid g4">${FABRICS.map(f=>`<a class="fab" href="#/collections/fabric?fabric=${encodeURIComponent(f[0])}"><div class="ph"><img loading="lazy" src="${src(f[2])}" alt="${f[0]}"></div><div class="b"><h3>${f[0]}</h3><p>${f[1]}</p></div></a>`).join("")}</div></div></section>
 <section class="sec"><div class="wrap split"><img loading="lazy" src="${IMG.swatch}" alt="Swatch book"><div><h2>Swatch Book</h2><p>Our 19" x 11" fabric swatch book is made to help you feel ${BRAND} textiles beyond the screen. It holds 16 of our fabrics, so you can check texture, weight, drape and how natural dyes sit on different fibres.</p><p class="price-l">Swatch Book price: ${inr(find("swatch-book").price)}</p><a class="btn" href="#/product/swatch-book">View the swatch book</a></div></div></section>
 <section class="sec sand"><div class="wrap"><h2 class="sh">Preserve with ${BRAND}</h2><div class="steps">${[["Send us your flowers","Courier your wedding garlands or special flowers to us with care."],["We sort them","Petals and leaves are gently separated and prepared."],["Fabric is prepared","We prepare the cloth that will carry the imprint."],["Flowers come to life","Eco-printing transfers the colours of your flowers onto fabric."],["Receive your memory","Your finished piece is sent back to you as a keepsake."]].map((s,i)=>`<div class="step"><b>${i+1}</b><h4>${s[0]}</h4><p>${s[1]}</p></div>`).join("")}</div><p class="center" style="margin-top:30px"><a class="btn" href="#/page/preserve">Know more</a></p></div></section>
 <section class="sec"><div class="wrap split"><div><h2>The Blessings Stole</h2><p>Carry the blessings of the hills, wherever you are. Each stole is made from floral offerings, with petals, leaves and herbs gathered in small batches and eco-printed in our studio.</p><p>Every offering is different, so every stole is too. No two pieces are identical. Made to order, just for you.</p><a class="btn" href="#/product/blessings-stole">Order a stole</a></div><div class="grid g3 keep" style="grid-template-columns:1fr 1fr 1fr">${["stole1","stole2","preserve"].map((k,i)=>`<div><img loading="lazy" style="aspect-ratio:3/5" src="${src(k)}" alt=""><div class="cap">${["Flowers gathered fresh","Petals with purpose","Made to wear"][i]}</div></div>`).join("")}</div></div></section>
 <section class="sec alt"><div class="wrap"><h2 class="sh">Offerings of ${BRAND}</h2><div class="grid g3"><a class="offer" href="#/page/b2b"><img loading="lazy" src="${IMG.craft}" alt=""><div class="ov"><h3>Business Solutions (B2B)</h3><p>Eco-printed fabrics for brands, designers and hotels.</p></div></a><a class="offer" href="#/page/workshops"><img loading="lazy" src="${IMG.workshop}" alt=""><div class="ov"><h3>Workshops</h3><p>Learn eco-printing and natural dyeing, hands-on.</p></div></a><a class="offer" href="#/page/gifting"><img loading="lazy" src="${IMG.stole2}" alt=""><div class="ov"><h3>Gifting</h3><p>Handcrafted gifts for weddings and special days.</p></div></a></div></div></section>
 <section class="sec"><div class="wrap"><h2 class="sh">Join our Instagram family</h2><div class="insta">${["saree1","fabric2","stole2","craft","saree3","workshop"].map(k=>`<a href="#/page/contact"><img loading="lazy" src="${src(k)}" alt=""></a>`).join("")}</div></div></section>
 <section class="sec alt"><div class="wrap center" style="max-width:960px"><h2 class="sh">What our customers say</h2><p class="rvsub">Read the latest reviews from our happy customers</p><div id="revs"></div><p><button class="btn o" id="wr">Write a review</button></p><form id="rf" class="f" style="display:none;text-align:left;margin-top:20px"><div><label>Name</label><input name="n" required></div><div><label>Rating</label><select name="r"><option>5</option><option>4</option><option>3</option><option>2</option><option>1</option></select></div><div class="full"><label>Your review</label><textarea name="t" rows="3" required></textarea></div><div class="full"><button class="btn">Submit review</button></div></form></div></section>`;
}
function revCard(x){return `<div class="rvc"><div class="rvh"><span class="rva">${esc((x.n||"V").trim()[0])}</span><span><b>${esc(x.n)}</b><i>${esc(x.w||"Recently")}</i></span></div><div class="rvs">${stars(x.r)}</div><p>${esc(x.t)}</p></div>`}
function paintReviews(){const el=$("#revs");if(!el)return;const all=[...store.get("vanya_reviews",[]),...SEED_REVS];const r=all.slice(0,2);const avg=(all.reduce((a,x)=>a+x.r,0)/all.length).toFixed(1);el.innerHTML=`<div class="ravg"><b>${avg}</b><span class="rvs big">${stars(Math.round(avg))}</span><i>Based on ${all.length} reviews</i></div><div class="grid g2 rvgrid">${r.map(revCard).join("")}</div>`;}

function collection(handle,q){
 const params=new URLSearchParams(q||"");const isSearch=handle==="__search";
 const term=(params.get("q")||"").trim().toLowerCase();
 let base=isSearch?P.filter(p=>!term||(p.name+" "+p.fabric+" "+p.colour+" "+p.cat+" "+p.desc).toLowerCase().includes(term)):P.filter(p=>handle==="all"||p.cat===handle);
 const st={fabric:params.getAll("fabric"),colour:params.getAll("colour"),max:+(params.get("max")||0),stock:params.get("stock")==="1",sort:params.get("sort")||"featured"};
 const maxP=Math.max(...base.map(p=>p.price),1000);
 const fabrics=[...new Set(base.map(p=>p.fabric))].sort(), cols=[...new Set(base.map(p=>p.colour))].sort();
 const title=isSearch?`Search: "${esc(params.get("q")||"")}"`:CATS[handle][0];
 const url=()=>location.hash.split("?")[0];
 const build=()=>{let l=base.filter(p=>(!st.fabric.length||st.fabric.includes(p.fabric))&&(!st.colour.length||st.colour.includes(p.colour))&&(!st.max||p.price<=st.max)&&(!st.stock||p.stock));
  const s={featured:(a,b)=>b.new-a.new,low:(a,b)=>a.price-b.price,high:(a,b)=>b.price-a.price,az:(a,b)=>a.name.localeCompare(b.name),za:(a,b)=>b.name.localeCompare(a.name)}[st.sort];l.sort(s);return l;};
 const list=build();
 const html=`<div class="ch"><div class="wrap"><h1>${title}</h1><p>${isSearch?`${list.length} result${list.length===1?"":"s"}`:CATS[handle][1]}</p></div></div>
 <div class="wrap"><div class="crumbs"><a href="#/">Home</a> / ${isSearch?"Search":title}</div><div class="cl"><aside class="fl" id="fl">
 ${isSearch?`<h4>Search</h4><input id="fq" value="${esc(params.get("q")||"")}" style="width:100%;padding:9px;border:1px solid var(--line)">`:""}
 <h4>Fabric</h4>${fabrics.map(f=>`<label><input type="checkbox" data-f="fabric" value="${f}" ${st.fabric.includes(f)?"checked":""}> ${f}</label>`).join("")}
 <h4>Colour</h4>${cols.map(f=>`<label><input type="checkbox" data-f="colour" value="${f}" ${st.colour.includes(f)?"checked":""}> ${f}</label>`).join("")}
 <h4>Max price: <span id="pv">${inr(st.max||maxP)}</span></h4><input type="range" id="pr" min="500" max="${Math.ceil(maxP/500)*500}" step="100" value="${st.max||Math.ceil(maxP/500)*500}">
 <h4>Availability</h4><label><input type="checkbox" id="stk" ${st.stock?"checked":""}> In stock only</label><p><button class="btn o" id="clr" style="padding:8px 18px">Clear filters</button></p></aside>
 <div><div class="tb"><button class="btn o" id="ftog" style="padding:9px 18px">Filters</button><span class="muted" id="cnt">${list.length} product${list.length===1?"":"s"}</span><label>Sort by <select id="sort">${[["featured","Featured"],["low","Price, low to high"],["high","Price, high to low"],["az","Name, A to Z"],["za","Name, Z to A"]].map(o=>`<option value="${o[0]}" ${st.sort===o[0]?"selected":""}>${o[1]}</option>`).join("")}</select></label></div>
 <div class="pg" id="pgrid">${list.length?list.map(card).join(""):`<div class="empty" style="grid-column:1/-1"><p>No products match. Try clearing a filter.</p></div>`}</div></div></div></div>`;
 return {html,after(){
  const upd=()=>{const l=build();$("#pgrid").innerHTML=l.length?l.map(card).join(""):`<div class="empty" style="grid-column:1/-1"><p>No products match. Try clearing a filter.</p></div>`;$("#cnt").textContent=`${l.length} product${l.length===1?"":"s"}`;};
  $$("[data-f]").forEach(c=>c.onchange=()=>{st[c.dataset.f]=$$(`[data-f=${c.dataset.f}]:checked`).map(x=>x.value);upd();});
  const pr=$("#pr"),top=+pr.max;pr.oninput=()=>{st.max=+pr.value>=top?0:+pr.value;$("#pv").textContent=inr(pr.value);upd();};
  $("#stk").onchange=e=>{st.stock=e.target.checked;upd();};$("#sort").onchange=e=>{st.sort=e.target.value;upd();};
  $("#clr").onclick=()=>{location.hash=url()+(isSearch?"?q="+encodeURIComponent(params.get("q")||""):"");route();};
  $("#ftog").onclick=()=>$("#fl").classList.toggle("open");
  const fq=$("#fq");if(fq)fq.onchange=()=>{location.hash="#/search?q="+encodeURIComponent(fq.value);};
 }};
}
const SEED_REVS=[
{n:"Ananya R.",r:5,w:"2 weeks ago",t:"The leaf prints on my chanderi saree are soft and detailed. Got compliments all evening at a family wedding."},
{n:"Meera S.",r:5,w:"3 weeks ago",t:"Lovely colours, very natural. The silk drapes well and the print looks even better in daylight."},
{n:"Kavita D.",r:4,t:"Beautiful stole. It is a little lighter in colour than the photo, but the print is crisp and the fabric is soft."},
{n:"Rohan & Isha",r:5,t:"Ordered a gift set for our parents' anniversary. The packing was neat and they loved the stoles."},
{n:"Priyanka T.",r:5,t:"I bought two metres of the cotton to stitch a kurta. The fabric is breathable and the print survived a gentle wash."},
{n:"Shalini N.",r:4,t:"The swatch book helped me pick a fabric before a bigger order. Good variety, and shipping was on time."},
{n:"Debjani M.",r:5,t:"Each piece feels one of a kind. My saree has a faint leaf pattern that I have not seen anywhere else."},
{n:"Farah K.",r:5,t:"Soft linen, earthy shades and careful finishing. I will order more yardage next month."},
{n:"Lakshmi V.",r:4,t:"Good quality and thoughtful packaging. Delivery took a day longer than I expected, but worth the wait."},
{n:"Tanvi J.",r:5,t:"Sent in my wedding flowers for a keepsake enquiry and the team was patient and kind with my questions."},
{n:"Sneha P.",r:5,t:"The stole is light, warm in colour and goes with almost everything in my wardrobe."},
{n:"Arjun B.",r:4,t:"Bought a silk stole as a gift for my sister. She liked it a lot, and the natural dye smell faded after airing."}];
const PROD_REV_POOL={
saree:[["Ananya R.",5,"The drape is lovely and the leaf print looks hand pressed. Exactly the earthy look I wanted."],["Neha G.",5,"Wore it to a family function and got many compliments. Light and easy to carry all day."],["Sunita L.",4,"Gorgeous print. The border is a bit narrower than I pictured, but I still love it."],["Pooja A.",5,"Soft fabric, good finishing, and the colours match the photos closely."],["Ritu C.",4,"Packed carefully and arrived on time. A slight variation in print, which is part of the charm."]],
fabric:[["Priyanka T.",5,"Ordered three metres for a kurta set. Even print, nice weight and it stitched well."],["Farah K.",5,"Soft hand feel and earthy colours. I washed it gently in cold water and the print held."],["Manish O.",4,"Good fabric. Cut length was accurate and the print looks great in daylight."],["Gauri H.",5,"Perfect for a blouse and cushion covers. Would order more yardage."],["Isha D.",4,"Nice quality for the price. Colour is slightly deeper than on my screen."]],
stole:[["Kavita D.",5,"Light, warm in colour and each print is different. It works with both kurtas and western wear."],["Sneha P.",5,"Soft to touch and the botanical print is beautiful. A lovely gift as well."],["Arjun B.",4,"Bought it for my sister and she loves it. Colours are a little muted, which suits it."],["Mitali S.",5,"Drapes nicely and does not feel heavy. Very happy with this stole."],["Zoya F.",4,"Good finishing and lovely print. Delivery took six days."]],
swatch:[["Shalini N.",5,"Great way to see and feel the fabrics before ordering. Sixteen swatches with a good mix of prints."],["Debjani M.",4,"Helpful and nicely presented. I wish there were a few more silk samples."],["Rahul K.",5,"Bought it for a boutique project and it helped our team pick fabrics quickly."],["Tanvi J.",5,"Pretty enough to keep on the shelf. The swatches show the real colours well."],["Lakshmi V.",4,"Good value. Swatches are small but enough to judge the print and feel."]]};
function prodRevs(p){const pool=PROD_REV_POOL[p.cat]||PROD_REV_POOL.stole;let h=0;for(const c of String(p.id))h=(h*31+c.charCodeAt(0))>>>0;const n=2;const out=[];for(let i=0;i<n;i++){const x=pool[(h+i)%pool.length];out.push({n:x[0],r:x[1],t:x[2],w:i===0?"2 weeks ago":"1 month ago"})}return out}
function stars(r){return "&#9733;".repeat(r)+"&#9734;".repeat(5-r)}
function product(id){
 const p=find(id);if(!p)return nf();
 const alts=[p.img,...(ALT[p.img]||[])];const rel=P.filter(x=>x.id!==p.id&&(x.cat===p.cat)).slice(0,4);
 return {html:`<div class="wrap"><div class="crumbs"><a href="#/">Home</a> / <a href="#/collections/${p.cat}">${CATS[p.cat][0]}</a> / ${esc(p.name)}</div>
 <div class="pd"><div class="gal"><div class="main"><img id="mainimg" src="${src(alts[0])}" alt="${esc(p.name)}"></div><div class="thumbs">${alts.map((a,i)=>`<button class="${i?"":"on"}" data-th="${src(a)}" aria-label="Image ${i+1}"><img src="${src(a)}" alt=""></button>`).join("")}</div></div>
 <div><div class="muted" style="text-transform:uppercase;letter-spacing:1px;font-size:13px">${esc(p.fabric)} | ${p.colour}</div><h1>${esc(p.name)}</h1><div class="pr">${p.compare?`<s>${inr(p.compare)}</s>`:""}${inr(p.price)} <small class="muted" style="font-size:15px">${p.unit}</small></div><p>${esc(p.desc)}</p>
 <p class="muted" style="font-size:14px">${p.stock?(p.cat==="fabric"?"In stock. Quantity is in metres.":"In stock. Ships in 5 to 7 working days."):"Sold out right now."}</p>
 <div class="pbtns"><div class="qty"><button id="qm" aria-label="Decrease">-</button><span id="qv">1</span><button id="qp" aria-label="Increase">+</button></div><button class="btn" id="atc" ${p.stock?"":"disabled"}>${p.stock?"Add to cart":"Sold out"}</button><button class="btn o" id="buy" ${p.stock?"":"disabled"}>Buy it now</button></div>
 <div class="trust"><span>Free shipping above ${inr(FREE_SHIP)}</span><span>Natural dyes, small batches</span><span>Slight variation in every piece is normal</span></div>
 <div class="acc"><details open><summary>Details</summary><p>${esc(p.desc)} Fabric: ${esc(p.fabric)}. Colour family: ${p.colour}.</p></details><details><summary>Care</summary><p>Dry clean or gentle hand wash in cold water with a mild soap. Dry in shade. Avoid direct sun and bleach to keep the natural colours.</p></details><details><summary>Shipping and returns</summary><p>Orders ship in 5 to 7 working days. Made-to-order pieces take up to 3 weeks. Unused items can be returned within 7 days of delivery.</p></details></div></div></div>
 ${(()=>{const rv=prodRevs(p);const avg=(rv.reduce((a,x)=>a+x.r,0)/rv.length).toFixed(1);return `<section id="prev" style="max-width:900px;margin:50px auto 20px"><h2 class="sh">Customer reviews</h2><p class="muted" style="text-align:center"><span class="rvs">${stars(Math.round(avg))}</span> ${avg} out of 5 from ${rv.length} reviews</p><div class="grid g2 rvgrid">${rv.map(revCard).join("")}</div></section>`})()}
 ${rel.length?`<h2 class="sh">You may also like</h2><div class="pg" style="grid-template-columns:repeat(4,1fr);padding-bottom:70px">${rel.map(card).join("")}</div>`:""}</div>`,
 after(){let q=1;$("#qp").onclick=()=>{q=Math.min(20,q+1);$("#qv").textContent=q};$("#qm").onclick=()=>{q=Math.max(1,q-1);$("#qv").textContent=q};
  $("#atc").onclick=()=>addToCart(p.id,q);$("#buy").onclick=()=>{addToCart(p.id,q,false);location.hash="#/checkout"};
  $$("[data-th]").forEach(b=>b.onclick=()=>{$("#mainimg").src=b.dataset.th;$$("[data-th]").forEach(x=>x.classList.remove("on"));b.classList.add("on");});}};
}
const PAGES={
 about:["About "+BRAND,`<p>${BRAND} makes eco-printed textiles by pressing real leaves and flowers into cloth and fixing the colours with natural dyes. Every piece is made in small batches, so no two are exactly alike.</p><p>We work with silk, chanderi, cotton and linen, and we try to waste as little as we can, including the flowers that would otherwise be thrown away after weddings and temple offerings.</p><p>This site is a sample store. Products, prices and stock are placeholders.</p>`],
 preserve:["Preserve with "+BRAND,`<p>Turn your wedding garlands or special flowers into a keepsake on fabric.</p><ol><li><b>Send us your flowers.</b> Courier them to us in the pack we share with you.</li><li><b>We sort them.</b> Petals and leaves are separated and prepared.</li><li><b>Fabric is prepared.</b> The cloth is readied to take the imprint.</li><li><b>Flowers come to life.</b> We eco-print the colours of your flowers onto the fabric.</li><li><b>Receive your memory.</b> The finished piece is sent back to you.</li></ol><p>Tell us what you have in mind through the contact form and we will reply with options.</p><p><a class="btn" href="#/page/contact">Enquire about preserving flowers</a></p>`],
 b2b:["Business Solutions (B2B)",`<p>Eco-printed fabrics, custom product development and small-batch manufacturing for fashion brands, designers, hotels and businesses.</p><p>Tell us what you need, the quantity and your timeline.</p><p><a class="btn" href="#/page/contact">Start an enquiry</a></p>`],
 workshops:["Workshops",`<p>Learn eco-printing and natural dyeing in a hands-on session. Suitable for individuals, schools and groups.</p><p>You will bundle leaves and flowers into cloth, steam them and take home your own printed piece.</p><p><a class="btn" href="#/page/contact">Ask about workshop dates</a></p>`],
 gifting:["Gifting",`<p>Handcrafted gifts for weddings, festivals and corporate occasions. Stoles, fabric sets and personalised keepsakes.</p><p><a class="btn" href="#/collections/stole">Browse stoles</a> &nbsp; <a class="btn o" href="#/page/contact">Ask about bulk gifts</a></p>`],
 shipping:["Shipping and returns",`<p>Shipping is free on orders above ${inr(FREE_SHIP)}. Below that, a flat ${inr(SHIP_FEE)} applies. In-stock items ship in 5 to 7 working days and made-to-order pieces take up to 3 weeks.</p><p>Unused items in original condition can be returned within 7 days of delivery. Swatch books and made-to-order pieces are not returnable.</p>`],
};
function page(k){
 if(k==="contact")return {html:`<div class="ch"><div class="wrap"><h1>Contact</h1><p>Questions about an order, a fabric, or a custom piece? Write to us.</p></div></div><div class="wrap"><div class="cf" style="padding:40px 0 70px"><form id="cform" class="f"><div><label>Name</label><input name="n" required></div><div><label>Email</label><input type="email" name="e" required></div><div class="full"><label>Subject</label><select name="s"><option>Order question</option><option>Preserve my flowers</option><option>Business enquiry</option><option>Workshops</option><option>Gifting</option><option>Something else</option></select></div><div class="full"><label>Message</label><textarea name="m" rows="5" required></textarea></div><div class="full"><button class="btn">Send message</button></div></form><p id="cmsg" class="center" style="margin-top:18px"></p></div></div>`,
  after(){$("#cform").onsubmit=e=>{e.preventDefault();const f=e.target;const m=store.get("vanya_msgs",[]);m.push({n:f.n.value,e:f.e.value,s:f.s.value,m:f.m.value,at:Date.now()});store.set("vanya_msgs",m);f.reset();$("#cmsg").textContent="Thank you. Your message is saved in this browser. This sample store does not send emails.";};}};
 const pg=PAGES[k];if(!pg)return nf();
 return {html:`<div class="ch"><div class="wrap"><h1>${pg[0]}</h1></div></div><div class="wrap"><div class="prose">${pg[1]}</div></div>`};
}
function nf(){return {html:`<div class="wrap empty"><h2>Page not found</h2><p><a class="btn" href="#/">Back to home</a></p></div>`};}

function checkout(){
 if(!cart.length)return {html:`<div class="wrap empty"><h2>Your cart is empty</h2><p><a class="btn" href="#/collections/all">Continue shopping</a></p></div>`};
 const d=store.get("vanya_ship",{});
 const lines=cart.map(i=>{const p=find(i.id);return `<div class="ci"><div style="position:relative"><img src="${src(p.img)}" alt=""><span class="badge" style="top:-6px;right:-6px;background:#555">${i.q}</span></div><div><h4>${esc(p.name)}</h4><div class="meta">${esc(p.fabric)}</div><div class="row"><div class="qty"><button data-dec="${p.id}">-</button><span>${i.q}</span><button data-inc="${p.id}">+</button></div><b>${inr(p.price*i.q)}</b></div></div></div>`}).join("");
 const total=subtotal()+shipping();
 return {html:`<div class="wrap"><div class="crumbs"><a href="#/">Home</a> / Checkout</div><div class="co"><div><div class="banner"><b>Sample order - no payment is taken.</b> You can fill this in to see how checkout works. Nothing is charged and no real order is placed.</div>
 <form id="cof" novalidate><h3>Contact</h3><div class="f" style="margin-bottom:24px"><div><label>Full name</label><input name="name" value="${esc(d.name||"")}" autocomplete="name"><div class="err" data-e="name"></div></div><div><label>Email</label><input name="email" type="email" value="${esc(d.email||"")}" autocomplete="email"><div class="err" data-e="email"></div></div><div class="full"><label>Mobile number</label><input name="phone" inputmode="numeric" value="${esc(d.phone||"")}" placeholder="10 digit number" autocomplete="tel"><div class="err" data-e="phone"></div></div></div>
 <h3>Shipping address</h3><div class="f" style="margin-bottom:24px"><div class="full"><label>Address</label><input name="addr" value="${esc(d.addr||"")}" autocomplete="street-address"><div class="err" data-e="addr"></div></div><div><label>City</label><input name="city" value="${esc(d.city||"")}"><div class="err" data-e="city"></div></div><div><label>PIN code</label><input name="pin" inputmode="numeric" maxlength="6" value="${esc(d.pin||"")}"><div class="err" data-e="pin"></div></div><div class="full"><label>State</label><select name="state">${["Andhra Pradesh","Delhi","Gujarat","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Rajasthan","Tamil Nadu","Telangana","Uttar Pradesh","Uttarakhand","West Bengal","Other"].map(s=>`<option ${d.state===s?"selected":""}>${s}</option>`).join("")}</select></div></div>
 <h3>Payment</h3><div class="pay"><label><input type="radio" name="pay" value="UPI" checked> UPI</label><label><input type="radio" name="pay" value="Card"> Card</label><label><input type="radio" name="pay" value="COD"> Cash on delivery</label></div><p class="note muted" style="font-size:13px">No payment details are asked for or stored here.</p>
 <button class="btn w" style="margin-top:14px">Place sample order</button></form></div>
 <aside class="sum"><h3>Order summary</h3>${lines}<div class="tr"><span>Subtotal</span><span>${inr(subtotal())}</span></div><div class="tr"><span>Shipping</span><span>${shipping()?inr(shipping()):"Free"}</span></div><div class="tr t"><span>Total</span><span>${inr(total)}</span></div></aside></div></div>`,
 after(){$("#cof").onsubmit=e=>{e.preventDefault();const f=e.target,v=n=>f[n].value.trim();const er={};
  if(v("name").length<2)er.name="Enter your name";if(!/^\S+@\S+\.\S+$/.test(v("email")))er.email="Enter a valid email";if(!/^[6-9]\d{9}$/.test(v("phone")))er.phone="Enter a 10 digit mobile number";
  if(v("addr").length<6)er.addr="Enter your address";if(v("city").length<2)er.city="Enter your city";if(!/^\d{6}$/.test(v("pin")))er.pin="Enter a 6 digit PIN code";
  $$("[data-e]").forEach(x=>x.textContent=er[x.dataset.e]||"");const first=Object.keys(er)[0];if(first){f[first].focus();return;}
  const data={name:v("name"),email:v("email"),phone:v("phone"),addr:v("addr"),city:v("city"),pin:v("pin"),state:f.state.value};store.set("vanya_ship",data);
  const id="VNY-"+Date.now().toString().slice(-6);const order={id,items:cart.map(i=>({id:i.id,name:find(i.id).name,q:i.q,price:find(i.id).price})),sub:subtotal(),ship:shipping(),total:subtotal()+shipping(),pay:f.pay.value,to:data,at:Date.now()};
  const o=store.get("vanya_orders",[]);o.push(order);store.set("vanya_orders",o);store.set("vanya_last",order);cart=[];saveCart();renderHeaderCount();renderDrawer();location.hash="#/order";};}};
}
function orderDone(){const o=store.get("vanya_last");if(!o)return nf();
 return {html:`<div class="wrap"><div class="ok"><div class="tick">&#10003;</div><h1>Sample order placed</h1><p>Order number <b>${o.id}</b>. No payment was taken and nothing will be shipped. This page shows how an order confirmation looks.</p><div class="sum" style="text-align:left;position:static">${o.items.map(i=>`<div class="tr"><span>${esc(i.name)} x ${i.q}</span><span>${inr(i.price*i.q)}</span></div>`).join("")}<div class="tr"><span>Shipping</span><span>${o.ship?inr(o.ship):"Free"}</span></div><div class="tr t"><span>Total</span><span>${inr(o.total)}</span></div><p class="muted" style="font-size:14px;margin:12px 0 0">Payment choice: ${o.pay}. Ship to: ${esc(o.to.name)}, ${esc(o.to.city)} ${esc(o.to.pin)}.</p></div><p style="margin-top:24px"><a class="btn" href="#/">Back to home</a></p></div></div>`};}

/* router */
function route(){
 const h=location.hash||"#/";const [path,qs]=h.slice(1).split("?");const seg=path.split("/").filter(Boolean);let r;
 closeAll();
 if(!seg.length)r={html:home(),after(){paintReviews();$("#wr").onclick=()=>{const f=$("#rf");f.style.display=f.style.display==="none"?"grid":"none"};$("#rf").onsubmit=e=>{e.preventDefault();const f=e.target;const rv=store.get("vanya_reviews",[]);rv.unshift({n:f.n.value,r:+f.r.value,t:f.t.value});store.set("vanya_reviews",rv);f.reset();f.style.display="none";paintReviews();toast("Thanks for your review")}}};
 else if(seg[0]==="collections")r=CATS[seg[1]]?collection(seg[1],qs):nf();
 else if(seg[0]==="search")r=collection("__search",qs);
 else if(seg[0]==="product")r=product(seg[1]);
 else if(seg[0]==="page")r=page(seg[1]);
 else if(seg[0]==="checkout")r=checkout();
 else if(seg[0]==="order")r=orderDone();
 else r=nf();
 $("#app").innerHTML=r.html;if(r.after)r.after();
 document.title=(seg[0]==="product"&&find(seg[1])?find(seg[1]).name+" | ":"")+BRAND+" | Eco-printed sarees, fabrics and stoles";
 if(!window.__keepScroll)window.scrollTo(0,0);
}
/* events */
document.addEventListener("click",e=>{const t=e.target;
 const a=t.closest("[data-add]");if(a){e.preventDefault();e.stopPropagation();addToCart(a.dataset.add,1,true);return;}
 const inc=t.closest("[data-inc]");if(inc){const l=cart.find(i=>i.id===inc.dataset.inc);setQty(inc.dataset.inc,l.q+1);return;}
 const dec=t.closest("[data-dec]");if(dec){const l=cart.find(i=>i.id===dec.dataset.dec);setQty(dec.dataset.dec,l.q-1);return;}
 const rm=t.closest("[data-rm]");if(rm){setQty(rm.dataset.rm,0);return;}
 if(t.closest("[data-close]")||t.id==="overlay"){closeAll();return;}
 if(t.closest("#cbtn")){openDrawer();return;}
 if(t.closest("#burger")){$(".mnav").classList.add("on");$("#overlay").classList.add("on");return;}
 if(t.closest("#sbtn")){const b=$("#sbar");b.classList.toggle("open");if(b.classList.contains("open"))$("#sq").focus();return;}
});
document.addEventListener("submit",e=>{
 if(e.target.id==="sform"){e.preventDefault();const q=$("#sq").value.trim();$("#sbar").classList.remove("open");location.hash="#/search?q="+encodeURIComponent(q);}
 if(e.target.id==="news"){e.preventDefault();const em=e.target.querySelector("input").value;const n=store.get("vanya_news",[]);n.push(em);store.set("vanya_news",n);e.target.reset();$("#newsmsg").textContent="Thanks for joining. Saved in this browser only.";}
});
document.addEventListener("input",e=>{if(e.target.id==="sq"){const t=e.target.value.trim().toLowerCase();$("#sug").innerHTML=t.length<2?"":P.filter(p=>p.name.toLowerCase().includes(t)).slice(0,5).map(p=>`<a href="#/product/${p.id}" style="display:block;padding:6px 0" onclick="document.getElementById('sbar').classList.remove('open')">${esc(p.name)} <small>${inr(p.price)}</small></a>`).join("");}});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeAll();});
window.addEventListener("hashchange",route);
renderHeader();renderFooter();renderDrawer();route();
