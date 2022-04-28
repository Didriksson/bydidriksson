goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__38407,p__38408){
var map__38409 = p__38407;
var map__38409__$1 = (((((!((map__38409 == null))))?(((((map__38409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38409):map__38409);
var svc = map__38409__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38409__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38409__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38409__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38410 = p__38408;
var map__38410__$1 = (((((!((map__38410 == null))))?(((((map__38410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38410):map__38410);
var msg = map__38410__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38410__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38410__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38410__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38410__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__38413,p__38414){
var map__38415 = p__38413;
var map__38415__$1 = (((((!((map__38415 == null))))?(((((map__38415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38415):map__38415);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38415__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__38416 = p__38414;
var map__38416__$1 = (((((!((map__38416 == null))))?(((((map__38416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38416):map__38416);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38416__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__38419,p__38420){
var map__38421 = p__38419;
var map__38421__$1 = (((((!((map__38421 == null))))?(((((map__38421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38421):map__38421);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38421__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38421__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38422 = p__38420;
var map__38422__$1 = (((((!((map__38422 == null))))?(((((map__38422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38422):map__38422);
var msg = map__38422__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38422__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__38427,tid){
var map__38428 = p__38427;
var map__38428__$1 = (((((!((map__38428 == null))))?(((((map__38428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38428):map__38428);
var svc = map__38428__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38428__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__38434 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__38435 = null;
var count__38436 = (0);
var i__38437 = (0);
while(true){
if((i__38437 < count__38436)){
var vec__38444 = chunk__38435.cljs$core$IIndexed$_nth$arity$2(null,i__38437);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38444,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38444,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38493 = seq__38434;
var G__38494 = chunk__38435;
var G__38495 = count__38436;
var G__38496 = (i__38437 + (1));
seq__38434 = G__38493;
chunk__38435 = G__38494;
count__38436 = G__38495;
i__38437 = G__38496;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38434);
if(temp__5735__auto__){
var seq__38434__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38434__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38434__$1);
var G__38497 = cljs.core.chunk_rest(seq__38434__$1);
var G__38498 = c__4556__auto__;
var G__38499 = cljs.core.count(c__4556__auto__);
var G__38500 = (0);
seq__38434 = G__38497;
chunk__38435 = G__38498;
count__38436 = G__38499;
i__38437 = G__38500;
continue;
} else {
var vec__38447 = cljs.core.first(seq__38434__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38447,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38447,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38501 = cljs.core.next(seq__38434__$1);
var G__38502 = null;
var G__38503 = (0);
var G__38504 = (0);
seq__38434 = G__38501;
chunk__38435 = G__38502;
count__38436 = G__38503;
i__38437 = G__38504;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__38430_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__38430_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__38431_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__38431_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__38432_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__38432_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__38433_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__38433_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__38483){
var map__38484 = p__38483;
var map__38484__$1 = (((((!((map__38484 == null))))?(((((map__38484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38484):map__38484);
var svc = map__38484__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38484__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38484__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
