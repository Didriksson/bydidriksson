goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37935){
var map__37936 = p__37935;
var map__37936__$1 = (((((!((map__37936 == null))))?(((((map__37936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37936):map__37936);
var m = map__37936__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37936__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37936__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37940_38147 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37941_38148 = null;
var count__37942_38149 = (0);
var i__37943_38150 = (0);
while(true){
if((i__37943_38150 < count__37942_38149)){
var f_38151 = chunk__37941_38148.cljs$core$IIndexed$_nth$arity$2(null,i__37943_38150);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38151], 0));


var G__38152 = seq__37940_38147;
var G__38153 = chunk__37941_38148;
var G__38154 = count__37942_38149;
var G__38155 = (i__37943_38150 + (1));
seq__37940_38147 = G__38152;
chunk__37941_38148 = G__38153;
count__37942_38149 = G__38154;
i__37943_38150 = G__38155;
continue;
} else {
var temp__5735__auto___38158 = cljs.core.seq(seq__37940_38147);
if(temp__5735__auto___38158){
var seq__37940_38159__$1 = temp__5735__auto___38158;
if(cljs.core.chunked_seq_QMARK_(seq__37940_38159__$1)){
var c__4556__auto___38160 = cljs.core.chunk_first(seq__37940_38159__$1);
var G__38163 = cljs.core.chunk_rest(seq__37940_38159__$1);
var G__38164 = c__4556__auto___38160;
var G__38165 = cljs.core.count(c__4556__auto___38160);
var G__38166 = (0);
seq__37940_38147 = G__38163;
chunk__37941_38148 = G__38164;
count__37942_38149 = G__38165;
i__37943_38150 = G__38166;
continue;
} else {
var f_38167 = cljs.core.first(seq__37940_38159__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38167], 0));


var G__38168 = cljs.core.next(seq__37940_38159__$1);
var G__38169 = null;
var G__38170 = (0);
var G__38171 = (0);
seq__37940_38147 = G__38168;
chunk__37941_38148 = G__38169;
count__37942_38149 = G__38170;
i__37943_38150 = G__38171;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38172 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38172], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38172)))?cljs.core.second(arglists_38172):arglists_38172)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37944_38177 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37945_38178 = null;
var count__37946_38179 = (0);
var i__37947_38180 = (0);
while(true){
if((i__37947_38180 < count__37946_38179)){
var vec__37971_38181 = chunk__37945_38178.cljs$core$IIndexed$_nth$arity$2(null,i__37947_38180);
var name_38182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37971_38181,(0),null);
var map__37974_38183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37971_38181,(1),null);
var map__37974_38184__$1 = (((((!((map__37974_38183 == null))))?(((((map__37974_38183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37974_38183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37974_38183):map__37974_38183);
var doc_38185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37974_38184__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37974_38184__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38182], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38186], 0));

if(cljs.core.truth_(doc_38185)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38185], 0));
} else {
}


var G__38187 = seq__37944_38177;
var G__38188 = chunk__37945_38178;
var G__38189 = count__37946_38179;
var G__38190 = (i__37947_38180 + (1));
seq__37944_38177 = G__38187;
chunk__37945_38178 = G__38188;
count__37946_38179 = G__38189;
i__37947_38180 = G__38190;
continue;
} else {
var temp__5735__auto___38191 = cljs.core.seq(seq__37944_38177);
if(temp__5735__auto___38191){
var seq__37944_38192__$1 = temp__5735__auto___38191;
if(cljs.core.chunked_seq_QMARK_(seq__37944_38192__$1)){
var c__4556__auto___38193 = cljs.core.chunk_first(seq__37944_38192__$1);
var G__38194 = cljs.core.chunk_rest(seq__37944_38192__$1);
var G__38195 = c__4556__auto___38193;
var G__38196 = cljs.core.count(c__4556__auto___38193);
var G__38197 = (0);
seq__37944_38177 = G__38194;
chunk__37945_38178 = G__38195;
count__37946_38179 = G__38196;
i__37947_38180 = G__38197;
continue;
} else {
var vec__37992_38198 = cljs.core.first(seq__37944_38192__$1);
var name_38199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37992_38198,(0),null);
var map__37995_38200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37992_38198,(1),null);
var map__37995_38201__$1 = (((((!((map__37995_38200 == null))))?(((((map__37995_38200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37995_38200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37995_38200):map__37995_38200);
var doc_38202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37995_38201__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37995_38201__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38199], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38203], 0));

if(cljs.core.truth_(doc_38202)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38202], 0));
} else {
}


var G__38204 = cljs.core.next(seq__37944_38192__$1);
var G__38205 = null;
var G__38206 = (0);
var G__38207 = (0);
seq__37944_38177 = G__38204;
chunk__37945_38178 = G__38205;
count__37946_38179 = G__38206;
i__37947_38180 = G__38207;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__38011 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38012 = null;
var count__38013 = (0);
var i__38014 = (0);
while(true){
if((i__38014 < count__38013)){
var role = chunk__38012.cljs$core$IIndexed$_nth$arity$2(null,i__38014);
var temp__5735__auto___38208__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38208__$1)){
var spec_38209 = temp__5735__auto___38208__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38209)], 0));
} else {
}


