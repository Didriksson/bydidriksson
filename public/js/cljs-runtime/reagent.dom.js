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
var _STAR_always_update_STAR__orig_val__41430 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__41431 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__41431);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__41432 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__41433 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__41433);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__41432);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__41430);
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
var G__41435 = arguments.length;
switch (G__41435) {
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

var vec__41436 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41436,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41436,(1),null);
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

var seq__41439_41456 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__41440_41457 = null;
var count__41441_41458 = (0);
var i__41442_41459 = (0);
while(true){
if((i__41442_41459 < count__41441_41458)){
var vec__41449_41460 = chunk__41440_41457.cljs$core$IIndexed$_nth$arity$2(null,i__41442_41459);
var container_41461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41449_41460,(0),null);
var comp_41462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41449_41460,(1),null);
reagent.dom.re_render_component(comp_41462,container_41461);


var G__41463 = seq__41439_41456;
var G__41464 = chunk__41440_41457;
var G__41465 = count__41441_41458;
var G__41466 = (i__41442_41459 + (1));
seq__41439_41456 = G__41463;
chunk__41440_41457 = G__41464;
count__41441_41458 = G__41465;
i__41442_41459 = G__41466;
continue;
} else {
var temp__5735__auto___41467 = cljs.core.seq(seq__41439_41456);
if(temp__5735__auto___41467){
var seq__41439_41468__$1 = temp__5735__auto___41467;
if(cljs.core.chunked_seq_QMARK_(seq__41439_41468__$1)){
var c__4556__auto___41469 = cljs.core.chunk_first(seq__41439_41468__$1);
var G__41470 = cljs.core.chunk_rest(seq__41439_41468__$1);
var G__41471 = c__4556__auto___41469;
var G__41472 = cljs.core.count(c__4556__auto___41469);
var G__41473 = (0);
seq__41439_41456 = G__41470;
chunk__41440_41457 = G__41471;
count__41441_41458 = G__41472;
i__41442_41459 = G__41473;
continue;
} else {
var vec__41452_41474 = cljs.core.first(seq__41439_41468__$1);
var container_41475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41452_41474,(0),null);
var comp_41476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41452_41474,(1),null);
reagent.dom.re_render_component(comp_41476,container_41475);


var G__41477 = cljs.core.next(seq__41439_41468__$1);
var G__41478 = null;
var G__41479 = (0);
var G__41480 = (0);
seq__41439_41456 = G__41477;
chunk__41440_41457 = G__41478;
count__41441_41458 = G__41479;
i__41442_41459 = G__41480;
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
