/* Suman home layout theme (overrides home, header, footer from app.js) */
(function(){
const I={
 user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>',
 insta:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8"/></svg>',
 wa:'<svg viewBox="0 0 24 24"><path d="M3 21l1.6-4.6A8.5 8.5 0 1 1 8 19.6L3 21z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2L9 8.5z"/></svg>',
 leaf:'<svg viewBox="0 0 24 24"><path d="M5 19C5 10 10 5 20 4c0 10-5 15-14 15z"/><path d="M5 19l9-9"/></svg>',
 hand:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>',
 flower:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2.5"/><path d="M12 9.5C10 6 11 3 12 3s2 3 0 6.5zM14.5 12c3.500-2 6.500-1 6.500 0s-3 2-6.500 0zM12 14.500c2 3.500 1 6.500 0 6.500s-2-3 0-6.500zM9.500 12c-3.500 2-6.500 1-6.500 0s3-2 6.500 0z"/></svg>',
 lock:'<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>',
 truck:'<svg viewBox="0 0 24 24"><path d="M2 6h12v10H2zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.500" r="1.800"/><circle cx="17" cy="17.500" r="1.800"/></svg>',
 recycle:'<svg viewBox="0 0 24 24"><path d="M8 4l-4 7h5M16 4l4 7M20 11l-4 7H9M12 18l-3 2 3 2M8 4l3-1M7 12l2-1"/></svg>'
};
const SOC=['<svg viewBox="0 0 24 24"><path d="M14 8V6.500c0-.8.3-1.200 1.300-1.200H17V2h-2.800C11.300 2 10 3.700 10 6v2H7.500v3.300H10V22h4V11.300h2.800L17.200 8z"/></svg>','<svg viewBox="0 0 24 24"><path d="M12 3c-2.700 0-3 0-4.100.1-1.500.1-2.700.4-3.600 1.300S3.200 6.400 3.100 7.900C3 9 3 9.300 3 12s0 3 .1 4.100c.1 1.500.4 2.700 1.300 3.600s2.100 1.200 3.600 1.300c1.100.1 1.400.1 4.100.1s3 0 4.100-.1c1.500-.1 2.700-.4 3.600-1.300s1.200-2.100 1.300-3.600c.1-1.100.1-1.400.1-4.100s0-3-.1-4.100c-.1-1.500-.4-2.700-1.300-3.600S17.600 3.200 16.100 3.100C15 3 14.700 3 12 3zm0 4.500a4.500 4.500 0 110 9 4.500 4.500 0 010-9zm0 1.800a2.700 2.700 0 100 5.400 2.700 2.700 0 000-5.400zM17.300 6a1.100 1.100 0 110 2.200 1.100 1.100 0 010-2.200z"/></svg>','<svg viewBox="0 0 24 24"><path d="M21.500 7.200a2.500 2.500 0 00-1.800-1.800C18.200 5 12 5 12 5s-6.200 0-7.700.4A2.500 2.500 0 002.500 7.200C2 8.700 2 12 2 12s0 3.300.5 4.800a2.500 2.500 0 001.800 1.800C5.800 19 12 19 12 19s6.200 0 7.700-.4a2.500 2.500 0 001.800-1.800c.5-1.500.5-4.800.5-4.800s0-3.300-.5-4.800zM10 15V9l5.200 3z"/></svg>','<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 00-3.600 19.300c-.1-.8-.2-2 0-2.900l1.200-5s-.3-.6-.3-1.500c0-1.400.8-2.400 1.800-2.400.9 0 1.300.6 1.300 1.400 0 .9-.5 2.100-.8 3.300-.2 1 .5 1.800 1.500 1.800 1.800 0 3.200-1.900 3.200-4.600 0-2.400-1.700-4.100-4.200-4.100-2.900 0-4.600 2.200-4.600 4.400 0 .9.300 1.800.8 2.300.1.100.1.200.1.300l-.3 1.200c0 .2-.2.200-.4.100-1.300-.6-2.100-2.500-2.100-4 0-3.300 2.400-6.300 6.900-6.300 3.600 0 6.400 2.600 6.400 6 0 3.600-2.300 6.500-5.400 6.500-1.100 0-2.100-.6-2.400-1.200l-.7 2.500c-.2.900-.9 2-1.300 2.700A10 10 0 1012 2z"/></svg>'];
const oldRH=renderHeader;
renderHeader=function(){
 document.querySelectorAll(".mnav").forEach(e=>e.remove());
 oldRH();
 const hd=$("#hdr .hd");if(!hd)return;
 const b=$("#burger"),s=$("#sbtn"),c=$("#cbtn"),lg=$("#hdr .hd .logo");
 const hl=document.createElement("div");hl.className="hl";hl.append(b,s);
 const hr=document.createElement("div");hr.className="hr";
 const ac=document.createElement("a");ac.className="ib";ac.href="#/page/contact";ac.setAttribute("aria-label","Account");ac.innerHTML=I.user;
 hr.append(ac,c);
 hd.className="hd2";hd.innerHTML="";hd.append(hl,lg,hr);lg.innerHTML=`<img class="lg" src="9-25-logo-lockup.png" alt="${BRAND}">`;
 renderHeaderCount();
};
const FAQ=[
["Can I send my own flowers?","Yes. Wedding garlands and special flowers can be couriered to us, and we will tell you how best to pack them."],
["How do I send my flowers?","Wrap them loosely in paper, avoid plastic bags, and ship them within a day. Our team shares simple packing steps when you enquire."],
["Will every piece be identical?","No. Natural dyes and real leaves make every print different, so each piece is one of a kind."],
["Are your products sustainable?","We use plant-based colours, leaves and flowers, and we make to order to keep waste low."],
["Do you offer personalised and bulk gifting?","Yes. Write to us through the Gifting page for weddings, festive gifts and corporate orders."],
["Do you ship across India?","Yes. Shipping is free on orders above \u20B93,000, and a small fee applies below that."],
["How long does a custom order take?","Made-to-order pieces usually take a few weeks. We confirm the timeline when you place your request."]];
const WHY=[["leaf","Eco Printed","Every piece carries the imprint of real leaves and flowers, so no two are alike."],["hand","Handcrafted with Care","Made by hand in small batches, with slow and mindful craft."],["flower","Natural Dyes","Colours come from plants, flowers and bark, not synthetic dyes."],["lock","Easy Checkout","A simple, clear checkout from cart to confirmation."],["truck","Free Shipping","Free delivery on orders above \u20B93,000 anywhere in India."],["recycle","Conscious Fashion","Designed to reduce waste and to last for years."]];
home=function(){
 const tile=c=>`<a class="ctile" href="#/collections/${c}"><img src="${src(P.find(p=>p.cat===c).img)}" alt="${CATS[c][0]}"><span>${CATS[c][0]}</span></a>`;
 const pimg=["saree1","fabric2","craft","saree2","stole1"];
 const steps=[["Send Us Your Flowers","Pack and courier your wedding garlands or special flowers to us with care."],["We Carefully Sort the Flowers","Our team gently separates and prepares each petal and leaf."],["Fabric Is Prepared","We prepare the cloth that will carry the natural imprint of your flowers."],["Your Flowers Come to Life Again","Eco-printing transfers the colours of your flowers onto fabric."],["Receive Your Timeless Memory","Your finished piece is sent back to you as a keepsake."]];
 return `<section class="hz"><div class="bg" style="background-image:url(${IMG.hero})"></div><video class="hzv" autoplay muted loop playsinline preload="metadata" poster="19-hero-rose-poster.jpg" aria-hidden="true"><source src="19-hero-rose.mp4" type="video/mp4"></video><div><h1>${BRAND.toUpperCase()}</h1><p>Rooted in nature, made by hand</p></div></section>
 <section class="intro"><div class="in"><h2>Rooted in Nature, Crafted with Purpose</h2><p>${BRAND} is a celebration of craft, sustainability and mindful making. We turn leaves, petals and natural dyes into timeless textiles, blending age-old techniques with contemporary design, so that every piece carries a story and adds value to the wardrobes and homes it joins.</p></div></section>
 <section class="zs a"><h2 class="ct">Shop Our Collections</h2><div class="ctiles">${["saree","fabric","stole","swatch"].map(tile).join("")}</div></section>
 <section class="zs b"><div class="zw wide"><h2 class="big">Fabrics of ${BRAND}</h2><div class="fabw"><button class="arw l" data-sc="-1" aria-label="Previous">&#8249;</button><div class="fabs" id="fabs">${FABRICS.map(f=>`<a class="fabc" href="#/collections/fabric?fabric=${encodeURIComponent(f[0])}"><img loading="lazy" src="${src(f[2])}" alt="${f[0]}"><h3>${f[0]}</h3><p>${f[1]}</p></a>`).join("")}</div><button class="arw r" data-sc="1" aria-label="Next">&#8250;</button></div><div class="cta"><a class="btn" href="#/collections/fabric">Shop now</a></div></div></section>
 <section class="zs b"><div class="sw"><div><h2>Swatch book</h2><p>Our 19" x 11" fabric swatch book is made to help you feel ${BRAND} textiles beyond the screen. It holds <b>16 of our fabrics</b>, so you can check texture, weight, drape and how natural dyes sit on different fibres.</p><p>Swatch Book Price: ${inr(find("swatch-book").price)}</p><p><a class="btn" href="#/product/swatch-book">Buy now</a></p></div><img loading="lazy" src="${IMG.swatch}" alt="Swatch book"></div></section>
 <section class="zs b"><div class="zw"><h2 class="big">Preserve with ${BRAND}</h2><div class="steps5">${steps.map((s,i)=>`<div class="st"><img loading="lazy" src="${src(pimg[i])}" alt=""><h4>${s[0]}</h4><p>${s[1]}</p></div>`).join("")}</div><div class="cta"><a class="btn" href="#/page/preserve">Preserve your memory</a></div></div></section>
 <section class="zs b lf"><div class="lfw"><div class="lfi"><video autoplay muted loop playsinline preload="metadata" poster="4-22-leaf-portrait.jpg" aria-hidden="true"><source src="3-22-leaf-portrait.mp4" type="video/mp4"></video><video autoplay muted loop playsinline preload="metadata" poster="6-23-leaf-doorway.jpg" aria-hidden="true"><source src="5-23-leaf-doorway.mp4" type="video/mp4"></video></div><div class="lft"><h2>Printed by the leaf</h2><p>Real leaves, pressed and steamed into linen. Each imprint keeps the veins, edges and small flaws of the leaf it came from, so every print is one of a kind.</p><a class="btn" href="#/collections/fabric">Shop fabrics</a></div></div></section>
 <section class="zs b rl"><div class="rlw"><video controls muted loop playsinline preload="none" poster="2-21-hero-poster.jpg"><source src="1-21-hero-natural.mp4" type="video/mp4"></video><div class="rlt"><h2>Worn, not just seen</h2><p>Watch how an eco-printed saree moves and drapes. Natural dyes and soft fabric, styled for everyday wear.</p><a class="btn" href="#/collections/saree">Shop sarees</a></div></div></section>
 <section class="zs b bless"><div class="zw wide"><h2 class="big">Blessings with ${BRAND}</h2><p><b>Carry the blessings of the hills, wherever you are.</b></p><p>Every <b>Blessings Stole</b> is made from floral offerings, with petals, leaves and herbs gathered in small batches and eco-printed in our studio.</p><p>Every offering is different, so every stole is too. No two pieces are identical, making each one a truly unique keepsake.</p><p>Made to order, just for you, so you can carry the blessings with you even when you cannot make the journey yourself.</p><div class="b3">${[["stole1","Fresh flowers, gathered with care"],["stole2","Petals with purpose"],["preserve","Made to wear and keep"]].map(x=>`<div><img loading="lazy" src="${src(x[0])}" alt=""><div>${x[1]}</div></div>`).join("")}</div><div class="cta"><a class="btn" href="#/product/blessings-stole">Order a stole</a></div></div></section>
 <section class="zs b"><div class="zw"><h2 class="big">Offerings of ${BRAND}</h2><div class="off3">${[["craft","Business Solutions (B2B)","Eco-printed textiles for brands and businesses","Work with us on eco-printed fabrics, custom development and small-batch production for designers, hotels and brands.","#/page/b2b","Know more"],["workshop","Workshops","Learn the art of eco-printing","Hands-on sessions in natural dyeing and eco-printing for individuals, schools and groups.","#/page/workshops","Know more"],["saree3","Gifting","Thoughtful gifts, made with purpose","Handcrafted keepsakes for weddings, festivals and corporate gifting, each one unique and sustainable.","#/page/gifting","Know more"]].map(o=>`<div class="of"><img loading="lazy" src="${src(o[0])}" alt=""><h3>${o[1]}</h3><h5>${o[2]}</h5><p>${o[3]}</p><a class="btn" href="${o[4]}">${o[5]}</a></div>`).join("")}</div></div></section>
 <section class="zs b ig"><div class="zw wide"><h2>Join our Instagram family</h2><p class="hn">@suman.eco</p><div class="ig4 one"><video autoplay muted loop playsinline preload="metadata" poster="8-24-ig-varmala.jpg" aria-hidden="true"><source src="7-24-ig-varmala.mp4" type="video/mp4"></video></div><div class="cta"><a class="btn ic" href="#/page/contact">${I.insta}Stay tuned</a></div></div></section>
 <section class="zs b"><div class="wrap center" style="max-width:960px"><h2 class="ct">What our customers say</h2><p class="rvsub">Read the latest reviews from our happy customers</p><div id="revs"></div><p><button class="btn" id="wr">Write a review</button></p><form id="rf" class="f" style="display:none;text-align:left;margin-top:20px"><div><label>Name</label><input name="n" required></div><div><label>Rating</label><select name="r"><option>5</option><option>4</option><option>3</option><option>2</option><option>1</option></select></div><div class="full"><label>Your review</label><textarea name="t" rows="3" required></textarea></div><div class="full"><button class="btn">Submit review</button></div></form></div></section>
 <section class="zs b"><div class="faq"><h2>Frequently Asked Questions</h2>${FAQ.map(q=>`<details><summary>${q[0]}</summary><p>${q[1]}</p></details>`).join("")}</div></section>
 <section class="zs b why"><h2>Why ${BRAND}</h2><div class="why6">${WHY.map(w=>`<div class="wy"><div class="t">${I[w[0]]}<span>${w[1]}</span></div><p>${w[2]}</p></div>`).join("")}</div></section>
 <a class="wa" href="#/page/contact" aria-label="Chat on WhatsApp">${I.wa}</a>`;
};
paintReviews=function(){const el=$("#revs");if(!el)return;const all=[...store.get("vanya_reviews",[]),...SEED_REVS.slice(0,2)];const r=all.slice(0,2);const avg=(all.reduce((a,x)=>a+x.r,0)/all.length).toFixed(1);el.innerHTML=`<div class="ravg"><b>${avg}</b><span class="rvs big">${stars(Math.round(avg))}</span><i>Based on ${all.length} reviews</i></div><div class="grid g2 rvgrid">${r.map(revCard).join("")}</div>`;};
renderFooter=function(){
 $("#ftr").innerHTML=`<div class="fz"><div><h4>Quick links</h4><a href="#/search">Search</a><a href="#/page/about">About</a><a href="#/page/shipping">Shipping and returns</a><a href="#/page/workshops">Workshops</a><a href="#/page/contact">Contact</a><h4 style="margin-top:34px">Subscribe to our emails</h4><form id="news"><input type="email" required placeholder="Email" aria-label="Email"><button aria-label="Subscribe">&#8594;</button></form><p id="newsmsg" style="font-size:13px;margin:8px 0 0"></p></div>
 <div><div class="bn"><img class="lgf" src="9-25-logo-lockup.png" alt="${BRAND}"></div><p class="bt">Eco-printed sarees, fabrics and stoles, made with leaves, flowers and natural dyes.</p><div class="soc">${SOC.map(s=>`<a href="#/page/contact" aria-label="Social">${s}</a>`).join("")}</div></div></div>
 <div class="cp">&copy; ${new Date().getFullYear()} ${BRAND}. Sample store: products are placeholders and orders are not processed.</div>`;
};
document.addEventListener("click",e=>{const b=e.target.closest("[data-sc]");if(b){const f=$("#fabs");if(f)f.scrollBy({left:+b.dataset.sc*f.clientWidth*.8,behavior:"smooth"});}});
renderHeader();renderFooter();route();

function reveal(){
 if(!("IntersectionObserver" in window)||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("go");io.unobserve(e.target);}}),{threshold:.08});
 document.querySelectorAll("#app .intro .in,#app .zs>h2,#app .zs>.zw>*,#app .zs>.sw>*,#app .zs>.faq>*,#app .zs>.wrap>*,#app .ctile,#app .fabc,#app .st,#app .of,#app .ig4 img,#app .wy,#app .b3>div").forEach(el=>{
  if(el.closest(".hz")||el.classList.contains("rvz"))return;
  const sib=[...el.parentNode.children].indexOf(el);el.style.setProperty("--d",Math.min(sib,6)*75+"ms");el.classList.add("rvz");io.observe(el);});
}
window.addEventListener("hashchange",()=>setTimeout(reveal,30));
function hzplay(){
 const v=document.querySelector("#app .hzv");if(!v)return;
 if(matchMedia("(prefers-reduced-motion: reduce)").matches){v.remove();return;}
 v.play().catch(()=>{});
}
window.addEventListener("hashchange",()=>setTimeout(hzplay,30));
hzplay();

reveal();
})();
