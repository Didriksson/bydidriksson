goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__38827__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__38827 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38828__i = 0, G__38828__a = new Array(arguments.length -  0);
while (G__38828__i < G__38828__a.length) {G__38828__a[G__38828__i] = arguments[G__38828__i + 0]; ++G__38828__i;}
  args = new cljs.core.IndexedSeq(G__38828__a,0,null);
} 
return G__38827__delegate.call(this,args);};
G__38827.cljs$lang$maxFixedArity = 0;
G__38827.cljs$lang$applyTo = (function (arglist__38829){
var args = cljs.core.seq(arglist__38829);
return G__38827__delegate(args);
});
G__38827.cljs$core$IFn$_invoke$arity$variadic = G__38827__delegate;
return G__38827;
})()
);

(o.error = (function() { 
var G__38830__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__38830 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38831__i = 0, G__38831__a = new Array(arguments.length -  0);
while (G__38831__i < G__38831__a.length) {G__38831__a[G__38831__i] = arguments[G__38831__i + 0]; ++G__38831__i;}
  args = new cljs.core.IndexedSeq(G__38831__a,0,null);
} 
return G__38830__delegate.call(this,args);};
G__38830.cljs$lang$maxFixedArity = 0;
G__38830.cljs$lang$applyTo = (function (arglist__38832){
var args = cljs.core.seq(arglist__38832);
return G__38830__delegate(args);
});
G__38830.cljs$core$IFn$_invoke$arity$variadic = G__38830__delegate;
return G__38830;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
