goog.provide('bydidriksson.app.contact');
bydidriksson.app.contact.skicka = (function bydidriksson$app$contact$skicka(form){
var c__27348__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27349__auto__ = (function (){var switch__27303__auto__ = (function (state_31319){
var state_val_31320 = (state_31319[(1)]);
if((state_val_31320 === (1))){
var inst_31298 = cljs.core.deref(bydidriksson.app.config.configuration);
var inst_31299 = new cljs.core.Keyword(null,"backend","backend",-847489124).cljs$core$IFn$_invoke$arity$1(inst_31298);
var inst_31300 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31299),"/contact"].join('');
var inst_31307 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_31310 = [false,form];
var inst_31313 = cljs.core.PersistentHashMap.fromArrays(inst_31307,inst_31310);
var inst_31314 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_31300,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_31313], 0));
var state_31319__$1 = state_31319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31319__$1,(2),inst_31314);
} else {
if((state_val_31320 === (2))){
var inst_31316 = (state_31319[(2)]);
var inst_31317 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_31316], 0));
var state_31319__$1 = state_31319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31319__$1,inst_31317);
} else {
return null;
}
}
});
return (function() {
var bydidriksson$app$contact$skicka_$_state_machine__27304__auto__ = null;
var bydidriksson$app$contact$skicka_$_state_machine__27304__auto____0 = (function (){
var statearr_31322 = [null,null,null,null,null,null,null];
(statearr_31322[(0)] = bydidriksson$app$contact$skicka_$_state_machine__27304__auto__);

(statearr_31322[(1)] = (1));

return statearr_31322;
});
var bydidriksson$app$contact$skicka_$_state_machine__27304__auto____1 = (function (state_31319){
while(true){
var ret_value__27305__auto__ = (function (){try{while(true){
var result__27306__auto__ = switch__27303__auto__(state_31319);
if(cljs.core.keyword_identical_QMARK_(result__27306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27306__auto__;
}
break;
}
}catch (e31325){var ex__27307__auto__ = e31325;
var statearr_31327_31381 = state_31319;
(statearr_31327_31381[(2)] = ex__27307__auto__);


if(cljs.core.seq((state_31319[(4)]))){
var statearr_31328_31382 = state_31319;
(statearr_31328_31382[(1)] = cljs.core.first((state_31319[(4)])));

} else {
throw ex__27307__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31383 = state_31319;
state_31319 = G__31383;
continue;
} else {
return ret_value__27305__auto__;
}
break;
}
});
bydidriksson$app$contact$skicka_$_state_machine__27304__auto__ = function(state_31319){
switch(arguments.length){
case 0:
return bydidriksson$app$contact$skicka_$_state_machine__27304__auto____0.call(this);
case 1:
return bydidriksson$app$contact$skicka_$_state_machine__27304__auto____1.call(this,state_31319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bydidriksson$app$contact$skicka_$_state_machine__27304__auto__.cljs$core$IFn$_invoke$arity$0 = bydidriksson$app$contact$skicka_$_state_machine__27304__auto____0;
bydidriksson$app$contact$skicka_$_state_machine__27304__auto__.cljs$core$IFn$_invoke$arity$1 = bydidriksson$app$contact$skicka_$_state_machine__27304__auto____1;
return bydidriksson$app$contact$skicka_$_state_machine__27304__auto__;
})()
})();
var state__27350__auto__ = (function (){var statearr_31331 = f__27349__auto__();
(statearr_31331[(6)] = c__27348__auto__);

return statearr_31331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27350__auto__);
}));

return c__27348__auto__;
});
bydidriksson.app.contact.contact_page = (function bydidriksson$app$contact$contact_page(){
var sent = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var emailform = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"email","email",1415816706),"",new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"message","message",-406056002),""], null));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-600 body-font relative"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container px-5 py-24 mx-auto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col text-center w-full mb-12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"], null),"Kontakta oss"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"lg:w-1/3 mx-auto leading-relaxed text-base"], null),"Hittar du inte det du s\u00F6ker efter? Har du en fr\u00E5ga till oss? Eller vill du bara ber\u00E4tta n\u00E5got annat? Tveka inte! Fyll i formul\u00E4ret nedanf\u00F6r s\u00E5 \u00E5terkommer vi s\u00E5 fort vi kan."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"lg:w-1/2 md:w-2/3 mx-auto"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-wrap -m-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 w-1/2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),"name",new cljs.core.Keyword(null,"class","class",-2030961996),"leading-7 text-sm text-gray-600"], null),"Namn"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"name",new cljs.core.Keyword(null,"name","name",1843675177),"name",new cljs.core.Keyword(null,"class","class",-2030961996),"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31336_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(emailform,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),p1__31336_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 w-1/2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),"email",new cljs.core.Keyword(null,"class","class",-2030961996),"leading-7 text-sm text-gray-600"], null),"Epost"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"email",new cljs.core.Keyword(null,"id","id",-1388402092),"email",new cljs.core.Keyword(null,"name","name",1843675177),"email",new cljs.core.Keyword(null,"class","class",-2030961996),"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31337_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(emailform,cljs.core.assoc,new cljs.core.Keyword(null,"email","email",1415816706),p1__31337_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 w-full"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),"message",new cljs.core.Keyword(null,"class","class",-2030961996),"leading-7 text-sm text-gray-600"], null),"Meddelande"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"message",new cljs.core.Keyword(null,"name","name",1843675177),"message",new cljs.core.Keyword(null,"class","class",-2030961996),"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31338_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(emailform,cljs.core.assoc,new cljs.core.Keyword(null,"message","message",-406056002),p1__31338_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 w-full"], null),(cljs.core.truth_(cljs.core.deref(sent))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 rounded text-lg disabled:opacity-50 disabled",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Tack!"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
bydidriksson.app.contact.skicka(cljs.core.deref(emailform));

return cljs.core.reset_BANG_(sent,true);
})], null),"Skicka"], null))], null)], null)], null)], null)], null);
});
});

//# sourceMappingURL=bydidriksson.app.contact.js.map