var G__38210 = seq__38011;
var G__38211 = chunk__38012;
var G__38212 = count__38013;
var G__38213 = (i__38014 + (1));
seq__38011 = G__38210;
chunk__38012 = G__38211;
count__38013 = G__38212;
i__38014 = G__38213;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__38011);
if(temp__5735__auto____$1){
var seq__38011__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38011__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38011__$1);
var G__38214 = cljs.core.chunk_rest(seq__38011__$1);
var G__38215 = c__4556__auto__;
var G__38216 = cljs.core.count(c__4556__auto__);
var G__38217 = (0);
seq__38011 = G__38214;
chunk__38012 = G__38215;
count__38013 = G__38216;
i__38014 = G__38217;
continue;
} else {
var role = cljs.core.first(seq__38011__$1);
var temp__5735__auto___38218__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38218__$2)){
var spec_38219 = temp__5735__auto___38218__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38219)], 0));
} else {
}


var G__38220 = cljs.core.next(seq__38011__$1);
var G__38221 = null;
var G__38222 = (0);
var G__38223 = (0);
seq__38011 = G__38220;
chunk__38012 = G__38221;
count__38013 = G__38222;
i__38014 = G__38223;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__38224 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38225 = cljs.core.ex_cause(t);
via = G__38224;
t = G__38225;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__38076 = datafied_throwable;
var map__38076__$1 = (((((!((map__38076 == null))))?(((((map__38076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38076):map__38076);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38076__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38076__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38076__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38077 = cljs.core.last(via);
var map__38077__$1 = (((((!((map__38077 == null))))?(((((map__38077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38077):map__38077);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38077__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38077__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38077__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38078 = data;
var map__38078__$1 = (((((!((map__38078 == null))))?(((((map__38078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38078):map__38078);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38078__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38078__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38078__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38079 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38079__$1 = (((((!((map__38079 == null))))?(((((map__38079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38079):map__38079);
var top_data = map__38079__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38079__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38084 = phase;
var G__38084__$1 = (((G__38084 instanceof cljs.core.Keyword))?G__38084.fqn:null);
switch (G__38084__$1) {
case "read-source":
var map__38085 = data;
var map__38085__$1 = (((((!((map__38085 == null))))?(((((map__38085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38085):map__38085);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38085__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38085__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38087 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38087__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38087,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38087);
var G__38087__$2 = (cljs.core.truth_((function (){var fexpr__38088 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38088.cljs$core$IFn$_invoke$arity$1 ? fexpr__38088.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38088.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38087__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38087__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38087__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38087__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38089 = top_data;
var G__38089__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38089,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38089);
var G__38089__$2 = (cljs.core.truth_((function (){var fexpr__38090 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38090.cljs$core$IFn$_invoke$arity$1 ? fexpr__38090.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38090.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38089__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38089__$1);
var G__38089__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38089__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38089__$2);
var G__38089__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38089__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38089__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38089__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38089__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38091 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38091,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38091,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38091,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38091,(3),null);
var G__38094 = top_data;
var G__38094__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38094,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38094);
var G__38094__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38094__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38094__$1);
var G__38094__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38094__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38094__$2);
var G__38094__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38094__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38094__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38094__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38094__$4;
}

break;
case "execution":
var vec__38095 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38095,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38095,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38095,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38095,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38075_SHARP_){
var or__4126__auto__ = (p1__38075_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__38099 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38099.cljs$core$IFn$_invoke$arity$1 ? fexpr__38099.cljs$core$IFn$_invoke$arity$1(p1__38075_SHARP_) : fexpr__38099.call(null,p1__38075_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__38101 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38101__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38101,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38101);
var G__38101__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38101__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38101__$1);
var G__38101__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38101__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38101__$2);
var G__38101__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38101__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38101__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38101__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38101__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38084__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38106){
var map__38107 = p__38106;
var map__38107__$1 = (((((!((map__38107 == null))))?(((((map__38107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38107):map__38107);
var triage_data = map__38107__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38107__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38107__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38107__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38107__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38107__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38107__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38107__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38107__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__38110 = phase;
var G__38110__$1 = (((G__38110 instanceof cljs.core.Keyword))?G__38110.fqn:null);
switch (G__38110__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38111 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38112 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38113 = loc;
var G__38114 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38115_38230 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38116_38231 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38117_38232 = true;
var _STAR_print_fn_STAR__temp_val__38118_38233 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38117_38232);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38118_38233);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38103_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38103_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38116_38231);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38115_38230);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38111,G__38112,G__38113,G__38114) : format.call(null,G__38111,G__38112,G__38113,G__38114));

break;
case "macroexpansion":
var G__38119 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38120 = cause_type;
var G__38121 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38122 = loc;
var G__38123 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38119,G__38120,G__38121,G__38122,G__38123) : format.call(null,G__38119,G__38120,G__38121,G__38122,G__38123));

break;
case "compile-syntax-check":
var G__38124 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38125 = cause_type;
var G__38126 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38127 = loc;
var G__38128 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38124,G__38125,G__38126,G__38127,G__38128) : format.call(null,G__38124,G__38125,G__38126,G__38127,G__38128));

break;
case "compilation":
var G__38129 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38130 = cause_type;
var G__38131 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38132 = loc;
var G__38133 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38129,G__38130,G__38131,G__38132,G__38133) : format.call(null,G__38129,G__38130,G__38131,G__38132,G__38133));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38134 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38135 = symbol;
var G__38136 = loc;
var G__38137 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38138_38234 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38139_38235 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38140_38236 = true;
var _STAR_print_fn_STAR__temp_val__38141_38237 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38140_38236);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38141_38237);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38105_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38105_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38139_38235);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38138_38234);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38134,G__38135,G__38136,G__38137) : format.call(null,G__38134,G__38135,G__38136,G__38137));
} else {
var G__38142 = "Execution error%s at %s(%s).\n%s\n";
var G__38143 = cause_type;
var G__38144 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38145 = loc;
var G__38146 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38142,G__38143,G__38144,G__38145,G__38146) : format.call(null,G__38142,G__38143,G__38144,G__38145,G__38146));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38110__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
