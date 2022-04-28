goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__39558 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__39558.cljs$core$IFn$_invoke$arity$1 ? fexpr__39558.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__39558.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39559){
var vec__39560 = p__39559;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39560,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39560,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__39563 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__39563)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__39563)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__39563)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__39563)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__39563)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__39563)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39563)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__39564){
var map__39565 = p__39564;
var map__39565__$1 = (((((!((map__39565 == null))))?(((((map__39565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39565):map__39565);
var request = map__39565__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39565__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39565__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39565__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__39567 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__39567,default_headers);

cljs_http.core.apply_response_type_BANG_(G__39567,response_type);

G__39567.setTimeoutInterval(timeout);

G__39567.setWithCredentials(send_credentials);

return G__39567;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__39568){
var map__39569 = p__39568;
var map__39569__$1 = (((((!((map__39569 == null))))?(((((map__39569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39569):map__39569);
var request = map__39569__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39569__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39569__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39569__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39569__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39569__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39569__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__39571 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__39571) : cljs_http.core.error_kw.call(null,G__39571));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_39618 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__39572_39619 = xhr;
G__39572_39619.setProgressEventsEnabled(true);

G__39572_39619.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_39618,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__39572_39619.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_39618,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__33189__auto___39620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = (function (state_39583){
var state_val_39584 = (state_39583[(1)]);
if((state_val_39584 === (1))){
var state_39583__$1 = state_39583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39583__$1,(2),cancel);
} else {
if((state_val_39584 === (2))){
var inst_39574 = (state_39583[(2)]);
var inst_39575 = xhr.isComplete();
var inst_39576 = cljs.core.not(inst_39575);
var state_39583__$1 = (function (){var statearr_39585 = state_39583;
(statearr_39585[(7)] = inst_39574);

return statearr_39585;
})();
if(inst_39576){
var statearr_39586_39622 = state_39583__$1;
(statearr_39586_39622[(1)] = (3));

} else {
var statearr_39587_39623 = state_39583__$1;
(statearr_39587_39623[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39584 === (3))){
var inst_39578 = xhr.abort();
var state_39583__$1 = state_39583;
var statearr_39588_39624 = state_39583__$1;
(statearr_39588_39624[(2)] = inst_39578);

(statearr_39588_39624[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39584 === (4))){
var state_39583__$1 = state_39583;
var statearr_39589_39625 = state_39583__$1;
(statearr_39589_39625[(2)] = null);

(statearr_39589_39625[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39584 === (5))){
var inst_39581 = (state_39583[(2)]);
var state_39583__$1 = state_39583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39583__$1,inst_39581);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__33133__auto__ = null;
var cljs_http$core$xhr_$_state_machine__33133__auto____0 = (function (){
var statearr_39590 = [null,null,null,null,null,null,null,null];
(statearr_39590[(0)] = cljs_http$core$xhr_$_state_machine__33133__auto__);

(statearr_39590[(1)] = (1));

return statearr_39590;
});
var cljs_http$core$xhr_$_state_machine__33133__auto____1 = (function (state_39583){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_39583);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e39591){var ex__33136__auto__ = e39591;
var statearr_39592_39630 = state_39583;
(statearr_39592_39630[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_39583[(4)]))){
var statearr_39593_39631 = state_39583;
(statearr_39593_39631[(1)] = cljs.core.first((state_39583[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39632 = state_39583;
state_39583 = G__39632;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__33133__auto__ = function(state_39583){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__33133__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__33133__auto____1.call(this,state_39583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__33133__auto____0;
cljs_http$core$xhr_$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__33133__auto____1;
return cljs_http$core$xhr_$_state_machine__33133__auto__;
})()
})();
var state__33191__auto__ = (function (){var statearr_39594 = f__33190__auto__();
(statearr_39594[(6)] = c__33189__auto___39620);

return statearr_39594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__39595){
var map__39596 = p__39595;
var map__39596__$1 = (((((!((map__39596 == null))))?(((((map__39596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39596):map__39596);
var request = map__39596__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39596__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39596__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39596__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39596__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_39634 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_39634], null));

if(cljs.core.truth_(cancel)){
var c__33189__auto___39635 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33190__auto__ = (function (){var switch__33132__auto__ = (function (state_39602){
var state_val_39603 = (state_39602[(1)]);
if((state_val_39603 === (1))){
var state_39602__$1 = state_39602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39602__$1,(2),cancel);
} else {
if((state_val_39603 === (2))){
var inst_39599 = (state_39602[(2)]);
var inst_39600 = jsonp.cancel(req_39634);
var state_39602__$1 = (function (){var statearr_39604 = state_39602;
(statearr_39604[(7)] = inst_39599);

return statearr_39604;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39602__$1,inst_39600);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__33133__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__33133__auto____0 = (function (){
var statearr_39605 = [null,null,null,null,null,null,null,null];
(statearr_39605[(0)] = cljs_http$core$jsonp_$_state_machine__33133__auto__);

(statearr_39605[(1)] = (1));

return statearr_39605;
});
var cljs_http$core$jsonp_$_state_machine__33133__auto____1 = (function (state_39602){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_39602);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e39606){var ex__33136__auto__ = e39606;
var statearr_39607_39636 = state_39602;
(statearr_39607_39636[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_39602[(4)]))){
var statearr_39608_39637 = state_39602;
(statearr_39608_39637[(1)] = cljs.core.first((state_39602[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39638 = state_39602;
state_39602 = G__39638;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__33133__auto__ = function(state_39602){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__33133__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__33133__auto____1.call(this,state_39602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__33133__auto____0;
cljs_http$core$jsonp_$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__33133__auto____1;
return cljs_http$core$jsonp_$_state_machine__33133__auto__;
})()
})();
var state__33191__auto__ = (function (){var statearr_39609 = f__33190__auto__();
(statearr_39609[(6)] = c__33189__auto___39635);

return statearr_39609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33191__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__39610){
var map__39611 = p__39610;
var map__39611__$1 = (((((!((map__39611 == null))))?(((((map__39611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39611):map__39611);
var request = map__39611__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39611__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
