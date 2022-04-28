goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__41427 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__41428 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__41428);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__41429 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__41430 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__41430);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__41429);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__41427);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__41432 = arguments.length;
switch (G__41432) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__41433 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41433,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41433,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__41436_41453 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__41437_41454 = null;
var count__41438_41455 = (0);
var i__41439_41456 = (0);
while(true){
if((i__41439_41456 < count__41438_41455)){
var vec__41446_41457 = chunk__41437_41454.cljs$core$IIndexed$_nth$arity$2(null,i__41439_41456);
var container_41458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41446_41457,(0),null);
var comp_41459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41446_41457,(1),null);
reagent.dom.re_render_component(comp_41459,container_41458);


var G__41460 = seq__41436_41453;
var G__41461 = chunk__41437_41454;
var G__41462 = count__41438_41455;
var G__41463 = (i__41439_41456 + (1));
seq__41436_41453 = G__41460;
chunk__41437_41454 = G__41461;
count__41438_41455 = G__41462;
i__41439_41456 = G__41463;
continue;
} else {
var temp__5735__auto___41464 = cljs.core.seq(seq__41436_41453);
if(temp__5735__auto___41464){
var seq__41436_41465__$1 = temp__5735__auto___41464;
if(cljs.core.chunked_seq_QMARK_(seq__41436_41465__$1)){
var c__4556__auto___41466 = cljs.core.chunk_first(seq__41436_41465__$1);
var G__41467 = cljs.core.chunk_rest(seq__41436_41465__$1);
var G__41468 = c__4556__auto___41466;
var G__41469 = cljs.core.count(c__4556__auto___41466);
var G__41470 = (0);
seq__41436_41453 = G__41467;
chunk__41437_41454 = G__41468;
count__41438_41455 = G__41469;
i__41439_41456 = G__41470;
continue;
} else {
var vec__41449_41471 = cljs.core.first(seq__41436_41465__$1);
var container_41472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41449_41471,(0),null);
var comp_41473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41449_41471,(1),null);
reagent.dom.re_render_component(comp_41473,container_41472);


var G__41474 = cljs.core.next(seq__41436_41465__$1);
var G__41475 = null;
var G__41476 = (0);
var G__41477 = (0);
seq__41436_41453 = G__41474;
chunk__41437_41454 = G__41475;
count__41438_41455 = G__41476;
i__41439_41456 = G__41477;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
