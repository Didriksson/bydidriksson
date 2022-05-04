goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37930){
var map__37931 = p__37930;
var map__37931__$1 = (((((!((map__37931 == null))))?(((((map__37931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37931):map__37931);
var m = map__37931__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37931__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37931__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37935_38146 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37936_38147 = null;
var count__37937_38148 = (0);
var i__37938_38149 = (0);
while(true){
if((i__37938_38149 < count__37937_38148)){
var f_38150 = chunk__37936_38147.cljs$core$IIndexed$_nth$arity$2(null,i__37938_38149);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38150], 0));


var G__38151 = seq__37935_38146;
var G__38152 = chunk__37936_38147;
var G__38153 = count__37937_38148;
var G__38154 = (i__37938_38149 + (1));
seq__37935_38146 = G__38151;
chunk__37936_38147 = G__38152;
count__37937_38148 = G__38153;
i__37938_38149 = G__38154;
continue;
} else {
var temp__5735__auto___38155 = cljs.core.seq(seq__37935_38146);
if(temp__5735__auto___38155){
var seq__37935_38156__$1 = temp__5735__auto___38155;
if(cljs.core.chunked_seq_QMARK_(seq__37935_38156__$1)){
var c__4556__auto___38161 = cljs.core.chunk_first(seq__37935_38156__$1);
var G__38162 = cljs.core.chunk_rest(seq__37935_38156__$1);
var G__38163 = c__4556__auto___38161;
var G__38164 = cljs.core.count(c__4556__auto___38161);
var G__38165 = (0);
seq__37935_38146 = G__38162;
chunk__37936_38147 = G__38163;
count__37937_38148 = G__38164;
i__37938_38149 = G__38165;
continue;
} else {
var f_38166 = cljs.core.first(seq__37935_38156__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38166], 0));


var G__38167 = cljs.core.next(seq__37935_38156__$1);
var G__38168 = null;
var G__38169 = (0);
var G__38170 = (0);
seq__37935_38146 = G__38167;
chunk__37936_38147 = G__38168;
count__37937_38148 = G__38169;
i__37938_38149 = G__38170;
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
var seq__37942_38174 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37943_38175 = null;
var count__37944_38176 = (0);
var i__37945_38177 = (0);
while(true){
if((i__37945_38177 < count__37944_38176)){
var vec__37958_38179 = chunk__37943_38175.cljs$core$IIndexed$_nth$arity$2(null,i__37945_38177);
var name_38180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37958_38179,(0),null);
var map__37961_38181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37958_38179,(1),null);
var map__37961_38182__$1 = (((((!((map__37961_38181 == null))))?(((((map__37961_38181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37961_38181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37961_38181):map__37961_38181);
var doc_38183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37961_38182__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37961_38182__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38180], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38184], 0));

if(cljs.core.truth_(doc_38183)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38183], 0));
} else {
}


var G__38185 = seq__37942_38174;
var G__38186 = chunk__37943_38175;
var G__38187 = count__37944_38176;
var G__38188 = (i__37945_38177 + (1));
seq__37942_38174 = G__38185;
chunk__37943_38175 = G__38186;
count__37944_38176 = G__38187;
i__37945_38177 = G__38188;
continue;
} else {
var temp__5735__auto___38190 = cljs.core.seq(seq__37942_38174);
if(temp__5735__auto___38190){
var seq__37942_38191__$1 = temp__5735__auto___38190;
if(cljs.core.chunked_seq_QMARK_(seq__37942_38191__$1)){
var c__4556__auto___38195 = cljs.core.chunk_first(seq__37942_38191__$1);
var G__38196 = cljs.core.chunk_rest(seq__37942_38191__$1);
var G__38197 = c__4556__auto___38195;
var G__38198 = cljs.core.count(c__4556__auto___38195);
var G__38199 = (0);
seq__37942_38174 = G__38196;
chunk__37943_38175 = G__38197;
count__37944_38176 = G__38198;
i__37945_38177 = G__38199;
continue;
} else {
var vec__37965_38200 = cljs.core.first(seq__37942_38191__$1);
var name_38201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37965_38200,(0),null);
var map__37968_38202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37965_38200,(1),null);
var map__37968_38203__$1 = (((((!((map__37968_38202 == null))))?(((((map__37968_38202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37968_38202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37968_38202):map__37968_38202);
var doc_38204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37968_38203__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37968_38203__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38201], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38205], 0));

if(cljs.core.truth_(doc_38204)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38204], 0));
} else {
}


var G__38206 = cljs.core.next(seq__37942_38191__$1);
var G__38207 = null;
var G__38208 = (0);
var G__38209 = (0);
seq__37942_38174 = G__38206;
chunk__37943_38175 = G__38207;
count__37944_38176 = G__38208;
i__37945_38177 = G__38209;
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

var seq__37971 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37972 = null;
var count__37973 = (0);
var i__37974 = (0);
while(true){
if((i__37974 < count__37973)){
var role = chunk__37972.cljs$core$IIndexed$_nth$arity$2(null,i__37974);
var temp__5735__auto___38210__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38210__$1)){
var spec_38211 = temp__5735__auto___38210__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38211)], 0));
} else {
}


var G__38212 = seq__37971;
var G__38213 = chunk__37972;
var G__38214 = count__37973;
var G__38215 = (i__37974 + (1));
seq__37971 = G__38212;
chunk__37972 = G__38213;
count__37973 = G__38214;
i__37974 = G__38215;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__37971);
if(temp__5735__auto____$1){
var seq__37971__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37971__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37971__$1);
var G__38216 = cljs.core.chunk_rest(seq__37971__$1);
var G__38217 = c__4556__auto__;
var G__38218 = cljs.core.count(c__4556__auto__);
var G__38219 = (0);
seq__37971 = G__38216;
chunk__37972 = G__38217;
count__37973 = G__38218;
i__37974 = G__38219;
continue;
} else {
var role = cljs.core.first(seq__37971__$1);
var temp__5735__auto___38220__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38220__$2)){
var spec_38221 = temp__5735__auto___38220__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38221)], 0));
} else {
}


