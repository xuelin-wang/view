// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args23653 = [];
var len__19538__auto___23659 = arguments.length;
var i__19539__auto___23660 = (0);
while(true){
if((i__19539__auto___23660 < len__19538__auto___23659)){
args23653.push((arguments[i__19539__auto___23660]));

var G__23661 = (i__19539__auto___23660 + (1));
i__19539__auto___23660 = G__23661;
continue;
} else {
}
break;
}

var G__23655 = args23653.length;
switch (G__23655) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23653.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23656 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23656 = (function (f,blockable,meta23657){
this.f = f;
this.blockable = blockable;
this.meta23657 = meta23657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23658,meta23657__$1){
var self__ = this;
var _23658__$1 = this;
return (new cljs.core.async.t_cljs$core$async23656(self__.f,self__.blockable,meta23657__$1));
});

cljs.core.async.t_cljs$core$async23656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23658){
var self__ = this;
var _23658__$1 = this;
return self__.meta23657;
});

cljs.core.async.t_cljs$core$async23656.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23656.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23657","meta23657",1690803838,null)], null);
});

cljs.core.async.t_cljs$core$async23656.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23656";

cljs.core.async.t_cljs$core$async23656.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async23656");
});

cljs.core.async.__GT_t_cljs$core$async23656 = (function cljs$core$async$__GT_t_cljs$core$async23656(f__$1,blockable__$1,meta23657){
return (new cljs.core.async.t_cljs$core$async23656(f__$1,blockable__$1,meta23657));
});

}

return (new cljs.core.async.t_cljs$core$async23656(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args23665 = [];
var len__19538__auto___23668 = arguments.length;
var i__19539__auto___23669 = (0);
while(true){
if((i__19539__auto___23669 < len__19538__auto___23668)){
args23665.push((arguments[i__19539__auto___23669]));

var G__23670 = (i__19539__auto___23669 + (1));
i__19539__auto___23669 = G__23670;
continue;
} else {
}
break;
}

var G__23667 = args23665.length;
switch (G__23667) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23665.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args23672 = [];
var len__19538__auto___23675 = arguments.length;
var i__19539__auto___23676 = (0);
while(true){
if((i__19539__auto___23676 < len__19538__auto___23675)){
args23672.push((arguments[i__19539__auto___23676]));

var G__23677 = (i__19539__auto___23676 + (1));
i__19539__auto___23676 = G__23677;
continue;
} else {
}
break;
}

var G__23674 = args23672.length;
switch (G__23674) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23672.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args23679 = [];
var len__19538__auto___23682 = arguments.length;
var i__19539__auto___23683 = (0);
while(true){
if((i__19539__auto___23683 < len__19538__auto___23682)){
args23679.push((arguments[i__19539__auto___23683]));

var G__23684 = (i__19539__auto___23683 + (1));
i__19539__auto___23683 = G__23684;
continue;
} else {
}
break;
}

var G__23681 = args23679.length;
switch (G__23681) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23679.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23686 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23686);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23686,ret){
return (function (){
return fn1.call(null,val_23686);
});})(val_23686,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args23687 = [];
var len__19538__auto___23690 = arguments.length;
var i__19539__auto___23691 = (0);
while(true){
if((i__19539__auto___23691 < len__19538__auto___23690)){
args23687.push((arguments[i__19539__auto___23691]));

var G__23692 = (i__19539__auto___23691 + (1));
i__19539__auto___23691 = G__23692;
continue;
} else {
}
break;
}

var G__23689 = args23687.length;
switch (G__23689) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23687.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19383__auto___23694 = n;
var x_23695 = (0);
while(true){
if((x_23695 < n__19383__auto___23694)){
(a[x_23695] = (0));

var G__23696 = (x_23695 + (1));
x_23695 = G__23696;
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

var G__23697 = (i + (1));
i = G__23697;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23701 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23701 = (function (alt_flag,flag,meta23702){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23702 = meta23702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23703,meta23702__$1){
var self__ = this;
var _23703__$1 = this;
return (new cljs.core.async.t_cljs$core$async23701(self__.alt_flag,self__.flag,meta23702__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23701.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23703){
var self__ = this;
var _23703__$1 = this;
return self__.meta23702;
});})(flag))
;

cljs.core.async.t_cljs$core$async23701.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23701.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23701.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23701.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23701.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23702","meta23702",-340841808,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23701.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23701.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23701";

cljs.core.async.t_cljs$core$async23701.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async23701");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23701 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23701(alt_flag__$1,flag__$1,meta23702){
return (new cljs.core.async.t_cljs$core$async23701(alt_flag__$1,flag__$1,meta23702));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23701(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23707 = (function (alt_handler,flag,cb,meta23708){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23708 = meta23708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23709,meta23708__$1){
var self__ = this;
var _23709__$1 = this;
return (new cljs.core.async.t_cljs$core$async23707(self__.alt_handler,self__.flag,self__.cb,meta23708__$1));
});

cljs.core.async.t_cljs$core$async23707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23709){
var self__ = this;
var _23709__$1 = this;
return self__.meta23708;
});

cljs.core.async.t_cljs$core$async23707.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23707.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23708","meta23708",-2007050151,null)], null);
});

cljs.core.async.t_cljs$core$async23707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23707";

cljs.core.async.t_cljs$core$async23707.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async23707");
});

cljs.core.async.__GT_t_cljs$core$async23707 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23707(alt_handler__$1,flag__$1,cb__$1,meta23708){
return (new cljs.core.async.t_cljs$core$async23707(alt_handler__$1,flag__$1,cb__$1,meta23708));
});

}

