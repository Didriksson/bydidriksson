goog.provide('bydidriksson.app.core');
cljs.core.enable_console_print_BANG_();
bydidriksson.app.core.app = (function bydidriksson$app$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bydidriksson.app.header.header], null),(cljs.core.truth_(cljs.core.deref(bydidriksson.app.routes.current_view))?(function (){var view = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bydidriksson.app.routes.current_view)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bydidriksson.app.routes.current_view))], null);
})():null)], null);
});
bydidriksson.app.core.render = (function bydidriksson$app$core$render(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bydidriksson.app.core.app], null),document.getElementById("root"));
});
bydidriksson.app.core.main = (function bydidriksson$app$core$main(){
bydidriksson.app.routes.init_routes_BANG_();

return bydidriksson.app.core.render();
});
goog.exportSymbol('bydidriksson.app.core.main', bydidriksson.app.core.main);
bydidriksson.app.core.reload_BANG_ = (function bydidriksson$app$core$reload_BANG_(){
return bydidriksson.app.core.render();
});

//# sourceMappingURL=bydidriksson.app.core.js.map
