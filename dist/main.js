(()=>{"use strict";var e={607:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(r(860)),n=r(824),s=r(505),d=(0,i.default)();d.use(i.default.json()),d.use(i.default.urlencoded({extended:!0})),d.use("/api/productos",s.routerProducts),d.use("/api/carrito",n.routerCart),d.get("/",((e,t)=>{t.json({mensaje:"holis",edad:28,hobbie:"cantar",comida:"parri"})})),d.listen(8080,(()=>{console.log("conectado al puerto 8080")})).on("error",(e=>console.log(`error en el servidor ${e}`)))},824:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.routerCart=void 0;const o=(0,r(860).Router)();t.routerCart=o,o.post("/",((e,t)=>(e.body,t.json()))),o.delete("/:id",((e,t)=>{let{id:r}=e.params;return e.body,t.json()})),o.get("/:id/productos",((e,t)=>{let{id:r}=e.params;return t.json()})),o.post("/:id/productos",((e,t)=>{let{id:r}=e.params;return e.body,t.send()})),o.delete("/:id/productos/:id_prod",((e,t)=>{let{id:r,id_prod:o}=e.params;return t.json()}))},505:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.routerProducts=void 0;const o=r(860),i=r(492),n=(0,o.Router)();t.routerProducts=n;const s=new i.Container("src/database/productsContainer.txt");n.get("/:id?",((e,t)=>{let{id:r}=e.params;r?s.getById(parseInt(r)).then((e=>null==e?t.status(404).json({error:"Product not found"}):t.json(e))):s.getAll().then((e=>t.json(e)))})),n.post("/",((e,t)=>{let r=e.body;s.save(r).then((e=>t.json(e)))})),n.put("/:id",((e,t)=>{let{id:r}=e.params;return e.body,t.json()})),n.delete("/:id",((e,t)=>{let{id:r}=e.params;return t.json()}))},492:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,i)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&o(t,e,r);return i(t,e),t},s=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(i,n){function s(e){try{u(o.next(e))}catch(e){n(e)}}function d(e){try{u(o.throw(e))}catch(e){n(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,d)}u((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Container=void 0;const d=n(r(147));t.Container=class{constructor(e){this.nombreArchivo=e}save(e){return s(this,void 0,void 0,(function*(){try{const t=yield d.promises.readFile(this.nombreArchivo,"utf-8");let r=JSON.parse(t);return r.length?e.id=r[r.length-1].id+1:e.id=1,r.push(e),yield d.promises.writeFile(this.nombreArchivo,JSON.stringify(r,null,2),"utf-8"),console.log(`Se agregó el producto: ${e.id}`),e.id}catch(t){if("ENOENT"===t.code)return e.id=1,d.promises.writeFile(this.nombreArchivo,JSON.stringify([e],null,2),"utf-8"),console.log(`Se agregó el producto: ${e.id}`),e.id;console.log(t)}}))}update(e){return s(this,void 0,void 0,(function*(){try{const t=yield d.promises.readFile(this.nombreArchivo,"utf-8");let r=JSON.parse(t),o=r.findIndex((t=>t.id===e.id));if(o>-1)return r[o]=e,yield d.promises.writeFile(this.nombreArchivo,JSON.stringify(r,null,2),"utf-8"),console.log(`Se actualizo el producto: ${e.id}`),e.id;throw Error}catch(e){console.log(e)}}))}getAll(){return s(this,void 0,void 0,(function*(){try{const e=yield d.promises.readFile(this.nombreArchivo,"utf-8");return JSON.parse(e)}catch(e){console.log(e)}}))}getById(e){return s(this,void 0,void 0,(function*(){return(yield this.getAll()).find((t=>t.id===e))||null}))}deleteById(e){return s(this,void 0,void 0,(function*(){try{let t=yield this.getAll(),r=t.findIndex((t=>t.id===e));t.splice(r,1),yield d.promises.writeFile(this.nombreArchivo,JSON.stringify(t,null,2),"utf-8"),console.log(`Se eliminó el producto: ${e}`)}catch(e){console.log(e)}}))}}},860:e=>{e.exports=require("express")},147:e=>{e.exports=require("fs")}},t={};!function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,r),n.exports}(607)})();