return (new cljs.core.async.t_cljs$core$async23707(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__23710_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23710_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23711_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23711_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18468__auto__ = wport;
if(cljs.core.truth_(or__18468__auto__)){
return or__18468__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23712 = (i + (1));
i = G__23712;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18468__auto__ = ret;
if(cljs.core.truth_(or__18468__auto__)){
return or__18468__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18456__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18456__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18456__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__19545__auto__ = [];
var len__19538__auto___23718 = arguments.length;
var i__19539__auto___23719 = (0);
while(true){
if((i__19539__auto___23719 < len__19538__auto___23718)){
args__19545__auto__.push((arguments[i__19539__auto___23719]));

var G__23720 = (i__19539__auto___23719 + (1));
i__19539__auto___23719 = G__23720;
continue;
} else {
}
break;
}

var argseq__19546__auto__ = ((((1) < args__19545__auto__.length))?(new cljs.core.IndexedSeq(args__19545__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19546__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23715){
var map__23716 = p__23715;
var map__23716__$1 = ((((!((map__23716 == null)))?((((map__23716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23716):map__23716);
var opts = map__23716__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23713){
var G__23714 = cljs.core.first.call(null,seq23713);
var seq23713__$1 = cljs.core.next.call(null,seq23713);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23714,seq23713__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args23721 = [];
var len__19538__auto___23771 = arguments.length;
var i__19539__auto___23772 = (0);
while(true){
if((i__19539__auto___23772 < len__19538__auto___23771)){
args23721.push((arguments[i__19539__auto___23772]));

var G__23773 = (i__19539__auto___23772 + (1));
i__19539__auto___23772 = G__23773;
continue;
} else {
}
break;
}

var G__23723 = args23721.length;
switch (G__23723) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23721.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23608__auto___23775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto___23775){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto___23775){
return (function (state_23747){
var state_val_23748 = (state_23747[(1)]);
if((state_val_23748 === (7))){
var inst_23743 = (state_23747[(2)]);
var state_23747__$1 = state_23747;
var statearr_23749_23776 = state_23747__$1;
(statearr_23749_23776[(2)] = inst_23743);

(statearr_23749_23776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (1))){
var state_23747__$1 = state_23747;
var statearr_23750_23777 = state_23747__$1;
(statearr_23750_23777[(2)] = null);

(statearr_23750_23777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (4))){
var inst_23726 = (state_23747[(7)]);
var inst_23726__$1 = (state_23747[(2)]);
var inst_23727 = (inst_23726__$1 == null);
var state_23747__$1 = (function (){var statearr_23751 = state_23747;
(statearr_23751[(7)] = inst_23726__$1);

return statearr_23751;
})();
if(cljs.core.truth_(inst_23727)){
var statearr_23752_23778 = state_23747__$1;
(statearr_23752_23778[(1)] = (5));

} else {
var statearr_23753_23779 = state_23747__$1;
(statearr_23753_23779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (13))){
var state_23747__$1 = state_23747;
var statearr_23754_23780 = state_23747__$1;
(statearr_23754_23780[(2)] = null);

(statearr_23754_23780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (6))){
var inst_23726 = (state_23747[(7)]);
var state_23747__$1 = state_23747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23747__$1,(11),to,inst_23726);
} else {
if((state_val_23748 === (3))){
var inst_23745 = (state_23747[(2)]);
var state_23747__$1 = state_23747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23747__$1,inst_23745);
} else {
if((state_val_23748 === (12))){
var state_23747__$1 = state_23747;
var statearr_23755_23781 = state_23747__$1;
(statearr_23755_23781[(2)] = null);

(statearr_23755_23781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (2))){
var state_23747__$1 = state_23747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23747__$1,(4),from);
} else {
if((state_val_23748 === (11))){
var inst_23736 = (state_23747[(2)]);
var state_23747__$1 = state_23747;
if(cljs.core.truth_(inst_23736)){
var statearr_23756_23782 = state_23747__$1;
(statearr_23756_23782[(1)] = (12));

} else {
var statearr_23757_23783 = state_23747__$1;
(statearr_23757_23783[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (9))){
var state_23747__$1 = state_23747;
var statearr_23758_23784 = state_23747__$1;
(statearr_23758_23784[(2)] = null);

(statearr_23758_23784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (5))){
var state_23747__$1 = state_23747;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23759_23785 = state_23747__$1;
(statearr_23759_23785[(1)] = (8));

} else {
var statearr_23760_23786 = state_23747__$1;
(statearr_23760_23786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (14))){
var inst_23741 = (state_23747[(2)]);
var state_23747__$1 = state_23747;
var statearr_23761_23787 = state_23747__$1;
(statearr_23761_23787[(2)] = inst_23741);

(statearr_23761_23787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (10))){
var inst_23733 = (state_23747[(2)]);
var state_23747__$1 = state_23747;
var statearr_23762_23788 = state_23747__$1;
(statearr_23762_23788[(2)] = inst_23733);

(statearr_23762_23788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (8))){
var inst_23730 = cljs.core.async.close_BANG_.call(null,to);
var state_23747__$1 = state_23747;
var statearr_23763_23789 = state_23747__$1;
(statearr_23763_23789[(2)] = inst_23730);

(statearr_23763_23789[(1)] = (10));


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
});})(c__23608__auto___23775))
;
return ((function (switch__23496__auto__,c__23608__auto___23775){
return (function() {
var cljs$core$async$state_machine__23497__auto__ = null;
var cljs$core$async$state_machine__23497__auto____0 = (function (){
var statearr_23767 = [null,null,null,null,null,null,null,null];
(statearr_23767[(0)] = cljs$core$async$state_machine__23497__auto__);

(statearr_23767[(1)] = (1));

return statearr_23767;
});
var cljs$core$async$state_machine__23497__auto____1 = (function (state_23747){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_23747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e23768){if((e23768 instanceof Object)){
var ex__23500__auto__ = e23768;
var statearr_23769_23790 = state_23747;
(statearr_23769_23790[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23791 = state_23747;
state_23747 = G__23791;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
cljs$core$async$state_machine__23497__auto__ = function(state_23747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23497__auto____1.call(this,state_23747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23497__auto____0;
cljs$core$async$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23497__auto____1;
return cljs$core$async$state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto___23775))
})();
var state__23610__auto__ = (function (){var statearr_23770 = f__23609__auto__.call(null);
(statearr_23770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto___23775);

return statearr_23770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto___23775))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23975){
var vec__23976 = p__23975;
var v = cljs.core.nth.call(null,vec__23976,(0),null);
var p = cljs.core.nth.call(null,vec__23976,(1),null);
var job = vec__23976;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23608__auto___24158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto___24158,res,vec__23976,v,p,job,jobs,results){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto___24158,res,vec__23976,v,p,job,jobs,results){
return (function (state_23981){
var state_val_23982 = (state_23981[(1)]);
if((state_val_23982 === (1))){
var state_23981__$1 = state_23981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23981__$1,(2),res,v);
} else {
if((state_val_23982 === (2))){
var inst_23978 = (state_23981[(2)]);
var inst_23979 = cljs.core.async.close_BANG_.call(null,res);
var state_23981__$1 = (function (){var statearr_23983 = state_23981;
(statearr_23983[(7)] = inst_23978);

return statearr_23983;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23981__$1,inst_23979);
} else {
return null;
}
}
});})(c__23608__auto___24158,res,vec__23976,v,p,job,jobs,results))
;
return ((function (switch__23496__auto__,c__23608__auto___24158,res,vec__23976,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____0 = (function (){
var statearr_23987 = [null,null,null,null,null,null,null,null];
(statearr_23987[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__);

(statearr_23987[(1)] = (1));

return statearr_23987;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____1 = (function (state_23981){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_23981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e23988){if((e23988 instanceof Object)){
var ex__23500__auto__ = e23988;
var statearr_23989_24159 = state_23981;
(statearr_23989_24159[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24160 = state_23981;
state_23981 = G__24160;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__ = function(state_23981){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____1.call(this,state_23981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto___24158,res,vec__23976,v,p,job,jobs,results))
})();
var state__23610__auto__ = (function (){var statearr_23990 = f__23609__auto__.call(null);
(statearr_23990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto___24158);

return statearr_23990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto___24158,res,vec__23976,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23991){
var vec__23992 = p__23991;
var v = cljs.core.nth.call(null,vec__23992,(0),null);
var p = cljs.core.nth.call(null,vec__23992,(1),null);
var job = vec__23992;
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
var n__19383__auto___24161 = n;
var __24162 = (0);
while(true){
if((__24162 < n__19383__auto___24161)){
var G__23993_24163 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23993_24163) {
case "compute":
var c__23608__auto___24165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24162,c__23608__auto___24165,G__23993_24163,n__19383__auto___24161,jobs,results,process,async){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (__24162,c__23608__auto___24165,G__23993_24163,n__19383__auto___24161,jobs,results,process,async){
return (function (state_24006){
var state_val_24007 = (state_24006[(1)]);
if((state_val_24007 === (1))){
var state_24006__$1 = state_24006;
var statearr_24008_24166 = state_24006__$1;
(statearr_24008_24166[(2)] = null);

(statearr_24008_24166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24007 === (2))){
var state_24006__$1 = state_24006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24006__$1,(4),jobs);
} else {
if((state_val_24007 === (3))){
var inst_24004 = (state_24006[(2)]);
var state_24006__$1 = state_24006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24006__$1,inst_24004);
} else {
if((state_val_24007 === (4))){
var inst_23996 = (state_24006[(2)]);
var inst_23997 = process.call(null,inst_23996);
var state_24006__$1 = state_24006;
if(cljs.core.truth_(inst_23997)){
var statearr_24009_24167 = state_24006__$1;
(statearr_24009_24167[(1)] = (5));

} else {
var statearr_24010_24168 = state_24006__$1;
(statearr_24010_24168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24007 === (5))){
var state_24006__$1 = state_24006;
var statearr_24011_24169 = state_24006__$1;
(statearr_24011_24169[(2)] = null);

(statearr_24011_24169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24007 === (6))){
var state_24006__$1 = state_24006;
var statearr_24012_24170 = state_24006__$1;
(statearr_24012_24170[(2)] = null);

(statearr_24012_24170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24007 === (7))){
var inst_24002 = (state_24006[(2)]);
var state_24006__$1 = state_24006;
var statearr_24013_24171 = state_24006__$1;
(statearr_24013_24171[(2)] = inst_24002);

(statearr_24013_24171[(1)] = (3));


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
});})(__24162,c__23608__auto___24165,G__23993_24163,n__19383__auto___24161,jobs,results,process,async))
;
return ((function (__24162,switch__23496__auto__,c__23608__auto___24165,G__23993_24163,n__19383__auto___24161,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____0 = (function (){
var statearr_24017 = [null,null,null,null,null,null,null];
(statearr_24017[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__);

(statearr_24017[(1)] = (1));

return statearr_24017;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____1 = (function (state_24006){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_24006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e24018){if((e24018 instanceof Object)){
var ex__23500__auto__ = e24018;
var statearr_24019_24172 = state_24006;
(statearr_24019_24172[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24173 = state_24006;
state_24006 = G__24173;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__ = function(state_24006){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____1.call(this,state_24006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__;
})()
;})(__24162,switch__23496__auto__,c__23608__auto___24165,G__23993_24163,n__19383__auto___24161,jobs,results,process,async))
})();
var state__23610__auto__ = (function (){var statearr_24020 = f__23609__auto__.call(null);
(statearr_24020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto___24165);

return statearr_24020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(__24162,c__23608__auto___24165,G__23993_24163,n__19383__auto___24161,jobs,results,process,async))
);


break;
case "async":
var c__23608__auto___24174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24162,c__23608__auto___24174,G__23993_24163,n__19383__auto___24161,jobs,results,process,async){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (__24162,c__23608__auto___24174,G__23993_24163,n__19383__auto___24161,jobs,results,process,async){
return (function (state_24033){
var state_val_24034 = (state_24033[(1)]);
if((state_val_24034 === (1))){
var state_24033__$1 = state_24033;
var statearr_24035_24175 = state_24033__$1;
(statearr_24035_24175[(2)] = null);

(statearr_24035_24175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24034 === (2))){
var state_24033__$1 = state_24033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24033__$1,(4),jobs);
} else {
if((state_val_24034 === (3))){
var inst_24031 = (state_24033[(2)]);
var state_24033__$1 = state_24033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24033__$1,inst_24031);
} else {
if((state_val_24034 === (4))){
var inst_24023 = (state_24033[(2)]);
var inst_24024 = async.call(null,inst_24023);
var state_24033__$1 = state_24033;
if(cljs.core.truth_(inst_24024)){
var statearr_24036_24176 = state_24033__$1;
(statearr_24036_24176[(1)] = (5));

} else {
var statearr_24037_24177 = state_24033__$1;
(statearr_24037_24177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24034 === (5))){
var state_24033__$1 = state_24033;
var statearr_24038_24178 = state_24033__$1;
(statearr_24038_24178[(2)] = null);

(statearr_24038_24178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24034 === (6))){
var state_24033__$1 = state_24033;
var statearr_24039_24179 = state_24033__$1;
(statearr_24039_24179[(2)] = null);

(statearr_24039_24179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24034 === (7))){
var inst_24029 = (state_24033[(2)]);
var state_24033__$1 = state_24033;
var statearr_24040_24180 = state_24033__$1;
(statearr_24040_24180[(2)] = inst_24029);

(statearr_24040_24180[(1)] = (3));


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
});})(__24162,c__23608__auto___24174,G__23993_24163,n__19383__auto___24161,jobs,results,process,async))
;
return ((function (__24162,switch__23496__auto__,c__23608__auto___24174,G__23993_24163,n__19383__auto___24161,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____0 = (function (){
var statearr_24044 = [null,null,null,null,null,null,null];
(statearr_24044[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__);

(statearr_24044[(1)] = (1));

return statearr_24044;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____1 = (function (state_24033){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_24033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e24045){if((e24045 instanceof Object)){
var ex__23500__auto__ = e24045;
var statearr_24046_24181 = state_24033;
(statearr_24046_24181[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24182 = state_24033;
state_24033 = G__24182;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__ = function(state_24033){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____1.call(this,state_24033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__;
})()
;})(__24162,switch__23496__auto__,c__23608__auto___24174,G__23993_24163,n__19383__auto___24161,jobs,results,process,async))
})();
var state__23610__auto__ = (function (){var statearr_24047 = f__23609__auto__.call(null);
(statearr_24047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto___24174);

return statearr_24047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(__24162,c__23608__auto___24174,G__23993_24163,n__19383__auto___24161,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24183 = (__24162 + (1));
__24162 = G__24183;
continue;
} else {
}
break;
}

var c__23608__auto___24184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto___24184,jobs,results,process,async){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto___24184,jobs,results,process,async){
return (function (state_24069){
var state_val_24070 = (state_24069[(1)]);
if((state_val_24070 === (1))){
var state_24069__$1 = state_24069;
var statearr_24071_24185 = state_24069__$1;
(statearr_24071_24185[(2)] = null);

(statearr_24071_24185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24070 === (2))){
var state_24069__$1 = state_24069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24069__$1,(4),from);
} else {
if((state_val_24070 === (3))){
var inst_24067 = (state_24069[(2)]);
var state_24069__$1 = state_24069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24069__$1,inst_24067);
} else {
if((state_val_24070 === (4))){
var inst_24050 = (state_24069[(7)]);
var inst_24050__$1 = (state_24069[(2)]);
var inst_24051 = (inst_24050__$1 == null);
var state_24069__$1 = (function (){var statearr_24072 = state_24069;
(statearr_24072[(7)] = inst_24050__$1);

return statearr_24072;
})();
if(cljs.core.truth_(inst_24051)){
var statearr_24073_24186 = state_24069__$1;
(statearr_24073_24186[(1)] = (5));

} else {
var statearr_24074_24187 = state_24069__$1;
(statearr_24074_24187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24070 === (5))){
var inst_24053 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24069__$1 = state_24069;
var statearr_24075_24188 = state_24069__$1;
(statearr_24075_24188[(2)] = inst_24053);

(statearr_24075_24188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24070 === (6))){
var inst_24050 = (state_24069[(7)]);
var inst_24055 = (state_24069[(8)]);
var inst_24055__$1 = cljs.core.async.chan.call(null,(1));
var inst_24056 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24057 = [inst_24050,inst_24055__$1];
var inst_24058 = (new cljs.core.PersistentVector(null,2,(5),inst_24056,inst_24057,null));
var state_24069__$1 = (function (){var statearr_24076 = state_24069;
(statearr_24076[(8)] = inst_24055__$1);

return statearr_24076;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24069__$1,(8),jobs,inst_24058);
} else {
if((state_val_24070 === (7))){
var inst_24065 = (state_24069[(2)]);
var state_24069__$1 = state_24069;
var statearr_24077_24189 = state_24069__$1;
(statearr_24077_24189[(2)] = inst_24065);

(statearr_24077_24189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24070 === (8))){
var inst_24055 = (state_24069[(8)]);
var inst_24060 = (state_24069[(2)]);
var state_24069__$1 = (function (){var statearr_24078 = state_24069;
(statearr_24078[(9)] = inst_24060);

return statearr_24078;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24069__$1,(9),results,inst_24055);
} else {
if((state_val_24070 === (9))){
var inst_24062 = (state_24069[(2)]);
var state_24069__$1 = (function (){var statearr_24079 = state_24069;
(statearr_24079[(10)] = inst_24062);

return statearr_24079;
})();
var statearr_24080_24190 = state_24069__$1;
(statearr_24080_24190[(2)] = null);

(statearr_24080_24190[(1)] = (2));


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
});})(c__23608__auto___24184,jobs,results,process,async))
;
return ((function (switch__23496__auto__,c__23608__auto___24184,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____0 = (function (){
var statearr_24084 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24084[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__);

(statearr_24084[(1)] = (1));

return statearr_24084;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____1 = (function (state_24069){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_24069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e24085){if((e24085 instanceof Object)){
var ex__23500__auto__ = e24085;
var statearr_24086_24191 = state_24069;
(statearr_24086_24191[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24192 = state_24069;
state_24069 = G__24192;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__ = function(state_24069){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____1.call(this,state_24069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto___24184,jobs,results,process,async))
})();
var state__23610__auto__ = (function (){var statearr_24087 = f__23609__auto__.call(null);
(statearr_24087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto___24184);

return statearr_24087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto___24184,jobs,results,process,async))
);


var c__23608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto__,jobs,results,process,async){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto__,jobs,results,process,async){
return (function (state_24125){
var state_val_24126 = (state_24125[(1)]);
if((state_val_24126 === (7))){
var inst_24121 = (state_24125[(2)]);
var state_24125__$1 = state_24125;
var statearr_24127_24193 = state_24125__$1;
(statearr_24127_24193[(2)] = inst_24121);

(statearr_24127_24193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (20))){
var state_24125__$1 = state_24125;
var statearr_24128_24194 = state_24125__$1;
(statearr_24128_24194[(2)] = null);

(statearr_24128_24194[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (1))){
var state_24125__$1 = state_24125;
var statearr_24129_24195 = state_24125__$1;
(statearr_24129_24195[(2)] = null);

(statearr_24129_24195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (4))){
var inst_24090 = (state_24125[(7)]);
var inst_24090__$1 = (state_24125[(2)]);
var inst_24091 = (inst_24090__$1 == null);
var state_24125__$1 = (function (){var statearr_24130 = state_24125;
(statearr_24130[(7)] = inst_24090__$1);

return statearr_24130;
})();
if(cljs.core.truth_(inst_24091)){
var statearr_24131_24196 = state_24125__$1;
(statearr_24131_24196[(1)] = (5));

} else {
var statearr_24132_24197 = state_24125__$1;
(statearr_24132_24197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (15))){
var inst_24103 = (state_24125[(8)]);
var state_24125__$1 = state_24125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24125__$1,(18),to,inst_24103);
} else {
if((state_val_24126 === (21))){
var inst_24116 = (state_24125[(2)]);
var state_24125__$1 = state_24125;
var statearr_24133_24198 = state_24125__$1;
(statearr_24133_24198[(2)] = inst_24116);

(statearr_24133_24198[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (13))){
var inst_24118 = (state_24125[(2)]);
var state_24125__$1 = (function (){var statearr_24134 = state_24125;
(statearr_24134[(9)] = inst_24118);

return statearr_24134;
})();
var statearr_24135_24199 = state_24125__$1;
(statearr_24135_24199[(2)] = null);

(statearr_24135_24199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (6))){
var inst_24090 = (state_24125[(7)]);
var state_24125__$1 = state_24125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24125__$1,(11),inst_24090);
} else {
if((state_val_24126 === (17))){
var inst_24111 = (state_24125[(2)]);
var state_24125__$1 = state_24125;
if(cljs.core.truth_(inst_24111)){
var statearr_24136_24200 = state_24125__$1;
(statearr_24136_24200[(1)] = (19));

} else {
var statearr_24137_24201 = state_24125__$1;
(statearr_24137_24201[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (3))){
var inst_24123 = (state_24125[(2)]);
var state_24125__$1 = state_24125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24125__$1,inst_24123);
} else {
if((state_val_24126 === (12))){
var inst_24100 = (state_24125[(10)]);
var state_24125__$1 = state_24125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24125__$1,(14),inst_24100);
} else {
if((state_val_24126 === (2))){
var state_24125__$1 = state_24125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24125__$1,(4),results);
} else {
if((state_val_24126 === (19))){
var state_24125__$1 = state_24125;
var statearr_24138_24202 = state_24125__$1;
(statearr_24138_24202[(2)] = null);

(statearr_24138_24202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (11))){
var inst_24100 = (state_24125[(2)]);
var state_24125__$1 = (function (){var statearr_24139 = state_24125;
(statearr_24139[(10)] = inst_24100);

return statearr_24139;
})();
var statearr_24140_24203 = state_24125__$1;
(statearr_24140_24203[(2)] = null);

(statearr_24140_24203[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (9))){
var state_24125__$1 = state_24125;
var statearr_24141_24204 = state_24125__$1;
(statearr_24141_24204[(2)] = null);

(statearr_24141_24204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (5))){
var state_24125__$1 = state_24125;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24142_24205 = state_24125__$1;
(statearr_24142_24205[(1)] = (8));

} else {
var statearr_24143_24206 = state_24125__$1;
(statearr_24143_24206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (14))){
var inst_24103 = (state_24125[(8)]);
var inst_24105 = (state_24125[(11)]);
var inst_24103__$1 = (state_24125[(2)]);
var inst_24104 = (inst_24103__$1 == null);
var inst_24105__$1 = cljs.core.not.call(null,inst_24104);
var state_24125__$1 = (function (){var statearr_24144 = state_24125;
(statearr_24144[(8)] = inst_24103__$1);

(statearr_24144[(11)] = inst_24105__$1);

return statearr_24144;
})();
if(inst_24105__$1){
var statearr_24145_24207 = state_24125__$1;
(statearr_24145_24207[(1)] = (15));

} else {
var statearr_24146_24208 = state_24125__$1;
(statearr_24146_24208[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (16))){
var inst_24105 = (state_24125[(11)]);
var state_24125__$1 = state_24125;
var statearr_24147_24209 = state_24125__$1;
(statearr_24147_24209[(2)] = inst_24105);

(statearr_24147_24209[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (10))){
var inst_24097 = (state_24125[(2)]);
var state_24125__$1 = state_24125;
var statearr_24148_24210 = state_24125__$1;
(statearr_24148_24210[(2)] = inst_24097);

(statearr_24148_24210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (18))){
var inst_24108 = (state_24125[(2)]);
var state_24125__$1 = state_24125;
var statearr_24149_24211 = state_24125__$1;
(statearr_24149_24211[(2)] = inst_24108);

(statearr_24149_24211[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (8))){
var inst_24094 = cljs.core.async.close_BANG_.call(null,to);
var state_24125__$1 = state_24125;
var statearr_24150_24212 = state_24125__$1;
(statearr_24150_24212[(2)] = inst_24094);

(statearr_24150_24212[(1)] = (10));


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
});})(c__23608__auto__,jobs,results,process,async))
;
return ((function (switch__23496__auto__,c__23608__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____0 = (function (){
var statearr_24154 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24154[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__);

(statearr_24154[(1)] = (1));

return statearr_24154;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____1 = (function (state_24125){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_24125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e24155){if((e24155 instanceof Object)){
var ex__23500__auto__ = e24155;
var statearr_24156_24213 = state_24125;
(statearr_24156_24213[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24214 = state_24125;
state_24125 = G__24214;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__ = function(state_24125){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____1.call(this,state_24125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto__,jobs,results,process,async))
})();
var state__23610__auto__ = (function (){var statearr_24157 = f__23609__auto__.call(null);
(statearr_24157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto__);

return statearr_24157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto__,jobs,results,process,async))
);

return c__23608__auto__;
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
var args24215 = [];
var len__19538__auto___24218 = arguments.length;
var i__19539__auto___24219 = (0);
while(true){
if((i__19539__auto___24219 < len__19538__auto___24218)){
args24215.push((arguments[i__19539__auto___24219]));

var G__24220 = (i__19539__auto___24219 + (1));
i__19539__auto___24219 = G__24220;
continue;
} else {
}
break;
}

var G__24217 = args24215.length;
switch (G__24217) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24215.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
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
var args24222 = [];
var len__19538__auto___24225 = arguments.length;
var i__19539__auto___24226 = (0);
while(true){
if((i__19539__auto___24226 < len__19538__auto___24225)){
args24222.push((arguments[i__19539__auto___24226]));

var G__24227 = (i__19539__auto___24226 + (1));
i__19539__auto___24226 = G__24227;
continue;
} else {
}
break;
}

var G__24224 = args24222.length;
switch (G__24224) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24222.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
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
var args24229 = [];
var len__19538__auto___24282 = arguments.length;
var i__19539__auto___24283 = (0);
while(true){
if((i__19539__auto___24283 < len__19538__auto___24282)){
args24229.push((arguments[i__19539__auto___24283]));

var G__24284 = (i__19539__auto___24283 + (1));
i__19539__auto___24283 = G__24284;
continue;
} else {
}
break;
}

var G__24231 = args24229.length;
switch (G__24231) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24229.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23608__auto___24286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto___24286,tc,fc){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto___24286,tc,fc){
return (function (state_24257){
var state_val_24258 = (state_24257[(1)]);
if((state_val_24258 === (7))){
var inst_24253 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24259_24287 = state_24257__$1;
(statearr_24259_24287[(2)] = inst_24253);

(statearr_24259_24287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (1))){
var state_24257__$1 = state_24257;
var statearr_24260_24288 = state_24257__$1;
(statearr_24260_24288[(2)] = null);

(statearr_24260_24288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (4))){
var inst_24234 = (state_24257[(7)]);
var inst_24234__$1 = (state_24257[(2)]);
var inst_24235 = (inst_24234__$1 == null);
var state_24257__$1 = (function (){var statearr_24261 = state_24257;
(statearr_24261[(7)] = inst_24234__$1);

return statearr_24261;
})();
if(cljs.core.truth_(inst_24235)){
var statearr_24262_24289 = state_24257__$1;
(statearr_24262_24289[(1)] = (5));

} else {
var statearr_24263_24290 = state_24257__$1;
(statearr_24263_24290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (13))){
var state_24257__$1 = state_24257;
var statearr_24264_24291 = state_24257__$1;
(statearr_24264_24291[(2)] = null);

(statearr_24264_24291[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (6))){
var inst_24234 = (state_24257[(7)]);
var inst_24240 = p.call(null,inst_24234);
var state_24257__$1 = state_24257;
if(cljs.core.truth_(inst_24240)){
var statearr_24265_24292 = state_24257__$1;
(statearr_24265_24292[(1)] = (9));

} else {
var statearr_24266_24293 = state_24257__$1;
(statearr_24266_24293[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (3))){
var inst_24255 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24257__$1,inst_24255);
} else {
if((state_val_24258 === (12))){
var state_24257__$1 = state_24257;
var statearr_24267_24294 = state_24257__$1;
(statearr_24267_24294[(2)] = null);

(statearr_24267_24294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (2))){
var state_24257__$1 = state_24257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24257__$1,(4),ch);
} else {
if((state_val_24258 === (11))){
var inst_24234 = (state_24257[(7)]);
var inst_24244 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24257__$1,(8),inst_24244,inst_24234);
} else {
if((state_val_24258 === (9))){
var state_24257__$1 = state_24257;
var statearr_24268_24295 = state_24257__$1;
(statearr_24268_24295[(2)] = tc);

(statearr_24268_24295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (5))){
var inst_24237 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24238 = cljs.core.async.close_BANG_.call(null,fc);
var state_24257__$1 = (function (){var statearr_24269 = state_24257;
(statearr_24269[(8)] = inst_24237);

return statearr_24269;
})();
var statearr_24270_24296 = state_24257__$1;
(statearr_24270_24296[(2)] = inst_24238);

(statearr_24270_24296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (14))){
var inst_24251 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24271_24297 = state_24257__$1;
(statearr_24271_24297[(2)] = inst_24251);

(statearr_24271_24297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (10))){
var state_24257__$1 = state_24257;
var statearr_24272_24298 = state_24257__$1;
(statearr_24272_24298[(2)] = fc);

(statearr_24272_24298[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (8))){
var inst_24246 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
if(cljs.core.truth_(inst_24246)){
var statearr_24273_24299 = state_24257__$1;
(statearr_24273_24299[(1)] = (12));

} else {
var statearr_24274_24300 = state_24257__$1;
(statearr_24274_24300[(1)] = (13));

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
});})(c__23608__auto___24286,tc,fc))
;
return ((function (switch__23496__auto__,c__23608__auto___24286,tc,fc){
return (function() {
var cljs$core$async$state_machine__23497__auto__ = null;
var cljs$core$async$state_machine__23497__auto____0 = (function (){
var statearr_24278 = [null,null,null,null,null,null,null,null,null];
(statearr_24278[(0)] = cljs$core$async$state_machine__23497__auto__);

(statearr_24278[(1)] = (1));

return statearr_24278;
});
var cljs$core$async$state_machine__23497__auto____1 = (function (state_24257){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_24257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e24279){if((e24279 instanceof Object)){
var ex__23500__auto__ = e24279;
var statearr_24280_24301 = state_24257;
(statearr_24280_24301[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24302 = state_24257;
state_24257 = G__24302;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
cljs$core$async$state_machine__23497__auto__ = function(state_24257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23497__auto____1.call(this,state_24257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23497__auto____0;
cljs$core$async$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23497__auto____1;
return cljs$core$async$state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto___24286,tc,fc))
})();
var state__23610__auto__ = (function (){var statearr_24281 = f__23609__auto__.call(null);
(statearr_24281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto___24286);

return statearr_24281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto___24286,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto__){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto__){
return (function (state_24366){
var state_val_24367 = (state_24366[(1)]);
if((state_val_24367 === (7))){
var inst_24362 = (state_24366[(2)]);
var state_24366__$1 = state_24366;
var statearr_24368_24389 = state_24366__$1;
(statearr_24368_24389[(2)] = inst_24362);

(statearr_24368_24389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (1))){
var inst_24346 = init;
var state_24366__$1 = (function (){var statearr_24369 = state_24366;
(statearr_24369[(7)] = inst_24346);

return statearr_24369;
})();
var statearr_24370_24390 = state_24366__$1;
(statearr_24370_24390[(2)] = null);

(statearr_24370_24390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (4))){
var inst_24349 = (state_24366[(8)]);
var inst_24349__$1 = (state_24366[(2)]);
var inst_24350 = (inst_24349__$1 == null);
var state_24366__$1 = (function (){var statearr_24371 = state_24366;
(statearr_24371[(8)] = inst_24349__$1);

return statearr_24371;
})();
if(cljs.core.truth_(inst_24350)){
var statearr_24372_24391 = state_24366__$1;
(statearr_24372_24391[(1)] = (5));

} else {
var statearr_24373_24392 = state_24366__$1;
(statearr_24373_24392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (6))){
var inst_24349 = (state_24366[(8)]);
var inst_24353 = (state_24366[(9)]);
var inst_24346 = (state_24366[(7)]);
var inst_24353__$1 = f.call(null,inst_24346,inst_24349);
var inst_24354 = cljs.core.reduced_QMARK_.call(null,inst_24353__$1);
var state_24366__$1 = (function (){var statearr_24374 = state_24366;
(statearr_24374[(9)] = inst_24353__$1);

return statearr_24374;
})();
if(inst_24354){
var statearr_24375_24393 = state_24366__$1;
(statearr_24375_24393[(1)] = (8));

} else {
var statearr_24376_24394 = state_24366__$1;
(statearr_24376_24394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (3))){
var inst_24364 = (state_24366[(2)]);
var state_24366__$1 = state_24366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24366__$1,inst_24364);
} else {
if((state_val_24367 === (2))){
var state_24366__$1 = state_24366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24366__$1,(4),ch);
} else {
if((state_val_24367 === (9))){
var inst_24353 = (state_24366[(9)]);
var inst_24346 = inst_24353;
var state_24366__$1 = (function (){var statearr_24377 = state_24366;
(statearr_24377[(7)] = inst_24346);

return statearr_24377;
})();
var statearr_24378_24395 = state_24366__$1;
(statearr_24378_24395[(2)] = null);

(statearr_24378_24395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (5))){
var inst_24346 = (state_24366[(7)]);
var state_24366__$1 = state_24366;
var statearr_24379_24396 = state_24366__$1;
(statearr_24379_24396[(2)] = inst_24346);

(statearr_24379_24396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (10))){
var inst_24360 = (state_24366[(2)]);
var state_24366__$1 = state_24366;
var statearr_24380_24397 = state_24366__$1;
(statearr_24380_24397[(2)] = inst_24360);

(statearr_24380_24397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (8))){
var inst_24353 = (state_24366[(9)]);
var inst_24356 = cljs.core.deref.call(null,inst_24353);
var state_24366__$1 = state_24366;
var statearr_24381_24398 = state_24366__$1;
(statearr_24381_24398[(2)] = inst_24356);

(statearr_24381_24398[(1)] = (10));


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
});})(c__23608__auto__))
;
return ((function (switch__23496__auto__,c__23608__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23497__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23497__auto____0 = (function (){
var statearr_24385 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24385[(0)] = cljs$core$async$reduce_$_state_machine__23497__auto__);

(statearr_24385[(1)] = (1));

return statearr_24385;
});
var cljs$core$async$reduce_$_state_machine__23497__auto____1 = (function (state_24366){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_24366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e24386){if((e24386 instanceof Object)){
var ex__23500__auto__ = e24386;
var statearr_24387_24399 = state_24366;
(statearr_24387_24399[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24400 = state_24366;
state_24366 = G__24400;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23497__auto__ = function(state_24366){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23497__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23497__auto____1.call(this,state_24366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23497__auto____0;
cljs$core$async$reduce_$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23497__auto____1;
return cljs$core$async$reduce_$_state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto__))
})();
var state__23610__auto__ = (function (){var statearr_24388 = f__23609__auto__.call(null);
(statearr_24388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto__);

return statearr_24388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto__))
);

return c__23608__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args24401 = [];
var len__19538__auto___24453 = arguments.length;
var i__19539__auto___24454 = (0);
while(true){
if((i__19539__auto___24454 < len__19538__auto___24453)){
args24401.push((arguments[i__19539__auto___24454]));

var G__24455 = (i__19539__auto___24454 + (1));
i__19539__auto___24454 = G__24455;
continue;
} else {
}
break;
}

var G__24403 = args24401.length;
switch (G__24403) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24401.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto__){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto__){
return (function (state_24428){
var state_val_24429 = (state_24428[(1)]);
if((state_val_24429 === (7))){
var inst_24410 = (state_24428[(2)]);
var state_24428__$1 = state_24428;
var statearr_24430_24457 = state_24428__$1;
(statearr_24430_24457[(2)] = inst_24410);

(statearr_24430_24457[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24429 === (1))){
var inst_24404 = cljs.core.seq.call(null,coll);
var inst_24405 = inst_24404;
var state_24428__$1 = (function (){var statearr_24431 = state_24428;
(statearr_24431[(7)] = inst_24405);

return statearr_24431;
})();
var statearr_24432_24458 = state_24428__$1;
(statearr_24432_24458[(2)] = null);

(statearr_24432_24458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24429 === (4))){
var inst_24405 = (state_24428[(7)]);
var inst_24408 = cljs.core.first.call(null,inst_24405);
var state_24428__$1 = state_24428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24428__$1,(7),ch,inst_24408);
} else {
if((state_val_24429 === (13))){
var inst_24422 = (state_24428[(2)]);
var state_24428__$1 = state_24428;
var statearr_24433_24459 = state_24428__$1;
(statearr_24433_24459[(2)] = inst_24422);

(statearr_24433_24459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24429 === (6))){
var inst_24413 = (state_24428[(2)]);
var state_24428__$1 = state_24428;
if(cljs.core.truth_(inst_24413)){
var statearr_24434_24460 = state_24428__$1;
(statearr_24434_24460[(1)] = (8));

} else {
var statearr_24435_24461 = state_24428__$1;
(statearr_24435_24461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24429 === (3))){
var inst_24426 = (state_24428[(2)]);
var state_24428__$1 = state_24428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24428__$1,inst_24426);
} else {
if((state_val_24429 === (12))){
var state_24428__$1 = state_24428;
var statearr_24436_24462 = state_24428__$1;
(statearr_24436_24462[(2)] = null);

(statearr_24436_24462[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24429 === (2))){
var inst_24405 = (state_24428[(7)]);
var state_24428__$1 = state_24428;
if(cljs.core.truth_(inst_24405)){
var statearr_24437_24463 = state_24428__$1;
(statearr_24437_24463[(1)] = (4));

} else {
var statearr_24438_24464 = state_24428__$1;
(statearr_24438_24464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24429 === (11))){
var inst_24419 = cljs.core.async.close_BANG_.call(null,ch);
var state_24428__$1 = state_24428;
var statearr_24439_24465 = state_24428__$1;
(statearr_24439_24465[(2)] = inst_24419);

(statearr_24439_24465[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24429 === (9))){
var state_24428__$1 = state_24428;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24440_24466 = state_24428__$1;
(statearr_24440_24466[(1)] = (11));

} else {
var statearr_24441_24467 = state_24428__$1;
(statearr_24441_24467[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24429 === (5))){
var inst_24405 = (state_24428[(7)]);
var state_24428__$1 = state_24428;
var statearr_24442_24468 = state_24428__$1;
(statearr_24442_24468[(2)] = inst_24405);

(statearr_24442_24468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24429 === (10))){
var inst_24424 = (state_24428[(2)]);
var state_24428__$1 = state_24428;
var statearr_24443_24469 = state_24428__$1;
(statearr_24443_24469[(2)] = inst_24424);

(statearr_24443_24469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24429 === (8))){
var inst_24405 = (state_24428[(7)]);
var inst_24415 = cljs.core.next.call(null,inst_24405);
var inst_24405__$1 = inst_24415;
var state_24428__$1 = (function (){var statearr_24444 = state_24428;
(statearr_24444[(7)] = inst_24405__$1);

return statearr_24444;
})();
var statearr_24445_24470 = state_24428__$1;
(statearr_24445_24470[(2)] = null);

(statearr_24445_24470[(1)] = (2));


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
});})(c__23608__auto__))
;
return ((function (switch__23496__auto__,c__23608__auto__){
return (function() {
var cljs$core$async$state_machine__23497__auto__ = null;
var cljs$core$async$state_machine__23497__auto____0 = (function (){
var statearr_24449 = [null,null,null,null,null,null,null,null];
(statearr_24449[(0)] = cljs$core$async$state_machine__23497__auto__);

(statearr_24449[(1)] = (1));

return statearr_24449;
});
var cljs$core$async$state_machine__23497__auto____1 = (function (state_24428){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_24428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e24450){if((e24450 instanceof Object)){
var ex__23500__auto__ = e24450;
var statearr_24451_24471 = state_24428;
(statearr_24451_24471[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24472 = state_24428;
state_24428 = G__24472;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
cljs$core$async$state_machine__23497__auto__ = function(state_24428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23497__auto____1.call(this,state_24428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23497__auto____0;
cljs$core$async$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23497__auto____1;
return cljs$core$async$state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto__))
})();
var state__23610__auto__ = (function (){var statearr_24452 = f__23609__auto__.call(null);
(statearr_24452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto__);

return statearr_24452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto__))
);

return c__23608__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19131__auto__ = (((_ == null))?null:_);
var m__19132__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,_);
} else {
var m__19132__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19131__auto__ = (((m == null))?null:m);
var m__19132__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19132__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19131__auto__ = (((m == null))?null:m);
var m__19132__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,m,ch);
} else {
var m__19132__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19131__auto__ = (((m == null))?null:m);
var m__19132__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,m);
} else {
var m__19132__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24694 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24694 = (function (mult,ch,cs,meta24695){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24695 = meta24695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24696,meta24695__$1){
var self__ = this;
var _24696__$1 = this;
return (new cljs.core.async.t_cljs$core$async24694(self__.mult,self__.ch,self__.cs,meta24695__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24694.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24696){
var self__ = this;
var _24696__$1 = this;
return self__.meta24695;
});})(cs))
;

cljs.core.async.t_cljs$core$async24694.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24694.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24694.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24694.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24694.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24694.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24694.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24695","meta24695",-416058226,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24694.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24694";

cljs.core.async.t_cljs$core$async24694.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async24694");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24694 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24694(mult__$1,ch__$1,cs__$1,meta24695){
return (new cljs.core.async.t_cljs$core$async24694(mult__$1,ch__$1,cs__$1,meta24695));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24694(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23608__auto___24915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto___24915,cs,m,dchan,dctr,done){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto___24915,cs,m,dchan,dctr,done){
return (function (state_24827){
var state_val_24828 = (state_24827[(1)]);
if((state_val_24828 === (7))){
var inst_24823 = (state_24827[(2)]);
var state_24827__$1 = state_24827;
var statearr_24829_24916 = state_24827__$1;
(statearr_24829_24916[(2)] = inst_24823);

(statearr_24829_24916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (20))){
var inst_24728 = (state_24827[(7)]);
var inst_24738 = cljs.core.first.call(null,inst_24728);
var inst_24739 = cljs.core.nth.call(null,inst_24738,(0),null);
var inst_24740 = cljs.core.nth.call(null,inst_24738,(1),null);
var state_24827__$1 = (function (){var statearr_24830 = state_24827;
(statearr_24830[(8)] = inst_24739);

return statearr_24830;
})();
if(cljs.core.truth_(inst_24740)){
var statearr_24831_24917 = state_24827__$1;
(statearr_24831_24917[(1)] = (22));

} else {
var statearr_24832_24918 = state_24827__$1;
(statearr_24832_24918[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (27))){
var inst_24699 = (state_24827[(9)]);
var inst_24768 = (state_24827[(10)]);
var inst_24775 = (state_24827[(11)]);
var inst_24770 = (state_24827[(12)]);
var inst_24775__$1 = cljs.core._nth.call(null,inst_24768,inst_24770);
var inst_24776 = cljs.core.async.put_BANG_.call(null,inst_24775__$1,inst_24699,done);
var state_24827__$1 = (function (){var statearr_24833 = state_24827;
(statearr_24833[(11)] = inst_24775__$1);

return statearr_24833;
})();
if(cljs.core.truth_(inst_24776)){
var statearr_24834_24919 = state_24827__$1;
(statearr_24834_24919[(1)] = (30));

} else {
var statearr_24835_24920 = state_24827__$1;
(statearr_24835_24920[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (1))){
var state_24827__$1 = state_24827;
var statearr_24836_24921 = state_24827__$1;
(statearr_24836_24921[(2)] = null);

(statearr_24836_24921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (24))){
var inst_24728 = (state_24827[(7)]);
var inst_24745 = (state_24827[(2)]);
var inst_24746 = cljs.core.next.call(null,inst_24728);
var inst_24708 = inst_24746;
var inst_24709 = null;
var inst_24710 = (0);
var inst_24711 = (0);
var state_24827__$1 = (function (){var statearr_24837 = state_24827;
(statearr_24837[(13)] = inst_24745);

(statearr_24837[(14)] = inst_24708);

(statearr_24837[(15)] = inst_24711);

(statearr_24837[(16)] = inst_24710);

(statearr_24837[(17)] = inst_24709);

return statearr_24837;
})();
var statearr_24838_24922 = state_24827__$1;
(statearr_24838_24922[(2)] = null);

(statearr_24838_24922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (39))){
var state_24827__$1 = state_24827;
var statearr_24842_24923 = state_24827__$1;
(statearr_24842_24923[(2)] = null);

(statearr_24842_24923[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (4))){
var inst_24699 = (state_24827[(9)]);
var inst_24699__$1 = (state_24827[(2)]);
var inst_24700 = (inst_24699__$1 == null);
var state_24827__$1 = (function (){var statearr_24843 = state_24827;
(statearr_24843[(9)] = inst_24699__$1);

return statearr_24843;
})();
if(cljs.core.truth_(inst_24700)){
var statearr_24844_24924 = state_24827__$1;
(statearr_24844_24924[(1)] = (5));

} else {
var statearr_24845_24925 = state_24827__$1;
(statearr_24845_24925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (15))){
var inst_24708 = (state_24827[(14)]);
var inst_24711 = (state_24827[(15)]);
var inst_24710 = (state_24827[(16)]);
var inst_24709 = (state_24827[(17)]);
var inst_24724 = (state_24827[(2)]);
var inst_24725 = (inst_24711 + (1));
var tmp24839 = inst_24708;
var tmp24840 = inst_24710;
var tmp24841 = inst_24709;
var inst_24708__$1 = tmp24839;
var inst_24709__$1 = tmp24841;
var inst_24710__$1 = tmp24840;
var inst_24711__$1 = inst_24725;
var state_24827__$1 = (function (){var statearr_24846 = state_24827;
(statearr_24846[(14)] = inst_24708__$1);

(statearr_24846[(18)] = inst_24724);

(statearr_24846[(15)] = inst_24711__$1);

(statearr_24846[(16)] = inst_24710__$1);

(statearr_24846[(17)] = inst_24709__$1);

return statearr_24846;
})();
var statearr_24847_24926 = state_24827__$1;
(statearr_24847_24926[(2)] = null);

(statearr_24847_24926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (21))){
var inst_24749 = (state_24827[(2)]);
var state_24827__$1 = state_24827;
var statearr_24851_24927 = state_24827__$1;
(statearr_24851_24927[(2)] = inst_24749);

(statearr_24851_24927[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (31))){
var inst_24775 = (state_24827[(11)]);
var inst_24779 = done.call(null,null);
var inst_24780 = cljs.core.async.untap_STAR_.call(null,m,inst_24775);
var state_24827__$1 = (function (){var statearr_24852 = state_24827;
(statearr_24852[(19)] = inst_24779);

return statearr_24852;
})();
var statearr_24853_24928 = state_24827__$1;
(statearr_24853_24928[(2)] = inst_24780);

(statearr_24853_24928[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (32))){
var inst_24768 = (state_24827[(10)]);
var inst_24769 = (state_24827[(20)]);
var inst_24770 = (state_24827[(12)]);
var inst_24767 = (state_24827[(21)]);
var inst_24782 = (state_24827[(2)]);
var inst_24783 = (inst_24770 + (1));
var tmp24848 = inst_24768;
var tmp24849 = inst_24769;
var tmp24850 = inst_24767;
var inst_24767__$1 = tmp24850;
var inst_24768__$1 = tmp24848;
var inst_24769__$1 = tmp24849;
var inst_24770__$1 = inst_24783;
var state_24827__$1 = (function (){var statearr_24854 = state_24827;
(statearr_24854[(22)] = inst_24782);

(statearr_24854[(10)] = inst_24768__$1);

(statearr_24854[(20)] = inst_24769__$1);

(statearr_24854[(12)] = inst_24770__$1);

(statearr_24854[(21)] = inst_24767__$1);

return statearr_24854;
})();
var statearr_24855_24929 = state_24827__$1;
(statearr_24855_24929[(2)] = null);

(statearr_24855_24929[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (40))){
var inst_24795 = (state_24827[(23)]);
var inst_24799 = done.call(null,null);
var inst_24800 = cljs.core.async.untap_STAR_.call(null,m,inst_24795);
var state_24827__$1 = (function (){var statearr_24856 = state_24827;
(statearr_24856[(24)] = inst_24799);

return statearr_24856;
})();
var statearr_24857_24930 = state_24827__$1;
(statearr_24857_24930[(2)] = inst_24800);

(statearr_24857_24930[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (33))){
var inst_24786 = (state_24827[(25)]);
var inst_24788 = cljs.core.chunked_seq_QMARK_.call(null,inst_24786);
var state_24827__$1 = state_24827;
if(inst_24788){
var statearr_24858_24931 = state_24827__$1;
(statearr_24858_24931[(1)] = (36));

} else {
var statearr_24859_24932 = state_24827__$1;
(statearr_24859_24932[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (13))){
var inst_24718 = (state_24827[(26)]);
var inst_24721 = cljs.core.async.close_BANG_.call(null,inst_24718);
var state_24827__$1 = state_24827;
var statearr_24860_24933 = state_24827__$1;
(statearr_24860_24933[(2)] = inst_24721);

(statearr_24860_24933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (22))){
var inst_24739 = (state_24827[(8)]);
var inst_24742 = cljs.core.async.close_BANG_.call(null,inst_24739);
var state_24827__$1 = state_24827;
var statearr_24861_24934 = state_24827__$1;
(statearr_24861_24934[(2)] = inst_24742);

(statearr_24861_24934[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (36))){
var inst_24786 = (state_24827[(25)]);
var inst_24790 = cljs.core.chunk_first.call(null,inst_24786);
var inst_24791 = cljs.core.chunk_rest.call(null,inst_24786);
var inst_24792 = cljs.core.count.call(null,inst_24790);
var inst_24767 = inst_24791;
var inst_24768 = inst_24790;
var inst_24769 = inst_24792;
var inst_24770 = (0);
var state_24827__$1 = (function (){var statearr_24862 = state_24827;
(statearr_24862[(10)] = inst_24768);

(statearr_24862[(20)] = inst_24769);

(statearr_24862[(12)] = inst_24770);

(statearr_24862[(21)] = inst_24767);

return statearr_24862;
})();
var statearr_24863_24935 = state_24827__$1;
(statearr_24863_24935[(2)] = null);

(statearr_24863_24935[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (41))){
var inst_24786 = (state_24827[(25)]);
var inst_24802 = (state_24827[(2)]);
var inst_24803 = cljs.core.next.call(null,inst_24786);
var inst_24767 = inst_24803;
var inst_24768 = null;
var inst_24769 = (0);
var inst_24770 = (0);
var state_24827__$1 = (function (){var statearr_24864 = state_24827;
(statearr_24864[(10)] = inst_24768);

(statearr_24864[(20)] = inst_24769);

(statearr_24864[(27)] = inst_24802);

(statearr_24864[(12)] = inst_24770);

(statearr_24864[(21)] = inst_24767);

return statearr_24864;
})();
var statearr_24865_24936 = state_24827__$1;
(statearr_24865_24936[(2)] = null);

(statearr_24865_24936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (43))){
var state_24827__$1 = state_24827;
var statearr_24866_24937 = state_24827__$1;
(statearr_24866_24937[(2)] = null);

(statearr_24866_24937[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (29))){
var inst_24811 = (state_24827[(2)]);
var state_24827__$1 = state_24827;
var statearr_24867_24938 = state_24827__$1;
(statearr_24867_24938[(2)] = inst_24811);

(statearr_24867_24938[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (44))){
var inst_24820 = (state_24827[(2)]);
var state_24827__$1 = (function (){var statearr_24868 = state_24827;
(statearr_24868[(28)] = inst_24820);

return statearr_24868;
})();
var statearr_24869_24939 = state_24827__$1;
(statearr_24869_24939[(2)] = null);

(statearr_24869_24939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (6))){
var inst_24759 = (state_24827[(29)]);
var inst_24758 = cljs.core.deref.call(null,cs);
var inst_24759__$1 = cljs.core.keys.call(null,inst_24758);
var inst_24760 = cljs.core.count.call(null,inst_24759__$1);
var inst_24761 = cljs.core.reset_BANG_.call(null,dctr,inst_24760);
var inst_24766 = cljs.core.seq.call(null,inst_24759__$1);
var inst_24767 = inst_24766;
var inst_24768 = null;
var inst_24769 = (0);
var inst_24770 = (0);
var state_24827__$1 = (function (){var statearr_24870 = state_24827;
(statearr_24870[(29)] = inst_24759__$1);

(statearr_24870[(10)] = inst_24768);

(statearr_24870[(20)] = inst_24769);

(statearr_24870[(12)] = inst_24770);

(statearr_24870[(21)] = inst_24767);

(statearr_24870[(30)] = inst_24761);

return statearr_24870;
})();
var statearr_24871_24940 = state_24827__$1;
(statearr_24871_24940[(2)] = null);

(statearr_24871_24940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (28))){
var inst_24786 = (state_24827[(25)]);
var inst_24767 = (state_24827[(21)]);
var inst_24786__$1 = cljs.core.seq.call(null,inst_24767);
var state_24827__$1 = (function (){var statearr_24872 = state_24827;
(statearr_24872[(25)] = inst_24786__$1);

return statearr_24872;
})();
if(inst_24786__$1){
var statearr_24873_24941 = state_24827__$1;
(statearr_24873_24941[(1)] = (33));

} else {
var statearr_24874_24942 = state_24827__$1;
(statearr_24874_24942[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (25))){
var inst_24769 = (state_24827[(20)]);
var inst_24770 = (state_24827[(12)]);
var inst_24772 = (inst_24770 < inst_24769);
var inst_24773 = inst_24772;
var state_24827__$1 = state_24827;
if(cljs.core.truth_(inst_24773)){
var statearr_24875_24943 = state_24827__$1;
(statearr_24875_24943[(1)] = (27));

} else {
var statearr_24876_24944 = state_24827__$1;
(statearr_24876_24944[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (34))){
var state_24827__$1 = state_24827;
var statearr_24877_24945 = state_24827__$1;
(statearr_24877_24945[(2)] = null);

(statearr_24877_24945[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (17))){
var state_24827__$1 = state_24827;
var statearr_24878_24946 = state_24827__$1;
(statearr_24878_24946[(2)] = null);

(statearr_24878_24946[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (3))){
var inst_24825 = (state_24827[(2)]);
var state_24827__$1 = state_24827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24827__$1,inst_24825);
} else {
if((state_val_24828 === (12))){
var inst_24754 = (state_24827[(2)]);
var state_24827__$1 = state_24827;
var statearr_24879_24947 = state_24827__$1;
(statearr_24879_24947[(2)] = inst_24754);

(statearr_24879_24947[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (2))){
var state_24827__$1 = state_24827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24827__$1,(4),ch);
} else {
if((state_val_24828 === (23))){
var state_24827__$1 = state_24827;
var statearr_24880_24948 = state_24827__$1;
(statearr_24880_24948[(2)] = null);

(statearr_24880_24948[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (35))){
var inst_24809 = (state_24827[(2)]);
var state_24827__$1 = state_24827;
var statearr_24881_24949 = state_24827__$1;
(statearr_24881_24949[(2)] = inst_24809);

(statearr_24881_24949[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (19))){
var inst_24728 = (state_24827[(7)]);
var inst_24732 = cljs.core.chunk_first.call(null,inst_24728);
var inst_24733 = cljs.core.chunk_rest.call(null,inst_24728);
var inst_24734 = cljs.core.count.call(null,inst_24732);
var inst_24708 = inst_24733;
var inst_24709 = inst_24732;
var inst_24710 = inst_24734;
var inst_24711 = (0);
var state_24827__$1 = (function (){var statearr_24882 = state_24827;
(statearr_24882[(14)] = inst_24708);

(statearr_24882[(15)] = inst_24711);

(statearr_24882[(16)] = inst_24710);

(statearr_24882[(17)] = inst_24709);

return statearr_24882;
})();
var statearr_24883_24950 = state_24827__$1;
(statearr_24883_24950[(2)] = null);

(statearr_24883_24950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (11))){
var inst_24708 = (state_24827[(14)]);
var inst_24728 = (state_24827[(7)]);
var inst_24728__$1 = cljs.core.seq.call(null,inst_24708);
var state_24827__$1 = (function (){var statearr_24884 = state_24827;
(statearr_24884[(7)] = inst_24728__$1);

return statearr_24884;
})();
if(inst_24728__$1){
var statearr_24885_24951 = state_24827__$1;
(statearr_24885_24951[(1)] = (16));

} else {
var statearr_24886_24952 = state_24827__$1;
(statearr_24886_24952[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (9))){
var inst_24756 = (state_24827[(2)]);
var state_24827__$1 = state_24827;
var statearr_24887_24953 = state_24827__$1;
(statearr_24887_24953[(2)] = inst_24756);

(statearr_24887_24953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (5))){
var inst_24706 = cljs.core.deref.call(null,cs);
var inst_24707 = cljs.core.seq.call(null,inst_24706);
var inst_24708 = inst_24707;
var inst_24709 = null;
var inst_24710 = (0);
var inst_24711 = (0);
var state_24827__$1 = (function (){var statearr_24888 = state_24827;
(statearr_24888[(14)] = inst_24708);

(statearr_24888[(15)] = inst_24711);

(statearr_24888[(16)] = inst_24710);

(statearr_24888[(17)] = inst_24709);

return statearr_24888;
})();
var statearr_24889_24954 = state_24827__$1;
(statearr_24889_24954[(2)] = null);

(statearr_24889_24954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (14))){
var state_24827__$1 = state_24827;
var statearr_24890_24955 = state_24827__$1;
(statearr_24890_24955[(2)] = null);

(statearr_24890_24955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (45))){
var inst_24817 = (state_24827[(2)]);
var state_24827__$1 = state_24827;
var statearr_24891_24956 = state_24827__$1;
(statearr_24891_24956[(2)] = inst_24817);

(statearr_24891_24956[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (26))){
var inst_24759 = (state_24827[(29)]);
var inst_24813 = (state_24827[(2)]);
var inst_24814 = cljs.core.seq.call(null,inst_24759);
var state_24827__$1 = (function (){var statearr_24892 = state_24827;
(statearr_24892[(31)] = inst_24813);

return statearr_24892;
})();
if(inst_24814){
var statearr_24893_24957 = state_24827__$1;
(statearr_24893_24957[(1)] = (42));

} else {
var statearr_24894_24958 = state_24827__$1;
(statearr_24894_24958[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (16))){
var inst_24728 = (state_24827[(7)]);
var inst_24730 = cljs.core.chunked_seq_QMARK_.call(null,inst_24728);
var state_24827__$1 = state_24827;
if(inst_24730){
var statearr_24895_24959 = state_24827__$1;
(statearr_24895_24959[(1)] = (19));

} else {
var statearr_24896_24960 = state_24827__$1;
(statearr_24896_24960[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (38))){
var inst_24806 = (state_24827[(2)]);
var state_24827__$1 = state_24827;
var statearr_24897_24961 = state_24827__$1;
(statearr_24897_24961[(2)] = inst_24806);

(statearr_24897_24961[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (30))){
var state_24827__$1 = state_24827;
var statearr_24898_24962 = state_24827__$1;
(statearr_24898_24962[(2)] = null);

(statearr_24898_24962[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (10))){
var inst_24711 = (state_24827[(15)]);
var inst_24709 = (state_24827[(17)]);
var inst_24717 = cljs.core._nth.call(null,inst_24709,inst_24711);
var inst_24718 = cljs.core.nth.call(null,inst_24717,(0),null);
var inst_24719 = cljs.core.nth.call(null,inst_24717,(1),null);
var state_24827__$1 = (function (){var statearr_24899 = state_24827;
(statearr_24899[(26)] = inst_24718);

return statearr_24899;
})();
if(cljs.core.truth_(inst_24719)){
var statearr_24900_24963 = state_24827__$1;
(statearr_24900_24963[(1)] = (13));

} else {
var statearr_24901_24964 = state_24827__$1;
(statearr_24901_24964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (18))){
var inst_24752 = (state_24827[(2)]);
var state_24827__$1 = state_24827;
var statearr_24902_24965 = state_24827__$1;
(statearr_24902_24965[(2)] = inst_24752);

(statearr_24902_24965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (42))){
var state_24827__$1 = state_24827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24827__$1,(45),dchan);
} else {
if((state_val_24828 === (37))){
var inst_24699 = (state_24827[(9)]);
var inst_24795 = (state_24827[(23)]);
var inst_24786 = (state_24827[(25)]);
var inst_24795__$1 = cljs.core.first.call(null,inst_24786);
var inst_24796 = cljs.core.async.put_BANG_.call(null,inst_24795__$1,inst_24699,done);
var state_24827__$1 = (function (){var statearr_24903 = state_24827;
(statearr_24903[(23)] = inst_24795__$1);

return statearr_24903;
})();
if(cljs.core.truth_(inst_24796)){
var statearr_24904_24966 = state_24827__$1;
(statearr_24904_24966[(1)] = (39));

} else {
var statearr_24905_24967 = state_24827__$1;
(statearr_24905_24967[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (8))){
var inst_24711 = (state_24827[(15)]);
var inst_24710 = (state_24827[(16)]);
var inst_24713 = (inst_24711 < inst_24710);
var inst_24714 = inst_24713;
var state_24827__$1 = state_24827;
if(cljs.core.truth_(inst_24714)){
var statearr_24906_24968 = state_24827__$1;
(statearr_24906_24968[(1)] = (10));

} else {
var statearr_24907_24969 = state_24827__$1;
(statearr_24907_24969[(1)] = (11));

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
});})(c__23608__auto___24915,cs,m,dchan,dctr,done))
;
return ((function (switch__23496__auto__,c__23608__auto___24915,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23497__auto__ = null;
var cljs$core$async$mult_$_state_machine__23497__auto____0 = (function (){
var statearr_24911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24911[(0)] = cljs$core$async$mult_$_state_machine__23497__auto__);

(statearr_24911[(1)] = (1));

return statearr_24911;
});
var cljs$core$async$mult_$_state_machine__23497__auto____1 = (function (state_24827){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_24827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e24912){if((e24912 instanceof Object)){
var ex__23500__auto__ = e24912;
var statearr_24913_24970 = state_24827;
(statearr_24913_24970[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24971 = state_24827;
state_24827 = G__24971;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23497__auto__ = function(state_24827){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23497__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23497__auto____1.call(this,state_24827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23497__auto____0;
cljs$core$async$mult_$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23497__auto____1;
return cljs$core$async$mult_$_state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto___24915,cs,m,dchan,dctr,done))
})();
var state__23610__auto__ = (function (){var statearr_24914 = f__23609__auto__.call(null);
(statearr_24914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto___24915);

return statearr_24914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto___24915,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args24972 = [];
var len__19538__auto___24975 = arguments.length;
var i__19539__auto___24976 = (0);
while(true){
if((i__19539__auto___24976 < len__19538__auto___24975)){
args24972.push((arguments[i__19539__auto___24976]));

var G__24977 = (i__19539__auto___24976 + (1));
i__19539__auto___24976 = G__24977;
continue;
} else {
}
break;
}

var G__24974 = args24972.length;
switch (G__24974) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24972.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19131__auto__ = (((m == null))?null:m);
var m__19132__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,m,ch);
} else {
var m__19132__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19131__auto__ = (((m == null))?null:m);
var m__19132__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,m,ch);
} else {
var m__19132__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19131__auto__ = (((m == null))?null:m);
var m__19132__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,m);
} else {
var m__19132__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19131__auto__ = (((m == null))?null:m);
var m__19132__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,m,state_map);
} else {
var m__19132__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19131__auto__ = (((m == null))?null:m);
var m__19132__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,m,mode);
} else {
var m__19132__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19545__auto__ = [];
var len__19538__auto___24989 = arguments.length;
var i__19539__auto___24990 = (0);
while(true){
if((i__19539__auto___24990 < len__19538__auto___24989)){
args__19545__auto__.push((arguments[i__19539__auto___24990]));

var G__24991 = (i__19539__auto___24990 + (1));
i__19539__auto___24990 = G__24991;
continue;
} else {
}
break;
}

var argseq__19546__auto__ = ((((3) < args__19545__auto__.length))?(new cljs.core.IndexedSeq(args__19545__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19546__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24983){
var map__24984 = p__24983;
var map__24984__$1 = ((((!((map__24984 == null)))?((((map__24984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24984):map__24984);
var opts = map__24984__$1;
var statearr_24986_24992 = state;
(statearr_24986_24992[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__24984,map__24984__$1,opts){
return (function (val){
var statearr_24987_24993 = state;
(statearr_24987_24993[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24984,map__24984__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_24988_24994 = state;
(statearr_24988_24994[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24979){
var G__24980 = cljs.core.first.call(null,seq24979);
var seq24979__$1 = cljs.core.next.call(null,seq24979);
var G__24981 = cljs.core.first.call(null,seq24979__$1);
var seq24979__$2 = cljs.core.next.call(null,seq24979__$1);
var G__24982 = cljs.core.first.call(null,seq24979__$2);
var seq24979__$3 = cljs.core.next.call(null,seq24979__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24980,G__24981,G__24982,seq24979__$3);
});
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
if(typeof cljs.core.async.t_cljs$core$async25158 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25158 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25159){
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
this.meta25159 = meta25159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25160,meta25159__$1){
var self__ = this;
var _25160__$1 = this;
return (new cljs.core.async.t_cljs$core$async25158(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25159__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25158.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25160){
var self__ = this;
var _25160__$1 = this;
return self__.meta25159;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25158.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25158.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25158.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25158.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25158.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25158.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25158.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25158.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25158.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25159","meta25159",-1580250681,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25158.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25158";

cljs.core.async.t_cljs$core$async25158.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async25158");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25158 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25158(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25159){
return (new cljs.core.async.t_cljs$core$async25158(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25159));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25158(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23608__auto___25321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto___25321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto___25321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25258){
var state_val_25259 = (state_25258[(1)]);
if((state_val_25259 === (7))){
var inst_25176 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
var statearr_25260_25322 = state_25258__$1;
(statearr_25260_25322[(2)] = inst_25176);

(statearr_25260_25322[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (20))){
var inst_25188 = (state_25258[(7)]);
var state_25258__$1 = state_25258;
var statearr_25261_25323 = state_25258__$1;
(statearr_25261_25323[(2)] = inst_25188);

(statearr_25261_25323[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (27))){
var state_25258__$1 = state_25258;
var statearr_25262_25324 = state_25258__$1;
(statearr_25262_25324[(2)] = null);

(statearr_25262_25324[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (1))){
var inst_25164 = (state_25258[(8)]);
var inst_25164__$1 = calc_state.call(null);
var inst_25166 = (inst_25164__$1 == null);
var inst_25167 = cljs.core.not.call(null,inst_25166);
var state_25258__$1 = (function (){var statearr_25263 = state_25258;
(statearr_25263[(8)] = inst_25164__$1);

return statearr_25263;
})();
if(inst_25167){
var statearr_25264_25325 = state_25258__$1;
(statearr_25264_25325[(1)] = (2));

} else {
var statearr_25265_25326 = state_25258__$1;
(statearr_25265_25326[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (24))){
var inst_25232 = (state_25258[(9)]);
var inst_25211 = (state_25258[(10)]);
var inst_25218 = (state_25258[(11)]);
var inst_25232__$1 = inst_25211.call(null,inst_25218);
var state_25258__$1 = (function (){var statearr_25266 = state_25258;
(statearr_25266[(9)] = inst_25232__$1);

return statearr_25266;
})();
if(cljs.core.truth_(inst_25232__$1)){
var statearr_25267_25327 = state_25258__$1;
(statearr_25267_25327[(1)] = (29));

} else {
var statearr_25268_25328 = state_25258__$1;
(statearr_25268_25328[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (4))){
var inst_25179 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
if(cljs.core.truth_(inst_25179)){
var statearr_25269_25329 = state_25258__$1;
(statearr_25269_25329[(1)] = (8));

} else {
var statearr_25270_25330 = state_25258__$1;
(statearr_25270_25330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (15))){
var inst_25205 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
if(cljs.core.truth_(inst_25205)){
var statearr_25271_25331 = state_25258__$1;
(statearr_25271_25331[(1)] = (19));

} else {
var statearr_25272_25332 = state_25258__$1;
(statearr_25272_25332[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (21))){
var inst_25210 = (state_25258[(12)]);
var inst_25210__$1 = (state_25258[(2)]);
var inst_25211 = cljs.core.get.call(null,inst_25210__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25212 = cljs.core.get.call(null,inst_25210__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25213 = cljs.core.get.call(null,inst_25210__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25258__$1 = (function (){var statearr_25273 = state_25258;
(statearr_25273[(12)] = inst_25210__$1);

(statearr_25273[(10)] = inst_25211);

(statearr_25273[(13)] = inst_25212);

return statearr_25273;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25258__$1,(22),inst_25213);
} else {
if((state_val_25259 === (31))){
var inst_25240 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
if(cljs.core.truth_(inst_25240)){
var statearr_25274_25333 = state_25258__$1;
(statearr_25274_25333[(1)] = (32));

} else {
var statearr_25275_25334 = state_25258__$1;
(statearr_25275_25334[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (32))){
var inst_25217 = (state_25258[(14)]);
var state_25258__$1 = state_25258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25258__$1,(35),out,inst_25217);
} else {
if((state_val_25259 === (33))){
var inst_25210 = (state_25258[(12)]);
var inst_25188 = inst_25210;
var state_25258__$1 = (function (){var statearr_25276 = state_25258;
(statearr_25276[(7)] = inst_25188);

return statearr_25276;
})();
var statearr_25277_25335 = state_25258__$1;
(statearr_25277_25335[(2)] = null);

(statearr_25277_25335[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (13))){
var inst_25188 = (state_25258[(7)]);
var inst_25195 = inst_25188.cljs$lang$protocol_mask$partition0$;
var inst_25196 = (inst_25195 & (64));
var inst_25197 = inst_25188.cljs$core$ISeq$;
var inst_25198 = (inst_25196) || (inst_25197);
var state_25258__$1 = state_25258;
if(cljs.core.truth_(inst_25198)){
var statearr_25278_25336 = state_25258__$1;
(statearr_25278_25336[(1)] = (16));

} else {
var statearr_25279_25337 = state_25258__$1;
(statearr_25279_25337[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (22))){
var inst_25217 = (state_25258[(14)]);
var inst_25218 = (state_25258[(11)]);
var inst_25216 = (state_25258[(2)]);
var inst_25217__$1 = cljs.core.nth.call(null,inst_25216,(0),null);
var inst_25218__$1 = cljs.core.nth.call(null,inst_25216,(1),null);
var inst_25219 = (inst_25217__$1 == null);
var inst_25220 = cljs.core._EQ_.call(null,inst_25218__$1,change);
var inst_25221 = (inst_25219) || (inst_25220);
var state_25258__$1 = (function (){var statearr_25280 = state_25258;
(statearr_25280[(14)] = inst_25217__$1);

(statearr_25280[(11)] = inst_25218__$1);

return statearr_25280;
})();
if(cljs.core.truth_(inst_25221)){
var statearr_25281_25338 = state_25258__$1;
(statearr_25281_25338[(1)] = (23));

} else {
var statearr_25282_25339 = state_25258__$1;
(statearr_25282_25339[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (36))){
var inst_25210 = (state_25258[(12)]);
var inst_25188 = inst_25210;
var state_25258__$1 = (function (){var statearr_25283 = state_25258;
(statearr_25283[(7)] = inst_25188);

return statearr_25283;
})();
var statearr_25284_25340 = state_25258__$1;
(statearr_25284_25340[(2)] = null);

(statearr_25284_25340[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (29))){
var inst_25232 = (state_25258[(9)]);
var state_25258__$1 = state_25258;
var statearr_25285_25341 = state_25258__$1;
(statearr_25285_25341[(2)] = inst_25232);

(statearr_25285_25341[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (6))){
var state_25258__$1 = state_25258;
var statearr_25286_25342 = state_25258__$1;
(statearr_25286_25342[(2)] = false);

(statearr_25286_25342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (28))){
var inst_25228 = (state_25258[(2)]);
var inst_25229 = calc_state.call(null);
var inst_25188 = inst_25229;
var state_25258__$1 = (function (){var statearr_25287 = state_25258;
(statearr_25287[(15)] = inst_25228);

(statearr_25287[(7)] = inst_25188);

return statearr_25287;
})();
var statearr_25288_25343 = state_25258__$1;
(statearr_25288_25343[(2)] = null);

(statearr_25288_25343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (25))){
var inst_25254 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
var statearr_25289_25344 = state_25258__$1;
(statearr_25289_25344[(2)] = inst_25254);

(statearr_25289_25344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (34))){
var inst_25252 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
var statearr_25290_25345 = state_25258__$1;
(statearr_25290_25345[(2)] = inst_25252);

(statearr_25290_25345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (17))){
var state_25258__$1 = state_25258;
var statearr_25291_25346 = state_25258__$1;
(statearr_25291_25346[(2)] = false);

(statearr_25291_25346[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (3))){
var state_25258__$1 = state_25258;
var statearr_25292_25347 = state_25258__$1;
(statearr_25292_25347[(2)] = false);

(statearr_25292_25347[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (12))){
var inst_25256 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25258__$1,inst_25256);
} else {
if((state_val_25259 === (2))){
var inst_25164 = (state_25258[(8)]);
var inst_25169 = inst_25164.cljs$lang$protocol_mask$partition0$;
var inst_25170 = (inst_25169 & (64));
var inst_25171 = inst_25164.cljs$core$ISeq$;
var inst_25172 = (inst_25170) || (inst_25171);
var state_25258__$1 = state_25258;
if(cljs.core.truth_(inst_25172)){
var statearr_25293_25348 = state_25258__$1;
(statearr_25293_25348[(1)] = (5));

} else {
var statearr_25294_25349 = state_25258__$1;
(statearr_25294_25349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (23))){
var inst_25217 = (state_25258[(14)]);
var inst_25223 = (inst_25217 == null);
var state_25258__$1 = state_25258;
if(cljs.core.truth_(inst_25223)){
var statearr_25295_25350 = state_25258__$1;
(statearr_25295_25350[(1)] = (26));

} else {
var statearr_25296_25351 = state_25258__$1;
(statearr_25296_25351[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (35))){
var inst_25243 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
if(cljs.core.truth_(inst_25243)){
var statearr_25297_25352 = state_25258__$1;
(statearr_25297_25352[(1)] = (36));

} else {
var statearr_25298_25353 = state_25258__$1;
(statearr_25298_25353[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (19))){
var inst_25188 = (state_25258[(7)]);
var inst_25207 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25188);
var state_25258__$1 = state_25258;
var statearr_25299_25354 = state_25258__$1;
(statearr_25299_25354[(2)] = inst_25207);

(statearr_25299_25354[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (11))){
var inst_25188 = (state_25258[(7)]);
var inst_25192 = (inst_25188 == null);
var inst_25193 = cljs.core.not.call(null,inst_25192);
var state_25258__$1 = state_25258;
if(inst_25193){
var statearr_25300_25355 = state_25258__$1;
(statearr_25300_25355[(1)] = (13));

} else {
var statearr_25301_25356 = state_25258__$1;
(statearr_25301_25356[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (9))){
var inst_25164 = (state_25258[(8)]);
var state_25258__$1 = state_25258;
var statearr_25302_25357 = state_25258__$1;
(statearr_25302_25357[(2)] = inst_25164);

(statearr_25302_25357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (5))){
var state_25258__$1 = state_25258;
var statearr_25303_25358 = state_25258__$1;
(statearr_25303_25358[(2)] = true);

(statearr_25303_25358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (14))){
var state_25258__$1 = state_25258;
var statearr_25304_25359 = state_25258__$1;
(statearr_25304_25359[(2)] = false);

(statearr_25304_25359[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (26))){
var inst_25218 = (state_25258[(11)]);
var inst_25225 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25218);
var state_25258__$1 = state_25258;
var statearr_25305_25360 = state_25258__$1;
(statearr_25305_25360[(2)] = inst_25225);

(statearr_25305_25360[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (16))){
var state_25258__$1 = state_25258;
var statearr_25306_25361 = state_25258__$1;
(statearr_25306_25361[(2)] = true);

(statearr_25306_25361[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (38))){
var inst_25248 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
var statearr_25307_25362 = state_25258__$1;
(statearr_25307_25362[(2)] = inst_25248);

(statearr_25307_25362[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (30))){
var inst_25211 = (state_25258[(10)]);
var inst_25218 = (state_25258[(11)]);
var inst_25212 = (state_25258[(13)]);
var inst_25235 = cljs.core.empty_QMARK_.call(null,inst_25211);
var inst_25236 = inst_25212.call(null,inst_25218);
var inst_25237 = cljs.core.not.call(null,inst_25236);
var inst_25238 = (inst_25235) && (inst_25237);
var state_25258__$1 = state_25258;
var statearr_25308_25363 = state_25258__$1;
(statearr_25308_25363[(2)] = inst_25238);

(statearr_25308_25363[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (10))){
var inst_25164 = (state_25258[(8)]);
var inst_25184 = (state_25258[(2)]);
var inst_25185 = cljs.core.get.call(null,inst_25184,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25186 = cljs.core.get.call(null,inst_25184,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25187 = cljs.core.get.call(null,inst_25184,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25188 = inst_25164;
var state_25258__$1 = (function (){var statearr_25309 = state_25258;
(statearr_25309[(16)] = inst_25186);

(statearr_25309[(7)] = inst_25188);

(statearr_25309[(17)] = inst_25185);

(statearr_25309[(18)] = inst_25187);

return statearr_25309;
})();
var statearr_25310_25364 = state_25258__$1;
(statearr_25310_25364[(2)] = null);

(statearr_25310_25364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (18))){
var inst_25202 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
var statearr_25311_25365 = state_25258__$1;
(statearr_25311_25365[(2)] = inst_25202);

(statearr_25311_25365[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (37))){
var state_25258__$1 = state_25258;
var statearr_25312_25366 = state_25258__$1;
(statearr_25312_25366[(2)] = null);

(statearr_25312_25366[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (8))){
var inst_25164 = (state_25258[(8)]);
var inst_25181 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25164);
var state_25258__$1 = state_25258;
var statearr_25313_25367 = state_25258__$1;
(statearr_25313_25367[(2)] = inst_25181);

(statearr_25313_25367[(1)] = (10));


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
});})(c__23608__auto___25321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23496__auto__,c__23608__auto___25321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23497__auto__ = null;
var cljs$core$async$mix_$_state_machine__23497__auto____0 = (function (){
var statearr_25317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25317[(0)] = cljs$core$async$mix_$_state_machine__23497__auto__);

(statearr_25317[(1)] = (1));

return statearr_25317;
});
var cljs$core$async$mix_$_state_machine__23497__auto____1 = (function (state_25258){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_25258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e25318){if((e25318 instanceof Object)){
var ex__23500__auto__ = e25318;
var statearr_25319_25368 = state_25258;
(statearr_25319_25368[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25369 = state_25258;
state_25258 = G__25369;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23497__auto__ = function(state_25258){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23497__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23497__auto____1.call(this,state_25258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23497__auto____0;
cljs$core$async$mix_$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23497__auto____1;
return cljs$core$async$mix_$_state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto___25321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23610__auto__ = (function (){var statearr_25320 = f__23609__auto__.call(null);
(statearr_25320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto___25321);

return statearr_25320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto___25321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19131__auto__ = (((p == null))?null:p);
var m__19132__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19132__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19131__auto__ = (((p == null))?null:p);
var m__19132__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,p,v,ch);
} else {
var m__19132__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25370 = [];
var len__19538__auto___25373 = arguments.length;
var i__19539__auto___25374 = (0);
while(true){
if((i__19539__auto___25374 < len__19538__auto___25373)){
args25370.push((arguments[i__19539__auto___25374]));

var G__25375 = (i__19539__auto___25374 + (1));
i__19539__auto___25374 = G__25375;
continue;
} else {
}
break;
}

var G__25372 = args25370.length;
switch (G__25372) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25370.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19131__auto__ = (((p == null))?null:p);
var m__19132__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,p);
} else {
var m__19132__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19131__auto__ = (((p == null))?null:p);
var m__19132__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19131__auto__)]);
if(!((m__19132__auto__ == null))){
return m__19132__auto__.call(null,p,v);
} else {
var m__19132__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19132__auto____$1 == null))){
return m__19132__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

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
var args25378 = [];
var len__19538__auto___25503 = arguments.length;
var i__19539__auto___25504 = (0);
while(true){
if((i__19539__auto___25504 < len__19538__auto___25503)){
args25378.push((arguments[i__19539__auto___25504]));

var G__25505 = (i__19539__auto___25504 + (1));
i__19539__auto___25504 = G__25505;
continue;
} else {
}
break;
}

var G__25380 = args25378.length;
switch (G__25380) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25378.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18468__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18468__auto__)){
return or__18468__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18468__auto__,mults){
return (function (p1__25377_SHARP_){
if(cljs.core.truth_(p1__25377_SHARP_.call(null,topic))){
return p1__25377_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25377_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18468__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25381 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25381 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25382){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25382 = meta25382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25383,meta25382__$1){
var self__ = this;
var _25383__$1 = this;
return (new cljs.core.async.t_cljs$core$async25381(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25382__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25381.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25383){
var self__ = this;
var _25383__$1 = this;
return self__.meta25382;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25381.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25381.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25381.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25381.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25381.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25381.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25381.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25381.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25382","meta25382",-1355834008,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25381.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25381";

cljs.core.async.t_cljs$core$async25381.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async25381");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25381 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25381(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25382){
return (new cljs.core.async.t_cljs$core$async25381(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25382));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25381(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23608__auto___25507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto___25507,mults,ensure_mult,p){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto___25507,mults,ensure_mult,p){
return (function (state_25455){
var state_val_25456 = (state_25455[(1)]);
if((state_val_25456 === (7))){
var inst_25451 = (state_25455[(2)]);
var state_25455__$1 = state_25455;
var statearr_25457_25508 = state_25455__$1;
(statearr_25457_25508[(2)] = inst_25451);

(statearr_25457_25508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (20))){
var state_25455__$1 = state_25455;
var statearr_25458_25509 = state_25455__$1;
(statearr_25458_25509[(2)] = null);

(statearr_25458_25509[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (1))){
var state_25455__$1 = state_25455;
var statearr_25459_25510 = state_25455__$1;
(statearr_25459_25510[(2)] = null);

(statearr_25459_25510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (24))){
var inst_25434 = (state_25455[(7)]);
var inst_25443 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25434);
var state_25455__$1 = state_25455;
var statearr_25460_25511 = state_25455__$1;
(statearr_25460_25511[(2)] = inst_25443);

(statearr_25460_25511[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (4))){
var inst_25386 = (state_25455[(8)]);
var inst_25386__$1 = (state_25455[(2)]);
var inst_25387 = (inst_25386__$1 == null);
var state_25455__$1 = (function (){var statearr_25461 = state_25455;
(statearr_25461[(8)] = inst_25386__$1);

return statearr_25461;
})();
if(cljs.core.truth_(inst_25387)){
var statearr_25462_25512 = state_25455__$1;
(statearr_25462_25512[(1)] = (5));

} else {
var statearr_25463_25513 = state_25455__$1;
(statearr_25463_25513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (15))){
var inst_25428 = (state_25455[(2)]);
var state_25455__$1 = state_25455;
var statearr_25464_25514 = state_25455__$1;
(statearr_25464_25514[(2)] = inst_25428);

(statearr_25464_25514[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (21))){
var inst_25448 = (state_25455[(2)]);
var state_25455__$1 = (function (){var statearr_25465 = state_25455;
(statearr_25465[(9)] = inst_25448);

return statearr_25465;
})();
var statearr_25466_25515 = state_25455__$1;
(statearr_25466_25515[(2)] = null);

(statearr_25466_25515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (13))){
var inst_25410 = (state_25455[(10)]);
var inst_25412 = cljs.core.chunked_seq_QMARK_.call(null,inst_25410);
var state_25455__$1 = state_25455;
if(inst_25412){
var statearr_25467_25516 = state_25455__$1;
(statearr_25467_25516[(1)] = (16));

} else {
var statearr_25468_25517 = state_25455__$1;
(statearr_25468_25517[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (22))){
var inst_25440 = (state_25455[(2)]);
var state_25455__$1 = state_25455;
if(cljs.core.truth_(inst_25440)){
var statearr_25469_25518 = state_25455__$1;
(statearr_25469_25518[(1)] = (23));

} else {
var statearr_25470_25519 = state_25455__$1;
(statearr_25470_25519[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (6))){
var inst_25436 = (state_25455[(11)]);
var inst_25434 = (state_25455[(7)]);
var inst_25386 = (state_25455[(8)]);
var inst_25434__$1 = topic_fn.call(null,inst_25386);
var inst_25435 = cljs.core.deref.call(null,mults);
var inst_25436__$1 = cljs.core.get.call(null,inst_25435,inst_25434__$1);
var state_25455__$1 = (function (){var statearr_25471 = state_25455;
(statearr_25471[(11)] = inst_25436__$1);

(statearr_25471[(7)] = inst_25434__$1);

return statearr_25471;
})();
if(cljs.core.truth_(inst_25436__$1)){
var statearr_25472_25520 = state_25455__$1;
(statearr_25472_25520[(1)] = (19));

} else {
var statearr_25473_25521 = state_25455__$1;
(statearr_25473_25521[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (25))){
var inst_25445 = (state_25455[(2)]);
var state_25455__$1 = state_25455;
var statearr_25474_25522 = state_25455__$1;
(statearr_25474_25522[(2)] = inst_25445);

(statearr_25474_25522[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (17))){
var inst_25410 = (state_25455[(10)]);
var inst_25419 = cljs.core.first.call(null,inst_25410);
var inst_25420 = cljs.core.async.muxch_STAR_.call(null,inst_25419);
var inst_25421 = cljs.core.async.close_BANG_.call(null,inst_25420);
var inst_25422 = cljs.core.next.call(null,inst_25410);
var inst_25396 = inst_25422;
var inst_25397 = null;
var inst_25398 = (0);
var inst_25399 = (0);
var state_25455__$1 = (function (){var statearr_25475 = state_25455;
(statearr_25475[(12)] = inst_25399);

(statearr_25475[(13)] = inst_25421);

(statearr_25475[(14)] = inst_25396);

(statearr_25475[(15)] = inst_25397);

(statearr_25475[(16)] = inst_25398);

return statearr_25475;
})();
var statearr_25476_25523 = state_25455__$1;
(statearr_25476_25523[(2)] = null);

(statearr_25476_25523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (3))){
var inst_25453 = (state_25455[(2)]);
var state_25455__$1 = state_25455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25455__$1,inst_25453);
} else {
if((state_val_25456 === (12))){
var inst_25430 = (state_25455[(2)]);
var state_25455__$1 = state_25455;
var statearr_25477_25524 = state_25455__$1;
(statearr_25477_25524[(2)] = inst_25430);

(statearr_25477_25524[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (2))){
var state_25455__$1 = state_25455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25455__$1,(4),ch);
} else {
if((state_val_25456 === (23))){
var state_25455__$1 = state_25455;
var statearr_25478_25525 = state_25455__$1;
(statearr_25478_25525[(2)] = null);

(statearr_25478_25525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (19))){
var inst_25436 = (state_25455[(11)]);
var inst_25386 = (state_25455[(8)]);
var inst_25438 = cljs.core.async.muxch_STAR_.call(null,inst_25436);
var state_25455__$1 = state_25455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25455__$1,(22),inst_25438,inst_25386);
} else {
if((state_val_25456 === (11))){
var inst_25396 = (state_25455[(14)]);
var inst_25410 = (state_25455[(10)]);
var inst_25410__$1 = cljs.core.seq.call(null,inst_25396);
var state_25455__$1 = (function (){var statearr_25479 = state_25455;
(statearr_25479[(10)] = inst_25410__$1);

return statearr_25479;
})();
if(inst_25410__$1){
var statearr_25480_25526 = state_25455__$1;
(statearr_25480_25526[(1)] = (13));

} else {
var statearr_25481_25527 = state_25455__$1;
(statearr_25481_25527[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (9))){
var inst_25432 = (state_25455[(2)]);
var state_25455__$1 = state_25455;
var statearr_25482_25528 = state_25455__$1;
(statearr_25482_25528[(2)] = inst_25432);

(statearr_25482_25528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (5))){
var inst_25393 = cljs.core.deref.call(null,mults);
var inst_25394 = cljs.core.vals.call(null,inst_25393);
var inst_25395 = cljs.core.seq.call(null,inst_25394);
var inst_25396 = inst_25395;
var inst_25397 = null;
var inst_25398 = (0);
var inst_25399 = (0);
var state_25455__$1 = (function (){var statearr_25483 = state_25455;
(statearr_25483[(12)] = inst_25399);

(statearr_25483[(14)] = inst_25396);

(statearr_25483[(15)] = inst_25397);

(statearr_25483[(16)] = inst_25398);

return statearr_25483;
})();
var statearr_25484_25529 = state_25455__$1;
(statearr_25484_25529[(2)] = null);

(statearr_25484_25529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (14))){
var state_25455__$1 = state_25455;
var statearr_25488_25530 = state_25455__$1;
(statearr_25488_25530[(2)] = null);

(statearr_25488_25530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (16))){
var inst_25410 = (state_25455[(10)]);
var inst_25414 = cljs.core.chunk_first.call(null,inst_25410);
var inst_25415 = cljs.core.chunk_rest.call(null,inst_25410);
var inst_25416 = cljs.core.count.call(null,inst_25414);
var inst_25396 = inst_25415;
var inst_25397 = inst_25414;
var inst_25398 = inst_25416;
var inst_25399 = (0);
var state_25455__$1 = (function (){var statearr_25489 = state_25455;
(statearr_25489[(12)] = inst_25399);

(statearr_25489[(14)] = inst_25396);

(statearr_25489[(15)] = inst_25397);

(statearr_25489[(16)] = inst_25398);

return statearr_25489;
})();
var statearr_25490_25531 = state_25455__$1;
(statearr_25490_25531[(2)] = null);

(statearr_25490_25531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (10))){
var inst_25399 = (state_25455[(12)]);
var inst_25396 = (state_25455[(14)]);
var inst_25397 = (state_25455[(15)]);
var inst_25398 = (state_25455[(16)]);
var inst_25404 = cljs.core._nth.call(null,inst_25397,inst_25399);
var inst_25405 = cljs.core.async.muxch_STAR_.call(null,inst_25404);
var inst_25406 = cljs.core.async.close_BANG_.call(null,inst_25405);
var inst_25407 = (inst_25399 + (1));
var tmp25485 = inst_25396;
var tmp25486 = inst_25397;
var tmp25487 = inst_25398;
var inst_25396__$1 = tmp25485;
var inst_25397__$1 = tmp25486;
var inst_25398__$1 = tmp25487;
var inst_25399__$1 = inst_25407;
var state_25455__$1 = (function (){var statearr_25491 = state_25455;
(statearr_25491[(12)] = inst_25399__$1);

(statearr_25491[(14)] = inst_25396__$1);

(statearr_25491[(17)] = inst_25406);

(statearr_25491[(15)] = inst_25397__$1);

(statearr_25491[(16)] = inst_25398__$1);

return statearr_25491;
})();
var statearr_25492_25532 = state_25455__$1;
(statearr_25492_25532[(2)] = null);

(statearr_25492_25532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (18))){
var inst_25425 = (state_25455[(2)]);
var state_25455__$1 = state_25455;
var statearr_25493_25533 = state_25455__$1;
(statearr_25493_25533[(2)] = inst_25425);

(statearr_25493_25533[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25456 === (8))){
var inst_25399 = (state_25455[(12)]);
var inst_25398 = (state_25455[(16)]);
var inst_25401 = (inst_25399 < inst_25398);
var inst_25402 = inst_25401;
var state_25455__$1 = state_25455;
if(cljs.core.truth_(inst_25402)){
var statearr_25494_25534 = state_25455__$1;
(statearr_25494_25534[(1)] = (10));

} else {
var statearr_25495_25535 = state_25455__$1;
(statearr_25495_25535[(1)] = (11));

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
});})(c__23608__auto___25507,mults,ensure_mult,p))
;
return ((function (switch__23496__auto__,c__23608__auto___25507,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23497__auto__ = null;
var cljs$core$async$state_machine__23497__auto____0 = (function (){
var statearr_25499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25499[(0)] = cljs$core$async$state_machine__23497__auto__);

(statearr_25499[(1)] = (1));

return statearr_25499;
});
var cljs$core$async$state_machine__23497__auto____1 = (function (state_25455){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_25455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e25500){if((e25500 instanceof Object)){
var ex__23500__auto__ = e25500;
var statearr_25501_25536 = state_25455;
(statearr_25501_25536[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25537 = state_25455;
state_25455 = G__25537;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
cljs$core$async$state_machine__23497__auto__ = function(state_25455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23497__auto____1.call(this,state_25455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23497__auto____0;
cljs$core$async$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23497__auto____1;
return cljs$core$async$state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto___25507,mults,ensure_mult,p))
})();
var state__23610__auto__ = (function (){var statearr_25502 = f__23609__auto__.call(null);
(statearr_25502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto___25507);

return statearr_25502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto___25507,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args25538 = [];
var len__19538__auto___25541 = arguments.length;
var i__19539__auto___25542 = (0);
while(true){
if((i__19539__auto___25542 < len__19538__auto___25541)){
args25538.push((arguments[i__19539__auto___25542]));

var G__25543 = (i__19539__auto___25542 + (1));
i__19539__auto___25542 = G__25543;
continue;
} else {
}
break;
}

var G__25540 = args25538.length;
switch (G__25540) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25538.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args25545 = [];
var len__19538__auto___25548 = arguments.length;
var i__19539__auto___25549 = (0);
while(true){
if((i__19539__auto___25549 < len__19538__auto___25548)){
args25545.push((arguments[i__19539__auto___25549]));

var G__25550 = (i__19539__auto___25549 + (1));
i__19539__auto___25549 = G__25550;
continue;
} else {
}
break;
}

var G__25547 = args25545.length;
switch (G__25547) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25545.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
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
var args25552 = [];
var len__19538__auto___25623 = arguments.length;
var i__19539__auto___25624 = (0);
while(true){
if((i__19539__auto___25624 < len__19538__auto___25623)){
args25552.push((arguments[i__19539__auto___25624]));

var G__25625 = (i__19539__auto___25624 + (1));
i__19539__auto___25624 = G__25625;
continue;
} else {
}
break;
}

var G__25554 = args25552.length;
switch (G__25554) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25552.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
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
var c__23608__auto___25627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto___25627,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto___25627,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25593){
var state_val_25594 = (state_25593[(1)]);
if((state_val_25594 === (7))){
var state_25593__$1 = state_25593;
var statearr_25595_25628 = state_25593__$1;
(statearr_25595_25628[(2)] = null);

(statearr_25595_25628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (1))){
var state_25593__$1 = state_25593;
var statearr_25596_25629 = state_25593__$1;
(statearr_25596_25629[(2)] = null);

(statearr_25596_25629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (4))){
var inst_25557 = (state_25593[(7)]);
var inst_25559 = (inst_25557 < cnt);
var state_25593__$1 = state_25593;
if(cljs.core.truth_(inst_25559)){
var statearr_25597_25630 = state_25593__$1;
(statearr_25597_25630[(1)] = (6));

} else {
var statearr_25598_25631 = state_25593__$1;
(statearr_25598_25631[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (15))){
var inst_25589 = (state_25593[(2)]);
var state_25593__$1 = state_25593;
var statearr_25599_25632 = state_25593__$1;
(statearr_25599_25632[(2)] = inst_25589);

(statearr_25599_25632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (13))){
var inst_25582 = cljs.core.async.close_BANG_.call(null,out);
var state_25593__$1 = state_25593;
var statearr_25600_25633 = state_25593__$1;
(statearr_25600_25633[(2)] = inst_25582);

(statearr_25600_25633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (6))){
var state_25593__$1 = state_25593;
var statearr_25601_25634 = state_25593__$1;
(statearr_25601_25634[(2)] = null);

(statearr_25601_25634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (3))){
var inst_25591 = (state_25593[(2)]);
var state_25593__$1 = state_25593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25593__$1,inst_25591);
} else {
if((state_val_25594 === (12))){
var inst_25579 = (state_25593[(8)]);
var inst_25579__$1 = (state_25593[(2)]);
var inst_25580 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25579__$1);
var state_25593__$1 = (function (){var statearr_25602 = state_25593;
(statearr_25602[(8)] = inst_25579__$1);

return statearr_25602;
})();
if(cljs.core.truth_(inst_25580)){
var statearr_25603_25635 = state_25593__$1;
(statearr_25603_25635[(1)] = (13));

} else {
var statearr_25604_25636 = state_25593__$1;
(statearr_25604_25636[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (2))){
var inst_25556 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25557 = (0);
var state_25593__$1 = (function (){var statearr_25605 = state_25593;
(statearr_25605[(7)] = inst_25557);

(statearr_25605[(9)] = inst_25556);

return statearr_25605;
})();
var statearr_25606_25637 = state_25593__$1;
(statearr_25606_25637[(2)] = null);

(statearr_25606_25637[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (11))){
var inst_25557 = (state_25593[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25593,(10),Object,null,(9));
var inst_25566 = chs__$1.call(null,inst_25557);
var inst_25567 = done.call(null,inst_25557);
var inst_25568 = cljs.core.async.take_BANG_.call(null,inst_25566,inst_25567);
var state_25593__$1 = state_25593;
var statearr_25607_25638 = state_25593__$1;
(statearr_25607_25638[(2)] = inst_25568);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25593__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (9))){
var inst_25557 = (state_25593[(7)]);
var inst_25570 = (state_25593[(2)]);
var inst_25571 = (inst_25557 + (1));
var inst_25557__$1 = inst_25571;
var state_25593__$1 = (function (){var statearr_25608 = state_25593;
(statearr_25608[(7)] = inst_25557__$1);

(statearr_25608[(10)] = inst_25570);

return statearr_25608;
})();
var statearr_25609_25639 = state_25593__$1;
(statearr_25609_25639[(2)] = null);

(statearr_25609_25639[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (5))){
var inst_25577 = (state_25593[(2)]);
var state_25593__$1 = (function (){var statearr_25610 = state_25593;
(statearr_25610[(11)] = inst_25577);

return statearr_25610;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25593__$1,(12),dchan);
} else {
if((state_val_25594 === (14))){
var inst_25579 = (state_25593[(8)]);
var inst_25584 = cljs.core.apply.call(null,f,inst_25579);
var state_25593__$1 = state_25593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25593__$1,(16),out,inst_25584);
} else {
if((state_val_25594 === (16))){
var inst_25586 = (state_25593[(2)]);
var state_25593__$1 = (function (){var statearr_25611 = state_25593;
(statearr_25611[(12)] = inst_25586);

return statearr_25611;
})();
var statearr_25612_25640 = state_25593__$1;
(statearr_25612_25640[(2)] = null);

(statearr_25612_25640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (10))){
var inst_25561 = (state_25593[(2)]);
var inst_25562 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25593__$1 = (function (){var statearr_25613 = state_25593;
(statearr_25613[(13)] = inst_25561);

return statearr_25613;
})();
var statearr_25614_25641 = state_25593__$1;
(statearr_25614_25641[(2)] = inst_25562);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25593__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (8))){
var inst_25575 = (state_25593[(2)]);
var state_25593__$1 = state_25593;
var statearr_25615_25642 = state_25593__$1;
(statearr_25615_25642[(2)] = inst_25575);

(statearr_25615_25642[(1)] = (5));


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
});})(c__23608__auto___25627,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23496__auto__,c__23608__auto___25627,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23497__auto__ = null;
var cljs$core$async$state_machine__23497__auto____0 = (function (){
var statearr_25619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25619[(0)] = cljs$core$async$state_machine__23497__auto__);

(statearr_25619[(1)] = (1));

return statearr_25619;
});
var cljs$core$async$state_machine__23497__auto____1 = (function (state_25593){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_25593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e25620){if((e25620 instanceof Object)){
var ex__23500__auto__ = e25620;
var statearr_25621_25643 = state_25593;
(statearr_25621_25643[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25644 = state_25593;
state_25593 = G__25644;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
cljs$core$async$state_machine__23497__auto__ = function(state_25593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23497__auto____1.call(this,state_25593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23497__auto____0;
cljs$core$async$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23497__auto____1;
return cljs$core$async$state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto___25627,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23610__auto__ = (function (){var statearr_25622 = f__23609__auto__.call(null);
(statearr_25622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto___25627);

return statearr_25622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto___25627,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args25646 = [];
var len__19538__auto___25702 = arguments.length;
var i__19539__auto___25703 = (0);
while(true){
if((i__19539__auto___25703 < len__19538__auto___25702)){
args25646.push((arguments[i__19539__auto___25703]));

var G__25704 = (i__19539__auto___25703 + (1));
i__19539__auto___25703 = G__25704;
continue;
} else {
}
break;
}

var G__25648 = args25646.length;
switch (G__25648) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25646.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23608__auto___25706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto___25706,out){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto___25706,out){
return (function (state_25678){
var state_val_25679 = (state_25678[(1)]);
if((state_val_25679 === (7))){
var inst_25658 = (state_25678[(7)]);
var inst_25657 = (state_25678[(8)]);
var inst_25657__$1 = (state_25678[(2)]);
var inst_25658__$1 = cljs.core.nth.call(null,inst_25657__$1,(0),null);
var inst_25659 = cljs.core.nth.call(null,inst_25657__$1,(1),null);
var inst_25660 = (inst_25658__$1 == null);
var state_25678__$1 = (function (){var statearr_25680 = state_25678;
(statearr_25680[(7)] = inst_25658__$1);

(statearr_25680[(8)] = inst_25657__$1);

(statearr_25680[(9)] = inst_25659);

return statearr_25680;
})();
if(cljs.core.truth_(inst_25660)){
var statearr_25681_25707 = state_25678__$1;
(statearr_25681_25707[(1)] = (8));

} else {
var statearr_25682_25708 = state_25678__$1;
(statearr_25682_25708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25679 === (1))){
var inst_25649 = cljs.core.vec.call(null,chs);
var inst_25650 = inst_25649;
var state_25678__$1 = (function (){var statearr_25683 = state_25678;
(statearr_25683[(10)] = inst_25650);

return statearr_25683;
})();
var statearr_25684_25709 = state_25678__$1;
(statearr_25684_25709[(2)] = null);

(statearr_25684_25709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25679 === (4))){
var inst_25650 = (state_25678[(10)]);
var state_25678__$1 = state_25678;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25678__$1,(7),inst_25650);
} else {
if((state_val_25679 === (6))){
var inst_25674 = (state_25678[(2)]);
var state_25678__$1 = state_25678;
var statearr_25685_25710 = state_25678__$1;
(statearr_25685_25710[(2)] = inst_25674);

(statearr_25685_25710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25679 === (3))){
var inst_25676 = (state_25678[(2)]);
var state_25678__$1 = state_25678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25678__$1,inst_25676);
} else {
if((state_val_25679 === (2))){
var inst_25650 = (state_25678[(10)]);
var inst_25652 = cljs.core.count.call(null,inst_25650);
var inst_25653 = (inst_25652 > (0));
var state_25678__$1 = state_25678;
if(cljs.core.truth_(inst_25653)){
var statearr_25687_25711 = state_25678__$1;
(statearr_25687_25711[(1)] = (4));

} else {
var statearr_25688_25712 = state_25678__$1;
(statearr_25688_25712[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25679 === (11))){
var inst_25650 = (state_25678[(10)]);
var inst_25667 = (state_25678[(2)]);
var tmp25686 = inst_25650;
var inst_25650__$1 = tmp25686;
var state_25678__$1 = (function (){var statearr_25689 = state_25678;
(statearr_25689[(10)] = inst_25650__$1);

(statearr_25689[(11)] = inst_25667);

return statearr_25689;
})();
var statearr_25690_25713 = state_25678__$1;
(statearr_25690_25713[(2)] = null);

(statearr_25690_25713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25679 === (9))){
var inst_25658 = (state_25678[(7)]);
var state_25678__$1 = state_25678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25678__$1,(11),out,inst_25658);
} else {
if((state_val_25679 === (5))){
var inst_25672 = cljs.core.async.close_BANG_.call(null,out);
var state_25678__$1 = state_25678;
var statearr_25691_25714 = state_25678__$1;
(statearr_25691_25714[(2)] = inst_25672);

(statearr_25691_25714[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25679 === (10))){
var inst_25670 = (state_25678[(2)]);
var state_25678__$1 = state_25678;
var statearr_25692_25715 = state_25678__$1;
(statearr_25692_25715[(2)] = inst_25670);

(statearr_25692_25715[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25679 === (8))){
var inst_25650 = (state_25678[(10)]);
var inst_25658 = (state_25678[(7)]);
var inst_25657 = (state_25678[(8)]);
var inst_25659 = (state_25678[(9)]);
var inst_25662 = (function (){var cs = inst_25650;
var vec__25655 = inst_25657;
var v = inst_25658;
var c = inst_25659;
return ((function (cs,vec__25655,v,c,inst_25650,inst_25658,inst_25657,inst_25659,state_val_25679,c__23608__auto___25706,out){
return (function (p1__25645_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25645_SHARP_);
});
;})(cs,vec__25655,v,c,inst_25650,inst_25658,inst_25657,inst_25659,state_val_25679,c__23608__auto___25706,out))
})();
var inst_25663 = cljs.core.filterv.call(null,inst_25662,inst_25650);
var inst_25650__$1 = inst_25663;
var state_25678__$1 = (function (){var statearr_25693 = state_25678;
(statearr_25693[(10)] = inst_25650__$1);

return statearr_25693;
})();
var statearr_25694_25716 = state_25678__$1;
(statearr_25694_25716[(2)] = null);

(statearr_25694_25716[(1)] = (2));


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
});})(c__23608__auto___25706,out))
;
return ((function (switch__23496__auto__,c__23608__auto___25706,out){
return (function() {
var cljs$core$async$state_machine__23497__auto__ = null;
var cljs$core$async$state_machine__23497__auto____0 = (function (){
var statearr_25698 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25698[(0)] = cljs$core$async$state_machine__23497__auto__);

(statearr_25698[(1)] = (1));

return statearr_25698;
});
var cljs$core$async$state_machine__23497__auto____1 = (function (state_25678){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_25678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e25699){if((e25699 instanceof Object)){
var ex__23500__auto__ = e25699;
var statearr_25700_25717 = state_25678;
(statearr_25700_25717[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25718 = state_25678;
state_25678 = G__25718;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
cljs$core$async$state_machine__23497__auto__ = function(state_25678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23497__auto____1.call(this,state_25678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23497__auto____0;
cljs$core$async$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23497__auto____1;
return cljs$core$async$state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto___25706,out))
})();
var state__23610__auto__ = (function (){var statearr_25701 = f__23609__auto__.call(null);
(statearr_25701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto___25706);

return statearr_25701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto___25706,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args25719 = [];
var len__19538__auto___25768 = arguments.length;
var i__19539__auto___25769 = (0);
while(true){
if((i__19539__auto___25769 < len__19538__auto___25768)){
args25719.push((arguments[i__19539__auto___25769]));

var G__25770 = (i__19539__auto___25769 + (1));
i__19539__auto___25769 = G__25770;
continue;
} else {
}
break;
}

var G__25721 = args25719.length;
switch (G__25721) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25719.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23608__auto___25772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto___25772,out){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto___25772,out){
return (function (state_25745){
var state_val_25746 = (state_25745[(1)]);
if((state_val_25746 === (7))){
var inst_25727 = (state_25745[(7)]);
var inst_25727__$1 = (state_25745[(2)]);
var inst_25728 = (inst_25727__$1 == null);
var inst_25729 = cljs.core.not.call(null,inst_25728);
var state_25745__$1 = (function (){var statearr_25747 = state_25745;
(statearr_25747[(7)] = inst_25727__$1);

return statearr_25747;
})();
if(inst_25729){
var statearr_25748_25773 = state_25745__$1;
(statearr_25748_25773[(1)] = (8));

} else {
var statearr_25749_25774 = state_25745__$1;
(statearr_25749_25774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (1))){
var inst_25722 = (0);
var state_25745__$1 = (function (){var statearr_25750 = state_25745;
(statearr_25750[(8)] = inst_25722);

return statearr_25750;
})();
var statearr_25751_25775 = state_25745__$1;
(statearr_25751_25775[(2)] = null);

(statearr_25751_25775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (4))){
var state_25745__$1 = state_25745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25745__$1,(7),ch);
} else {
if((state_val_25746 === (6))){
var inst_25740 = (state_25745[(2)]);
var state_25745__$1 = state_25745;
var statearr_25752_25776 = state_25745__$1;
(statearr_25752_25776[(2)] = inst_25740);

(statearr_25752_25776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (3))){
var inst_25742 = (state_25745[(2)]);
var inst_25743 = cljs.core.async.close_BANG_.call(null,out);
var state_25745__$1 = (function (){var statearr_25753 = state_25745;
(statearr_25753[(9)] = inst_25742);

return statearr_25753;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25745__$1,inst_25743);
} else {
if((state_val_25746 === (2))){
var inst_25722 = (state_25745[(8)]);
var inst_25724 = (inst_25722 < n);
var state_25745__$1 = state_25745;
if(cljs.core.truth_(inst_25724)){
var statearr_25754_25777 = state_25745__$1;
(statearr_25754_25777[(1)] = (4));

} else {
var statearr_25755_25778 = state_25745__$1;
(statearr_25755_25778[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (11))){
var inst_25722 = (state_25745[(8)]);
var inst_25732 = (state_25745[(2)]);
var inst_25733 = (inst_25722 + (1));
var inst_25722__$1 = inst_25733;
var state_25745__$1 = (function (){var statearr_25756 = state_25745;
(statearr_25756[(10)] = inst_25732);

(statearr_25756[(8)] = inst_25722__$1);

return statearr_25756;
})();
var statearr_25757_25779 = state_25745__$1;
(statearr_25757_25779[(2)] = null);

(statearr_25757_25779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (9))){
var state_25745__$1 = state_25745;
var statearr_25758_25780 = state_25745__$1;
(statearr_25758_25780[(2)] = null);

(statearr_25758_25780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (5))){
var state_25745__$1 = state_25745;
var statearr_25759_25781 = state_25745__$1;
(statearr_25759_25781[(2)] = null);

(statearr_25759_25781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (10))){
var inst_25737 = (state_25745[(2)]);
var state_25745__$1 = state_25745;
var statearr_25760_25782 = state_25745__$1;
(statearr_25760_25782[(2)] = inst_25737);

(statearr_25760_25782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (8))){
var inst_25727 = (state_25745[(7)]);
var state_25745__$1 = state_25745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25745__$1,(11),out,inst_25727);
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
});})(c__23608__auto___25772,out))
;
return ((function (switch__23496__auto__,c__23608__auto___25772,out){
return (function() {
var cljs$core$async$state_machine__23497__auto__ = null;
var cljs$core$async$state_machine__23497__auto____0 = (function (){
var statearr_25764 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25764[(0)] = cljs$core$async$state_machine__23497__auto__);

(statearr_25764[(1)] = (1));

return statearr_25764;
});
var cljs$core$async$state_machine__23497__auto____1 = (function (state_25745){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_25745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e25765){if((e25765 instanceof Object)){
var ex__23500__auto__ = e25765;
var statearr_25766_25783 = state_25745;
(statearr_25766_25783[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25784 = state_25745;
state_25745 = G__25784;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
cljs$core$async$state_machine__23497__auto__ = function(state_25745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23497__auto____1.call(this,state_25745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23497__auto____0;
cljs$core$async$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23497__auto____1;
return cljs$core$async$state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto___25772,out))
})();
var state__23610__auto__ = (function (){var statearr_25767 = f__23609__auto__.call(null);
(statearr_25767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto___25772);

return statearr_25767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto___25772,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25792 = (function (map_LT_,f,ch,meta25793){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25793 = meta25793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25794,meta25793__$1){
var self__ = this;
var _25794__$1 = this;
return (new cljs.core.async.t_cljs$core$async25792(self__.map_LT_,self__.f,self__.ch,meta25793__$1));
});

cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25794){
var self__ = this;
var _25794__$1 = this;
return self__.meta25793;
});

cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25795 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25795 = (function (map_LT_,f,ch,meta25793,_,fn1,meta25796){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25793 = meta25793;
this._ = _;
this.fn1 = fn1;
this.meta25796 = meta25796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25797,meta25796__$1){
var self__ = this;
var _25797__$1 = this;
return (new cljs.core.async.t_cljs$core$async25795(self__.map_LT_,self__.f,self__.ch,self__.meta25793,self__._,self__.fn1,meta25796__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25795.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25797){
var self__ = this;
var _25797__$1 = this;
return self__.meta25796;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25795.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25795.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25795.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25795.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25785_SHARP_){
return f1.call(null,(((p1__25785_SHARP_ == null))?null:self__.f.call(null,p1__25785_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25795.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25793","meta25793",-879877987,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25792","cljs.core.async/t_cljs$core$async25792",-540805959,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25796","meta25796",-614663461,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25795.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25795.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25795";

cljs.core.async.t_cljs$core$async25795.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async25795");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25795 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25795(map_LT___$1,f__$1,ch__$1,meta25793__$1,___$2,fn1__$1,meta25796){
return (new cljs.core.async.t_cljs$core$async25795(map_LT___$1,f__$1,ch__$1,meta25793__$1,___$2,fn1__$1,meta25796));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25795(self__.map_LT_,self__.f,self__.ch,self__.meta25793,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18456__auto__ = ret;
if(cljs.core.truth_(and__18456__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18456__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25793","meta25793",-879877987,null)], null);
});

cljs.core.async.t_cljs$core$async25792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25792";

cljs.core.async.t_cljs$core$async25792.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async25792");
});

cljs.core.async.__GT_t_cljs$core$async25792 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25792(map_LT___$1,f__$1,ch__$1,meta25793){
return (new cljs.core.async.t_cljs$core$async25792(map_LT___$1,f__$1,ch__$1,meta25793));
});

}

return (new cljs.core.async.t_cljs$core$async25792(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25801 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25801 = (function (map_GT_,f,ch,meta25802){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25802 = meta25802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25803,meta25802__$1){
var self__ = this;
var _25803__$1 = this;
return (new cljs.core.async.t_cljs$core$async25801(self__.map_GT_,self__.f,self__.ch,meta25802__$1));
});

cljs.core.async.t_cljs$core$async25801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25803){
var self__ = this;
var _25803__$1 = this;
return self__.meta25802;
});

cljs.core.async.t_cljs$core$async25801.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25801.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25801.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25801.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25801.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25801.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25802","meta25802",-67955774,null)], null);
});

cljs.core.async.t_cljs$core$async25801.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25801";

cljs.core.async.t_cljs$core$async25801.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async25801");
});

cljs.core.async.__GT_t_cljs$core$async25801 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25801(map_GT___$1,f__$1,ch__$1,meta25802){
return (new cljs.core.async.t_cljs$core$async25801(map_GT___$1,f__$1,ch__$1,meta25802));
});

}

return (new cljs.core.async.t_cljs$core$async25801(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25807 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25807 = (function (filter_GT_,p,ch,meta25808){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25808 = meta25808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25809,meta25808__$1){
var self__ = this;
var _25809__$1 = this;
return (new cljs.core.async.t_cljs$core$async25807(self__.filter_GT_,self__.p,self__.ch,meta25808__$1));
});

cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25809){
var self__ = this;
var _25809__$1 = this;
return self__.meta25808;
});

cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25808","meta25808",-383097688,null)], null);
});

cljs.core.async.t_cljs$core$async25807.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25807";

cljs.core.async.t_cljs$core$async25807.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__,opt__19076__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"cljs.core.async/t_cljs$core$async25807");
});

cljs.core.async.__GT_t_cljs$core$async25807 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25807(filter_GT___$1,p__$1,ch__$1,meta25808){
return (new cljs.core.async.t_cljs$core$async25807(filter_GT___$1,p__$1,ch__$1,meta25808));
});

}

return (new cljs.core.async.t_cljs$core$async25807(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args25810 = [];
var len__19538__auto___25854 = arguments.length;
var i__19539__auto___25855 = (0);
while(true){
if((i__19539__auto___25855 < len__19538__auto___25854)){
args25810.push((arguments[i__19539__auto___25855]));

var G__25856 = (i__19539__auto___25855 + (1));
i__19539__auto___25855 = G__25856;
continue;
} else {
}
break;
}

var G__25812 = args25810.length;
switch (G__25812) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25810.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23608__auto___25858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto___25858,out){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto___25858,out){
return (function (state_25833){
var state_val_25834 = (state_25833[(1)]);
if((state_val_25834 === (7))){
var inst_25829 = (state_25833[(2)]);
var state_25833__$1 = state_25833;
var statearr_25835_25859 = state_25833__$1;
(statearr_25835_25859[(2)] = inst_25829);

(statearr_25835_25859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (1))){
var state_25833__$1 = state_25833;
var statearr_25836_25860 = state_25833__$1;
(statearr_25836_25860[(2)] = null);

(statearr_25836_25860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (4))){
var inst_25815 = (state_25833[(7)]);
var inst_25815__$1 = (state_25833[(2)]);
var inst_25816 = (inst_25815__$1 == null);
var state_25833__$1 = (function (){var statearr_25837 = state_25833;
(statearr_25837[(7)] = inst_25815__$1);

return statearr_25837;
})();
if(cljs.core.truth_(inst_25816)){
var statearr_25838_25861 = state_25833__$1;
(statearr_25838_25861[(1)] = (5));

} else {
var statearr_25839_25862 = state_25833__$1;
(statearr_25839_25862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (6))){
var inst_25815 = (state_25833[(7)]);
var inst_25820 = p.call(null,inst_25815);
var state_25833__$1 = state_25833;
if(cljs.core.truth_(inst_25820)){
var statearr_25840_25863 = state_25833__$1;
(statearr_25840_25863[(1)] = (8));

} else {
var statearr_25841_25864 = state_25833__$1;
(statearr_25841_25864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (3))){
var inst_25831 = (state_25833[(2)]);
var state_25833__$1 = state_25833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25833__$1,inst_25831);
} else {
if((state_val_25834 === (2))){
var state_25833__$1 = state_25833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25833__$1,(4),ch);
} else {
if((state_val_25834 === (11))){
var inst_25823 = (state_25833[(2)]);
var state_25833__$1 = state_25833;
var statearr_25842_25865 = state_25833__$1;
(statearr_25842_25865[(2)] = inst_25823);

(statearr_25842_25865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (9))){
var state_25833__$1 = state_25833;
var statearr_25843_25866 = state_25833__$1;
(statearr_25843_25866[(2)] = null);

(statearr_25843_25866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (5))){
var inst_25818 = cljs.core.async.close_BANG_.call(null,out);
var state_25833__$1 = state_25833;
var statearr_25844_25867 = state_25833__$1;
(statearr_25844_25867[(2)] = inst_25818);

(statearr_25844_25867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (10))){
var inst_25826 = (state_25833[(2)]);
var state_25833__$1 = (function (){var statearr_25845 = state_25833;
(statearr_25845[(8)] = inst_25826);

return statearr_25845;
})();
var statearr_25846_25868 = state_25833__$1;
(statearr_25846_25868[(2)] = null);

(statearr_25846_25868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (8))){
var inst_25815 = (state_25833[(7)]);
var state_25833__$1 = state_25833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25833__$1,(11),out,inst_25815);
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
});})(c__23608__auto___25858,out))
;
return ((function (switch__23496__auto__,c__23608__auto___25858,out){
return (function() {
var cljs$core$async$state_machine__23497__auto__ = null;
var cljs$core$async$state_machine__23497__auto____0 = (function (){
var statearr_25850 = [null,null,null,null,null,null,null,null,null];
(statearr_25850[(0)] = cljs$core$async$state_machine__23497__auto__);

(statearr_25850[(1)] = (1));

return statearr_25850;
});
var cljs$core$async$state_machine__23497__auto____1 = (function (state_25833){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_25833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e25851){if((e25851 instanceof Object)){
var ex__23500__auto__ = e25851;
var statearr_25852_25869 = state_25833;
(statearr_25852_25869[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25870 = state_25833;
state_25833 = G__25870;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
cljs$core$async$state_machine__23497__auto__ = function(state_25833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23497__auto____1.call(this,state_25833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23497__auto____0;
cljs$core$async$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23497__auto____1;
return cljs$core$async$state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto___25858,out))
})();
var state__23610__auto__ = (function (){var statearr_25853 = f__23609__auto__.call(null);
(statearr_25853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto___25858);

return statearr_25853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto___25858,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25871 = [];
var len__19538__auto___25874 = arguments.length;
var i__19539__auto___25875 = (0);
while(true){
if((i__19539__auto___25875 < len__19538__auto___25874)){
args25871.push((arguments[i__19539__auto___25875]));

var G__25876 = (i__19539__auto___25875 + (1));
i__19539__auto___25875 = G__25876;
continue;
} else {
}
break;
}

var G__25873 = args25871.length;
switch (G__25873) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25871.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto__){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto__){
return (function (state_26043){
var state_val_26044 = (state_26043[(1)]);
if((state_val_26044 === (7))){
var inst_26039 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
var statearr_26045_26086 = state_26043__$1;
(statearr_26045_26086[(2)] = inst_26039);

(statearr_26045_26086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (20))){
var inst_26009 = (state_26043[(7)]);
var inst_26020 = (state_26043[(2)]);
var inst_26021 = cljs.core.next.call(null,inst_26009);
var inst_25995 = inst_26021;
var inst_25996 = null;
var inst_25997 = (0);
var inst_25998 = (0);
var state_26043__$1 = (function (){var statearr_26046 = state_26043;
(statearr_26046[(8)] = inst_25997);

(statearr_26046[(9)] = inst_25995);

(statearr_26046[(10)] = inst_26020);

(statearr_26046[(11)] = inst_25996);

(statearr_26046[(12)] = inst_25998);

return statearr_26046;
})();
var statearr_26047_26087 = state_26043__$1;
(statearr_26047_26087[(2)] = null);

(statearr_26047_26087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (1))){
var state_26043__$1 = state_26043;
var statearr_26048_26088 = state_26043__$1;
(statearr_26048_26088[(2)] = null);

(statearr_26048_26088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (4))){
var inst_25984 = (state_26043[(13)]);
var inst_25984__$1 = (state_26043[(2)]);
var inst_25985 = (inst_25984__$1 == null);
var state_26043__$1 = (function (){var statearr_26049 = state_26043;
(statearr_26049[(13)] = inst_25984__$1);

return statearr_26049;
})();
if(cljs.core.truth_(inst_25985)){
var statearr_26050_26089 = state_26043__$1;
(statearr_26050_26089[(1)] = (5));

} else {
var statearr_26051_26090 = state_26043__$1;
(statearr_26051_26090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (15))){
var state_26043__$1 = state_26043;
var statearr_26055_26091 = state_26043__$1;
(statearr_26055_26091[(2)] = null);

(statearr_26055_26091[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (21))){
var state_26043__$1 = state_26043;
var statearr_26056_26092 = state_26043__$1;
(statearr_26056_26092[(2)] = null);

(statearr_26056_26092[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (13))){
var inst_25997 = (state_26043[(8)]);
var inst_25995 = (state_26043[(9)]);
var inst_25996 = (state_26043[(11)]);
var inst_25998 = (state_26043[(12)]);
var inst_26005 = (state_26043[(2)]);
var inst_26006 = (inst_25998 + (1));
var tmp26052 = inst_25997;
var tmp26053 = inst_25995;
var tmp26054 = inst_25996;
var inst_25995__$1 = tmp26053;
var inst_25996__$1 = tmp26054;
var inst_25997__$1 = tmp26052;
var inst_25998__$1 = inst_26006;
var state_26043__$1 = (function (){var statearr_26057 = state_26043;
(statearr_26057[(14)] = inst_26005);

(statearr_26057[(8)] = inst_25997__$1);

(statearr_26057[(9)] = inst_25995__$1);

(statearr_26057[(11)] = inst_25996__$1);

(statearr_26057[(12)] = inst_25998__$1);

return statearr_26057;
})();
var statearr_26058_26093 = state_26043__$1;
(statearr_26058_26093[(2)] = null);

(statearr_26058_26093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (22))){
var state_26043__$1 = state_26043;
var statearr_26059_26094 = state_26043__$1;
(statearr_26059_26094[(2)] = null);

(statearr_26059_26094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (6))){
var inst_25984 = (state_26043[(13)]);
var inst_25993 = f.call(null,inst_25984);
var inst_25994 = cljs.core.seq.call(null,inst_25993);
var inst_25995 = inst_25994;
var inst_25996 = null;
var inst_25997 = (0);
var inst_25998 = (0);
var state_26043__$1 = (function (){var statearr_26060 = state_26043;
(statearr_26060[(8)] = inst_25997);

(statearr_26060[(9)] = inst_25995);

(statearr_26060[(11)] = inst_25996);

(statearr_26060[(12)] = inst_25998);

return statearr_26060;
})();
var statearr_26061_26095 = state_26043__$1;
(statearr_26061_26095[(2)] = null);

(statearr_26061_26095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (17))){
var inst_26009 = (state_26043[(7)]);
var inst_26013 = cljs.core.chunk_first.call(null,inst_26009);
var inst_26014 = cljs.core.chunk_rest.call(null,inst_26009);
var inst_26015 = cljs.core.count.call(null,inst_26013);
var inst_25995 = inst_26014;
var inst_25996 = inst_26013;
var inst_25997 = inst_26015;
var inst_25998 = (0);
var state_26043__$1 = (function (){var statearr_26062 = state_26043;
(statearr_26062[(8)] = inst_25997);

(statearr_26062[(9)] = inst_25995);

(statearr_26062[(11)] = inst_25996);

(statearr_26062[(12)] = inst_25998);

return statearr_26062;
})();
var statearr_26063_26096 = state_26043__$1;
(statearr_26063_26096[(2)] = null);

(statearr_26063_26096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (3))){
var inst_26041 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26043__$1,inst_26041);
} else {
if((state_val_26044 === (12))){
var inst_26029 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
var statearr_26064_26097 = state_26043__$1;
(statearr_26064_26097[(2)] = inst_26029);

(statearr_26064_26097[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (2))){
var state_26043__$1 = state_26043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26043__$1,(4),in$);
} else {
if((state_val_26044 === (23))){
var inst_26037 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
var statearr_26065_26098 = state_26043__$1;
(statearr_26065_26098[(2)] = inst_26037);

(statearr_26065_26098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (19))){
var inst_26024 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
var statearr_26066_26099 = state_26043__$1;
(statearr_26066_26099[(2)] = inst_26024);

(statearr_26066_26099[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (11))){
var inst_25995 = (state_26043[(9)]);
var inst_26009 = (state_26043[(7)]);
var inst_26009__$1 = cljs.core.seq.call(null,inst_25995);
var state_26043__$1 = (function (){var statearr_26067 = state_26043;
(statearr_26067[(7)] = inst_26009__$1);

return statearr_26067;
})();
if(inst_26009__$1){
var statearr_26068_26100 = state_26043__$1;
(statearr_26068_26100[(1)] = (14));

} else {
var statearr_26069_26101 = state_26043__$1;
(statearr_26069_26101[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (9))){
var inst_26031 = (state_26043[(2)]);
var inst_26032 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26043__$1 = (function (){var statearr_26070 = state_26043;
(statearr_26070[(15)] = inst_26031);

return statearr_26070;
})();
if(cljs.core.truth_(inst_26032)){
var statearr_26071_26102 = state_26043__$1;
(statearr_26071_26102[(1)] = (21));

} else {
var statearr_26072_26103 = state_26043__$1;
(statearr_26072_26103[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (5))){
var inst_25987 = cljs.core.async.close_BANG_.call(null,out);
var state_26043__$1 = state_26043;
var statearr_26073_26104 = state_26043__$1;
(statearr_26073_26104[(2)] = inst_25987);

(statearr_26073_26104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (14))){
var inst_26009 = (state_26043[(7)]);
var inst_26011 = cljs.core.chunked_seq_QMARK_.call(null,inst_26009);
var state_26043__$1 = state_26043;
if(inst_26011){
var statearr_26074_26105 = state_26043__$1;
(statearr_26074_26105[(1)] = (17));

} else {
var statearr_26075_26106 = state_26043__$1;
(statearr_26075_26106[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (16))){
var inst_26027 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
var statearr_26076_26107 = state_26043__$1;
(statearr_26076_26107[(2)] = inst_26027);

(statearr_26076_26107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (10))){
var inst_25996 = (state_26043[(11)]);
var inst_25998 = (state_26043[(12)]);
var inst_26003 = cljs.core._nth.call(null,inst_25996,inst_25998);
var state_26043__$1 = state_26043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26043__$1,(13),out,inst_26003);
} else {
if((state_val_26044 === (18))){
var inst_26009 = (state_26043[(7)]);
var inst_26018 = cljs.core.first.call(null,inst_26009);
var state_26043__$1 = state_26043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26043__$1,(20),out,inst_26018);
} else {
if((state_val_26044 === (8))){
var inst_25997 = (state_26043[(8)]);
var inst_25998 = (state_26043[(12)]);
var inst_26000 = (inst_25998 < inst_25997);
var inst_26001 = inst_26000;
var state_26043__$1 = state_26043;
if(cljs.core.truth_(inst_26001)){
var statearr_26077_26108 = state_26043__$1;
(statearr_26077_26108[(1)] = (10));

} else {
var statearr_26078_26109 = state_26043__$1;
(statearr_26078_26109[(1)] = (11));

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
});})(c__23608__auto__))
;
return ((function (switch__23496__auto__,c__23608__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23497__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23497__auto____0 = (function (){
var statearr_26082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26082[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23497__auto__);

(statearr_26082[(1)] = (1));

return statearr_26082;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23497__auto____1 = (function (state_26043){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_26043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e26083){if((e26083 instanceof Object)){
var ex__23500__auto__ = e26083;
var statearr_26084_26110 = state_26043;
(statearr_26084_26110[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26111 = state_26043;
state_26043 = G__26111;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23497__auto__ = function(state_26043){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23497__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23497__auto____1.call(this,state_26043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23497__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23497__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto__))
})();
var state__23610__auto__ = (function (){var statearr_26085 = f__23609__auto__.call(null);
(statearr_26085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto__);

return statearr_26085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto__))
);

return c__23608__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26112 = [];
var len__19538__auto___26115 = arguments.length;
var i__19539__auto___26116 = (0);
while(true){
if((i__19539__auto___26116 < len__19538__auto___26115)){
args26112.push((arguments[i__19539__auto___26116]));

var G__26117 = (i__19539__auto___26116 + (1));
i__19539__auto___26116 = G__26117;
continue;
} else {
}
break;
}

var G__26114 = args26112.length;
switch (G__26114) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26112.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26119 = [];
var len__19538__auto___26122 = arguments.length;
var i__19539__auto___26123 = (0);
while(true){
if((i__19539__auto___26123 < len__19538__auto___26122)){
args26119.push((arguments[i__19539__auto___26123]));

var G__26124 = (i__19539__auto___26123 + (1));
i__19539__auto___26123 = G__26124;
continue;
} else {
}
break;
}

var G__26121 = args26119.length;
switch (G__26121) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26119.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26126 = [];
var len__19538__auto___26177 = arguments.length;
var i__19539__auto___26178 = (0);
while(true){
if((i__19539__auto___26178 < len__19538__auto___26177)){
args26126.push((arguments[i__19539__auto___26178]));

var G__26179 = (i__19539__auto___26178 + (1));
i__19539__auto___26178 = G__26179;
continue;
} else {
}
break;
}

var G__26128 = args26126.length;
switch (G__26128) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26126.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23608__auto___26181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto___26181,out){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto___26181,out){
return (function (state_26152){
var state_val_26153 = (state_26152[(1)]);
if((state_val_26153 === (7))){
var inst_26147 = (state_26152[(2)]);
var state_26152__$1 = state_26152;
var statearr_26154_26182 = state_26152__$1;
(statearr_26154_26182[(2)] = inst_26147);

(statearr_26154_26182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26153 === (1))){
var inst_26129 = null;
var state_26152__$1 = (function (){var statearr_26155 = state_26152;
(statearr_26155[(7)] = inst_26129);

return statearr_26155;
})();
var statearr_26156_26183 = state_26152__$1;
(statearr_26156_26183[(2)] = null);

(statearr_26156_26183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26153 === (4))){
var inst_26132 = (state_26152[(8)]);
var inst_26132__$1 = (state_26152[(2)]);
var inst_26133 = (inst_26132__$1 == null);
var inst_26134 = cljs.core.not.call(null,inst_26133);
var state_26152__$1 = (function (){var statearr_26157 = state_26152;
(statearr_26157[(8)] = inst_26132__$1);

return statearr_26157;
})();
if(inst_26134){
var statearr_26158_26184 = state_26152__$1;
(statearr_26158_26184[(1)] = (5));

} else {
var statearr_26159_26185 = state_26152__$1;
(statearr_26159_26185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26153 === (6))){
var state_26152__$1 = state_26152;
var statearr_26160_26186 = state_26152__$1;
(statearr_26160_26186[(2)] = null);

(statearr_26160_26186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26153 === (3))){
var inst_26149 = (state_26152[(2)]);
var inst_26150 = cljs.core.async.close_BANG_.call(null,out);
var state_26152__$1 = (function (){var statearr_26161 = state_26152;
(statearr_26161[(9)] = inst_26149);

return statearr_26161;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26152__$1,inst_26150);
} else {
if((state_val_26153 === (2))){
var state_26152__$1 = state_26152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26152__$1,(4),ch);
} else {
if((state_val_26153 === (11))){
var inst_26132 = (state_26152[(8)]);
var inst_26141 = (state_26152[(2)]);
var inst_26129 = inst_26132;
var state_26152__$1 = (function (){var statearr_26162 = state_26152;
(statearr_26162[(7)] = inst_26129);

(statearr_26162[(10)] = inst_26141);

return statearr_26162;
})();
var statearr_26163_26187 = state_26152__$1;
(statearr_26163_26187[(2)] = null);

(statearr_26163_26187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26153 === (9))){
var inst_26132 = (state_26152[(8)]);
var state_26152__$1 = state_26152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26152__$1,(11),out,inst_26132);
} else {
if((state_val_26153 === (5))){
var inst_26129 = (state_26152[(7)]);
var inst_26132 = (state_26152[(8)]);
var inst_26136 = cljs.core._EQ_.call(null,inst_26132,inst_26129);
var state_26152__$1 = state_26152;
if(inst_26136){
var statearr_26165_26188 = state_26152__$1;
(statearr_26165_26188[(1)] = (8));

} else {
var statearr_26166_26189 = state_26152__$1;
(statearr_26166_26189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26153 === (10))){
var inst_26144 = (state_26152[(2)]);
var state_26152__$1 = state_26152;
var statearr_26167_26190 = state_26152__$1;
(statearr_26167_26190[(2)] = inst_26144);

(statearr_26167_26190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26153 === (8))){
var inst_26129 = (state_26152[(7)]);
var tmp26164 = inst_26129;
var inst_26129__$1 = tmp26164;
var state_26152__$1 = (function (){var statearr_26168 = state_26152;
(statearr_26168[(7)] = inst_26129__$1);

return statearr_26168;
})();
var statearr_26169_26191 = state_26152__$1;
(statearr_26169_26191[(2)] = null);

(statearr_26169_26191[(1)] = (2));


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
});})(c__23608__auto___26181,out))
;
return ((function (switch__23496__auto__,c__23608__auto___26181,out){
return (function() {
var cljs$core$async$state_machine__23497__auto__ = null;
var cljs$core$async$state_machine__23497__auto____0 = (function (){
var statearr_26173 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26173[(0)] = cljs$core$async$state_machine__23497__auto__);

(statearr_26173[(1)] = (1));

return statearr_26173;
});
var cljs$core$async$state_machine__23497__auto____1 = (function (state_26152){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_26152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e26174){if((e26174 instanceof Object)){
var ex__23500__auto__ = e26174;
var statearr_26175_26192 = state_26152;
(statearr_26175_26192[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26193 = state_26152;
state_26152 = G__26193;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
cljs$core$async$state_machine__23497__auto__ = function(state_26152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23497__auto____1.call(this,state_26152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23497__auto____0;
cljs$core$async$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23497__auto____1;
return cljs$core$async$state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto___26181,out))
})();
var state__23610__auto__ = (function (){var statearr_26176 = f__23609__auto__.call(null);
(statearr_26176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto___26181);

return statearr_26176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto___26181,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26194 = [];
var len__19538__auto___26264 = arguments.length;
var i__19539__auto___26265 = (0);
while(true){
if((i__19539__auto___26265 < len__19538__auto___26264)){
args26194.push((arguments[i__19539__auto___26265]));

var G__26266 = (i__19539__auto___26265 + (1));
i__19539__auto___26265 = G__26266;
continue;
} else {
}
break;
}

var G__26196 = args26194.length;
switch (G__26196) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26194.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23608__auto___26268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto___26268,out){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto___26268,out){
return (function (state_26234){
var state_val_26235 = (state_26234[(1)]);
if((state_val_26235 === (7))){
var inst_26230 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26236_26269 = state_26234__$1;
(statearr_26236_26269[(2)] = inst_26230);

(statearr_26236_26269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (1))){
var inst_26197 = (new Array(n));
var inst_26198 = inst_26197;
var inst_26199 = (0);
var state_26234__$1 = (function (){var statearr_26237 = state_26234;
(statearr_26237[(7)] = inst_26198);

(statearr_26237[(8)] = inst_26199);

return statearr_26237;
})();
var statearr_26238_26270 = state_26234__$1;
(statearr_26238_26270[(2)] = null);

(statearr_26238_26270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (4))){
var inst_26202 = (state_26234[(9)]);
var inst_26202__$1 = (state_26234[(2)]);
var inst_26203 = (inst_26202__$1 == null);
var inst_26204 = cljs.core.not.call(null,inst_26203);
var state_26234__$1 = (function (){var statearr_26239 = state_26234;
(statearr_26239[(9)] = inst_26202__$1);

return statearr_26239;
})();
if(inst_26204){
var statearr_26240_26271 = state_26234__$1;
(statearr_26240_26271[(1)] = (5));

} else {
var statearr_26241_26272 = state_26234__$1;
(statearr_26241_26272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (15))){
var inst_26224 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26242_26273 = state_26234__$1;
(statearr_26242_26273[(2)] = inst_26224);

(statearr_26242_26273[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (13))){
var state_26234__$1 = state_26234;
var statearr_26243_26274 = state_26234__$1;
(statearr_26243_26274[(2)] = null);

(statearr_26243_26274[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (6))){
var inst_26199 = (state_26234[(8)]);
var inst_26220 = (inst_26199 > (0));
var state_26234__$1 = state_26234;
if(cljs.core.truth_(inst_26220)){
var statearr_26244_26275 = state_26234__$1;
(statearr_26244_26275[(1)] = (12));

} else {
var statearr_26245_26276 = state_26234__$1;
(statearr_26245_26276[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (3))){
var inst_26232 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26234__$1,inst_26232);
} else {
if((state_val_26235 === (12))){
var inst_26198 = (state_26234[(7)]);
var inst_26222 = cljs.core.vec.call(null,inst_26198);
var state_26234__$1 = state_26234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26234__$1,(15),out,inst_26222);
} else {
if((state_val_26235 === (2))){
var state_26234__$1 = state_26234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26234__$1,(4),ch);
} else {
if((state_val_26235 === (11))){
var inst_26214 = (state_26234[(2)]);
var inst_26215 = (new Array(n));
var inst_26198 = inst_26215;
var inst_26199 = (0);
var state_26234__$1 = (function (){var statearr_26246 = state_26234;
(statearr_26246[(7)] = inst_26198);

(statearr_26246[(10)] = inst_26214);

(statearr_26246[(8)] = inst_26199);

return statearr_26246;
})();
var statearr_26247_26277 = state_26234__$1;
(statearr_26247_26277[(2)] = null);

(statearr_26247_26277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (9))){
var inst_26198 = (state_26234[(7)]);
var inst_26212 = cljs.core.vec.call(null,inst_26198);
var state_26234__$1 = state_26234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26234__$1,(11),out,inst_26212);
} else {
if((state_val_26235 === (5))){
var inst_26207 = (state_26234[(11)]);
var inst_26202 = (state_26234[(9)]);
var inst_26198 = (state_26234[(7)]);
var inst_26199 = (state_26234[(8)]);
var inst_26206 = (inst_26198[inst_26199] = inst_26202);
var inst_26207__$1 = (inst_26199 + (1));
var inst_26208 = (inst_26207__$1 < n);
var state_26234__$1 = (function (){var statearr_26248 = state_26234;
(statearr_26248[(11)] = inst_26207__$1);

(statearr_26248[(12)] = inst_26206);

return statearr_26248;
})();
if(cljs.core.truth_(inst_26208)){
var statearr_26249_26278 = state_26234__$1;
(statearr_26249_26278[(1)] = (8));

} else {
var statearr_26250_26279 = state_26234__$1;
(statearr_26250_26279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (14))){
var inst_26227 = (state_26234[(2)]);
var inst_26228 = cljs.core.async.close_BANG_.call(null,out);
var state_26234__$1 = (function (){var statearr_26252 = state_26234;
(statearr_26252[(13)] = inst_26227);

return statearr_26252;
})();
var statearr_26253_26280 = state_26234__$1;
(statearr_26253_26280[(2)] = inst_26228);

(statearr_26253_26280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (10))){
var inst_26218 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26254_26281 = state_26234__$1;
(statearr_26254_26281[(2)] = inst_26218);

(statearr_26254_26281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (8))){
var inst_26207 = (state_26234[(11)]);
var inst_26198 = (state_26234[(7)]);
var tmp26251 = inst_26198;
var inst_26198__$1 = tmp26251;
var inst_26199 = inst_26207;
var state_26234__$1 = (function (){var statearr_26255 = state_26234;
(statearr_26255[(7)] = inst_26198__$1);

(statearr_26255[(8)] = inst_26199);

return statearr_26255;
})();
var statearr_26256_26282 = state_26234__$1;
(statearr_26256_26282[(2)] = null);

(statearr_26256_26282[(1)] = (2));


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
});})(c__23608__auto___26268,out))
;
return ((function (switch__23496__auto__,c__23608__auto___26268,out){
return (function() {
var cljs$core$async$state_machine__23497__auto__ = null;
var cljs$core$async$state_machine__23497__auto____0 = (function (){
var statearr_26260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26260[(0)] = cljs$core$async$state_machine__23497__auto__);

(statearr_26260[(1)] = (1));

return statearr_26260;
});
var cljs$core$async$state_machine__23497__auto____1 = (function (state_26234){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_26234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e26261){if((e26261 instanceof Object)){
var ex__23500__auto__ = e26261;
var statearr_26262_26283 = state_26234;
(statearr_26262_26283[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26284 = state_26234;
state_26234 = G__26284;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
cljs$core$async$state_machine__23497__auto__ = function(state_26234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23497__auto____1.call(this,state_26234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23497__auto____0;
cljs$core$async$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23497__auto____1;
return cljs$core$async$state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto___26268,out))
})();
var state__23610__auto__ = (function (){var statearr_26263 = f__23609__auto__.call(null);
(statearr_26263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto___26268);

return statearr_26263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto___26268,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26285 = [];
var len__19538__auto___26359 = arguments.length;
var i__19539__auto___26360 = (0);
while(true){
if((i__19539__auto___26360 < len__19538__auto___26359)){
args26285.push((arguments[i__19539__auto___26360]));

var G__26361 = (i__19539__auto___26360 + (1));
i__19539__auto___26360 = G__26361;
continue;
} else {
}
break;
}

var G__26287 = args26285.length;
switch (G__26287) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26285.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23608__auto___26363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto___26363,out){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto___26363,out){
return (function (state_26329){
var state_val_26330 = (state_26329[(1)]);
if((state_val_26330 === (7))){
var inst_26325 = (state_26329[(2)]);
var state_26329__$1 = state_26329;
var statearr_26331_26364 = state_26329__$1;
(statearr_26331_26364[(2)] = inst_26325);

(statearr_26331_26364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26330 === (1))){
var inst_26288 = [];
var inst_26289 = inst_26288;
var inst_26290 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26329__$1 = (function (){var statearr_26332 = state_26329;
(statearr_26332[(7)] = inst_26290);

(statearr_26332[(8)] = inst_26289);

return statearr_26332;
})();
var statearr_26333_26365 = state_26329__$1;
(statearr_26333_26365[(2)] = null);

(statearr_26333_26365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26330 === (4))){
var inst_26293 = (state_26329[(9)]);
var inst_26293__$1 = (state_26329[(2)]);
var inst_26294 = (inst_26293__$1 == null);
var inst_26295 = cljs.core.not.call(null,inst_26294);
var state_26329__$1 = (function (){var statearr_26334 = state_26329;
(statearr_26334[(9)] = inst_26293__$1);

return statearr_26334;
})();
if(inst_26295){
var statearr_26335_26366 = state_26329__$1;
(statearr_26335_26366[(1)] = (5));

} else {
var statearr_26336_26367 = state_26329__$1;
(statearr_26336_26367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26330 === (15))){
var inst_26319 = (state_26329[(2)]);
var state_26329__$1 = state_26329;
var statearr_26337_26368 = state_26329__$1;
(statearr_26337_26368[(2)] = inst_26319);

(statearr_26337_26368[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26330 === (13))){
var state_26329__$1 = state_26329;
var statearr_26338_26369 = state_26329__$1;
(statearr_26338_26369[(2)] = null);

(statearr_26338_26369[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26330 === (6))){
var inst_26289 = (state_26329[(8)]);
var inst_26314 = inst_26289.length;
var inst_26315 = (inst_26314 > (0));
var state_26329__$1 = state_26329;
if(cljs.core.truth_(inst_26315)){
var statearr_26339_26370 = state_26329__$1;
(statearr_26339_26370[(1)] = (12));

} else {
var statearr_26340_26371 = state_26329__$1;
(statearr_26340_26371[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26330 === (3))){
var inst_26327 = (state_26329[(2)]);
var state_26329__$1 = state_26329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26329__$1,inst_26327);
} else {
if((state_val_26330 === (12))){
var inst_26289 = (state_26329[(8)]);
var inst_26317 = cljs.core.vec.call(null,inst_26289);
var state_26329__$1 = state_26329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26329__$1,(15),out,inst_26317);
} else {
if((state_val_26330 === (2))){
var state_26329__$1 = state_26329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26329__$1,(4),ch);
} else {
if((state_val_26330 === (11))){
var inst_26293 = (state_26329[(9)]);
var inst_26297 = (state_26329[(10)]);
var inst_26307 = (state_26329[(2)]);
var inst_26308 = [];
var inst_26309 = inst_26308.push(inst_26293);
var inst_26289 = inst_26308;
var inst_26290 = inst_26297;
var state_26329__$1 = (function (){var statearr_26341 = state_26329;
(statearr_26341[(11)] = inst_26307);

(statearr_26341[(12)] = inst_26309);

(statearr_26341[(7)] = inst_26290);

(statearr_26341[(8)] = inst_26289);

return statearr_26341;
})();
var statearr_26342_26372 = state_26329__$1;
(statearr_26342_26372[(2)] = null);

(statearr_26342_26372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26330 === (9))){
var inst_26289 = (state_26329[(8)]);
var inst_26305 = cljs.core.vec.call(null,inst_26289);
var state_26329__$1 = state_26329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26329__$1,(11),out,inst_26305);
} else {
if((state_val_26330 === (5))){
var inst_26293 = (state_26329[(9)]);
var inst_26290 = (state_26329[(7)]);
var inst_26297 = (state_26329[(10)]);
var inst_26297__$1 = f.call(null,inst_26293);
var inst_26298 = cljs.core._EQ_.call(null,inst_26297__$1,inst_26290);
var inst_26299 = cljs.core.keyword_identical_QMARK_.call(null,inst_26290,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26300 = (inst_26298) || (inst_26299);
var state_26329__$1 = (function (){var statearr_26343 = state_26329;
(statearr_26343[(10)] = inst_26297__$1);

return statearr_26343;
})();
if(cljs.core.truth_(inst_26300)){
var statearr_26344_26373 = state_26329__$1;
(statearr_26344_26373[(1)] = (8));

} else {
var statearr_26345_26374 = state_26329__$1;
(statearr_26345_26374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26330 === (14))){
var inst_26322 = (state_26329[(2)]);
var inst_26323 = cljs.core.async.close_BANG_.call(null,out);
var state_26329__$1 = (function (){var statearr_26347 = state_26329;
(statearr_26347[(13)] = inst_26322);

return statearr_26347;
})();
var statearr_26348_26375 = state_26329__$1;
(statearr_26348_26375[(2)] = inst_26323);

(statearr_26348_26375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26330 === (10))){
var inst_26312 = (state_26329[(2)]);
var state_26329__$1 = state_26329;
var statearr_26349_26376 = state_26329__$1;
(statearr_26349_26376[(2)] = inst_26312);

(statearr_26349_26376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26330 === (8))){
var inst_26293 = (state_26329[(9)]);
var inst_26289 = (state_26329[(8)]);
var inst_26297 = (state_26329[(10)]);
var inst_26302 = inst_26289.push(inst_26293);
var tmp26346 = inst_26289;
var inst_26289__$1 = tmp26346;
var inst_26290 = inst_26297;
var state_26329__$1 = (function (){var statearr_26350 = state_26329;
(statearr_26350[(7)] = inst_26290);

(statearr_26350[(8)] = inst_26289__$1);

(statearr_26350[(14)] = inst_26302);

return statearr_26350;
})();
var statearr_26351_26377 = state_26329__$1;
(statearr_26351_26377[(2)] = null);

(statearr_26351_26377[(1)] = (2));


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
});})(c__23608__auto___26363,out))
;
return ((function (switch__23496__auto__,c__23608__auto___26363,out){
return (function() {
var cljs$core$async$state_machine__23497__auto__ = null;
var cljs$core$async$state_machine__23497__auto____0 = (function (){
var statearr_26355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26355[(0)] = cljs$core$async$state_machine__23497__auto__);

(statearr_26355[(1)] = (1));

return statearr_26355;
});
var cljs$core$async$state_machine__23497__auto____1 = (function (state_26329){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_26329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e26356){if((e26356 instanceof Object)){
var ex__23500__auto__ = e26356;
var statearr_26357_26378 = state_26329;
(statearr_26357_26378[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26379 = state_26329;
state_26329 = G__26379;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
cljs$core$async$state_machine__23497__auto__ = function(state_26329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23497__auto____1.call(this,state_26329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23497__auto____0;
cljs$core$async$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23497__auto____1;
return cljs$core$async$state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto___26363,out))
})();
var state__23610__auto__ = (function (){var statearr_26358 = f__23609__auto__.call(null);
(statearr_26358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto___26363);

return statearr_26358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto___26363,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map