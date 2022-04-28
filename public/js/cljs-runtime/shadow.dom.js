goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35583 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35583(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35584 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35584(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34961 = coll;
var G__34962 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34961,G__34962) : shadow.dom.lazy_native_coll_seq.call(null,G__34961,G__34962));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34983 = arguments.length;
switch (G__34983) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34987 = arguments.length;
switch (G__34987) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34992 = arguments.length;
switch (G__34992) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35001 = arguments.length;
switch (G__35001) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35012 = arguments.length;
switch (G__35012) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35021 = arguments.length;
switch (G__35021) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35030){if((e35030 instanceof Object)){
var e = e35030;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35030;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35035 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35036 = null;
var count__35037 = (0);
var i__35038 = (0);
while(true){
if((i__35038 < count__35037)){
var el = chunk__35036.cljs$core$IIndexed$_nth$arity$2(null,i__35038);
var handler_35651__$1 = ((function (seq__35035,chunk__35036,count__35037,i__35038,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35035,chunk__35036,count__35037,i__35038,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35651__$1);


var G__35653 = seq__35035;
var G__35654 = chunk__35036;
var G__35655 = count__35037;
var G__35656 = (i__35038 + (1));
seq__35035 = G__35653;
chunk__35036 = G__35654;
count__35037 = G__35655;
i__35038 = G__35656;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35035);
if(temp__5735__auto__){
var seq__35035__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35035__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35035__$1);
var G__35657 = cljs.core.chunk_rest(seq__35035__$1);
var G__35658 = c__4556__auto__;
var G__35659 = cljs.core.count(c__4556__auto__);
var G__35660 = (0);
seq__35035 = G__35657;
chunk__35036 = G__35658;
count__35037 = G__35659;
i__35038 = G__35660;
continue;
} else {
var el = cljs.core.first(seq__35035__$1);
var handler_35662__$1 = ((function (seq__35035,chunk__35036,count__35037,i__35038,el,seq__35035__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35035,chunk__35036,count__35037,i__35038,el,seq__35035__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35662__$1);


var G__35663 = cljs.core.next(seq__35035__$1);
var G__35664 = null;
var G__35665 = (0);
var G__35666 = (0);
seq__35035 = G__35663;
chunk__35036 = G__35664;
count__35037 = G__35665;
i__35038 = G__35666;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35052 = arguments.length;
switch (G__35052) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35064 = cljs.core.seq(events);
var chunk__35065 = null;
var count__35066 = (0);
var i__35067 = (0);
while(true){
if((i__35067 < count__35066)){
var vec__35076 = chunk__35065.cljs$core$IIndexed$_nth$arity$2(null,i__35067);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35076,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35076,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35674 = seq__35064;
var G__35675 = chunk__35065;
var G__35676 = count__35066;
var G__35677 = (i__35067 + (1));
seq__35064 = G__35674;
chunk__35065 = G__35675;
count__35066 = G__35676;
i__35067 = G__35677;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35064);
if(temp__5735__auto__){
var seq__35064__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35064__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35064__$1);
var G__35679 = cljs.core.chunk_rest(seq__35064__$1);
var G__35680 = c__4556__auto__;
var G__35681 = cljs.core.count(c__4556__auto__);
var G__35682 = (0);
seq__35064 = G__35679;
chunk__35065 = G__35680;
count__35066 = G__35681;
i__35067 = G__35682;
continue;
} else {
var vec__35080 = cljs.core.first(seq__35064__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35080,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35080,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35683 = cljs.core.next(seq__35064__$1);
var G__35684 = null;
var G__35685 = (0);
var G__35686 = (0);
seq__35064 = G__35683;
chunk__35065 = G__35684;
count__35066 = G__35685;
i__35067 = G__35686;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35084 = cljs.core.seq(styles);
var chunk__35085 = null;
var count__35086 = (0);
var i__35087 = (0);
while(true){
if((i__35087 < count__35086)){
var vec__35100 = chunk__35085.cljs$core$IIndexed$_nth$arity$2(null,i__35087);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35100,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35100,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35691 = seq__35084;
var G__35692 = chunk__35085;
var G__35693 = count__35086;
var G__35694 = (i__35087 + (1));
seq__35084 = G__35691;
chunk__35085 = G__35692;
count__35086 = G__35693;
i__35087 = G__35694;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35084);
if(temp__5735__auto__){
var seq__35084__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35084__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35084__$1);
var G__35697 = cljs.core.chunk_rest(seq__35084__$1);
var G__35698 = c__4556__auto__;
var G__35699 = cljs.core.count(c__4556__auto__);
var G__35700 = (0);
seq__35084 = G__35697;
chunk__35085 = G__35698;
count__35086 = G__35699;
i__35087 = G__35700;
continue;
} else {
var vec__35107 = cljs.core.first(seq__35084__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35107,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35107,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35701 = cljs.core.next(seq__35084__$1);
var G__35702 = null;
var G__35703 = (0);
var G__35704 = (0);
seq__35084 = G__35701;
chunk__35085 = G__35702;
count__35086 = G__35703;
i__35087 = G__35704;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35115_35705 = key;
var G__35115_35706__$1 = (((G__35115_35705 instanceof cljs.core.Keyword))?G__35115_35705.fqn:null);
switch (G__35115_35706__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35709 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_35709,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_35709,"aria-");
}
})())){
el.setAttribute(ks_35709,value);
} else {
(el[ks_35709] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35132){
var map__35133 = p__35132;
var map__35133__$1 = (((((!((map__35133 == null))))?(((((map__35133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35133):map__35133);
var props = map__35133__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35133__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35136 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35136,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35136,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35136,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35141 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35141,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35141;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35144 = arguments.length;
switch (G__35144) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35153){
var vec__35154 = p__35153;
var seq__35155 = cljs.core.seq(vec__35154);
var first__35156 = cljs.core.first(seq__35155);
var seq__35155__$1 = cljs.core.next(seq__35155);
var nn = first__35156;
var first__35156__$1 = cljs.core.first(seq__35155__$1);
var seq__35155__$2 = cljs.core.next(seq__35155__$1);
var np = first__35156__$1;
var nc = seq__35155__$2;
var node = vec__35154;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35160 = nn;
var G__35161 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35160,G__35161) : create_fn.call(null,G__35160,G__35161));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35164 = nn;
var G__35165 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35164,G__35165) : create_fn.call(null,G__35164,G__35165));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35167 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35167,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35167,(1),null);
var seq__35170_35721 = cljs.core.seq(node_children);
var chunk__35171_35722 = null;
var count__35172_35723 = (0);
var i__35173_35724 = (0);
while(true){
if((i__35173_35724 < count__35172_35723)){
var child_struct_35726 = chunk__35171_35722.cljs$core$IIndexed$_nth$arity$2(null,i__35173_35724);
var children_35727 = shadow.dom.dom_node(child_struct_35726);
if(cljs.core.seq_QMARK_(children_35727)){
var seq__35194_35728 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35727));
var chunk__35196_35729 = null;
var count__35197_35730 = (0);
var i__35198_35731 = (0);
while(true){
if((i__35198_35731 < count__35197_35730)){
var child_35732 = chunk__35196_35729.cljs$core$IIndexed$_nth$arity$2(null,i__35198_35731);
if(cljs.core.truth_(child_35732)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35732);


var G__35734 = seq__35194_35728;
var G__35735 = chunk__35196_35729;
var G__35736 = count__35197_35730;
var G__35737 = (i__35198_35731 + (1));
seq__35194_35728 = G__35734;
chunk__35196_35729 = G__35735;
count__35197_35730 = G__35736;
i__35198_35731 = G__35737;
continue;
} else {
var G__35738 = seq__35194_35728;
var G__35739 = chunk__35196_35729;
var G__35740 = count__35197_35730;
var G__35741 = (i__35198_35731 + (1));
seq__35194_35728 = G__35738;
chunk__35196_35729 = G__35739;
count__35197_35730 = G__35740;
i__35198_35731 = G__35741;
continue;
}
} else {
var temp__5735__auto___35742 = cljs.core.seq(seq__35194_35728);
if(temp__5735__auto___35742){
var seq__35194_35743__$1 = temp__5735__auto___35742;
if(cljs.core.chunked_seq_QMARK_(seq__35194_35743__$1)){
var c__4556__auto___35744 = cljs.core.chunk_first(seq__35194_35743__$1);
var G__35745 = cljs.core.chunk_rest(seq__35194_35743__$1);
var G__35746 = c__4556__auto___35744;
var G__35747 = cljs.core.count(c__4556__auto___35744);
var G__35748 = (0);
seq__35194_35728 = G__35745;
chunk__35196_35729 = G__35746;
count__35197_35730 = G__35747;
i__35198_35731 = G__35748;
continue;
} else {
var child_35749 = cljs.core.first(seq__35194_35743__$1);
if(cljs.core.truth_(child_35749)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35749);


var G__35750 = cljs.core.next(seq__35194_35743__$1);
var G__35751 = null;
var G__35752 = (0);
var G__35753 = (0);
seq__35194_35728 = G__35750;
chunk__35196_35729 = G__35751;
count__35197_35730 = G__35752;
i__35198_35731 = G__35753;
continue;
} else {
var G__35754 = cljs.core.next(seq__35194_35743__$1);
var G__35755 = null;
var G__35756 = (0);
var G__35757 = (0);
seq__35194_35728 = G__35754;
chunk__35196_35729 = G__35755;
count__35197_35730 = G__35756;
i__35198_35731 = G__35757;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35727);
}


var G__35758 = seq__35170_35721;
var G__35759 = chunk__35171_35722;
var G__35760 = count__35172_35723;
var G__35761 = (i__35173_35724 + (1));
seq__35170_35721 = G__35758;
chunk__35171_35722 = G__35759;
count__35172_35723 = G__35760;
i__35173_35724 = G__35761;
continue;
} else {
var temp__5735__auto___35762 = cljs.core.seq(seq__35170_35721);
if(temp__5735__auto___35762){
var seq__35170_35763__$1 = temp__5735__auto___35762;
if(cljs.core.chunked_seq_QMARK_(seq__35170_35763__$1)){
var c__4556__auto___35764 = cljs.core.chunk_first(seq__35170_35763__$1);
var G__35765 = cljs.core.chunk_rest(seq__35170_35763__$1);
var G__35766 = c__4556__auto___35764;
var G__35767 = cljs.core.count(c__4556__auto___35764);
var G__35768 = (0);
seq__35170_35721 = G__35765;
chunk__35171_35722 = G__35766;
count__35172_35723 = G__35767;
i__35173_35724 = G__35768;
continue;
} else {
var child_struct_35769 = cljs.core.first(seq__35170_35763__$1);
var children_35770 = shadow.dom.dom_node(child_struct_35769);
if(cljs.core.seq_QMARK_(children_35770)){
var seq__35205_35771 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35770));
var chunk__35208_35772 = null;
var count__35209_35773 = (0);
var i__35210_35774 = (0);
while(true){
if((i__35210_35774 < count__35209_35773)){
var child_35775 = chunk__35208_35772.cljs$core$IIndexed$_nth$arity$2(null,i__35210_35774);
if(cljs.core.truth_(child_35775)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35775);


var G__35776 = seq__35205_35771;
var G__35777 = chunk__35208_35772;
var G__35778 = count__35209_35773;
var G__35779 = (i__35210_35774 + (1));
seq__35205_35771 = G__35776;
chunk__35208_35772 = G__35777;
count__35209_35773 = G__35778;
i__35210_35774 = G__35779;
continue;
} else {
var G__35780 = seq__35205_35771;
var G__35781 = chunk__35208_35772;
var G__35782 = count__35209_35773;
var G__35783 = (i__35210_35774 + (1));
seq__35205_35771 = G__35780;
chunk__35208_35772 = G__35781;
count__35209_35773 = G__35782;
i__35210_35774 = G__35783;
continue;
}
} else {
var temp__5735__auto___35784__$1 = cljs.core.seq(seq__35205_35771);
if(temp__5735__auto___35784__$1){
var seq__35205_35786__$1 = temp__5735__auto___35784__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35205_35786__$1)){
var c__4556__auto___35787 = cljs.core.chunk_first(seq__35205_35786__$1);
var G__35788 = cljs.core.chunk_rest(seq__35205_35786__$1);
var G__35789 = c__4556__auto___35787;
var G__35790 = cljs.core.count(c__4556__auto___35787);
var G__35791 = (0);
seq__35205_35771 = G__35788;
chunk__35208_35772 = G__35789;
count__35209_35773 = G__35790;
i__35210_35774 = G__35791;
continue;
} else {
var child_35792 = cljs.core.first(seq__35205_35786__$1);
if(cljs.core.truth_(child_35792)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35792);


var G__35793 = cljs.core.next(seq__35205_35786__$1);
var G__35794 = null;
var G__35795 = (0);
var G__35796 = (0);
seq__35205_35771 = G__35793;
chunk__35208_35772 = G__35794;
count__35209_35773 = G__35795;
i__35210_35774 = G__35796;
continue;
} else {
var G__35797 = cljs.core.next(seq__35205_35786__$1);
var G__35798 = null;
var G__35799 = (0);
var G__35800 = (0);
seq__35205_35771 = G__35797;
chunk__35208_35772 = G__35798;
count__35209_35773 = G__35799;
i__35210_35774 = G__35800;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35770);
}


var G__35801 = cljs.core.next(seq__35170_35763__$1);
var G__35802 = null;
var G__35803 = (0);
var G__35804 = (0);
seq__35170_35721 = G__35801;
chunk__35171_35722 = G__35802;
count__35172_35723 = G__35803;
i__35173_35724 = G__35804;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35233 = cljs.core.seq(node);
var chunk__35234 = null;
var count__35235 = (0);
var i__35236 = (0);
while(true){
if((i__35236 < count__35235)){
var n = chunk__35234.cljs$core$IIndexed$_nth$arity$2(null,i__35236);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35807 = seq__35233;
var G__35808 = chunk__35234;
var G__35809 = count__35235;
var G__35810 = (i__35236 + (1));
seq__35233 = G__35807;
chunk__35234 = G__35808;
count__35235 = G__35809;
i__35236 = G__35810;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35233);
if(temp__5735__auto__){
var seq__35233__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35233__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35233__$1);
var G__35812 = cljs.core.chunk_rest(seq__35233__$1);
var G__35813 = c__4556__auto__;
var G__35814 = cljs.core.count(c__4556__auto__);
var G__35815 = (0);
seq__35233 = G__35812;
chunk__35234 = G__35813;
count__35235 = G__35814;
i__35236 = G__35815;
continue;
} else {
var n = cljs.core.first(seq__35233__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35816 = cljs.core.next(seq__35233__$1);
var G__35817 = null;
var G__35818 = (0);
var G__35819 = (0);
seq__35233 = G__35816;
chunk__35234 = G__35817;
count__35235 = G__35818;
i__35236 = G__35819;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35248 = arguments.length;
switch (G__35248) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35256 = arguments.length;
switch (G__35256) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35271 = arguments.length;
switch (G__35271) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35849 = arguments.length;
var i__4737__auto___35850 = (0);
while(true){
if((i__4737__auto___35850 < len__4736__auto___35849)){
args__4742__auto__.push((arguments[i__4737__auto___35850]));

var G__35851 = (i__4737__auto___35850 + (1));
i__4737__auto___35850 = G__35851;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35282_35852 = cljs.core.seq(nodes);
var chunk__35283_35853 = null;
var count__35284_35854 = (0);
var i__35285_35855 = (0);
while(true){
if((i__35285_35855 < count__35284_35854)){
var node_35856 = chunk__35283_35853.cljs$core$IIndexed$_nth$arity$2(null,i__35285_35855);
fragment.appendChild(shadow.dom._to_dom(node_35856));


var G__35857 = seq__35282_35852;
var G__35858 = chunk__35283_35853;
var G__35859 = count__35284_35854;
var G__35860 = (i__35285_35855 + (1));
seq__35282_35852 = G__35857;
chunk__35283_35853 = G__35858;
count__35284_35854 = G__35859;
i__35285_35855 = G__35860;
continue;
} else {
var temp__5735__auto___35861 = cljs.core.seq(seq__35282_35852);
if(temp__5735__auto___35861){
var seq__35282_35862__$1 = temp__5735__auto___35861;
if(cljs.core.chunked_seq_QMARK_(seq__35282_35862__$1)){
var c__4556__auto___35863 = cljs.core.chunk_first(seq__35282_35862__$1);
var G__35864 = cljs.core.chunk_rest(seq__35282_35862__$1);
var G__35865 = c__4556__auto___35863;
var G__35866 = cljs.core.count(c__4556__auto___35863);
var G__35867 = (0);
seq__35282_35852 = G__35864;
chunk__35283_35853 = G__35865;
count__35284_35854 = G__35866;
i__35285_35855 = G__35867;
continue;
} else {
var node_35868 = cljs.core.first(seq__35282_35862__$1);
fragment.appendChild(shadow.dom._to_dom(node_35868));


var G__35869 = cljs.core.next(seq__35282_35862__$1);
var G__35870 = null;
var G__35871 = (0);
var G__35872 = (0);
seq__35282_35852 = G__35869;
chunk__35283_35853 = G__35870;
count__35284_35854 = G__35871;
i__35285_35855 = G__35872;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35280){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35280));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35292_35873 = cljs.core.seq(scripts);
var chunk__35293_35874 = null;
var count__35294_35875 = (0);
var i__35295_35876 = (0);
while(true){
if((i__35295_35876 < count__35294_35875)){
var vec__35302_35877 = chunk__35293_35874.cljs$core$IIndexed$_nth$arity$2(null,i__35295_35876);
var script_tag_35878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35302_35877,(0),null);
var script_body_35879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35302_35877,(1),null);
eval(script_body_35879);


var G__35880 = seq__35292_35873;
var G__35881 = chunk__35293_35874;
var G__35882 = count__35294_35875;
var G__35883 = (i__35295_35876 + (1));
seq__35292_35873 = G__35880;
chunk__35293_35874 = G__35881;
count__35294_35875 = G__35882;
i__35295_35876 = G__35883;
continue;
} else {
var temp__5735__auto___35884 = cljs.core.seq(seq__35292_35873);
if(temp__5735__auto___35884){
var seq__35292_35885__$1 = temp__5735__auto___35884;
if(cljs.core.chunked_seq_QMARK_(seq__35292_35885__$1)){
var c__4556__auto___35886 = cljs.core.chunk_first(seq__35292_35885__$1);
var G__35887 = cljs.core.chunk_rest(seq__35292_35885__$1);
var G__35888 = c__4556__auto___35886;
var G__35889 = cljs.core.count(c__4556__auto___35886);
var G__35890 = (0);
seq__35292_35873 = G__35887;
chunk__35293_35874 = G__35888;
count__35294_35875 = G__35889;
i__35295_35876 = G__35890;
continue;
} else {
var vec__35305_35891 = cljs.core.first(seq__35292_35885__$1);
var script_tag_35892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35305_35891,(0),null);
var script_body_35893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35305_35891,(1),null);
eval(script_body_35893);


var G__35894 = cljs.core.next(seq__35292_35885__$1);
var G__35895 = null;
var G__35896 = (0);
var G__35897 = (0);
seq__35292_35873 = G__35894;
chunk__35293_35874 = G__35895;
count__35294_35875 = G__35896;
i__35295_35876 = G__35897;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35308){
var vec__35309 = p__35308;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35309,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35309,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35319 = arguments.length;
switch (G__35319) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35336 = cljs.core.seq(style_keys);
var chunk__35337 = null;
var count__35338 = (0);
var i__35339 = (0);
while(true){
if((i__35339 < count__35338)){
var it = chunk__35337.cljs$core$IIndexed$_nth$arity$2(null,i__35339);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35899 = seq__35336;
var G__35900 = chunk__35337;
var G__35901 = count__35338;
var G__35902 = (i__35339 + (1));
seq__35336 = G__35899;
chunk__35337 = G__35900;
count__35338 = G__35901;
i__35339 = G__35902;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35336);
if(temp__5735__auto__){
var seq__35336__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35336__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35336__$1);
var G__35903 = cljs.core.chunk_rest(seq__35336__$1);
var G__35904 = c__4556__auto__;
var G__35905 = cljs.core.count(c__4556__auto__);
var G__35906 = (0);
seq__35336 = G__35903;
chunk__35337 = G__35904;
count__35338 = G__35905;
i__35339 = G__35906;
continue;
} else {
var it = cljs.core.first(seq__35336__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35907 = cljs.core.next(seq__35336__$1);
var G__35908 = null;
var G__35909 = (0);
var G__35910 = (0);
seq__35336 = G__35907;
chunk__35337 = G__35908;
count__35338 = G__35909;
i__35339 = G__35910;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35349,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35362 = k35349;
var G__35362__$1 = (((G__35362 instanceof cljs.core.Keyword))?G__35362.fqn:null);
switch (G__35362__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35349,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35366){
var vec__35367 = p__35366;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35367,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35367,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35348){
var self__ = this;
var G__35348__$1 = this;
return (new cljs.core.RecordIter((0),G__35348__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35350,other35351){
var self__ = this;
var this35350__$1 = this;
return (((!((other35351 == null)))) && ((this35350__$1.constructor === other35351.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35350__$1.x,other35351.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35350__$1.y,other35351.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35350__$1.__extmap,other35351.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35348){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35380 = cljs.core.keyword_identical_QMARK_;
var expr__35381 = k__4388__auto__;
if(cljs.core.truth_((pred__35380.cljs$core$IFn$_invoke$arity$2 ? pred__35380.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35381) : pred__35380.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35381)))){
return (new shadow.dom.Coordinate(G__35348,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35380.cljs$core$IFn$_invoke$arity$2 ? pred__35380.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35381) : pred__35380.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35381)))){
return (new shadow.dom.Coordinate(self__.x,G__35348,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35348),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35348){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35348,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35355){
var extmap__4419__auto__ = (function (){var G__35387 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35355,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35355)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35387);
} else {
return G__35387;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35355),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35355),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35389,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35398 = k35389;
var G__35398__$1 = (((G__35398 instanceof cljs.core.Keyword))?G__35398.fqn:null);
switch (G__35398__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35389,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35401){
var vec__35402 = p__35401;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35402,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35402,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35388){
var self__ = this;
var G__35388__$1 = this;
return (new cljs.core.RecordIter((0),G__35388__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35390,other35391){
var self__ = this;
var this35390__$1 = this;
return (((!((other35391 == null)))) && ((this35390__$1.constructor === other35391.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35390__$1.w,other35391.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35390__$1.h,other35391.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35390__$1.__extmap,other35391.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35388){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35420 = cljs.core.keyword_identical_QMARK_;
var expr__35421 = k__4388__auto__;
if(cljs.core.truth_((pred__35420.cljs$core$IFn$_invoke$arity$2 ? pred__35420.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35421) : pred__35420.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35421)))){
return (new shadow.dom.Size(G__35388,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35420.cljs$core$IFn$_invoke$arity$2 ? pred__35420.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35421) : pred__35420.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35421)))){
return (new shadow.dom.Size(self__.w,G__35388,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35388),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35388){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35388,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35392){
var extmap__4419__auto__ = (function (){var G__35430 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35392,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35392)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35430);
} else {
return G__35430;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35392),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35392),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__35913 = (i + (1));
var G__35914 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35913;
ret = G__35914;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35448){
var vec__35450 = p__35448;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35450,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35450,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35456 = arguments.length;
switch (G__35456) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35916 = ps;
var G__35917 = (i + (1));
el__$1 = G__35916;
i = G__35917;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35464 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35464,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35464,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35464,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35468_35918 = cljs.core.seq(props);
var chunk__35469_35919 = null;
var count__35470_35920 = (0);
var i__35471_35921 = (0);
while(true){
if((i__35471_35921 < count__35470_35920)){
var vec__35483_35922 = chunk__35469_35919.cljs$core$IIndexed$_nth$arity$2(null,i__35471_35921);
var k_35923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35483_35922,(0),null);
var v_35924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35483_35922,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35923);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35923),v_35924);


var G__35961 = seq__35468_35918;
var G__35962 = chunk__35469_35919;
var G__35963 = count__35470_35920;
var G__35964 = (i__35471_35921 + (1));
seq__35468_35918 = G__35961;
chunk__35469_35919 = G__35962;
count__35470_35920 = G__35963;
i__35471_35921 = G__35964;
continue;
} else {
var temp__5735__auto___35965 = cljs.core.seq(seq__35468_35918);
if(temp__5735__auto___35965){
var seq__35468_35966__$1 = temp__5735__auto___35965;
if(cljs.core.chunked_seq_QMARK_(seq__35468_35966__$1)){
var c__4556__auto___35968 = cljs.core.chunk_first(seq__35468_35966__$1);
var G__35972 = cljs.core.chunk_rest(seq__35468_35966__$1);
var G__35973 = c__4556__auto___35968;
var G__35974 = cljs.core.count(c__4556__auto___35968);
var G__35975 = (0);
seq__35468_35918 = G__35972;
chunk__35469_35919 = G__35973;
count__35470_35920 = G__35974;
i__35471_35921 = G__35975;
continue;
} else {
var vec__35488_35976 = cljs.core.first(seq__35468_35966__$1);
var k_35977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35488_35976,(0),null);
var v_35978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35488_35976,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_35977);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35977),v_35978);


var G__35979 = cljs.core.next(seq__35468_35966__$1);
var G__35980 = null;
var G__35981 = (0);
var G__35982 = (0);
seq__35468_35918 = G__35979;
chunk__35469_35919 = G__35980;
count__35470_35920 = G__35981;
i__35471_35921 = G__35982;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35497 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35497,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35497,(1),null);
var seq__35501_35983 = cljs.core.seq(node_children);
var chunk__35503_35984 = null;
var count__35504_35985 = (0);
var i__35505_35986 = (0);
while(true){
if((i__35505_35986 < count__35504_35985)){
var child_struct_35987 = chunk__35503_35984.cljs$core$IIndexed$_nth$arity$2(null,i__35505_35986);
if((!((child_struct_35987 == null)))){
if(typeof child_struct_35987 === 'string'){
var text_35988 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35988),child_struct_35987].join(''));
} else {
var children_35989 = shadow.dom.svg_node(child_struct_35987);
if(cljs.core.seq_QMARK_(children_35989)){
var seq__35532_35990 = cljs.core.seq(children_35989);
var chunk__35534_35991 = null;
var count__35535_35992 = (0);
var i__35536_35993 = (0);
while(true){
if((i__35536_35993 < count__35535_35992)){
var child_35994 = chunk__35534_35991.cljs$core$IIndexed$_nth$arity$2(null,i__35536_35993);
if(cljs.core.truth_(child_35994)){
node.appendChild(child_35994);


var G__35995 = seq__35532_35990;
var G__35996 = chunk__35534_35991;
var G__35997 = count__35535_35992;
var G__35998 = (i__35536_35993 + (1));
seq__35532_35990 = G__35995;
chunk__35534_35991 = G__35996;
count__35535_35992 = G__35997;
i__35536_35993 = G__35998;
continue;
} else {
var G__35999 = seq__35532_35990;
var G__36000 = chunk__35534_35991;
var G__36001 = count__35535_35992;
var G__36002 = (i__35536_35993 + (1));
seq__35532_35990 = G__35999;
chunk__35534_35991 = G__36000;
count__35535_35992 = G__36001;
i__35536_35993 = G__36002;
continue;
}
} else {
var temp__5735__auto___36003 = cljs.core.seq(seq__35532_35990);
if(temp__5735__auto___36003){
var seq__35532_36004__$1 = temp__5735__auto___36003;
if(cljs.core.chunked_seq_QMARK_(seq__35532_36004__$1)){
var c__4556__auto___36005 = cljs.core.chunk_first(seq__35532_36004__$1);
var G__36006 = cljs.core.chunk_rest(seq__35532_36004__$1);
var G__36007 = c__4556__auto___36005;
var G__36008 = cljs.core.count(c__4556__auto___36005);
var G__36009 = (0);
seq__35532_35990 = G__36006;
chunk__35534_35991 = G__36007;
count__35535_35992 = G__36008;
i__35536_35993 = G__36009;
continue;
} else {
var child_36010 = cljs.core.first(seq__35532_36004__$1);
if(cljs.core.truth_(child_36010)){
node.appendChild(child_36010);


var G__36011 = cljs.core.next(seq__35532_36004__$1);
var G__36012 = null;
var G__36013 = (0);
var G__36014 = (0);
seq__35532_35990 = G__36011;
chunk__35534_35991 = G__36012;
count__35535_35992 = G__36013;
i__35536_35993 = G__36014;
continue;
} else {
var G__36015 = cljs.core.next(seq__35532_36004__$1);
var G__36016 = null;
var G__36017 = (0);
var G__36018 = (0);
seq__35532_35990 = G__36015;
chunk__35534_35991 = G__36016;
count__35535_35992 = G__36017;
i__35536_35993 = G__36018;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35989);
}
}


var G__36019 = seq__35501_35983;
var G__36020 = chunk__35503_35984;
var G__36021 = count__35504_35985;
var G__36022 = (i__35505_35986 + (1));
seq__35501_35983 = G__36019;
chunk__35503_35984 = G__36020;
count__35504_35985 = G__36021;
i__35505_35986 = G__36022;
continue;
} else {
var G__36023 = seq__35501_35983;
var G__36024 = chunk__35503_35984;
var G__36025 = count__35504_35985;
var G__36026 = (i__35505_35986 + (1));
seq__35501_35983 = G__36023;
chunk__35503_35984 = G__36024;
count__35504_35985 = G__36025;
i__35505_35986 = G__36026;
continue;
}
} else {
var temp__5735__auto___36027 = cljs.core.seq(seq__35501_35983);
if(temp__5735__auto___36027){
var seq__35501_36028__$1 = temp__5735__auto___36027;
if(cljs.core.chunked_seq_QMARK_(seq__35501_36028__$1)){
var c__4556__auto___36029 = cljs.core.chunk_first(seq__35501_36028__$1);
var G__36030 = cljs.core.chunk_rest(seq__35501_36028__$1);
var G__36031 = c__4556__auto___36029;
var G__36032 = cljs.core.count(c__4556__auto___36029);
var G__36033 = (0);
seq__35501_35983 = G__36030;
chunk__35503_35984 = G__36031;
count__35504_35985 = G__36032;
i__35505_35986 = G__36033;
continue;
} else {
var child_struct_36034 = cljs.core.first(seq__35501_36028__$1);
if((!((child_struct_36034 == null)))){
if(typeof child_struct_36034 === 'string'){
var text_36035 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36035),child_struct_36034].join(''));
} else {
var children_36036 = shadow.dom.svg_node(child_struct_36034);
if(cljs.core.seq_QMARK_(children_36036)){
var seq__35545_36037 = cljs.core.seq(children_36036);
var chunk__35547_36038 = null;
var count__35548_36039 = (0);
var i__35549_36040 = (0);
while(true){
if((i__35549_36040 < count__35548_36039)){
var child_36041 = chunk__35547_36038.cljs$core$IIndexed$_nth$arity$2(null,i__35549_36040);
if(cljs.core.truth_(child_36041)){
node.appendChild(child_36041);


var G__36042 = seq__35545_36037;
var G__36043 = chunk__35547_36038;
var G__36044 = count__35548_36039;
var G__36045 = (i__35549_36040 + (1));
seq__35545_36037 = G__36042;
chunk__35547_36038 = G__36043;
count__35548_36039 = G__36044;
i__35549_36040 = G__36045;
continue;
} else {
var G__36046 = seq__35545_36037;
var G__36047 = chunk__35547_36038;
var G__36048 = count__35548_36039;
var G__36049 = (i__35549_36040 + (1));
seq__35545_36037 = G__36046;
chunk__35547_36038 = G__36047;
count__35548_36039 = G__36048;
i__35549_36040 = G__36049;
continue;
}
} else {
var temp__5735__auto___36050__$1 = cljs.core.seq(seq__35545_36037);
if(temp__5735__auto___36050__$1){
var seq__35545_36051__$1 = temp__5735__auto___36050__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35545_36051__$1)){
var c__4556__auto___36052 = cljs.core.chunk_first(seq__35545_36051__$1);
var G__36053 = cljs.core.chunk_rest(seq__35545_36051__$1);
var G__36054 = c__4556__auto___36052;
var G__36055 = cljs.core.count(c__4556__auto___36052);
var G__36056 = (0);
seq__35545_36037 = G__36053;
chunk__35547_36038 = G__36054;
count__35548_36039 = G__36055;
i__35549_36040 = G__36056;
continue;
} else {
var child_36057 = cljs.core.first(seq__35545_36051__$1);
if(cljs.core.truth_(child_36057)){
node.appendChild(child_36057);


var G__36058 = cljs.core.next(seq__35545_36051__$1);
var G__36059 = null;
var G__36060 = (0);
var G__36061 = (0);
seq__35545_36037 = G__36058;
chunk__35547_36038 = G__36059;
count__35548_36039 = G__36060;
i__35549_36040 = G__36061;
continue;
} else {
var G__36062 = cljs.core.next(seq__35545_36051__$1);
var G__36063 = null;
var G__36064 = (0);
var G__36065 = (0);
seq__35545_36037 = G__36062;
chunk__35547_36038 = G__36063;
count__35548_36039 = G__36064;
i__35549_36040 = G__36065;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36036);
}
}


var G__36066 = cljs.core.next(seq__35501_36028__$1);
var G__36067 = null;
var G__36068 = (0);
var G__36069 = (0);
seq__35501_35983 = G__36066;
chunk__35503_35984 = G__36067;
count__35504_35985 = G__36068;
i__35505_35986 = G__36069;
continue;
} else {
var G__36070 = cljs.core.next(seq__35501_36028__$1);
var G__36071 = null;
var G__36072 = (0);
var G__36073 = (0);
seq__35501_35983 = G__36070;
chunk__35503_35984 = G__36071;
count__35504_35985 = G__36072;
i__35505_35986 = G__36073;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36074 = arguments.length;
var i__4737__auto___36075 = (0);
while(true){
if((i__4737__auto___36075 < len__4736__auto___36074)){
args__4742__auto__.push((arguments[i__4737__auto___36075]));

var G__36076 = (i__4737__auto___36075 + (1));
i__4737__auto___36075 = G__36076;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35551){
var G__35552 = cljs.core.first(seq35551);
var seq35551__$1 = cljs.core.next(seq35551);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35552,seq35551__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35554 = arguments.length;
switch (G__35554) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__33189__auto___36078 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = (function (state_35560){
var state_val_35561 = (state_35560[(1)]);
if((state_val_35561 === (1))){
var state_35560__$1 = state_35560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35560__$1,(2),once_or_cleanup);
} else {
if((state_val_35561 === (2))){
var inst_35557 = (state_35560[(2)]);
var inst_35558 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35560__$1 = (function (){var statearr_35564 = state_35560;
(statearr_35564[(7)] = inst_35557);

return statearr_35564;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35560__$1,inst_35558);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33133__auto__ = null;
var shadow$dom$state_machine__33133__auto____0 = (function (){
var statearr_35566 = [null,null,null,null,null,null,null,null];
(statearr_35566[(0)] = shadow$dom$state_machine__33133__auto__);

(statearr_35566[(1)] = (1));

return statearr_35566;
});
var shadow$dom$state_machine__33133__auto____1 = (function (state_35560){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_35560);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e35569){var ex__33136__auto__ = e35569;
var statearr_35570_36079 = state_35560;
(statearr_35570_36079[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_35560[(4)]))){
var statearr_35571_36080 = state_35560;
(statearr_35571_36080[(1)] = cljs.core.first((state_35560[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36081 = state_35560;
state_35560 = G__36081;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
shadow$dom$state_machine__33133__auto__ = function(state_35560){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33133__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33133__auto____1.call(this,state_35560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33133__auto____0;
shadow$dom$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33133__auto____1;
return shadow$dom$state_machine__33133__auto__;
})()
})();
var state__33191__auto__ = (function (){var statearr_35574 = f__33190__auto__();
(statearr_35574[(6)] = c__33189__auto___36078);

return statearr_35574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
