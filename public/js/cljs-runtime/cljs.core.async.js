goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33253 = arguments.length;
switch (G__33253) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33254 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33254 = (function (f,blockable,meta33255){
this.f = f;
this.blockable = blockable;
this.meta33255 = meta33255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33256,meta33255__$1){
var self__ = this;
var _33256__$1 = this;
return (new cljs.core.async.t_cljs$core$async33254(self__.f,self__.blockable,meta33255__$1));
}));

(cljs.core.async.t_cljs$core$async33254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33256){
var self__ = this;
var _33256__$1 = this;
return self__.meta33255;
}));

(cljs.core.async.t_cljs$core$async33254.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33254.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33254.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33254.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33255","meta33255",831090135,null)], null);
}));

(cljs.core.async.t_cljs$core$async33254.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33254");

(cljs.core.async.t_cljs$core$async33254.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33254");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33254.
 */
cljs.core.async.__GT_t_cljs$core$async33254 = (function cljs$core$async$__GT_t_cljs$core$async33254(f__$1,blockable__$1,meta33255){
return (new cljs.core.async.t_cljs$core$async33254(f__$1,blockable__$1,meta33255));
});

}

return (new cljs.core.async.t_cljs$core$async33254(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33263 = arguments.length;
switch (G__33263) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33267 = arguments.length;
switch (G__33267) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33274 = arguments.length;
switch (G__33274) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34939 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34939) : fn1.call(null,val_34939));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34939) : fn1.call(null,val_34939));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33279 = arguments.length;
switch (G__33279) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___34948 = n;
var x_34949 = (0);
while(true){
if((x_34949 < n__4613__auto___34948)){
(a[x_34949] = x_34949);

var G__34952 = (x_34949 + (1));
x_34949 = G__34952;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33283 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33283 = (function (flag,meta33284){
this.flag = flag;
this.meta33284 = meta33284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33285,meta33284__$1){
var self__ = this;
var _33285__$1 = this;
return (new cljs.core.async.t_cljs$core$async33283(self__.flag,meta33284__$1));
}));

(cljs.core.async.t_cljs$core$async33283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33285){
var self__ = this;
var _33285__$1 = this;
return self__.meta33284;
}));

(cljs.core.async.t_cljs$core$async33283.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33283.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33283.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33283.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33283.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33284","meta33284",7898366,null)], null);
}));

(cljs.core.async.t_cljs$core$async33283.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33283");

(cljs.core.async.t_cljs$core$async33283.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33283");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33283.
 */
cljs.core.async.__GT_t_cljs$core$async33283 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33283(flag__$1,meta33284){
return (new cljs.core.async.t_cljs$core$async33283(flag__$1,meta33284));
});

}

return (new cljs.core.async.t_cljs$core$async33283(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33291 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33291 = (function (flag,cb,meta33292){
this.flag = flag;
this.cb = cb;
this.meta33292 = meta33292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33293,meta33292__$1){
var self__ = this;
var _33293__$1 = this;
return (new cljs.core.async.t_cljs$core$async33291(self__.flag,self__.cb,meta33292__$1));
}));

(cljs.core.async.t_cljs$core$async33291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33293){
var self__ = this;
var _33293__$1 = this;
return self__.meta33292;
}));

(cljs.core.async.t_cljs$core$async33291.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33291.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33291.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33291.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33292","meta33292",92957928,null)], null);
}));

(cljs.core.async.t_cljs$core$async33291.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33291");

(cljs.core.async.t_cljs$core$async33291.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33291");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33291.
 */
cljs.core.async.__GT_t_cljs$core$async33291 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33291(flag__$1,cb__$1,meta33292){
return (new cljs.core.async.t_cljs$core$async33291(flag__$1,cb__$1,meta33292));
});

}

