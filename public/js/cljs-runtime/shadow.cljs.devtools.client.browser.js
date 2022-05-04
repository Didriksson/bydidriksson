goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38881 = arguments.length;
var i__4737__auto___38882 = (0);
while(true){
if((i__4737__auto___38882 < len__4736__auto___38881)){
args__4742__auto__.push((arguments[i__4737__auto___38882]));

var G__38883 = (i__4737__auto___38882 + (1));
i__4737__auto___38882 = G__38883;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38623){
var G__38624 = cljs.core.first(seq38623);
var seq38623__$1 = cljs.core.next(seq38623);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38624,seq38623__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38634 = cljs.core.seq(sources);
var chunk__38635 = null;
var count__38636 = (0);
var i__38637 = (0);
while(true){
if((i__38637 < count__38636)){
var map__38644 = chunk__38635.cljs$core$IIndexed$_nth$arity$2(null,i__38637);
var map__38644__$1 = (((((!((map__38644 == null))))?(((((map__38644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38644):map__38644);
var src = map__38644__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38644__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38644__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38644__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38644__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38646){var e_38884 = e38646;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38884);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38884.message)].join('')));
}

var G__38885 = seq__38634;
var G__38886 = chunk__38635;
var G__38887 = count__38636;
var G__38888 = (i__38637 + (1));
seq__38634 = G__38885;
chunk__38635 = G__38886;
count__38636 = G__38887;
i__38637 = G__38888;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38634);
if(temp__5735__auto__){
var seq__38634__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38634__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38634__$1);
var G__38889 = cljs.core.chunk_rest(seq__38634__$1);
var G__38890 = c__4556__auto__;
var G__38891 = cljs.core.count(c__4556__auto__);
var G__38892 = (0);
seq__38634 = G__38889;
chunk__38635 = G__38890;
count__38636 = G__38891;
i__38637 = G__38892;
continue;
} else {
var map__38648 = cljs.core.first(seq__38634__$1);
var map__38648__$1 = (((((!((map__38648 == null))))?(((((map__38648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38648):map__38648);
var src = map__38648__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38648__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38648__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38648__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38648__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38650){var e_38893 = e38650;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38893);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38893.message)].join('')));
}

var G__38894 = cljs.core.next(seq__38634__$1);
var G__38895 = null;
var G__38896 = (0);
var G__38897 = (0);
seq__38634 = G__38894;
chunk__38635 = G__38895;
count__38636 = G__38896;
i__38637 = G__38897;
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
var seq__38651 = cljs.core.seq(js_requires);
var chunk__38652 = null;
var count__38653 = (0);
var i__38654 = (0);
while(true){
if((i__38654 < count__38653)){
var js_ns = chunk__38652.cljs$core$IIndexed$_nth$arity$2(null,i__38654);
var require_str_38898 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38898);


var G__38899 = seq__38651;
var G__38900 = chunk__38652;
var G__38901 = count__38653;
var G__38902 = (i__38654 + (1));
seq__38651 = G__38899;
chunk__38652 = G__38900;
count__38653 = G__38901;
i__38654 = G__38902;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38651);
if(temp__5735__auto__){
var seq__38651__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38651__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38651__$1);
var G__38903 = cljs.core.chunk_rest(seq__38651__$1);
var G__38904 = c__4556__auto__;
var G__38905 = cljs.core.count(c__4556__auto__);
var G__38906 = (0);
seq__38651 = G__38903;
chunk__38652 = G__38904;
count__38653 = G__38905;
i__38654 = G__38906;
continue;
} else {
var js_ns = cljs.core.first(seq__38651__$1);
var require_str_38907 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38907);


var G__38908 = cljs.core.next(seq__38651__$1);
var G__38909 = null;
var G__38910 = (0);
var G__38911 = (0);
seq__38651 = G__38908;
chunk__38652 = G__38909;
count__38653 = G__38910;
i__38654 = G__38911;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__38656){
var map__38657 = p__38656;
var map__38657__$1 = (((((!((map__38657 == null))))?(((((map__38657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38657):map__38657);
var msg = map__38657__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38657__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38657__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38659(s__38660){
return (new cljs.core.LazySeq(null,(function (){
var s__38660__$1 = s__38660;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38660__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__38665 = cljs.core.first(xs__6292__auto__);
var map__38665__$1 = (((((!((map__38665 == null))))?(((((map__38665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38665):map__38665);
var src = map__38665__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38665__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38665__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__38660__$1,map__38665,map__38665__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38657,map__38657__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38659_$_iter__38661(s__38662){
return (new cljs.core.LazySeq(null,((function (s__38660__$1,map__38665,map__38665__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38657,map__38657__$1,msg,info,reload_info){
return (function (){
var s__38662__$1 = s__38662;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38662__$1);
if(temp__5735__auto____$1){
var s__38662__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38662__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__38662__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__38664 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__38663 = (0);
while(true){
if((i__38663 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__38663);
cljs.core.chunk_append(b__38664,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38912 = (i__38663 + (1));
i__38663 = G__38912;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38664),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38659_$_iter__38661(cljs.core.chunk_rest(s__38662__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38664),null);
}
} else {
var warning = cljs.core.first(s__38662__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38659_$_iter__38661(cljs.core.rest(s__38662__$2)));
}
} else {
return null;
}
break;
}
});})(s__38660__$1,map__38665,map__38665__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38657,map__38657__$1,msg,info,reload_info))
,null,null));
});})(s__38660__$1,map__38665,map__38665__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38657,map__38657__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38659(cljs.core.rest(s__38660__$1)));
} else {
var G__38913 = cljs.core.rest(s__38660__$1);
s__38660__$1 = G__38913;
continue;
}
} else {
var G__38914 = cljs.core.rest(s__38660__$1);
s__38660__$1 = G__38914;
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
var seq__38667_38915 = cljs.core.seq(warnings);
var chunk__38668_38916 = null;
var count__38669_38917 = (0);
var i__38670_38918 = (0);
while(true){
if((i__38670_38918 < count__38669_38917)){
var map__38707_38919 = chunk__38668_38916.cljs$core$IIndexed$_nth$arity$2(null,i__38670_38918);
var map__38707_38920__$1 = (((((!((map__38707_38919 == null))))?(((((map__38707_38919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38707_38919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38707_38919):map__38707_38919);
var w_38921 = map__38707_38920__$1;
var msg_38922__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38707_38920__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38707_38920__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38707_38920__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38707_38920__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38925)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38923),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38924),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38922__$1)].join(''));


var G__38926 = seq__38667_38915;
var G__38927 = chunk__38668_38916;
var G__38928 = count__38669_38917;
var G__38929 = (i__38670_38918 + (1));
seq__38667_38915 = G__38926;
chunk__38668_38916 = G__38927;
count__38669_38917 = G__38928;
i__38670_38918 = G__38929;
continue;
} else {
var temp__5735__auto___38930 = cljs.core.seq(seq__38667_38915);
if(temp__5735__auto___38930){
var seq__38667_38931__$1 = temp__5735__auto___38930;
if(cljs.core.chunked_seq_QMARK_(seq__38667_38931__$1)){
var c__4556__auto___38932 = cljs.core.chunk_first(seq__38667_38931__$1);
var G__38933 = cljs.core.chunk_rest(seq__38667_38931__$1);
var G__38934 = c__4556__auto___38932;
var G__38935 = cljs.core.count(c__4556__auto___38932);
var G__38936 = (0);
seq__38667_38915 = G__38933;
chunk__38668_38916 = G__38934;
count__38669_38917 = G__38935;
i__38670_38918 = G__38936;
continue;
} else {
var map__38709_38937 = cljs.core.first(seq__38667_38931__$1);
var map__38709_38938__$1 = (((((!((map__38709_38937 == null))))?(((((map__38709_38937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38709_38937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38709_38937):map__38709_38937);
var w_38939 = map__38709_38938__$1;
var msg_38940__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38709_38938__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38709_38938__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38709_38938__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38709_38938__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38943)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38941),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38942),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38940__$1)].join(''));


var G__38944 = cljs.core.next(seq__38667_38931__$1);
var G__38945 = null;
var G__38946 = (0);
var G__38947 = (0);
seq__38667_38915 = G__38944;
chunk__38668_38916 = G__38945;
count__38669_38917 = G__38946;
i__38670_38918 = G__38947;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__38655_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38655_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38713){
var map__38714 = p__38713;
var map__38714__$1 = (((((!((map__38714 == null))))?(((((map__38714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38714):map__38714);
var msg = map__38714__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38714__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__38716 = cljs.core.seq(updates);
var chunk__38718 = null;
var count__38719 = (0);
var i__38720 = (0);
while(true){
if((i__38720 < count__38719)){
var path = chunk__38718.cljs$core$IIndexed$_nth$arity$2(null,i__38720);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38766_38948 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38770_38949 = null;
var count__38771_38950 = (0);
var i__38772_38951 = (0);
while(true){
if((i__38772_38951 < count__38771_38950)){
var node_38952 = chunk__38770_38949.cljs$core$IIndexed$_nth$arity$2(null,i__38772_38951);
if(cljs.core.not(node_38952.shadow$old)){
var path_match_38953 = shadow.cljs.devtools.client.browser.match_paths(node_38952.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38953)){
var new_link_38954 = (function (){var G__38794 = node_38952.cloneNode(true);
G__38794.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38953),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38794;
})();
(node_38952.shadow$old = true);

(new_link_38954.onload = ((function (seq__38766_38948,chunk__38770_38949,count__38771_38950,i__38772_38951,seq__38716,chunk__38718,count__38719,i__38720,new_link_38954,path_match_38953,node_38952,path,map__38714,map__38714__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_38952);
});})(seq__38766_38948,chunk__38770_38949,count__38771_38950,i__38772_38951,seq__38716,chunk__38718,count__38719,i__38720,new_link_38954,path_match_38953,node_38952,path,map__38714,map__38714__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38953], 0));

goog.dom.insertSiblingAfter(new_link_38954,node_38952);


var G__38955 = seq__38766_38948;
var G__38956 = chunk__38770_38949;
var G__38957 = count__38771_38950;
var G__38958 = (i__38772_38951 + (1));
seq__38766_38948 = G__38955;
chunk__38770_38949 = G__38956;
count__38771_38950 = G__38957;
i__38772_38951 = G__38958;
continue;
} else {
var G__38959 = seq__38766_38948;
var G__38960 = chunk__38770_38949;
var G__38961 = count__38771_38950;
var G__38962 = (i__38772_38951 + (1));
seq__38766_38948 = G__38959;
chunk__38770_38949 = G__38960;
count__38771_38950 = G__38961;
i__38772_38951 = G__38962;
continue;
}
} else {
var G__38963 = seq__38766_38948;
var G__38964 = chunk__38770_38949;
var G__38965 = count__38771_38950;
var G__38966 = (i__38772_38951 + (1));
seq__38766_38948 = G__38963;
chunk__38770_38949 = G__38964;
count__38771_38950 = G__38965;
i__38772_38951 = G__38966;
continue;
}
} else {
var temp__5735__auto___38967 = cljs.core.seq(seq__38766_38948);
if(temp__5735__auto___38967){
var seq__38766_38968__$1 = temp__5735__auto___38967;
if(cljs.core.chunked_seq_QMARK_(seq__38766_38968__$1)){
var c__4556__auto___38969 = cljs.core.chunk_first(seq__38766_38968__$1);
var G__38970 = cljs.core.chunk_rest(seq__38766_38968__$1);
var G__38971 = c__4556__auto___38969;
var G__38972 = cljs.core.count(c__4556__auto___38969);
var G__38973 = (0);
seq__38766_38948 = G__38970;
chunk__38770_38949 = G__38971;
count__38771_38950 = G__38972;
i__38772_38951 = G__38973;
continue;
} else {
var node_38974 = cljs.core.first(seq__38766_38968__$1);
if(cljs.core.not(node_38974.shadow$old)){
var path_match_38976 = shadow.cljs.devtools.client.browser.match_paths(node_38974.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38976)){
var new_link_38980 = (function (){var G__38800 = node_38974.cloneNode(true);
G__38800.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38976),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38800;
})();
(node_38974.shadow$old = true);

(new_link_38980.onload = ((function (seq__38766_38948,chunk__38770_38949,count__38771_38950,i__38772_38951,seq__38716,chunk__38718,count__38719,i__38720,new_link_38980,path_match_38976,node_38974,seq__38766_38968__$1,temp__5735__auto___38967,path,map__38714,map__38714__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_38974);
});})(seq__38766_38948,chunk__38770_38949,count__38771_38950,i__38772_38951,seq__38716,chunk__38718,count__38719,i__38720,new_link_38980,path_match_38976,node_38974,seq__38766_38968__$1,temp__5735__auto___38967,path,map__38714,map__38714__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38976], 0));

goog.dom.insertSiblingAfter(new_link_38980,node_38974);


var G__38982 = cljs.core.next(seq__38766_38968__$1);
var G__38983 = null;
var G__38984 = (0);
var G__38985 = (0);
seq__38766_38948 = G__38982;
chunk__38770_38949 = G__38983;
count__38771_38950 = G__38984;
i__38772_38951 = G__38985;
continue;
} else {
var G__38986 = cljs.core.next(seq__38766_38968__$1);
var G__38987 = null;
var G__38988 = (0);
var G__38989 = (0);
seq__38766_38948 = G__38986;
chunk__38770_38949 = G__38987;
count__38771_38950 = G__38988;
i__38772_38951 = G__38989;
continue;
}
} else {
var G__38990 = cljs.core.next(seq__38766_38968__$1);
var G__38991 = null;
var G__38992 = (0);
var G__38993 = (0);
seq__38766_38948 = G__38990;
chunk__38770_38949 = G__38991;
count__38771_38950 = G__38992;
i__38772_38951 = G__38993;
continue;
}
}
} else {
}
}
break;
}


var G__38994 = seq__38716;
var G__38995 = chunk__38718;
var G__38996 = count__38719;
var G__38997 = (i__38720 + (1));
seq__38716 = G__38994;
chunk__38718 = G__38995;
count__38719 = G__38996;
i__38720 = G__38997;
continue;
} else {
var G__38998 = seq__38716;
var G__38999 = chunk__38718;
var G__39000 = count__38719;
var G__39001 = (i__38720 + (1));
seq__38716 = G__38998;
chunk__38718 = G__38999;
count__38719 = G__39000;
i__38720 = G__39001;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38716);
if(temp__5735__auto__){
var seq__38716__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38716__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38716__$1);
var G__39002 = cljs.core.chunk_rest(seq__38716__$1);
var G__39003 = c__4556__auto__;
var G__39004 = cljs.core.count(c__4556__auto__);
var G__39005 = (0);
seq__38716 = G__39002;
chunk__38718 = G__39003;
count__38719 = G__39004;
i__38720 = G__39005;
continue;
} else {
var path = cljs.core.first(seq__38716__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38806_39006 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38810_39007 = null;
var count__38811_39008 = (0);
var i__38812_39009 = (0);
while(true){
if((i__38812_39009 < count__38811_39008)){
var node_39010 = chunk__38810_39007.cljs$core$IIndexed$_nth$arity$2(null,i__38812_39009);
if(cljs.core.not(node_39010.shadow$old)){
var path_match_39011 = shadow.cljs.devtools.client.browser.match_paths(node_39010.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39011)){
var new_link_39012 = (function (){var G__38834 = node_39010.cloneNode(true);
G__38834.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39011),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38834;
})();
(node_39010.shadow$old = true);

(new_link_39012.onload = ((function (seq__38806_39006,chunk__38810_39007,count__38811_39008,i__38812_39009,seq__38716,chunk__38718,count__38719,i__38720,new_link_39012,path_match_39011,node_39010,path,seq__38716__$1,temp__5735__auto__,map__38714,map__38714__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39010);
});})(seq__38806_39006,chunk__38810_39007,count__38811_39008,i__38812_39009,seq__38716,chunk__38718,count__38719,i__38720,new_link_39012,path_match_39011,node_39010,path,seq__38716__$1,temp__5735__auto__,map__38714,map__38714__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39011], 0));

goog.dom.insertSiblingAfter(new_link_39012,node_39010);


var G__39013 = seq__38806_39006;
var G__39014 = chunk__38810_39007;
var G__39015 = count__38811_39008;
var G__39016 = (i__38812_39009 + (1));
seq__38806_39006 = G__39013;
chunk__38810_39007 = G__39014;
count__38811_39008 = G__39015;
i__38812_39009 = G__39016;
continue;
} else {
var G__39017 = seq__38806_39006;
var G__39018 = chunk__38810_39007;
var G__39019 = count__38811_39008;
var G__39020 = (i__38812_39009 + (1));
seq__38806_39006 = G__39017;
chunk__38810_39007 = G__39018;
count__38811_39008 = G__39019;
i__38812_39009 = G__39020;
continue;
}
} else {
var G__39021 = seq__38806_39006;
var G__39022 = chunk__38810_39007;
var G__39023 = count__38811_39008;
var G__39024 = (i__38812_39009 + (1));
seq__38806_39006 = G__39021;
chunk__38810_39007 = G__39022;
count__38811_39008 = G__39023;
i__38812_39009 = G__39024;
continue;
}
} else {
var temp__5735__auto___39025__$1 = cljs.core.seq(seq__38806_39006);
if(temp__5735__auto___39025__$1){
var seq__38806_39026__$1 = temp__5735__auto___39025__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38806_39026__$1)){
var c__4556__auto___39027 = cljs.core.chunk_first(seq__38806_39026__$1);
var G__39028 = cljs.core.chunk_rest(seq__38806_39026__$1);
var G__39029 = c__4556__auto___39027;
var G__39030 = cljs.core.count(c__4556__auto___39027);
var G__39031 = (0);
seq__38806_39006 = G__39028;
chunk__38810_39007 = G__39029;
count__38811_39008 = G__39030;
i__38812_39009 = G__39031;
continue;
} else {
var node_39032 = cljs.core.first(seq__38806_39026__$1);
if(cljs.core.not(node_39032.shadow$old)){
var path_match_39033 = shadow.cljs.devtools.client.browser.match_paths(node_39032.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39033)){
var new_link_39034 = (function (){var G__38835 = node_39032.cloneNode(true);
G__38835.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39033),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38835;
})();
(node_39032.shadow$old = true);

(new_link_39034.onload = ((function (seq__38806_39006,chunk__38810_39007,count__38811_39008,i__38812_39009,seq__38716,chunk__38718,count__38719,i__38720,new_link_39034,path_match_39033,node_39032,seq__38806_39026__$1,temp__5735__auto___39025__$1,path,seq__38716__$1,temp__5735__auto__,map__38714,map__38714__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39032);
});})(seq__38806_39006,chunk__38810_39007,count__38811_39008,i__38812_39009,seq__38716,chunk__38718,count__38719,i__38720,new_link_39034,path_match_39033,node_39032,seq__38806_39026__$1,temp__5735__auto___39025__$1,path,seq__38716__$1,temp__5735__auto__,map__38714,map__38714__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39033], 0));

goog.dom.insertSiblingAfter(new_link_39034,node_39032);


var G__39035 = cljs.core.next(seq__38806_39026__$1);
var G__39036 = null;
var G__39037 = (0);
var G__39038 = (0);
seq__38806_39006 = G__39035;
chunk__38810_39007 = G__39036;
count__38811_39008 = G__39037;
i__38812_39009 = G__39038;
continue;
} else {
var G__39039 = cljs.core.next(seq__38806_39026__$1);
var G__39040 = null;
var G__39041 = (0);
var G__39042 = (0);
seq__38806_39006 = G__39039;
chunk__38810_39007 = G__39040;
count__38811_39008 = G__39041;
i__38812_39009 = G__39042;
continue;
}
} else {
var G__39043 = cljs.core.next(seq__38806_39026__$1);
var G__39044 = null;
var G__39045 = (0);
var G__39046 = (0);
seq__38806_39006 = G__39043;
chunk__38810_39007 = G__39044;
count__38811_39008 = G__39045;
i__38812_39009 = G__39046;
continue;
}
}
} else {
}
}
break;
}


var G__39047 = cljs.core.next(seq__38716__$1);
var G__39048 = null;
var G__39049 = (0);
var G__39050 = (0);
seq__38716 = G__39047;
chunk__38718 = G__39048;
count__38719 = G__39049;
i__38720 = G__39050;
continue;
} else {
var G__39051 = cljs.core.next(seq__38716__$1);
var G__39052 = null;
var G__39053 = (0);
var G__39054 = (0);
seq__38716 = G__39051;
chunk__38718 = G__39052;
count__38719 = G__39053;
i__38720 = G__39054;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__38836){
var map__38837 = p__38836;
var map__38837__$1 = (((((!((map__38837 == null))))?(((((map__38837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38837):map__38837);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38837__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__38839){
var map__38840 = p__38839;
var map__38840__$1 = (((((!((map__38840 == null))))?(((((map__38840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38840):map__38840);
var _ = map__38840__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38840__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38842,done,error){
var map__38843 = p__38842;
var map__38843__$1 = (((((!((map__38843 == null))))?(((((map__38843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38843):map__38843);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38843__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38845,done,error){
var map__38846 = p__38845;
var map__38846__$1 = (((((!((map__38846 == null))))?(((((map__38846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38846):map__38846);
var msg = map__38846__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38846__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38846__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38846__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38848){
var map__38849 = p__38848;
var map__38849__$1 = (((((!((map__38849 == null))))?(((((map__38849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38849):map__38849);
var src = map__38849__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38849__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38851 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38851) : done.call(null,G__38851));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38852){
var map__38853 = p__38852;
var map__38853__$1 = (((((!((map__38853 == null))))?(((((map__38853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38853):map__38853);
var msg__$1 = map__38853__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38853__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38855){var ex = e38855;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38856){
var map__38857 = p__38856;
var map__38857__$1 = (((((!((map__38857 == null))))?(((((map__38857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38857):map__38857);
var env = map__38857__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38857__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__38865){
var map__38866 = p__38865;
var map__38866__$1 = (((((!((map__38866 == null))))?(((((map__38866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38866):map__38866);
var msg = map__38866__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38866__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38868){
var map__38870 = p__38868;
var map__38870__$1 = (((((!((map__38870 == null))))?(((((map__38870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38870):map__38870);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38870__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38870__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__38876){
var map__38878 = p__38876;
var map__38878__$1 = (((((!((map__38878 == null))))?(((((map__38878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38878):map__38878);
var svc = map__38878__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38878__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
