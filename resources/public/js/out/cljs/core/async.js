// Compiled by ClojureScript 0.0-2843 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t9010 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9010 = (function (fn_handler,f,meta9011){
this.fn_handler = fn_handler;
this.f = f;
this.meta9011 = meta9011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t9010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9012,meta9011__$1){
var self__ = this;
var _9012__$1 = this;
return (new cljs.core.async.t9010(self__.fn_handler,self__.f,meta9011__$1));
});

cljs.core.async.t9010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9012){
var self__ = this;
var _9012__$1 = this;
return self__.meta9011;
});

cljs.core.async.t9010.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9010.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t9010.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t9010.cljs$lang$type = true;

cljs.core.async.t9010.cljs$lang$ctorStr = "cljs.core.async/t9010";

cljs.core.async.t9010.cljs$lang$ctorPrWriter = (function (this__3714__auto__,writer__3715__auto__,opt__3716__auto__){
return cljs.core._write.call(null,writer__3715__auto__,"cljs.core.async/t9010");
});

cljs.core.async.__GT_t9010 = (function __GT_t9010(fn_handler__$1,f__$1,meta9011){
return (new cljs.core.async.t9010(fn_handler__$1,f__$1,meta9011));
});

}

return (new cljs.core.async.t9010(fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__9014 = buff;
if(G__9014){
var bit__3808__auto__ = null;
if(cljs.core.truth_((function (){var or__3127__auto__ = bit__3808__auto__;
if(cljs.core.truth_(or__3127__auto__)){
return or__3127__auto__;
} else {
return G__9014.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__9014.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9014);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9014);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9015 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9015);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9015,ret){
return (function (){
return fn1.call(null,val_9015);
});})(val_9015,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4014__auto___9016 = n;
var x_9017 = (0);
while(true){
if((x_9017 < n__4014__auto___9016)){
(a[x_9017] = (0));

var G__9018 = (x_9017 + (1));
x_9017 = G__9018;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__9019 = (i + (1));
i = G__9019;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t9023 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9023 = (function (alt_flag,flag,meta9024){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta9024 = meta9024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t9023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9025,meta9024__$1){
var self__ = this;
var _9025__$1 = this;
return (new cljs.core.async.t9023(self__.alt_flag,self__.flag,meta9024__$1));
});})(flag))
;

cljs.core.async.t9023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9025){
var self__ = this;
var _9025__$1 = this;
return self__.meta9024;
});})(flag))
;

cljs.core.async.t9023.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t9023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t9023.cljs$lang$type = true;

cljs.core.async.t9023.cljs$lang$ctorStr = "cljs.core.async/t9023";

cljs.core.async.t9023.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__3714__auto__,writer__3715__auto__,opt__3716__auto__){
return cljs.core._write.call(null,writer__3715__auto__,"cljs.core.async/t9023");
});})(flag))
;

cljs.core.async.__GT_t9023 = ((function (flag){
return (function __GT_t9023(alt_flag__$1,flag__$1,meta9024){
return (new cljs.core.async.t9023(alt_flag__$1,flag__$1,meta9024));
});})(flag))
;

}

return (new cljs.core.async.t9023(alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t9029 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9029 = (function (alt_handler,flag,cb,meta9030){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta9030 = meta9030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t9029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9031,meta9030__$1){
var self__ = this;
var _9031__$1 = this;
return (new cljs.core.async.t9029(self__.alt_handler,self__.flag,self__.cb,meta9030__$1));
});

cljs.core.async.t9029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9031){
var self__ = this;
var _9031__$1 = this;
return self__.meta9030;
});

cljs.core.async.t9029.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9029.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t9029.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t9029.cljs$lang$type = true;

cljs.core.async.t9029.cljs$lang$ctorStr = "cljs.core.async/t9029";

cljs.core.async.t9029.cljs$lang$ctorPrWriter = (function (this__3714__auto__,writer__3715__auto__,opt__3716__auto__){
return cljs.core._write.call(null,writer__3715__auto__,"cljs.core.async/t9029");
});

cljs.core.async.__GT_t9029 = (function __GT_t9029(alt_handler__$1,flag__$1,cb__$1,meta9030){
return (new cljs.core.async.t9029(alt_handler__$1,flag__$1,cb__$1,meta9030));
});

}

