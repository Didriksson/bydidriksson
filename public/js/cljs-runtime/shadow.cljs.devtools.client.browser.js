goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38916 = arguments.length;
var i__4737__auto___38917 = (0);
while(true){
if((i__4737__auto___38917 < len__4736__auto___38916)){
args__4742__auto__.push((arguments[i__4737__auto___38917]));

var G__38918 = (i__4737__auto___38917 + (1));
i__4737__auto___38917 = G__38918;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38723){
var G__38724 = cljs.core.first(seq38723);
var seq38723__$1 = cljs.core.next(seq38723);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38724,seq38723__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38725 = cljs.core.seq(sources);
var chunk__38726 = null;
var count__38727 = (0);
var i__38728 = (0);
while(true){
if((i__38728 < count__38727)){
var map__38735 = chunk__38726.cljs$core$IIndexed$_nth$arity$2(null,i__38728);
var map__38735__$1 = (((((!((map__38735 == null))))?(((((map__38735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38735):map__38735);
var src = map__38735__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38735__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38735__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38735__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38735__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38737){var e_38919 = e38737;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38919);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38919.message)].join('')));
}

var G__38920 = seq__38725;
var G__38921 = chunk__38726;
var G__38922 = count__38727;
var G__38923 = (i__38728 + (1));
seq__38725 = G__38920;
chunk__38726 = G__38921;
count__38727 = G__38922;
i__38728 = G__38923;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38725);
if(temp__5735__auto__){
var seq__38725__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38725__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38725__$1);
var G__38924 = cljs.core.chunk_rest(seq__38725__$1);
var G__38925 = c__4556__auto__;
var G__38926 = cljs.core.count(c__4556__auto__);
var G__38927 = (0);
seq__38725 = G__38924;
chunk__38726 = G__38925;
count__38727 = G__38926;
i__38728 = G__38927;
continue;
} else {
var map__38738 = cljs.core.first(seq__38725__$1);
var map__38738__$1 = (((((!((map__38738 == null))))?(((((map__38738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38738):map__38738);
var src = map__38738__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38738__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38738__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38738__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38738__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38743){var e_38928 = e38743;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38928);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38928.message)].join('')));
}

var G__38929 = cljs.core.next(seq__38725__$1);
var G__38930 = null;
var G__38931 = (0);
var G__38932 = (0);
seq__38725 = G__38929;
chunk__38726 = G__38930;
count__38727 = G__38931;
i__38728 = G__38932;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__38747 = cljs.core.seq(js_requires);
var chunk__38748 = null;
var count__38749 = (0);
var i__38750 = (0);
while(true){
if((i__38750 < count__38749)){
var js_ns = chunk__38748.cljs$core$IIndexed$_nth$arity$2(null,i__38750);
var require_str_38933 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38933);


var G__38934 = seq__38747;
var G__38935 = chunk__38748;
var G__38936 = count__38749;
var G__38937 = (i__38750 + (1));
seq__38747 = G__38934;
chunk__38748 = G__38935;
count__38749 = G__38936;
i__38750 = G__38937;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38747);
if(temp__5735__auto__){
var seq__38747__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38747__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38747__$1);
var G__38938 = cljs.core.chunk_rest(seq__38747__$1);
var G__38939 = c__4556__auto__;
var G__38940 = cljs.core.count(c__4556__auto__);
var G__38941 = (0);
seq__38747 = G__38938;
chunk__38748 = G__38939;
count__38749 = G__38940;
i__38750 = G__38941;
continue;
} else {
var js_ns = cljs.core.first(seq__38747__$1);
var require_str_38942 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38942);


var G__38943 = cljs.core.next(seq__38747__$1);
var G__38944 = null;
var G__38945 = (0);
var G__38946 = (0);
seq__38747 = G__38943;
chunk__38748 = G__38944;
count__38749 = G__38945;
i__38750 = G__38946;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__38754){
var map__38755 = p__38754;
var map__38755__$1 = (((((!((map__38755 == null))))?(((((map__38755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38755):map__38755);
var msg = map__38755__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38755__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38755__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38757(s__38758){
return (new cljs.core.LazySeq(null,(function (){
var s__38758__$1 = s__38758;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38758__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__38763 = cljs.core.first(xs__6292__auto__);
var map__38763__$1 = (((((!((map__38763 == null))))?(((((map__38763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38763):map__38763);
var src = map__38763__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38763__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38763__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__38758__$1,map__38763,map__38763__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38755,map__38755__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38757_$_iter__38759(s__38760){
return (new cljs.core.LazySeq(null,((function (s__38758__$1,map__38763,map__38763__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38755,map__38755__$1,msg,info,reload_info){
return (function (){
var s__38760__$1 = s__38760;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38760__$1);
if(temp__5735__auto____$1){
var s__38760__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38760__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__38760__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__38762 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__38761 = (0);
while(true){
if((i__38761 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__38761);
cljs.core.chunk_append(b__38762,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38947 = (i__38761 + (1));
i__38761 = G__38947;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38762),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38757_$_iter__38759(cljs.core.chunk_rest(s__38760__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38762),null);
}
} else {
var warning = cljs.core.first(s__38760__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38757_$_iter__38759(cljs.core.rest(s__38760__$2)));
}
} else {
return null;
}
break;
}
});})(s__38758__$1,map__38763,map__38763__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38755,map__38755__$1,msg,info,reload_info))
,null,null));
});})(s__38758__$1,map__38763,map__38763__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38755,map__38755__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38757(cljs.core.rest(s__38758__$1)));
} else {
var G__38952 = cljs.core.rest(s__38758__$1);
s__38758__$1 = G__38952;
continue;
}
} else {
var G__38953 = cljs.core.rest(s__38758__$1);
s__38758__$1 = G__38953;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__38765_38954 = cljs.core.seq(warnings);
var chunk__38766_38955 = null;
var count__38767_38956 = (0);
var i__38768_38957 = (0);
while(true){
if((i__38768_38957 < count__38767_38956)){
var map__38773_38958 = chunk__38766_38955.cljs$core$IIndexed$_nth$arity$2(null,i__38768_38957);
var map__38773_38959__$1 = (((((!((map__38773_38958 == null))))?(((((map__38773_38958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38773_38958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38773_38958):map__38773_38958);
var w_38960 = map__38773_38959__$1;
var msg_38961__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38773_38959__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38773_38959__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38773_38959__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38773_38959__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38964)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38962),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38963),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38961__$1)].join(''));


var G__39025 = seq__38765_38954;
var G__39026 = chunk__38766_38955;
var G__39027 = count__38767_38956;
var G__39028 = (i__38768_38957 + (1));
seq__38765_38954 = G__39025;
chunk__38766_38955 = G__39026;
count__38767_38956 = G__39027;
i__38768_38957 = G__39028;
continue;
} else {
var temp__5735__auto___39029 = cljs.core.seq(seq__38765_38954);
if(temp__5735__auto___39029){
var seq__38765_39030__$1 = temp__5735__auto___39029;
if(cljs.core.chunked_seq_QMARK_(seq__38765_39030__$1)){
var c__4556__auto___39031 = cljs.core.chunk_first(seq__38765_39030__$1);
var G__39032 = cljs.core.chunk_rest(seq__38765_39030__$1);
var G__39033 = c__4556__auto___39031;
var G__39034 = cljs.core.count(c__4556__auto___39031);
var G__39035 = (0);
seq__38765_38954 = G__39032;
chunk__38766_38955 = G__39033;
count__38767_38956 = G__39034;
i__38768_38957 = G__39035;
continue;
} else {
var map__38775_39036 = cljs.core.first(seq__38765_39030__$1);
var map__38775_39037__$1 = (((((!((map__38775_39036 == null))))?(((((map__38775_39036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38775_39036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38775_39036):map__38775_39036);
var w_39038 = map__38775_39037__$1;
var msg_39039__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38775_39037__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38775_39037__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38775_39037__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38775_39037__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39042)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39040),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39041),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39039__$1)].join(''));


var G__39043 = cljs.core.next(seq__38765_39030__$1);
var G__39044 = null;
var G__39045 = (0);
var G__39046 = (0);
seq__38765_38954 = G__39043;
chunk__38766_38955 = G__39044;
count__38767_38956 = G__39045;
i__38768_38957 = G__39046;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__38753_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38753_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38789){
var map__38790 = p__38789;
var map__38790__$1 = (((((!((map__38790 == null))))?(((((map__38790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38790):map__38790);
var msg = map__38790__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38790__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__38792 = cljs.core.seq(updates);
var chunk__38794 = null;
var count__38795 = (0);
var i__38796 = (0);
while(true){
if((i__38796 < count__38795)){
var path = chunk__38794.cljs$core$IIndexed$_nth$arity$2(null,i__38796);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38826_39049 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38830_39050 = null;
var count__38831_39051 = (0);
var i__38832_39052 = (0);
while(true){
if((i__38832_39052 < count__38831_39051)){
var node_39053 = chunk__38830_39050.cljs$core$IIndexed$_nth$arity$2(null,i__38832_39052);
if(cljs.core.not(node_39053.shadow$old)){
var path_match_39054 = shadow.cljs.devtools.client.browser.match_paths(node_39053.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39054)){
var new_link_39055 = (function (){var G__38853 = node_39053.cloneNode(true);
G__38853.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39054),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38853;
})();
(node_39053.shadow$old = true);

(new_link_39055.onload = ((function (seq__38826_39049,chunk__38830_39050,count__38831_39051,i__38832_39052,seq__38792,chunk__38794,count__38795,i__38796,new_link_39055,path_match_39054,node_39053,path,map__38790,map__38790__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39053);
});})(seq__38826_39049,chunk__38830_39050,count__38831_39051,i__38832_39052,seq__38792,chunk__38794,count__38795,i__38796,new_link_39055,path_match_39054,node_39053,path,map__38790,map__38790__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39054], 0));

goog.dom.insertSiblingAfter(new_link_39055,node_39053);


var G__39056 = seq__38826_39049;
var G__39057 = chunk__38830_39050;
var G__39058 = count__38831_39051;
var G__39059 = (i__38832_39052 + (1));
seq__38826_39049 = G__39056;
chunk__38830_39050 = G__39057;
count__38831_39051 = G__39058;
i__38832_39052 = G__39059;
continue;
} else {
var G__39060 = seq__38826_39049;
var G__39061 = chunk__38830_39050;
var G__39062 = count__38831_39051;
var G__39063 = (i__38832_39052 + (1));
seq__38826_39049 = G__39060;
chunk__38830_39050 = G__39061;
count__38831_39051 = G__39062;
i__38832_39052 = G__39063;
continue;
}
} else {
var G__39064 = seq__38826_39049;
var G__39065 = chunk__38830_39050;
var G__39066 = count__38831_39051;
var G__39067 = (i__38832_39052 + (1));
seq__38826_39049 = G__39064;
chunk__38830_39050 = G__39065;
count__38831_39051 = G__39066;
i__38832_39052 = G__39067;
continue;
}
} else {
var temp__5735__auto___39068 = cljs.core.seq(seq__38826_39049);
if(temp__5735__auto___39068){
var seq__38826_39069__$1 = temp__5735__auto___39068;
if(cljs.core.chunked_seq_QMARK_(seq__38826_39069__$1)){
var c__4556__auto___39070 = cljs.core.chunk_first(seq__38826_39069__$1);
var G__39071 = cljs.core.chunk_rest(seq__38826_39069__$1);
var G__39072 = c__4556__auto___39070;
var G__39073 = cljs.core.count(c__4556__auto___39070);
var G__39074 = (0);
seq__38826_39049 = G__39071;
chunk__38830_39050 = G__39072;
count__38831_39051 = G__39073;
i__38832_39052 = G__39074;
continue;
} else {
var node_39075 = cljs.core.first(seq__38826_39069__$1);
if(cljs.core.not(node_39075.shadow$old)){
var path_match_39076 = shadow.cljs.devtools.client.browser.match_paths(node_39075.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39076)){
var new_link_39077 = (function (){var G__38857 = node_39075.cloneNode(true);
G__38857.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39076),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38857;
})();
(node_39075.shadow$old = true);

(new_link_39077.onload = ((function (seq__38826_39049,chunk__38830_39050,count__38831_39051,i__38832_39052,seq__38792,chunk__38794,count__38795,i__38796,new_link_39077,path_match_39076,node_39075,seq__38826_39069__$1,temp__5735__auto___39068,path,map__38790,map__38790__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39075);
});})(seq__38826_39049,chunk__38830_39050,count__38831_39051,i__38832_39052,seq__38792,chunk__38794,count__38795,i__38796,new_link_39077,path_match_39076,node_39075,seq__38826_39069__$1,temp__5735__auto___39068,path,map__38790,map__38790__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39076], 0));

goog.dom.insertSiblingAfter(new_link_39077,node_39075);


var G__39078 = cljs.core.next(seq__38826_39069__$1);
var G__39079 = null;
var G__39080 = (0);
var G__39081 = (0);
seq__38826_39049 = G__39078;
chunk__38830_39050 = G__39079;
count__38831_39051 = G__39080;
i__38832_39052 = G__39081;
continue;
} else {
var G__39082 = cljs.core.next(seq__38826_39069__$1);
var G__39083 = null;
var G__39084 = (0);
var G__39085 = (0);
seq__38826_39049 = G__39082;
chunk__38830_39050 = G__39083;
count__38831_39051 = G__39084;
i__38832_39052 = G__39085;
continue;
}
} else {
var G__39086 = cljs.core.next(seq__38826_39069__$1);
var G__39087 = null;
var G__39088 = (0);
var G__39089 = (0);
seq__38826_39049 = G__39086;
chunk__38830_39050 = G__39087;
count__38831_39051 = G__39088;
i__38832_39052 = G__39089;
continue;
}
}
} else {
}
}
break;
}


var G__39090 = seq__38792;
var G__39091 = chunk__38794;
var G__39092 = count__38795;
var G__39093 = (i__38796 + (1));
seq__38792 = G__39090;
chunk__38794 = G__39091;
count__38795 = G__39092;
i__38796 = G__39093;
continue;
} else {
var G__39094 = seq__38792;
var G__39095 = chunk__38794;
var G__39096 = count__38795;
var G__39097 = (i__38796 + (1));
seq__38792 = G__39094;
chunk__38794 = G__39095;
count__38795 = G__39096;
i__38796 = G__39097;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38792);
if(temp__5735__auto__){
var seq__38792__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38792__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38792__$1);
var G__39098 = cljs.core.chunk_rest(seq__38792__$1);
var G__39099 = c__4556__auto__;
var G__39100 = cljs.core.count(c__4556__auto__);
var G__39101 = (0);
seq__38792 = G__39098;
chunk__38794 = G__39099;
count__38795 = G__39100;
i__38796 = G__39101;
continue;
} else {
var path = cljs.core.first(seq__38792__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38858_39105 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38862_39106 = null;
var count__38863_39107 = (0);
var i__38864_39108 = (0);
while(true){
if((i__38864_39108 < count__38863_39107)){
var node_39109 = chunk__38862_39106.cljs$core$IIndexed$_nth$arity$2(null,i__38864_39108);
if(cljs.core.not(node_39109.shadow$old)){
var path_match_39110 = shadow.cljs.devtools.client.browser.match_paths(node_39109.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39110)){
var new_link_39111 = (function (){var G__38870 = node_39109.cloneNode(true);
G__38870.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39110),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38870;
})();
(node_39109.shadow$old = true);

(new_link_39111.onload = ((function (seq__38858_39105,chunk__38862_39106,count__38863_39107,i__38864_39108,seq__38792,chunk__38794,count__38795,i__38796,new_link_39111,path_match_39110,node_39109,path,seq__38792__$1,temp__5735__auto__,map__38790,map__38790__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39109);
});})(seq__38858_39105,chunk__38862_39106,count__38863_39107,i__38864_39108,seq__38792,chunk__38794,count__38795,i__38796,new_link_39111,path_match_39110,node_39109,path,seq__38792__$1,temp__5735__auto__,map__38790,map__38790__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39110], 0));

goog.dom.insertSiblingAfter(new_link_39111,node_39109);


var G__39113 = seq__38858_39105;
var G__39114 = chunk__38862_39106;
var G__39115 = count__38863_39107;
var G__39116 = (i__38864_39108 + (1));
seq__38858_39105 = G__39113;
chunk__38862_39106 = G__39114;
count__38863_39107 = G__39115;
i__38864_39108 = G__39116;
continue;
} else {
var G__39117 = seq__38858_39105;
var G__39118 = chunk__38862_39106;
var G__39119 = count__38863_39107;
var G__39120 = (i__38864_39108 + (1));
seq__38858_39105 = G__39117;
chunk__38862_39106 = G__39118;
count__38863_39107 = G__39119;
i__38864_39108 = G__39120;
continue;
}
} else {
var G__39121 = seq__38858_39105;
var G__39122 = chunk__38862_39106;
var G__39123 = count__38863_39107;
var G__39124 = (i__38864_39108 + (1));
seq__38858_39105 = G__39121;
chunk__38862_39106 = G__39122;
count__38863_39107 = G__39123;
i__38864_39108 = G__39124;
continue;
}
} else {
var temp__5735__auto___39125__$1 = cljs.core.seq(seq__38858_39105);
if(temp__5735__auto___39125__$1){
var seq__38858_39126__$1 = temp__5735__auto___39125__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38858_39126__$1)){
var c__4556__auto___39127 = cljs.core.chunk_first(seq__38858_39126__$1);
var G__39128 = cljs.core.chunk_rest(seq__38858_39126__$1);
var G__39129 = c__4556__auto___39127;
var G__39130 = cljs.core.count(c__4556__auto___39127);
var G__39131 = (0);
seq__38858_39105 = G__39128;
chunk__38862_39106 = G__39129;
count__38863_39107 = G__39130;
i__38864_39108 = G__39131;
continue;
} else {
var node_39132 = cljs.core.first(seq__38858_39126__$1);
if(cljs.core.not(node_39132.shadow$old)){
var path_match_39133 = shadow.cljs.devtools.client.browser.match_paths(node_39132.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39133)){
var new_link_39136 = (function (){var G__38874 = node_39132.cloneNode(true);
G__38874.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39133),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38874;
})();
(node_39132.shadow$old = true);

(new_link_39136.onload = ((function (seq__38858_39105,chunk__38862_39106,count__38863_39107,i__38864_39108,seq__38792,chunk__38794,count__38795,i__38796,new_link_39136,path_match_39133,node_39132,seq__38858_39126__$1,temp__5735__auto___39125__$1,path,seq__38792__$1,temp__5735__auto__,map__38790,map__38790__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39132);
});})(seq__38858_39105,chunk__38862_39106,count__38863_39107,i__38864_39108,seq__38792,chunk__38794,count__38795,i__38796,new_link_39136,path_match_39133,node_39132,seq__38858_39126__$1,temp__5735__auto___39125__$1,path,seq__38792__$1,temp__5735__auto__,map__38790,map__38790__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39133], 0));

goog.dom.insertSiblingAfter(new_link_39136,node_39132);


var G__39137 = cljs.core.next(seq__38858_39126__$1);
var G__39138 = null;
var G__39139 = (0);
var G__39140 = (0);
seq__38858_39105 = G__39137;
chunk__38862_39106 = G__39138;
count__38863_39107 = G__39139;
i__38864_39108 = G__39140;
continue;
} else {
var G__39141 = cljs.core.next(seq__38858_39126__$1);
var G__39142 = null;
var G__39143 = (0);
var G__39144 = (0);
seq__38858_39105 = G__39141;
chunk__38862_39106 = G__39142;
count__38863_39107 = G__39143;
i__38864_39108 = G__39144;
continue;
}
} else {
var G__39145 = cljs.core.next(seq__38858_39126__$1);
var G__39146 = null;
var G__39147 = (0);
var G__39148 = (0);
seq__38858_39105 = G__39145;
chunk__38862_39106 = G__39146;
count__38863_39107 = G__39147;
i__38864_39108 = G__39148;
continue;
}
}
} else {
}
}
break;
}


var G__39149 = cljs.core.next(seq__38792__$1);
var G__39150 = null;
var G__39151 = (0);
var G__39152 = (0);
seq__38792 = G__39149;
chunk__38794 = G__39150;
count__38795 = G__39151;
i__38796 = G__39152;
continue;
} else {
var G__39153 = cljs.core.next(seq__38792__$1);
var G__39154 = null;
var G__39155 = (0);
var G__39156 = (0);
seq__38792 = G__39153;
chunk__38794 = G__39154;
count__38795 = G__39155;
i__38796 = G__39156;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__38875){
var map__38876 = p__38875;
var map__38876__$1 = (((((!((map__38876 == null))))?(((((map__38876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38876):map__38876);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38876__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__38885){
var map__38886 = p__38885;
var map__38886__$1 = (((((!((map__38886 == null))))?(((((map__38886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38886):map__38886);
var _ = map__38886__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38886__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38890,done,error){
var map__38891 = p__38890;
var map__38891__$1 = (((((!((map__38891 == null))))?(((((map__38891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38891):map__38891);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38891__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38893,done,error){
var map__38894 = p__38893;
var map__38894__$1 = (((((!((map__38894 == null))))?(((((map__38894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38894):map__38894);
var msg = map__38894__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38894__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38894__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38894__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38896){
var map__38897 = p__38896;
var map__38897__$1 = (((((!((map__38897 == null))))?(((((map__38897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38897):map__38897);
var src = map__38897__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38897__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38899 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38899) : done.call(null,G__38899));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38900){
var map__38901 = p__38900;
var map__38901__$1 = (((((!((map__38901 == null))))?(((((map__38901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38901):map__38901);
var msg__$1 = map__38901__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38901__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38903){var ex = e38903;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38904){
var map__38905 = p__38904;
var map__38905__$1 = (((((!((map__38905 == null))))?(((((map__38905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38905):map__38905);
var env = map__38905__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38905__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__38907){
var map__38908 = p__38907;
var map__38908__$1 = (((((!((map__38908 == null))))?(((((map__38908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38908):map__38908);
var msg = map__38908__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38908__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38910){
var map__38911 = p__38910;
var map__38911__$1 = (((((!((map__38911 == null))))?(((((map__38911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38911):map__38911);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38911__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38911__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__38913){
var map__38914 = p__38913;
var map__38914__$1 = (((((!((map__38914 == null))))?(((((map__38914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38914):map__38914);
var svc = map__38914__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38914__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
