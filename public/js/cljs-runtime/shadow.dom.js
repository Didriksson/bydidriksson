goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35596 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_35596(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35600 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_35600(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34957 = coll;
var G__34958 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34957,G__34958) : shadow.dom.lazy_native_coll_seq.call(null,G__34957,G__34958));
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
var G__34971 = arguments.length;
switch (G__34971) {
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
var G__34979 = arguments.length;
switch (G__34979) {
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
var G__34985 = arguments.length;
switch (G__34985) {
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
var G__34991 = arguments.length;
switch (G__34991) {
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
var G__35000 = arguments.length;
switch (G__35000) {
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
var G__35005 = arguments.length;
switch (G__35005) {
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
}catch (e35013){if((e35013 instanceof Object)){
var e = e35013;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35013;

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
var seq__35021 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35022 = null;
var count__35023 = (0);
var i__35024 = (0);
while(true){
if((i__35024 < count__35023)){
var el = chunk__35022.cljs$core$IIndexed$_nth$arity$2(null,i__35024);
var handler_35703__$1 = ((function (seq__35021,chunk__35022,count__35023,i__35024,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35021,chunk__35022,count__35023,i__35024,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35703__$1);


var G__35704 = seq__35021;
var G__35705 = chunk__35022;
var G__35706 = count__35023;
var G__35707 = (i__35024 + (1));
seq__35021 = G__35704;
chunk__35022 = G__35705;
count__35023 = G__35706;
i__35024 = G__35707;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35021);
if(temp__5735__auto__){
var seq__35021__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35021__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35021__$1);
var G__35708 = cljs.core.chunk_rest(seq__35021__$1);
var G__35709 = c__4556__auto__;
var G__35710 = cljs.core.count(c__4556__auto__);
var G__35711 = (0);
seq__35021 = G__35708;
chunk__35022 = G__35709;
count__35023 = G__35710;
i__35024 = G__35711;
continue;
} else {
var el = cljs.core.first(seq__35021__$1);
var handler_35712__$1 = ((function (seq__35021,chunk__35022,count__35023,i__35024,el,seq__35021__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35021,chunk__35022,count__35023,i__35024,el,seq__35021__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35712__$1);


var G__35713 = cljs.core.next(seq__35021__$1);
var G__35714 = null;
var G__35715 = (0);
var G__35716 = (0);
seq__35021 = G__35713;
chunk__35022 = G__35714;
count__35023 = G__35715;
i__35024 = G__35716;
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
var G__35036 = arguments.length;
switch (G__35036) {
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
var seq__35044 = cljs.core.seq(events);
var chunk__35045 = null;
var count__35046 = (0);
var i__35047 = (0);
while(true){
if((i__35047 < count__35046)){
var vec__35060 = chunk__35045.cljs$core$IIndexed$_nth$arity$2(null,i__35047);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35060,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35060,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35746 = seq__35044;
var G__35749 = chunk__35045;
var G__35750 = count__35046;
var G__35751 = (i__35047 + (1));
seq__35044 = G__35746;
chunk__35045 = G__35749;
count__35046 = G__35750;
i__35047 = G__35751;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35044);
if(temp__5735__auto__){
var seq__35044__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35044__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35044__$1);
var G__35752 = cljs.core.chunk_rest(seq__35044__$1);
var G__35753 = c__4556__auto__;
var G__35754 = cljs.core.count(c__4556__auto__);
var G__35755 = (0);
seq__35044 = G__35752;
chunk__35045 = G__35753;
count__35046 = G__35754;
i__35047 = G__35755;
continue;
} else {
var vec__35065 = cljs.core.first(seq__35044__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35065,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35065,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35756 = cljs.core.next(seq__35044__$1);
var G__35757 = null;
var G__35758 = (0);
var G__35759 = (0);
seq__35044 = G__35756;
chunk__35045 = G__35757;
count__35046 = G__35758;
i__35047 = G__35759;
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
var seq__35072 = cljs.core.seq(styles);
var chunk__35073 = null;
var count__35074 = (0);
var i__35075 = (0);
while(true){
if((i__35075 < count__35074)){
var vec__35088 = chunk__35073.cljs$core$IIndexed$_nth$arity$2(null,i__35075);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35088,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35088,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35760 = seq__35072;
var G__35761 = chunk__35073;
var G__35762 = count__35074;
var G__35763 = (i__35075 + (1));
seq__35072 = G__35760;
chunk__35073 = G__35761;
count__35074 = G__35762;
i__35075 = G__35763;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35072);
if(temp__5735__auto__){
var seq__35072__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35072__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35072__$1);
var G__35764 = cljs.core.chunk_rest(seq__35072__$1);
var G__35765 = c__4556__auto__;
var G__35766 = cljs.core.count(c__4556__auto__);
var G__35767 = (0);
seq__35072 = G__35764;
chunk__35073 = G__35765;
count__35074 = G__35766;
i__35075 = G__35767;
continue;
} else {
var vec__35094 = cljs.core.first(seq__35072__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35094,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35094,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35768 = cljs.core.next(seq__35072__$1);
var G__35769 = null;
var G__35770 = (0);
var G__35771 = (0);
seq__35072 = G__35768;
chunk__35073 = G__35769;
count__35074 = G__35770;
i__35075 = G__35771;
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
var G__35098_35772 = key;
var G__35098_35773__$1 = (((G__35098_35772 instanceof cljs.core.Keyword))?G__35098_35772.fqn:null);
switch (G__35098_35773__$1) {
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
var ks_35775 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_35775,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_35775,"aria-");
}
})())){
el.setAttribute(ks_35775,value);
} else {
(el[ks_35775] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35115){
var map__35116 = p__35115;
var map__35116__$1 = (((((!((map__35116 == null))))?(((((map__35116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35116):map__35116);
var props = map__35116__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35116__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35119 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35119,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35119,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35119,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35124 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35124,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35124;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35127 = arguments.length;
switch (G__35127) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35134){
var vec__35135 = p__35134;
var seq__35136 = cljs.core.seq(vec__35135);
var first__35137 = cljs.core.first(seq__35136);
var seq__35136__$1 = cljs.core.next(seq__35136);
var nn = first__35137;
var first__35137__$1 = cljs.core.first(seq__35136__$1);
var seq__35136__$2 = cljs.core.next(seq__35136__$1);
var np = first__35137__$1;
var nc = seq__35136__$2;
var node = vec__35135;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35141 = nn;
var G__35142 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35141,G__35142) : create_fn.call(null,G__35141,G__35142));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35144 = nn;
var G__35145 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35144,G__35145) : create_fn.call(null,G__35144,G__35145));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35147 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35147,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35147,(1),null);
var seq__35151_35782 = cljs.core.seq(node_children);
var chunk__35152_35783 = null;
var count__35153_35784 = (0);
var i__35154_35785 = (0);
while(true){
if((i__35154_35785 < count__35153_35784)){
var child_struct_35786 = chunk__35152_35783.cljs$core$IIndexed$_nth$arity$2(null,i__35154_35785);
var children_35787 = shadow.dom.dom_node(child_struct_35786);
if(cljs.core.seq_QMARK_(children_35787)){
var seq__35182_35788 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35787));
var chunk__35184_35789 = null;
var count__35185_35790 = (0);
var i__35186_35791 = (0);
while(true){
if((i__35186_35791 < count__35185_35790)){
var child_35792 = chunk__35184_35789.cljs$core$IIndexed$_nth$arity$2(null,i__35186_35791);
if(cljs.core.truth_(child_35792)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35792);


var G__35793 = seq__35182_35788;
var G__35794 = chunk__35184_35789;
var G__35795 = count__35185_35790;
var G__35796 = (i__35186_35791 + (1));
seq__35182_35788 = G__35793;
chunk__35184_35789 = G__35794;
count__35185_35790 = G__35795;
i__35186_35791 = G__35796;
continue;
} else {
var G__35797 = seq__35182_35788;
var G__35798 = chunk__35184_35789;
var G__35799 = count__35185_35790;
var G__35800 = (i__35186_35791 + (1));
seq__35182_35788 = G__35797;
chunk__35184_35789 = G__35798;
count__35185_35790 = G__35799;
i__35186_35791 = G__35800;
continue;
}
} else {
var temp__5735__auto___35802 = cljs.core.seq(seq__35182_35788);
if(temp__5735__auto___35802){
var seq__35182_35803__$1 = temp__5735__auto___35802;
if(cljs.core.chunked_seq_QMARK_(seq__35182_35803__$1)){
var c__4556__auto___35804 = cljs.core.chunk_first(seq__35182_35803__$1);
var G__35805 = cljs.core.chunk_rest(seq__35182_35803__$1);
var G__35806 = c__4556__auto___35804;
var G__35807 = cljs.core.count(c__4556__auto___35804);
var G__35808 = (0);
seq__35182_35788 = G__35805;
chunk__35184_35789 = G__35806;
count__35185_35790 = G__35807;
i__35186_35791 = G__35808;
continue;
} else {
var child_35809 = cljs.core.first(seq__35182_35803__$1);
if(cljs.core.truth_(child_35809)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35809);


var G__35810 = cljs.core.next(seq__35182_35803__$1);
var G__35811 = null;
var G__35812 = (0);
var G__35813 = (0);
seq__35182_35788 = G__35810;
chunk__35184_35789 = G__35811;
count__35185_35790 = G__35812;
i__35186_35791 = G__35813;
continue;
} else {
var G__35814 = cljs.core.next(seq__35182_35803__$1);
var G__35815 = null;
var G__35816 = (0);
var G__35817 = (0);
seq__35182_35788 = G__35814;
chunk__35184_35789 = G__35815;
count__35185_35790 = G__35816;
i__35186_35791 = G__35817;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35787);
}


var G__35818 = seq__35151_35782;
var G__35819 = chunk__35152_35783;
var G__35820 = count__35153_35784;
var G__35821 = (i__35154_35785 + (1));
seq__35151_35782 = G__35818;
chunk__35152_35783 = G__35819;
count__35153_35784 = G__35820;
i__35154_35785 = G__35821;
continue;
} else {
var temp__5735__auto___35822 = cljs.core.seq(seq__35151_35782);
if(temp__5735__auto___35822){
var seq__35151_35823__$1 = temp__5735__auto___35822;
if(cljs.core.chunked_seq_QMARK_(seq__35151_35823__$1)){
var c__4556__auto___35824 = cljs.core.chunk_first(seq__35151_35823__$1);
var G__35825 = cljs.core.chunk_rest(seq__35151_35823__$1);
var G__35826 = c__4556__auto___35824;
var G__35827 = cljs.core.count(c__4556__auto___35824);
var G__35828 = (0);
seq__35151_35782 = G__35825;
chunk__35152_35783 = G__35826;
count__35153_35784 = G__35827;
i__35154_35785 = G__35828;
continue;
} else {
var child_struct_35829 = cljs.core.first(seq__35151_35823__$1);
var children_35830 = shadow.dom.dom_node(child_struct_35829);
if(cljs.core.seq_QMARK_(children_35830)){
var seq__35196_35831 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35830));
var chunk__35198_35832 = null;
var count__35199_35833 = (0);
var i__35200_35834 = (0);
while(true){
if((i__35200_35834 < count__35199_35833)){
var child_35835 = chunk__35198_35832.cljs$core$IIndexed$_nth$arity$2(null,i__35200_35834);
if(cljs.core.truth_(child_35835)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35835);


var G__35836 = seq__35196_35831;
var G__35837 = chunk__35198_35832;
var G__35838 = count__35199_35833;
var G__35839 = (i__35200_35834 + (1));
seq__35196_35831 = G__35836;
chunk__35198_35832 = G__35837;
count__35199_35833 = G__35838;
i__35200_35834 = G__35839;
continue;
} else {
var G__35840 = seq__35196_35831;
var G__35841 = chunk__35198_35832;
var G__35842 = count__35199_35833;
var G__35843 = (i__35200_35834 + (1));
seq__35196_35831 = G__35840;
chunk__35198_35832 = G__35841;
count__35199_35833 = G__35842;
i__35200_35834 = G__35843;
continue;
}
} else {
var temp__5735__auto___35844__$1 = cljs.core.seq(seq__35196_35831);
if(temp__5735__auto___35844__$1){
var seq__35196_35845__$1 = temp__5735__auto___35844__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35196_35845__$1)){
var c__4556__auto___35846 = cljs.core.chunk_first(seq__35196_35845__$1);
var G__35847 = cljs.core.chunk_rest(seq__35196_35845__$1);
var G__35848 = c__4556__auto___35846;
var G__35849 = cljs.core.count(c__4556__auto___35846);
var G__35850 = (0);
seq__35196_35831 = G__35847;
chunk__35198_35832 = G__35848;
count__35199_35833 = G__35849;
i__35200_35834 = G__35850;
continue;
} else {
var child_35851 = cljs.core.first(seq__35196_35845__$1);
if(cljs.core.truth_(child_35851)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35851);


var G__35852 = cljs.core.next(seq__35196_35845__$1);
var G__35853 = null;
var G__35854 = (0);
var G__35855 = (0);
seq__35196_35831 = G__35852;
chunk__35198_35832 = G__35853;
count__35199_35833 = G__35854;
i__35200_35834 = G__35855;
continue;
} else {
var G__35856 = cljs.core.next(seq__35196_35845__$1);
var G__35857 = null;
var G__35858 = (0);
var G__35859 = (0);
seq__35196_35831 = G__35856;
chunk__35198_35832 = G__35857;
count__35199_35833 = G__35858;
i__35200_35834 = G__35859;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35830);
}


var G__35860 = cljs.core.next(seq__35151_35823__$1);
var G__35861 = null;
var G__35862 = (0);
var G__35863 = (0);
seq__35151_35782 = G__35860;
chunk__35152_35783 = G__35861;
count__35153_35784 = G__35862;
i__35154_35785 = G__35863;
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
var seq__35211 = cljs.core.seq(node);
var chunk__35212 = null;
var count__35213 = (0);
var i__35214 = (0);
while(true){
if((i__35214 < count__35213)){
var n = chunk__35212.cljs$core$IIndexed$_nth$arity$2(null,i__35214);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35864 = seq__35211;
var G__35865 = chunk__35212;
var G__35866 = count__35213;
var G__35867 = (i__35214 + (1));
seq__35211 = G__35864;
chunk__35212 = G__35865;
count__35213 = G__35866;
i__35214 = G__35867;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35211);
if(temp__5735__auto__){
var seq__35211__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35211__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35211__$1);
var G__35868 = cljs.core.chunk_rest(seq__35211__$1);
var G__35869 = c__4556__auto__;
var G__35870 = cljs.core.count(c__4556__auto__);
var G__35871 = (0);
seq__35211 = G__35868;
chunk__35212 = G__35869;
count__35213 = G__35870;
i__35214 = G__35871;
continue;
} else {
var n = cljs.core.first(seq__35211__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35872 = cljs.core.next(seq__35211__$1);
var G__35873 = null;
var G__35874 = (0);
var G__35875 = (0);
seq__35211 = G__35872;
chunk__35212 = G__35873;
count__35213 = G__35874;
i__35214 = G__35875;
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
var G__35225 = arguments.length;
switch (G__35225) {
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
var G__35230 = arguments.length;
switch (G__35230) {
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
var G__35240 = arguments.length;
switch (G__35240) {
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
var len__4736__auto___35889 = arguments.length;
var i__4737__auto___35890 = (0);
while(true){
if((i__4737__auto___35890 < len__4736__auto___35889)){
args__4742__auto__.push((arguments[i__4737__auto___35890]));

var G__35891 = (i__4737__auto___35890 + (1));
i__4737__auto___35890 = G__35891;
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
var seq__35259_35892 = cljs.core.seq(nodes);
var chunk__35260_35893 = null;
var count__35261_35894 = (0);
var i__35262_35895 = (0);
while(true){
if((i__35262_35895 < count__35261_35894)){
var node_35896 = chunk__35260_35893.cljs$core$IIndexed$_nth$arity$2(null,i__35262_35895);
fragment.appendChild(shadow.dom._to_dom(node_35896));


var G__35897 = seq__35259_35892;
var G__35898 = chunk__35260_35893;
var G__35899 = count__35261_35894;
var G__35900 = (i__35262_35895 + (1));
seq__35259_35892 = G__35897;
chunk__35260_35893 = G__35898;
count__35261_35894 = G__35899;
i__35262_35895 = G__35900;
continue;
} else {
var temp__5735__auto___35901 = cljs.core.seq(seq__35259_35892);
if(temp__5735__auto___35901){
var seq__35259_35902__$1 = temp__5735__auto___35901;
if(cljs.core.chunked_seq_QMARK_(seq__35259_35902__$1)){
var c__4556__auto___35903 = cljs.core.chunk_first(seq__35259_35902__$1);
var G__35904 = cljs.core.chunk_rest(seq__35259_35902__$1);
var G__35905 = c__4556__auto___35903;
var G__35906 = cljs.core.count(c__4556__auto___35903);
var G__35907 = (0);
seq__35259_35892 = G__35904;
chunk__35260_35893 = G__35905;
count__35261_35894 = G__35906;
i__35262_35895 = G__35907;
continue;
} else {
var node_35908 = cljs.core.first(seq__35259_35902__$1);
fragment.appendChild(shadow.dom._to_dom(node_35908));


var G__35909 = cljs.core.next(seq__35259_35902__$1);
var G__35910 = null;
var G__35911 = (0);
var G__35912 = (0);
seq__35259_35892 = G__35909;
chunk__35260_35893 = G__35910;
count__35261_35894 = G__35911;
i__35262_35895 = G__35912;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35254){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35254));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35273_35913 = cljs.core.seq(scripts);
var chunk__35274_35914 = null;
var count__35275_35915 = (0);
var i__35276_35916 = (0);
while(true){
if((i__35276_35916 < count__35275_35915)){
var vec__35287_35917 = chunk__35274_35914.cljs$core$IIndexed$_nth$arity$2(null,i__35276_35916);
var script_tag_35918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35287_35917,(0),null);
var script_body_35919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35287_35917,(1),null);
eval(script_body_35919);


var G__35920 = seq__35273_35913;
var G__35921 = chunk__35274_35914;
var G__35922 = count__35275_35915;
var G__35923 = (i__35276_35916 + (1));
seq__35273_35913 = G__35920;
chunk__35274_35914 = G__35921;
count__35275_35915 = G__35922;
i__35276_35916 = G__35923;
continue;
} else {
var temp__5735__auto___35924 = cljs.core.seq(seq__35273_35913);
if(temp__5735__auto___35924){
var seq__35273_35928__$1 = temp__5735__auto___35924;
if(cljs.core.chunked_seq_QMARK_(seq__35273_35928__$1)){
var c__4556__auto___35929 = cljs.core.chunk_first(seq__35273_35928__$1);
var G__35930 = cljs.core.chunk_rest(seq__35273_35928__$1);
var G__35931 = c__4556__auto___35929;
var G__35932 = cljs.core.count(c__4556__auto___35929);
var G__35933 = (0);
seq__35273_35913 = G__35930;
chunk__35274_35914 = G__35931;
count__35275_35915 = G__35932;
i__35276_35916 = G__35933;
continue;
} else {
var vec__35292_35934 = cljs.core.first(seq__35273_35928__$1);
var script_tag_35935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35292_35934,(0),null);
var script_body_35936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35292_35934,(1),null);
eval(script_body_35936);


var G__35937 = cljs.core.next(seq__35273_35928__$1);
var G__35938 = null;
var G__35939 = (0);
var G__35940 = (0);
seq__35273_35913 = G__35937;
chunk__35274_35914 = G__35938;
count__35275_35915 = G__35939;
i__35276_35916 = G__35940;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35296){
var vec__35297 = p__35296;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35297,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35297,(1),null);
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
var G__35304 = arguments.length;
switch (G__35304) {
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
var seq__35314 = cljs.core.seq(style_keys);
var chunk__35315 = null;
var count__35316 = (0);
var i__35317 = (0);
while(true){
if((i__35317 < count__35316)){
var it = chunk__35315.cljs$core$IIndexed$_nth$arity$2(null,i__35317);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35943 = seq__35314;
var G__35944 = chunk__35315;
var G__35945 = count__35316;
var G__35946 = (i__35317 + (1));
seq__35314 = G__35943;
chunk__35315 = G__35944;
count__35316 = G__35945;
i__35317 = G__35946;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35314);
if(temp__5735__auto__){
var seq__35314__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35314__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35314__$1);
var G__35947 = cljs.core.chunk_rest(seq__35314__$1);
var G__35948 = c__4556__auto__;
var G__35949 = cljs.core.count(c__4556__auto__);
var G__35950 = (0);
seq__35314 = G__35947;
chunk__35315 = G__35948;
count__35316 = G__35949;
i__35317 = G__35950;
continue;
} else {
var it = cljs.core.first(seq__35314__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35951 = cljs.core.next(seq__35314__$1);
var G__35952 = null;
var G__35953 = (0);
var G__35954 = (0);
seq__35314 = G__35951;
chunk__35315 = G__35952;
count__35316 = G__35953;
i__35317 = G__35954;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35319,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35323 = k35319;
var G__35323__$1 = (((G__35323 instanceof cljs.core.Keyword))?G__35323.fqn:null);
switch (G__35323__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35319,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35324){
var vec__35325 = p__35324;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35325,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35325,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35318){
var self__ = this;
var G__35318__$1 = this;
return (new cljs.core.RecordIter((0),G__35318__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35320,other35321){
var self__ = this;
var this35320__$1 = this;
return (((!((other35321 == null)))) && ((this35320__$1.constructor === other35321.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35320__$1.x,other35321.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35320__$1.y,other35321.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35320__$1.__extmap,other35321.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35318){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35343 = cljs.core.keyword_identical_QMARK_;
var expr__35344 = k__4388__auto__;
if(cljs.core.truth_((pred__35343.cljs$core$IFn$_invoke$arity$2 ? pred__35343.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35344) : pred__35343.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35344)))){
return (new shadow.dom.Coordinate(G__35318,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35343.cljs$core$IFn$_invoke$arity$2 ? pred__35343.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35344) : pred__35343.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35344)))){
return (new shadow.dom.Coordinate(self__.x,G__35318,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35318),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35318){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35318,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35322){
var extmap__4419__auto__ = (function (){var G__35353 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35322,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35322)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35353);
} else {
return G__35353;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35322),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35322),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35363,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35374 = k35363;
var G__35374__$1 = (((G__35374 instanceof cljs.core.Keyword))?G__35374.fqn:null);
switch (G__35374__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35363,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35378){
var vec__35380 = p__35378;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35380,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35380,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35362){
var self__ = this;
var G__35362__$1 = this;
return (new cljs.core.RecordIter((0),G__35362__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35364,other35365){
var self__ = this;
var this35364__$1 = this;
return (((!((other35365 == null)))) && ((this35364__$1.constructor === other35365.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35364__$1.w,other35365.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35364__$1.h,other35365.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35364__$1.__extmap,other35365.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35362){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35392 = cljs.core.keyword_identical_QMARK_;
var expr__35393 = k__4388__auto__;
if(cljs.core.truth_((pred__35392.cljs$core$IFn$_invoke$arity$2 ? pred__35392.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35393) : pred__35392.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35393)))){
return (new shadow.dom.Size(G__35362,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35392.cljs$core$IFn$_invoke$arity$2 ? pred__35392.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35393) : pred__35392.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35393)))){
return (new shadow.dom.Size(self__.w,G__35362,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35362),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35362){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35362,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35369){
var extmap__4419__auto__ = (function (){var G__35399 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35369,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35369)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35399);
} else {
return G__35399;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35369),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35369),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__35978 = (i + (1));
var G__35979 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35978;
ret = G__35979;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35411){
var vec__35412 = p__35411;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35412,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35412,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35420 = arguments.length;
switch (G__35420) {
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
var G__35981 = ps;
var G__35982 = (i + (1));
el__$1 = G__35981;
i = G__35982;
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
var vec__35441 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35441,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35441,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35441,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35444_35983 = cljs.core.seq(props);
var chunk__35445_35984 = null;
var count__35446_35985 = (0);
var i__35447_35986 = (0);
while(true){
if((i__35447_35986 < count__35446_35985)){
var vec__35458_35987 = chunk__35445_35984.cljs$core$IIndexed$_nth$arity$2(null,i__35447_35986);
var k_35988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35458_35987,(0),null);
var v_35989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35458_35987,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35988);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35988),v_35989);


var G__35990 = seq__35444_35983;
var G__35991 = chunk__35445_35984;
var G__35992 = count__35446_35985;
var G__35993 = (i__35447_35986 + (1));
seq__35444_35983 = G__35990;
chunk__35445_35984 = G__35991;
count__35446_35985 = G__35992;
i__35447_35986 = G__35993;
continue;
} else {
var temp__5735__auto___35994 = cljs.core.seq(seq__35444_35983);
if(temp__5735__auto___35994){
var seq__35444_35995__$1 = temp__5735__auto___35994;
if(cljs.core.chunked_seq_QMARK_(seq__35444_35995__$1)){
var c__4556__auto___35996 = cljs.core.chunk_first(seq__35444_35995__$1);
var G__35997 = cljs.core.chunk_rest(seq__35444_35995__$1);
var G__35998 = c__4556__auto___35996;
var G__35999 = cljs.core.count(c__4556__auto___35996);
var G__36000 = (0);
seq__35444_35983 = G__35997;
chunk__35445_35984 = G__35998;
count__35446_35985 = G__35999;
i__35447_35986 = G__36000;
continue;
} else {
var vec__35461_36001 = cljs.core.first(seq__35444_35995__$1);
var k_36002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35461_36001,(0),null);
var v_36003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35461_36001,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_36002);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36002),v_36003);


var G__36004 = cljs.core.next(seq__35444_35995__$1);
var G__36005 = null;
var G__36006 = (0);
var G__36007 = (0);
seq__35444_35983 = G__36004;
chunk__35445_35984 = G__36005;
count__35446_35985 = G__36006;
i__35447_35986 = G__36007;
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
var vec__35467 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35467,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35467,(1),null);
var seq__35470_36008 = cljs.core.seq(node_children);
var chunk__35472_36009 = null;
var count__35473_36010 = (0);
var i__35474_36011 = (0);
while(true){
if((i__35474_36011 < count__35473_36010)){
var child_struct_36012 = chunk__35472_36009.cljs$core$IIndexed$_nth$arity$2(null,i__35474_36011);
if((!((child_struct_36012 == null)))){
if(typeof child_struct_36012 === 'string'){
var text_36013 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36013),child_struct_36012].join(''));
} else {
var children_36014 = shadow.dom.svg_node(child_struct_36012);
if(cljs.core.seq_QMARK_(children_36014)){
var seq__35504_36015 = cljs.core.seq(children_36014);
var chunk__35506_36016 = null;
var count__35507_36017 = (0);
var i__35508_36018 = (0);
while(true){
if((i__35508_36018 < count__35507_36017)){
var child_36019 = chunk__35506_36016.cljs$core$IIndexed$_nth$arity$2(null,i__35508_36018);
if(cljs.core.truth_(child_36019)){
node.appendChild(child_36019);


var G__36020 = seq__35504_36015;
var G__36021 = chunk__35506_36016;
var G__36022 = count__35507_36017;
var G__36023 = (i__35508_36018 + (1));
seq__35504_36015 = G__36020;
chunk__35506_36016 = G__36021;
count__35507_36017 = G__36022;
i__35508_36018 = G__36023;
continue;
} else {
var G__36024 = seq__35504_36015;
var G__36025 = chunk__35506_36016;
var G__36026 = count__35507_36017;
var G__36027 = (i__35508_36018 + (1));
seq__35504_36015 = G__36024;
chunk__35506_36016 = G__36025;
count__35507_36017 = G__36026;
i__35508_36018 = G__36027;
continue;
}
} else {
var temp__5735__auto___36028 = cljs.core.seq(seq__35504_36015);
if(temp__5735__auto___36028){
var seq__35504_36029__$1 = temp__5735__auto___36028;
if(cljs.core.chunked_seq_QMARK_(seq__35504_36029__$1)){
var c__4556__auto___36030 = cljs.core.chunk_first(seq__35504_36029__$1);
var G__36031 = cljs.core.chunk_rest(seq__35504_36029__$1);
var G__36032 = c__4556__auto___36030;
var G__36033 = cljs.core.count(c__4556__auto___36030);
var G__36034 = (0);
seq__35504_36015 = G__36031;
chunk__35506_36016 = G__36032;
count__35507_36017 = G__36033;
i__35508_36018 = G__36034;
continue;
} else {
var child_36035 = cljs.core.first(seq__35504_36029__$1);
if(cljs.core.truth_(child_36035)){
node.appendChild(child_36035);


var G__36036 = cljs.core.next(seq__35504_36029__$1);
var G__36037 = null;
var G__36038 = (0);
var G__36039 = (0);
seq__35504_36015 = G__36036;
chunk__35506_36016 = G__36037;
count__35507_36017 = G__36038;
i__35508_36018 = G__36039;
continue;
} else {
var G__36040 = cljs.core.next(seq__35504_36029__$1);
var G__36041 = null;
var G__36042 = (0);
var G__36043 = (0);
seq__35504_36015 = G__36040;
chunk__35506_36016 = G__36041;
count__35507_36017 = G__36042;
i__35508_36018 = G__36043;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36014);
}
}


var G__36044 = seq__35470_36008;
var G__36045 = chunk__35472_36009;
var G__36046 = count__35473_36010;
var G__36047 = (i__35474_36011 + (1));
seq__35470_36008 = G__36044;
chunk__35472_36009 = G__36045;
count__35473_36010 = G__36046;
i__35474_36011 = G__36047;
continue;
} else {
var G__36048 = seq__35470_36008;
var G__36049 = chunk__35472_36009;
var G__36050 = count__35473_36010;
var G__36051 = (i__35474_36011 + (1));
seq__35470_36008 = G__36048;
chunk__35472_36009 = G__36049;
count__35473_36010 = G__36050;
i__35474_36011 = G__36051;
continue;
}
} else {
var temp__5735__auto___36052 = cljs.core.seq(seq__35470_36008);
if(temp__5735__auto___36052){
var seq__35470_36053__$1 = temp__5735__auto___36052;
if(cljs.core.chunked_seq_QMARK_(seq__35470_36053__$1)){
var c__4556__auto___36054 = cljs.core.chunk_first(seq__35470_36053__$1);
var G__36055 = cljs.core.chunk_rest(seq__35470_36053__$1);
var G__36056 = c__4556__auto___36054;
var G__36057 = cljs.core.count(c__4556__auto___36054);
var G__36058 = (0);
seq__35470_36008 = G__36055;
chunk__35472_36009 = G__36056;
count__35473_36010 = G__36057;
i__35474_36011 = G__36058;
continue;
} else {
var child_struct_36059 = cljs.core.first(seq__35470_36053__$1);
if((!((child_struct_36059 == null)))){
if(typeof child_struct_36059 === 'string'){
var text_36060 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36060),child_struct_36059].join(''));
} else {
var children_36061 = shadow.dom.svg_node(child_struct_36059);
if(cljs.core.seq_QMARK_(children_36061)){
var seq__35516_36062 = cljs.core.seq(children_36061);
var chunk__35518_36063 = null;
var count__35519_36064 = (0);
var i__35520_36065 = (0);
while(true){
if((i__35520_36065 < count__35519_36064)){
var child_36066 = chunk__35518_36063.cljs$core$IIndexed$_nth$arity$2(null,i__35520_36065);
if(cljs.core.truth_(child_36066)){
node.appendChild(child_36066);


var G__36067 = seq__35516_36062;
var G__36068 = chunk__35518_36063;
var G__36069 = count__35519_36064;
var G__36070 = (i__35520_36065 + (1));
seq__35516_36062 = G__36067;
chunk__35518_36063 = G__36068;
count__35519_36064 = G__36069;
i__35520_36065 = G__36070;
continue;
} else {
var G__36071 = seq__35516_36062;
var G__36072 = chunk__35518_36063;
var G__36073 = count__35519_36064;
var G__36074 = (i__35520_36065 + (1));
seq__35516_36062 = G__36071;
chunk__35518_36063 = G__36072;
count__35519_36064 = G__36073;
i__35520_36065 = G__36074;
continue;
}
} else {
var temp__5735__auto___36075__$1 = cljs.core.seq(seq__35516_36062);
if(temp__5735__auto___36075__$1){
var seq__35516_36076__$1 = temp__5735__auto___36075__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35516_36076__$1)){
var c__4556__auto___36077 = cljs.core.chunk_first(seq__35516_36076__$1);
var G__36078 = cljs.core.chunk_rest(seq__35516_36076__$1);
var G__36079 = c__4556__auto___36077;
var G__36080 = cljs.core.count(c__4556__auto___36077);
var G__36081 = (0);
seq__35516_36062 = G__36078;
chunk__35518_36063 = G__36079;
count__35519_36064 = G__36080;
i__35520_36065 = G__36081;
continue;
} else {
var child_36082 = cljs.core.first(seq__35516_36076__$1);
if(cljs.core.truth_(child_36082)){
node.appendChild(child_36082);


var G__36083 = cljs.core.next(seq__35516_36076__$1);
var G__36084 = null;
var G__36085 = (0);
var G__36086 = (0);
seq__35516_36062 = G__36083;
chunk__35518_36063 = G__36084;
count__35519_36064 = G__36085;
i__35520_36065 = G__36086;
continue;
} else {
var G__36087 = cljs.core.next(seq__35516_36076__$1);
var G__36088 = null;
var G__36089 = (0);
var G__36090 = (0);
seq__35516_36062 = G__36087;
chunk__35518_36063 = G__36088;
count__35519_36064 = G__36089;
i__35520_36065 = G__36090;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36061);
}
}


var G__36091 = cljs.core.next(seq__35470_36053__$1);
var G__36092 = null;
var G__36093 = (0);
var G__36094 = (0);
seq__35470_36008 = G__36091;
chunk__35472_36009 = G__36092;
count__35473_36010 = G__36093;
i__35474_36011 = G__36094;
continue;
} else {
var G__36095 = cljs.core.next(seq__35470_36053__$1);
var G__36096 = null;
var G__36097 = (0);
var G__36098 = (0);
seq__35470_36008 = G__36095;
chunk__35472_36009 = G__36096;
count__35473_36010 = G__36097;
i__35474_36011 = G__36098;
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
var len__4736__auto___36099 = arguments.length;
var i__4737__auto___36100 = (0);
while(true){
if((i__4737__auto___36100 < len__4736__auto___36099)){
args__4742__auto__.push((arguments[i__4737__auto___36100]));

var G__36101 = (i__4737__auto___36100 + (1));
i__4737__auto___36100 = G__36101;
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
var G__35566 = arguments.length;
switch (G__35566) {
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
var c__33195__auto___36103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33196__auto__ = (function (){var switch__33132__auto__ = (function (state_35575){
var state_val_35576 = (state_35575[(1)]);
if((state_val_35576 === (1))){
var state_35575__$1 = state_35575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35575__$1,(2),once_or_cleanup);
} else {
if((state_val_35576 === (2))){
var inst_35572 = (state_35575[(2)]);
var inst_35573 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35575__$1 = (function (){var statearr_35579 = state_35575;
(statearr_35579[(7)] = inst_35572);

return statearr_35579;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35575__$1,inst_35573);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33133__auto__ = null;
var shadow$dom$state_machine__33133__auto____0 = (function (){
var statearr_35581 = [null,null,null,null,null,null,null,null];
(statearr_35581[(0)] = shadow$dom$state_machine__33133__auto__);

(statearr_35581[(1)] = (1));

return statearr_35581;
});
var shadow$dom$state_machine__33133__auto____1 = (function (state_35575){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_35575);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e35584){var ex__33136__auto__ = e35584;
var statearr_35585_36104 = state_35575;
(statearr_35585_36104[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_35575[(4)]))){
var statearr_35587_36105 = state_35575;
(statearr_35587_36105[(1)] = cljs.core.first((state_35575[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36106 = state_35575;
state_35575 = G__36106;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
shadow$dom$state_machine__33133__auto__ = function(state_35575){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33133__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33133__auto____1.call(this,state_35575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33133__auto____0;
shadow$dom$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33133__auto____1;
return shadow$dom$state_machine__33133__auto__;
})()
})();
var state__33197__auto__ = (function (){var statearr_35589 = f__33196__auto__();
(statearr_35589[(6)] = c__33195__auto___36103);

return statearr_35589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33197__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