return (new cljs.core.async.t_cljs$core$async33291(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33294_SHARP_){
var G__33296 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33294_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33296) : fret.call(null,G__33296));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33295_SHARP_){
var G__33297 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33295_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33297) : fret.call(null,G__33297));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34957 = (i + (1));
i = G__34957;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34958 = arguments.length;
var i__4737__auto___34959 = (0);
while(true){
if((i__4737__auto___34959 < len__4736__auto___34958)){
args__4742__auto__.push((arguments[i__4737__auto___34959]));

var G__34960 = (i__4737__auto___34959 + (1));
i__4737__auto___34959 = G__34960;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33300){
var map__33301 = p__33300;
var map__33301__$1 = (((((!((map__33301 == null))))?(((((map__33301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33301):map__33301);
var opts = map__33301__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33298){
var G__33299 = cljs.core.first(seq33298);
var seq33298__$1 = cljs.core.next(seq33298);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33299,seq33298__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33315 = arguments.length;
switch (G__33315) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33189__auto___34964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = (function (state_33364){
var state_val_33365 = (state_33364[(1)]);
if((state_val_33365 === (7))){
var inst_33360 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
var statearr_33366_34965 = state_33364__$1;
(statearr_33366_34965[(2)] = inst_33360);

(statearr_33366_34965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (1))){
var state_33364__$1 = state_33364;
var statearr_33367_34966 = state_33364__$1;
(statearr_33367_34966[(2)] = null);

(statearr_33367_34966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (4))){
var inst_33343 = (state_33364[(7)]);
var inst_33343__$1 = (state_33364[(2)]);
var inst_33344 = (inst_33343__$1 == null);
var state_33364__$1 = (function (){var statearr_33368 = state_33364;
(statearr_33368[(7)] = inst_33343__$1);

return statearr_33368;
})();
if(cljs.core.truth_(inst_33344)){
var statearr_33369_34967 = state_33364__$1;
(statearr_33369_34967[(1)] = (5));

} else {
var statearr_33370_34968 = state_33364__$1;
(statearr_33370_34968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (13))){
var state_33364__$1 = state_33364;
var statearr_33371_34969 = state_33364__$1;
(statearr_33371_34969[(2)] = null);

(statearr_33371_34969[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (6))){
var inst_33343 = (state_33364[(7)]);
var state_33364__$1 = state_33364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33364__$1,(11),to,inst_33343);
} else {
if((state_val_33365 === (3))){
var inst_33362 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33364__$1,inst_33362);
} else {
if((state_val_33365 === (12))){
var state_33364__$1 = state_33364;
var statearr_33372_34970 = state_33364__$1;
(statearr_33372_34970[(2)] = null);

(statearr_33372_34970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (2))){
var state_33364__$1 = state_33364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33364__$1,(4),from);
} else {
if((state_val_33365 === (11))){
var inst_33353 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
if(cljs.core.truth_(inst_33353)){
var statearr_33373_34971 = state_33364__$1;
(statearr_33373_34971[(1)] = (12));

} else {
var statearr_33374_34972 = state_33364__$1;
(statearr_33374_34972[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (9))){
var state_33364__$1 = state_33364;
var statearr_33375_34973 = state_33364__$1;
(statearr_33375_34973[(2)] = null);

(statearr_33375_34973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (5))){
var state_33364__$1 = state_33364;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33376_34974 = state_33364__$1;
(statearr_33376_34974[(1)] = (8));

} else {
var statearr_33377_34975 = state_33364__$1;
(statearr_33377_34975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (14))){
var inst_33358 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
var statearr_33378_34976 = state_33364__$1;
(statearr_33378_34976[(2)] = inst_33358);

(statearr_33378_34976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (10))){
var inst_33350 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
var statearr_33379_34978 = state_33364__$1;
(statearr_33379_34978[(2)] = inst_33350);

(statearr_33379_34978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (8))){
var inst_33347 = cljs.core.async.close_BANG_(to);
var state_33364__$1 = state_33364;
var statearr_33380_34979 = state_33364__$1;
(statearr_33380_34979[(2)] = inst_33347);

(statearr_33380_34979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33133__auto__ = null;
var cljs$core$async$state_machine__33133__auto____0 = (function (){
var statearr_33381 = [null,null,null,null,null,null,null,null];
(statearr_33381[(0)] = cljs$core$async$state_machine__33133__auto__);

(statearr_33381[(1)] = (1));

return statearr_33381;
});
var cljs$core$async$state_machine__33133__auto____1 = (function (state_33364){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_33364);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e33382){var ex__33136__auto__ = e33382;
var statearr_33383_34981 = state_33364;
(statearr_33383_34981[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_33364[(4)]))){
var statearr_33384_34982 = state_33364;
(statearr_33384_34982[(1)] = cljs.core.first((state_33364[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34984 = state_33364;
state_33364 = G__34984;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$state_machine__33133__auto__ = function(state_33364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33133__auto____1.call(this,state_33364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33133__auto____0;
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33133__auto____1;
return cljs$core$async$state_machine__33133__auto__;
})()
})();
var state__33191__auto__ = (function (){var statearr_33385 = f__33190__auto__();
(statearr_33385[(6)] = c__33189__auto___34964);

return statearr_33385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__33386){
var vec__33387 = p__33386;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33387,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33387,(1),null);
var job = vec__33387;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33189__auto___34985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = (function (state_33394){
var state_val_33395 = (state_33394[(1)]);
if((state_val_33395 === (1))){
var state_33394__$1 = state_33394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33394__$1,(2),res,v);
} else {
if((state_val_33395 === (2))){
var inst_33391 = (state_33394[(2)]);
var inst_33392 = cljs.core.async.close_BANG_(res);
var state_33394__$1 = (function (){var statearr_33396 = state_33394;
(statearr_33396[(7)] = inst_33391);

return statearr_33396;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33394__$1,inst_33392);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0 = (function (){
var statearr_33397 = [null,null,null,null,null,null,null,null];
(statearr_33397[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__);

(statearr_33397[(1)] = (1));

return statearr_33397;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1 = (function (state_33394){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_33394);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e33398){var ex__33136__auto__ = e33398;
var statearr_33399_34988 = state_33394;
(statearr_33399_34988[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_33394[(4)]))){
var statearr_33400_34989 = state_33394;
(statearr_33400_34989[(1)] = cljs.core.first((state_33394[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34990 = state_33394;
state_33394 = G__34990;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__ = function(state_33394){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1.call(this,state_33394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__;
})()
})();
var state__33191__auto__ = (function (){var statearr_33401 = f__33190__auto__();
(statearr_33401[(6)] = c__33189__auto___34985);

return statearr_33401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33402){
var vec__33403 = p__33402;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33403,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33403,(1),null);
var job = vec__33403;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___34993 = n;
var __34994 = (0);
while(true){
if((__34994 < n__4613__auto___34993)){
var G__33406_34995 = type;
var G__33406_34996__$1 = (((G__33406_34995 instanceof cljs.core.Keyword))?G__33406_34995.fqn:null);
switch (G__33406_34996__$1) {
case "compute":
var c__33189__auto___34998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34994,c__33189__auto___34998,G__33406_34995,G__33406_34996__$1,n__4613__auto___34993,jobs,results,process,async){
return (function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = ((function (__34994,c__33189__auto___34998,G__33406_34995,G__33406_34996__$1,n__4613__auto___34993,jobs,results,process,async){
return (function (state_33419){
var state_val_33420 = (state_33419[(1)]);
if((state_val_33420 === (1))){
var state_33419__$1 = state_33419;
var statearr_33424_34999 = state_33419__$1;
(statearr_33424_34999[(2)] = null);

(statearr_33424_34999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (2))){
var state_33419__$1 = state_33419;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33419__$1,(4),jobs);
} else {
if((state_val_33420 === (3))){
var inst_33417 = (state_33419[(2)]);
var state_33419__$1 = state_33419;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33419__$1,inst_33417);
} else {
if((state_val_33420 === (4))){
var inst_33409 = (state_33419[(2)]);
var inst_33410 = process(inst_33409);
var state_33419__$1 = state_33419;
if(cljs.core.truth_(inst_33410)){
var statearr_33425_35002 = state_33419__$1;
(statearr_33425_35002[(1)] = (5));

} else {
var statearr_33426_35003 = state_33419__$1;
(statearr_33426_35003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (5))){
var state_33419__$1 = state_33419;
var statearr_33427_35004 = state_33419__$1;
(statearr_33427_35004[(2)] = null);

(statearr_33427_35004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (6))){
var state_33419__$1 = state_33419;
var statearr_33428_35005 = state_33419__$1;
(statearr_33428_35005[(2)] = null);

(statearr_33428_35005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (7))){
var inst_33415 = (state_33419[(2)]);
var state_33419__$1 = state_33419;
var statearr_33429_35006 = state_33419__$1;
(statearr_33429_35006[(2)] = inst_33415);

(statearr_33429_35006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34994,c__33189__auto___34998,G__33406_34995,G__33406_34996__$1,n__4613__auto___34993,jobs,results,process,async))
;
return ((function (__34994,switch__33132__auto__,c__33189__auto___34998,G__33406_34995,G__33406_34996__$1,n__4613__auto___34993,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0 = (function (){
var statearr_33430 = [null,null,null,null,null,null,null];
(statearr_33430[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__);

(statearr_33430[(1)] = (1));

return statearr_33430;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1 = (function (state_33419){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_33419);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e33431){var ex__33136__auto__ = e33431;
var statearr_33432_35007 = state_33419;
(statearr_33432_35007[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_33419[(4)]))){
var statearr_33433_35008 = state_33419;
(statearr_33433_35008[(1)] = cljs.core.first((state_33419[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35009 = state_33419;
state_33419 = G__35009;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__ = function(state_33419){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1.call(this,state_33419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__;
})()
;})(__34994,switch__33132__auto__,c__33189__auto___34998,G__33406_34995,G__33406_34996__$1,n__4613__auto___34993,jobs,results,process,async))
})();
var state__33191__auto__ = (function (){var statearr_33434 = f__33190__auto__();
(statearr_33434[(6)] = c__33189__auto___34998);

return statearr_33434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
});})(__34994,c__33189__auto___34998,G__33406_34995,G__33406_34996__$1,n__4613__auto___34993,jobs,results,process,async))
);


break;
case "async":
var c__33189__auto___35011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34994,c__33189__auto___35011,G__33406_34995,G__33406_34996__$1,n__4613__auto___34993,jobs,results,process,async){
return (function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = ((function (__34994,c__33189__auto___35011,G__33406_34995,G__33406_34996__$1,n__4613__auto___34993,jobs,results,process,async){
return (function (state_33447){
var state_val_33448 = (state_33447[(1)]);
if((state_val_33448 === (1))){
var state_33447__$1 = state_33447;
var statearr_33452_35013 = state_33447__$1;
(statearr_33452_35013[(2)] = null);

(statearr_33452_35013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (2))){
var state_33447__$1 = state_33447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33447__$1,(4),jobs);
} else {
if((state_val_33448 === (3))){
var inst_33445 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33447__$1,inst_33445);
} else {
if((state_val_33448 === (4))){
var inst_33437 = (state_33447[(2)]);
var inst_33438 = async(inst_33437);
var state_33447__$1 = state_33447;
if(cljs.core.truth_(inst_33438)){
var statearr_33453_35014 = state_33447__$1;
(statearr_33453_35014[(1)] = (5));

} else {
var statearr_33454_35015 = state_33447__$1;
(statearr_33454_35015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (5))){
var state_33447__$1 = state_33447;
var statearr_33455_35016 = state_33447__$1;
(statearr_33455_35016[(2)] = null);

(statearr_33455_35016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (6))){
var state_33447__$1 = state_33447;
var statearr_33456_35017 = state_33447__$1;
(statearr_33456_35017[(2)] = null);

(statearr_33456_35017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (7))){
var inst_33443 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33457_35018 = state_33447__$1;
(statearr_33457_35018[(2)] = inst_33443);

(statearr_33457_35018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34994,c__33189__auto___35011,G__33406_34995,G__33406_34996__$1,n__4613__auto___34993,jobs,results,process,async))
;
return ((function (__34994,switch__33132__auto__,c__33189__auto___35011,G__33406_34995,G__33406_34996__$1,n__4613__auto___34993,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0 = (function (){
var statearr_33477 = [null,null,null,null,null,null,null];
(statearr_33477[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__);

(statearr_33477[(1)] = (1));

return statearr_33477;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1 = (function (state_33447){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_33447);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e33478){var ex__33136__auto__ = e33478;
var statearr_33479_35020 = state_33447;
(statearr_33479_35020[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_33447[(4)]))){
var statearr_33483_35022 = state_33447;
(statearr_33483_35022[(1)] = cljs.core.first((state_33447[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35023 = state_33447;
state_33447 = G__35023;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__ = function(state_33447){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1.call(this,state_33447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__;
})()
;})(__34994,switch__33132__auto__,c__33189__auto___35011,G__33406_34995,G__33406_34996__$1,n__4613__auto___34993,jobs,results,process,async))
})();
var state__33191__auto__ = (function (){var statearr_33484 = f__33190__auto__();
(statearr_33484[(6)] = c__33189__auto___35011);

return statearr_33484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
});})(__34994,c__33189__auto___35011,G__33406_34995,G__33406_34996__$1,n__4613__auto___34993,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33406_34996__$1)].join('')));

}

var G__35024 = (__34994 + (1));
__34994 = G__35024;
continue;
} else {
}
break;
}

var c__33189__auto___35025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = (function (state_33508){
var state_val_33509 = (state_33508[(1)]);
if((state_val_33509 === (7))){
var inst_33504 = (state_33508[(2)]);
var state_33508__$1 = state_33508;
var statearr_33513_35026 = state_33508__$1;
(statearr_33513_35026[(2)] = inst_33504);

(statearr_33513_35026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (1))){
var state_33508__$1 = state_33508;
var statearr_33514_35027 = state_33508__$1;
(statearr_33514_35027[(2)] = null);

(statearr_33514_35027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (4))){
var inst_33487 = (state_33508[(7)]);
var inst_33487__$1 = (state_33508[(2)]);
var inst_33488 = (inst_33487__$1 == null);
var state_33508__$1 = (function (){var statearr_33515 = state_33508;
(statearr_33515[(7)] = inst_33487__$1);

return statearr_33515;
})();
if(cljs.core.truth_(inst_33488)){
var statearr_33516_35028 = state_33508__$1;
(statearr_33516_35028[(1)] = (5));

} else {
var statearr_33520_35029 = state_33508__$1;
(statearr_33520_35029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (6))){
var inst_33487 = (state_33508[(7)]);
var inst_33493 = (state_33508[(8)]);
var inst_33493__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33495 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33496 = [inst_33487,inst_33493__$1];
var inst_33497 = (new cljs.core.PersistentVector(null,2,(5),inst_33495,inst_33496,null));
var state_33508__$1 = (function (){var statearr_33521 = state_33508;
(statearr_33521[(8)] = inst_33493__$1);

return statearr_33521;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33508__$1,(8),jobs,inst_33497);
} else {
if((state_val_33509 === (3))){
var inst_33506 = (state_33508[(2)]);
var state_33508__$1 = state_33508;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33508__$1,inst_33506);
} else {
if((state_val_33509 === (2))){
var state_33508__$1 = state_33508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33508__$1,(4),from);
} else {
if((state_val_33509 === (9))){
var inst_33501 = (state_33508[(2)]);
var state_33508__$1 = (function (){var statearr_33522 = state_33508;
(statearr_33522[(9)] = inst_33501);

return statearr_33522;
})();
var statearr_33523_35031 = state_33508__$1;
(statearr_33523_35031[(2)] = null);

(statearr_33523_35031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (5))){
var inst_33490 = cljs.core.async.close_BANG_(jobs);
var state_33508__$1 = state_33508;
var statearr_33524_35032 = state_33508__$1;
(statearr_33524_35032[(2)] = inst_33490);

(statearr_33524_35032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (8))){
var inst_33493 = (state_33508[(8)]);
var inst_33499 = (state_33508[(2)]);
var state_33508__$1 = (function (){var statearr_33525 = state_33508;
(statearr_33525[(10)] = inst_33499);

return statearr_33525;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33508__$1,(9),results,inst_33493);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0 = (function (){
var statearr_33526 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33526[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__);

(statearr_33526[(1)] = (1));

return statearr_33526;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1 = (function (state_33508){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_33508);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e33527){var ex__33136__auto__ = e33527;
var statearr_33528_35033 = state_33508;
(statearr_33528_35033[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_33508[(4)]))){
var statearr_33529_35034 = state_33508;
(statearr_33529_35034[(1)] = cljs.core.first((state_33508[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35039 = state_33508;
state_33508 = G__35039;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__ = function(state_33508){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1.call(this,state_33508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__;
})()
})();
var state__33191__auto__ = (function (){var statearr_33530 = f__33190__auto__();
(statearr_33530[(6)] = c__33189__auto___35025);

return statearr_33530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
}));


var c__33189__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = (function (state_33568){
var state_val_33569 = (state_33568[(1)]);
if((state_val_33569 === (7))){
var inst_33564 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
var statearr_33570_35040 = state_33568__$1;
(statearr_33570_35040[(2)] = inst_33564);

(statearr_33570_35040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (20))){
var state_33568__$1 = state_33568;
var statearr_33571_35041 = state_33568__$1;
(statearr_33571_35041[(2)] = null);

(statearr_33571_35041[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (1))){
var state_33568__$1 = state_33568;
var statearr_33572_35042 = state_33568__$1;
(statearr_33572_35042[(2)] = null);

(statearr_33572_35042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (4))){
var inst_33533 = (state_33568[(7)]);
var inst_33533__$1 = (state_33568[(2)]);
var inst_33534 = (inst_33533__$1 == null);
var state_33568__$1 = (function (){var statearr_33573 = state_33568;
(statearr_33573[(7)] = inst_33533__$1);

return statearr_33573;
})();
if(cljs.core.truth_(inst_33534)){
var statearr_33574_35043 = state_33568__$1;
(statearr_33574_35043[(1)] = (5));

} else {
var statearr_33575_35044 = state_33568__$1;
(statearr_33575_35044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (15))){
var inst_33546 = (state_33568[(8)]);
var state_33568__$1 = state_33568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33568__$1,(18),to,inst_33546);
} else {
if((state_val_33569 === (21))){
var inst_33559 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
var statearr_33576_35045 = state_33568__$1;
(statearr_33576_35045[(2)] = inst_33559);

(statearr_33576_35045[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (13))){
var inst_33561 = (state_33568[(2)]);
var state_33568__$1 = (function (){var statearr_33577 = state_33568;
(statearr_33577[(9)] = inst_33561);

return statearr_33577;
})();
var statearr_33578_35046 = state_33568__$1;
(statearr_33578_35046[(2)] = null);

(statearr_33578_35046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (6))){
var inst_33533 = (state_33568[(7)]);
var state_33568__$1 = state_33568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33568__$1,(11),inst_33533);
} else {
if((state_val_33569 === (17))){
var inst_33554 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
if(cljs.core.truth_(inst_33554)){
var statearr_33579_35047 = state_33568__$1;
(statearr_33579_35047[(1)] = (19));

} else {
var statearr_33580_35048 = state_33568__$1;
(statearr_33580_35048[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (3))){
var inst_33566 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33568__$1,inst_33566);
} else {
if((state_val_33569 === (12))){
var inst_33543 = (state_33568[(10)]);
var state_33568__$1 = state_33568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33568__$1,(14),inst_33543);
} else {
if((state_val_33569 === (2))){
var state_33568__$1 = state_33568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33568__$1,(4),results);
} else {
if((state_val_33569 === (19))){
var state_33568__$1 = state_33568;
var statearr_33581_35049 = state_33568__$1;
(statearr_33581_35049[(2)] = null);

(statearr_33581_35049[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (11))){
var inst_33543 = (state_33568[(2)]);
var state_33568__$1 = (function (){var statearr_33582 = state_33568;
(statearr_33582[(10)] = inst_33543);

return statearr_33582;
})();
var statearr_33583_35051 = state_33568__$1;
(statearr_33583_35051[(2)] = null);

(statearr_33583_35051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (9))){
var state_33568__$1 = state_33568;
var statearr_33584_35053 = state_33568__$1;
(statearr_33584_35053[(2)] = null);

(statearr_33584_35053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (5))){
var state_33568__$1 = state_33568;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33585_35054 = state_33568__$1;
(statearr_33585_35054[(1)] = (8));

} else {
var statearr_33586_35055 = state_33568__$1;
(statearr_33586_35055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (14))){
var inst_33546 = (state_33568[(8)]);
var inst_33546__$1 = (state_33568[(2)]);
var inst_33547 = (inst_33546__$1 == null);
var inst_33548 = cljs.core.not(inst_33547);
var state_33568__$1 = (function (){var statearr_33587 = state_33568;
(statearr_33587[(8)] = inst_33546__$1);

return statearr_33587;
})();
if(inst_33548){
var statearr_33588_35056 = state_33568__$1;
(statearr_33588_35056[(1)] = (15));

} else {
var statearr_33589_35057 = state_33568__$1;
(statearr_33589_35057[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (16))){
var state_33568__$1 = state_33568;
var statearr_33590_35058 = state_33568__$1;
(statearr_33590_35058[(2)] = false);

(statearr_33590_35058[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (10))){
var inst_33540 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
var statearr_33591_35059 = state_33568__$1;
(statearr_33591_35059[(2)] = inst_33540);

(statearr_33591_35059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (18))){
var inst_33551 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
var statearr_33592_35060 = state_33568__$1;
(statearr_33592_35060[(2)] = inst_33551);

(statearr_33592_35060[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (8))){
var inst_33537 = cljs.core.async.close_BANG_(to);
var state_33568__$1 = state_33568;
var statearr_33593_35061 = state_33568__$1;
(statearr_33593_35061[(2)] = inst_33537);

(statearr_33593_35061[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0 = (function (){
var statearr_33594 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33594[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__);

(statearr_33594[(1)] = (1));

return statearr_33594;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1 = (function (state_33568){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_33568);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e33595){var ex__33136__auto__ = e33595;
var statearr_33596_35062 = state_33568;
(statearr_33596_35062[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_33568[(4)]))){
var statearr_33597_35063 = state_33568;
(statearr_33597_35063[(1)] = cljs.core.first((state_33568[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35068 = state_33568;
state_33568 = G__35068;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__ = function(state_33568){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1.call(this,state_33568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33133__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33133__auto__;
})()
})();
var state__33191__auto__ = (function (){var statearr_33598 = f__33190__auto__();
(statearr_33598[(6)] = c__33189__auto__);

return statearr_33598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
}));

return c__33189__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33600 = arguments.length;
switch (G__33600) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33602 = arguments.length;
switch (G__33602) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33604 = arguments.length;
switch (G__33604) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33189__auto___35091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = (function (state_33630){
var state_val_33631 = (state_33630[(1)]);
if((state_val_33631 === (7))){
var inst_33626 = (state_33630[(2)]);
var state_33630__$1 = state_33630;
var statearr_33634_35092 = state_33630__$1;
(statearr_33634_35092[(2)] = inst_33626);

(statearr_33634_35092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (1))){
var state_33630__$1 = state_33630;
var statearr_33636_35093 = state_33630__$1;
(statearr_33636_35093[(2)] = null);

(statearr_33636_35093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (4))){
var inst_33607 = (state_33630[(7)]);
var inst_33607__$1 = (state_33630[(2)]);
var inst_33608 = (inst_33607__$1 == null);
var state_33630__$1 = (function (){var statearr_33639 = state_33630;
(statearr_33639[(7)] = inst_33607__$1);

return statearr_33639;
})();
if(cljs.core.truth_(inst_33608)){
var statearr_33641_35097 = state_33630__$1;
(statearr_33641_35097[(1)] = (5));

} else {
var statearr_33642_35098 = state_33630__$1;
(statearr_33642_35098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (13))){
var state_33630__$1 = state_33630;
var statearr_33643_35099 = state_33630__$1;
(statearr_33643_35099[(2)] = null);

(statearr_33643_35099[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (6))){
var inst_33607 = (state_33630[(7)]);
var inst_33613 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33607) : p.call(null,inst_33607));
var state_33630__$1 = state_33630;
if(cljs.core.truth_(inst_33613)){
var statearr_33646_35103 = state_33630__$1;
(statearr_33646_35103[(1)] = (9));

} else {
var statearr_33648_35104 = state_33630__$1;
(statearr_33648_35104[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (3))){
var inst_33628 = (state_33630[(2)]);
var state_33630__$1 = state_33630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33630__$1,inst_33628);
} else {
if((state_val_33631 === (12))){
var state_33630__$1 = state_33630;
var statearr_33650_35105 = state_33630__$1;
(statearr_33650_35105[(2)] = null);

(statearr_33650_35105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (2))){
var state_33630__$1 = state_33630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33630__$1,(4),ch);
} else {
if((state_val_33631 === (11))){
var inst_33607 = (state_33630[(7)]);
var inst_33617 = (state_33630[(2)]);
var state_33630__$1 = state_33630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33630__$1,(8),inst_33617,inst_33607);
} else {
if((state_val_33631 === (9))){
var state_33630__$1 = state_33630;
var statearr_33660_35106 = state_33630__$1;
(statearr_33660_35106[(2)] = tc);

(statearr_33660_35106[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (5))){
var inst_33610 = cljs.core.async.close_BANG_(tc);
var inst_33611 = cljs.core.async.close_BANG_(fc);
var state_33630__$1 = (function (){var statearr_33664 = state_33630;
(statearr_33664[(8)] = inst_33610);

return statearr_33664;
})();
var statearr_33666_35110 = state_33630__$1;
(statearr_33666_35110[(2)] = inst_33611);

(statearr_33666_35110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (14))){
var inst_33624 = (state_33630[(2)]);
var state_33630__$1 = state_33630;
var statearr_33670_35111 = state_33630__$1;
(statearr_33670_35111[(2)] = inst_33624);

(statearr_33670_35111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (10))){
var state_33630__$1 = state_33630;
var statearr_33677_35112 = state_33630__$1;
(statearr_33677_35112[(2)] = fc);

(statearr_33677_35112[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (8))){
var inst_33619 = (state_33630[(2)]);
var state_33630__$1 = state_33630;
if(cljs.core.truth_(inst_33619)){
var statearr_33683_35113 = state_33630__$1;
(statearr_33683_35113[(1)] = (12));

} else {
var statearr_33688_35114 = state_33630__$1;
(statearr_33688_35114[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33133__auto__ = null;
var cljs$core$async$state_machine__33133__auto____0 = (function (){
var statearr_33698 = [null,null,null,null,null,null,null,null,null];
(statearr_33698[(0)] = cljs$core$async$state_machine__33133__auto__);

(statearr_33698[(1)] = (1));

return statearr_33698;
});
var cljs$core$async$state_machine__33133__auto____1 = (function (state_33630){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_33630);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e33704){var ex__33136__auto__ = e33704;
var statearr_33710_35116 = state_33630;
(statearr_33710_35116[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_33630[(4)]))){
var statearr_33714_35117 = state_33630;
(statearr_33714_35117[(1)] = cljs.core.first((state_33630[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35118 = state_33630;
state_33630 = G__35118;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$state_machine__33133__auto__ = function(state_33630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33133__auto____1.call(this,state_33630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33133__auto____0;
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33133__auto____1;
return cljs$core$async$state_machine__33133__auto__;
})()
})();
var state__33191__auto__ = (function (){var statearr_33732 = f__33190__auto__();
(statearr_33732[(6)] = c__33189__auto___35091);

return statearr_33732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33189__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = (function (state_33769){
var state_val_33770 = (state_33769[(1)]);
if((state_val_33770 === (7))){
var inst_33765 = (state_33769[(2)]);
var state_33769__$1 = state_33769;
var statearr_33772_35119 = state_33769__$1;
(statearr_33772_35119[(2)] = inst_33765);

(statearr_33772_35119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (1))){
var inst_33742 = init;
var inst_33743 = inst_33742;
var state_33769__$1 = (function (){var statearr_33782 = state_33769;
(statearr_33782[(7)] = inst_33743);

return statearr_33782;
})();
var statearr_33783_35120 = state_33769__$1;
(statearr_33783_35120[(2)] = null);

(statearr_33783_35120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (4))){
var inst_33748 = (state_33769[(8)]);
var inst_33748__$1 = (state_33769[(2)]);
var inst_33749 = (inst_33748__$1 == null);
var state_33769__$1 = (function (){var statearr_33784 = state_33769;
(statearr_33784[(8)] = inst_33748__$1);

return statearr_33784;
})();
if(cljs.core.truth_(inst_33749)){
var statearr_33785_35121 = state_33769__$1;
(statearr_33785_35121[(1)] = (5));

} else {
var statearr_33786_35122 = state_33769__$1;
(statearr_33786_35122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (6))){
var inst_33756 = (state_33769[(9)]);
var inst_33748 = (state_33769[(8)]);
var inst_33743 = (state_33769[(7)]);
var inst_33756__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33743,inst_33748) : f.call(null,inst_33743,inst_33748));
var inst_33757 = cljs.core.reduced_QMARK_(inst_33756__$1);
var state_33769__$1 = (function (){var statearr_33791 = state_33769;
(statearr_33791[(9)] = inst_33756__$1);

return statearr_33791;
})();
if(inst_33757){
var statearr_33792_35123 = state_33769__$1;
(statearr_33792_35123[(1)] = (8));

} else {
var statearr_33793_35124 = state_33769__$1;
(statearr_33793_35124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (3))){
var inst_33767 = (state_33769[(2)]);
var state_33769__$1 = state_33769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33769__$1,inst_33767);
} else {
if((state_val_33770 === (2))){
var state_33769__$1 = state_33769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33769__$1,(4),ch);
} else {
if((state_val_33770 === (9))){
var inst_33756 = (state_33769[(9)]);
var inst_33743 = inst_33756;
var state_33769__$1 = (function (){var statearr_33801 = state_33769;
(statearr_33801[(7)] = inst_33743);

return statearr_33801;
})();
var statearr_33802_35125 = state_33769__$1;
(statearr_33802_35125[(2)] = null);

(statearr_33802_35125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (5))){
var inst_33743 = (state_33769[(7)]);
var state_33769__$1 = state_33769;
var statearr_33803_35126 = state_33769__$1;
(statearr_33803_35126[(2)] = inst_33743);

(statearr_33803_35126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (10))){
var inst_33763 = (state_33769[(2)]);
var state_33769__$1 = state_33769;
var statearr_33804_35127 = state_33769__$1;
(statearr_33804_35127[(2)] = inst_33763);

(statearr_33804_35127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (8))){
var inst_33756 = (state_33769[(9)]);
var inst_33759 = cljs.core.deref(inst_33756);
var state_33769__$1 = state_33769;
var statearr_33805_35128 = state_33769__$1;
(statearr_33805_35128[(2)] = inst_33759);

(statearr_33805_35128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33133__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33133__auto____0 = (function (){
var statearr_33806 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33806[(0)] = cljs$core$async$reduce_$_state_machine__33133__auto__);

(statearr_33806[(1)] = (1));

return statearr_33806;
});
var cljs$core$async$reduce_$_state_machine__33133__auto____1 = (function (state_33769){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_33769);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e33807){var ex__33136__auto__ = e33807;
var statearr_33808_35129 = state_33769;
(statearr_33808_35129[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_33769[(4)]))){
var statearr_33809_35130 = state_33769;
(statearr_33809_35130[(1)] = cljs.core.first((state_33769[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35131 = state_33769;
state_33769 = G__35131;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33133__auto__ = function(state_33769){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33133__auto____1.call(this,state_33769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33133__auto____0;
cljs$core$async$reduce_$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33133__auto____1;
return cljs$core$async$reduce_$_state_machine__33133__auto__;
})()
})();
var state__33191__auto__ = (function (){var statearr_33810 = f__33190__auto__();
(statearr_33810[(6)] = c__33189__auto__);

return statearr_33810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
}));

return c__33189__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33189__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = (function (state_33816){
var state_val_33817 = (state_33816[(1)]);
if((state_val_33817 === (1))){
var inst_33811 = cljs.core.async.reduce(f__$1,init,ch);
var state_33816__$1 = state_33816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33816__$1,(2),inst_33811);
} else {
if((state_val_33817 === (2))){
var inst_33813 = (state_33816[(2)]);
var inst_33814 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33813) : f__$1.call(null,inst_33813));
var state_33816__$1 = state_33816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33816__$1,inst_33814);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33133__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33133__auto____0 = (function (){
var statearr_33818 = [null,null,null,null,null,null,null];
(statearr_33818[(0)] = cljs$core$async$transduce_$_state_machine__33133__auto__);

(statearr_33818[(1)] = (1));

return statearr_33818;
});
var cljs$core$async$transduce_$_state_machine__33133__auto____1 = (function (state_33816){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_33816);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e33819){var ex__33136__auto__ = e33819;
var statearr_33820_35135 = state_33816;
(statearr_33820_35135[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_33816[(4)]))){
var statearr_33821_35139 = state_33816;
(statearr_33821_35139[(1)] = cljs.core.first((state_33816[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35140 = state_33816;
state_33816 = G__35140;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33133__auto__ = function(state_33816){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33133__auto____1.call(this,state_33816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33133__auto____0;
cljs$core$async$transduce_$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33133__auto____1;
return cljs$core$async$transduce_$_state_machine__33133__auto__;
})()
})();
var state__33191__auto__ = (function (){var statearr_33822 = f__33190__auto__();
(statearr_33822[(6)] = c__33189__auto__);

return statearr_33822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
}));

return c__33189__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33824 = arguments.length;
switch (G__33824) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33189__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = (function (state_33849){
var state_val_33850 = (state_33849[(1)]);
if((state_val_33850 === (7))){
var inst_33831 = (state_33849[(2)]);
var state_33849__$1 = state_33849;
var statearr_33851_35145 = state_33849__$1;
(statearr_33851_35145[(2)] = inst_33831);

(statearr_33851_35145[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33850 === (1))){
var inst_33825 = cljs.core.seq(coll);
var inst_33826 = inst_33825;
var state_33849__$1 = (function (){var statearr_33852 = state_33849;
(statearr_33852[(7)] = inst_33826);

return statearr_33852;
})();
var statearr_33853_35146 = state_33849__$1;
(statearr_33853_35146[(2)] = null);

(statearr_33853_35146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33850 === (4))){
var inst_33826 = (state_33849[(7)]);
var inst_33829 = cljs.core.first(inst_33826);
var state_33849__$1 = state_33849;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33849__$1,(7),ch,inst_33829);
} else {
if((state_val_33850 === (13))){
var inst_33843 = (state_33849[(2)]);
var state_33849__$1 = state_33849;
var statearr_33854_35147 = state_33849__$1;
(statearr_33854_35147[(2)] = inst_33843);

(statearr_33854_35147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33850 === (6))){
var inst_33834 = (state_33849[(2)]);
var state_33849__$1 = state_33849;
if(cljs.core.truth_(inst_33834)){
var statearr_33855_35148 = state_33849__$1;
(statearr_33855_35148[(1)] = (8));

} else {
var statearr_33856_35149 = state_33849__$1;
(statearr_33856_35149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33850 === (3))){
var inst_33847 = (state_33849[(2)]);
var state_33849__$1 = state_33849;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33849__$1,inst_33847);
} else {
if((state_val_33850 === (12))){
var state_33849__$1 = state_33849;
var statearr_33857_35150 = state_33849__$1;
(statearr_33857_35150[(2)] = null);

(statearr_33857_35150[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33850 === (2))){
var inst_33826 = (state_33849[(7)]);
var state_33849__$1 = state_33849;
if(cljs.core.truth_(inst_33826)){
var statearr_33858_35151 = state_33849__$1;
(statearr_33858_35151[(1)] = (4));

} else {
var statearr_33859_35152 = state_33849__$1;
(statearr_33859_35152[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33850 === (11))){
var inst_33840 = cljs.core.async.close_BANG_(ch);
var state_33849__$1 = state_33849;
var statearr_33860_35157 = state_33849__$1;
(statearr_33860_35157[(2)] = inst_33840);

(statearr_33860_35157[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33850 === (9))){
var state_33849__$1 = state_33849;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33861_35158 = state_33849__$1;
(statearr_33861_35158[(1)] = (11));

} else {
var statearr_33862_35159 = state_33849__$1;
(statearr_33862_35159[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33850 === (5))){
var inst_33826 = (state_33849[(7)]);
var state_33849__$1 = state_33849;
var statearr_33863_35162 = state_33849__$1;
(statearr_33863_35162[(2)] = inst_33826);

(statearr_33863_35162[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33850 === (10))){
var inst_33845 = (state_33849[(2)]);
var state_33849__$1 = state_33849;
var statearr_33864_35163 = state_33849__$1;
(statearr_33864_35163[(2)] = inst_33845);

(statearr_33864_35163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33850 === (8))){
var inst_33826 = (state_33849[(7)]);
var inst_33836 = cljs.core.next(inst_33826);
var inst_33826__$1 = inst_33836;
var state_33849__$1 = (function (){var statearr_33865 = state_33849;
(statearr_33865[(7)] = inst_33826__$1);

return statearr_33865;
})();
var statearr_33866_35166 = state_33849__$1;
(statearr_33866_35166[(2)] = null);

(statearr_33866_35166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33133__auto__ = null;
var cljs$core$async$state_machine__33133__auto____0 = (function (){
var statearr_33867 = [null,null,null,null,null,null,null,null];
(statearr_33867[(0)] = cljs$core$async$state_machine__33133__auto__);

(statearr_33867[(1)] = (1));

return statearr_33867;
});
var cljs$core$async$state_machine__33133__auto____1 = (function (state_33849){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_33849);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e33868){var ex__33136__auto__ = e33868;
var statearr_33869_35174 = state_33849;
(statearr_33869_35174[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_33849[(4)]))){
var statearr_33870_35175 = state_33849;
(statearr_33870_35175[(1)] = cljs.core.first((state_33849[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35182 = state_33849;
state_33849 = G__35182;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$state_machine__33133__auto__ = function(state_33849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33133__auto____1.call(this,state_33849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33133__auto____0;
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33133__auto____1;
return cljs$core$async$state_machine__33133__auto__;
})()
})();
var state__33191__auto__ = (function (){var statearr_33871 = f__33190__auto__();
(statearr_33871[(6)] = c__33189__auto__);

return statearr_33871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
}));

return c__33189__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33873 = arguments.length;
switch (G__33873) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35184 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35184(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35185 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35185(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35192 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35192(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35193 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35193(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33874 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33874 = (function (ch,cs,meta33875){
this.ch = ch;
this.cs = cs;
this.meta33875 = meta33875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33876,meta33875__$1){
var self__ = this;
var _33876__$1 = this;
return (new cljs.core.async.t_cljs$core$async33874(self__.ch,self__.cs,meta33875__$1));
}));

(cljs.core.async.t_cljs$core$async33874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33876){
var self__ = this;
var _33876__$1 = this;
return self__.meta33875;
}));

(cljs.core.async.t_cljs$core$async33874.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33874.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33874.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33874.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33874.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33874.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33875","meta33875",268198956,null)], null);
}));

(cljs.core.async.t_cljs$core$async33874.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33874");

(cljs.core.async.t_cljs$core$async33874.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33874");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33874.
 */
cljs.core.async.__GT_t_cljs$core$async33874 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33874(ch__$1,cs__$1,meta33875){
return (new cljs.core.async.t_cljs$core$async33874(ch__$1,cs__$1,meta33875));
});

}

return (new cljs.core.async.t_cljs$core$async33874(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33189__auto___35200 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = (function (state_34009){
var state_val_34010 = (state_34009[(1)]);
if((state_val_34010 === (7))){
var inst_34005 = (state_34009[(2)]);
var state_34009__$1 = state_34009;
var statearr_34011_35201 = state_34009__$1;
(statearr_34011_35201[(2)] = inst_34005);

(statearr_34011_35201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (20))){
var inst_33910 = (state_34009[(7)]);
var inst_33922 = cljs.core.first(inst_33910);
var inst_33923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33922,(0),null);
var inst_33924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33922,(1),null);
var state_34009__$1 = (function (){var statearr_34012 = state_34009;
(statearr_34012[(8)] = inst_33923);

return statearr_34012;
})();
if(cljs.core.truth_(inst_33924)){
var statearr_34013_35202 = state_34009__$1;
(statearr_34013_35202[(1)] = (22));

} else {
var statearr_34014_35203 = state_34009__$1;
(statearr_34014_35203[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (27))){
var inst_33952 = (state_34009[(9)]);
var inst_33959 = (state_34009[(10)]);
var inst_33954 = (state_34009[(11)]);
var inst_33879 = (state_34009[(12)]);
var inst_33959__$1 = cljs.core._nth(inst_33952,inst_33954);
var inst_33960 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33959__$1,inst_33879,done);
var state_34009__$1 = (function (){var statearr_34015 = state_34009;
(statearr_34015[(10)] = inst_33959__$1);

return statearr_34015;
})();
if(cljs.core.truth_(inst_33960)){
var statearr_34016_35204 = state_34009__$1;
(statearr_34016_35204[(1)] = (30));

} else {
var statearr_34017_35207 = state_34009__$1;
(statearr_34017_35207[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (1))){
var state_34009__$1 = state_34009;
var statearr_34018_35212 = state_34009__$1;
(statearr_34018_35212[(2)] = null);

(statearr_34018_35212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (24))){
var inst_33910 = (state_34009[(7)]);
var inst_33929 = (state_34009[(2)]);
var inst_33930 = cljs.core.next(inst_33910);
var inst_33888 = inst_33930;
var inst_33889 = null;
var inst_33890 = (0);
var inst_33891 = (0);
var state_34009__$1 = (function (){var statearr_34019 = state_34009;
(statearr_34019[(13)] = inst_33890);

(statearr_34019[(14)] = inst_33888);

(statearr_34019[(15)] = inst_33889);

(statearr_34019[(16)] = inst_33929);

(statearr_34019[(17)] = inst_33891);

return statearr_34019;
})();
var statearr_34020_35213 = state_34009__$1;
(statearr_34020_35213[(2)] = null);

(statearr_34020_35213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (39))){
var state_34009__$1 = state_34009;
var statearr_34024_35214 = state_34009__$1;
(statearr_34024_35214[(2)] = null);

(statearr_34024_35214[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (4))){
var inst_33879 = (state_34009[(12)]);
var inst_33879__$1 = (state_34009[(2)]);
var inst_33880 = (inst_33879__$1 == null);
var state_34009__$1 = (function (){var statearr_34025 = state_34009;
(statearr_34025[(12)] = inst_33879__$1);

return statearr_34025;
})();
if(cljs.core.truth_(inst_33880)){
var statearr_34026_35215 = state_34009__$1;
(statearr_34026_35215[(1)] = (5));

} else {
var statearr_34027_35216 = state_34009__$1;
(statearr_34027_35216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (15))){
var inst_33890 = (state_34009[(13)]);
var inst_33888 = (state_34009[(14)]);
var inst_33889 = (state_34009[(15)]);
var inst_33891 = (state_34009[(17)]);
var inst_33906 = (state_34009[(2)]);
var inst_33907 = (inst_33891 + (1));
var tmp34021 = inst_33890;
var tmp34022 = inst_33888;
var tmp34023 = inst_33889;
var inst_33888__$1 = tmp34022;
var inst_33889__$1 = tmp34023;
var inst_33890__$1 = tmp34021;
var inst_33891__$1 = inst_33907;
var state_34009__$1 = (function (){var statearr_34028 = state_34009;
(statearr_34028[(13)] = inst_33890__$1);

(statearr_34028[(14)] = inst_33888__$1);

(statearr_34028[(15)] = inst_33889__$1);

(statearr_34028[(17)] = inst_33891__$1);

(statearr_34028[(18)] = inst_33906);

return statearr_34028;
})();
var statearr_34029_35217 = state_34009__$1;
(statearr_34029_35217[(2)] = null);

(statearr_34029_35217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (21))){
var inst_33933 = (state_34009[(2)]);
var state_34009__$1 = state_34009;
var statearr_34033_35218 = state_34009__$1;
(statearr_34033_35218[(2)] = inst_33933);

(statearr_34033_35218[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (31))){
var inst_33959 = (state_34009[(10)]);
var inst_33963 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33959);
var state_34009__$1 = state_34009;
var statearr_34034_35219 = state_34009__$1;
(statearr_34034_35219[(2)] = inst_33963);

(statearr_34034_35219[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (32))){
var inst_33952 = (state_34009[(9)]);
var inst_33951 = (state_34009[(19)]);
var inst_33954 = (state_34009[(11)]);
var inst_33953 = (state_34009[(20)]);
var inst_33965 = (state_34009[(2)]);
var inst_33966 = (inst_33954 + (1));
var tmp34030 = inst_33952;
var tmp34031 = inst_33951;
var tmp34032 = inst_33953;
var inst_33951__$1 = tmp34031;
var inst_33952__$1 = tmp34030;
var inst_33953__$1 = tmp34032;
var inst_33954__$1 = inst_33966;
var state_34009__$1 = (function (){var statearr_34035 = state_34009;
(statearr_34035[(21)] = inst_33965);

(statearr_34035[(9)] = inst_33952__$1);

(statearr_34035[(19)] = inst_33951__$1);

(statearr_34035[(11)] = inst_33954__$1);

(statearr_34035[(20)] = inst_33953__$1);

return statearr_34035;
})();
var statearr_34036_35220 = state_34009__$1;
(statearr_34036_35220[(2)] = null);

(statearr_34036_35220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (40))){
var inst_33978 = (state_34009[(22)]);
var inst_33982 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33978);
var state_34009__$1 = state_34009;
var statearr_34037_35221 = state_34009__$1;
(statearr_34037_35221[(2)] = inst_33982);

(statearr_34037_35221[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (33))){
var inst_33969 = (state_34009[(23)]);
var inst_33971 = cljs.core.chunked_seq_QMARK_(inst_33969);
var state_34009__$1 = state_34009;
if(inst_33971){
var statearr_34038_35222 = state_34009__$1;
(statearr_34038_35222[(1)] = (36));

} else {
var statearr_34039_35223 = state_34009__$1;
(statearr_34039_35223[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (13))){
var inst_33900 = (state_34009[(24)]);
var inst_33903 = cljs.core.async.close_BANG_(inst_33900);
var state_34009__$1 = state_34009;
var statearr_34040_35224 = state_34009__$1;
(statearr_34040_35224[(2)] = inst_33903);

(statearr_34040_35224[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (22))){
var inst_33923 = (state_34009[(8)]);
var inst_33926 = cljs.core.async.close_BANG_(inst_33923);
var state_34009__$1 = state_34009;
var statearr_34041_35225 = state_34009__$1;
(statearr_34041_35225[(2)] = inst_33926);

(statearr_34041_35225[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (36))){
var inst_33969 = (state_34009[(23)]);
var inst_33973 = cljs.core.chunk_first(inst_33969);
var inst_33974 = cljs.core.chunk_rest(inst_33969);
var inst_33975 = cljs.core.count(inst_33973);
var inst_33951 = inst_33974;
var inst_33952 = inst_33973;
var inst_33953 = inst_33975;
var inst_33954 = (0);
var state_34009__$1 = (function (){var statearr_34042 = state_34009;
(statearr_34042[(9)] = inst_33952);

(statearr_34042[(19)] = inst_33951);

(statearr_34042[(11)] = inst_33954);

(statearr_34042[(20)] = inst_33953);

return statearr_34042;
})();
var statearr_34043_35226 = state_34009__$1;
(statearr_34043_35226[(2)] = null);

(statearr_34043_35226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (41))){
var inst_33969 = (state_34009[(23)]);
var inst_33984 = (state_34009[(2)]);
var inst_33985 = cljs.core.next(inst_33969);
var inst_33951 = inst_33985;
var inst_33952 = null;
var inst_33953 = (0);
var inst_33954 = (0);
var state_34009__$1 = (function (){var statearr_34044 = state_34009;
(statearr_34044[(25)] = inst_33984);

(statearr_34044[(9)] = inst_33952);

(statearr_34044[(19)] = inst_33951);

(statearr_34044[(11)] = inst_33954);

(statearr_34044[(20)] = inst_33953);

return statearr_34044;
})();
var statearr_34045_35227 = state_34009__$1;
(statearr_34045_35227[(2)] = null);

(statearr_34045_35227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (43))){
var state_34009__$1 = state_34009;
var statearr_34046_35228 = state_34009__$1;
(statearr_34046_35228[(2)] = null);

(statearr_34046_35228[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (29))){
var inst_33993 = (state_34009[(2)]);
var state_34009__$1 = state_34009;
var statearr_34047_35229 = state_34009__$1;
(statearr_34047_35229[(2)] = inst_33993);

(statearr_34047_35229[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (44))){
var inst_34002 = (state_34009[(2)]);
var state_34009__$1 = (function (){var statearr_34048 = state_34009;
(statearr_34048[(26)] = inst_34002);

return statearr_34048;
})();
var statearr_34049_35230 = state_34009__$1;
(statearr_34049_35230[(2)] = null);

(statearr_34049_35230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (6))){
var inst_33943 = (state_34009[(27)]);
var inst_33942 = cljs.core.deref(cs);
var inst_33943__$1 = cljs.core.keys(inst_33942);
var inst_33944 = cljs.core.count(inst_33943__$1);
var inst_33945 = cljs.core.reset_BANG_(dctr,inst_33944);
var inst_33950 = cljs.core.seq(inst_33943__$1);
var inst_33951 = inst_33950;
var inst_33952 = null;
var inst_33953 = (0);
var inst_33954 = (0);
var state_34009__$1 = (function (){var statearr_34050 = state_34009;
(statearr_34050[(9)] = inst_33952);

(statearr_34050[(19)] = inst_33951);

(statearr_34050[(27)] = inst_33943__$1);

(statearr_34050[(11)] = inst_33954);

(statearr_34050[(20)] = inst_33953);

(statearr_34050[(28)] = inst_33945);

return statearr_34050;
})();
var statearr_34051_35232 = state_34009__$1;
(statearr_34051_35232[(2)] = null);

(statearr_34051_35232[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (28))){
var inst_33951 = (state_34009[(19)]);
var inst_33969 = (state_34009[(23)]);
var inst_33969__$1 = cljs.core.seq(inst_33951);
var state_34009__$1 = (function (){var statearr_34052 = state_34009;
(statearr_34052[(23)] = inst_33969__$1);

return statearr_34052;
})();
if(inst_33969__$1){
var statearr_34053_35237 = state_34009__$1;
(statearr_34053_35237[(1)] = (33));

} else {
var statearr_34054_35238 = state_34009__$1;
(statearr_34054_35238[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (25))){
var inst_33954 = (state_34009[(11)]);
var inst_33953 = (state_34009[(20)]);
var inst_33956 = (inst_33954 < inst_33953);
var inst_33957 = inst_33956;
var state_34009__$1 = state_34009;
if(cljs.core.truth_(inst_33957)){
var statearr_34055_35239 = state_34009__$1;
(statearr_34055_35239[(1)] = (27));

} else {
var statearr_34056_35240 = state_34009__$1;
(statearr_34056_35240[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (34))){
var state_34009__$1 = state_34009;
var statearr_34057_35241 = state_34009__$1;
(statearr_34057_35241[(2)] = null);

(statearr_34057_35241[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (17))){
var state_34009__$1 = state_34009;
var statearr_34058_35242 = state_34009__$1;
(statearr_34058_35242[(2)] = null);

(statearr_34058_35242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (3))){
var inst_34007 = (state_34009[(2)]);
var state_34009__$1 = state_34009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34009__$1,inst_34007);
} else {
if((state_val_34010 === (12))){
var inst_33938 = (state_34009[(2)]);
var state_34009__$1 = state_34009;
var statearr_34059_35243 = state_34009__$1;
(statearr_34059_35243[(2)] = inst_33938);

(statearr_34059_35243[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (2))){
var state_34009__$1 = state_34009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34009__$1,(4),ch);
} else {
if((state_val_34010 === (23))){
var state_34009__$1 = state_34009;
var statearr_34060_35244 = state_34009__$1;
(statearr_34060_35244[(2)] = null);

(statearr_34060_35244[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (35))){
var inst_33991 = (state_34009[(2)]);
var state_34009__$1 = state_34009;
var statearr_34061_35245 = state_34009__$1;
(statearr_34061_35245[(2)] = inst_33991);

(statearr_34061_35245[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (19))){
var inst_33910 = (state_34009[(7)]);
var inst_33914 = cljs.core.chunk_first(inst_33910);
var inst_33915 = cljs.core.chunk_rest(inst_33910);
var inst_33916 = cljs.core.count(inst_33914);
var inst_33888 = inst_33915;
var inst_33889 = inst_33914;
var inst_33890 = inst_33916;
var inst_33891 = (0);
var state_34009__$1 = (function (){var statearr_34062 = state_34009;
(statearr_34062[(13)] = inst_33890);

(statearr_34062[(14)] = inst_33888);

(statearr_34062[(15)] = inst_33889);

(statearr_34062[(17)] = inst_33891);

return statearr_34062;
})();
var statearr_34063_35246 = state_34009__$1;
(statearr_34063_35246[(2)] = null);

(statearr_34063_35246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (11))){
var inst_33888 = (state_34009[(14)]);
var inst_33910 = (state_34009[(7)]);
var inst_33910__$1 = cljs.core.seq(inst_33888);
var state_34009__$1 = (function (){var statearr_34064 = state_34009;
(statearr_34064[(7)] = inst_33910__$1);

return statearr_34064;
})();
if(inst_33910__$1){
var statearr_34065_35249 = state_34009__$1;
(statearr_34065_35249[(1)] = (16));

} else {
var statearr_34066_35250 = state_34009__$1;
(statearr_34066_35250[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (9))){
var inst_33940 = (state_34009[(2)]);
var state_34009__$1 = state_34009;
var statearr_34067_35251 = state_34009__$1;
(statearr_34067_35251[(2)] = inst_33940);

(statearr_34067_35251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (5))){
var inst_33886 = cljs.core.deref(cs);
var inst_33887 = cljs.core.seq(inst_33886);
var inst_33888 = inst_33887;
var inst_33889 = null;
var inst_33890 = (0);
var inst_33891 = (0);
var state_34009__$1 = (function (){var statearr_34068 = state_34009;
(statearr_34068[(13)] = inst_33890);

(statearr_34068[(14)] = inst_33888);

(statearr_34068[(15)] = inst_33889);

(statearr_34068[(17)] = inst_33891);

return statearr_34068;
})();
var statearr_34069_35252 = state_34009__$1;
(statearr_34069_35252[(2)] = null);

(statearr_34069_35252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (14))){
var state_34009__$1 = state_34009;
var statearr_34070_35253 = state_34009__$1;
(statearr_34070_35253[(2)] = null);

(statearr_34070_35253[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (45))){
var inst_33999 = (state_34009[(2)]);
var state_34009__$1 = state_34009;
var statearr_34071_35254 = state_34009__$1;
(statearr_34071_35254[(2)] = inst_33999);

(statearr_34071_35254[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (26))){
var inst_33943 = (state_34009[(27)]);
var inst_33995 = (state_34009[(2)]);
var inst_33996 = cljs.core.seq(inst_33943);
var state_34009__$1 = (function (){var statearr_34072 = state_34009;
(statearr_34072[(29)] = inst_33995);

return statearr_34072;
})();
if(inst_33996){
var statearr_34073_35257 = state_34009__$1;
(statearr_34073_35257[(1)] = (42));

} else {
var statearr_34074_35258 = state_34009__$1;
(statearr_34074_35258[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (16))){
var inst_33910 = (state_34009[(7)]);
var inst_33912 = cljs.core.chunked_seq_QMARK_(inst_33910);
var state_34009__$1 = state_34009;
if(inst_33912){
var statearr_34075_35259 = state_34009__$1;
(statearr_34075_35259[(1)] = (19));

} else {
var statearr_34076_35260 = state_34009__$1;
(statearr_34076_35260[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (38))){
var inst_33988 = (state_34009[(2)]);
var state_34009__$1 = state_34009;
var statearr_34077_35261 = state_34009__$1;
(statearr_34077_35261[(2)] = inst_33988);

(statearr_34077_35261[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (30))){
var state_34009__$1 = state_34009;
var statearr_34078_35262 = state_34009__$1;
(statearr_34078_35262[(2)] = null);

(statearr_34078_35262[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (10))){
var inst_33889 = (state_34009[(15)]);
var inst_33891 = (state_34009[(17)]);
var inst_33899 = cljs.core._nth(inst_33889,inst_33891);
var inst_33900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33899,(0),null);
var inst_33901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33899,(1),null);
var state_34009__$1 = (function (){var statearr_34079 = state_34009;
(statearr_34079[(24)] = inst_33900);

return statearr_34079;
})();
if(cljs.core.truth_(inst_33901)){
var statearr_34080_35263 = state_34009__$1;
(statearr_34080_35263[(1)] = (13));

} else {
var statearr_34081_35264 = state_34009__$1;
(statearr_34081_35264[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (18))){
var inst_33936 = (state_34009[(2)]);
var state_34009__$1 = state_34009;
var statearr_34082_35265 = state_34009__$1;
(statearr_34082_35265[(2)] = inst_33936);

(statearr_34082_35265[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (42))){
var state_34009__$1 = state_34009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34009__$1,(45),dchan);
} else {
if((state_val_34010 === (37))){
var inst_33978 = (state_34009[(22)]);
var inst_33969 = (state_34009[(23)]);
var inst_33879 = (state_34009[(12)]);
var inst_33978__$1 = cljs.core.first(inst_33969);
var inst_33979 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33978__$1,inst_33879,done);
var state_34009__$1 = (function (){var statearr_34083 = state_34009;
(statearr_34083[(22)] = inst_33978__$1);

return statearr_34083;
})();
if(cljs.core.truth_(inst_33979)){
var statearr_34084_35266 = state_34009__$1;
(statearr_34084_35266[(1)] = (39));

} else {
var statearr_34085_35267 = state_34009__$1;
(statearr_34085_35267[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34010 === (8))){
var inst_33890 = (state_34009[(13)]);
var inst_33891 = (state_34009[(17)]);
var inst_33893 = (inst_33891 < inst_33890);
var inst_33894 = inst_33893;
var state_34009__$1 = state_34009;
if(cljs.core.truth_(inst_33894)){
var statearr_34086_35268 = state_34009__$1;
(statearr_34086_35268[(1)] = (10));

} else {
var statearr_34087_35269 = state_34009__$1;
(statearr_34087_35269[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33133__auto__ = null;
var cljs$core$async$mult_$_state_machine__33133__auto____0 = (function (){
var statearr_34088 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34088[(0)] = cljs$core$async$mult_$_state_machine__33133__auto__);

(statearr_34088[(1)] = (1));

return statearr_34088;
});
var cljs$core$async$mult_$_state_machine__33133__auto____1 = (function (state_34009){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_34009);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e34089){var ex__33136__auto__ = e34089;
var statearr_34090_35272 = state_34009;
(statearr_34090_35272[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_34009[(4)]))){
var statearr_34091_35273 = state_34009;
(statearr_34091_35273[(1)] = cljs.core.first((state_34009[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35274 = state_34009;
state_34009 = G__35274;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33133__auto__ = function(state_34009){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33133__auto____1.call(this,state_34009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33133__auto____0;
cljs$core$async$mult_$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33133__auto____1;
return cljs$core$async$mult_$_state_machine__33133__auto__;
})()
})();
var state__33191__auto__ = (function (){var statearr_34092 = f__33190__auto__();
(statearr_34092[(6)] = c__33189__auto___35200);

return statearr_34092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34094 = arguments.length;
switch (G__34094) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35276 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35276(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35277 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35277(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35278 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35278(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35279 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35279(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35281 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35281(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35286 = arguments.length;
var i__4737__auto___35287 = (0);
while(true){
if((i__4737__auto___35287 < len__4736__auto___35286)){
args__4742__auto__.push((arguments[i__4737__auto___35287]));

var G__35288 = (i__4737__auto___35287 + (1));
i__4737__auto___35287 = G__35288;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34099){
var map__34100 = p__34099;
var map__34100__$1 = (((((!((map__34100 == null))))?(((((map__34100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34100):map__34100);
var opts = map__34100__$1;
var statearr_34102_35289 = state;
(statearr_34102_35289[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34103_35290 = state;
(statearr_34103_35290[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_34104_35291 = state;
(statearr_34104_35291[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34095){
var G__34096 = cljs.core.first(seq34095);
var seq34095__$1 = cljs.core.next(seq34095);
var G__34097 = cljs.core.first(seq34095__$1);
var seq34095__$2 = cljs.core.next(seq34095__$1);
var G__34098 = cljs.core.first(seq34095__$2);
var seq34095__$3 = cljs.core.next(seq34095__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34096,G__34097,G__34098,seq34095__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34105 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34105 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34106){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34106 = meta34106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34107,meta34106__$1){
var self__ = this;
var _34107__$1 = this;
return (new cljs.core.async.t_cljs$core$async34105(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34106__$1));
}));

(cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34107){
var self__ = this;
var _34107__$1 = this;
return self__.meta34106;
}));

(cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34105.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34106","meta34106",-1221612676,null)], null);
}));

(cljs.core.async.t_cljs$core$async34105.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34105");

(cljs.core.async.t_cljs$core$async34105.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34105");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34105.
 */
cljs.core.async.__GT_t_cljs$core$async34105 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34105(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34106){
return (new cljs.core.async.t_cljs$core$async34105(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34106));
});

}

return (new cljs.core.async.t_cljs$core$async34105(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33189__auto___35312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = (function (state_34209){
var state_val_34210 = (state_34209[(1)]);
if((state_val_34210 === (7))){
var inst_34124 = (state_34209[(2)]);
var state_34209__$1 = state_34209;
var statearr_34211_35313 = state_34209__$1;
(statearr_34211_35313[(2)] = inst_34124);

(statearr_34211_35313[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (20))){
var inst_34136 = (state_34209[(7)]);
var state_34209__$1 = state_34209;
var statearr_34212_35314 = state_34209__$1;
(statearr_34212_35314[(2)] = inst_34136);

(statearr_34212_35314[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (27))){
var state_34209__$1 = state_34209;
var statearr_34213_35315 = state_34209__$1;
(statearr_34213_35315[(2)] = null);

(statearr_34213_35315[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (1))){
var inst_34111 = (state_34209[(8)]);
var inst_34111__$1 = calc_state();
var inst_34113 = (inst_34111__$1 == null);
var inst_34114 = cljs.core.not(inst_34113);
var state_34209__$1 = (function (){var statearr_34214 = state_34209;
(statearr_34214[(8)] = inst_34111__$1);

return statearr_34214;
})();
if(inst_34114){
var statearr_34215_35316 = state_34209__$1;
(statearr_34215_35316[(1)] = (2));

} else {
var statearr_34216_35317 = state_34209__$1;
(statearr_34216_35317[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (24))){
var inst_34183 = (state_34209[(9)]);
var inst_34160 = (state_34209[(10)]);
var inst_34169 = (state_34209[(11)]);
var inst_34183__$1 = (inst_34160.cljs$core$IFn$_invoke$arity$1 ? inst_34160.cljs$core$IFn$_invoke$arity$1(inst_34169) : inst_34160.call(null,inst_34169));
var state_34209__$1 = (function (){var statearr_34217 = state_34209;
(statearr_34217[(9)] = inst_34183__$1);

return statearr_34217;
})();
if(cljs.core.truth_(inst_34183__$1)){
var statearr_34218_35320 = state_34209__$1;
(statearr_34218_35320[(1)] = (29));

} else {
var statearr_34219_35321 = state_34209__$1;
(statearr_34219_35321[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (4))){
var inst_34127 = (state_34209[(2)]);
var state_34209__$1 = state_34209;
if(cljs.core.truth_(inst_34127)){
var statearr_34220_35322 = state_34209__$1;
(statearr_34220_35322[(1)] = (8));

} else {
var statearr_34221_35323 = state_34209__$1;
(statearr_34221_35323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (15))){
var inst_34154 = (state_34209[(2)]);
var state_34209__$1 = state_34209;
if(cljs.core.truth_(inst_34154)){
var statearr_34222_35324 = state_34209__$1;
(statearr_34222_35324[(1)] = (19));

} else {
var statearr_34223_35325 = state_34209__$1;
(statearr_34223_35325[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (21))){
var inst_34159 = (state_34209[(12)]);
var inst_34159__$1 = (state_34209[(2)]);
var inst_34160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34159__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34159__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34159__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34209__$1 = (function (){var statearr_34224 = state_34209;
(statearr_34224[(10)] = inst_34160);

(statearr_34224[(13)] = inst_34161);

(statearr_34224[(12)] = inst_34159__$1);

return statearr_34224;
})();
return cljs.core.async.ioc_alts_BANG_(state_34209__$1,(22),inst_34162);
} else {
if((state_val_34210 === (31))){
var inst_34191 = (state_34209[(2)]);
var state_34209__$1 = state_34209;
if(cljs.core.truth_(inst_34191)){
var statearr_34225_35326 = state_34209__$1;
(statearr_34225_35326[(1)] = (32));

} else {
var statearr_34226_35327 = state_34209__$1;
(statearr_34226_35327[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (32))){
var inst_34168 = (state_34209[(14)]);
var state_34209__$1 = state_34209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34209__$1,(35),out,inst_34168);
} else {
if((state_val_34210 === (33))){
var inst_34159 = (state_34209[(12)]);
var inst_34136 = inst_34159;
var state_34209__$1 = (function (){var statearr_34227 = state_34209;
(statearr_34227[(7)] = inst_34136);

return statearr_34227;
})();
var statearr_34228_35328 = state_34209__$1;
(statearr_34228_35328[(2)] = null);

(statearr_34228_35328[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (13))){
var inst_34136 = (state_34209[(7)]);
var inst_34143 = inst_34136.cljs$lang$protocol_mask$partition0$;
var inst_34144 = (inst_34143 & (64));
var inst_34145 = inst_34136.cljs$core$ISeq$;
var inst_34146 = (cljs.core.PROTOCOL_SENTINEL === inst_34145);
var inst_34147 = ((inst_34144) || (inst_34146));
var state_34209__$1 = state_34209;
if(cljs.core.truth_(inst_34147)){
var statearr_34229_35329 = state_34209__$1;
(statearr_34229_35329[(1)] = (16));

} else {
var statearr_34230_35330 = state_34209__$1;
(statearr_34230_35330[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (22))){
var inst_34169 = (state_34209[(11)]);
var inst_34168 = (state_34209[(14)]);
var inst_34167 = (state_34209[(2)]);
var inst_34168__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34167,(0),null);
var inst_34169__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34167,(1),null);
var inst_34170 = (inst_34168__$1 == null);
var inst_34171 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34169__$1,change);
var inst_34172 = ((inst_34170) || (inst_34171));
var state_34209__$1 = (function (){var statearr_34231 = state_34209;
(statearr_34231[(11)] = inst_34169__$1);

(statearr_34231[(14)] = inst_34168__$1);

return statearr_34231;
})();
if(cljs.core.truth_(inst_34172)){
var statearr_34232_35331 = state_34209__$1;
(statearr_34232_35331[(1)] = (23));

} else {
var statearr_34233_35332 = state_34209__$1;
(statearr_34233_35332[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (36))){
var inst_34159 = (state_34209[(12)]);
var inst_34136 = inst_34159;
var state_34209__$1 = (function (){var statearr_34234 = state_34209;
(statearr_34234[(7)] = inst_34136);

return statearr_34234;
})();
var statearr_34235_35333 = state_34209__$1;
(statearr_34235_35333[(2)] = null);

(statearr_34235_35333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (29))){
var inst_34183 = (state_34209[(9)]);
var state_34209__$1 = state_34209;
var statearr_34236_35334 = state_34209__$1;
(statearr_34236_35334[(2)] = inst_34183);

(statearr_34236_35334[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (6))){
var state_34209__$1 = state_34209;
var statearr_34237_35335 = state_34209__$1;
(statearr_34237_35335[(2)] = false);

(statearr_34237_35335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (28))){
var inst_34179 = (state_34209[(2)]);
var inst_34180 = calc_state();
var inst_34136 = inst_34180;
var state_34209__$1 = (function (){var statearr_34238 = state_34209;
(statearr_34238[(7)] = inst_34136);

(statearr_34238[(15)] = inst_34179);

return statearr_34238;
})();
var statearr_34239_35340 = state_34209__$1;
(statearr_34239_35340[(2)] = null);

(statearr_34239_35340[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (25))){
var inst_34205 = (state_34209[(2)]);
var state_34209__$1 = state_34209;
var statearr_34240_35341 = state_34209__$1;
(statearr_34240_35341[(2)] = inst_34205);

(statearr_34240_35341[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (34))){
var inst_34203 = (state_34209[(2)]);
var state_34209__$1 = state_34209;
var statearr_34241_35342 = state_34209__$1;
(statearr_34241_35342[(2)] = inst_34203);

(statearr_34241_35342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (17))){
var state_34209__$1 = state_34209;
var statearr_34242_35343 = state_34209__$1;
(statearr_34242_35343[(2)] = false);

(statearr_34242_35343[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (3))){
var state_34209__$1 = state_34209;
var statearr_34243_35344 = state_34209__$1;
(statearr_34243_35344[(2)] = false);

(statearr_34243_35344[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (12))){
var inst_34207 = (state_34209[(2)]);
var state_34209__$1 = state_34209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34209__$1,inst_34207);
} else {
if((state_val_34210 === (2))){
var inst_34111 = (state_34209[(8)]);
var inst_34116 = inst_34111.cljs$lang$protocol_mask$partition0$;
var inst_34117 = (inst_34116 & (64));
var inst_34118 = inst_34111.cljs$core$ISeq$;
var inst_34119 = (cljs.core.PROTOCOL_SENTINEL === inst_34118);
var inst_34120 = ((inst_34117) || (inst_34119));
var state_34209__$1 = state_34209;
if(cljs.core.truth_(inst_34120)){
var statearr_34244_35345 = state_34209__$1;
(statearr_34244_35345[(1)] = (5));

} else {
var statearr_34245_35346 = state_34209__$1;
(statearr_34245_35346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (23))){
var inst_34168 = (state_34209[(14)]);
var inst_34174 = (inst_34168 == null);
var state_34209__$1 = state_34209;
if(cljs.core.truth_(inst_34174)){
var statearr_34246_35347 = state_34209__$1;
(statearr_34246_35347[(1)] = (26));

} else {
var statearr_34247_35352 = state_34209__$1;
(statearr_34247_35352[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (35))){
var inst_34194 = (state_34209[(2)]);
var state_34209__$1 = state_34209;
if(cljs.core.truth_(inst_34194)){
var statearr_34248_35353 = state_34209__$1;
(statearr_34248_35353[(1)] = (36));

} else {
var statearr_34249_35354 = state_34209__$1;
(statearr_34249_35354[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (19))){
var inst_34136 = (state_34209[(7)]);
var inst_34156 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34136);
var state_34209__$1 = state_34209;
var statearr_34250_35356 = state_34209__$1;
(statearr_34250_35356[(2)] = inst_34156);

(statearr_34250_35356[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (11))){
var inst_34136 = (state_34209[(7)]);
var inst_34140 = (inst_34136 == null);
var inst_34141 = cljs.core.not(inst_34140);
var state_34209__$1 = state_34209;
if(inst_34141){
var statearr_34251_35357 = state_34209__$1;
(statearr_34251_35357[(1)] = (13));

} else {
var statearr_34252_35358 = state_34209__$1;
(statearr_34252_35358[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (9))){
var inst_34111 = (state_34209[(8)]);
var state_34209__$1 = state_34209;
var statearr_34253_35359 = state_34209__$1;
(statearr_34253_35359[(2)] = inst_34111);

(statearr_34253_35359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (5))){
var state_34209__$1 = state_34209;
var statearr_34254_35360 = state_34209__$1;
(statearr_34254_35360[(2)] = true);

(statearr_34254_35360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (14))){
var state_34209__$1 = state_34209;
var statearr_34255_35361 = state_34209__$1;
(statearr_34255_35361[(2)] = false);

(statearr_34255_35361[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (26))){
var inst_34169 = (state_34209[(11)]);
var inst_34176 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34169);
var state_34209__$1 = state_34209;
var statearr_34256_35363 = state_34209__$1;
(statearr_34256_35363[(2)] = inst_34176);

(statearr_34256_35363[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (16))){
var state_34209__$1 = state_34209;
var statearr_34257_35364 = state_34209__$1;
(statearr_34257_35364[(2)] = true);

(statearr_34257_35364[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (38))){
var inst_34199 = (state_34209[(2)]);
var state_34209__$1 = state_34209;
var statearr_34258_35365 = state_34209__$1;
(statearr_34258_35365[(2)] = inst_34199);

(statearr_34258_35365[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (30))){
var inst_34160 = (state_34209[(10)]);
var inst_34161 = (state_34209[(13)]);
var inst_34169 = (state_34209[(11)]);
var inst_34186 = cljs.core.empty_QMARK_(inst_34160);
var inst_34187 = (inst_34161.cljs$core$IFn$_invoke$arity$1 ? inst_34161.cljs$core$IFn$_invoke$arity$1(inst_34169) : inst_34161.call(null,inst_34169));
var inst_34188 = cljs.core.not(inst_34187);
var inst_34189 = ((inst_34186) && (inst_34188));
var state_34209__$1 = state_34209;
var statearr_34259_35370 = state_34209__$1;
(statearr_34259_35370[(2)] = inst_34189);

(statearr_34259_35370[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (10))){
var inst_34111 = (state_34209[(8)]);
var inst_34132 = (state_34209[(2)]);
var inst_34133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34132,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34132,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34132,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34136 = inst_34111;
var state_34209__$1 = (function (){var statearr_34260 = state_34209;
(statearr_34260[(7)] = inst_34136);

(statearr_34260[(16)] = inst_34135);

(statearr_34260[(17)] = inst_34134);

(statearr_34260[(18)] = inst_34133);

return statearr_34260;
})();
var statearr_34261_35371 = state_34209__$1;
(statearr_34261_35371[(2)] = null);

(statearr_34261_35371[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (18))){
var inst_34151 = (state_34209[(2)]);
var state_34209__$1 = state_34209;
var statearr_34262_35372 = state_34209__$1;
(statearr_34262_35372[(2)] = inst_34151);

(statearr_34262_35372[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (37))){
var state_34209__$1 = state_34209;
var statearr_34263_35373 = state_34209__$1;
(statearr_34263_35373[(2)] = null);

(statearr_34263_35373[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (8))){
var inst_34111 = (state_34209[(8)]);
var inst_34129 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34111);
var state_34209__$1 = state_34209;
var statearr_34264_35374 = state_34209__$1;
(statearr_34264_35374[(2)] = inst_34129);

(statearr_34264_35374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33133__auto__ = null;
var cljs$core$async$mix_$_state_machine__33133__auto____0 = (function (){
var statearr_34265 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34265[(0)] = cljs$core$async$mix_$_state_machine__33133__auto__);

(statearr_34265[(1)] = (1));

return statearr_34265;
});
var cljs$core$async$mix_$_state_machine__33133__auto____1 = (function (state_34209){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_34209);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e34266){var ex__33136__auto__ = e34266;
var statearr_34267_35375 = state_34209;
(statearr_34267_35375[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_34209[(4)]))){
var statearr_34268_35376 = state_34209;
(statearr_34268_35376[(1)] = cljs.core.first((state_34209[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35377 = state_34209;
state_34209 = G__35377;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33133__auto__ = function(state_34209){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33133__auto____1.call(this,state_34209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33133__auto____0;
cljs$core$async$mix_$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33133__auto____1;
return cljs$core$async$mix_$_state_machine__33133__auto__;
})()
})();
var state__33191__auto__ = (function (){var statearr_34269 = f__33190__auto__();
(statearr_34269[(6)] = c__33189__auto___35312);

return statearr_34269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35378 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35378(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35379 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35379(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35383 = (function() {
var G__35384 = null;
var G__35384__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35384__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35384 = function(p,v){
switch(arguments.length){
case 1:
return G__35384__1.call(this,p);
case 2:
return G__35384__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35384.cljs$core$IFn$_invoke$arity$1 = G__35384__1;
G__35384.cljs$core$IFn$_invoke$arity$2 = G__35384__2;
return G__35384;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34271 = arguments.length;
switch (G__34271) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35383(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35383(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34274 = arguments.length;
switch (G__34274) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34272_SHARP_){
if(cljs.core.truth_((p1__34272_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34272_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34272_SHARP_.call(null,topic)))){
return p1__34272_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34272_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34275 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34276){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34276 = meta34276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34277,meta34276__$1){
var self__ = this;
var _34277__$1 = this;
return (new cljs.core.async.t_cljs$core$async34275(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34276__$1));
}));

(cljs.core.async.t_cljs$core$async34275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34277){
var self__ = this;
var _34277__$1 = this;
return self__.meta34276;
}));

(cljs.core.async.t_cljs$core$async34275.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34275.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34275.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34275.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34275.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34275.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34275.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34276","meta34276",1923032913,null)], null);
}));

(cljs.core.async.t_cljs$core$async34275.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34275");

(cljs.core.async.t_cljs$core$async34275.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34275");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34275.
 */
cljs.core.async.__GT_t_cljs$core$async34275 = (function cljs$core$async$__GT_t_cljs$core$async34275(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34276){
return (new cljs.core.async.t_cljs$core$async34275(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34276));
});

}

return (new cljs.core.async.t_cljs$core$async34275(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33189__auto___35393 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = (function (state_34349){
var state_val_34350 = (state_34349[(1)]);
if((state_val_34350 === (7))){
var inst_34345 = (state_34349[(2)]);
var state_34349__$1 = state_34349;
var statearr_34351_35394 = state_34349__$1;
(statearr_34351_35394[(2)] = inst_34345);

(statearr_34351_35394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (20))){
var state_34349__$1 = state_34349;
var statearr_34352_35395 = state_34349__$1;
(statearr_34352_35395[(2)] = null);

(statearr_34352_35395[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (1))){
var state_34349__$1 = state_34349;
var statearr_34353_35396 = state_34349__$1;
(statearr_34353_35396[(2)] = null);

(statearr_34353_35396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (24))){
var inst_34328 = (state_34349[(7)]);
var inst_34337 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34328);
var state_34349__$1 = state_34349;
var statearr_34354_35397 = state_34349__$1;
(statearr_34354_35397[(2)] = inst_34337);

(statearr_34354_35397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (4))){
var inst_34280 = (state_34349[(8)]);
var inst_34280__$1 = (state_34349[(2)]);
var inst_34281 = (inst_34280__$1 == null);
var state_34349__$1 = (function (){var statearr_34355 = state_34349;
(statearr_34355[(8)] = inst_34280__$1);

return statearr_34355;
})();
if(cljs.core.truth_(inst_34281)){
var statearr_34356_35399 = state_34349__$1;
(statearr_34356_35399[(1)] = (5));

} else {
var statearr_34357_35400 = state_34349__$1;
(statearr_34357_35400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (15))){
var inst_34322 = (state_34349[(2)]);
var state_34349__$1 = state_34349;
var statearr_34358_35405 = state_34349__$1;
(statearr_34358_35405[(2)] = inst_34322);

(statearr_34358_35405[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (21))){
var inst_34342 = (state_34349[(2)]);
var state_34349__$1 = (function (){var statearr_34359 = state_34349;
(statearr_34359[(9)] = inst_34342);

return statearr_34359;
})();
var statearr_34360_35406 = state_34349__$1;
(statearr_34360_35406[(2)] = null);

(statearr_34360_35406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (13))){
var inst_34304 = (state_34349[(10)]);
var inst_34306 = cljs.core.chunked_seq_QMARK_(inst_34304);
var state_34349__$1 = state_34349;
if(inst_34306){
var statearr_34361_35407 = state_34349__$1;
(statearr_34361_35407[(1)] = (16));

} else {
var statearr_34362_35408 = state_34349__$1;
(statearr_34362_35408[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (22))){
var inst_34334 = (state_34349[(2)]);
var state_34349__$1 = state_34349;
if(cljs.core.truth_(inst_34334)){
var statearr_34363_35409 = state_34349__$1;
(statearr_34363_35409[(1)] = (23));

} else {
var statearr_34364_35410 = state_34349__$1;
(statearr_34364_35410[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (6))){
var inst_34280 = (state_34349[(8)]);
var inst_34328 = (state_34349[(7)]);
var inst_34330 = (state_34349[(11)]);
var inst_34328__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34280) : topic_fn.call(null,inst_34280));
var inst_34329 = cljs.core.deref(mults);
var inst_34330__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34329,inst_34328__$1);
var state_34349__$1 = (function (){var statearr_34365 = state_34349;
(statearr_34365[(7)] = inst_34328__$1);

(statearr_34365[(11)] = inst_34330__$1);

return statearr_34365;
})();
if(cljs.core.truth_(inst_34330__$1)){
var statearr_34366_35411 = state_34349__$1;
(statearr_34366_35411[(1)] = (19));

} else {
var statearr_34367_35412 = state_34349__$1;
(statearr_34367_35412[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (25))){
var inst_34339 = (state_34349[(2)]);
var state_34349__$1 = state_34349;
var statearr_34368_35413 = state_34349__$1;
(statearr_34368_35413[(2)] = inst_34339);

(statearr_34368_35413[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (17))){
var inst_34304 = (state_34349[(10)]);
var inst_34313 = cljs.core.first(inst_34304);
var inst_34314 = cljs.core.async.muxch_STAR_(inst_34313);
var inst_34315 = cljs.core.async.close_BANG_(inst_34314);
var inst_34316 = cljs.core.next(inst_34304);
var inst_34290 = inst_34316;
var inst_34291 = null;
var inst_34292 = (0);
var inst_34293 = (0);
var state_34349__$1 = (function (){var statearr_34369 = state_34349;
(statearr_34369[(12)] = inst_34315);

(statearr_34369[(13)] = inst_34292);

(statearr_34369[(14)] = inst_34293);

(statearr_34369[(15)] = inst_34291);

(statearr_34369[(16)] = inst_34290);

return statearr_34369;
})();
var statearr_34370_35414 = state_34349__$1;
(statearr_34370_35414[(2)] = null);

(statearr_34370_35414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (3))){
var inst_34347 = (state_34349[(2)]);
var state_34349__$1 = state_34349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34349__$1,inst_34347);
} else {
if((state_val_34350 === (12))){
var inst_34324 = (state_34349[(2)]);
var state_34349__$1 = state_34349;
var statearr_34371_35415 = state_34349__$1;
(statearr_34371_35415[(2)] = inst_34324);

(statearr_34371_35415[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (2))){
var state_34349__$1 = state_34349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34349__$1,(4),ch);
} else {
if((state_val_34350 === (23))){
var state_34349__$1 = state_34349;
var statearr_34372_35416 = state_34349__$1;
(statearr_34372_35416[(2)] = null);

(statearr_34372_35416[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (19))){
var inst_34280 = (state_34349[(8)]);
var inst_34330 = (state_34349[(11)]);
var inst_34332 = cljs.core.async.muxch_STAR_(inst_34330);
var state_34349__$1 = state_34349;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34349__$1,(22),inst_34332,inst_34280);
} else {
if((state_val_34350 === (11))){
var inst_34290 = (state_34349[(16)]);
var inst_34304 = (state_34349[(10)]);
var inst_34304__$1 = cljs.core.seq(inst_34290);
var state_34349__$1 = (function (){var statearr_34373 = state_34349;
(statearr_34373[(10)] = inst_34304__$1);

return statearr_34373;
})();
if(inst_34304__$1){
var statearr_34374_35417 = state_34349__$1;
(statearr_34374_35417[(1)] = (13));

} else {
var statearr_34375_35418 = state_34349__$1;
(statearr_34375_35418[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (9))){
var inst_34326 = (state_34349[(2)]);
var state_34349__$1 = state_34349;
var statearr_34376_35419 = state_34349__$1;
(statearr_34376_35419[(2)] = inst_34326);

(statearr_34376_35419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (5))){
var inst_34287 = cljs.core.deref(mults);
var inst_34288 = cljs.core.vals(inst_34287);
var inst_34289 = cljs.core.seq(inst_34288);
var inst_34290 = inst_34289;
var inst_34291 = null;
var inst_34292 = (0);
var inst_34293 = (0);
var state_34349__$1 = (function (){var statearr_34377 = state_34349;
(statearr_34377[(13)] = inst_34292);

(statearr_34377[(14)] = inst_34293);

(statearr_34377[(15)] = inst_34291);

(statearr_34377[(16)] = inst_34290);

return statearr_34377;
})();
var statearr_34378_35423 = state_34349__$1;
(statearr_34378_35423[(2)] = null);

(statearr_34378_35423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (14))){
var state_34349__$1 = state_34349;
var statearr_34382_35424 = state_34349__$1;
(statearr_34382_35424[(2)] = null);

(statearr_34382_35424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (16))){
var inst_34304 = (state_34349[(10)]);
var inst_34308 = cljs.core.chunk_first(inst_34304);
var inst_34309 = cljs.core.chunk_rest(inst_34304);
var inst_34310 = cljs.core.count(inst_34308);
var inst_34290 = inst_34309;
var inst_34291 = inst_34308;
var inst_34292 = inst_34310;
var inst_34293 = (0);
var state_34349__$1 = (function (){var statearr_34383 = state_34349;
(statearr_34383[(13)] = inst_34292);

(statearr_34383[(14)] = inst_34293);

(statearr_34383[(15)] = inst_34291);

(statearr_34383[(16)] = inst_34290);

return statearr_34383;
})();
var statearr_34384_35425 = state_34349__$1;
(statearr_34384_35425[(2)] = null);

(statearr_34384_35425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (10))){
var inst_34292 = (state_34349[(13)]);
var inst_34293 = (state_34349[(14)]);
var inst_34291 = (state_34349[(15)]);
var inst_34290 = (state_34349[(16)]);
var inst_34298 = cljs.core._nth(inst_34291,inst_34293);
var inst_34299 = cljs.core.async.muxch_STAR_(inst_34298);
var inst_34300 = cljs.core.async.close_BANG_(inst_34299);
var inst_34301 = (inst_34293 + (1));
var tmp34379 = inst_34292;
var tmp34380 = inst_34291;
var tmp34381 = inst_34290;
var inst_34290__$1 = tmp34381;
var inst_34291__$1 = tmp34380;
var inst_34292__$1 = tmp34379;
var inst_34293__$1 = inst_34301;
var state_34349__$1 = (function (){var statearr_34385 = state_34349;
(statearr_34385[(13)] = inst_34292__$1);

(statearr_34385[(14)] = inst_34293__$1);

(statearr_34385[(15)] = inst_34291__$1);

(statearr_34385[(16)] = inst_34290__$1);

(statearr_34385[(17)] = inst_34300);

return statearr_34385;
})();
var statearr_34386_35426 = state_34349__$1;
(statearr_34386_35426[(2)] = null);

(statearr_34386_35426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (18))){
var inst_34319 = (state_34349[(2)]);
var state_34349__$1 = state_34349;
var statearr_34387_35427 = state_34349__$1;
(statearr_34387_35427[(2)] = inst_34319);

(statearr_34387_35427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (8))){
var inst_34292 = (state_34349[(13)]);
var inst_34293 = (state_34349[(14)]);
var inst_34295 = (inst_34293 < inst_34292);
var inst_34296 = inst_34295;
var state_34349__$1 = state_34349;
if(cljs.core.truth_(inst_34296)){
var statearr_34388_35428 = state_34349__$1;
(statearr_34388_35428[(1)] = (10));

} else {
var statearr_34389_35429 = state_34349__$1;
(statearr_34389_35429[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33133__auto__ = null;
var cljs$core$async$state_machine__33133__auto____0 = (function (){
var statearr_34390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34390[(0)] = cljs$core$async$state_machine__33133__auto__);

(statearr_34390[(1)] = (1));

return statearr_34390;
});
var cljs$core$async$state_machine__33133__auto____1 = (function (state_34349){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_34349);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e34391){var ex__33136__auto__ = e34391;
var statearr_34392_35431 = state_34349;
(statearr_34392_35431[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_34349[(4)]))){
var statearr_34393_35432 = state_34349;
(statearr_34393_35432[(1)] = cljs.core.first((state_34349[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35433 = state_34349;
state_34349 = G__35433;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$state_machine__33133__auto__ = function(state_34349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33133__auto____1.call(this,state_34349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33133__auto____0;
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33133__auto____1;
return cljs$core$async$state_machine__33133__auto__;
})()
})();
var state__33191__auto__ = (function (){var statearr_34394 = f__33190__auto__();
(statearr_34394[(6)] = c__33189__auto___35393);

return statearr_34394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34396 = arguments.length;
switch (G__34396) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34398 = arguments.length;
switch (G__34398) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34400 = arguments.length;
switch (G__34400) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33189__auto___35437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = (function (state_34443){
var state_val_34444 = (state_34443[(1)]);
if((state_val_34444 === (7))){
var state_34443__$1 = state_34443;
var statearr_34445_35438 = state_34443__$1;
(statearr_34445_35438[(2)] = null);

(statearr_34445_35438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (1))){
var state_34443__$1 = state_34443;
var statearr_34446_35439 = state_34443__$1;
(statearr_34446_35439[(2)] = null);

(statearr_34446_35439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (4))){
var inst_34403 = (state_34443[(7)]);
var inst_34404 = (state_34443[(8)]);
var inst_34406 = (inst_34404 < inst_34403);
var state_34443__$1 = state_34443;
if(cljs.core.truth_(inst_34406)){
var statearr_34447_35440 = state_34443__$1;
(statearr_34447_35440[(1)] = (6));

} else {
var statearr_34448_35441 = state_34443__$1;
(statearr_34448_35441[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (15))){
var inst_34429 = (state_34443[(9)]);
var inst_34434 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34429);
var state_34443__$1 = state_34443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34443__$1,(17),out,inst_34434);
} else {
if((state_val_34444 === (13))){
var inst_34429 = (state_34443[(9)]);
var inst_34429__$1 = (state_34443[(2)]);
var inst_34430 = cljs.core.some(cljs.core.nil_QMARK_,inst_34429__$1);
var state_34443__$1 = (function (){var statearr_34449 = state_34443;
(statearr_34449[(9)] = inst_34429__$1);

return statearr_34449;
})();
if(cljs.core.truth_(inst_34430)){
var statearr_34450_35446 = state_34443__$1;
(statearr_34450_35446[(1)] = (14));

} else {
var statearr_34451_35447 = state_34443__$1;
(statearr_34451_35447[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (6))){
var state_34443__$1 = state_34443;
var statearr_34452_35449 = state_34443__$1;
(statearr_34452_35449[(2)] = null);

(statearr_34452_35449[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (17))){
var inst_34436 = (state_34443[(2)]);
var state_34443__$1 = (function (){var statearr_34454 = state_34443;
(statearr_34454[(10)] = inst_34436);

return statearr_34454;
})();
var statearr_34455_35453 = state_34443__$1;
(statearr_34455_35453[(2)] = null);

(statearr_34455_35453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (3))){
var inst_34441 = (state_34443[(2)]);
var state_34443__$1 = state_34443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34443__$1,inst_34441);
} else {
if((state_val_34444 === (12))){
var _ = (function (){var statearr_34456 = state_34443;
(statearr_34456[(4)] = cljs.core.rest((state_34443[(4)])));

return statearr_34456;
})();
var state_34443__$1 = state_34443;
var ex34453 = (state_34443__$1[(2)]);
var statearr_34457_35455 = state_34443__$1;
(statearr_34457_35455[(5)] = ex34453);


if((ex34453 instanceof Object)){
var statearr_34458_35457 = state_34443__$1;
(statearr_34458_35457[(1)] = (11));

(statearr_34458_35457[(5)] = null);

} else {
throw ex34453;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (2))){
var inst_34402 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34403 = cnt;
var inst_34404 = (0);
var state_34443__$1 = (function (){var statearr_34459 = state_34443;
(statearr_34459[(11)] = inst_34402);

(statearr_34459[(7)] = inst_34403);

(statearr_34459[(8)] = inst_34404);

return statearr_34459;
})();
var statearr_34460_35458 = state_34443__$1;
(statearr_34460_35458[(2)] = null);

(statearr_34460_35458[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (11))){
var inst_34408 = (state_34443[(2)]);
var inst_34409 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34443__$1 = (function (){var statearr_34461 = state_34443;
(statearr_34461[(12)] = inst_34408);

return statearr_34461;
})();
var statearr_34462_35459 = state_34443__$1;
(statearr_34462_35459[(2)] = inst_34409);

(statearr_34462_35459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (9))){
var inst_34404 = (state_34443[(8)]);
var _ = (function (){var statearr_34463 = state_34443;
(statearr_34463[(4)] = cljs.core.cons((12),(state_34443[(4)])));

return statearr_34463;
})();
var inst_34415 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34404) : chs__$1.call(null,inst_34404));
var inst_34416 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34404) : done.call(null,inst_34404));
var inst_34417 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34415,inst_34416);
var ___$1 = (function (){var statearr_34464 = state_34443;
(statearr_34464[(4)] = cljs.core.rest((state_34443[(4)])));

return statearr_34464;
})();
var state_34443__$1 = state_34443;
var statearr_34465_35460 = state_34443__$1;
(statearr_34465_35460[(2)] = inst_34417);

(statearr_34465_35460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (5))){
var inst_34427 = (state_34443[(2)]);
var state_34443__$1 = (function (){var statearr_34466 = state_34443;
(statearr_34466[(13)] = inst_34427);

return statearr_34466;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34443__$1,(13),dchan);
} else {
if((state_val_34444 === (14))){
var inst_34432 = cljs.core.async.close_BANG_(out);
var state_34443__$1 = state_34443;
var statearr_34467_35461 = state_34443__$1;
(statearr_34467_35461[(2)] = inst_34432);

(statearr_34467_35461[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (16))){
var inst_34439 = (state_34443[(2)]);
var state_34443__$1 = state_34443;
var statearr_34468_35462 = state_34443__$1;
(statearr_34468_35462[(2)] = inst_34439);

(statearr_34468_35462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (10))){
var inst_34404 = (state_34443[(8)]);
var inst_34420 = (state_34443[(2)]);
var inst_34421 = (inst_34404 + (1));
var inst_34404__$1 = inst_34421;
var state_34443__$1 = (function (){var statearr_34469 = state_34443;
(statearr_34469[(14)] = inst_34420);

(statearr_34469[(8)] = inst_34404__$1);

return statearr_34469;
})();
var statearr_34470_35463 = state_34443__$1;
(statearr_34470_35463[(2)] = null);

(statearr_34470_35463[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (8))){
var inst_34425 = (state_34443[(2)]);
var state_34443__$1 = state_34443;
var statearr_34471_35467 = state_34443__$1;
(statearr_34471_35467[(2)] = inst_34425);

(statearr_34471_35467[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33133__auto__ = null;
var cljs$core$async$state_machine__33133__auto____0 = (function (){
var statearr_34472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34472[(0)] = cljs$core$async$state_machine__33133__auto__);

(statearr_34472[(1)] = (1));

return statearr_34472;
});
var cljs$core$async$state_machine__33133__auto____1 = (function (state_34443){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_34443);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e34473){var ex__33136__auto__ = e34473;
var statearr_34474_35475 = state_34443;
(statearr_34474_35475[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_34443[(4)]))){
var statearr_34475_35476 = state_34443;
(statearr_34475_35476[(1)] = cljs.core.first((state_34443[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35477 = state_34443;
state_34443 = G__35477;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$state_machine__33133__auto__ = function(state_34443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33133__auto____1.call(this,state_34443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33133__auto____0;
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33133__auto____1;
return cljs$core$async$state_machine__33133__auto__;
})()
})();
var state__33191__auto__ = (function (){var statearr_34476 = f__33190__auto__();
(statearr_34476[(6)] = c__33189__auto___35437);

return statearr_34476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34479 = arguments.length;
switch (G__34479) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33189__auto___35482 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = (function (state_34511){
var state_val_34512 = (state_34511[(1)]);
if((state_val_34512 === (7))){
var inst_34490 = (state_34511[(7)]);
var inst_34491 = (state_34511[(8)]);
var inst_34490__$1 = (state_34511[(2)]);
var inst_34491__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34490__$1,(0),null);
var inst_34492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34490__$1,(1),null);
var inst_34493 = (inst_34491__$1 == null);
var state_34511__$1 = (function (){var statearr_34513 = state_34511;
(statearr_34513[(7)] = inst_34490__$1);

(statearr_34513[(8)] = inst_34491__$1);

(statearr_34513[(9)] = inst_34492);

return statearr_34513;
})();
if(cljs.core.truth_(inst_34493)){
var statearr_34514_35486 = state_34511__$1;
(statearr_34514_35486[(1)] = (8));

} else {
var statearr_34515_35487 = state_34511__$1;
(statearr_34515_35487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34512 === (1))){
var inst_34480 = cljs.core.vec(chs);
var inst_34481 = inst_34480;
var state_34511__$1 = (function (){var statearr_34516 = state_34511;
(statearr_34516[(10)] = inst_34481);

return statearr_34516;
})();
var statearr_34517_35491 = state_34511__$1;
(statearr_34517_35491[(2)] = null);

(statearr_34517_35491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34512 === (4))){
var inst_34481 = (state_34511[(10)]);
var state_34511__$1 = state_34511;
return cljs.core.async.ioc_alts_BANG_(state_34511__$1,(7),inst_34481);
} else {
if((state_val_34512 === (6))){
var inst_34507 = (state_34511[(2)]);
var state_34511__$1 = state_34511;
var statearr_34518_35492 = state_34511__$1;
(statearr_34518_35492[(2)] = inst_34507);

(statearr_34518_35492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34512 === (3))){
var inst_34509 = (state_34511[(2)]);
var state_34511__$1 = state_34511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34511__$1,inst_34509);
} else {
if((state_val_34512 === (2))){
var inst_34481 = (state_34511[(10)]);
var inst_34483 = cljs.core.count(inst_34481);
var inst_34484 = (inst_34483 > (0));
var state_34511__$1 = state_34511;
if(cljs.core.truth_(inst_34484)){
var statearr_34520_35494 = state_34511__$1;
(statearr_34520_35494[(1)] = (4));

} else {
var statearr_34521_35495 = state_34511__$1;
(statearr_34521_35495[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34512 === (11))){
var inst_34481 = (state_34511[(10)]);
var inst_34500 = (state_34511[(2)]);
var tmp34519 = inst_34481;
var inst_34481__$1 = tmp34519;
var state_34511__$1 = (function (){var statearr_34522 = state_34511;
(statearr_34522[(10)] = inst_34481__$1);

(statearr_34522[(11)] = inst_34500);

return statearr_34522;
})();
var statearr_34523_35496 = state_34511__$1;
(statearr_34523_35496[(2)] = null);

(statearr_34523_35496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34512 === (9))){
var inst_34491 = (state_34511[(8)]);
var state_34511__$1 = state_34511;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34511__$1,(11),out,inst_34491);
} else {
if((state_val_34512 === (5))){
var inst_34505 = cljs.core.async.close_BANG_(out);
var state_34511__$1 = state_34511;
var statearr_34524_35500 = state_34511__$1;
(statearr_34524_35500[(2)] = inst_34505);

(statearr_34524_35500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34512 === (10))){
var inst_34503 = (state_34511[(2)]);
var state_34511__$1 = state_34511;
var statearr_34525_35507 = state_34511__$1;
(statearr_34525_35507[(2)] = inst_34503);

(statearr_34525_35507[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34512 === (8))){
var inst_34490 = (state_34511[(7)]);
var inst_34491 = (state_34511[(8)]);
var inst_34481 = (state_34511[(10)]);
var inst_34492 = (state_34511[(9)]);
var inst_34495 = (function (){var cs = inst_34481;
var vec__34486 = inst_34490;
var v = inst_34491;
var c = inst_34492;
return (function (p1__34477_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34477_SHARP_);
});
})();
var inst_34496 = cljs.core.filterv(inst_34495,inst_34481);
var inst_34481__$1 = inst_34496;
var state_34511__$1 = (function (){var statearr_34526 = state_34511;
(statearr_34526[(10)] = inst_34481__$1);

return statearr_34526;
})();
var statearr_34527_35514 = state_34511__$1;
(statearr_34527_35514[(2)] = null);

(statearr_34527_35514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33133__auto__ = null;
var cljs$core$async$state_machine__33133__auto____0 = (function (){
var statearr_34528 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34528[(0)] = cljs$core$async$state_machine__33133__auto__);

(statearr_34528[(1)] = (1));

return statearr_34528;
});
var cljs$core$async$state_machine__33133__auto____1 = (function (state_34511){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_34511);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e34529){var ex__33136__auto__ = e34529;
var statearr_34530_35515 = state_34511;
(statearr_34530_35515[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_34511[(4)]))){
var statearr_34531_35516 = state_34511;
(statearr_34531_35516[(1)] = cljs.core.first((state_34511[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35517 = state_34511;
state_34511 = G__35517;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$state_machine__33133__auto__ = function(state_34511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33133__auto____1.call(this,state_34511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33133__auto____0;
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33133__auto____1;
return cljs$core$async$state_machine__33133__auto__;
})()
})();
var state__33191__auto__ = (function (){var statearr_34532 = f__33190__auto__();
(statearr_34532[(6)] = c__33189__auto___35482);

return statearr_34532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34534 = arguments.length;
switch (G__34534) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33189__auto___35525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = (function (state_34558){
var state_val_34559 = (state_34558[(1)]);
if((state_val_34559 === (7))){
var inst_34540 = (state_34558[(7)]);
var inst_34540__$1 = (state_34558[(2)]);
var inst_34541 = (inst_34540__$1 == null);
var inst_34542 = cljs.core.not(inst_34541);
var state_34558__$1 = (function (){var statearr_34560 = state_34558;
(statearr_34560[(7)] = inst_34540__$1);

return statearr_34560;
})();
if(inst_34542){
var statearr_34561_35526 = state_34558__$1;
(statearr_34561_35526[(1)] = (8));

} else {
var statearr_34562_35527 = state_34558__$1;
(statearr_34562_35527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (1))){
var inst_34535 = (0);
var state_34558__$1 = (function (){var statearr_34563 = state_34558;
(statearr_34563[(8)] = inst_34535);

return statearr_34563;
})();
var statearr_34564_35528 = state_34558__$1;
(statearr_34564_35528[(2)] = null);

(statearr_34564_35528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (4))){
var state_34558__$1 = state_34558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34558__$1,(7),ch);
} else {
if((state_val_34559 === (6))){
var inst_34553 = (state_34558[(2)]);
var state_34558__$1 = state_34558;
var statearr_34565_35529 = state_34558__$1;
(statearr_34565_35529[(2)] = inst_34553);

(statearr_34565_35529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (3))){
var inst_34555 = (state_34558[(2)]);
var inst_34556 = cljs.core.async.close_BANG_(out);
var state_34558__$1 = (function (){var statearr_34566 = state_34558;
(statearr_34566[(9)] = inst_34555);

return statearr_34566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34558__$1,inst_34556);
} else {
if((state_val_34559 === (2))){
var inst_34535 = (state_34558[(8)]);
var inst_34537 = (inst_34535 < n);
var state_34558__$1 = state_34558;
if(cljs.core.truth_(inst_34537)){
var statearr_34567_35530 = state_34558__$1;
(statearr_34567_35530[(1)] = (4));

} else {
var statearr_34568_35531 = state_34558__$1;
(statearr_34568_35531[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (11))){
var inst_34535 = (state_34558[(8)]);
var inst_34545 = (state_34558[(2)]);
var inst_34546 = (inst_34535 + (1));
var inst_34535__$1 = inst_34546;
var state_34558__$1 = (function (){var statearr_34569 = state_34558;
(statearr_34569[(8)] = inst_34535__$1);

(statearr_34569[(10)] = inst_34545);

return statearr_34569;
})();
var statearr_34570_35538 = state_34558__$1;
(statearr_34570_35538[(2)] = null);

(statearr_34570_35538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (9))){
var state_34558__$1 = state_34558;
var statearr_34571_35539 = state_34558__$1;
(statearr_34571_35539[(2)] = null);

(statearr_34571_35539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (5))){
var state_34558__$1 = state_34558;
var statearr_34572_35540 = state_34558__$1;
(statearr_34572_35540[(2)] = null);

(statearr_34572_35540[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (10))){
var inst_34550 = (state_34558[(2)]);
var state_34558__$1 = state_34558;
var statearr_34573_35541 = state_34558__$1;
(statearr_34573_35541[(2)] = inst_34550);

(statearr_34573_35541[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (8))){
var inst_34540 = (state_34558[(7)]);
var state_34558__$1 = state_34558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34558__$1,(11),out,inst_34540);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33133__auto__ = null;
var cljs$core$async$state_machine__33133__auto____0 = (function (){
var statearr_34574 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34574[(0)] = cljs$core$async$state_machine__33133__auto__);

(statearr_34574[(1)] = (1));

return statearr_34574;
});
var cljs$core$async$state_machine__33133__auto____1 = (function (state_34558){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_34558);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e34575){var ex__33136__auto__ = e34575;
var statearr_34576_35542 = state_34558;
(statearr_34576_35542[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_34558[(4)]))){
var statearr_34577_35543 = state_34558;
(statearr_34577_35543[(1)] = cljs.core.first((state_34558[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35544 = state_34558;
state_34558 = G__35544;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$state_machine__33133__auto__ = function(state_34558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33133__auto____1.call(this,state_34558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33133__auto____0;
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33133__auto____1;
return cljs$core$async$state_machine__33133__auto__;
})()
})();
var state__33191__auto__ = (function (){var statearr_34578 = f__33190__auto__();
(statearr_34578[(6)] = c__33189__auto___35525);

return statearr_34578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34580 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34580 = (function (f,ch,meta34581){
this.f = f;
this.ch = ch;
this.meta34581 = meta34581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34582,meta34581__$1){
var self__ = this;
var _34582__$1 = this;
return (new cljs.core.async.t_cljs$core$async34580(self__.f,self__.ch,meta34581__$1));
}));

(cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34582){
var self__ = this;
var _34582__$1 = this;
return self__.meta34581;
}));

(cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34583 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34583 = (function (f,ch,meta34581,_,fn1,meta34584){
this.f = f;
this.ch = ch;
this.meta34581 = meta34581;
this._ = _;
this.fn1 = fn1;
this.meta34584 = meta34584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34585,meta34584__$1){
var self__ = this;
var _34585__$1 = this;
return (new cljs.core.async.t_cljs$core$async34583(self__.f,self__.ch,self__.meta34581,self__._,self__.fn1,meta34584__$1));
}));

(cljs.core.async.t_cljs$core$async34583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34585){
var self__ = this;
var _34585__$1 = this;
return self__.meta34584;
}));

(cljs.core.async.t_cljs$core$async34583.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34583.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34583.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34583.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34579_SHARP_){
var G__34586 = (((p1__34579_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34579_SHARP_) : self__.f.call(null,p1__34579_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34586) : f1.call(null,G__34586));
});
}));

(cljs.core.async.t_cljs$core$async34583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34581","meta34581",-1088618197,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34580","cljs.core.async/t_cljs$core$async34580",-1337314049,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34584","meta34584",-323203567,null)], null);
}));

(cljs.core.async.t_cljs$core$async34583.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34583");

(cljs.core.async.t_cljs$core$async34583.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34583");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34583.
 */
cljs.core.async.__GT_t_cljs$core$async34583 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34583(f__$1,ch__$1,meta34581__$1,___$2,fn1__$1,meta34584){
return (new cljs.core.async.t_cljs$core$async34583(f__$1,ch__$1,meta34581__$1,___$2,fn1__$1,meta34584));
});

}

return (new cljs.core.async.t_cljs$core$async34583(self__.f,self__.ch,self__.meta34581,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34587 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34587) : self__.f.call(null,G__34587));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34580.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34581","meta34581",-1088618197,null)], null);
}));

(cljs.core.async.t_cljs$core$async34580.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34580");

(cljs.core.async.t_cljs$core$async34580.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34580");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34580.
 */
cljs.core.async.__GT_t_cljs$core$async34580 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34580(f__$1,ch__$1,meta34581){
return (new cljs.core.async.t_cljs$core$async34580(f__$1,ch__$1,meta34581));
});

}

return (new cljs.core.async.t_cljs$core$async34580(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34588 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34588 = (function (f,ch,meta34589){
this.f = f;
this.ch = ch;
this.meta34589 = meta34589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34590,meta34589__$1){
var self__ = this;
var _34590__$1 = this;
return (new cljs.core.async.t_cljs$core$async34588(self__.f,self__.ch,meta34589__$1));
}));

(cljs.core.async.t_cljs$core$async34588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34590){
var self__ = this;
var _34590__$1 = this;
return self__.meta34589;
}));

(cljs.core.async.t_cljs$core$async34588.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34588.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34588.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34588.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34588.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34588.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34589","meta34589",1218844863,null)], null);
}));

(cljs.core.async.t_cljs$core$async34588.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34588");

(cljs.core.async.t_cljs$core$async34588.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34588");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34588.
 */
cljs.core.async.__GT_t_cljs$core$async34588 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34588(f__$1,ch__$1,meta34589){
return (new cljs.core.async.t_cljs$core$async34588(f__$1,ch__$1,meta34589));
});

}

return (new cljs.core.async.t_cljs$core$async34588(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34591 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34591 = (function (p,ch,meta34592){
this.p = p;
this.ch = ch;
this.meta34592 = meta34592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34593,meta34592__$1){
var self__ = this;
var _34593__$1 = this;
return (new cljs.core.async.t_cljs$core$async34591(self__.p,self__.ch,meta34592__$1));
}));

(cljs.core.async.t_cljs$core$async34591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34593){
var self__ = this;
var _34593__$1 = this;
return self__.meta34592;
}));

(cljs.core.async.t_cljs$core$async34591.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34591.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34591.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34591.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34591.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34591.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34591.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34592","meta34592",-416813986,null)], null);
}));

(cljs.core.async.t_cljs$core$async34591.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34591");

(cljs.core.async.t_cljs$core$async34591.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34591");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34591.
 */
cljs.core.async.__GT_t_cljs$core$async34591 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34591(p__$1,ch__$1,meta34592){
return (new cljs.core.async.t_cljs$core$async34591(p__$1,ch__$1,meta34592));
});

}

return (new cljs.core.async.t_cljs$core$async34591(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34595 = arguments.length;
switch (G__34595) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33189__auto___35562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = (function (state_34616){
var state_val_34617 = (state_34616[(1)]);
if((state_val_34617 === (7))){
var inst_34612 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34618_35563 = state_34616__$1;
(statearr_34618_35563[(2)] = inst_34612);

(statearr_34618_35563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (1))){
var state_34616__$1 = state_34616;
var statearr_34619_35565 = state_34616__$1;
(statearr_34619_35565[(2)] = null);

(statearr_34619_35565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (4))){
var inst_34598 = (state_34616[(7)]);
var inst_34598__$1 = (state_34616[(2)]);
var inst_34599 = (inst_34598__$1 == null);
var state_34616__$1 = (function (){var statearr_34620 = state_34616;
(statearr_34620[(7)] = inst_34598__$1);

return statearr_34620;
})();
if(cljs.core.truth_(inst_34599)){
var statearr_34621_35567 = state_34616__$1;
(statearr_34621_35567[(1)] = (5));

} else {
var statearr_34622_35568 = state_34616__$1;
(statearr_34622_35568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (6))){
var inst_34598 = (state_34616[(7)]);
var inst_34603 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34598) : p.call(null,inst_34598));
var state_34616__$1 = state_34616;
if(cljs.core.truth_(inst_34603)){
var statearr_34623_35572 = state_34616__$1;
(statearr_34623_35572[(1)] = (8));

} else {
var statearr_34624_35573 = state_34616__$1;
(statearr_34624_35573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (3))){
var inst_34614 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34616__$1,inst_34614);
} else {
if((state_val_34617 === (2))){
var state_34616__$1 = state_34616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34616__$1,(4),ch);
} else {
if((state_val_34617 === (11))){
var inst_34606 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34625_35575 = state_34616__$1;
(statearr_34625_35575[(2)] = inst_34606);

(statearr_34625_35575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (9))){
var state_34616__$1 = state_34616;
var statearr_34626_35576 = state_34616__$1;
(statearr_34626_35576[(2)] = null);

(statearr_34626_35576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (5))){
var inst_34601 = cljs.core.async.close_BANG_(out);
var state_34616__$1 = state_34616;
var statearr_34627_35577 = state_34616__$1;
(statearr_34627_35577[(2)] = inst_34601);

(statearr_34627_35577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (10))){
var inst_34609 = (state_34616[(2)]);
var state_34616__$1 = (function (){var statearr_34628 = state_34616;
(statearr_34628[(8)] = inst_34609);

return statearr_34628;
})();
var statearr_34629_35578 = state_34616__$1;
(statearr_34629_35578[(2)] = null);

(statearr_34629_35578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (8))){
var inst_34598 = (state_34616[(7)]);
var state_34616__$1 = state_34616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34616__$1,(11),out,inst_34598);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33133__auto__ = null;
var cljs$core$async$state_machine__33133__auto____0 = (function (){
var statearr_34630 = [null,null,null,null,null,null,null,null,null];
(statearr_34630[(0)] = cljs$core$async$state_machine__33133__auto__);

(statearr_34630[(1)] = (1));

return statearr_34630;
});
var cljs$core$async$state_machine__33133__auto____1 = (function (state_34616){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_34616);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e34631){var ex__33136__auto__ = e34631;
var statearr_34632_35579 = state_34616;
(statearr_34632_35579[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_34616[(4)]))){
var statearr_34633_35580 = state_34616;
(statearr_34633_35580[(1)] = cljs.core.first((state_34616[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35581 = state_34616;
state_34616 = G__35581;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$state_machine__33133__auto__ = function(state_34616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33133__auto____1.call(this,state_34616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33133__auto____0;
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33133__auto____1;
return cljs$core$async$state_machine__33133__auto__;
})()
})();
var state__33191__auto__ = (function (){var statearr_34634 = f__33190__auto__();
(statearr_34634[(6)] = c__33189__auto___35562);

return statearr_34634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34636 = arguments.length;
switch (G__34636) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33189__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = (function (state_34698){
var state_val_34699 = (state_34698[(1)]);
if((state_val_34699 === (7))){
var inst_34694 = (state_34698[(2)]);
var state_34698__$1 = state_34698;
var statearr_34700_35585 = state_34698__$1;
(statearr_34700_35585[(2)] = inst_34694);

(statearr_34700_35585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (20))){
var inst_34664 = (state_34698[(7)]);
var inst_34675 = (state_34698[(2)]);
var inst_34676 = cljs.core.next(inst_34664);
var inst_34650 = inst_34676;
var inst_34651 = null;
var inst_34652 = (0);
var inst_34653 = (0);
var state_34698__$1 = (function (){var statearr_34701 = state_34698;
(statearr_34701[(8)] = inst_34675);

(statearr_34701[(9)] = inst_34651);

(statearr_34701[(10)] = inst_34650);

(statearr_34701[(11)] = inst_34653);

(statearr_34701[(12)] = inst_34652);

return statearr_34701;
})();
var statearr_34702_35586 = state_34698__$1;
(statearr_34702_35586[(2)] = null);

(statearr_34702_35586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (1))){
var state_34698__$1 = state_34698;
var statearr_34703_35587 = state_34698__$1;
(statearr_34703_35587[(2)] = null);

(statearr_34703_35587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (4))){
var inst_34639 = (state_34698[(13)]);
var inst_34639__$1 = (state_34698[(2)]);
var inst_34640 = (inst_34639__$1 == null);
var state_34698__$1 = (function (){var statearr_34704 = state_34698;
(statearr_34704[(13)] = inst_34639__$1);

return statearr_34704;
})();
if(cljs.core.truth_(inst_34640)){
var statearr_34705_35588 = state_34698__$1;
(statearr_34705_35588[(1)] = (5));

} else {
var statearr_34706_35589 = state_34698__$1;
(statearr_34706_35589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (15))){
var state_34698__$1 = state_34698;
var statearr_34710_35590 = state_34698__$1;
(statearr_34710_35590[(2)] = null);

(statearr_34710_35590[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (21))){
var state_34698__$1 = state_34698;
var statearr_34711_35591 = state_34698__$1;
(statearr_34711_35591[(2)] = null);

(statearr_34711_35591[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (13))){
var inst_34651 = (state_34698[(9)]);
var inst_34650 = (state_34698[(10)]);
var inst_34653 = (state_34698[(11)]);
var inst_34652 = (state_34698[(12)]);
var inst_34660 = (state_34698[(2)]);
var inst_34661 = (inst_34653 + (1));
var tmp34707 = inst_34651;
var tmp34708 = inst_34650;
var tmp34709 = inst_34652;
var inst_34650__$1 = tmp34708;
var inst_34651__$1 = tmp34707;
var inst_34652__$1 = tmp34709;
var inst_34653__$1 = inst_34661;
var state_34698__$1 = (function (){var statearr_34712 = state_34698;
(statearr_34712[(14)] = inst_34660);

(statearr_34712[(9)] = inst_34651__$1);

(statearr_34712[(10)] = inst_34650__$1);

(statearr_34712[(11)] = inst_34653__$1);

(statearr_34712[(12)] = inst_34652__$1);

return statearr_34712;
})();
var statearr_34713_35592 = state_34698__$1;
(statearr_34713_35592[(2)] = null);

(statearr_34713_35592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (22))){
var state_34698__$1 = state_34698;
var statearr_34714_35593 = state_34698__$1;
(statearr_34714_35593[(2)] = null);

(statearr_34714_35593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (6))){
var inst_34639 = (state_34698[(13)]);
var inst_34648 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34639) : f.call(null,inst_34639));
var inst_34649 = cljs.core.seq(inst_34648);
var inst_34650 = inst_34649;
var inst_34651 = null;
var inst_34652 = (0);
var inst_34653 = (0);
var state_34698__$1 = (function (){var statearr_34715 = state_34698;
(statearr_34715[(9)] = inst_34651);

(statearr_34715[(10)] = inst_34650);

(statearr_34715[(11)] = inst_34653);

(statearr_34715[(12)] = inst_34652);

return statearr_34715;
})();
var statearr_34716_35594 = state_34698__$1;
(statearr_34716_35594[(2)] = null);

(statearr_34716_35594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (17))){
var inst_34664 = (state_34698[(7)]);
var inst_34668 = cljs.core.chunk_first(inst_34664);
var inst_34669 = cljs.core.chunk_rest(inst_34664);
var inst_34670 = cljs.core.count(inst_34668);
var inst_34650 = inst_34669;
var inst_34651 = inst_34668;
var inst_34652 = inst_34670;
var inst_34653 = (0);
var state_34698__$1 = (function (){var statearr_34717 = state_34698;
(statearr_34717[(9)] = inst_34651);

(statearr_34717[(10)] = inst_34650);

(statearr_34717[(11)] = inst_34653);

(statearr_34717[(12)] = inst_34652);

return statearr_34717;
})();
var statearr_34718_35595 = state_34698__$1;
(statearr_34718_35595[(2)] = null);

(statearr_34718_35595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (3))){
var inst_34696 = (state_34698[(2)]);
var state_34698__$1 = state_34698;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34698__$1,inst_34696);
} else {
if((state_val_34699 === (12))){
var inst_34684 = (state_34698[(2)]);
var state_34698__$1 = state_34698;
var statearr_34719_35596 = state_34698__$1;
(statearr_34719_35596[(2)] = inst_34684);

(statearr_34719_35596[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (2))){
var state_34698__$1 = state_34698;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34698__$1,(4),in$);
} else {
if((state_val_34699 === (23))){
var inst_34692 = (state_34698[(2)]);
var state_34698__$1 = state_34698;
var statearr_34720_35597 = state_34698__$1;
(statearr_34720_35597[(2)] = inst_34692);

(statearr_34720_35597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (19))){
var inst_34679 = (state_34698[(2)]);
var state_34698__$1 = state_34698;
var statearr_34721_35598 = state_34698__$1;
(statearr_34721_35598[(2)] = inst_34679);

(statearr_34721_35598[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (11))){
var inst_34664 = (state_34698[(7)]);
var inst_34650 = (state_34698[(10)]);
var inst_34664__$1 = cljs.core.seq(inst_34650);
var state_34698__$1 = (function (){var statearr_34722 = state_34698;
(statearr_34722[(7)] = inst_34664__$1);

return statearr_34722;
})();
if(inst_34664__$1){
var statearr_34723_35599 = state_34698__$1;
(statearr_34723_35599[(1)] = (14));

} else {
var statearr_34724_35600 = state_34698__$1;
(statearr_34724_35600[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (9))){
var inst_34686 = (state_34698[(2)]);
var inst_34687 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34698__$1 = (function (){var statearr_34725 = state_34698;
(statearr_34725[(15)] = inst_34686);

return statearr_34725;
})();
if(cljs.core.truth_(inst_34687)){
var statearr_34726_35601 = state_34698__$1;
(statearr_34726_35601[(1)] = (21));

} else {
var statearr_34727_35602 = state_34698__$1;
(statearr_34727_35602[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (5))){
var inst_34642 = cljs.core.async.close_BANG_(out);
var state_34698__$1 = state_34698;
var statearr_34728_35603 = state_34698__$1;
(statearr_34728_35603[(2)] = inst_34642);

(statearr_34728_35603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (14))){
var inst_34664 = (state_34698[(7)]);
var inst_34666 = cljs.core.chunked_seq_QMARK_(inst_34664);
var state_34698__$1 = state_34698;
if(inst_34666){
var statearr_34729_35608 = state_34698__$1;
(statearr_34729_35608[(1)] = (17));

} else {
var statearr_34730_35609 = state_34698__$1;
(statearr_34730_35609[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (16))){
var inst_34682 = (state_34698[(2)]);
var state_34698__$1 = state_34698;
var statearr_34731_35610 = state_34698__$1;
(statearr_34731_35610[(2)] = inst_34682);

(statearr_34731_35610[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (10))){
var inst_34651 = (state_34698[(9)]);
var inst_34653 = (state_34698[(11)]);
var inst_34658 = cljs.core._nth(inst_34651,inst_34653);
var state_34698__$1 = state_34698;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34698__$1,(13),out,inst_34658);
} else {
if((state_val_34699 === (18))){
var inst_34664 = (state_34698[(7)]);
var inst_34673 = cljs.core.first(inst_34664);
var state_34698__$1 = state_34698;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34698__$1,(20),out,inst_34673);
} else {
if((state_val_34699 === (8))){
var inst_34653 = (state_34698[(11)]);
var inst_34652 = (state_34698[(12)]);
var inst_34655 = (inst_34653 < inst_34652);
var inst_34656 = inst_34655;
var state_34698__$1 = state_34698;
if(cljs.core.truth_(inst_34656)){
var statearr_34732_35613 = state_34698__$1;
(statearr_34732_35613[(1)] = (10));

} else {
var statearr_34733_35614 = state_34698__$1;
(statearr_34733_35614[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33133__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33133__auto____0 = (function (){
var statearr_34734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34734[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33133__auto__);

(statearr_34734[(1)] = (1));

return statearr_34734;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33133__auto____1 = (function (state_34698){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_34698);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e34735){var ex__33136__auto__ = e34735;
var statearr_34736_35615 = state_34698;
(statearr_34736_35615[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_34698[(4)]))){
var statearr_34737_35616 = state_34698;
(statearr_34737_35616[(1)] = cljs.core.first((state_34698[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35617 = state_34698;
state_34698 = G__35617;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33133__auto__ = function(state_34698){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33133__auto____1.call(this,state_34698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33133__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33133__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33133__auto__;
})()
})();
var state__33191__auto__ = (function (){var statearr_34738 = f__33190__auto__();
(statearr_34738[(6)] = c__33189__auto__);

return statearr_34738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
}));

return c__33189__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34740 = arguments.length;
switch (G__34740) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34742 = arguments.length;
switch (G__34742) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34744 = arguments.length;
switch (G__34744) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33189__auto___35621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = (function (state_34768){
var state_val_34769 = (state_34768[(1)]);
if((state_val_34769 === (7))){
var inst_34763 = (state_34768[(2)]);
var state_34768__$1 = state_34768;
var statearr_34770_35622 = state_34768__$1;
(statearr_34770_35622[(2)] = inst_34763);

(statearr_34770_35622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (1))){
var inst_34745 = null;
var state_34768__$1 = (function (){var statearr_34771 = state_34768;
(statearr_34771[(7)] = inst_34745);

return statearr_34771;
})();
var statearr_34772_35623 = state_34768__$1;
(statearr_34772_35623[(2)] = null);

(statearr_34772_35623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (4))){
var inst_34748 = (state_34768[(8)]);
var inst_34748__$1 = (state_34768[(2)]);
var inst_34749 = (inst_34748__$1 == null);
var inst_34750 = cljs.core.not(inst_34749);
var state_34768__$1 = (function (){var statearr_34773 = state_34768;
(statearr_34773[(8)] = inst_34748__$1);

return statearr_34773;
})();
if(inst_34750){
var statearr_34774_35624 = state_34768__$1;
(statearr_34774_35624[(1)] = (5));

} else {
var statearr_34775_35625 = state_34768__$1;
(statearr_34775_35625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (6))){
var state_34768__$1 = state_34768;
var statearr_34776_35626 = state_34768__$1;
(statearr_34776_35626[(2)] = null);

(statearr_34776_35626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (3))){
var inst_34765 = (state_34768[(2)]);
var inst_34766 = cljs.core.async.close_BANG_(out);
var state_34768__$1 = (function (){var statearr_34777 = state_34768;
(statearr_34777[(9)] = inst_34765);

return statearr_34777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34768__$1,inst_34766);
} else {
if((state_val_34769 === (2))){
var state_34768__$1 = state_34768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34768__$1,(4),ch);
} else {
if((state_val_34769 === (11))){
var inst_34748 = (state_34768[(8)]);
var inst_34757 = (state_34768[(2)]);
var inst_34745 = inst_34748;
var state_34768__$1 = (function (){var statearr_34778 = state_34768;
(statearr_34778[(10)] = inst_34757);

(statearr_34778[(7)] = inst_34745);

return statearr_34778;
})();
var statearr_34779_35627 = state_34768__$1;
(statearr_34779_35627[(2)] = null);

(statearr_34779_35627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (9))){
var inst_34748 = (state_34768[(8)]);
var state_34768__$1 = state_34768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34768__$1,(11),out,inst_34748);
} else {
if((state_val_34769 === (5))){
var inst_34748 = (state_34768[(8)]);
var inst_34745 = (state_34768[(7)]);
var inst_34752 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34748,inst_34745);
var state_34768__$1 = state_34768;
if(inst_34752){
var statearr_34781_35628 = state_34768__$1;
(statearr_34781_35628[(1)] = (8));

} else {
var statearr_34782_35629 = state_34768__$1;
(statearr_34782_35629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (10))){
var inst_34760 = (state_34768[(2)]);
var state_34768__$1 = state_34768;
var statearr_34783_35630 = state_34768__$1;
(statearr_34783_35630[(2)] = inst_34760);

(statearr_34783_35630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (8))){
var inst_34745 = (state_34768[(7)]);
var tmp34780 = inst_34745;
var inst_34745__$1 = tmp34780;
var state_34768__$1 = (function (){var statearr_34784 = state_34768;
(statearr_34784[(7)] = inst_34745__$1);

return statearr_34784;
})();
var statearr_34785_35631 = state_34768__$1;
(statearr_34785_35631[(2)] = null);

(statearr_34785_35631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33133__auto__ = null;
var cljs$core$async$state_machine__33133__auto____0 = (function (){
var statearr_34786 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34786[(0)] = cljs$core$async$state_machine__33133__auto__);

(statearr_34786[(1)] = (1));

return statearr_34786;
});
var cljs$core$async$state_machine__33133__auto____1 = (function (state_34768){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_34768);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e34787){var ex__33136__auto__ = e34787;
var statearr_34788_35632 = state_34768;
(statearr_34788_35632[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_34768[(4)]))){
var statearr_34789_35633 = state_34768;
(statearr_34789_35633[(1)] = cljs.core.first((state_34768[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35634 = state_34768;
state_34768 = G__35634;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$state_machine__33133__auto__ = function(state_34768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33133__auto____1.call(this,state_34768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33133__auto____0;
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33133__auto____1;
return cljs$core$async$state_machine__33133__auto__;
})()
})();
var state__33191__auto__ = (function (){var statearr_34790 = f__33190__auto__();
(statearr_34790[(6)] = c__33189__auto___35621);

return statearr_34790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34792 = arguments.length;
switch (G__34792) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33189__auto___35636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = (function (state_34830){
var state_val_34831 = (state_34830[(1)]);
if((state_val_34831 === (7))){
var inst_34826 = (state_34830[(2)]);
var state_34830__$1 = state_34830;
var statearr_34832_35637 = state_34830__$1;
(statearr_34832_35637[(2)] = inst_34826);

(statearr_34832_35637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (1))){
var inst_34793 = (new Array(n));
var inst_34794 = inst_34793;
var inst_34795 = (0);
var state_34830__$1 = (function (){var statearr_34833 = state_34830;
(statearr_34833[(7)] = inst_34795);

(statearr_34833[(8)] = inst_34794);

return statearr_34833;
})();
var statearr_34834_35638 = state_34830__$1;
(statearr_34834_35638[(2)] = null);

(statearr_34834_35638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (4))){
var inst_34798 = (state_34830[(9)]);
var inst_34798__$1 = (state_34830[(2)]);
var inst_34799 = (inst_34798__$1 == null);
var inst_34800 = cljs.core.not(inst_34799);
var state_34830__$1 = (function (){var statearr_34835 = state_34830;
(statearr_34835[(9)] = inst_34798__$1);

return statearr_34835;
})();
if(inst_34800){
var statearr_34836_35639 = state_34830__$1;
(statearr_34836_35639[(1)] = (5));

} else {
var statearr_34837_35640 = state_34830__$1;
(statearr_34837_35640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (15))){
var inst_34820 = (state_34830[(2)]);
var state_34830__$1 = state_34830;
var statearr_34838_35642 = state_34830__$1;
(statearr_34838_35642[(2)] = inst_34820);

(statearr_34838_35642[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (13))){
var state_34830__$1 = state_34830;
var statearr_34839_35643 = state_34830__$1;
(statearr_34839_35643[(2)] = null);

(statearr_34839_35643[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (6))){
var inst_34795 = (state_34830[(7)]);
var inst_34816 = (inst_34795 > (0));
var state_34830__$1 = state_34830;
if(cljs.core.truth_(inst_34816)){
var statearr_34840_35644 = state_34830__$1;
(statearr_34840_35644[(1)] = (12));

} else {
var statearr_34841_35645 = state_34830__$1;
(statearr_34841_35645[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (3))){
var inst_34828 = (state_34830[(2)]);
var state_34830__$1 = state_34830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34830__$1,inst_34828);
} else {
if((state_val_34831 === (12))){
var inst_34794 = (state_34830[(8)]);
var inst_34818 = cljs.core.vec(inst_34794);
var state_34830__$1 = state_34830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34830__$1,(15),out,inst_34818);
} else {
if((state_val_34831 === (2))){
var state_34830__$1 = state_34830;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34830__$1,(4),ch);
} else {
if((state_val_34831 === (11))){
var inst_34810 = (state_34830[(2)]);
var inst_34811 = (new Array(n));
var inst_34794 = inst_34811;
var inst_34795 = (0);
var state_34830__$1 = (function (){var statearr_34842 = state_34830;
(statearr_34842[(10)] = inst_34810);

(statearr_34842[(7)] = inst_34795);

(statearr_34842[(8)] = inst_34794);

return statearr_34842;
})();
var statearr_34843_35647 = state_34830__$1;
(statearr_34843_35647[(2)] = null);

(statearr_34843_35647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (9))){
var inst_34794 = (state_34830[(8)]);
var inst_34808 = cljs.core.vec(inst_34794);
var state_34830__$1 = state_34830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34830__$1,(11),out,inst_34808);
} else {
if((state_val_34831 === (5))){
var inst_34798 = (state_34830[(9)]);
var inst_34803 = (state_34830[(11)]);
var inst_34795 = (state_34830[(7)]);
var inst_34794 = (state_34830[(8)]);
var inst_34802 = (inst_34794[inst_34795] = inst_34798);
var inst_34803__$1 = (inst_34795 + (1));
var inst_34804 = (inst_34803__$1 < n);
var state_34830__$1 = (function (){var statearr_34844 = state_34830;
(statearr_34844[(11)] = inst_34803__$1);

(statearr_34844[(12)] = inst_34802);

return statearr_34844;
})();
if(cljs.core.truth_(inst_34804)){
var statearr_34845_35648 = state_34830__$1;
(statearr_34845_35648[(1)] = (8));

} else {
var statearr_34846_35649 = state_34830__$1;
(statearr_34846_35649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (14))){
var inst_34823 = (state_34830[(2)]);
var inst_34824 = cljs.core.async.close_BANG_(out);
var state_34830__$1 = (function (){var statearr_34848 = state_34830;
(statearr_34848[(13)] = inst_34823);

return statearr_34848;
})();
var statearr_34849_35650 = state_34830__$1;
(statearr_34849_35650[(2)] = inst_34824);

(statearr_34849_35650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (10))){
var inst_34814 = (state_34830[(2)]);
var state_34830__$1 = state_34830;
var statearr_34850_35652 = state_34830__$1;
(statearr_34850_35652[(2)] = inst_34814);

(statearr_34850_35652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (8))){
var inst_34803 = (state_34830[(11)]);
var inst_34794 = (state_34830[(8)]);
var tmp34847 = inst_34794;
var inst_34794__$1 = tmp34847;
var inst_34795 = inst_34803;
var state_34830__$1 = (function (){var statearr_34851 = state_34830;
(statearr_34851[(7)] = inst_34795);

(statearr_34851[(8)] = inst_34794__$1);

return statearr_34851;
})();
var statearr_34852_35661 = state_34830__$1;
(statearr_34852_35661[(2)] = null);

(statearr_34852_35661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33133__auto__ = null;
var cljs$core$async$state_machine__33133__auto____0 = (function (){
var statearr_34853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34853[(0)] = cljs$core$async$state_machine__33133__auto__);

(statearr_34853[(1)] = (1));

return statearr_34853;
});
var cljs$core$async$state_machine__33133__auto____1 = (function (state_34830){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_34830);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e34854){var ex__33136__auto__ = e34854;
var statearr_34855_35667 = state_34830;
(statearr_34855_35667[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_34830[(4)]))){
var statearr_34856_35669 = state_34830;
(statearr_34856_35669[(1)] = cljs.core.first((state_34830[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35670 = state_34830;
state_34830 = G__35670;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$state_machine__33133__auto__ = function(state_34830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33133__auto____1.call(this,state_34830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33133__auto____0;
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33133__auto____1;
return cljs$core$async$state_machine__33133__auto__;
})()
})();
var state__33191__auto__ = (function (){var statearr_34857 = f__33190__auto__();
(statearr_34857[(6)] = c__33189__auto___35636);

return statearr_34857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34859 = arguments.length;
switch (G__34859) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33189__auto___35672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = (function (state_34901){
var state_val_34902 = (state_34901[(1)]);
if((state_val_34902 === (7))){
var inst_34897 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
var statearr_34903_35673 = state_34901__$1;
(statearr_34903_35673[(2)] = inst_34897);

(statearr_34903_35673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (1))){
var inst_34860 = [];
var inst_34861 = inst_34860;
var inst_34862 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34901__$1 = (function (){var statearr_34904 = state_34901;
(statearr_34904[(7)] = inst_34862);

(statearr_34904[(8)] = inst_34861);

return statearr_34904;
})();
var statearr_34905_35678 = state_34901__$1;
(statearr_34905_35678[(2)] = null);

(statearr_34905_35678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (4))){
var inst_34865 = (state_34901[(9)]);
var inst_34865__$1 = (state_34901[(2)]);
var inst_34866 = (inst_34865__$1 == null);
var inst_34867 = cljs.core.not(inst_34866);
var state_34901__$1 = (function (){var statearr_34906 = state_34901;
(statearr_34906[(9)] = inst_34865__$1);

return statearr_34906;
})();
if(inst_34867){
var statearr_34907_35687 = state_34901__$1;
(statearr_34907_35687[(1)] = (5));

} else {
var statearr_34908_35688 = state_34901__$1;
(statearr_34908_35688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (15))){
var inst_34891 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
var statearr_34909_35689 = state_34901__$1;
(statearr_34909_35689[(2)] = inst_34891);

(statearr_34909_35689[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (13))){
var state_34901__$1 = state_34901;
var statearr_34910_35690 = state_34901__$1;
(statearr_34910_35690[(2)] = null);

(statearr_34910_35690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (6))){
var inst_34861 = (state_34901[(8)]);
var inst_34886 = inst_34861.length;
var inst_34887 = (inst_34886 > (0));
var state_34901__$1 = state_34901;
if(cljs.core.truth_(inst_34887)){
var statearr_34911_35695 = state_34901__$1;
(statearr_34911_35695[(1)] = (12));

} else {
var statearr_34912_35696 = state_34901__$1;
(statearr_34912_35696[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (3))){
var inst_34899 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34901__$1,inst_34899);
} else {
if((state_val_34902 === (12))){
var inst_34861 = (state_34901[(8)]);
var inst_34889 = cljs.core.vec(inst_34861);
var state_34901__$1 = state_34901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34901__$1,(15),out,inst_34889);
} else {
if((state_val_34902 === (2))){
var state_34901__$1 = state_34901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34901__$1,(4),ch);
} else {
if((state_val_34902 === (11))){
var inst_34869 = (state_34901[(10)]);
var inst_34865 = (state_34901[(9)]);
var inst_34879 = (state_34901[(2)]);
var inst_34880 = [];
var inst_34881 = inst_34880.push(inst_34865);
var inst_34861 = inst_34880;
var inst_34862 = inst_34869;
var state_34901__$1 = (function (){var statearr_34913 = state_34901;
(statearr_34913[(11)] = inst_34879);

(statearr_34913[(7)] = inst_34862);

(statearr_34913[(12)] = inst_34881);

(statearr_34913[(8)] = inst_34861);

return statearr_34913;
})();
var statearr_34914_35708 = state_34901__$1;
(statearr_34914_35708[(2)] = null);

(statearr_34914_35708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (9))){
var inst_34861 = (state_34901[(8)]);
var inst_34877 = cljs.core.vec(inst_34861);
var state_34901__$1 = state_34901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34901__$1,(11),out,inst_34877);
} else {
if((state_val_34902 === (5))){
var inst_34869 = (state_34901[(10)]);
var inst_34862 = (state_34901[(7)]);
var inst_34865 = (state_34901[(9)]);
var inst_34869__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34865) : f.call(null,inst_34865));
var inst_34870 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34869__$1,inst_34862);
var inst_34871 = cljs.core.keyword_identical_QMARK_(inst_34862,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34872 = ((inst_34870) || (inst_34871));
var state_34901__$1 = (function (){var statearr_34915 = state_34901;
(statearr_34915[(10)] = inst_34869__$1);

return statearr_34915;
})();
if(cljs.core.truth_(inst_34872)){
var statearr_34916_35710 = state_34901__$1;
(statearr_34916_35710[(1)] = (8));

} else {
var statearr_34917_35711 = state_34901__$1;
(statearr_34917_35711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (14))){
var inst_34894 = (state_34901[(2)]);
var inst_34895 = cljs.core.async.close_BANG_(out);
var state_34901__$1 = (function (){var statearr_34919 = state_34901;
(statearr_34919[(13)] = inst_34894);

return statearr_34919;
})();
var statearr_34920_35712 = state_34901__$1;
(statearr_34920_35712[(2)] = inst_34895);

(statearr_34920_35712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (10))){
var inst_34884 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
var statearr_34921_35713 = state_34901__$1;
(statearr_34921_35713[(2)] = inst_34884);

(statearr_34921_35713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (8))){
var inst_34869 = (state_34901[(10)]);
var inst_34865 = (state_34901[(9)]);
var inst_34861 = (state_34901[(8)]);
var inst_34874 = inst_34861.push(inst_34865);
var tmp34918 = inst_34861;
var inst_34861__$1 = tmp34918;
var inst_34862 = inst_34869;
var state_34901__$1 = (function (){var statearr_34922 = state_34901;
(statearr_34922[(7)] = inst_34862);

(statearr_34922[(14)] = inst_34874);

(statearr_34922[(8)] = inst_34861__$1);

return statearr_34922;
})();
var statearr_34923_35714 = state_34901__$1;
(statearr_34923_35714[(2)] = null);

(statearr_34923_35714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33133__auto__ = null;
var cljs$core$async$state_machine__33133__auto____0 = (function (){
var statearr_34924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34924[(0)] = cljs$core$async$state_machine__33133__auto__);

(statearr_34924[(1)] = (1));

return statearr_34924;
});
var cljs$core$async$state_machine__33133__auto____1 = (function (state_34901){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_34901);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e34925){var ex__33136__auto__ = e34925;
var statearr_34926_35715 = state_34901;
(statearr_34926_35715[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_34901[(4)]))){
var statearr_34927_35716 = state_34901;
(statearr_34927_35716[(1)] = cljs.core.first((state_34901[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35717 = state_34901;
state_34901 = G__35717;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs$core$async$state_machine__33133__auto__ = function(state_34901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33133__auto____1.call(this,state_34901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33133__auto____0;
cljs$core$async$state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33133__auto____1;
return cljs$core$async$state_machine__33133__auto__;
})()
})();
var state__33191__auto__ = (function (){var statearr_34928 = f__33190__auto__();
(statearr_34928[(6)] = c__33189__auto___35672);

return statearr_34928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
