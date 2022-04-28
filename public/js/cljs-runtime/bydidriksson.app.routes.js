goog.provide('bydidriksson.app.routes');
if((typeof bydidriksson !== 'undefined') && (typeof bydidriksson.app !== 'undefined') && (typeof bydidriksson.app.routes !== 'undefined') && (typeof bydidriksson.app.routes.current_view !== 'undefined')){
} else {
bydidriksson.app.routes.current_view = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
bydidriksson.app.routes.routes = reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("bydidriksson.app.routes","home","bydidriksson.app.routes/home",-602058631),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Var(function(){return bydidriksson.app.shop.shop_page;},new cljs.core.Symbol("bydidriksson.app.shop","shop-page","bydidriksson.app.shop/shop-page",-1231740527,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bydidriksson.app.shop","bydidriksson.app.shop",636114047,null),new cljs.core.Symbol(null,"shop-page","shop-page",849172939,null),"bydidriksson/app/shop.cljs",16,1,41,41,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(bydidriksson.app.shop.shop_page)?bydidriksson.app.shop.shop_page.cljs$lang$test:null)]))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["shop",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("bydidriksson.app.routes","shop","bydidriksson.app.routes/shop",775632664),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Var(function(){return bydidriksson.app.shop.shop_page;},new cljs.core.Symbol("bydidriksson.app.shop","shop-page","bydidriksson.app.shop/shop-page",-1231740527,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bydidriksson.app.shop","bydidriksson.app.shop",636114047,null),new cljs.core.Symbol(null,"shop-page","shop-page",849172939,null),"bydidriksson/app/shop.cljs",16,1,41,41,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(bydidriksson.app.shop.shop_page)?bydidriksson.app.shop.shop_page.cljs$lang$test:null)]))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["contact",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("bydidriksson.app.routes","contact","bydidriksson.app.routes/contact",82902790),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Var(function(){return bydidriksson.app.contact.contact_page;},new cljs.core.Symbol("bydidriksson.app.contact","contact-page","bydidriksson.app.contact/contact-page",814560445,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bydidriksson.app.contact","bydidriksson.app.contact",-1524589844,null),new cljs.core.Symbol(null,"contact-page","contact-page",-463507667,null),"bydidriksson/app/contact.cljs",19,1,15,15,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(bydidriksson.app.contact.contact_page)?bydidriksson.app.contact.contact_page.cljs$lang$test:null)]))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["about",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("bydidriksson.app.routes","about","bydidriksson.app.routes/about",1936451669),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Var(function(){return bydidriksson.app.about.about_page;},new cljs.core.Symbol("bydidriksson.app.about","about-page","bydidriksson.app.about/about-page",2050405322,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bydidriksson.app.about","bydidriksson.app.about",982671855,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"bydidriksson/app/about.cljs",(17),(1),(3),(3),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(bydidriksson.app.about.about_page)?bydidriksson.app.about.about_page.cljs$lang$test:null)]))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["shopping-cart",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("bydidriksson.app.routes","shoppingcart","bydidriksson.app.routes/shoppingcart",-902779741),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Var(function(){return bydidriksson.app.shoppingcart.shopping_cart_page;},new cljs.core.Symbol("bydidriksson.app.shoppingcart","shopping-cart-page","bydidriksson.app.shoppingcart/shopping-cart-page",-367414571,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bydidriksson.app.shoppingcart","bydidriksson.app.shoppingcart",871456342,null),new cljs.core.Symbol(null,"shopping-cart-page","shopping-cart-page",-1498015459,null),"bydidriksson/app/shoppingcart.cljs",25,1,93,93,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(bydidriksson.app.shoppingcart.shopping_cart_page)?bydidriksson.app.shoppingcart.shopping_cart_page.cljs$lang$test:null)]))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["items/:id",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("bydidriksson.app.routes","item","bydidriksson.app.routes/item",-1351738252),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Var(function(){return bydidriksson.app.item.item_page;},new cljs.core.Symbol("bydidriksson.app.item","item-page","bydidriksson.app.item/item-page",-798488207,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bydidriksson.app.item","bydidriksson.app.item",479791732,null),new cljs.core.Symbol(null,"item-page","item-page",1282130364,null),"bydidriksson/app/item.cljs",16,1,24,24,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parameters","parameters",410611779,null)], null)),null,(cljs.core.truth_(bydidriksson.app.item.item_page)?bydidriksson.app.item.item_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.int_QMARK_], null)], null)], null)], null)], null));
/**
 * Start the routing
 */
bydidriksson.app.routes.init_routes_BANG_ = (function bydidriksson$app$routes$init_routes_BANG_(){
return reitit.frontend.easy.start_BANG_(bydidriksson.app.routes.routes,(function (m){
return cljs.core.reset_BANG_(bydidriksson.app.routes.current_view,m);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),false], null));
});

//# sourceMappingURL=bydidriksson.app.routes.js.map
