goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__38401,p__38402){
var map__38403 = p__38401;
var map__38403__$1 = (((((!((map__38403 == null))))?(((((map__38403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38403):map__38403);
var svc = map__38403__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38403__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38403__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38403__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38404 = p__38402;
var map__38404__$1 = (((((!((map__38404 == null))))?(((((map__38404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38404):map__38404);
var msg = map__38404__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38404__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38404__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38404__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38404__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__38416,p__38417){
var map__38418 = p__38416;
var map__38418__$1 = (((((!((map__38418 == null))))?(((((map__38418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38418):map__38418);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38418__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__38419 = p__38417;
var map__38419__$1 = (((((!((map__38419 == null))))?(((((map__38419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38419):map__38419);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38419__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__38427,p__38428){
var map__38429 = p__38427;
var map__38429__$1 = (((((!((map__38429 == null))))?(((((map__38429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38429):map__38429);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38429__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38429__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38430 = p__38428;
var map__38430__$1 = (((((!((map__38430 == null))))?(((((map__38430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38430):map__38430);
var msg = map__38430__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38430__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__38437,tid){
var map__38438 = p__38437;
var map__38438__$1 = (((((!((map__38438 == null))))?(((((map__38438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38438):map__38438);
var svc = map__38438__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38438__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__38450 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__38451 = null;
var count__38452 = (0);
var i__38453 = (0);
while(true){
if((i__38453 < count__38452)){
var vec__38466 = chunk__38451.cljs$core$IIndexed$_nth$arity$2(null,i__38453);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38466,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38466,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38482 = seq__38450;
var G__38483 = chunk__38451;
var G__38484 = count__38452;
var G__38485 = (i__38453 + (1));
seq__38450 = G__38482;
chunk__38451 = G__38483;
count__38452 = G__38484;
i__38453 = G__38485;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38450);
if(temp__5735__auto__){
var seq__38450__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38450__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38450__$1);
var G__38486 = cljs.core.chunk_rest(seq__38450__$1);
var G__38487 = c__4556__auto__;
var G__38488 = cljs.core.count(c__4556__auto__);
var G__38489 = (0);
seq__38450 = G__38486;
chunk__38451 = G__38487;
count__38452 = G__38488;
i__38453 = G__38489;
continue;
} else {
var vec__38469 = cljs.core.first(seq__38450__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38469,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38469,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38490 = cljs.core.next(seq__38450__$1);
var G__38491 = null;
var G__38492 = (0);
var G__38493 = (0);
seq__38450 = G__38490;
chunk__38451 = G__38491;
count__38452 = G__38492;
i__38453 = G__38493;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__38442_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__38442_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__38443_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__38443_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__38444_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__38444_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__38446_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__38446_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__38476){
var map__38477 = p__38476;
var map__38477__$1 = (((((!((map__38477 == null))))?(((((map__38477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38477):map__38477);
var svc = map__38477__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38477__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38477__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
