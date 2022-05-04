goog.provide('bydidriksson.app.shop');
bydidriksson.app.shop.request_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)], null);
bydidriksson.app.shop.make_remote_call = (function bydidriksson$app$shop$make_remote_call(endpoint){
var c__27348__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27349__auto__ = (function (){var switch__27303__auto__ = (function (state_31309){
var state_val_31312 = (state_31309[(1)]);
if((state_val_31312 === (1))){
var inst_31292 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(endpoint,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bydidriksson.app.shop.request_opts], 0));
var state_31309__$1 = state_31309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31309__$1,(2),inst_31292);
} else {
if((state_val_31312 === (2))){
var inst_31297 = (state_31309[(2)]);
var inst_31301 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31297);
var inst_31302 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bydidriksson.app.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"shop-items","shop-items",-551022926),inst_31301);
var state_31309__$1 = state_31309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31309__$1,inst_31302);
} else {
return null;
}
}
});
return (function() {
var bydidriksson$app$shop$make_remote_call_$_state_machine__27304__auto__ = null;
var bydidriksson$app$shop$make_remote_call_$_state_machine__27304__auto____0 = (function (){
var statearr_31330 = [null,null,null,null,null,null,null];
(statearr_31330[(0)] = bydidriksson$app$shop$make_remote_call_$_state_machine__27304__auto__);

(statearr_31330[(1)] = (1));

return statearr_31330;
});
var bydidriksson$app$shop$make_remote_call_$_state_machine__27304__auto____1 = (function (state_31309){
while(true){
var ret_value__27305__auto__ = (function (){try{while(true){
var result__27306__auto__ = switch__27303__auto__(state_31309);
if(cljs.core.keyword_identical_QMARK_(result__27306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27306__auto__;
}
break;
}
}catch (e31332){var ex__27307__auto__ = e31332;
var statearr_31333_31343 = state_31309;
(statearr_31333_31343[(2)] = ex__27307__auto__);


if(cljs.core.seq((state_31309[(4)]))){
var statearr_31334_31344 = state_31309;
(statearr_31334_31344[(1)] = cljs.core.first((state_31309[(4)])));

} else {
throw ex__27307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31345 = state_31309;
state_31309 = G__31345;
continue;
} else {
return ret_value__27305__auto__;
}
break;
}
});
bydidriksson$app$shop$make_remote_call_$_state_machine__27304__auto__ = function(state_31309){
switch(arguments.length){
case 0:
return bydidriksson$app$shop$make_remote_call_$_state_machine__27304__auto____0.call(this);
case 1:
return bydidriksson$app$shop$make_remote_call_$_state_machine__27304__auto____1.call(this,state_31309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bydidriksson$app$shop$make_remote_call_$_state_machine__27304__auto__.cljs$core$IFn$_invoke$arity$0 = bydidriksson$app$shop$make_remote_call_$_state_machine__27304__auto____0;
bydidriksson$app$shop$make_remote_call_$_state_machine__27304__auto__.cljs$core$IFn$_invoke$arity$1 = bydidriksson$app$shop$make_remote_call_$_state_machine__27304__auto____1;
return bydidriksson$app$shop$make_remote_call_$_state_machine__27304__auto__;
})()
})();
var state__27350__auto__ = (function (){var statearr_31335 = f__27349__auto__();
(statearr_31335[(6)] = c__27348__auto__);

return statearr_31335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27350__auto__);
}));

return c__27348__auto__;
});
bydidriksson.app.shop.render_item = (function bydidriksson$app$shop$render_item(item){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"lg:w-1/4 md:w-1/2 p-4 w-full",new cljs.core.Keyword(null,"href","href",-793805698),["/items/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"id","id",-1388402092)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"block relative h-48 rounded overflow-hidden"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alt","alt",-3214426),"ecommerce",new cljs.core.Keyword(null,"className","className",-1983287057),"object-cover object-center w-full h-full block",new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"backend","backend",-847489124).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bydidriksson.app.config.configuration))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"image","image",-58725096)))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"mt-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"text-gray-500 text-xs tracking-widest title-font mb-1"], null),clojure.string.upper_case(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"category","category",-593092832)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"text-gray-900 title-font text-lg font-medium"], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"display-name","display-name",694513143))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"leading-relaxed mb-3"], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"short-description","short-description",-596423833))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"mt-1"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"price","price",22129180)))," kr"].join('')], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null));
});
bydidriksson.app.shop.render_items = (function bydidriksson$app$shop$render_items(shop_items){
if((shop_items == null)){
bydidriksson.app.shop.make_remote_call(new cljs.core.Keyword(null,"backend","backend",-847489124).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bydidriksson.app.config.configuration)));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading items..."], null);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(bydidriksson.app.shop.render_item,shop_items);
}
});
bydidriksson.app.shop.shop_page = (function bydidriksson$app$shop$shop_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"text-gray-600 body-font"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"container px-5 py-24 mx-auto"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"flex flex-wrap -m-4 justify-center"], null),bydidriksson.app.shop.render_items(new cljs.core.Keyword(null,"shop-items","shop-items",-551022926).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bydidriksson.app.state.state)))], null)], null)], null);
});

//# sourceMappingURL=bydidriksson.app.shop.js.map
