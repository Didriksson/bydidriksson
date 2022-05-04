goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__39549 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__39549.cljs$core$IFn$_invoke$arity$1 ? fexpr__39549.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__39549.call(null,channel));
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
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39551){
var vec__39552 = p__39551;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39552,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39552,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__39555 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__39555)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__39555)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__39555)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__39555)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__39555)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__39555)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39555)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__39562){
var map__39563 = p__39562;
var map__39563__$1 = (((((!((map__39563 == null))))?(((((map__39563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39563):map__39563);
var request = map__39563__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39563__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39563__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39563__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__39565 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__39565,default_headers);

cljs_http.core.apply_response_type_BANG_(G__39565,response_type);

G__39565.setTimeoutInterval(timeout);

G__39565.setWithCredentials(send_credentials);

return G__39565;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__39566){
var map__39567 = p__39566;
var map__39567__$1 = (((((!((map__39567 == null))))?(((((map__39567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39567):map__39567);
var request = map__39567__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39567__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39567__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39567__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39567__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39567__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39567__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
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
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__39569 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__39569) : cljs_http.core.error_kw.call(null,G__39569));
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
var listener_39613 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__39570_39614 = xhr;
G__39570_39614.setProgressEventsEnabled(true);

G__39570_39614.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_39613,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__39570_39614.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_39613,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__33195__auto___39615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33196__auto__ = (function (){var switch__33132__auto__ = (function (state_39581){
var state_val_39582 = (state_39581[(1)]);
if((state_val_39582 === (1))){
var state_39581__$1 = state_39581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39581__$1,(2),cancel);
} else {
if((state_val_39582 === (2))){
var inst_39572 = (state_39581[(2)]);
var inst_39573 = xhr.isComplete();
var inst_39574 = cljs.core.not(inst_39573);
var state_39581__$1 = (function (){var statearr_39583 = state_39581;
(statearr_39583[(7)] = inst_39572);

return statearr_39583;
})();
if(inst_39574){
var statearr_39584_39616 = state_39581__$1;
(statearr_39584_39616[(1)] = (3));

} else {
var statearr_39585_39617 = state_39581__$1;
(statearr_39585_39617[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39582 === (3))){
var inst_39576 = xhr.abort();
var state_39581__$1 = state_39581;
var statearr_39586_39618 = state_39581__$1;
(statearr_39586_39618[(2)] = inst_39576);

(statearr_39586_39618[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39582 === (4))){
var state_39581__$1 = state_39581;
var statearr_39587_39619 = state_39581__$1;
(statearr_39587_39619[(2)] = null);

(statearr_39587_39619[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39582 === (5))){
var inst_39579 = (state_39581[(2)]);
var state_39581__$1 = state_39581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39581__$1,inst_39579);
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
var statearr_39588 = [null,null,null,null,null,null,null,null];
(statearr_39588[(0)] = cljs_http$core$xhr_$_state_machine__33133__auto__);

(statearr_39588[(1)] = (1));

return statearr_39588;
});
var cljs_http$core$xhr_$_state_machine__33133__auto____1 = (function (state_39581){
while(true){
var ret_value__33134__auto__ = (function (){try{while(true){
var result__33135__auto__ = switch__33132__auto__(state_39581);
if(cljs.core.keyword_identical_QMARK_(result__33135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33135__auto__;
}
break;
}
}catch (e39589){var ex__33136__auto__ = e39589;
var statearr_39590_39620 = state_39581;
(statearr_39590_39620[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_39581[(4)]))){
var statearr_39591_39621 = state_39581;
(statearr_39591_39621[(1)] = cljs.core.first((state_39581[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39622 = state_39581;
state_39581 = G__39622;
continue;
} else {
return ret_value__33134__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__33133__auto__ = function(state_39581){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__33133__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__33133__auto____1.call(this,state_39581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__33133__auto____0;
cljs_http$core$xhr_$_state_machine__33133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__33133__auto____1;
return cljs_http$core$xhr_$_state_machine__33133__auto__;
})()
})();
var state__33197__auto__ = (function (){var statearr_39592 = f__33196__auto__();
(statearr_39592[(6)] = c__33195__auto___39615);

return statearr_39592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33197__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__39593){
var map__39594 = p__39593;
var map__39594__$1 = (((((!((map__39594 == null))))?(((((map__39594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39594):map__39594);
var request = map__39594__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39594__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39594__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39594__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39594__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_39623 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_39623], null));

if(cljs.core.truth_(cancel)){
var c__33195__auto___39629 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33196__auto__ = (function (){var switch__33132__auto__ = (function (state_39602){
var state_val_39603 = (state_39602[(1)]);
if((state_val_39603 === (1))){
var state_39602__$1 = state_39602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39602__$1,(2),cancel);
} else {
if((state_val_39603 === (2))){
var inst_39599 = (state_39602[(2)]);
var inst_39600 = jsonp.cancel(req_39623);
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
var statearr_39607_39630 = state_39602;
(statearr_39607_39630[(2)] = ex__33136__auto__);


if(cljs.core.seq((state_39602[(4)]))){
var statearr_39608_39631 = state_39602;
(statearr_39608_39631[(1)] = cljs.core.first((state_39602[(4)])));

} else {
throw ex__33136__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39632 = state_39602;
state_39602 = G__39632;
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
var state__33197__auto__ = (function (){var statearr_39609 = f__33196__auto__();
(statearr_39609[(6)] = c__33195__auto___39629);

return statearr_39609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33197__auto__);
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
