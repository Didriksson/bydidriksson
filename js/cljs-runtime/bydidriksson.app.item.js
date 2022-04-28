goog.provide('bydidriksson.app.item');
bydidriksson.app.item.request_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)], null);
bydidriksson.app.item.make_remote_call = (function bydidriksson$app$item$make_remote_call(endpoint,item){
var c__27373__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27374__auto__ = (function (){var switch__27303__auto__ = (function (state_28496){
var state_val_28497 = (state_28496[(1)]);
if((state_val_28497 === (1))){
var inst_28490 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(endpoint,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bydidriksson.app.item.request_opts], 0));
var state_28496__$1 = state_28496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28496__$1,(2),inst_28490);
} else {
if((state_val_28497 === (2))){
var inst_28492 = (state_28496[(2)]);
var inst_28493 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_28492);
var inst_28494 = cljs.core.reset_BANG_(item,inst_28493);
var state_28496__$1 = state_28496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28496__$1,inst_28494);
} else {
return null;
}
}
});
return (function() {
var bydidriksson$app$item$make_remote_call_$_state_machine__27304__auto__ = null;
var bydidriksson$app$item$make_remote_call_$_state_machine__27304__auto____0 = (function (){
var statearr_28498 = [null,null,null,null,null,null,null];
(statearr_28498[(0)] = bydidriksson$app$item$make_remote_call_$_state_machine__27304__auto__);

(statearr_28498[(1)] = (1));

return statearr_28498;
});
var bydidriksson$app$item$make_remote_call_$_state_machine__27304__auto____1 = (function (state_28496){
while(true){
var ret_value__27305__auto__ = (function (){try{while(true){
var result__27306__auto__ = switch__27303__auto__(state_28496);
if(cljs.core.keyword_identical_QMARK_(result__27306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27306__auto__;
}
break;
}
}catch (e28499){var ex__27307__auto__ = e28499;
var statearr_28500_28504 = state_28496;
(statearr_28500_28504[(2)] = ex__27307__auto__);


if(cljs.core.seq((state_28496[(4)]))){
var statearr_28501_28505 = state_28496;
(statearr_28501_28505[(1)] = cljs.core.first((state_28496[(4)])));

} else {
throw ex__27307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28506 = state_28496;
state_28496 = G__28506;
continue;
} else {
return ret_value__27305__auto__;
}
break;
}
});
bydidriksson$app$item$make_remote_call_$_state_machine__27304__auto__ = function(state_28496){
switch(arguments.length){
case 0:
return bydidriksson$app$item$make_remote_call_$_state_machine__27304__auto____0.call(this);
case 1:
return bydidriksson$app$item$make_remote_call_$_state_machine__27304__auto____1.call(this,state_28496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bydidriksson$app$item$make_remote_call_$_state_machine__27304__auto__.cljs$core$IFn$_invoke$arity$0 = bydidriksson$app$item$make_remote_call_$_state_machine__27304__auto____0;
bydidriksson$app$item$make_remote_call_$_state_machine__27304__auto__.cljs$core$IFn$_invoke$arity$1 = bydidriksson$app$item$make_remote_call_$_state_machine__27304__auto____1;
return bydidriksson$app$item$make_remote_call_$_state_machine__27304__auto__;
})()
})();
var state__27375__auto__ = (function (){var statearr_28502 = f__27374__auto__();
(statearr_28502[(6)] = c__27373__auto__);

return statearr_28502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27375__auto__);
}));

return c__27373__auto__;
});
bydidriksson.app.item.loading_component = (function bydidriksson$app$item$loading_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-600 body-font overflow-hidden"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container px-5 py-24 mx-auto"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"lg:w-4/5 mx-auto flex flex-wrap"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading..."], null)], null)], null)], null);
});
bydidriksson.app.item.item_page = (function bydidriksson$app$item$item_page(parameters){
var item = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
bydidriksson.app.item.make_remote_call([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"backend","backend",-847489124).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bydidriksson.app.config.configuration))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(parameters)))].join(''),item);

return (function (){
if((cljs.core.deref(item) == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bydidriksson.app.item.loading_component], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-600 body-font overflow-hidden"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container px-5 py-24 mx-auto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"lg:w-4/5 mx-auto flex flex-wrap"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alt","alt",-3214426),"ecommerce",new cljs.core.Keyword(null,"class","class",-2030961996),"lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded",new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"backend","backend",-847489124).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bydidriksson.app.config.configuration))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(item),new cljs.core.Keyword(null,"image","image",-58725096)))].join('')], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm title-font text-gray-500 tracking-widest"], null),clojure.string.upper_case(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(item),new cljs.core.Keyword(null,"brand","brand",557863343)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-900 text-3xl title-font font-medium mb-1"], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(item),new cljs.core.Keyword(null,"name","name",1843675177))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"leading-relaxed"], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(item),new cljs.core.Keyword(null,"description","description",-1428560544))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex ml-6 items-center"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title-font font-medium text-2xl text-gray-900"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(item),new cljs.core.Keyword(null,"price","price",22129180)))," kr"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(bydidriksson.app.state.state,cljs.core.update,new cljs.core.Keyword(null,"cart","cart",-119094748),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.rand_int((10000000)),new cljs.core.Keyword(null,"item","item",249373802),cljs.core.deref(item)], null)], 0));
})], null),"L\u00E4gg till i varukorg"], null)], null)], null)], null)], null)], null);
}
});
});

//# sourceMappingURL=bydidriksson.app.item.js.map