return (new cljs.core.async.t9029(alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9032_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9032_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9033_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9033_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3127__auto__ = wport;
if(cljs.core.truth_(or__3127__auto__)){
return or__3127__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9034 = (i + (1));
i = G__9034;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3127__auto__ = ret;
if(cljs.core.truth_(or__3127__auto__)){
return or__3127__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__3115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3115__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__9035){
var map__9037 = p__9035;
var map__9037__$1 = ((cljs.core.seq_QMARK_.call(null,map__9037))?cljs.core.apply.call(null,cljs.core.hash_map,map__9037):map__9037);
var opts = map__9037__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__9035 = null;
if (arguments.length > 1) {
var G__9038__i = 0, G__9038__a = new Array(arguments.length -  1);
while (G__9038__i < G__9038__a.length) {G__9038__a[G__9038__i] = arguments[G__9038__i + 1]; ++G__9038__i;}
  p__9035 = new cljs.core.IndexedSeq(G__9038__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__9035);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9039){
var ports = cljs.core.first(arglist__9039);
var p__9035 = cljs.core.rest(arglist__9039);
return alts_BANG___delegate(ports,p__9035);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__6134__auto___9134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6134__auto___9134){
return (function (){
var f__6135__auto__ = (function (){var switch__6078__auto__ = ((function (c__6134__auto___9134){
return (function (state_9110){
var state_val_9111 = (state_9110[(1)]);
if((state_val_9111 === (7))){
var inst_9106 = (state_9110[(2)]);
var state_9110__$1 = state_9110;
var statearr_9112_9135 = state_9110__$1;
(statearr_9112_9135[(2)] = inst_9106);

(statearr_9112_9135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9111 === (1))){
var state_9110__$1 = state_9110;
var statearr_9113_9136 = state_9110__$1;
(statearr_9113_9136[(2)] = null);

(statearr_9113_9136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9111 === (4))){
var inst_9089 = (state_9110[(7)]);
var inst_9089__$1 = (state_9110[(2)]);
var inst_9090 = (inst_9089__$1 == null);
var state_9110__$1 = (function (){var statearr_9114 = state_9110;
(statearr_9114[(7)] = inst_9089__$1);

return statearr_9114;
})();
if(cljs.core.truth_(inst_9090)){
var statearr_9115_9137 = state_9110__$1;
(statearr_9115_9137[(1)] = (5));

} else {
var statearr_9116_9138 = state_9110__$1;
(statearr_9116_9138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9111 === (13))){
var state_9110__$1 = state_9110;
var statearr_9117_9139 = state_9110__$1;
(statearr_9117_9139[(2)] = null);

(statearr_9117_9139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9111 === (6))){
var inst_9089 = (state_9110[(7)]);
var state_9110__$1 = state_9110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9110__$1,(11),to,inst_9089);
} else {
if((state_val_9111 === (3))){
var inst_9108 = (state_9110[(2)]);
var state_9110__$1 = state_9110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9110__$1,inst_9108);
} else {
if((state_val_9111 === (12))){
var state_9110__$1 = state_9110;
var statearr_9118_9140 = state_9110__$1;
(statearr_9118_9140[(2)] = null);

(statearr_9118_9140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9111 === (2))){
var state_9110__$1 = state_9110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9110__$1,(4),from);
} else {
if((state_val_9111 === (11))){
var inst_9099 = (state_9110[(2)]);
var state_9110__$1 = state_9110;
if(cljs.core.truth_(inst_9099)){
var statearr_9119_9141 = state_9110__$1;
(statearr_9119_9141[(1)] = (12));

} else {
var statearr_9120_9142 = state_9110__$1;
(statearr_9120_9142[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9111 === (9))){
var state_9110__$1 = state_9110;
var statearr_9121_9143 = state_9110__$1;
(statearr_9121_9143[(2)] = null);

(statearr_9121_9143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9111 === (5))){
var state_9110__$1 = state_9110;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9122_9144 = state_9110__$1;
(statearr_9122_9144[(1)] = (8));

} else {
var statearr_9123_9145 = state_9110__$1;
(statearr_9123_9145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9111 === (14))){
var inst_9104 = (state_9110[(2)]);
var state_9110__$1 = state_9110;
var statearr_9124_9146 = state_9110__$1;
(statearr_9124_9146[(2)] = inst_9104);

(statearr_9124_9146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9111 === (10))){
var inst_9096 = (state_9110[(2)]);
var state_9110__$1 = state_9110;
var statearr_9125_9147 = state_9110__$1;
(statearr_9125_9147[(2)] = inst_9096);

(statearr_9125_9147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9111 === (8))){
var inst_9093 = cljs.core.async.close_BANG_.call(null,to);
var state_9110__$1 = state_9110;
var statearr_9126_9148 = state_9110__$1;
(statearr_9126_9148[(2)] = inst_9093);

(statearr_9126_9148[(1)] = (10));


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
});})(c__6134__auto___9134))
;
return ((function (switch__6078__auto__,c__6134__auto___9134){
return (function() {
var state_machine__6079__auto__ = null;
var state_machine__6079__auto____0 = (function (){
var statearr_9130 = [null,null,null,null,null,null,null,null];
(statearr_9130[(0)] = state_machine__6079__auto__);

(statearr_9130[(1)] = (1));

return statearr_9130;
});
var state_machine__6079__auto____1 = (function (state_9110){
while(true){
var ret_value__6080__auto__ = (function (){try{while(true){
var result__6081__auto__ = switch__6078__auto__.call(null,state_9110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6081__auto__;
}
break;
}
}catch (e9131){if((e9131 instanceof Object)){
var ex__6082__auto__ = e9131;
var statearr_9132_9149 = state_9110;
(statearr_9132_9149[(5)] = ex__6082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9150 = state_9110;
state_9110 = G__9150;
continue;
} else {
return ret_value__6080__auto__;
}
break;
}
});
state_machine__6079__auto__ = function(state_9110){
switch(arguments.length){
case 0:
return state_machine__6079__auto____0.call(this);
case 1:
return state_machine__6079__auto____1.call(this,state_9110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6079__auto____0;
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6079__auto____1;
return state_machine__6079__auto__;
})()
;})(switch__6078__auto__,c__6134__auto___9134))
})();
var state__6136__auto__ = (function (){var statearr_9133 = f__6135__auto__.call(null);
(statearr_9133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6134__auto___9134);

return statearr_9133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6136__auto__);
});})(c__6134__auto___9134))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__9334){
var vec__9335 = p__9334;
var v = cljs.core.nth.call(null,vec__9335,(0),null);
var p = cljs.core.nth.call(null,vec__9335,(1),null);
var job = vec__9335;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6134__auto___9517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6134__auto___9517,res,vec__9335,v,p,job,jobs,results){
return (function (){
var f__6135__auto__ = (function (){var switch__6078__auto__ = ((function (c__6134__auto___9517,res,vec__9335,v,p,job,jobs,results){
return (function (state_9340){
var state_val_9341 = (state_9340[(1)]);
if((state_val_9341 === (1))){
var state_9340__$1 = state_9340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9340__$1,(2),res,v);
} else {
if((state_val_9341 === (2))){
var inst_9337 = (state_9340[(2)]);
var inst_9338 = cljs.core.async.close_BANG_.call(null,res);
var state_9340__$1 = (function (){var statearr_9342 = state_9340;
(statearr_9342[(7)] = inst_9337);

return statearr_9342;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9340__$1,inst_9338);
} else {
return null;
}
}
});})(c__6134__auto___9517,res,vec__9335,v,p,job,jobs,results))
;
return ((function (switch__6078__auto__,c__6134__auto___9517,res,vec__9335,v,p,job,jobs,results){
return (function() {
var state_machine__6079__auto__ = null;
var state_machine__6079__auto____0 = (function (){
var statearr_9346 = [null,null,null,null,null,null,null,null];
(statearr_9346[(0)] = state_machine__6079__auto__);

(statearr_9346[(1)] = (1));

return statearr_9346;
});
var state_machine__6079__auto____1 = (function (state_9340){
while(true){
var ret_value__6080__auto__ = (function (){try{while(true){
var result__6081__auto__ = switch__6078__auto__.call(null,state_9340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6081__auto__;
}
break;
}
}catch (e9347){if((e9347 instanceof Object)){
var ex__6082__auto__ = e9347;
var statearr_9348_9518 = state_9340;
(statearr_9348_9518[(5)] = ex__6082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9519 = state_9340;
state_9340 = G__9519;
continue;
} else {
return ret_value__6080__auto__;
}
break;
}
});
state_machine__6079__auto__ = function(state_9340){
switch(arguments.length){
case 0:
return state_machine__6079__auto____0.call(this);
case 1:
return state_machine__6079__auto____1.call(this,state_9340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6079__auto____0;
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6079__auto____1;
return state_machine__6079__auto__;
})()
;})(switch__6078__auto__,c__6134__auto___9517,res,vec__9335,v,p,job,jobs,results))
})();
var state__6136__auto__ = (function (){var statearr_9349 = f__6135__auto__.call(null);
(statearr_9349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6134__auto___9517);

return statearr_9349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6136__auto__);
});})(c__6134__auto___9517,res,vec__9335,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9350){
var vec__9351 = p__9350;
var v = cljs.core.nth.call(null,vec__9351,(0),null);
var p = cljs.core.nth.call(null,vec__9351,(1),null);
var job = vec__9351;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4014__auto___9520 = n;
var __9521 = (0);
while(true){
if((__9521 < n__4014__auto___9520)){
var G__9352_9522 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9352_9522) {
case "compute":
var c__6134__auto___9524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9521,c__6134__auto___9524,G__9352_9522,n__4014__auto___9520,jobs,results,process,async){
return (function (){
var f__6135__auto__ = (function (){var switch__6078__auto__ = ((function (__9521,c__6134__auto___9524,G__9352_9522,n__4014__auto___9520,jobs,results,process,async){
return (function (state_9365){
var state_val_9366 = (state_9365[(1)]);
if((state_val_9366 === (1))){
var state_9365__$1 = state_9365;
var statearr_9367_9525 = state_9365__$1;
(statearr_9367_9525[(2)] = null);

(statearr_9367_9525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (2))){
var state_9365__$1 = state_9365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9365__$1,(4),jobs);
} else {
if((state_val_9366 === (3))){
var inst_9363 = (state_9365[(2)]);
var state_9365__$1 = state_9365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9365__$1,inst_9363);
} else {
if((state_val_9366 === (4))){
var inst_9355 = (state_9365[(2)]);
var inst_9356 = process.call(null,inst_9355);
var state_9365__$1 = state_9365;
if(cljs.core.truth_(inst_9356)){
var statearr_9368_9526 = state_9365__$1;
(statearr_9368_9526[(1)] = (5));

} else {
var statearr_9369_9527 = state_9365__$1;
(statearr_9369_9527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (5))){
var state_9365__$1 = state_9365;
var statearr_9370_9528 = state_9365__$1;
(statearr_9370_9528[(2)] = null);

(statearr_9370_9528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (6))){
var state_9365__$1 = state_9365;
var statearr_9371_9529 = state_9365__$1;
(statearr_9371_9529[(2)] = null);

(statearr_9371_9529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (7))){
var inst_9361 = (state_9365[(2)]);
var state_9365__$1 = state_9365;
var statearr_9372_9530 = state_9365__$1;
(statearr_9372_9530[(2)] = inst_9361);

(statearr_9372_9530[(1)] = (3));


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
});})(__9521,c__6134__auto___9524,G__9352_9522,n__4014__auto___9520,jobs,results,process,async))
;
return ((function (__9521,switch__6078__auto__,c__6134__auto___9524,G__9352_9522,n__4014__auto___9520,jobs,results,process,async){
return (function() {
var state_machine__6079__auto__ = null;
var state_machine__6079__auto____0 = (function (){
var statearr_9376 = [null,null,null,null,null,null,null];
(statearr_9376[(0)] = state_machine__6079__auto__);

(statearr_9376[(1)] = (1));

return statearr_9376;
});
var state_machine__6079__auto____1 = (function (state_9365){
while(true){
var ret_value__6080__auto__ = (function (){try{while(true){
var result__6081__auto__ = switch__6078__auto__.call(null,state_9365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6081__auto__;
}
break;
}
}catch (e9377){if((e9377 instanceof Object)){
var ex__6082__auto__ = e9377;
var statearr_9378_9531 = state_9365;
(statearr_9378_9531[(5)] = ex__6082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9532 = state_9365;
state_9365 = G__9532;
continue;
} else {
return ret_value__6080__auto__;
}
break;
}
});
state_machine__6079__auto__ = function(state_9365){
switch(arguments.length){
case 0:
return state_machine__6079__auto____0.call(this);
case 1:
return state_machine__6079__auto____1.call(this,state_9365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6079__auto____0;
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6079__auto____1;
return state_machine__6079__auto__;
})()
;})(__9521,switch__6078__auto__,c__6134__auto___9524,G__9352_9522,n__4014__auto___9520,jobs,results,process,async))
})();
var state__6136__auto__ = (function (){var statearr_9379 = f__6135__auto__.call(null);
(statearr_9379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6134__auto___9524);

return statearr_9379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6136__auto__);
});})(__9521,c__6134__auto___9524,G__9352_9522,n__4014__auto___9520,jobs,results,process,async))
);


break;
case "async":
var c__6134__auto___9533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9521,c__6134__auto___9533,G__9352_9522,n__4014__auto___9520,jobs,results,process,async){
return (function (){
var f__6135__auto__ = (function (){var switch__6078__auto__ = ((function (__9521,c__6134__auto___9533,G__9352_9522,n__4014__auto___9520,jobs,results,process,async){
return (function (state_9392){
var state_val_9393 = (state_9392[(1)]);
if((state_val_9393 === (1))){
var state_9392__$1 = state_9392;
var statearr_9394_9534 = state_9392__$1;
(statearr_9394_9534[(2)] = null);

(statearr_9394_9534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9393 === (2))){
var state_9392__$1 = state_9392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9392__$1,(4),jobs);
} else {
if((state_val_9393 === (3))){
var inst_9390 = (state_9392[(2)]);
var state_9392__$1 = state_9392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9392__$1,inst_9390);
} else {
if((state_val_9393 === (4))){
var inst_9382 = (state_9392[(2)]);
var inst_9383 = async.call(null,inst_9382);
var state_9392__$1 = state_9392;
if(cljs.core.truth_(inst_9383)){
var statearr_9395_9535 = state_9392__$1;
(statearr_9395_9535[(1)] = (5));

} else {
var statearr_9396_9536 = state_9392__$1;
(statearr_9396_9536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9393 === (5))){
var state_9392__$1 = state_9392;
var statearr_9397_9537 = state_9392__$1;
(statearr_9397_9537[(2)] = null);

(statearr_9397_9537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9393 === (6))){
var state_9392__$1 = state_9392;
var statearr_9398_9538 = state_9392__$1;
(statearr_9398_9538[(2)] = null);

(statearr_9398_9538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9393 === (7))){
var inst_9388 = (state_9392[(2)]);
var state_9392__$1 = state_9392;
var statearr_9399_9539 = state_9392__$1;
(statearr_9399_9539[(2)] = inst_9388);

(statearr_9399_9539[(1)] = (3));


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
});})(__9521,c__6134__auto___9533,G__9352_9522,n__4014__auto___9520,jobs,results,process,async))
;
return ((function (__9521,switch__6078__auto__,c__6134__auto___9533,G__9352_9522,n__4014__auto___9520,jobs,results,process,async){
return (function() {
var state_machine__6079__auto__ = null;
var state_machine__6079__auto____0 = (function (){
var statearr_9403 = [null,null,null,null,null,null,null];
(statearr_9403[(0)] = state_machine__6079__auto__);

(statearr_9403[(1)] = (1));

return statearr_9403;
});
var state_machine__6079__auto____1 = (function (state_9392){
while(true){
var ret_value__6080__auto__ = (function (){try{while(true){
var result__6081__auto__ = switch__6078__auto__.call(null,state_9392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6081__auto__;
}
break;
}
}catch (e9404){if((e9404 instanceof Object)){
var ex__6082__auto__ = e9404;
var statearr_9405_9540 = state_9392;
(statearr_9405_9540[(5)] = ex__6082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9541 = state_9392;
state_9392 = G__9541;
continue;
} else {
return ret_value__6080__auto__;
}
break;
}
});
state_machine__6079__auto__ = function(state_9392){
switch(arguments.length){
case 0:
return state_machine__6079__auto____0.call(this);
case 1:
return state_machine__6079__auto____1.call(this,state_9392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6079__auto____0;
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6079__auto____1;
return state_machine__6079__auto__;
})()
;})(__9521,switch__6078__auto__,c__6134__auto___9533,G__9352_9522,n__4014__auto___9520,jobs,results,process,async))
})();
var state__6136__auto__ = (function (){var statearr_9406 = f__6135__auto__.call(null);
(statearr_9406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6134__auto___9533);

return statearr_9406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6136__auto__);
});})(__9521,c__6134__auto___9533,G__9352_9522,n__4014__auto___9520,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9542 = (__9521 + (1));
__9521 = G__9542;
continue;
} else {
}
break;
}

var c__6134__auto___9543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6134__auto___9543,jobs,results,process,async){
return (function (){
var f__6135__auto__ = (function (){var switch__6078__auto__ = ((function (c__6134__auto___9543,jobs,results,process,async){
return (function (state_9428){
var state_val_9429 = (state_9428[(1)]);
if((state_val_9429 === (1))){
var state_9428__$1 = state_9428;
var statearr_9430_9544 = state_9428__$1;
(statearr_9430_9544[(2)] = null);

(statearr_9430_9544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (2))){
var state_9428__$1 = state_9428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9428__$1,(4),from);
} else {
if((state_val_9429 === (3))){
var inst_9426 = (state_9428[(2)]);
var state_9428__$1 = state_9428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9428__$1,inst_9426);
} else {
if((state_val_9429 === (4))){
var inst_9409 = (state_9428[(7)]);
var inst_9409__$1 = (state_9428[(2)]);
var inst_9410 = (inst_9409__$1 == null);
var state_9428__$1 = (function (){var statearr_9431 = state_9428;
(statearr_9431[(7)] = inst_9409__$1);

return statearr_9431;
})();
if(cljs.core.truth_(inst_9410)){
var statearr_9432_9545 = state_9428__$1;
(statearr_9432_9545[(1)] = (5));

} else {
var statearr_9433_9546 = state_9428__$1;
(statearr_9433_9546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (5))){
var inst_9412 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9428__$1 = state_9428;
var statearr_9434_9547 = state_9428__$1;
(statearr_9434_9547[(2)] = inst_9412);

(statearr_9434_9547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (6))){
var inst_9409 = (state_9428[(7)]);
var inst_9414 = (state_9428[(8)]);
var inst_9414__$1 = cljs.core.async.chan.call(null,(1));
var inst_9415 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9416 = [inst_9409,inst_9414__$1];
var inst_9417 = (new cljs.core.PersistentVector(null,2,(5),inst_9415,inst_9416,null));
var state_9428__$1 = (function (){var statearr_9435 = state_9428;
(statearr_9435[(8)] = inst_9414__$1);

return statearr_9435;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9428__$1,(8),jobs,inst_9417);
} else {
if((state_val_9429 === (7))){
var inst_9424 = (state_9428[(2)]);
var state_9428__$1 = state_9428;
var statearr_9436_9548 = state_9428__$1;
(statearr_9436_9548[(2)] = inst_9424);

(statearr_9436_9548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (8))){
var inst_9414 = (state_9428[(8)]);
var inst_9419 = (state_9428[(2)]);
var state_9428__$1 = (function (){var statearr_9437 = state_9428;
(statearr_9437[(9)] = inst_9419);

return statearr_9437;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9428__$1,(9),results,inst_9414);
} else {
if((state_val_9429 === (9))){
var inst_9421 = (state_9428[(2)]);
var state_9428__$1 = (function (){var statearr_9438 = state_9428;
(statearr_9438[(10)] = inst_9421);

return statearr_9438;
})();
var statearr_9439_9549 = state_9428__$1;
(statearr_9439_9549[(2)] = null);

(statearr_9439_9549[(1)] = (2));


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
});})(c__6134__auto___9543,jobs,results,process,async))
;
return ((function (switch__6078__auto__,c__6134__auto___9543,jobs,results,process,async){
return (function() {
var state_machine__6079__auto__ = null;
var state_machine__6079__auto____0 = (function (){
var statearr_9443 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9443[(0)] = state_machine__6079__auto__);

(statearr_9443[(1)] = (1));

return statearr_9443;
});
var state_machine__6079__auto____1 = (function (state_9428){
while(true){
var ret_value__6080__auto__ = (function (){try{while(true){
var result__6081__auto__ = switch__6078__auto__.call(null,state_9428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6081__auto__;
}
break;
}
}catch (e9444){if((e9444 instanceof Object)){
var ex__6082__auto__ = e9444;
var statearr_9445_9550 = state_9428;
(statearr_9445_9550[(5)] = ex__6082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9551 = state_9428;
state_9428 = G__9551;
continue;
} else {
return ret_value__6080__auto__;
}
break;
}
});
state_machine__6079__auto__ = function(state_9428){
switch(arguments.length){
case 0:
return state_machine__6079__auto____0.call(this);
case 1:
return state_machine__6079__auto____1.call(this,state_9428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6079__auto____0;
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6079__auto____1;
return state_machine__6079__auto__;
})()
;})(switch__6078__auto__,c__6134__auto___9543,jobs,results,process,async))
})();
var state__6136__auto__ = (function (){var statearr_9446 = f__6135__auto__.call(null);
(statearr_9446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6134__auto___9543);

return statearr_9446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6136__auto__);
});})(c__6134__auto___9543,jobs,results,process,async))
);


var c__6134__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6134__auto__,jobs,results,process,async){
return (function (){
var f__6135__auto__ = (function (){var switch__6078__auto__ = ((function (c__6134__auto__,jobs,results,process,async){
return (function (state_9484){
var state_val_9485 = (state_9484[(1)]);
if((state_val_9485 === (7))){
var inst_9480 = (state_9484[(2)]);
var state_9484__$1 = state_9484;
var statearr_9486_9552 = state_9484__$1;
(statearr_9486_9552[(2)] = inst_9480);

(statearr_9486_9552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (20))){
var state_9484__$1 = state_9484;
var statearr_9487_9553 = state_9484__$1;
(statearr_9487_9553[(2)] = null);

(statearr_9487_9553[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (1))){
var state_9484__$1 = state_9484;
var statearr_9488_9554 = state_9484__$1;
(statearr_9488_9554[(2)] = null);

(statearr_9488_9554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (4))){
var inst_9449 = (state_9484[(7)]);
var inst_9449__$1 = (state_9484[(2)]);
var inst_9450 = (inst_9449__$1 == null);
var state_9484__$1 = (function (){var statearr_9489 = state_9484;
(statearr_9489[(7)] = inst_9449__$1);

return statearr_9489;
})();
if(cljs.core.truth_(inst_9450)){
var statearr_9490_9555 = state_9484__$1;
(statearr_9490_9555[(1)] = (5));

} else {
var statearr_9491_9556 = state_9484__$1;
(statearr_9491_9556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (15))){
var inst_9462 = (state_9484[(8)]);
var state_9484__$1 = state_9484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9484__$1,(18),to,inst_9462);
} else {
if((state_val_9485 === (21))){
var inst_9475 = (state_9484[(2)]);
var state_9484__$1 = state_9484;
var statearr_9492_9557 = state_9484__$1;
(statearr_9492_9557[(2)] = inst_9475);

(statearr_9492_9557[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (13))){
var inst_9477 = (state_9484[(2)]);
var state_9484__$1 = (function (){var statearr_9493 = state_9484;
(statearr_9493[(9)] = inst_9477);

return statearr_9493;
})();
var statearr_9494_9558 = state_9484__$1;
(statearr_9494_9558[(2)] = null);

(statearr_9494_9558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (6))){
var inst_9449 = (state_9484[(7)]);
var state_9484__$1 = state_9484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9484__$1,(11),inst_9449);
} else {
if((state_val_9485 === (17))){
var inst_9470 = (state_9484[(2)]);
var state_9484__$1 = state_9484;
if(cljs.core.truth_(inst_9470)){
var statearr_9495_9559 = state_9484__$1;
(statearr_9495_9559[(1)] = (19));

} else {
var statearr_9496_9560 = state_9484__$1;
(statearr_9496_9560[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (3))){
var inst_9482 = (state_9484[(2)]);
var state_9484__$1 = state_9484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9484__$1,inst_9482);
} else {
if((state_val_9485 === (12))){
var inst_9459 = (state_9484[(10)]);
var state_9484__$1 = state_9484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9484__$1,(14),inst_9459);
} else {
if((state_val_9485 === (2))){
var state_9484__$1 = state_9484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9484__$1,(4),results);
} else {
if((state_val_9485 === (19))){
var state_9484__$1 = state_9484;
var statearr_9497_9561 = state_9484__$1;
(statearr_9497_9561[(2)] = null);

(statearr_9497_9561[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (11))){
var inst_9459 = (state_9484[(2)]);
var state_9484__$1 = (function (){var statearr_9498 = state_9484;
(statearr_9498[(10)] = inst_9459);

return statearr_9498;
})();
var statearr_9499_9562 = state_9484__$1;
(statearr_9499_9562[(2)] = null);

(statearr_9499_9562[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (9))){
var state_9484__$1 = state_9484;
var statearr_9500_9563 = state_9484__$1;
(statearr_9500_9563[(2)] = null);

(statearr_9500_9563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (5))){
var state_9484__$1 = state_9484;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9501_9564 = state_9484__$1;
(statearr_9501_9564[(1)] = (8));

} else {
var statearr_9502_9565 = state_9484__$1;
(statearr_9502_9565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (14))){
var inst_9464 = (state_9484[(11)]);
var inst_9462 = (state_9484[(8)]);
var inst_9462__$1 = (state_9484[(2)]);
var inst_9463 = (inst_9462__$1 == null);
var inst_9464__$1 = cljs.core.not.call(null,inst_9463);
var state_9484__$1 = (function (){var statearr_9503 = state_9484;
(statearr_9503[(11)] = inst_9464__$1);

(statearr_9503[(8)] = inst_9462__$1);

return statearr_9503;
})();
if(inst_9464__$1){
var statearr_9504_9566 = state_9484__$1;
(statearr_9504_9566[(1)] = (15));

} else {
var statearr_9505_9567 = state_9484__$1;
(statearr_9505_9567[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (16))){
var inst_9464 = (state_9484[(11)]);
var state_9484__$1 = state_9484;
var statearr_9506_9568 = state_9484__$1;
(statearr_9506_9568[(2)] = inst_9464);

(statearr_9506_9568[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (10))){
var inst_9456 = (state_9484[(2)]);
var state_9484__$1 = state_9484;
var statearr_9507_9569 = state_9484__$1;
(statearr_9507_9569[(2)] = inst_9456);

(statearr_9507_9569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (18))){
var inst_9467 = (state_9484[(2)]);
var state_9484__$1 = state_9484;
var statearr_9508_9570 = state_9484__$1;
(statearr_9508_9570[(2)] = inst_9467);

(statearr_9508_9570[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (8))){
var inst_9453 = cljs.core.async.close_BANG_.call(null,to);
var state_9484__$1 = state_9484;
var statearr_9509_9571 = state_9484__$1;
(statearr_9509_9571[(2)] = inst_9453);

(statearr_9509_9571[(1)] = (10));


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
});})(c__6134__auto__,jobs,results,process,async))
;
return ((function (switch__6078__auto__,c__6134__auto__,jobs,results,process,async){
return (function() {
var state_machine__6079__auto__ = null;
var state_machine__6079__auto____0 = (function (){
var statearr_9513 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9513[(0)] = state_machine__6079__auto__);

(statearr_9513[(1)] = (1));

return statearr_9513;
});
var state_machine__6079__auto____1 = (function (state_9484){
while(true){
var ret_value__6080__auto__ = (function (){try{while(true){
var result__6081__auto__ = switch__6078__auto__.call(null,state_9484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6081__auto__;
}
break;
}
}catch (e9514){if((e9514 instanceof Object)){
var ex__6082__auto__ = e9514;
var statearr_9515_9572 = state_9484;
(statearr_9515_9572[(5)] = ex__6082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9573 = state_9484;
state_9484 = G__9573;
continue;
} else {
return ret_value__6080__auto__;
}
break;
}
});
state_machine__6079__auto__ = function(state_9484){
switch(arguments.length){
case 0:
return state_machine__6079__auto____0.call(this);
case 1:
return state_machine__6079__auto____1.call(this,state_9484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6079__auto____0;
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6079__auto____1;
return state_machine__6079__auto__;
})()
;})(switch__6078__auto__,c__6134__auto__,jobs,results,process,async))
})();
var state__6136__auto__ = (function (){var statearr_9516 = f__6135__auto__.call(null);
(statearr_9516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6134__auto__);

return statearr_9516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6136__auto__);
});})(c__6134__auto__,jobs,results,process,async))
);

return c__6134__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6134__auto___9674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6134__auto___9674,tc,fc){
return (function (){
var f__6135__auto__ = (function (){var switch__6078__auto__ = ((function (c__6134__auto___9674,tc,fc){
return (function (state_9649){
var state_val_9650 = (state_9649[(1)]);
if((state_val_9650 === (7))){
var inst_9645 = (state_9649[(2)]);
var state_9649__$1 = state_9649;
var statearr_9651_9675 = state_9649__$1;
(statearr_9651_9675[(2)] = inst_9645);

(statearr_9651_9675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9650 === (1))){
var state_9649__$1 = state_9649;
var statearr_9652_9676 = state_9649__$1;
(statearr_9652_9676[(2)] = null);

(statearr_9652_9676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9650 === (4))){
var inst_9626 = (state_9649[(7)]);
var inst_9626__$1 = (state_9649[(2)]);
var inst_9627 = (inst_9626__$1 == null);
var state_9649__$1 = (function (){var statearr_9653 = state_9649;
(statearr_9653[(7)] = inst_9626__$1);

return statearr_9653;
})();
if(cljs.core.truth_(inst_9627)){
var statearr_9654_9677 = state_9649__$1;
(statearr_9654_9677[(1)] = (5));

} else {
var statearr_9655_9678 = state_9649__$1;
(statearr_9655_9678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9650 === (13))){
var state_9649__$1 = state_9649;
var statearr_9656_9679 = state_9649__$1;
(statearr_9656_9679[(2)] = null);

(statearr_9656_9679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9650 === (6))){
var inst_9626 = (state_9649[(7)]);
var inst_9632 = p.call(null,inst_9626);
var state_9649__$1 = state_9649;
if(cljs.core.truth_(inst_9632)){
var statearr_9657_9680 = state_9649__$1;
(statearr_9657_9680[(1)] = (9));

} else {
var statearr_9658_9681 = state_9649__$1;
(statearr_9658_9681[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9650 === (3))){
var inst_9647 = (state_9649[(2)]);
var state_9649__$1 = state_9649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9649__$1,inst_9647);
} else {
if((state_val_9650 === (12))){
var state_9649__$1 = state_9649;
var statearr_9659_9682 = state_9649__$1;
(statearr_9659_9682[(2)] = null);

(statearr_9659_9682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9650 === (2))){
var state_9649__$1 = state_9649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9649__$1,(4),ch);
} else {
if((state_val_9650 === (11))){
var inst_9626 = (state_9649[(7)]);
var inst_9636 = (state_9649[(2)]);
var state_9649__$1 = state_9649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9649__$1,(8),inst_9636,inst_9626);
} else {
if((state_val_9650 === (9))){
var state_9649__$1 = state_9649;
var statearr_9660_9683 = state_9649__$1;
(statearr_9660_9683[(2)] = tc);

(statearr_9660_9683[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9650 === (5))){
var inst_9629 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9630 = cljs.core.async.close_BANG_.call(null,fc);
var state_9649__$1 = (function (){var statearr_9661 = state_9649;
(statearr_9661[(8)] = inst_9629);

return statearr_9661;
})();
var statearr_9662_9684 = state_9649__$1;
(statearr_9662_9684[(2)] = inst_9630);

(statearr_9662_9684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9650 === (14))){
var inst_9643 = (state_9649[(2)]);
var state_9649__$1 = state_9649;
var statearr_9663_9685 = state_9649__$1;
(statearr_9663_9685[(2)] = inst_9643);

(statearr_9663_9685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9650 === (10))){
var state_9649__$1 = state_9649;
var statearr_9664_9686 = state_9649__$1;
(statearr_9664_9686[(2)] = fc);

(statearr_9664_9686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9650 === (8))){
var inst_9638 = (state_9649[(2)]);
var state_9649__$1 = state_9649;
if(cljs.core.truth_(inst_9638)){
var statearr_9665_9687 = state_9649__$1;
(statearr_9665_9687[(1)] = (12));

} else {
var statearr_9666_9688 = state_9649__$1;
(statearr_9666_9688[(1)] = (13));

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
});})(c__6134__auto___9674,tc,fc))
;
return ((function (switch__6078__auto__,c__6134__auto___9674,tc,fc){
return (function() {
var state_machine__6079__auto__ = null;
var state_machine__6079__auto____0 = (function (){
var statearr_9670 = [null,null,null,null,null,null,null,null,null];
(statearr_9670[(0)] = state_machine__6079__auto__);

(statearr_9670[(1)] = (1));

return statearr_9670;
});
var state_machine__6079__auto____1 = (function (state_9649){
while(true){
var ret_value__6080__auto__ = (function (){try{while(true){
var result__6081__auto__ = switch__6078__auto__.call(null,state_9649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6081__auto__;
}
break;
}
}catch (e9671){if((e9671 instanceof Object)){
var ex__6082__auto__ = e9671;
var statearr_9672_9689 = state_9649;
(statearr_9672_9689[(5)] = ex__6082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9690 = state_9649;
state_9649 = G__9690;
continue;
} else {
return ret_value__6080__auto__;
}
break;
}
});
state_machine__6079__auto__ = function(state_9649){
switch(arguments.length){
case 0:
return state_machine__6079__auto____0.call(this);
case 1:
return state_machine__6079__auto____1.call(this,state_9649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6079__auto____0;
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6079__auto____1;
return state_machine__6079__auto__;
})()
;})(switch__6078__auto__,c__6134__auto___9674,tc,fc))
})();
var state__6136__auto__ = (function (){var statearr_9673 = f__6135__auto__.call(null);
(statearr_9673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6134__auto___9674);

return statearr_9673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6136__auto__);
});})(c__6134__auto___9674,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__6134__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6134__auto__){
return (function (){
var f__6135__auto__ = (function (){var switch__6078__auto__ = ((function (c__6134__auto__){
return (function (state_9737){
var state_val_9738 = (state_9737[(1)]);
if((state_val_9738 === (1))){
var inst_9723 = init;
var state_9737__$1 = (function (){var statearr_9739 = state_9737;
(statearr_9739[(7)] = inst_9723);

return statearr_9739;
})();
var statearr_9740_9755 = state_9737__$1;
(statearr_9740_9755[(2)] = null);

(statearr_9740_9755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9738 === (2))){
var state_9737__$1 = state_9737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9737__$1,(4),ch);
} else {
if((state_val_9738 === (3))){
var inst_9735 = (state_9737[(2)]);
var state_9737__$1 = state_9737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9737__$1,inst_9735);
} else {
if((state_val_9738 === (4))){
var inst_9726 = (state_9737[(8)]);
var inst_9726__$1 = (state_9737[(2)]);
var inst_9727 = (inst_9726__$1 == null);
var state_9737__$1 = (function (){var statearr_9741 = state_9737;
(statearr_9741[(8)] = inst_9726__$1);

return statearr_9741;
})();
if(cljs.core.truth_(inst_9727)){
var statearr_9742_9756 = state_9737__$1;
(statearr_9742_9756[(1)] = (5));

} else {
var statearr_9743_9757 = state_9737__$1;
(statearr_9743_9757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9738 === (5))){
var inst_9723 = (state_9737[(7)]);
var state_9737__$1 = state_9737;
var statearr_9744_9758 = state_9737__$1;
(statearr_9744_9758[(2)] = inst_9723);

(statearr_9744_9758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9738 === (6))){
var inst_9726 = (state_9737[(8)]);
var inst_9723 = (state_9737[(7)]);
var inst_9730 = f.call(null,inst_9723,inst_9726);
var inst_9723__$1 = inst_9730;
var state_9737__$1 = (function (){var statearr_9745 = state_9737;
(statearr_9745[(7)] = inst_9723__$1);

return statearr_9745;
})();
var statearr_9746_9759 = state_9737__$1;
(statearr_9746_9759[(2)] = null);

(statearr_9746_9759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9738 === (7))){
var inst_9733 = (state_9737[(2)]);
var state_9737__$1 = state_9737;
var statearr_9747_9760 = state_9737__$1;
(statearr_9747_9760[(2)] = inst_9733);

(statearr_9747_9760[(1)] = (3));


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
});})(c__6134__auto__))
;
return ((function (switch__6078__auto__,c__6134__auto__){
return (function() {
var state_machine__6079__auto__ = null;
var state_machine__6079__auto____0 = (function (){
var statearr_9751 = [null,null,null,null,null,null,null,null,null];
(statearr_9751[(0)] = state_machine__6079__auto__);

(statearr_9751[(1)] = (1));

return statearr_9751;
});
var state_machine__6079__auto____1 = (function (state_9737){
while(true){
var ret_value__6080__auto__ = (function (){try{while(true){
var result__6081__auto__ = switch__6078__auto__.call(null,state_9737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6081__auto__;
}
break;
}
}catch (e9752){if((e9752 instanceof Object)){
var ex__6082__auto__ = e9752;
var statearr_9753_9761 = state_9737;
(statearr_9753_9761[(5)] = ex__6082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9762 = state_9737;
state_9737 = G__9762;
continue;
} else {
return ret_value__6080__auto__;
}
break;
}
});
state_machine__6079__auto__ = function(state_9737){
switch(arguments.length){
case 0:
return state_machine__6079__auto____0.call(this);
case 1:
return state_machine__6079__auto____1.call(this,state_9737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6079__auto____0;
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6079__auto____1;
return state_machine__6079__auto__;
})()
;})(switch__6078__auto__,c__6134__auto__))
})();
var state__6136__auto__ = (function (){var statearr_9754 = f__6135__auto__.call(null);
(statearr_9754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6134__auto__);

return statearr_9754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6136__auto__);
});})(c__6134__auto__))
);

return c__6134__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__6134__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6134__auto__){
return (function (){
var f__6135__auto__ = (function (){var switch__6078__auto__ = ((function (c__6134__auto__){
return (function (state_9836){
var state_val_9837 = (state_9836[(1)]);
if((state_val_9837 === (7))){
var inst_9818 = (state_9836[(2)]);
var state_9836__$1 = state_9836;
var statearr_9838_9861 = state_9836__$1;
(statearr_9838_9861[(2)] = inst_9818);

(statearr_9838_9861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9837 === (1))){
var inst_9812 = cljs.core.seq.call(null,coll);
var inst_9813 = inst_9812;
var state_9836__$1 = (function (){var statearr_9839 = state_9836;
(statearr_9839[(7)] = inst_9813);

return statearr_9839;
})();
var statearr_9840_9862 = state_9836__$1;
(statearr_9840_9862[(2)] = null);

(statearr_9840_9862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9837 === (4))){
var inst_9813 = (state_9836[(7)]);
var inst_9816 = cljs.core.first.call(null,inst_9813);
var state_9836__$1 = state_9836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9836__$1,(7),ch,inst_9816);
} else {
if((state_val_9837 === (13))){
var inst_9830 = (state_9836[(2)]);
var state_9836__$1 = state_9836;
var statearr_9841_9863 = state_9836__$1;
(statearr_9841_9863[(2)] = inst_9830);

(statearr_9841_9863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9837 === (6))){
var inst_9821 = (state_9836[(2)]);
var state_9836__$1 = state_9836;
if(cljs.core.truth_(inst_9821)){
var statearr_9842_9864 = state_9836__$1;
(statearr_9842_9864[(1)] = (8));

} else {
var statearr_9843_9865 = state_9836__$1;
(statearr_9843_9865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9837 === (3))){
var inst_9834 = (state_9836[(2)]);
var state_9836__$1 = state_9836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9836__$1,inst_9834);
} else {
if((state_val_9837 === (12))){
var state_9836__$1 = state_9836;
var statearr_9844_9866 = state_9836__$1;
(statearr_9844_9866[(2)] = null);

(statearr_9844_9866[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9837 === (2))){
var inst_9813 = (state_9836[(7)]);
var state_9836__$1 = state_9836;
if(cljs.core.truth_(inst_9813)){
var statearr_9845_9867 = state_9836__$1;
(statearr_9845_9867[(1)] = (4));

} else {
var statearr_9846_9868 = state_9836__$1;
(statearr_9846_9868[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9837 === (11))){
var inst_9827 = cljs.core.async.close_BANG_.call(null,ch);
var state_9836__$1 = state_9836;
var statearr_9847_9869 = state_9836__$1;
(statearr_9847_9869[(2)] = inst_9827);

(statearr_9847_9869[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9837 === (9))){
var state_9836__$1 = state_9836;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9848_9870 = state_9836__$1;
(statearr_9848_9870[(1)] = (11));

} else {
var statearr_9849_9871 = state_9836__$1;
(statearr_9849_9871[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9837 === (5))){
var inst_9813 = (state_9836[(7)]);
var state_9836__$1 = state_9836;
var statearr_9850_9872 = state_9836__$1;
(statearr_9850_9872[(2)] = inst_9813);

(statearr_9850_9872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9837 === (10))){
var inst_9832 = (state_9836[(2)]);
var state_9836__$1 = state_9836;
var statearr_9851_9873 = state_9836__$1;
(statearr_9851_9873[(2)] = inst_9832);

(statearr_9851_9873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9837 === (8))){
var inst_9813 = (state_9836[(7)]);
var inst_9823 = cljs.core.next.call(null,inst_9813);
var inst_9813__$1 = inst_9823;
var state_9836__$1 = (function (){var statearr_9852 = state_9836;
(statearr_9852[(7)] = inst_9813__$1);

return statearr_9852;
})();
var statearr_9853_9874 = state_9836__$1;
(statearr_9853_9874[(2)] = null);

(statearr_9853_9874[(1)] = (2));


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
});})(c__6134__auto__))
;
return ((function (switch__6078__auto__,c__6134__auto__){
return (function() {
var state_machine__6079__auto__ = null;
var state_machine__6079__auto____0 = (function (){
var statearr_9857 = [null,null,null,null,null,null,null,null];
(statearr_9857[(0)] = state_machine__6079__auto__);

(statearr_9857[(1)] = (1));

return statearr_9857;
});
var state_machine__6079__auto____1 = (function (state_9836){
while(true){
var ret_value__6080__auto__ = (function (){try{while(true){
var result__6081__auto__ = switch__6078__auto__.call(null,state_9836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6081__auto__;
}
break;
}
}catch (e9858){if((e9858 instanceof Object)){
var ex__6082__auto__ = e9858;
var statearr_9859_9875 = state_9836;
(statearr_9859_9875[(5)] = ex__6082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9876 = state_9836;
state_9836 = G__9876;
continue;
} else {
return ret_value__6080__auto__;
}
break;
}
});
state_machine__6079__auto__ = function(state_9836){
switch(arguments.length){
case 0:
return state_machine__6079__auto____0.call(this);
case 1:
return state_machine__6079__auto____1.call(this,state_9836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6079__auto____0;
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6079__auto____1;
return state_machine__6079__auto__;
})()
;})(switch__6078__auto__,c__6134__auto__))
})();
var state__6136__auto__ = (function (){var statearr_9860 = f__6135__auto__.call(null);
(statearr_9860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6134__auto__);

return statearr_9860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6136__auto__);
});})(c__6134__auto__))
);

return c__6134__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj9878 = {};
return obj9878;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3115__auto__ = _;
if(and__3115__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3115__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__3771__auto__ = (((_ == null))?null:_);
return (function (){var or__3127__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3771__auto__)]);
if(or__3127__auto__){
return or__3127__auto__;
} else {
var or__3127__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3127__auto____$1){
return or__3127__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj9880 = {};
return obj9880;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3115__auto__ = m;
if(and__3115__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3115__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__3771__auto__ = (((m == null))?null:m);
return (function (){var or__3127__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3771__auto__)]);
if(or__3127__auto__){
return or__3127__auto__;
} else {
var or__3127__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3127__auto____$1){
return or__3127__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3115__auto__ = m;
if(and__3115__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3115__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__3771__auto__ = (((m == null))?null:m);
return (function (){var or__3127__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3771__auto__)]);
if(or__3127__auto__){
return or__3127__auto__;
} else {
var or__3127__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3127__auto____$1){
return or__3127__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3115__auto__ = m;
if(and__3115__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3115__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__3771__auto__ = (((m == null))?null:m);
return (function (){var or__3127__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3771__auto__)]);
if(or__3127__auto__){
return or__3127__auto__;
} else {
var or__3127__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3127__auto____$1){
return or__3127__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t10102 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10102 = (function (mult,ch,cs,meta10103){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta10103 = meta10103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10104,meta10103__$1){
var self__ = this;
var _10104__$1 = this;
return (new cljs.core.async.t10102(self__.mult,self__.ch,self__.cs,meta10103__$1));
});})(cs))
;

cljs.core.async.t10102.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10104){
var self__ = this;
var _10104__$1 = this;
return self__.meta10103;
});})(cs))
;

cljs.core.async.t10102.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t10102.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t10102.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t10102.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t10102.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t10102.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t10102.cljs$lang$type = true;

cljs.core.async.t10102.cljs$lang$ctorStr = "cljs.core.async/t10102";

cljs.core.async.t10102.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3714__auto__,writer__3715__auto__,opt__3716__auto__){
return cljs.core._write.call(null,writer__3715__auto__,"cljs.core.async/t10102");
});})(cs))
;

cljs.core.async.__GT_t10102 = ((function (cs){
return (function __GT_t10102(mult__$1,ch__$1,cs__$1,meta10103){
return (new cljs.core.async.t10102(mult__$1,ch__$1,cs__$1,meta10103));
});})(cs))
;

}

return (new cljs.core.async.t10102(mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6134__auto___10323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6134__auto___10323,cs,m,dchan,dctr,done){
return (function (){
var f__6135__auto__ = (function (){var switch__6078__auto__ = ((function (c__6134__auto___10323,cs,m,dchan,dctr,done){
return (function (state_10235){
var state_val_10236 = (state_10235[(1)]);
if((state_val_10236 === (7))){
var inst_10231 = (state_10235[(2)]);
var state_10235__$1 = state_10235;
var statearr_10237_10324 = state_10235__$1;
(statearr_10237_10324[(2)] = inst_10231);

(statearr_10237_10324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (20))){
var inst_10136 = (state_10235[(7)]);
var inst_10146 = cljs.core.first.call(null,inst_10136);
var inst_10147 = cljs.core.nth.call(null,inst_10146,(0),null);
var inst_10148 = cljs.core.nth.call(null,inst_10146,(1),null);
var state_10235__$1 = (function (){var statearr_10238 = state_10235;
(statearr_10238[(8)] = inst_10147);

return statearr_10238;
})();
if(cljs.core.truth_(inst_10148)){
var statearr_10239_10325 = state_10235__$1;
(statearr_10239_10325[(1)] = (22));

} else {
var statearr_10240_10326 = state_10235__$1;
(statearr_10240_10326[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (27))){
var inst_10176 = (state_10235[(9)]);
var inst_10107 = (state_10235[(10)]);
var inst_10178 = (state_10235[(11)]);
var inst_10183 = (state_10235[(12)]);
var inst_10183__$1 = cljs.core._nth.call(null,inst_10176,inst_10178);
var inst_10184 = cljs.core.async.put_BANG_.call(null,inst_10183__$1,inst_10107,done);
var state_10235__$1 = (function (){var statearr_10241 = state_10235;
(statearr_10241[(12)] = inst_10183__$1);

return statearr_10241;
})();
if(cljs.core.truth_(inst_10184)){
var statearr_10242_10327 = state_10235__$1;
(statearr_10242_10327[(1)] = (30));

} else {
var statearr_10243_10328 = state_10235__$1;
(statearr_10243_10328[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (1))){
var state_10235__$1 = state_10235;
var statearr_10244_10329 = state_10235__$1;
(statearr_10244_10329[(2)] = null);

(statearr_10244_10329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (24))){
var inst_10136 = (state_10235[(7)]);
var inst_10153 = (state_10235[(2)]);
var inst_10154 = cljs.core.next.call(null,inst_10136);
var inst_10116 = inst_10154;
var inst_10117 = null;
var inst_10118 = (0);
var inst_10119 = (0);
var state_10235__$1 = (function (){var statearr_10245 = state_10235;
(statearr_10245[(13)] = inst_10119);

(statearr_10245[(14)] = inst_10116);

(statearr_10245[(15)] = inst_10118);

(statearr_10245[(16)] = inst_10153);

(statearr_10245[(17)] = inst_10117);

return statearr_10245;
})();
var statearr_10246_10330 = state_10235__$1;
(statearr_10246_10330[(2)] = null);

(statearr_10246_10330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (39))){
var state_10235__$1 = state_10235;
var statearr_10250_10331 = state_10235__$1;
(statearr_10250_10331[(2)] = null);

(statearr_10250_10331[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (4))){
var inst_10107 = (state_10235[(10)]);
var inst_10107__$1 = (state_10235[(2)]);
var inst_10108 = (inst_10107__$1 == null);
var state_10235__$1 = (function (){var statearr_10251 = state_10235;
(statearr_10251[(10)] = inst_10107__$1);

return statearr_10251;
})();
if(cljs.core.truth_(inst_10108)){
var statearr_10252_10332 = state_10235__$1;
(statearr_10252_10332[(1)] = (5));

} else {
var statearr_10253_10333 = state_10235__$1;
(statearr_10253_10333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (15))){
var inst_10119 = (state_10235[(13)]);
var inst_10116 = (state_10235[(14)]);
var inst_10118 = (state_10235[(15)]);
var inst_10117 = (state_10235[(17)]);
var inst_10132 = (state_10235[(2)]);
var inst_10133 = (inst_10119 + (1));
var tmp10247 = inst_10116;
var tmp10248 = inst_10118;
var tmp10249 = inst_10117;
var inst_10116__$1 = tmp10247;
var inst_10117__$1 = tmp10249;
var inst_10118__$1 = tmp10248;
var inst_10119__$1 = inst_10133;
var state_10235__$1 = (function (){var statearr_10254 = state_10235;
(statearr_10254[(13)] = inst_10119__$1);

(statearr_10254[(14)] = inst_10116__$1);

(statearr_10254[(18)] = inst_10132);

(statearr_10254[(15)] = inst_10118__$1);

(statearr_10254[(17)] = inst_10117__$1);

return statearr_10254;
})();
var statearr_10255_10334 = state_10235__$1;
(statearr_10255_10334[(2)] = null);

(statearr_10255_10334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (21))){
var inst_10157 = (state_10235[(2)]);
var state_10235__$1 = state_10235;
var statearr_10259_10335 = state_10235__$1;
(statearr_10259_10335[(2)] = inst_10157);

(statearr_10259_10335[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (31))){
var inst_10183 = (state_10235[(12)]);
var inst_10187 = done.call(null,null);
var inst_10188 = cljs.core.async.untap_STAR_.call(null,m,inst_10183);
var state_10235__$1 = (function (){var statearr_10260 = state_10235;
(statearr_10260[(19)] = inst_10187);

return statearr_10260;
})();
var statearr_10261_10336 = state_10235__$1;
(statearr_10261_10336[(2)] = inst_10188);

(statearr_10261_10336[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (32))){
var inst_10175 = (state_10235[(20)]);
var inst_10176 = (state_10235[(9)]);
var inst_10177 = (state_10235[(21)]);
var inst_10178 = (state_10235[(11)]);
var inst_10190 = (state_10235[(2)]);
var inst_10191 = (inst_10178 + (1));
var tmp10256 = inst_10175;
var tmp10257 = inst_10176;
var tmp10258 = inst_10177;
var inst_10175__$1 = tmp10256;
var inst_10176__$1 = tmp10257;
var inst_10177__$1 = tmp10258;
var inst_10178__$1 = inst_10191;
var state_10235__$1 = (function (){var statearr_10262 = state_10235;
(statearr_10262[(20)] = inst_10175__$1);

(statearr_10262[(9)] = inst_10176__$1);

(statearr_10262[(21)] = inst_10177__$1);

(statearr_10262[(22)] = inst_10190);

(statearr_10262[(11)] = inst_10178__$1);

return statearr_10262;
})();
var statearr_10263_10337 = state_10235__$1;
(statearr_10263_10337[(2)] = null);

(statearr_10263_10337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (40))){
var inst_10203 = (state_10235[(23)]);
var inst_10207 = done.call(null,null);
var inst_10208 = cljs.core.async.untap_STAR_.call(null,m,inst_10203);
var state_10235__$1 = (function (){var statearr_10264 = state_10235;
(statearr_10264[(24)] = inst_10207);

return statearr_10264;
})();
var statearr_10265_10338 = state_10235__$1;
(statearr_10265_10338[(2)] = inst_10208);

(statearr_10265_10338[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (33))){
var inst_10194 = (state_10235[(25)]);
var inst_10196 = cljs.core.chunked_seq_QMARK_.call(null,inst_10194);
var state_10235__$1 = state_10235;
if(inst_10196){
var statearr_10266_10339 = state_10235__$1;
(statearr_10266_10339[(1)] = (36));

} else {
var statearr_10267_10340 = state_10235__$1;
(statearr_10267_10340[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (13))){
var inst_10126 = (state_10235[(26)]);
var inst_10129 = cljs.core.async.close_BANG_.call(null,inst_10126);
var state_10235__$1 = state_10235;
var statearr_10268_10341 = state_10235__$1;
(statearr_10268_10341[(2)] = inst_10129);

(statearr_10268_10341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (22))){
var inst_10147 = (state_10235[(8)]);
var inst_10150 = cljs.core.async.close_BANG_.call(null,inst_10147);
var state_10235__$1 = state_10235;
var statearr_10269_10342 = state_10235__$1;
(statearr_10269_10342[(2)] = inst_10150);

(statearr_10269_10342[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (36))){
var inst_10194 = (state_10235[(25)]);
var inst_10198 = cljs.core.chunk_first.call(null,inst_10194);
var inst_10199 = cljs.core.chunk_rest.call(null,inst_10194);
var inst_10200 = cljs.core.count.call(null,inst_10198);
var inst_10175 = inst_10199;
var inst_10176 = inst_10198;
var inst_10177 = inst_10200;
var inst_10178 = (0);
var state_10235__$1 = (function (){var statearr_10270 = state_10235;
(statearr_10270[(20)] = inst_10175);

(statearr_10270[(9)] = inst_10176);

(statearr_10270[(21)] = inst_10177);

(statearr_10270[(11)] = inst_10178);

return statearr_10270;
})();
var statearr_10271_10343 = state_10235__$1;
(statearr_10271_10343[(2)] = null);

(statearr_10271_10343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (41))){
var inst_10194 = (state_10235[(25)]);
var inst_10210 = (state_10235[(2)]);
var inst_10211 = cljs.core.next.call(null,inst_10194);
var inst_10175 = inst_10211;
var inst_10176 = null;
var inst_10177 = (0);
var inst_10178 = (0);
var state_10235__$1 = (function (){var statearr_10272 = state_10235;
(statearr_10272[(20)] = inst_10175);

(statearr_10272[(27)] = inst_10210);

(statearr_10272[(9)] = inst_10176);

(statearr_10272[(21)] = inst_10177);

(statearr_10272[(11)] = inst_10178);

return statearr_10272;
})();
var statearr_10273_10344 = state_10235__$1;
(statearr_10273_10344[(2)] = null);

(statearr_10273_10344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (43))){
var state_10235__$1 = state_10235;
var statearr_10274_10345 = state_10235__$1;
(statearr_10274_10345[(2)] = null);

(statearr_10274_10345[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (29))){
var inst_10219 = (state_10235[(2)]);
var state_10235__$1 = state_10235;
var statearr_10275_10346 = state_10235__$1;
(statearr_10275_10346[(2)] = inst_10219);

(statearr_10275_10346[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (44))){
var inst_10228 = (state_10235[(2)]);
var state_10235__$1 = (function (){var statearr_10276 = state_10235;
(statearr_10276[(28)] = inst_10228);

return statearr_10276;
})();
var statearr_10277_10347 = state_10235__$1;
(statearr_10277_10347[(2)] = null);

(statearr_10277_10347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (6))){
var inst_10167 = (state_10235[(29)]);
var inst_10166 = cljs.core.deref.call(null,cs);
var inst_10167__$1 = cljs.core.keys.call(null,inst_10166);
var inst_10168 = cljs.core.count.call(null,inst_10167__$1);
var inst_10169 = cljs.core.reset_BANG_.call(null,dctr,inst_10168);
var inst_10174 = cljs.core.seq.call(null,inst_10167__$1);
var inst_10175 = inst_10174;
var inst_10176 = null;
var inst_10177 = (0);
var inst_10178 = (0);
var state_10235__$1 = (function (){var statearr_10278 = state_10235;
(statearr_10278[(20)] = inst_10175);

(statearr_10278[(30)] = inst_10169);

(statearr_10278[(9)] = inst_10176);

(statearr_10278[(21)] = inst_10177);

(statearr_10278[(11)] = inst_10178);

(statearr_10278[(29)] = inst_10167__$1);

return statearr_10278;
})();
var statearr_10279_10348 = state_10235__$1;
(statearr_10279_10348[(2)] = null);

(statearr_10279_10348[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (28))){
var inst_10194 = (state_10235[(25)]);
var inst_10175 = (state_10235[(20)]);
var inst_10194__$1 = cljs.core.seq.call(null,inst_10175);
var state_10235__$1 = (function (){var statearr_10280 = state_10235;
(statearr_10280[(25)] = inst_10194__$1);

return statearr_10280;
})();
if(inst_10194__$1){
var statearr_10281_10349 = state_10235__$1;
(statearr_10281_10349[(1)] = (33));

} else {
var statearr_10282_10350 = state_10235__$1;
(statearr_10282_10350[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (25))){
var inst_10177 = (state_10235[(21)]);
var inst_10178 = (state_10235[(11)]);
var inst_10180 = (inst_10178 < inst_10177);
var inst_10181 = inst_10180;
var state_10235__$1 = state_10235;
if(cljs.core.truth_(inst_10181)){
var statearr_10283_10351 = state_10235__$1;
(statearr_10283_10351[(1)] = (27));

} else {
var statearr_10284_10352 = state_10235__$1;
(statearr_10284_10352[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (34))){
var state_10235__$1 = state_10235;
var statearr_10285_10353 = state_10235__$1;
(statearr_10285_10353[(2)] = null);

(statearr_10285_10353[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (17))){
var state_10235__$1 = state_10235;
var statearr_10286_10354 = state_10235__$1;
(statearr_10286_10354[(2)] = null);

(statearr_10286_10354[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (3))){
var inst_10233 = (state_10235[(2)]);
var state_10235__$1 = state_10235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10235__$1,inst_10233);
} else {
if((state_val_10236 === (12))){
var inst_10162 = (state_10235[(2)]);
var state_10235__$1 = state_10235;
var statearr_10287_10355 = state_10235__$1;
(statearr_10287_10355[(2)] = inst_10162);

(statearr_10287_10355[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (2))){
var state_10235__$1 = state_10235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10235__$1,(4),ch);
} else {
if((state_val_10236 === (23))){
var state_10235__$1 = state_10235;
var statearr_10288_10356 = state_10235__$1;
(statearr_10288_10356[(2)] = null);

(statearr_10288_10356[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (35))){
var inst_10217 = (state_10235[(2)]);
var state_10235__$1 = state_10235;
var statearr_10289_10357 = state_10235__$1;
(statearr_10289_10357[(2)] = inst_10217);

(statearr_10289_10357[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (19))){
var inst_10136 = (state_10235[(7)]);
var inst_10140 = cljs.core.chunk_first.call(null,inst_10136);
var inst_10141 = cljs.core.chunk_rest.call(null,inst_10136);
var inst_10142 = cljs.core.count.call(null,inst_10140);
var inst_10116 = inst_10141;
var inst_10117 = inst_10140;
var inst_10118 = inst_10142;
var inst_10119 = (0);
var state_10235__$1 = (function (){var statearr_10290 = state_10235;
(statearr_10290[(13)] = inst_10119);

(statearr_10290[(14)] = inst_10116);

(statearr_10290[(15)] = inst_10118);

(statearr_10290[(17)] = inst_10117);

return statearr_10290;
})();
var statearr_10291_10358 = state_10235__$1;
(statearr_10291_10358[(2)] = null);

(statearr_10291_10358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (11))){
var inst_10116 = (state_10235[(14)]);
var inst_10136 = (state_10235[(7)]);
var inst_10136__$1 = cljs.core.seq.call(null,inst_10116);
var state_10235__$1 = (function (){var statearr_10292 = state_10235;
(statearr_10292[(7)] = inst_10136__$1);

return statearr_10292;
})();
if(inst_10136__$1){
var statearr_10293_10359 = state_10235__$1;
(statearr_10293_10359[(1)] = (16));

} else {
var statearr_10294_10360 = state_10235__$1;
(statearr_10294_10360[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (9))){
var inst_10164 = (state_10235[(2)]);
var state_10235__$1 = state_10235;
var statearr_10295_10361 = state_10235__$1;
(statearr_10295_10361[(2)] = inst_10164);

(statearr_10295_10361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (5))){
var inst_10114 = cljs.core.deref.call(null,cs);
var inst_10115 = cljs.core.seq.call(null,inst_10114);
var inst_10116 = inst_10115;
var inst_10117 = null;
var inst_10118 = (0);
var inst_10119 = (0);
var state_10235__$1 = (function (){var statearr_10296 = state_10235;
(statearr_10296[(13)] = inst_10119);

(statearr_10296[(14)] = inst_10116);

(statearr_10296[(15)] = inst_10118);

(statearr_10296[(17)] = inst_10117);

return statearr_10296;
})();
var statearr_10297_10362 = state_10235__$1;
(statearr_10297_10362[(2)] = null);

(statearr_10297_10362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (14))){
var state_10235__$1 = state_10235;
var statearr_10298_10363 = state_10235__$1;
(statearr_10298_10363[(2)] = null);

(statearr_10298_10363[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (45))){
var inst_10225 = (state_10235[(2)]);
var state_10235__$1 = state_10235;
var statearr_10299_10364 = state_10235__$1;
(statearr_10299_10364[(2)] = inst_10225);

(statearr_10299_10364[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (26))){
var inst_10167 = (state_10235[(29)]);
var inst_10221 = (state_10235[(2)]);
var inst_10222 = cljs.core.seq.call(null,inst_10167);
var state_10235__$1 = (function (){var statearr_10300 = state_10235;
(statearr_10300[(31)] = inst_10221);

return statearr_10300;
})();
if(inst_10222){
var statearr_10301_10365 = state_10235__$1;
(statearr_10301_10365[(1)] = (42));

} else {
var statearr_10302_10366 = state_10235__$1;
(statearr_10302_10366[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (16))){
var inst_10136 = (state_10235[(7)]);
var inst_10138 = cljs.core.chunked_seq_QMARK_.call(null,inst_10136);
var state_10235__$1 = state_10235;
if(inst_10138){
var statearr_10303_10367 = state_10235__$1;
(statearr_10303_10367[(1)] = (19));

} else {
var statearr_10304_10368 = state_10235__$1;
(statearr_10304_10368[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (38))){
var inst_10214 = (state_10235[(2)]);
var state_10235__$1 = state_10235;
var statearr_10305_10369 = state_10235__$1;
(statearr_10305_10369[(2)] = inst_10214);

(statearr_10305_10369[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (30))){
var state_10235__$1 = state_10235;
var statearr_10306_10370 = state_10235__$1;
(statearr_10306_10370[(2)] = null);

(statearr_10306_10370[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (10))){
var inst_10119 = (state_10235[(13)]);
var inst_10117 = (state_10235[(17)]);
var inst_10125 = cljs.core._nth.call(null,inst_10117,inst_10119);
var inst_10126 = cljs.core.nth.call(null,inst_10125,(0),null);
var inst_10127 = cljs.core.nth.call(null,inst_10125,(1),null);
var state_10235__$1 = (function (){var statearr_10307 = state_10235;
(statearr_10307[(26)] = inst_10126);

return statearr_10307;
})();
if(cljs.core.truth_(inst_10127)){
var statearr_10308_10371 = state_10235__$1;
(statearr_10308_10371[(1)] = (13));

} else {
var statearr_10309_10372 = state_10235__$1;
(statearr_10309_10372[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (18))){
var inst_10160 = (state_10235[(2)]);
var state_10235__$1 = state_10235;
var statearr_10310_10373 = state_10235__$1;
(statearr_10310_10373[(2)] = inst_10160);

(statearr_10310_10373[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (42))){
var state_10235__$1 = state_10235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10235__$1,(45),dchan);
} else {
if((state_val_10236 === (37))){
var inst_10194 = (state_10235[(25)]);
var inst_10107 = (state_10235[(10)]);
var inst_10203 = (state_10235[(23)]);
var inst_10203__$1 = cljs.core.first.call(null,inst_10194);
var inst_10204 = cljs.core.async.put_BANG_.call(null,inst_10203__$1,inst_10107,done);
var state_10235__$1 = (function (){var statearr_10311 = state_10235;
(statearr_10311[(23)] = inst_10203__$1);

return statearr_10311;
})();
if(cljs.core.truth_(inst_10204)){
var statearr_10312_10374 = state_10235__$1;
(statearr_10312_10374[(1)] = (39));

} else {
var statearr_10313_10375 = state_10235__$1;
(statearr_10313_10375[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10236 === (8))){
var inst_10119 = (state_10235[(13)]);
var inst_10118 = (state_10235[(15)]);
var inst_10121 = (inst_10119 < inst_10118);
var inst_10122 = inst_10121;
var state_10235__$1 = state_10235;
if(cljs.core.truth_(inst_10122)){
var statearr_10314_10376 = state_10235__$1;
(statearr_10314_10376[(1)] = (10));

} else {
var statearr_10315_10377 = state_10235__$1;
(statearr_10315_10377[(1)] = (11));

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
});})(c__6134__auto___10323,cs,m,dchan,dctr,done))
;
return ((function (switch__6078__auto__,c__6134__auto___10323,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6079__auto__ = null;
var state_machine__6079__auto____0 = (function (){
var statearr_10319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10319[(0)] = state_machine__6079__auto__);

(statearr_10319[(1)] = (1));

return statearr_10319;
});
var state_machine__6079__auto____1 = (function (state_10235){
while(true){
var ret_value__6080__auto__ = (function (){try{while(true){
var result__6081__auto__ = switch__6078__auto__.call(null,state_10235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6081__auto__;
}
break;
}
}catch (e10320){if((e10320 instanceof Object)){
var ex__6082__auto__ = e10320;
var statearr_10321_10378 = state_10235;
(statearr_10321_10378[(5)] = ex__6082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10379 = state_10235;
state_10235 = G__10379;
continue;
} else {
return ret_value__6080__auto__;
}
break;
}
});
state_machine__6079__auto__ = function(state_10235){
switch(arguments.length){
case 0:
return state_machine__6079__auto____0.call(this);
case 1:
return state_machine__6079__auto____1.call(this,state_10235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6079__auto____0;
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6079__auto____1;
return state_machine__6079__auto__;
})()
;})(switch__6078__auto__,c__6134__auto___10323,cs,m,dchan,dctr,done))
})();
var state__6136__auto__ = (function (){var statearr_10322 = f__6135__auto__.call(null);
(statearr_10322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6134__auto___10323);

return statearr_10322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6136__auto__);
});})(c__6134__auto___10323,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj10381 = {};
return obj10381;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3115__auto__ = m;
if(and__3115__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3115__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__3771__auto__ = (((m == null))?null:m);
return (function (){var or__3127__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3771__auto__)]);
if(or__3127__auto__){
return or__3127__auto__;
} else {
var or__3127__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3127__auto____$1){
return or__3127__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3115__auto__ = m;
if(and__3115__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3115__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__3771__auto__ = (((m == null))?null:m);
return (function (){var or__3127__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3771__auto__)]);
if(or__3127__auto__){
return or__3127__auto__;
} else {
var or__3127__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3127__auto____$1){
return or__3127__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3115__auto__ = m;
if(and__3115__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3115__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__3771__auto__ = (((m == null))?null:m);
return (function (){var or__3127__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3771__auto__)]);
if(or__3127__auto__){
return or__3127__auto__;
} else {
var or__3127__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3127__auto____$1){
return or__3127__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3115__auto__ = m;
if(and__3115__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3115__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__3771__auto__ = (((m == null))?null:m);
return (function (){var or__3127__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3771__auto__)]);
if(or__3127__auto__){
return or__3127__auto__;
} else {
var or__3127__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3127__auto____$1){
return or__3127__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3115__auto__ = m;
if(and__3115__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3115__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__3771__auto__ = (((m == null))?null:m);
return (function (){var or__3127__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3771__auto__)]);
if(or__3127__auto__){
return or__3127__auto__;
} else {
var or__3127__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3127__auto____$1){
return or__3127__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__10382){
var map__10387 = p__10382;
var map__10387__$1 = ((cljs.core.seq_QMARK_.call(null,map__10387))?cljs.core.apply.call(null,cljs.core.hash_map,map__10387):map__10387);
var opts = map__10387__$1;
var statearr_10388_10391 = state;
(statearr_10388_10391[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__10387,map__10387__$1,opts){
return (function (val){
var statearr_10389_10392 = state;
(statearr_10389_10392[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10387,map__10387__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_10390_10393 = state;
(statearr_10390_10393[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__10382 = null;
if (arguments.length > 3) {
var G__10394__i = 0, G__10394__a = new Array(arguments.length -  3);
while (G__10394__i < G__10394__a.length) {G__10394__a[G__10394__i] = arguments[G__10394__i + 3]; ++G__10394__i;}
  p__10382 = new cljs.core.IndexedSeq(G__10394__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__10382);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__10395){
var state = cljs.core.first(arglist__10395);
arglist__10395 = cljs.core.next(arglist__10395);
var cont_block = cljs.core.first(arglist__10395);
arglist__10395 = cljs.core.next(arglist__10395);
var ports = cljs.core.first(arglist__10395);
var p__10382 = cljs.core.rest(arglist__10395);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__10382);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t10515 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10515 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10516){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta10516 = meta10516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10517,meta10516__$1){
var self__ = this;
var _10517__$1 = this;
return (new cljs.core.async.t10515(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10516__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10515.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10517){
var self__ = this;
var _10517__$1 = this;
return self__.meta10516;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10515.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t10515.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10515.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t10515.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10515.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10515.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10515.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10515.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10515.cljs$lang$type = true;

cljs.core.async.t10515.cljs$lang$ctorStr = "cljs.core.async/t10515";

cljs.core.async.t10515.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3714__auto__,writer__3715__auto__,opt__3716__auto__){
return cljs.core._write.call(null,writer__3715__auto__,"cljs.core.async/t10515");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t10515 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10515(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10516){
return (new cljs.core.async.t10515(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10516));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t10515(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6134__auto___10634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6134__auto___10634,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6135__auto__ = (function (){var switch__6078__auto__ = ((function (c__6134__auto___10634,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10587){
var state_val_10588 = (state_10587[(1)]);
if((state_val_10588 === (7))){
var inst_10531 = (state_10587[(7)]);
var inst_10536 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10531);
var state_10587__$1 = state_10587;
var statearr_10589_10635 = state_10587__$1;
(statearr_10589_10635[(2)] = inst_10536);

(statearr_10589_10635[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (20))){
var inst_10546 = (state_10587[(8)]);
var state_10587__$1 = state_10587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10587__$1,(23),out,inst_10546);
} else {
if((state_val_10588 === (1))){
var inst_10521 = (state_10587[(9)]);
var inst_10521__$1 = calc_state.call(null);
var inst_10522 = cljs.core.seq_QMARK_.call(null,inst_10521__$1);
var state_10587__$1 = (function (){var statearr_10590 = state_10587;
(statearr_10590[(9)] = inst_10521__$1);

return statearr_10590;
})();
if(inst_10522){
var statearr_10591_10636 = state_10587__$1;
(statearr_10591_10636[(1)] = (2));

} else {
var statearr_10592_10637 = state_10587__$1;
(statearr_10592_10637[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (24))){
var inst_10539 = (state_10587[(10)]);
var inst_10531 = inst_10539;
var state_10587__$1 = (function (){var statearr_10593 = state_10587;
(statearr_10593[(7)] = inst_10531);

return statearr_10593;
})();
var statearr_10594_10638 = state_10587__$1;
(statearr_10594_10638[(2)] = null);

(statearr_10594_10638[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (4))){
var inst_10521 = (state_10587[(9)]);
var inst_10527 = (state_10587[(2)]);
var inst_10528 = cljs.core.get.call(null,inst_10527,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10529 = cljs.core.get.call(null,inst_10527,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10530 = cljs.core.get.call(null,inst_10527,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10531 = inst_10521;
var state_10587__$1 = (function (){var statearr_10595 = state_10587;
(statearr_10595[(11)] = inst_10530);

(statearr_10595[(12)] = inst_10529);

(statearr_10595[(7)] = inst_10531);

(statearr_10595[(13)] = inst_10528);

return statearr_10595;
})();
var statearr_10596_10639 = state_10587__$1;
(statearr_10596_10639[(2)] = null);

(statearr_10596_10639[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (15))){
var state_10587__$1 = state_10587;
var statearr_10597_10640 = state_10587__$1;
(statearr_10597_10640[(2)] = null);

(statearr_10597_10640[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (21))){
var inst_10539 = (state_10587[(10)]);
var inst_10531 = inst_10539;
var state_10587__$1 = (function (){var statearr_10598 = state_10587;
(statearr_10598[(7)] = inst_10531);

return statearr_10598;
})();
var statearr_10599_10641 = state_10587__$1;
(statearr_10599_10641[(2)] = null);

(statearr_10599_10641[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (13))){
var inst_10583 = (state_10587[(2)]);
var state_10587__$1 = state_10587;
var statearr_10600_10642 = state_10587__$1;
(statearr_10600_10642[(2)] = inst_10583);

(statearr_10600_10642[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (22))){
var inst_10581 = (state_10587[(2)]);
var state_10587__$1 = state_10587;
var statearr_10601_10643 = state_10587__$1;
(statearr_10601_10643[(2)] = inst_10581);

(statearr_10601_10643[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (6))){
var inst_10585 = (state_10587[(2)]);
var state_10587__$1 = state_10587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10587__$1,inst_10585);
} else {
if((state_val_10588 === (25))){
var state_10587__$1 = state_10587;
var statearr_10602_10644 = state_10587__$1;
(statearr_10602_10644[(2)] = null);

(statearr_10602_10644[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (17))){
var inst_10561 = (state_10587[(14)]);
var state_10587__$1 = state_10587;
var statearr_10603_10645 = state_10587__$1;
(statearr_10603_10645[(2)] = inst_10561);

(statearr_10603_10645[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (3))){
var inst_10521 = (state_10587[(9)]);
var state_10587__$1 = state_10587;
var statearr_10604_10646 = state_10587__$1;
(statearr_10604_10646[(2)] = inst_10521);

(statearr_10604_10646[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (12))){
var inst_10540 = (state_10587[(15)]);
var inst_10561 = (state_10587[(14)]);
var inst_10547 = (state_10587[(16)]);
var inst_10561__$1 = inst_10540.call(null,inst_10547);
var state_10587__$1 = (function (){var statearr_10605 = state_10587;
(statearr_10605[(14)] = inst_10561__$1);

return statearr_10605;
})();
if(cljs.core.truth_(inst_10561__$1)){
var statearr_10606_10647 = state_10587__$1;
(statearr_10606_10647[(1)] = (17));

} else {
var statearr_10607_10648 = state_10587__$1;
(statearr_10607_10648[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (2))){
var inst_10521 = (state_10587[(9)]);
var inst_10524 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10521);
var state_10587__$1 = state_10587;
var statearr_10608_10649 = state_10587__$1;
(statearr_10608_10649[(2)] = inst_10524);

(statearr_10608_10649[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (23))){
var inst_10572 = (state_10587[(2)]);
var state_10587__$1 = state_10587;
if(cljs.core.truth_(inst_10572)){
var statearr_10609_10650 = state_10587__$1;
(statearr_10609_10650[(1)] = (24));

} else {
var statearr_10610_10651 = state_10587__$1;
(statearr_10610_10651[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (19))){
var inst_10569 = (state_10587[(2)]);
var state_10587__$1 = state_10587;
if(cljs.core.truth_(inst_10569)){
var statearr_10611_10652 = state_10587__$1;
(statearr_10611_10652[(1)] = (20));

} else {
var statearr_10612_10653 = state_10587__$1;
(statearr_10612_10653[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (11))){
var inst_10546 = (state_10587[(8)]);
var inst_10552 = (inst_10546 == null);
var state_10587__$1 = state_10587;
if(cljs.core.truth_(inst_10552)){
var statearr_10613_10654 = state_10587__$1;
(statearr_10613_10654[(1)] = (14));

} else {
var statearr_10614_10655 = state_10587__$1;
(statearr_10614_10655[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (9))){
var inst_10539 = (state_10587[(10)]);
var inst_10539__$1 = (state_10587[(2)]);
var inst_10540 = cljs.core.get.call(null,inst_10539__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10541 = cljs.core.get.call(null,inst_10539__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10542 = cljs.core.get.call(null,inst_10539__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10587__$1 = (function (){var statearr_10615 = state_10587;
(statearr_10615[(15)] = inst_10540);

(statearr_10615[(17)] = inst_10541);

(statearr_10615[(10)] = inst_10539__$1);

return statearr_10615;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10587__$1,(10),inst_10542);
} else {
if((state_val_10588 === (5))){
var inst_10531 = (state_10587[(7)]);
var inst_10534 = cljs.core.seq_QMARK_.call(null,inst_10531);
var state_10587__$1 = state_10587;
if(inst_10534){
var statearr_10616_10656 = state_10587__$1;
(statearr_10616_10656[(1)] = (7));

} else {
var statearr_10617_10657 = state_10587__$1;
(statearr_10617_10657[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (14))){
var inst_10547 = (state_10587[(16)]);
var inst_10554 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10547);
var state_10587__$1 = state_10587;
var statearr_10618_10658 = state_10587__$1;
(statearr_10618_10658[(2)] = inst_10554);

(statearr_10618_10658[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (26))){
var inst_10577 = (state_10587[(2)]);
var state_10587__$1 = state_10587;
var statearr_10619_10659 = state_10587__$1;
(statearr_10619_10659[(2)] = inst_10577);

(statearr_10619_10659[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (16))){
var inst_10557 = (state_10587[(2)]);
var inst_10558 = calc_state.call(null);
var inst_10531 = inst_10558;
var state_10587__$1 = (function (){var statearr_10620 = state_10587;
(statearr_10620[(7)] = inst_10531);

(statearr_10620[(18)] = inst_10557);

return statearr_10620;
})();
var statearr_10621_10660 = state_10587__$1;
(statearr_10621_10660[(2)] = null);

(statearr_10621_10660[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (10))){
var inst_10546 = (state_10587[(8)]);
var inst_10547 = (state_10587[(16)]);
var inst_10545 = (state_10587[(2)]);
var inst_10546__$1 = cljs.core.nth.call(null,inst_10545,(0),null);
var inst_10547__$1 = cljs.core.nth.call(null,inst_10545,(1),null);
var inst_10548 = (inst_10546__$1 == null);
var inst_10549 = cljs.core._EQ_.call(null,inst_10547__$1,change);
var inst_10550 = (inst_10548) || (inst_10549);
var state_10587__$1 = (function (){var statearr_10622 = state_10587;
(statearr_10622[(8)] = inst_10546__$1);

(statearr_10622[(16)] = inst_10547__$1);

return statearr_10622;
})();
if(cljs.core.truth_(inst_10550)){
var statearr_10623_10661 = state_10587__$1;
(statearr_10623_10661[(1)] = (11));

} else {
var statearr_10624_10662 = state_10587__$1;
(statearr_10624_10662[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (18))){
var inst_10540 = (state_10587[(15)]);
var inst_10541 = (state_10587[(17)]);
var inst_10547 = (state_10587[(16)]);
var inst_10564 = cljs.core.empty_QMARK_.call(null,inst_10540);
var inst_10565 = inst_10541.call(null,inst_10547);
var inst_10566 = cljs.core.not.call(null,inst_10565);
var inst_10567 = (inst_10564) && (inst_10566);
var state_10587__$1 = state_10587;
var statearr_10625_10663 = state_10587__$1;
(statearr_10625_10663[(2)] = inst_10567);

(statearr_10625_10663[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10588 === (8))){
var inst_10531 = (state_10587[(7)]);
var state_10587__$1 = state_10587;
var statearr_10626_10664 = state_10587__$1;
(statearr_10626_10664[(2)] = inst_10531);

(statearr_10626_10664[(1)] = (9));


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
});})(c__6134__auto___10634,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6078__auto__,c__6134__auto___10634,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6079__auto__ = null;
var state_machine__6079__auto____0 = (function (){
var statearr_10630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10630[(0)] = state_machine__6079__auto__);

(statearr_10630[(1)] = (1));

return statearr_10630;
});
var state_machine__6079__auto____1 = (function (state_10587){
while(true){
var ret_value__6080__auto__ = (function (){try{while(true){
var result__6081__auto__ = switch__6078__auto__.call(null,state_10587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6081__auto__;
}
break;
}
}catch (e10631){if((e10631 instanceof Object)){
var ex__6082__auto__ = e10631;
var statearr_10632_10665 = state_10587;
(statearr_10632_10665[(5)] = ex__6082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10666 = state_10587;
state_10587 = G__10666;
continue;
} else {
return ret_value__6080__auto__;
}
break;
}
});
state_machine__6079__auto__ = function(state_10587){
switch(arguments.length){
case 0:
return state_machine__6079__auto____0.call(this);
case 1:
return state_machine__6079__auto____1.call(this,state_10587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6079__auto____0;
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6079__auto____1;
return state_machine__6079__auto__;
})()
;})(switch__6078__auto__,c__6134__auto___10634,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6136__auto__ = (function (){var statearr_10633 = f__6135__auto__.call(null);
(statearr_10633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6134__auto___10634);

return statearr_10633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6136__auto__);
});})(c__6134__auto___10634,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj10668 = {};
return obj10668;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3115__auto__ = p;
if(and__3115__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3115__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__3771__auto__ = (((p == null))?null:p);
return (function (){var or__3127__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3771__auto__)]);
if(or__3127__auto__){
return or__3127__auto__;
} else {
var or__3127__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3127__auto____$1){
return or__3127__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3115__auto__ = p;
if(and__3115__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3115__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__3771__auto__ = (((p == null))?null:p);
return (function (){var or__3127__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3771__auto__)]);
if(or__3127__auto__){
return or__3127__auto__;
} else {
var or__3127__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3127__auto____$1){
return or__3127__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3115__auto__ = p;
if(and__3115__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3115__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__3771__auto__ = (((p == null))?null:p);
return (function (){var or__3127__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3771__auto__)]);
if(or__3127__auto__){
return or__3127__auto__;
} else {
var or__3127__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3127__auto____$1){
return or__3127__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3115__auto__ = p;
if(and__3115__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3115__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__3771__auto__ = (((p == null))?null:p);
return (function (){var or__3127__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3771__auto__)]);
if(or__3127__auto__){
return or__3127__auto__;
} else {
var or__3127__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3127__auto____$1){
return or__3127__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3127__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3127__auto__)){
return or__3127__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3127__auto__,mults){
return (function (p1__10669_SHARP_){
if(cljs.core.truth_(p1__10669_SHARP_.call(null,topic))){
return p1__10669_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__10669_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3127__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t10792 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10792 = (function (pub,ch,topic_fn,buf_fn,mults,ensure_mult,meta10793){
this.pub = pub;
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10793 = meta10793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10794,meta10793__$1){
var self__ = this;
var _10794__$1 = this;
return (new cljs.core.async.t10792(self__.pub,self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10793__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t10792.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10794){
var self__ = this;
var _10794__$1 = this;
return self__.meta10793;
});})(mults,ensure_mult))
;

cljs.core.async.t10792.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t10792.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t10792.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t10792.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t10792.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t10792.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t10792.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t10792.cljs$lang$type = true;

cljs.core.async.t10792.cljs$lang$ctorStr = "cljs.core.async/t10792";

cljs.core.async.t10792.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3714__auto__,writer__3715__auto__,opt__3716__auto__){
return cljs.core._write.call(null,writer__3715__auto__,"cljs.core.async/t10792");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t10792 = ((function (mults,ensure_mult){
return (function __GT_t10792(pub__$1,ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10793){
return (new cljs.core.async.t10792(pub__$1,ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10793));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t10792(pub,ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6134__auto___10914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6134__auto___10914,mults,ensure_mult,p){
return (function (){
var f__6135__auto__ = (function (){var switch__6078__auto__ = ((function (c__6134__auto___10914,mults,ensure_mult,p){
return (function (state_10866){
var state_val_10867 = (state_10866[(1)]);
if((state_val_10867 === (7))){
var inst_10862 = (state_10866[(2)]);
var state_10866__$1 = state_10866;
var statearr_10868_10915 = state_10866__$1;
(statearr_10868_10915[(2)] = inst_10862);

(statearr_10868_10915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10867 === (20))){
var state_10866__$1 = state_10866;
var statearr_10869_10916 = state_10866__$1;
(statearr_10869_10916[(2)] = null);

(statearr_10869_10916[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10867 === (1))){
var state_10866__$1 = state_10866;
var statearr_10870_10917 = state_10866__$1;
(statearr_10870_10917[(2)] = null);

(statearr_10870_10917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10867 === (24))){
var inst_10845 = (state_10866[(7)]);
var inst_10854 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10845);
var state_10866__$1 = state_10866;
var statearr_10871_10918 = state_10866__$1;
(statearr_10871_10918[(2)] = inst_10854);

(statearr_10871_10918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10867 === (4))){
var inst_10797 = (state_10866[(8)]);
var inst_10797__$1 = (state_10866[(2)]);
var inst_10798 = (inst_10797__$1 == null);
var state_10866__$1 = (function (){var statearr_10872 = state_10866;
(statearr_10872[(8)] = inst_10797__$1);

return statearr_10872;
})();
if(cljs.core.truth_(inst_10798)){
var statearr_10873_10919 = state_10866__$1;
(statearr_10873_10919[(1)] = (5));

} else {
var statearr_10874_10920 = state_10866__$1;
(statearr_10874_10920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10867 === (15))){
var inst_10839 = (state_10866[(2)]);
var state_10866__$1 = state_10866;
var statearr_10875_10921 = state_10866__$1;
(statearr_10875_10921[(2)] = inst_10839);

(statearr_10875_10921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10867 === (21))){
var inst_10859 = (state_10866[(2)]);
var state_10866__$1 = (function (){var statearr_10876 = state_10866;
(statearr_10876[(9)] = inst_10859);

return statearr_10876;
})();
var statearr_10877_10922 = state_10866__$1;
(statearr_10877_10922[(2)] = null);

(statearr_10877_10922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10867 === (13))){
var inst_10821 = (state_10866[(10)]);
var inst_10823 = cljs.core.chunked_seq_QMARK_.call(null,inst_10821);
var state_10866__$1 = state_10866;
if(inst_10823){
var statearr_10878_10923 = state_10866__$1;
(statearr_10878_10923[(1)] = (16));

} else {
var statearr_10879_10924 = state_10866__$1;
(statearr_10879_10924[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10867 === (22))){
var inst_10851 = (state_10866[(2)]);
var state_10866__$1 = state_10866;
if(cljs.core.truth_(inst_10851)){
var statearr_10880_10925 = state_10866__$1;
(statearr_10880_10925[(1)] = (23));

} else {
var statearr_10881_10926 = state_10866__$1;
(statearr_10881_10926[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10867 === (6))){
var inst_10847 = (state_10866[(11)]);
var inst_10797 = (state_10866[(8)]);
var inst_10845 = (state_10866[(7)]);
var inst_10845__$1 = topic_fn.call(null,inst_10797);
var inst_10846 = cljs.core.deref.call(null,mults);
var inst_10847__$1 = cljs.core.get.call(null,inst_10846,inst_10845__$1);
var state_10866__$1 = (function (){var statearr_10882 = state_10866;
(statearr_10882[(11)] = inst_10847__$1);

(statearr_10882[(7)] = inst_10845__$1);

return statearr_10882;
})();
if(cljs.core.truth_(inst_10847__$1)){
var statearr_10883_10927 = state_10866__$1;
(statearr_10883_10927[(1)] = (19));

} else {
var statearr_10884_10928 = state_10866__$1;
(statearr_10884_10928[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10867 === (25))){
var inst_10856 = (state_10866[(2)]);
var state_10866__$1 = state_10866;
var statearr_10885_10929 = state_10866__$1;
(statearr_10885_10929[(2)] = inst_10856);

(statearr_10885_10929[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10867 === (17))){
var inst_10821 = (state_10866[(10)]);
var inst_10830 = cljs.core.first.call(null,inst_10821);
var inst_10831 = cljs.core.async.muxch_STAR_.call(null,inst_10830);
var inst_10832 = cljs.core.async.close_BANG_.call(null,inst_10831);
var inst_10833 = cljs.core.next.call(null,inst_10821);
var inst_10807 = inst_10833;
var inst_10808 = null;
var inst_10809 = (0);
var inst_10810 = (0);
var state_10866__$1 = (function (){var statearr_10886 = state_10866;
(statearr_10886[(12)] = inst_10807);

(statearr_10886[(13)] = inst_10832);

(statearr_10886[(14)] = inst_10810);

(statearr_10886[(15)] = inst_10808);

(statearr_10886[(16)] = inst_10809);

return statearr_10886;
})();
var statearr_10887_10930 = state_10866__$1;
(statearr_10887_10930[(2)] = null);

(statearr_10887_10930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10867 === (3))){
var inst_10864 = (state_10866[(2)]);
var state_10866__$1 = state_10866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10866__$1,inst_10864);
} else {
if((state_val_10867 === (12))){
var inst_10841 = (state_10866[(2)]);
var state_10866__$1 = state_10866;
var statearr_10888_10931 = state_10866__$1;
(statearr_10888_10931[(2)] = inst_10841);

(statearr_10888_10931[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10867 === (2))){
var state_10866__$1 = state_10866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10866__$1,(4),ch);
} else {
if((state_val_10867 === (23))){
var state_10866__$1 = state_10866;
var statearr_10889_10932 = state_10866__$1;
(statearr_10889_10932[(2)] = null);

(statearr_10889_10932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10867 === (19))){
var inst_10847 = (state_10866[(11)]);
var inst_10797 = (state_10866[(8)]);
var inst_10849 = cljs.core.async.muxch_STAR_.call(null,inst_10847);
var state_10866__$1 = state_10866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10866__$1,(22),inst_10849,inst_10797);
} else {
if((state_val_10867 === (11))){
var inst_10807 = (state_10866[(12)]);
var inst_10821 = (state_10866[(10)]);
var inst_10821__$1 = cljs.core.seq.call(null,inst_10807);
var state_10866__$1 = (function (){var statearr_10890 = state_10866;
(statearr_10890[(10)] = inst_10821__$1);

return statearr_10890;
})();
if(inst_10821__$1){
var statearr_10891_10933 = state_10866__$1;
(statearr_10891_10933[(1)] = (13));

} else {
var statearr_10892_10934 = state_10866__$1;
(statearr_10892_10934[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10867 === (9))){
var inst_10843 = (state_10866[(2)]);
var state_10866__$1 = state_10866;
var statearr_10893_10935 = state_10866__$1;
(statearr_10893_10935[(2)] = inst_10843);

(statearr_10893_10935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10867 === (5))){
var inst_10804 = cljs.core.deref.call(null,mults);
var inst_10805 = cljs.core.vals.call(null,inst_10804);
var inst_10806 = cljs.core.seq.call(null,inst_10805);
var inst_10807 = inst_10806;
var inst_10808 = null;
var inst_10809 = (0);
var inst_10810 = (0);
var state_10866__$1 = (function (){var statearr_10894 = state_10866;
(statearr_10894[(12)] = inst_10807);

(statearr_10894[(14)] = inst_10810);

(statearr_10894[(15)] = inst_10808);

(statearr_10894[(16)] = inst_10809);

return statearr_10894;
})();
var statearr_10895_10936 = state_10866__$1;
(statearr_10895_10936[(2)] = null);

(statearr_10895_10936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10867 === (14))){
var state_10866__$1 = state_10866;
var statearr_10899_10937 = state_10866__$1;
(statearr_10899_10937[(2)] = null);

(statearr_10899_10937[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10867 === (16))){
var inst_10821 = (state_10866[(10)]);
var inst_10825 = cljs.core.chunk_first.call(null,inst_10821);
var inst_10826 = cljs.core.chunk_rest.call(null,inst_10821);
var inst_10827 = cljs.core.count.call(null,inst_10825);
var inst_10807 = inst_10826;
var inst_10808 = inst_10825;
var inst_10809 = inst_10827;
var inst_10810 = (0);
var state_10866__$1 = (function (){var statearr_10900 = state_10866;
(statearr_10900[(12)] = inst_10807);

(statearr_10900[(14)] = inst_10810);

(statearr_10900[(15)] = inst_10808);

(statearr_10900[(16)] = inst_10809);

return statearr_10900;
})();
var statearr_10901_10938 = state_10866__$1;
(statearr_10901_10938[(2)] = null);

(statearr_10901_10938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10867 === (10))){
var inst_10807 = (state_10866[(12)]);
var inst_10810 = (state_10866[(14)]);
var inst_10808 = (state_10866[(15)]);
var inst_10809 = (state_10866[(16)]);
var inst_10815 = cljs.core._nth.call(null,inst_10808,inst_10810);
var inst_10816 = cljs.core.async.muxch_STAR_.call(null,inst_10815);
var inst_10817 = cljs.core.async.close_BANG_.call(null,inst_10816);
var inst_10818 = (inst_10810 + (1));
var tmp10896 = inst_10807;
var tmp10897 = inst_10808;
var tmp10898 = inst_10809;
var inst_10807__$1 = tmp10896;
var inst_10808__$1 = tmp10897;
var inst_10809__$1 = tmp10898;
var inst_10810__$1 = inst_10818;
var state_10866__$1 = (function (){var statearr_10902 = state_10866;
(statearr_10902[(12)] = inst_10807__$1);

(statearr_10902[(17)] = inst_10817);

(statearr_10902[(14)] = inst_10810__$1);

(statearr_10902[(15)] = inst_10808__$1);

(statearr_10902[(16)] = inst_10809__$1);

return statearr_10902;
})();
var statearr_10903_10939 = state_10866__$1;
(statearr_10903_10939[(2)] = null);

(statearr_10903_10939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10867 === (18))){
var inst_10836 = (state_10866[(2)]);
var state_10866__$1 = state_10866;
var statearr_10904_10940 = state_10866__$1;
(statearr_10904_10940[(2)] = inst_10836);

(statearr_10904_10940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10867 === (8))){
var inst_10810 = (state_10866[(14)]);
var inst_10809 = (state_10866[(16)]);
var inst_10812 = (inst_10810 < inst_10809);
var inst_10813 = inst_10812;
var state_10866__$1 = state_10866;
if(cljs.core.truth_(inst_10813)){
var statearr_10905_10941 = state_10866__$1;
(statearr_10905_10941[(1)] = (10));

} else {
var statearr_10906_10942 = state_10866__$1;
(statearr_10906_10942[(1)] = (11));

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
});})(c__6134__auto___10914,mults,ensure_mult,p))
;
return ((function (switch__6078__auto__,c__6134__auto___10914,mults,ensure_mult,p){
return (function() {
var state_machine__6079__auto__ = null;
var state_machine__6079__auto____0 = (function (){
var statearr_10910 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10910[(0)] = state_machine__6079__auto__);

(statearr_10910[(1)] = (1));

return statearr_10910;
});
var state_machine__6079__auto____1 = (function (state_10866){
while(true){
var ret_value__6080__auto__ = (function (){try{while(true){
var result__6081__auto__ = switch__6078__auto__.call(null,state_10866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6081__auto__;
}
break;
}
}catch (e10911){if((e10911 instanceof Object)){
var ex__6082__auto__ = e10911;
var statearr_10912_10943 = state_10866;
(statearr_10912_10943[(5)] = ex__6082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10944 = state_10866;
state_10866 = G__10944;
continue;
} else {
return ret_value__6080__auto__;
}
break;
}
});
state_machine__6079__auto__ = function(state_10866){
switch(arguments.length){
case 0:
return state_machine__6079__auto____0.call(this);
case 1:
return state_machine__6079__auto____1.call(this,state_10866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6079__auto____0;
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6079__auto____1;
return state_machine__6079__auto__;
})()
;})(switch__6078__auto__,c__6134__auto___10914,mults,ensure_mult,p))
})();
var state__6136__auto__ = (function (){var statearr_10913 = f__6135__auto__.call(null);
(statearr_10913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6134__auto___10914);

return statearr_10913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6136__auto__);
});})(c__6134__auto___10914,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6134__auto___11081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6134__auto___11081,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6135__auto__ = (function (){var switch__6078__auto__ = ((function (c__6134__auto___11081,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11051){
var state_val_11052 = (state_11051[(1)]);
if((state_val_11052 === (7))){
var state_11051__$1 = state_11051;
var statearr_11053_11082 = state_11051__$1;
(statearr_11053_11082[(2)] = null);

(statearr_11053_11082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11052 === (1))){
var state_11051__$1 = state_11051;
var statearr_11054_11083 = state_11051__$1;
(statearr_11054_11083[(2)] = null);

(statearr_11054_11083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11052 === (4))){
var inst_11015 = (state_11051[(7)]);
var inst_11017 = (inst_11015 < cnt);
var state_11051__$1 = state_11051;
if(cljs.core.truth_(inst_11017)){
var statearr_11055_11084 = state_11051__$1;
(statearr_11055_11084[(1)] = (6));

} else {
var statearr_11056_11085 = state_11051__$1;
(statearr_11056_11085[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11052 === (15))){
var inst_11047 = (state_11051[(2)]);
var state_11051__$1 = state_11051;
var statearr_11057_11086 = state_11051__$1;
(statearr_11057_11086[(2)] = inst_11047);

(statearr_11057_11086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11052 === (13))){
var inst_11040 = cljs.core.async.close_BANG_.call(null,out);
var state_11051__$1 = state_11051;
var statearr_11058_11087 = state_11051__$1;
(statearr_11058_11087[(2)] = inst_11040);

(statearr_11058_11087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11052 === (6))){
var state_11051__$1 = state_11051;
var statearr_11059_11088 = state_11051__$1;
(statearr_11059_11088[(2)] = null);

(statearr_11059_11088[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11052 === (3))){
var inst_11049 = (state_11051[(2)]);
var state_11051__$1 = state_11051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11051__$1,inst_11049);
} else {
if((state_val_11052 === (12))){
var inst_11037 = (state_11051[(8)]);
var inst_11037__$1 = (state_11051[(2)]);
var inst_11038 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11037__$1);
var state_11051__$1 = (function (){var statearr_11060 = state_11051;
(statearr_11060[(8)] = inst_11037__$1);

return statearr_11060;
})();
if(cljs.core.truth_(inst_11038)){
var statearr_11061_11089 = state_11051__$1;
(statearr_11061_11089[(1)] = (13));

} else {
var statearr_11062_11090 = state_11051__$1;
(statearr_11062_11090[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11052 === (2))){
var inst_11014 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11015 = (0);
var state_11051__$1 = (function (){var statearr_11063 = state_11051;
(statearr_11063[(9)] = inst_11014);

(statearr_11063[(7)] = inst_11015);

return statearr_11063;
})();
var statearr_11064_11091 = state_11051__$1;
(statearr_11064_11091[(2)] = null);

(statearr_11064_11091[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11052 === (11))){
var inst_11015 = (state_11051[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11051,(10),Object,null,(9));
var inst_11024 = chs__$1.call(null,inst_11015);
var inst_11025 = done.call(null,inst_11015);
var inst_11026 = cljs.core.async.take_BANG_.call(null,inst_11024,inst_11025);
var state_11051__$1 = state_11051;
var statearr_11065_11092 = state_11051__$1;
(statearr_11065_11092[(2)] = inst_11026);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11051__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11052 === (9))){
var inst_11015 = (state_11051[(7)]);
var inst_11028 = (state_11051[(2)]);
var inst_11029 = (inst_11015 + (1));
var inst_11015__$1 = inst_11029;
var state_11051__$1 = (function (){var statearr_11066 = state_11051;
(statearr_11066[(7)] = inst_11015__$1);

(statearr_11066[(10)] = inst_11028);

return statearr_11066;
})();
var statearr_11067_11093 = state_11051__$1;
(statearr_11067_11093[(2)] = null);

(statearr_11067_11093[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11052 === (5))){
var inst_11035 = (state_11051[(2)]);
var state_11051__$1 = (function (){var statearr_11068 = state_11051;
(statearr_11068[(11)] = inst_11035);

return statearr_11068;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11051__$1,(12),dchan);
} else {
if((state_val_11052 === (14))){
var inst_11037 = (state_11051[(8)]);
var inst_11042 = cljs.core.apply.call(null,f,inst_11037);
var state_11051__$1 = state_11051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11051__$1,(16),out,inst_11042);
} else {
if((state_val_11052 === (16))){
var inst_11044 = (state_11051[(2)]);
var state_11051__$1 = (function (){var statearr_11069 = state_11051;
(statearr_11069[(12)] = inst_11044);

return statearr_11069;
})();
var statearr_11070_11094 = state_11051__$1;
(statearr_11070_11094[(2)] = null);

(statearr_11070_11094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11052 === (10))){
var inst_11019 = (state_11051[(2)]);
var inst_11020 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11051__$1 = (function (){var statearr_11071 = state_11051;
(statearr_11071[(13)] = inst_11019);

return statearr_11071;
})();
var statearr_11072_11095 = state_11051__$1;
(statearr_11072_11095[(2)] = inst_11020);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11051__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11052 === (8))){
var inst_11033 = (state_11051[(2)]);
var state_11051__$1 = state_11051;
var statearr_11073_11096 = state_11051__$1;
(statearr_11073_11096[(2)] = inst_11033);

(statearr_11073_11096[(1)] = (5));


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
});})(c__6134__auto___11081,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6078__auto__,c__6134__auto___11081,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6079__auto__ = null;
var state_machine__6079__auto____0 = (function (){
var statearr_11077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11077[(0)] = state_machine__6079__auto__);

(statearr_11077[(1)] = (1));

return statearr_11077;
});
var state_machine__6079__auto____1 = (function (state_11051){
while(true){
var ret_value__6080__auto__ = (function (){try{while(true){
var result__6081__auto__ = switch__6078__auto__.call(null,state_11051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6081__auto__;
}
break;
}
}catch (e11078){if((e11078 instanceof Object)){
var ex__6082__auto__ = e11078;
var statearr_11079_11097 = state_11051;
(statearr_11079_11097[(5)] = ex__6082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11098 = state_11051;
state_11051 = G__11098;
continue;
} else {
return ret_value__6080__auto__;
}
break;
}
});
state_machine__6079__auto__ = function(state_11051){
switch(arguments.length){
case 0:
return state_machine__6079__auto____0.call(this);
case 1:
return state_machine__6079__auto____1.call(this,state_11051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6079__auto____0;
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6079__auto____1;
return state_machine__6079__auto__;
})()
;})(switch__6078__auto__,c__6134__auto___11081,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6136__auto__ = (function (){var statearr_11080 = f__6135__auto__.call(null);
(statearr_11080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6134__auto___11081);

return statearr_11080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6136__auto__);
});})(c__6134__auto___11081,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6134__auto___11206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6134__auto___11206,out){
return (function (){
var f__6135__auto__ = (function (){var switch__6078__auto__ = ((function (c__6134__auto___11206,out){
return (function (state_11182){
var state_val_11183 = (state_11182[(1)]);
if((state_val_11183 === (7))){
var inst_11161 = (state_11182[(7)]);
var inst_11162 = (state_11182[(8)]);
var inst_11161__$1 = (state_11182[(2)]);
var inst_11162__$1 = cljs.core.nth.call(null,inst_11161__$1,(0),null);
var inst_11163 = cljs.core.nth.call(null,inst_11161__$1,(1),null);
var inst_11164 = (inst_11162__$1 == null);
var state_11182__$1 = (function (){var statearr_11184 = state_11182;
(statearr_11184[(9)] = inst_11163);

(statearr_11184[(7)] = inst_11161__$1);

(statearr_11184[(8)] = inst_11162__$1);

return statearr_11184;
})();
if(cljs.core.truth_(inst_11164)){
var statearr_11185_11207 = state_11182__$1;
(statearr_11185_11207[(1)] = (8));

} else {
var statearr_11186_11208 = state_11182__$1;
(statearr_11186_11208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (1))){
var inst_11153 = cljs.core.vec.call(null,chs);
var inst_11154 = inst_11153;
var state_11182__$1 = (function (){var statearr_11187 = state_11182;
(statearr_11187[(10)] = inst_11154);

return statearr_11187;
})();
var statearr_11188_11209 = state_11182__$1;
(statearr_11188_11209[(2)] = null);

(statearr_11188_11209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (4))){
var inst_11154 = (state_11182[(10)]);
var state_11182__$1 = state_11182;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11182__$1,(7),inst_11154);
} else {
if((state_val_11183 === (6))){
var inst_11178 = (state_11182[(2)]);
var state_11182__$1 = state_11182;
var statearr_11189_11210 = state_11182__$1;
(statearr_11189_11210[(2)] = inst_11178);

(statearr_11189_11210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (3))){
var inst_11180 = (state_11182[(2)]);
var state_11182__$1 = state_11182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11182__$1,inst_11180);
} else {
if((state_val_11183 === (2))){
var inst_11154 = (state_11182[(10)]);
var inst_11156 = cljs.core.count.call(null,inst_11154);
var inst_11157 = (inst_11156 > (0));
var state_11182__$1 = state_11182;
if(cljs.core.truth_(inst_11157)){
var statearr_11191_11211 = state_11182__$1;
(statearr_11191_11211[(1)] = (4));

} else {
var statearr_11192_11212 = state_11182__$1;
(statearr_11192_11212[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (11))){
var inst_11154 = (state_11182[(10)]);
var inst_11171 = (state_11182[(2)]);
var tmp11190 = inst_11154;
var inst_11154__$1 = tmp11190;
var state_11182__$1 = (function (){var statearr_11193 = state_11182;
(statearr_11193[(10)] = inst_11154__$1);

(statearr_11193[(11)] = inst_11171);

return statearr_11193;
})();
var statearr_11194_11213 = state_11182__$1;
(statearr_11194_11213[(2)] = null);

(statearr_11194_11213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (9))){
var inst_11162 = (state_11182[(8)]);
var state_11182__$1 = state_11182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11182__$1,(11),out,inst_11162);
} else {
if((state_val_11183 === (5))){
var inst_11176 = cljs.core.async.close_BANG_.call(null,out);
var state_11182__$1 = state_11182;
var statearr_11195_11214 = state_11182__$1;
(statearr_11195_11214[(2)] = inst_11176);

(statearr_11195_11214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (10))){
var inst_11174 = (state_11182[(2)]);
var state_11182__$1 = state_11182;
var statearr_11196_11215 = state_11182__$1;
(statearr_11196_11215[(2)] = inst_11174);

(statearr_11196_11215[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (8))){
var inst_11154 = (state_11182[(10)]);
var inst_11163 = (state_11182[(9)]);
var inst_11161 = (state_11182[(7)]);
var inst_11162 = (state_11182[(8)]);
var inst_11166 = (function (){var cs = inst_11154;
var vec__11159 = inst_11161;
var v = inst_11162;
var c = inst_11163;
return ((function (cs,vec__11159,v,c,inst_11154,inst_11163,inst_11161,inst_11162,state_val_11183,c__6134__auto___11206,out){
return (function (p1__11099_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11099_SHARP_);
});
;})(cs,vec__11159,v,c,inst_11154,inst_11163,inst_11161,inst_11162,state_val_11183,c__6134__auto___11206,out))
})();
var inst_11167 = cljs.core.filterv.call(null,inst_11166,inst_11154);
var inst_11154__$1 = inst_11167;
var state_11182__$1 = (function (){var statearr_11197 = state_11182;
(statearr_11197[(10)] = inst_11154__$1);

return statearr_11197;
})();
var statearr_11198_11216 = state_11182__$1;
(statearr_11198_11216[(2)] = null);

(statearr_11198_11216[(1)] = (2));


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
});})(c__6134__auto___11206,out))
;
return ((function (switch__6078__auto__,c__6134__auto___11206,out){
return (function() {
var state_machine__6079__auto__ = null;
var state_machine__6079__auto____0 = (function (){
var statearr_11202 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11202[(0)] = state_machine__6079__auto__);

(statearr_11202[(1)] = (1));

return statearr_11202;
});
var state_machine__6079__auto____1 = (function (state_11182){
while(true){
var ret_value__6080__auto__ = (function (){try{while(true){
var result__6081__auto__ = switch__6078__auto__.call(null,state_11182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6081__auto__;
}
break;
}
}catch (e11203){if((e11203 instanceof Object)){
var ex__6082__auto__ = e11203;
var statearr_11204_11217 = state_11182;
(statearr_11204_11217[(5)] = ex__6082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11218 = state_11182;
state_11182 = G__11218;
continue;
} else {
return ret_value__6080__auto__;
}
break;
}
});
state_machine__6079__auto__ = function(state_11182){
switch(arguments.length){
case 0:
return state_machine__6079__auto____0.call(this);
case 1:
return state_machine__6079__auto____1.call(this,state_11182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6079__auto____0;
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6079__auto____1;
return state_machine__6079__auto__;
})()
;})(switch__6078__auto__,c__6134__auto___11206,out))
})();
var state__6136__auto__ = (function (){var statearr_11205 = f__6135__auto__.call(null);
(statearr_11205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6134__auto___11206);

return statearr_11205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6136__auto__);
});})(c__6134__auto___11206,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6134__auto___11311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6134__auto___11311,out){
return (function (){
var f__6135__auto__ = (function (){var switch__6078__auto__ = ((function (c__6134__auto___11311,out){
return (function (state_11288){
var state_val_11289 = (state_11288[(1)]);
if((state_val_11289 === (7))){
var inst_11270 = (state_11288[(7)]);
var inst_11270__$1 = (state_11288[(2)]);
var inst_11271 = (inst_11270__$1 == null);
var inst_11272 = cljs.core.not.call(null,inst_11271);
var state_11288__$1 = (function (){var statearr_11290 = state_11288;
(statearr_11290[(7)] = inst_11270__$1);

return statearr_11290;
})();
if(inst_11272){
var statearr_11291_11312 = state_11288__$1;
(statearr_11291_11312[(1)] = (8));

} else {
var statearr_11292_11313 = state_11288__$1;
(statearr_11292_11313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11289 === (1))){
var inst_11265 = (0);
var state_11288__$1 = (function (){var statearr_11293 = state_11288;
(statearr_11293[(8)] = inst_11265);

return statearr_11293;
})();
var statearr_11294_11314 = state_11288__$1;
(statearr_11294_11314[(2)] = null);

(statearr_11294_11314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11289 === (4))){
var state_11288__$1 = state_11288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11288__$1,(7),ch);
} else {
if((state_val_11289 === (6))){
var inst_11283 = (state_11288[(2)]);
var state_11288__$1 = state_11288;
var statearr_11295_11315 = state_11288__$1;
(statearr_11295_11315[(2)] = inst_11283);

(statearr_11295_11315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11289 === (3))){
var inst_11285 = (state_11288[(2)]);
var inst_11286 = cljs.core.async.close_BANG_.call(null,out);
var state_11288__$1 = (function (){var statearr_11296 = state_11288;
(statearr_11296[(9)] = inst_11285);

return statearr_11296;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11288__$1,inst_11286);
} else {
if((state_val_11289 === (2))){
var inst_11265 = (state_11288[(8)]);
var inst_11267 = (inst_11265 < n);
var state_11288__$1 = state_11288;
if(cljs.core.truth_(inst_11267)){
var statearr_11297_11316 = state_11288__$1;
(statearr_11297_11316[(1)] = (4));

} else {
var statearr_11298_11317 = state_11288__$1;
(statearr_11298_11317[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11289 === (11))){
var inst_11265 = (state_11288[(8)]);
var inst_11275 = (state_11288[(2)]);
var inst_11276 = (inst_11265 + (1));
var inst_11265__$1 = inst_11276;
var state_11288__$1 = (function (){var statearr_11299 = state_11288;
(statearr_11299[(10)] = inst_11275);

(statearr_11299[(8)] = inst_11265__$1);

return statearr_11299;
})();
var statearr_11300_11318 = state_11288__$1;
(statearr_11300_11318[(2)] = null);

(statearr_11300_11318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11289 === (9))){
var state_11288__$1 = state_11288;
var statearr_11301_11319 = state_11288__$1;
(statearr_11301_11319[(2)] = null);

(statearr_11301_11319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11289 === (5))){
var state_11288__$1 = state_11288;
var statearr_11302_11320 = state_11288__$1;
(statearr_11302_11320[(2)] = null);

(statearr_11302_11320[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11289 === (10))){
var inst_11280 = (state_11288[(2)]);
var state_11288__$1 = state_11288;
var statearr_11303_11321 = state_11288__$1;
(statearr_11303_11321[(2)] = inst_11280);

(statearr_11303_11321[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11289 === (8))){
var inst_11270 = (state_11288[(7)]);
var state_11288__$1 = state_11288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11288__$1,(11),out,inst_11270);
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
});})(c__6134__auto___11311,out))
;
return ((function (switch__6078__auto__,c__6134__auto___11311,out){
return (function() {
var state_machine__6079__auto__ = null;
var state_machine__6079__auto____0 = (function (){
var statearr_11307 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11307[(0)] = state_machine__6079__auto__);

(statearr_11307[(1)] = (1));

return statearr_11307;
});
var state_machine__6079__auto____1 = (function (state_11288){
while(true){
var ret_value__6080__auto__ = (function (){try{while(true){
var result__6081__auto__ = switch__6078__auto__.call(null,state_11288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6081__auto__;
}
break;
}
}catch (e11308){if((e11308 instanceof Object)){
var ex__6082__auto__ = e11308;
var statearr_11309_11322 = state_11288;
(statearr_11309_11322[(5)] = ex__6082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11323 = state_11288;
state_11288 = G__11323;
continue;
} else {
return ret_value__6080__auto__;
}
break;
}
});
state_machine__6079__auto__ = function(state_11288){
switch(arguments.length){
case 0:
return state_machine__6079__auto____0.call(this);
case 1:
return state_machine__6079__auto____1.call(this,state_11288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6079__auto____0;
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6079__auto____1;
return state_machine__6079__auto__;
})()
;})(switch__6078__auto__,c__6134__auto___11311,out))
})();
var state__6136__auto__ = (function (){var statearr_11310 = f__6135__auto__.call(null);
(statearr_11310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6134__auto___11311);

return statearr_11310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6136__auto__);
});})(c__6134__auto___11311,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t11331 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11331 = (function (map_LT_,f,ch,meta11332){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11332 = meta11332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11333,meta11332__$1){
var self__ = this;
var _11333__$1 = this;
return (new cljs.core.async.t11331(self__.map_LT_,self__.f,self__.ch,meta11332__$1));
});

cljs.core.async.t11331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11333){
var self__ = this;
var _11333__$1 = this;
return self__.meta11332;
});

cljs.core.async.t11331.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t11331.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t11331.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t11331.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t11331.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t11334 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11334 = (function (map_LT_,f,ch,meta11332,_,fn1,meta11335){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11332 = meta11332;
this._ = _;
this.fn1 = fn1;
this.meta11335 = meta11335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11336,meta11335__$1){
var self__ = this;
var _11336__$1 = this;
return (new cljs.core.async.t11334(self__.map_LT_,self__.f,self__.ch,self__.meta11332,self__._,self__.fn1,meta11335__$1));
});})(___$1))
;

cljs.core.async.t11334.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11336){
var self__ = this;
var _11336__$1 = this;
return self__.meta11335;
});})(___$1))
;

cljs.core.async.t11334.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11334.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t11334.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11324_SHARP_){
return f1.call(null,(((p1__11324_SHARP_ == null))?null:self__.f.call(null,p1__11324_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t11334.cljs$lang$type = true;

cljs.core.async.t11334.cljs$lang$ctorStr = "cljs.core.async/t11334";

cljs.core.async.t11334.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__3714__auto__,writer__3715__auto__,opt__3716__auto__){
return cljs.core._write.call(null,writer__3715__auto__,"cljs.core.async/t11334");
});})(___$1))
;

cljs.core.async.__GT_t11334 = ((function (___$1){
return (function __GT_t11334(map_LT___$1,f__$1,ch__$1,meta11332__$1,___$2,fn1__$1,meta11335){
return (new cljs.core.async.t11334(map_LT___$1,f__$1,ch__$1,meta11332__$1,___$2,fn1__$1,meta11335));
});})(___$1))
;

}

return (new cljs.core.async.t11334(self__.map_LT_,self__.f,self__.ch,self__.meta11332,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3115__auto__ = ret;
if(cljs.core.truth_(and__3115__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t11331.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t11331.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t11331.cljs$lang$type = true;

cljs.core.async.t11331.cljs$lang$ctorStr = "cljs.core.async/t11331";

cljs.core.async.t11331.cljs$lang$ctorPrWriter = (function (this__3714__auto__,writer__3715__auto__,opt__3716__auto__){
return cljs.core._write.call(null,writer__3715__auto__,"cljs.core.async/t11331");
});

cljs.core.async.__GT_t11331 = (function __GT_t11331(map_LT___$1,f__$1,ch__$1,meta11332){
return (new cljs.core.async.t11331(map_LT___$1,f__$1,ch__$1,meta11332));
});

}

return (new cljs.core.async.t11331(map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t11340 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11340 = (function (map_GT_,f,ch,meta11341){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta11341 = meta11341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11342,meta11341__$1){
var self__ = this;
var _11342__$1 = this;
return (new cljs.core.async.t11340(self__.map_GT_,self__.f,self__.ch,meta11341__$1));
});

cljs.core.async.t11340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11342){
var self__ = this;
var _11342__$1 = this;
return self__.meta11341;
});

cljs.core.async.t11340.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t11340.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t11340.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t11340.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t11340.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t11340.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t11340.cljs$lang$type = true;

cljs.core.async.t11340.cljs$lang$ctorStr = "cljs.core.async/t11340";

cljs.core.async.t11340.cljs$lang$ctorPrWriter = (function (this__3714__auto__,writer__3715__auto__,opt__3716__auto__){
return cljs.core._write.call(null,writer__3715__auto__,"cljs.core.async/t11340");
});

cljs.core.async.__GT_t11340 = (function __GT_t11340(map_GT___$1,f__$1,ch__$1,meta11341){
return (new cljs.core.async.t11340(map_GT___$1,f__$1,ch__$1,meta11341));
});

}

return (new cljs.core.async.t11340(map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t11346 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11346 = (function (filter_GT_,p,ch,meta11347){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta11347 = meta11347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11348,meta11347__$1){
var self__ = this;
var _11348__$1 = this;
return (new cljs.core.async.t11346(self__.filter_GT_,self__.p,self__.ch,meta11347__$1));
});

cljs.core.async.t11346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11348){
var self__ = this;
var _11348__$1 = this;
return self__.meta11347;
});

cljs.core.async.t11346.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t11346.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t11346.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t11346.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t11346.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t11346.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t11346.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t11346.cljs$lang$type = true;

cljs.core.async.t11346.cljs$lang$ctorStr = "cljs.core.async/t11346";

cljs.core.async.t11346.cljs$lang$ctorPrWriter = (function (this__3714__auto__,writer__3715__auto__,opt__3716__auto__){
return cljs.core._write.call(null,writer__3715__auto__,"cljs.core.async/t11346");
});

cljs.core.async.__GT_t11346 = (function __GT_t11346(filter_GT___$1,p__$1,ch__$1,meta11347){
return (new cljs.core.async.t11346(filter_GT___$1,p__$1,ch__$1,meta11347));
});

}

return (new cljs.core.async.t11346(filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6134__auto___11431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6134__auto___11431,out){
return (function (){
var f__6135__auto__ = (function (){var switch__6078__auto__ = ((function (c__6134__auto___11431,out){
return (function (state_11410){
var state_val_11411 = (state_11410[(1)]);
if((state_val_11411 === (7))){
var inst_11406 = (state_11410[(2)]);
var state_11410__$1 = state_11410;
var statearr_11412_11432 = state_11410__$1;
(statearr_11412_11432[(2)] = inst_11406);

(statearr_11412_11432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11411 === (1))){
var state_11410__$1 = state_11410;
var statearr_11413_11433 = state_11410__$1;
(statearr_11413_11433[(2)] = null);

(statearr_11413_11433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11411 === (4))){
var inst_11392 = (state_11410[(7)]);
var inst_11392__$1 = (state_11410[(2)]);
var inst_11393 = (inst_11392__$1 == null);
var state_11410__$1 = (function (){var statearr_11414 = state_11410;
(statearr_11414[(7)] = inst_11392__$1);

return statearr_11414;
})();
if(cljs.core.truth_(inst_11393)){
var statearr_11415_11434 = state_11410__$1;
(statearr_11415_11434[(1)] = (5));

} else {
var statearr_11416_11435 = state_11410__$1;
(statearr_11416_11435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11411 === (6))){
var inst_11392 = (state_11410[(7)]);
var inst_11397 = p.call(null,inst_11392);
var state_11410__$1 = state_11410;
if(cljs.core.truth_(inst_11397)){
var statearr_11417_11436 = state_11410__$1;
(statearr_11417_11436[(1)] = (8));

} else {
var statearr_11418_11437 = state_11410__$1;
(statearr_11418_11437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11411 === (3))){
var inst_11408 = (state_11410[(2)]);
var state_11410__$1 = state_11410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11410__$1,inst_11408);
} else {
if((state_val_11411 === (2))){
var state_11410__$1 = state_11410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11410__$1,(4),ch);
} else {
if((state_val_11411 === (11))){
var inst_11400 = (state_11410[(2)]);
var state_11410__$1 = state_11410;
var statearr_11419_11438 = state_11410__$1;
(statearr_11419_11438[(2)] = inst_11400);

(statearr_11419_11438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11411 === (9))){
var state_11410__$1 = state_11410;
var statearr_11420_11439 = state_11410__$1;
(statearr_11420_11439[(2)] = null);

(statearr_11420_11439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11411 === (5))){
var inst_11395 = cljs.core.async.close_BANG_.call(null,out);
var state_11410__$1 = state_11410;
var statearr_11421_11440 = state_11410__$1;
(statearr_11421_11440[(2)] = inst_11395);

(statearr_11421_11440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11411 === (10))){
var inst_11403 = (state_11410[(2)]);
var state_11410__$1 = (function (){var statearr_11422 = state_11410;
(statearr_11422[(8)] = inst_11403);

return statearr_11422;
})();
var statearr_11423_11441 = state_11410__$1;
(statearr_11423_11441[(2)] = null);

(statearr_11423_11441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11411 === (8))){
var inst_11392 = (state_11410[(7)]);
var state_11410__$1 = state_11410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11410__$1,(11),out,inst_11392);
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
});})(c__6134__auto___11431,out))
;
return ((function (switch__6078__auto__,c__6134__auto___11431,out){
return (function() {
var state_machine__6079__auto__ = null;
var state_machine__6079__auto____0 = (function (){
var statearr_11427 = [null,null,null,null,null,null,null,null,null];
(statearr_11427[(0)] = state_machine__6079__auto__);

(statearr_11427[(1)] = (1));

return statearr_11427;
});
var state_machine__6079__auto____1 = (function (state_11410){
while(true){
var ret_value__6080__auto__ = (function (){try{while(true){
var result__6081__auto__ = switch__6078__auto__.call(null,state_11410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6081__auto__;
}
break;
}
}catch (e11428){if((e11428 instanceof Object)){
var ex__6082__auto__ = e11428;
var statearr_11429_11442 = state_11410;
(statearr_11429_11442[(5)] = ex__6082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11443 = state_11410;
state_11410 = G__11443;
continue;
} else {
return ret_value__6080__auto__;
}
break;
}
});
state_machine__6079__auto__ = function(state_11410){
switch(arguments.length){
case 0:
return state_machine__6079__auto____0.call(this);
case 1:
return state_machine__6079__auto____1.call(this,state_11410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6079__auto____0;
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6079__auto____1;
return state_machine__6079__auto__;
})()
;})(switch__6078__auto__,c__6134__auto___11431,out))
})();
var state__6136__auto__ = (function (){var statearr_11430 = f__6135__auto__.call(null);
(statearr_11430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6134__auto___11431);

return statearr_11430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6136__auto__);
});})(c__6134__auto___11431,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__6134__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6134__auto__){
return (function (){
var f__6135__auto__ = (function (){var switch__6078__auto__ = ((function (c__6134__auto__){
return (function (state_11609){
var state_val_11610 = (state_11609[(1)]);
if((state_val_11610 === (7))){
var inst_11605 = (state_11609[(2)]);
var state_11609__$1 = state_11609;
var statearr_11611_11652 = state_11609__$1;
(statearr_11611_11652[(2)] = inst_11605);

(statearr_11611_11652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (20))){
var inst_11575 = (state_11609[(7)]);
var inst_11586 = (state_11609[(2)]);
var inst_11587 = cljs.core.next.call(null,inst_11575);
var inst_11561 = inst_11587;
var inst_11562 = null;
var inst_11563 = (0);
var inst_11564 = (0);
var state_11609__$1 = (function (){var statearr_11612 = state_11609;
(statearr_11612[(8)] = inst_11561);

(statearr_11612[(9)] = inst_11586);

(statearr_11612[(10)] = inst_11562);

(statearr_11612[(11)] = inst_11563);

(statearr_11612[(12)] = inst_11564);

return statearr_11612;
})();
var statearr_11613_11653 = state_11609__$1;
(statearr_11613_11653[(2)] = null);

(statearr_11613_11653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (1))){
var state_11609__$1 = state_11609;
var statearr_11614_11654 = state_11609__$1;
(statearr_11614_11654[(2)] = null);

(statearr_11614_11654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (4))){
var inst_11550 = (state_11609[(13)]);
var inst_11550__$1 = (state_11609[(2)]);
var inst_11551 = (inst_11550__$1 == null);
var state_11609__$1 = (function (){var statearr_11615 = state_11609;
(statearr_11615[(13)] = inst_11550__$1);

return statearr_11615;
})();
if(cljs.core.truth_(inst_11551)){
var statearr_11616_11655 = state_11609__$1;
(statearr_11616_11655[(1)] = (5));

} else {
var statearr_11617_11656 = state_11609__$1;
(statearr_11617_11656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (15))){
var state_11609__$1 = state_11609;
var statearr_11621_11657 = state_11609__$1;
(statearr_11621_11657[(2)] = null);

(statearr_11621_11657[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (21))){
var state_11609__$1 = state_11609;
var statearr_11622_11658 = state_11609__$1;
(statearr_11622_11658[(2)] = null);

(statearr_11622_11658[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (13))){
var inst_11561 = (state_11609[(8)]);
var inst_11562 = (state_11609[(10)]);
var inst_11563 = (state_11609[(11)]);
var inst_11564 = (state_11609[(12)]);
var inst_11571 = (state_11609[(2)]);
var inst_11572 = (inst_11564 + (1));
var tmp11618 = inst_11561;
var tmp11619 = inst_11562;
var tmp11620 = inst_11563;
var inst_11561__$1 = tmp11618;
var inst_11562__$1 = tmp11619;
var inst_11563__$1 = tmp11620;
var inst_11564__$1 = inst_11572;
var state_11609__$1 = (function (){var statearr_11623 = state_11609;
(statearr_11623[(8)] = inst_11561__$1);

(statearr_11623[(14)] = inst_11571);

(statearr_11623[(10)] = inst_11562__$1);

(statearr_11623[(11)] = inst_11563__$1);

(statearr_11623[(12)] = inst_11564__$1);

return statearr_11623;
})();
var statearr_11624_11659 = state_11609__$1;
(statearr_11624_11659[(2)] = null);

(statearr_11624_11659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (22))){
var state_11609__$1 = state_11609;
var statearr_11625_11660 = state_11609__$1;
(statearr_11625_11660[(2)] = null);

(statearr_11625_11660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (6))){
var inst_11550 = (state_11609[(13)]);
var inst_11559 = f.call(null,inst_11550);
var inst_11560 = cljs.core.seq.call(null,inst_11559);
var inst_11561 = inst_11560;
var inst_11562 = null;
var inst_11563 = (0);
var inst_11564 = (0);
var state_11609__$1 = (function (){var statearr_11626 = state_11609;
(statearr_11626[(8)] = inst_11561);

(statearr_11626[(10)] = inst_11562);

(statearr_11626[(11)] = inst_11563);

(statearr_11626[(12)] = inst_11564);

return statearr_11626;
})();
var statearr_11627_11661 = state_11609__$1;
(statearr_11627_11661[(2)] = null);

(statearr_11627_11661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (17))){
var inst_11575 = (state_11609[(7)]);
var inst_11579 = cljs.core.chunk_first.call(null,inst_11575);
var inst_11580 = cljs.core.chunk_rest.call(null,inst_11575);
var inst_11581 = cljs.core.count.call(null,inst_11579);
var inst_11561 = inst_11580;
var inst_11562 = inst_11579;
var inst_11563 = inst_11581;
var inst_11564 = (0);
var state_11609__$1 = (function (){var statearr_11628 = state_11609;
(statearr_11628[(8)] = inst_11561);

(statearr_11628[(10)] = inst_11562);

(statearr_11628[(11)] = inst_11563);

(statearr_11628[(12)] = inst_11564);

return statearr_11628;
})();
var statearr_11629_11662 = state_11609__$1;
(statearr_11629_11662[(2)] = null);

(statearr_11629_11662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (3))){
var inst_11607 = (state_11609[(2)]);
var state_11609__$1 = state_11609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11609__$1,inst_11607);
} else {
if((state_val_11610 === (12))){
var inst_11595 = (state_11609[(2)]);
var state_11609__$1 = state_11609;
var statearr_11630_11663 = state_11609__$1;
(statearr_11630_11663[(2)] = inst_11595);

(statearr_11630_11663[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (2))){
var state_11609__$1 = state_11609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11609__$1,(4),in$);
} else {
if((state_val_11610 === (23))){
var inst_11603 = (state_11609[(2)]);
var state_11609__$1 = state_11609;
var statearr_11631_11664 = state_11609__$1;
(statearr_11631_11664[(2)] = inst_11603);

(statearr_11631_11664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (19))){
var inst_11590 = (state_11609[(2)]);
var state_11609__$1 = state_11609;
var statearr_11632_11665 = state_11609__$1;
(statearr_11632_11665[(2)] = inst_11590);

(statearr_11632_11665[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (11))){
var inst_11561 = (state_11609[(8)]);
var inst_11575 = (state_11609[(7)]);
var inst_11575__$1 = cljs.core.seq.call(null,inst_11561);
var state_11609__$1 = (function (){var statearr_11633 = state_11609;
(statearr_11633[(7)] = inst_11575__$1);

return statearr_11633;
})();
if(inst_11575__$1){
var statearr_11634_11666 = state_11609__$1;
(statearr_11634_11666[(1)] = (14));

} else {
var statearr_11635_11667 = state_11609__$1;
(statearr_11635_11667[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (9))){
var inst_11597 = (state_11609[(2)]);
var inst_11598 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11609__$1 = (function (){var statearr_11636 = state_11609;
(statearr_11636[(15)] = inst_11597);

return statearr_11636;
})();
if(cljs.core.truth_(inst_11598)){
var statearr_11637_11668 = state_11609__$1;
(statearr_11637_11668[(1)] = (21));

} else {
var statearr_11638_11669 = state_11609__$1;
(statearr_11638_11669[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (5))){
var inst_11553 = cljs.core.async.close_BANG_.call(null,out);
var state_11609__$1 = state_11609;
var statearr_11639_11670 = state_11609__$1;
(statearr_11639_11670[(2)] = inst_11553);

(statearr_11639_11670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (14))){
var inst_11575 = (state_11609[(7)]);
var inst_11577 = cljs.core.chunked_seq_QMARK_.call(null,inst_11575);
var state_11609__$1 = state_11609;
if(inst_11577){
var statearr_11640_11671 = state_11609__$1;
(statearr_11640_11671[(1)] = (17));

} else {
var statearr_11641_11672 = state_11609__$1;
(statearr_11641_11672[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (16))){
var inst_11593 = (state_11609[(2)]);
var state_11609__$1 = state_11609;
var statearr_11642_11673 = state_11609__$1;
(statearr_11642_11673[(2)] = inst_11593);

(statearr_11642_11673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11610 === (10))){
var inst_11562 = (state_11609[(10)]);
var inst_11564 = (state_11609[(12)]);
var inst_11569 = cljs.core._nth.call(null,inst_11562,inst_11564);
var state_11609__$1 = state_11609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11609__$1,(13),out,inst_11569);
} else {
if((state_val_11610 === (18))){
var inst_11575 = (state_11609[(7)]);
var inst_11584 = cljs.core.first.call(null,inst_11575);
var state_11609__$1 = state_11609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11609__$1,(20),out,inst_11584);
} else {
if((state_val_11610 === (8))){
var inst_11563 = (state_11609[(11)]);
var inst_11564 = (state_11609[(12)]);
var inst_11566 = (inst_11564 < inst_11563);
var inst_11567 = inst_11566;
var state_11609__$1 = state_11609;
if(cljs.core.truth_(inst_11567)){
var statearr_11643_11674 = state_11609__$1;
(statearr_11643_11674[(1)] = (10));

} else {
var statearr_11644_11675 = state_11609__$1;
(statearr_11644_11675[(1)] = (11));

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
});})(c__6134__auto__))
;
return ((function (switch__6078__auto__,c__6134__auto__){
return (function() {
var state_machine__6079__auto__ = null;
var state_machine__6079__auto____0 = (function (){
var statearr_11648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11648[(0)] = state_machine__6079__auto__);

(statearr_11648[(1)] = (1));

return statearr_11648;
});
var state_machine__6079__auto____1 = (function (state_11609){
while(true){
var ret_value__6080__auto__ = (function (){try{while(true){
var result__6081__auto__ = switch__6078__auto__.call(null,state_11609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6081__auto__;
}
break;
}
}catch (e11649){if((e11649 instanceof Object)){
var ex__6082__auto__ = e11649;
var statearr_11650_11676 = state_11609;
(statearr_11650_11676[(5)] = ex__6082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11677 = state_11609;
state_11609 = G__11677;
continue;
} else {
return ret_value__6080__auto__;
}
break;
}
});
state_machine__6079__auto__ = function(state_11609){
switch(arguments.length){
case 0:
return state_machine__6079__auto____0.call(this);
case 1:
return state_machine__6079__auto____1.call(this,state_11609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6079__auto____0;
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6079__auto____1;
return state_machine__6079__auto__;
})()
;})(switch__6078__auto__,c__6134__auto__))
})();
var state__6136__auto__ = (function (){var statearr_11651 = f__6135__auto__.call(null);
(statearr_11651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6134__auto__);

return statearr_11651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6136__auto__);
});})(c__6134__auto__))
);

return c__6134__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6134__auto___11774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6134__auto___11774,out){
return (function (){
var f__6135__auto__ = (function (){var switch__6078__auto__ = ((function (c__6134__auto___11774,out){
return (function (state_11749){
var state_val_11750 = (state_11749[(1)]);
if((state_val_11750 === (7))){
var inst_11744 = (state_11749[(2)]);
var state_11749__$1 = state_11749;
var statearr_11751_11775 = state_11749__$1;
(statearr_11751_11775[(2)] = inst_11744);

(statearr_11751_11775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11750 === (1))){
var inst_11726 = null;
var state_11749__$1 = (function (){var statearr_11752 = state_11749;
(statearr_11752[(7)] = inst_11726);

return statearr_11752;
})();
var statearr_11753_11776 = state_11749__$1;
(statearr_11753_11776[(2)] = null);

(statearr_11753_11776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11750 === (4))){
var inst_11729 = (state_11749[(8)]);
var inst_11729__$1 = (state_11749[(2)]);
var inst_11730 = (inst_11729__$1 == null);
var inst_11731 = cljs.core.not.call(null,inst_11730);
var state_11749__$1 = (function (){var statearr_11754 = state_11749;
(statearr_11754[(8)] = inst_11729__$1);

return statearr_11754;
})();
if(inst_11731){
var statearr_11755_11777 = state_11749__$1;
(statearr_11755_11777[(1)] = (5));

} else {
var statearr_11756_11778 = state_11749__$1;
(statearr_11756_11778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11750 === (6))){
var state_11749__$1 = state_11749;
var statearr_11757_11779 = state_11749__$1;
(statearr_11757_11779[(2)] = null);

(statearr_11757_11779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11750 === (3))){
var inst_11746 = (state_11749[(2)]);
var inst_11747 = cljs.core.async.close_BANG_.call(null,out);
var state_11749__$1 = (function (){var statearr_11758 = state_11749;
(statearr_11758[(9)] = inst_11746);

return statearr_11758;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11749__$1,inst_11747);
} else {
if((state_val_11750 === (2))){
var state_11749__$1 = state_11749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11749__$1,(4),ch);
} else {
if((state_val_11750 === (11))){
var inst_11729 = (state_11749[(8)]);
var inst_11738 = (state_11749[(2)]);
var inst_11726 = inst_11729;
var state_11749__$1 = (function (){var statearr_11759 = state_11749;
(statearr_11759[(10)] = inst_11738);

(statearr_11759[(7)] = inst_11726);

return statearr_11759;
})();
var statearr_11760_11780 = state_11749__$1;
(statearr_11760_11780[(2)] = null);

(statearr_11760_11780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11750 === (9))){
var inst_11729 = (state_11749[(8)]);
var state_11749__$1 = state_11749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11749__$1,(11),out,inst_11729);
} else {
if((state_val_11750 === (5))){
var inst_11729 = (state_11749[(8)]);
var inst_11726 = (state_11749[(7)]);
var inst_11733 = cljs.core._EQ_.call(null,inst_11729,inst_11726);
var state_11749__$1 = state_11749;
if(inst_11733){
var statearr_11762_11781 = state_11749__$1;
(statearr_11762_11781[(1)] = (8));

} else {
var statearr_11763_11782 = state_11749__$1;
(statearr_11763_11782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11750 === (10))){
var inst_11741 = (state_11749[(2)]);
var state_11749__$1 = state_11749;
var statearr_11764_11783 = state_11749__$1;
(statearr_11764_11783[(2)] = inst_11741);

(statearr_11764_11783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11750 === (8))){
var inst_11726 = (state_11749[(7)]);
var tmp11761 = inst_11726;
var inst_11726__$1 = tmp11761;
var state_11749__$1 = (function (){var statearr_11765 = state_11749;
(statearr_11765[(7)] = inst_11726__$1);

return statearr_11765;
})();
var statearr_11766_11784 = state_11749__$1;
(statearr_11766_11784[(2)] = null);

(statearr_11766_11784[(1)] = (2));


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
});})(c__6134__auto___11774,out))
;
return ((function (switch__6078__auto__,c__6134__auto___11774,out){
return (function() {
var state_machine__6079__auto__ = null;
var state_machine__6079__auto____0 = (function (){
var statearr_11770 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11770[(0)] = state_machine__6079__auto__);

(statearr_11770[(1)] = (1));

return statearr_11770;
});
var state_machine__6079__auto____1 = (function (state_11749){
while(true){
var ret_value__6080__auto__ = (function (){try{while(true){
var result__6081__auto__ = switch__6078__auto__.call(null,state_11749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6081__auto__;
}
break;
}
}catch (e11771){if((e11771 instanceof Object)){
var ex__6082__auto__ = e11771;
var statearr_11772_11785 = state_11749;
(statearr_11772_11785[(5)] = ex__6082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11786 = state_11749;
state_11749 = G__11786;
continue;
} else {
return ret_value__6080__auto__;
}
break;
}
});
state_machine__6079__auto__ = function(state_11749){
switch(arguments.length){
case 0:
return state_machine__6079__auto____0.call(this);
case 1:
return state_machine__6079__auto____1.call(this,state_11749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6079__auto____0;
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6079__auto____1;
return state_machine__6079__auto__;
})()
;})(switch__6078__auto__,c__6134__auto___11774,out))
})();
var state__6136__auto__ = (function (){var statearr_11773 = f__6135__auto__.call(null);
(statearr_11773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6134__auto___11774);

return statearr_11773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6136__auto__);
});})(c__6134__auto___11774,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6134__auto___11921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6134__auto___11921,out){
return (function (){
var f__6135__auto__ = (function (){var switch__6078__auto__ = ((function (c__6134__auto___11921,out){
return (function (state_11891){
var state_val_11892 = (state_11891[(1)]);
if((state_val_11892 === (7))){
var inst_11887 = (state_11891[(2)]);
var state_11891__$1 = state_11891;
var statearr_11893_11922 = state_11891__$1;
(statearr_11893_11922[(2)] = inst_11887);

(statearr_11893_11922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11892 === (1))){
var inst_11854 = (new Array(n));
var inst_11855 = inst_11854;
var inst_11856 = (0);
var state_11891__$1 = (function (){var statearr_11894 = state_11891;
(statearr_11894[(7)] = inst_11855);

(statearr_11894[(8)] = inst_11856);

return statearr_11894;
})();
var statearr_11895_11923 = state_11891__$1;
(statearr_11895_11923[(2)] = null);

(statearr_11895_11923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11892 === (4))){
var inst_11859 = (state_11891[(9)]);
var inst_11859__$1 = (state_11891[(2)]);
var inst_11860 = (inst_11859__$1 == null);
var inst_11861 = cljs.core.not.call(null,inst_11860);
var state_11891__$1 = (function (){var statearr_11896 = state_11891;
(statearr_11896[(9)] = inst_11859__$1);

return statearr_11896;
})();
if(inst_11861){
var statearr_11897_11924 = state_11891__$1;
(statearr_11897_11924[(1)] = (5));

} else {
var statearr_11898_11925 = state_11891__$1;
(statearr_11898_11925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11892 === (15))){
var inst_11881 = (state_11891[(2)]);
var state_11891__$1 = state_11891;
var statearr_11899_11926 = state_11891__$1;
(statearr_11899_11926[(2)] = inst_11881);

(statearr_11899_11926[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11892 === (13))){
var state_11891__$1 = state_11891;
var statearr_11900_11927 = state_11891__$1;
(statearr_11900_11927[(2)] = null);

(statearr_11900_11927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11892 === (6))){
var inst_11856 = (state_11891[(8)]);
var inst_11877 = (inst_11856 > (0));
var state_11891__$1 = state_11891;
if(cljs.core.truth_(inst_11877)){
var statearr_11901_11928 = state_11891__$1;
(statearr_11901_11928[(1)] = (12));

} else {
var statearr_11902_11929 = state_11891__$1;
(statearr_11902_11929[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11892 === (3))){
var inst_11889 = (state_11891[(2)]);
var state_11891__$1 = state_11891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11891__$1,inst_11889);
} else {
if((state_val_11892 === (12))){
var inst_11855 = (state_11891[(7)]);
var inst_11879 = cljs.core.vec.call(null,inst_11855);
var state_11891__$1 = state_11891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11891__$1,(15),out,inst_11879);
} else {
if((state_val_11892 === (2))){
var state_11891__$1 = state_11891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11891__$1,(4),ch);
} else {
if((state_val_11892 === (11))){
var inst_11871 = (state_11891[(2)]);
var inst_11872 = (new Array(n));
var inst_11855 = inst_11872;
var inst_11856 = (0);
var state_11891__$1 = (function (){var statearr_11903 = state_11891;
(statearr_11903[(7)] = inst_11855);

(statearr_11903[(10)] = inst_11871);

(statearr_11903[(8)] = inst_11856);

return statearr_11903;
})();
var statearr_11904_11930 = state_11891__$1;
(statearr_11904_11930[(2)] = null);

(statearr_11904_11930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11892 === (9))){
var inst_11855 = (state_11891[(7)]);
var inst_11869 = cljs.core.vec.call(null,inst_11855);
var state_11891__$1 = state_11891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11891__$1,(11),out,inst_11869);
} else {
if((state_val_11892 === (5))){
var inst_11855 = (state_11891[(7)]);
var inst_11864 = (state_11891[(11)]);
var inst_11859 = (state_11891[(9)]);
var inst_11856 = (state_11891[(8)]);
var inst_11863 = (inst_11855[inst_11856] = inst_11859);
var inst_11864__$1 = (inst_11856 + (1));
var inst_11865 = (inst_11864__$1 < n);
var state_11891__$1 = (function (){var statearr_11905 = state_11891;
(statearr_11905[(11)] = inst_11864__$1);

(statearr_11905[(12)] = inst_11863);

return statearr_11905;
})();
if(cljs.core.truth_(inst_11865)){
var statearr_11906_11931 = state_11891__$1;
(statearr_11906_11931[(1)] = (8));

} else {
var statearr_11907_11932 = state_11891__$1;
(statearr_11907_11932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11892 === (14))){
var inst_11884 = (state_11891[(2)]);
var inst_11885 = cljs.core.async.close_BANG_.call(null,out);
var state_11891__$1 = (function (){var statearr_11909 = state_11891;
(statearr_11909[(13)] = inst_11884);

return statearr_11909;
})();
var statearr_11910_11933 = state_11891__$1;
(statearr_11910_11933[(2)] = inst_11885);

(statearr_11910_11933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11892 === (10))){
var inst_11875 = (state_11891[(2)]);
var state_11891__$1 = state_11891;
var statearr_11911_11934 = state_11891__$1;
(statearr_11911_11934[(2)] = inst_11875);

(statearr_11911_11934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11892 === (8))){
var inst_11855 = (state_11891[(7)]);
var inst_11864 = (state_11891[(11)]);
var tmp11908 = inst_11855;
var inst_11855__$1 = tmp11908;
var inst_11856 = inst_11864;
var state_11891__$1 = (function (){var statearr_11912 = state_11891;
(statearr_11912[(7)] = inst_11855__$1);

(statearr_11912[(8)] = inst_11856);

return statearr_11912;
})();
var statearr_11913_11935 = state_11891__$1;
(statearr_11913_11935[(2)] = null);

(statearr_11913_11935[(1)] = (2));


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
});})(c__6134__auto___11921,out))
;
return ((function (switch__6078__auto__,c__6134__auto___11921,out){
return (function() {
var state_machine__6079__auto__ = null;
var state_machine__6079__auto____0 = (function (){
var statearr_11917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11917[(0)] = state_machine__6079__auto__);

(statearr_11917[(1)] = (1));

return statearr_11917;
});
var state_machine__6079__auto____1 = (function (state_11891){
while(true){
var ret_value__6080__auto__ = (function (){try{while(true){
var result__6081__auto__ = switch__6078__auto__.call(null,state_11891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6081__auto__;
}
break;
}
}catch (e11918){if((e11918 instanceof Object)){
var ex__6082__auto__ = e11918;
var statearr_11919_11936 = state_11891;
(statearr_11919_11936[(5)] = ex__6082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11937 = state_11891;
state_11891 = G__11937;
continue;
} else {
return ret_value__6080__auto__;
}
break;
}
});
state_machine__6079__auto__ = function(state_11891){
switch(arguments.length){
case 0:
return state_machine__6079__auto____0.call(this);
case 1:
return state_machine__6079__auto____1.call(this,state_11891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6079__auto____0;
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6079__auto____1;
return state_machine__6079__auto__;
})()
;})(switch__6078__auto__,c__6134__auto___11921,out))
})();
var state__6136__auto__ = (function (){var statearr_11920 = f__6135__auto__.call(null);
(statearr_11920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6134__auto___11921);

return statearr_11920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6136__auto__);
});})(c__6134__auto___11921,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6134__auto___12080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6134__auto___12080,out){
return (function (){
var f__6135__auto__ = (function (){var switch__6078__auto__ = ((function (c__6134__auto___12080,out){
return (function (state_12050){
var state_val_12051 = (state_12050[(1)]);
if((state_val_12051 === (7))){
var inst_12046 = (state_12050[(2)]);
var state_12050__$1 = state_12050;
var statearr_12052_12081 = state_12050__$1;
(statearr_12052_12081[(2)] = inst_12046);

(statearr_12052_12081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (1))){
var inst_12009 = [];
var inst_12010 = inst_12009;
var inst_12011 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12050__$1 = (function (){var statearr_12053 = state_12050;
(statearr_12053[(7)] = inst_12011);

(statearr_12053[(8)] = inst_12010);

return statearr_12053;
})();
var statearr_12054_12082 = state_12050__$1;
(statearr_12054_12082[(2)] = null);

(statearr_12054_12082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (4))){
var inst_12014 = (state_12050[(9)]);
var inst_12014__$1 = (state_12050[(2)]);
var inst_12015 = (inst_12014__$1 == null);
var inst_12016 = cljs.core.not.call(null,inst_12015);
var state_12050__$1 = (function (){var statearr_12055 = state_12050;
(statearr_12055[(9)] = inst_12014__$1);

return statearr_12055;
})();
if(inst_12016){
var statearr_12056_12083 = state_12050__$1;
(statearr_12056_12083[(1)] = (5));

} else {
var statearr_12057_12084 = state_12050__$1;
(statearr_12057_12084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (15))){
var inst_12040 = (state_12050[(2)]);
var state_12050__$1 = state_12050;
var statearr_12058_12085 = state_12050__$1;
(statearr_12058_12085[(2)] = inst_12040);

(statearr_12058_12085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (13))){
var state_12050__$1 = state_12050;
var statearr_12059_12086 = state_12050__$1;
(statearr_12059_12086[(2)] = null);

(statearr_12059_12086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (6))){
var inst_12010 = (state_12050[(8)]);
var inst_12035 = inst_12010.length;
var inst_12036 = (inst_12035 > (0));
var state_12050__$1 = state_12050;
if(cljs.core.truth_(inst_12036)){
var statearr_12060_12087 = state_12050__$1;
(statearr_12060_12087[(1)] = (12));

} else {
var statearr_12061_12088 = state_12050__$1;
(statearr_12061_12088[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (3))){
var inst_12048 = (state_12050[(2)]);
var state_12050__$1 = state_12050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12050__$1,inst_12048);
} else {
if((state_val_12051 === (12))){
var inst_12010 = (state_12050[(8)]);
var inst_12038 = cljs.core.vec.call(null,inst_12010);
var state_12050__$1 = state_12050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12050__$1,(15),out,inst_12038);
} else {
if((state_val_12051 === (2))){
var state_12050__$1 = state_12050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12050__$1,(4),ch);
} else {
if((state_val_12051 === (11))){
var inst_12018 = (state_12050[(10)]);
var inst_12014 = (state_12050[(9)]);
var inst_12028 = (state_12050[(2)]);
var inst_12029 = [];
var inst_12030 = inst_12029.push(inst_12014);
var inst_12010 = inst_12029;
var inst_12011 = inst_12018;
var state_12050__$1 = (function (){var statearr_12062 = state_12050;
(statearr_12062[(7)] = inst_12011);

(statearr_12062[(8)] = inst_12010);

(statearr_12062[(11)] = inst_12030);

(statearr_12062[(12)] = inst_12028);

return statearr_12062;
})();
var statearr_12063_12089 = state_12050__$1;
(statearr_12063_12089[(2)] = null);

(statearr_12063_12089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (9))){
var inst_12010 = (state_12050[(8)]);
var inst_12026 = cljs.core.vec.call(null,inst_12010);
var state_12050__$1 = state_12050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12050__$1,(11),out,inst_12026);
} else {
if((state_val_12051 === (5))){
var inst_12011 = (state_12050[(7)]);
var inst_12018 = (state_12050[(10)]);
var inst_12014 = (state_12050[(9)]);
var inst_12018__$1 = f.call(null,inst_12014);
var inst_12019 = cljs.core._EQ_.call(null,inst_12018__$1,inst_12011);
var inst_12020 = cljs.core.keyword_identical_QMARK_.call(null,inst_12011,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12021 = (inst_12019) || (inst_12020);
var state_12050__$1 = (function (){var statearr_12064 = state_12050;
(statearr_12064[(10)] = inst_12018__$1);

return statearr_12064;
})();
if(cljs.core.truth_(inst_12021)){
var statearr_12065_12090 = state_12050__$1;
(statearr_12065_12090[(1)] = (8));

} else {
var statearr_12066_12091 = state_12050__$1;
(statearr_12066_12091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (14))){
var inst_12043 = (state_12050[(2)]);
var inst_12044 = cljs.core.async.close_BANG_.call(null,out);
var state_12050__$1 = (function (){var statearr_12068 = state_12050;
(statearr_12068[(13)] = inst_12043);

return statearr_12068;
})();
var statearr_12069_12092 = state_12050__$1;
(statearr_12069_12092[(2)] = inst_12044);

(statearr_12069_12092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (10))){
var inst_12033 = (state_12050[(2)]);
var state_12050__$1 = state_12050;
var statearr_12070_12093 = state_12050__$1;
(statearr_12070_12093[(2)] = inst_12033);

(statearr_12070_12093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (8))){
var inst_12018 = (state_12050[(10)]);
var inst_12014 = (state_12050[(9)]);
var inst_12010 = (state_12050[(8)]);
var inst_12023 = inst_12010.push(inst_12014);
var tmp12067 = inst_12010;
var inst_12010__$1 = tmp12067;
var inst_12011 = inst_12018;
var state_12050__$1 = (function (){var statearr_12071 = state_12050;
(statearr_12071[(14)] = inst_12023);

(statearr_12071[(7)] = inst_12011);

(statearr_12071[(8)] = inst_12010__$1);

return statearr_12071;
})();
var statearr_12072_12094 = state_12050__$1;
(statearr_12072_12094[(2)] = null);

(statearr_12072_12094[(1)] = (2));


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
});})(c__6134__auto___12080,out))
;
return ((function (switch__6078__auto__,c__6134__auto___12080,out){
return (function() {
var state_machine__6079__auto__ = null;
var state_machine__6079__auto____0 = (function (){
var statearr_12076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12076[(0)] = state_machine__6079__auto__);

(statearr_12076[(1)] = (1));

return statearr_12076;
});
var state_machine__6079__auto____1 = (function (state_12050){
while(true){
var ret_value__6080__auto__ = (function (){try{while(true){
var result__6081__auto__ = switch__6078__auto__.call(null,state_12050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6081__auto__;
}
break;
}
}catch (e12077){if((e12077 instanceof Object)){
var ex__6082__auto__ = e12077;
var statearr_12078_12095 = state_12050;
(statearr_12078_12095[(5)] = ex__6082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12096 = state_12050;
state_12050 = G__12096;
continue;
} else {
return ret_value__6080__auto__;
}
break;
}
});
state_machine__6079__auto__ = function(state_12050){
switch(arguments.length){
case 0:
return state_machine__6079__auto____0.call(this);
case 1:
return state_machine__6079__auto____1.call(this,state_12050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6079__auto____0;
state_machine__6079__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6079__auto____1;
return state_machine__6079__auto__;
})()
;})(switch__6078__auto__,c__6134__auto___12080,out))
})();
var state__6136__auto__ = (function (){var statearr_12079 = f__6135__auto__.call(null);
(statearr_12079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6134__auto___12080);

return statearr_12079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6136__auto__);
});})(c__6134__auto___12080,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map