var G__38222 = cljs.core.next(seq__37971__$1);
var G__38223 = null;
var G__38224 = (0);
var G__38225 = (0);
seq__37971 = G__38222;
chunk__37972 = G__38223;
count__37973 = G__38224;
i__37974 = G__38225;
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
var G__38226 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38227 = cljs.core.ex_cause(t);
via = G__38226;
t = G__38227;
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
var map__37996 = datafied_throwable;
var map__37996__$1 = (((((!((map__37996 == null))))?(((((map__37996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37996):map__37996);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37996__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37996__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37996__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37997 = cljs.core.last(via);
var map__37997__$1 = (((((!((map__37997 == null))))?(((((map__37997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37997):map__37997);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37997__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37997__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37997__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37998 = data;
var map__37998__$1 = (((((!((map__37998 == null))))?(((((map__37998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37998):map__37998);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37999 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__37999__$1 = (((((!((map__37999 == null))))?(((((map__37999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37999):map__37999);
var top_data = map__37999__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37999__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38011 = phase;
var G__38011__$1 = (((G__38011 instanceof cljs.core.Keyword))?G__38011.fqn:null);
switch (G__38011__$1) {
case "read-source":
var map__38016 = data;
var map__38016__$1 = (((((!((map__38016 == null))))?(((((map__38016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38016):map__38016);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38016__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38016__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38028 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38028__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38028,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38028);
var G__38028__$2 = (cljs.core.truth_((function (){var fexpr__38029 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38029.cljs$core$IFn$_invoke$arity$1 ? fexpr__38029.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38029.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38028__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38028__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38028__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38028__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38034 = top_data;
var G__38034__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38034,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38034);
var G__38034__$2 = (cljs.core.truth_((function (){var fexpr__38040 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38040.cljs$core$IFn$_invoke$arity$1 ? fexpr__38040.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38040.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38034__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38034__$1);
var G__38034__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38034__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38034__$2);
var G__38034__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38034__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38034__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38034__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38034__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38056 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38056,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38056,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38056,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38056,(3),null);
var G__38059 = top_data;
var G__38059__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38059,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38059);
var G__38059__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38059__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38059__$1);
var G__38059__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38059__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38059__$2);
var G__38059__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38059__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38059__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38059__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38059__$4;
}

break;
case "execution":
var vec__38064 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38064,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38064,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38064,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38064,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37978_SHARP_){
var or__4126__auto__ = (p1__37978_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__38071 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38071.cljs$core$IFn$_invoke$arity$1 ? fexpr__38071.cljs$core$IFn$_invoke$arity$1(p1__37978_SHARP_) : fexpr__38071.call(null,p1__37978_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__38076 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38076__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38076,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38076);
var G__38076__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38076__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38076__$1);
var G__38076__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38076__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38076__$2);
var G__38076__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38076__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38076__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38076__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38076__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38011__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38101){
var map__38102 = p__38101;
var map__38102__$1 = (((((!((map__38102 == null))))?(((((map__38102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38102):map__38102);
var triage_data = map__38102__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38102__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38102__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38102__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38102__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38102__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38102__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38102__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38102__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__38105 = phase;
var G__38105__$1 = (((G__38105 instanceof cljs.core.Keyword))?G__38105.fqn:null);
switch (G__38105__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38106 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38107 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38108 = loc;
var G__38109 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38111_38250 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38112_38251 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38113_38252 = true;
var _STAR_print_fn_STAR__temp_val__38114_38253 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38113_38252);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38114_38253);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38095_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38095_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38112_38251);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38111_38250);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38106,G__38107,G__38108,G__38109) : format.call(null,G__38106,G__38107,G__38108,G__38109));

break;
case "macroexpansion":
var G__38115 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38116 = cause_type;
var G__38117 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38118 = loc;
var G__38119 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38115,G__38116,G__38117,G__38118,G__38119) : format.call(null,G__38115,G__38116,G__38117,G__38118,G__38119));

break;
case "compile-syntax-check":
var G__38120 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38121 = cause_type;
var G__38122 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38123 = loc;
var G__38124 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38120,G__38121,G__38122,G__38123,G__38124) : format.call(null,G__38120,G__38121,G__38122,G__38123,G__38124));

break;
case "compilation":
var G__38125 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38126 = cause_type;
var G__38127 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38128 = loc;
var G__38129 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38125,G__38126,G__38127,G__38128,G__38129) : format.call(null,G__38125,G__38126,G__38127,G__38128,G__38129));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38130 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38131 = symbol;
var G__38132 = loc;
var G__38133 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38134_38260 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38135_38261 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38136_38262 = true;
var _STAR_print_fn_STAR__temp_val__38137_38263 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38136_38262);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38137_38263);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38096_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38096_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38135_38261);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38134_38260);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38130,G__38131,G__38132,G__38133) : format.call(null,G__38130,G__38131,G__38132,G__38133));
} else {
var G__38139 = "Execution error%s at %s(%s).\n%s\n";
var G__38140 = cause_type;
var G__38141 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38142 = loc;
var G__38143 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38139,G__38140,G__38141,G__38142,G__38143) : format.call(null,G__38139,G__38140,G__38141,G__38142,G__38143));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38105__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
