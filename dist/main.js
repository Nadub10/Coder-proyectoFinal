(()=>{"use strict";var t={747:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0});const o=new(r(27).CartContainer)("src/database/cartContainer.txt");e.default={createCart:function(t,e,r){let n=t.body;o.create(n).then((t=>e.json(t)),(t=>r(t)))},deleteCart:function(t,e,r){let{id:n}=t.params;n&&o.deleteCartById(parseInt(n)).then((t=>e.status(200).json(t)),(t=>r(t)))},addProduct:function(t,e,r){let{id:n}=t.params,i=t.body;o.addProductToCart(i,parseInt(n)).then((t=>e.json(t)),(t=>r(t)))},deleteProductFromCart:function(t,e,r){let{id:n,id_prod:i}=t.params;n&&o.deleteProductFromCart(parseInt(i),parseInt(n)).then((t=>e.status(200).json(t)),(t=>r(t)))},getAllProductsInCart:function(t,e,r){let{id:n}=t.params;n&&o.getProductsInCart(parseInt(n)).then((t=>e.json(t)),(t=>(console.log(t),r(t))))}}},322:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0});const o=new(r(811).ProductsContainer)("src/database/productsContainer.txt");e.default={createProduct:function(t,e,r){let n=t.body;o.create(n).then((t=>e.json(t)),(t=>r(t)))},deleteProduct:function(t,e,r){let{id:n}=t.params;n&&o.deleteById(parseInt(n)).then((t=>e.status(200).json(t)),(t=>r(t)))},updateProduct:function(t,e,r){let{id:n}=t.params,i=t.body;n&&o.update(i).then((t=>e.status(200).json(t)),(t=>r(t)))},getProducts:function(t,e,r){let{id:n}=t.params;n?o.getById(parseInt(n)).then((t=>e.json(t)),(t=>(console.log(t),r(t)))):o.getAll().then((t=>e.json(t)),(t=>r(t)))}}},27:function(t,e,r){var o=this&&this.__createBinding||(Object.create?function(t,e,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(e,r);n&&!("get"in n?!e.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,o,n)}:function(t,e,r,o){void 0===o&&(o=r),t[o]=e[r]}),n=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&o(e,t,r);return n(e,t),e},d=this&&this.__awaiter||function(t,e,r,o){return new(r||(r=Promise))((function(n,i){function d(t){try{a(o.next(t))}catch(t){i(t)}}function u(t){try{a(o.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(d,u)}a((o=o.apply(t,e||[])).next())}))},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.CartContainer=void 0;const a=i(r(147)),l=u(r(844));e.CartContainer=class{constructor(t){this.nombreArchivo=t}create(t){return d(this,void 0,void 0,(function*(){try{const e=yield a.promises.readFile(this.nombreArchivo,"utf-8");let r=JSON.parse(e);return r.length?t.id=r[r.length-1].id+1:t.id=1,r.push(t),yield a.promises.writeFile(this.nombreArchivo,JSON.stringify(r,null,2),"utf-8"),console.log(`Se agregó el carrito: ${t.id}`),t.id}catch(e){if("ENOENT"===e.code)return t.id=1,yield a.promises.writeFile(this.nombreArchivo,JSON.stringify([t],null,2),"utf-8"),console.log(`Se agregó el carrito: ${t.id}`),t.id;throw new l.default(e,500,"Error")}}))}addProductToCart(t,e){return d(this,void 0,void 0,(function*(){try{let r=yield this.getAllCarts(),o=r.findIndex((t=>t.id===e));if(-1===o)throw new l.default(`Carrito no encontrado ${e}`,404,"Not found");return r[o].products.length?t.id=r[o].products[r[o].products.length-1].id+1:t.id=1,r[o].products.push(t),yield a.promises.writeFile(this.nombreArchivo,JSON.stringify(r,null,2),"utf-8"),console.log(`Se agregó el producto: ${t.id} al carrito ${r[o].id} `),r[o].id}catch(t){if(t instanceof l.default)throw t;throw new l.default(t,500,"Error")}}))}getAllCarts(){return d(this,void 0,void 0,(function*(){try{const t=yield a.promises.readFile(this.nombreArchivo,"utf-8");return JSON.parse(t)}catch(t){throw new l.default(t,500,"Error")}}))}getCartById(t){return d(this,void 0,void 0,(function*(){try{let e=(yield this.getAllCarts()).find((e=>e.id===t));if(e)return e;throw new l.default("Carrito no encontrado",404,"Not found")}catch(t){if(t instanceof l.default)throw t;throw new l.default(t,500,"Error")}}))}getProductsInCart(t){return d(this,void 0,void 0,(function*(){try{let e=(yield this.getAllCarts()).find((e=>e.id===t));if(e)return null==e?void 0:e.products;throw new l.default("Carrito no encontrado",404,"Not found")}catch(t){if(t instanceof l.default)throw t;throw new l.default(t,500,"Error")}}))}deleteCartById(t){return d(this,void 0,void 0,(function*(){try{let e=yield this.getAllCarts(),r=e.findIndex((e=>e.id===t));if(e.splice(r,1),-1===r)throw new l.default("Carrito no encontrado",404,"Not found");return yield a.promises.writeFile(this.nombreArchivo,JSON.stringify(e,null,2),"utf-8"),console.log(`Se eliminó el carrito: ${t}`),"Se eliminó el carrito"}catch(t){if(t instanceof l.default)throw t;throw new l.default(t,500,"Error")}}))}deleteProductFromCart(t,e){return d(this,void 0,void 0,(function*(){try{let r=yield this.getAllCarts(),o=r.findIndex((t=>t.id===e));if(-1===o)throw new l.default("Carrito no encontrado",404,"Not found");let n=r[o].products.findIndex((e=>e.id===t));if(-1===n)throw new l.default("Producto no encontrado en el carrito",404,"Not found");return r[o].products.splice(n,1),yield a.promises.writeFile(this.nombreArchivo,JSON.stringify(r,null,2),"utf-8"),`Se eliminó el producto: ${t} del carrito ${e} `}catch(t){if(t instanceof l.default)throw t;throw new l.default(t,500,"Error")}}))}}},811:function(t,e,r){var o=this&&this.__createBinding||(Object.create?function(t,e,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(e,r);n&&!("get"in n?!e.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,o,n)}:function(t,e,r,o){void 0===o&&(o=r),t[o]=e[r]}),n=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&o(e,t,r);return n(e,t),e},d=this&&this.__awaiter||function(t,e,r,o){return new(r||(r=Promise))((function(n,i){function d(t){try{a(o.next(t))}catch(t){i(t)}}function u(t){try{a(o.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(d,u)}a((o=o.apply(t,e||[])).next())}))},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.ProductsContainer=void 0;const a=i(r(147)),l=u(r(844));e.ProductsContainer=class{constructor(t){this.nombreArchivo=t}create(t){return d(this,void 0,void 0,(function*(){try{const e=yield a.promises.readFile(this.nombreArchivo,"utf-8");let r=JSON.parse(e);return r.length?t.id=r[r.length-1].id+1:t.id=1,r.push(t),yield a.promises.writeFile(this.nombreArchivo,JSON.stringify(r,null,2),"utf-8"),console.log(`Se agregó el producto: ${t.id}`),t.id}catch(e){if("ENOENT"===e.code)return t.id=1,a.promises.writeFile(this.nombreArchivo,JSON.stringify([t],null,2),"utf-8"),console.log(`Se agregó el producto: ${t.id}`),t.id;throw new l.default(e,500,"Error")}}))}update(t){return d(this,void 0,void 0,(function*(){try{const e=yield a.promises.readFile(this.nombreArchivo,"utf-8");let r=JSON.parse(e),o=r.findIndex((e=>e.id===t.id));if(-1===o)throw new l.default(`Item no encontrado ${t.id}`,404,"Not found");return r[o]=t,yield a.promises.writeFile(this.nombreArchivo,JSON.stringify(r,null,2),"utf-8"),console.log(`Se actualizo el producto: ${t.id}`),t.id}catch(t){if(t instanceof l.default)throw t;throw new l.default(t,500,"Error")}}))}getAll(){return d(this,void 0,void 0,(function*(){try{const t=yield a.promises.readFile(this.nombreArchivo,"utf-8");return JSON.parse(t)}catch(t){throw new l.default(t,500,"Error")}}))}getById(t){return d(this,void 0,void 0,(function*(){try{let e=(yield this.getAll()).find((e=>e.id===t));if(e)return e;throw new l.default("Item no encontrado",404,"Not found")}catch(t){if(t instanceof l.default)throw t;throw new l.default(t,500,"Error")}}))}deleteById(t){return d(this,void 0,void 0,(function*(){try{let e=yield this.getAll(),r=e.findIndex((e=>e.id===t));if(e.splice(r,1),-1===r)throw new l.default("Item no encontrado",404,"Not found");return yield a.promises.writeFile(this.nombreArchivo,JSON.stringify(e,null,2),"utf-8"),console.log(`Se eliminó el producto: ${t}`),"Se eliminó el producto"}catch(t){if(t instanceof l.default)throw t;throw new l.default(t,500,"Error")}}))}}},607:function(t,e,r){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=o(r(860)),i=o(r(824)),d=o(r(160)),u=o(r(505)),a=(0,n.default)();a.use(n.default.json()),a.use(n.default.urlencoded({extended:!0})),a.use("/api/productos",u.default),a.use("/api/carrito",i.default),a.use("**",d.default),a.use(((t,e,r,o)=>{console.log(t),r.status(t.status).json({status:t.status,message:t.message})})),a.listen(8080,(()=>{console.log("conectado al puerto 8080")})).on("error",(t=>console.log(`error en el servidor ${t}`)))},844:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});class r extends Error{constructor(t,e,r){super(t),this.status=e,this.name=r}}e.default=r},824:function(t,e,r){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=r(860),i=o(r(747)),d=(0,n.Router)();d.route("/").post(i.default.createCart),d.route("/:id").delete(i.default.deleteCart),d.route("/:id/productos").get(i.default.getAllProductsInCart).post(i.default.addProduct),d.route("/:id/productos/:id_prod").delete(i.default.deleteProductFromCart),e.default=d},160:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0});const o=(0,r(860).Router)();o.get("",((t,e)=>e.status(404).json({mensaje:`Error ruta ${t.baseUrl}, metodo ${t.method} no implementada`}))),o.post("",((t,e)=>e.status(404).json({mensaje:`Error ruta ${t.baseUrl}, metodo ${t.method} no implementada`}))),o.put("",((t,e)=>e.status(404).json({mensaje:`Error ruta ${t.baseUrl}, metodo ${t.method} no implementada`}))),o.delete("",((t,e)=>e.status(404).json({mensaje:`Error ruta ${t.baseUrl}, metodo ${t.method} no implementada`}))),e.default=o},505:function(t,e,r){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=r(860),i=o(r(322)),d=(0,n.Router)();d.route("/").get(i.default.getProducts).post(i.default.createProduct),d.route("/:id").get(i.default.getProducts).put(i.default.updateProduct).delete(i.default.deleteProduct),e.default=d},860:t=>{t.exports=require("express")},147:t=>{t.exports=require("fs")}},e={};!function r(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,r),i.exports}(607)})();