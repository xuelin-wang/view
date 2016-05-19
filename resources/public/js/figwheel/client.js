// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__28063 = cljs.core._EQ_;
var expr__28064 = (function (){var or__18468__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e28067){if((e28067 instanceof Error)){
var e = e28067;
return false;
} else {
throw e28067;

}
}})();
if(cljs.core.truth_(or__18468__auto__)){
return or__18468__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28063.call(null,"true",expr__28064))){
return true;
} else {
if(cljs.core.truth_(pred__28063.call(null,"false",expr__28064))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28064)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e28069){if((e28069 instanceof Error)){
var e = e28069;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e28069;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19545__auto__ = [];
var len__19538__auto___28071 = arguments.length;
var i__19539__auto___28072 = (0);
while(true){
if((i__19539__auto___28072 < len__19538__auto___28071)){
args__19545__auto__.push((arguments[i__19539__auto___28072]));

var G__28073 = (i__19539__auto___28072 + (1));
i__19539__auto___28072 = G__28073;
continue;
} else {
}
break;
}

var argseq__19546__auto__ = ((((0) < args__19545__auto__.length))?(new cljs.core.IndexedSeq(args__19545__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19546__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq28070){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28070));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28074){
var map__28077 = p__28074;
var map__28077__$1 = ((((!((map__28077 == null)))?((((map__28077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28077):map__28077);
var message = cljs.core.get.call(null,map__28077__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28077__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18468__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18468__auto__)){
return or__18468__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18456__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18456__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18456__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23608__auto___28239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto___28239,ch){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto___28239,ch){
return (function (state_28208){
var state_val_28209 = (state_28208[(1)]);
if((state_val_28209 === (7))){
var inst_28204 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28210_28240 = state_28208__$1;
(statearr_28210_28240[(2)] = inst_28204);

(statearr_28210_28240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (1))){
var state_28208__$1 = state_28208;
var statearr_28211_28241 = state_28208__$1;
(statearr_28211_28241[(2)] = null);

(statearr_28211_28241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (4))){
var inst_28161 = (state_28208[(7)]);
var inst_28161__$1 = (state_28208[(2)]);
var state_28208__$1 = (function (){var statearr_28212 = state_28208;
(statearr_28212[(7)] = inst_28161__$1);

return statearr_28212;
})();
if(cljs.core.truth_(inst_28161__$1)){
var statearr_28213_28242 = state_28208__$1;
(statearr_28213_28242[(1)] = (5));

} else {
var statearr_28214_28243 = state_28208__$1;
(statearr_28214_28243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (15))){
var inst_28168 = (state_28208[(8)]);
var inst_28183 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28168);
var inst_28184 = cljs.core.first.call(null,inst_28183);
var inst_28185 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28184);
var inst_28186 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28185)].join('');
var inst_28187 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28186);
var state_28208__$1 = state_28208;
var statearr_28215_28244 = state_28208__$1;
(statearr_28215_28244[(2)] = inst_28187);

(statearr_28215_28244[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (13))){
var inst_28192 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28216_28245 = state_28208__$1;
(statearr_28216_28245[(2)] = inst_28192);

(statearr_28216_28245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (6))){
var state_28208__$1 = state_28208;
var statearr_28217_28246 = state_28208__$1;
(statearr_28217_28246[(2)] = null);

(statearr_28217_28246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (17))){
var inst_28190 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28218_28247 = state_28208__$1;
(statearr_28218_28247[(2)] = inst_28190);

(statearr_28218_28247[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (3))){
var inst_28206 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28208__$1,inst_28206);
} else {
if((state_val_28209 === (12))){
var inst_28167 = (state_28208[(9)]);
var inst_28181 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28167,opts);
var state_28208__$1 = state_28208;
if(cljs.core.truth_(inst_28181)){
var statearr_28219_28248 = state_28208__$1;
(statearr_28219_28248[(1)] = (15));

} else {
var statearr_28220_28249 = state_28208__$1;
(statearr_28220_28249[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (2))){
var state_28208__$1 = state_28208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28208__$1,(4),ch);
} else {
if((state_val_28209 === (11))){
var inst_28168 = (state_28208[(8)]);
var inst_28173 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28174 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28168);
var inst_28175 = cljs.core.async.timeout.call(null,(1000));
var inst_28176 = [inst_28174,inst_28175];
var inst_28177 = (new cljs.core.PersistentVector(null,2,(5),inst_28173,inst_28176,null));
var state_28208__$1 = state_28208;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28208__$1,(14),inst_28177);
} else {
if((state_val_28209 === (9))){
var inst_28168 = (state_28208[(8)]);
var inst_28194 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28195 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28168);
var inst_28196 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28195);
var inst_28197 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28196)].join('');
var inst_28198 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28197);
var state_28208__$1 = (function (){var statearr_28221 = state_28208;
(statearr_28221[(10)] = inst_28194);

return statearr_28221;
})();
var statearr_28222_28250 = state_28208__$1;
(statearr_28222_28250[(2)] = inst_28198);

(statearr_28222_28250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (5))){
var inst_28161 = (state_28208[(7)]);
var inst_28163 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28164 = (new cljs.core.PersistentArrayMap(null,2,inst_28163,null));
var inst_28165 = (new cljs.core.PersistentHashSet(null,inst_28164,null));
var inst_28166 = figwheel.client.focus_msgs.call(null,inst_28165,inst_28161);
var inst_28167 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28166);
var inst_28168 = cljs.core.first.call(null,inst_28166);
var inst_28169 = figwheel.client.autoload_QMARK_.call(null);
var state_28208__$1 = (function (){var statearr_28223 = state_28208;
(statearr_28223[(9)] = inst_28167);

(statearr_28223[(8)] = inst_28168);

return statearr_28223;
})();
if(cljs.core.truth_(inst_28169)){
var statearr_28224_28251 = state_28208__$1;
(statearr_28224_28251[(1)] = (8));

} else {
var statearr_28225_28252 = state_28208__$1;
(statearr_28225_28252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (14))){
var inst_28179 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28226_28253 = state_28208__$1;
(statearr_28226_28253[(2)] = inst_28179);

(statearr_28226_28253[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (16))){
var state_28208__$1 = state_28208;
var statearr_28227_28254 = state_28208__$1;
(statearr_28227_28254[(2)] = null);

(statearr_28227_28254[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (10))){
var inst_28200 = (state_28208[(2)]);
var state_28208__$1 = (function (){var statearr_28228 = state_28208;
(statearr_28228[(11)] = inst_28200);

return statearr_28228;
})();
var statearr_28229_28255 = state_28208__$1;
(statearr_28229_28255[(2)] = null);

(statearr_28229_28255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (8))){
var inst_28167 = (state_28208[(9)]);
var inst_28171 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28167,opts);
var state_28208__$1 = state_28208;
if(cljs.core.truth_(inst_28171)){
var statearr_28230_28256 = state_28208__$1;
(statearr_28230_28256[(1)] = (11));

} else {
var statearr_28231_28257 = state_28208__$1;
(statearr_28231_28257[(1)] = (12));

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
});})(c__23608__auto___28239,ch))
;
return ((function (switch__23496__auto__,c__23608__auto___28239,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23497__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23497__auto____0 = (function (){
var statearr_28235 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28235[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23497__auto__);

(statearr_28235[(1)] = (1));

return statearr_28235;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23497__auto____1 = (function (state_28208){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_28208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e28236){if((e28236 instanceof Object)){
var ex__23500__auto__ = e28236;
var statearr_28237_28258 = state_28208;
(statearr_28237_28258[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28259 = state_28208;
state_28208 = G__28259;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23497__auto__ = function(state_28208){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23497__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23497__auto____1.call(this,state_28208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23497__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23497__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto___28239,ch))
})();
var state__23610__auto__ = (function (){var statearr_28238 = f__23609__auto__.call(null);
(statearr_28238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto___28239);

return statearr_28238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto___28239,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28260_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28260_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_28267 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28267){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28265 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28266 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28266;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28265;
}}catch (e28264){if((e28264 instanceof Error)){
var e = e28264;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28267], null));
} else {
var e = e28264;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28267))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28268){
var map__28275 = p__28268;
var map__28275__$1 = ((((!((map__28275 == null)))?((((map__28275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28275):map__28275);
var opts = map__28275__$1;
var build_id = cljs.core.get.call(null,map__28275__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28275,map__28275__$1,opts,build_id){
return (function (p__28277){
var vec__28278 = p__28277;
var map__28279 = cljs.core.nth.call(null,vec__28278,(0),null);
var map__28279__$1 = ((((!((map__28279 == null)))?((((map__28279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28279):map__28279);
var msg = map__28279__$1;
var msg_name = cljs.core.get.call(null,map__28279__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28278,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28278,map__28279,map__28279__$1,msg,msg_name,_,map__28275,map__28275__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28278,map__28279,map__28279__$1,msg,msg_name,_,map__28275,map__28275__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28275,map__28275__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28285){
var vec__28286 = p__28285;
var map__28287 = cljs.core.nth.call(null,vec__28286,(0),null);
var map__28287__$1 = ((((!((map__28287 == null)))?((((map__28287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28287):map__28287);
var msg = map__28287__$1;
var msg_name = cljs.core.get.call(null,map__28287__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28286,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28289){
var map__28299 = p__28289;
var map__28299__$1 = ((((!((map__28299 == null)))?((((map__28299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28299):map__28299);
var on_compile_warning = cljs.core.get.call(null,map__28299__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28299__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28299,map__28299__$1,on_compile_warning,on_compile_fail){
return (function (p__28301){
var vec__28302 = p__28301;
var map__28303 = cljs.core.nth.call(null,vec__28302,(0),null);
var map__28303__$1 = ((((!((map__28303 == null)))?((((map__28303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28303):map__28303);
var msg = map__28303__$1;
var msg_name = cljs.core.get.call(null,map__28303__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28302,(1));
var pred__28305 = cljs.core._EQ_;
var expr__28306 = msg_name;
if(cljs.core.truth_(pred__28305.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28306))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28305.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28306))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28299,map__28299__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto__,msg_hist,msg_names,msg){
return (function (state_28514){
var state_val_28515 = (state_28514[(1)]);
if((state_val_28515 === (7))){
var inst_28442 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
if(cljs.core.truth_(inst_28442)){
var statearr_28516_28562 = state_28514__$1;
(statearr_28516_28562[(1)] = (8));

} else {
var statearr_28517_28563 = state_28514__$1;
(statearr_28517_28563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (20))){
var inst_28508 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28518_28564 = state_28514__$1;
(statearr_28518_28564[(2)] = inst_28508);

(statearr_28518_28564[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (27))){
var inst_28504 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28519_28565 = state_28514__$1;
(statearr_28519_28565[(2)] = inst_28504);

(statearr_28519_28565[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (1))){
var inst_28435 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28514__$1 = state_28514;
if(cljs.core.truth_(inst_28435)){
var statearr_28520_28566 = state_28514__$1;
(statearr_28520_28566[(1)] = (2));

} else {
var statearr_28521_28567 = state_28514__$1;
(statearr_28521_28567[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (24))){
var inst_28506 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28522_28568 = state_28514__$1;
(statearr_28522_28568[(2)] = inst_28506);

(statearr_28522_28568[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (4))){
var inst_28512 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28514__$1,inst_28512);
} else {
if((state_val_28515 === (15))){
var inst_28510 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28523_28569 = state_28514__$1;
(statearr_28523_28569[(2)] = inst_28510);

(statearr_28523_28569[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (21))){
var inst_28469 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28524_28570 = state_28514__$1;
(statearr_28524_28570[(2)] = inst_28469);

(statearr_28524_28570[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (31))){
var inst_28493 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28514__$1 = state_28514;
if(cljs.core.truth_(inst_28493)){
var statearr_28525_28571 = state_28514__$1;
(statearr_28525_28571[(1)] = (34));

} else {
var statearr_28526_28572 = state_28514__$1;
(statearr_28526_28572[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (32))){
var inst_28502 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28527_28573 = state_28514__$1;
(statearr_28527_28573[(2)] = inst_28502);

(statearr_28527_28573[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (33))){
var inst_28491 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28528_28574 = state_28514__$1;
(statearr_28528_28574[(2)] = inst_28491);

(statearr_28528_28574[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (13))){
var inst_28456 = figwheel.client.heads_up.clear.call(null);
var state_28514__$1 = state_28514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28514__$1,(16),inst_28456);
} else {
if((state_val_28515 === (22))){
var inst_28473 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28474 = figwheel.client.heads_up.append_message.call(null,inst_28473);
var state_28514__$1 = state_28514;
var statearr_28529_28575 = state_28514__$1;
(statearr_28529_28575[(2)] = inst_28474);

(statearr_28529_28575[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (36))){
var inst_28500 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28530_28576 = state_28514__$1;
(statearr_28530_28576[(2)] = inst_28500);

(statearr_28530_28576[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (29))){
var inst_28484 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28531_28577 = state_28514__$1;
(statearr_28531_28577[(2)] = inst_28484);

(statearr_28531_28577[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (6))){
var inst_28437 = (state_28514[(7)]);
var state_28514__$1 = state_28514;
var statearr_28532_28578 = state_28514__$1;
(statearr_28532_28578[(2)] = inst_28437);

(statearr_28532_28578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (28))){
var inst_28480 = (state_28514[(2)]);
var inst_28481 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28482 = figwheel.client.heads_up.display_warning.call(null,inst_28481);
var state_28514__$1 = (function (){var statearr_28533 = state_28514;
(statearr_28533[(8)] = inst_28480);

return statearr_28533;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28514__$1,(29),inst_28482);
} else {
if((state_val_28515 === (25))){
var inst_28478 = figwheel.client.heads_up.clear.call(null);
var state_28514__$1 = state_28514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28514__$1,(28),inst_28478);
} else {
if((state_val_28515 === (34))){
var inst_28495 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28514__$1 = state_28514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28514__$1,(37),inst_28495);
} else {
if((state_val_28515 === (17))){
var inst_28462 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28534_28579 = state_28514__$1;
(statearr_28534_28579[(2)] = inst_28462);

(statearr_28534_28579[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (3))){
var inst_28454 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28514__$1 = state_28514;
if(cljs.core.truth_(inst_28454)){
var statearr_28535_28580 = state_28514__$1;
(statearr_28535_28580[(1)] = (13));

} else {
var statearr_28536_28581 = state_28514__$1;
(statearr_28536_28581[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (12))){
var inst_28450 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28537_28582 = state_28514__$1;
(statearr_28537_28582[(2)] = inst_28450);

(statearr_28537_28582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (2))){
var inst_28437 = (state_28514[(7)]);
var inst_28437__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28514__$1 = (function (){var statearr_28538 = state_28514;
(statearr_28538[(7)] = inst_28437__$1);

return statearr_28538;
})();
if(cljs.core.truth_(inst_28437__$1)){
var statearr_28539_28583 = state_28514__$1;
(statearr_28539_28583[(1)] = (5));

} else {
var statearr_28540_28584 = state_28514__$1;
(statearr_28540_28584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (23))){
var inst_28476 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28514__$1 = state_28514;
if(cljs.core.truth_(inst_28476)){
var statearr_28541_28585 = state_28514__$1;
(statearr_28541_28585[(1)] = (25));

} else {
var statearr_28542_28586 = state_28514__$1;
(statearr_28542_28586[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (35))){
var state_28514__$1 = state_28514;
var statearr_28543_28587 = state_28514__$1;
(statearr_28543_28587[(2)] = null);

(statearr_28543_28587[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (19))){
var inst_28471 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28514__$1 = state_28514;
if(cljs.core.truth_(inst_28471)){
var statearr_28544_28588 = state_28514__$1;
(statearr_28544_28588[(1)] = (22));

} else {
var statearr_28545_28589 = state_28514__$1;
(statearr_28545_28589[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (11))){
var inst_28446 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28546_28590 = state_28514__$1;
(statearr_28546_28590[(2)] = inst_28446);

(statearr_28546_28590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (9))){
var inst_28448 = figwheel.client.heads_up.clear.call(null);
var state_28514__$1 = state_28514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28514__$1,(12),inst_28448);
} else {
if((state_val_28515 === (5))){
var inst_28439 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28514__$1 = state_28514;
var statearr_28547_28591 = state_28514__$1;
(statearr_28547_28591[(2)] = inst_28439);

(statearr_28547_28591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (14))){
var inst_28464 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28514__$1 = state_28514;
if(cljs.core.truth_(inst_28464)){
var statearr_28548_28592 = state_28514__$1;
(statearr_28548_28592[(1)] = (18));

} else {
var statearr_28549_28593 = state_28514__$1;
(statearr_28549_28593[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (26))){
var inst_28486 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28514__$1 = state_28514;
if(cljs.core.truth_(inst_28486)){
var statearr_28550_28594 = state_28514__$1;
(statearr_28550_28594[(1)] = (30));

} else {
var statearr_28551_28595 = state_28514__$1;
(statearr_28551_28595[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (16))){
var inst_28458 = (state_28514[(2)]);
var inst_28459 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28460 = figwheel.client.heads_up.display_exception.call(null,inst_28459);
var state_28514__$1 = (function (){var statearr_28552 = state_28514;
(statearr_28552[(9)] = inst_28458);

return statearr_28552;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28514__$1,(17),inst_28460);
} else {
if((state_val_28515 === (30))){
var inst_28488 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28489 = figwheel.client.heads_up.display_warning.call(null,inst_28488);
var state_28514__$1 = state_28514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28514__$1,(33),inst_28489);
} else {
if((state_val_28515 === (10))){
var inst_28452 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28553_28596 = state_28514__$1;
(statearr_28553_28596[(2)] = inst_28452);

(statearr_28553_28596[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (18))){
var inst_28466 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28467 = figwheel.client.heads_up.display_exception.call(null,inst_28466);
var state_28514__$1 = state_28514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28514__$1,(21),inst_28467);
} else {
if((state_val_28515 === (37))){
var inst_28497 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28554_28597 = state_28514__$1;
(statearr_28554_28597[(2)] = inst_28497);

(statearr_28554_28597[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (8))){
var inst_28444 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28514__$1 = state_28514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28514__$1,(11),inst_28444);
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
});})(c__23608__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23496__auto__,c__23608__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23497__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23497__auto____0 = (function (){
var statearr_28558 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28558[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23497__auto__);

(statearr_28558[(1)] = (1));

return statearr_28558;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23497__auto____1 = (function (state_28514){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_28514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e28559){if((e28559 instanceof Object)){
var ex__23500__auto__ = e28559;
var statearr_28560_28598 = state_28514;
(statearr_28560_28598[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28599 = state_28514;
state_28514 = G__28599;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23497__auto__ = function(state_28514){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23497__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23497__auto____1.call(this,state_28514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23497__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23497__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto__,msg_hist,msg_names,msg))
})();
var state__23610__auto__ = (function (){var statearr_28561 = f__23609__auto__.call(null);
(statearr_28561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto__);

return statearr_28561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto__,msg_hist,msg_names,msg))
);

return c__23608__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23608__auto___28662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto___28662,ch){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto___28662,ch){
return (function (state_28645){
var state_val_28646 = (state_28645[(1)]);
if((state_val_28646 === (1))){
var state_28645__$1 = state_28645;
var statearr_28647_28663 = state_28645__$1;
(statearr_28647_28663[(2)] = null);

(statearr_28647_28663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28646 === (2))){
var state_28645__$1 = state_28645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28645__$1,(4),ch);
} else {
if((state_val_28646 === (3))){
var inst_28643 = (state_28645[(2)]);
var state_28645__$1 = state_28645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28645__$1,inst_28643);
} else {
if((state_val_28646 === (4))){
var inst_28633 = (state_28645[(7)]);
var inst_28633__$1 = (state_28645[(2)]);
var state_28645__$1 = (function (){var statearr_28648 = state_28645;
(statearr_28648[(7)] = inst_28633__$1);

return statearr_28648;
})();
if(cljs.core.truth_(inst_28633__$1)){
var statearr_28649_28664 = state_28645__$1;
(statearr_28649_28664[(1)] = (5));

} else {
var statearr_28650_28665 = state_28645__$1;
(statearr_28650_28665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28646 === (5))){
var inst_28633 = (state_28645[(7)]);
var inst_28635 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28633);
var state_28645__$1 = state_28645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28645__$1,(8),inst_28635);
} else {
if((state_val_28646 === (6))){
var state_28645__$1 = state_28645;
var statearr_28651_28666 = state_28645__$1;
(statearr_28651_28666[(2)] = null);

(statearr_28651_28666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28646 === (7))){
var inst_28641 = (state_28645[(2)]);
var state_28645__$1 = state_28645;
var statearr_28652_28667 = state_28645__$1;
(statearr_28652_28667[(2)] = inst_28641);

(statearr_28652_28667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28646 === (8))){
var inst_28637 = (state_28645[(2)]);
var state_28645__$1 = (function (){var statearr_28653 = state_28645;
(statearr_28653[(8)] = inst_28637);

return statearr_28653;
})();
var statearr_28654_28668 = state_28645__$1;
(statearr_28654_28668[(2)] = null);

(statearr_28654_28668[(1)] = (2));


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
});})(c__23608__auto___28662,ch))
;
return ((function (switch__23496__auto__,c__23608__auto___28662,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23497__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23497__auto____0 = (function (){
var statearr_28658 = [null,null,null,null,null,null,null,null,null];
(statearr_28658[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23497__auto__);

(statearr_28658[(1)] = (1));

return statearr_28658;
});
var figwheel$client$heads_up_plugin_$_state_machine__23497__auto____1 = (function (state_28645){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_28645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e28659){if((e28659 instanceof Object)){
var ex__23500__auto__ = e28659;
var statearr_28660_28669 = state_28645;
(statearr_28660_28669[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28670 = state_28645;
state_28645 = G__28670;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23497__auto__ = function(state_28645){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23497__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23497__auto____1.call(this,state_28645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23497__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23497__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto___28662,ch))
})();
var state__23610__auto__ = (function (){var statearr_28661 = f__23609__auto__.call(null);
(statearr_28661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto___28662);

return statearr_28661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto___28662,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto__){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto__){
return (function (state_28691){
var state_val_28692 = (state_28691[(1)]);
if((state_val_28692 === (1))){
var inst_28686 = cljs.core.async.timeout.call(null,(3000));
var state_28691__$1 = state_28691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28691__$1,(2),inst_28686);
} else {
if((state_val_28692 === (2))){
var inst_28688 = (state_28691[(2)]);
var inst_28689 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28691__$1 = (function (){var statearr_28693 = state_28691;
(statearr_28693[(7)] = inst_28688);

return statearr_28693;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28691__$1,inst_28689);
} else {
return null;
}
}
});})(c__23608__auto__))
;
return ((function (switch__23496__auto__,c__23608__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23497__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23497__auto____0 = (function (){
var statearr_28697 = [null,null,null,null,null,null,null,null];
(statearr_28697[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23497__auto__);

(statearr_28697[(1)] = (1));

return statearr_28697;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23497__auto____1 = (function (state_28691){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_28691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e28698){if((e28698 instanceof Object)){
var ex__23500__auto__ = e28698;
var statearr_28699_28701 = state_28691;
(statearr_28699_28701[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28702 = state_28691;
state_28691 = G__28702;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23497__auto__ = function(state_28691){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23497__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23497__auto____1.call(this,state_28691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23497__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23497__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto__))
})();
var state__23610__auto__ = (function (){var statearr_28700 = f__23609__auto__.call(null);
(statearr_28700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto__);

return statearr_28700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto__))
);

return c__23608__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28703){
var map__28710 = p__28703;
var map__28710__$1 = ((((!((map__28710 == null)))?((((map__28710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28710):map__28710);
var ed = map__28710__$1;
var formatted_exception = cljs.core.get.call(null,map__28710__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28710__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28710__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28712_28716 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28713_28717 = null;
var count__28714_28718 = (0);
var i__28715_28719 = (0);
while(true){
if((i__28715_28719 < count__28714_28718)){
var msg_28720 = cljs.core._nth.call(null,chunk__28713_28717,i__28715_28719);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28720);

var G__28721 = seq__28712_28716;
var G__28722 = chunk__28713_28717;
var G__28723 = count__28714_28718;
var G__28724 = (i__28715_28719 + (1));
seq__28712_28716 = G__28721;
chunk__28713_28717 = G__28722;
count__28714_28718 = G__28723;
i__28715_28719 = G__28724;
continue;
} else {
var temp__4657__auto___28725 = cljs.core.seq.call(null,seq__28712_28716);
if(temp__4657__auto___28725){
var seq__28712_28726__$1 = temp__4657__auto___28725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28712_28726__$1)){
var c__19279__auto___28727 = cljs.core.chunk_first.call(null,seq__28712_28726__$1);
var G__28728 = cljs.core.chunk_rest.call(null,seq__28712_28726__$1);
var G__28729 = c__19279__auto___28727;
var G__28730 = cljs.core.count.call(null,c__19279__auto___28727);
var G__28731 = (0);
seq__28712_28716 = G__28728;
chunk__28713_28717 = G__28729;
count__28714_28718 = G__28730;
i__28715_28719 = G__28731;
continue;
} else {
var msg_28732 = cljs.core.first.call(null,seq__28712_28726__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28732);

var G__28733 = cljs.core.next.call(null,seq__28712_28726__$1);
var G__28734 = null;
var G__28735 = (0);
var G__28736 = (0);
seq__28712_28716 = G__28733;
chunk__28713_28717 = G__28734;
count__28714_28718 = G__28735;
i__28715_28719 = G__28736;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28737){
var map__28740 = p__28737;
var map__28740__$1 = ((((!((map__28740 == null)))?((((map__28740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28740):map__28740);
var w = map__28740__$1;
var message = cljs.core.get.call(null,map__28740__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18456__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18456__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18456__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28748 = cljs.core.seq.call(null,plugins);
var chunk__28749 = null;
var count__28750 = (0);
var i__28751 = (0);
while(true){
if((i__28751 < count__28750)){
var vec__28752 = cljs.core._nth.call(null,chunk__28749,i__28751);
var k = cljs.core.nth.call(null,vec__28752,(0),null);
var plugin = cljs.core.nth.call(null,vec__28752,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28754 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28748,chunk__28749,count__28750,i__28751,pl_28754,vec__28752,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28754.call(null,msg_hist);
});})(seq__28748,chunk__28749,count__28750,i__28751,pl_28754,vec__28752,k,plugin))
);
} else {
}

var G__28755 = seq__28748;
var G__28756 = chunk__28749;
var G__28757 = count__28750;
var G__28758 = (i__28751 + (1));
seq__28748 = G__28755;
chunk__28749 = G__28756;
count__28750 = G__28757;
i__28751 = G__28758;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28748);
if(temp__4657__auto__){
var seq__28748__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28748__$1)){
var c__19279__auto__ = cljs.core.chunk_first.call(null,seq__28748__$1);
var G__28759 = cljs.core.chunk_rest.call(null,seq__28748__$1);
var G__28760 = c__19279__auto__;
var G__28761 = cljs.core.count.call(null,c__19279__auto__);
var G__28762 = (0);
seq__28748 = G__28759;
chunk__28749 = G__28760;
count__28750 = G__28761;
i__28751 = G__28762;
continue;
} else {
var vec__28753 = cljs.core.first.call(null,seq__28748__$1);
var k = cljs.core.nth.call(null,vec__28753,(0),null);
var plugin = cljs.core.nth.call(null,vec__28753,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28763 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28748,chunk__28749,count__28750,i__28751,pl_28763,vec__28753,k,plugin,seq__28748__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28763.call(null,msg_hist);
});})(seq__28748,chunk__28749,count__28750,i__28751,pl_28763,vec__28753,k,plugin,seq__28748__$1,temp__4657__auto__))
);
} else {
}

var G__28764 = cljs.core.next.call(null,seq__28748__$1);
var G__28765 = null;
var G__28766 = (0);
var G__28767 = (0);
seq__28748 = G__28764;
chunk__28749 = G__28765;
count__28750 = G__28766;
i__28751 = G__28767;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args28768 = [];
var len__19538__auto___28771 = arguments.length;
var i__19539__auto___28772 = (0);
while(true){
if((i__19539__auto___28772 < len__19538__auto___28771)){
args28768.push((arguments[i__19539__auto___28772]));

var G__28773 = (i__19539__auto___28772 + (1));
i__19539__auto___28772 = G__28773;
continue;
} else {
}
break;
}

var G__28770 = args28768.length;
switch (G__28770) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28768.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19545__auto__ = [];
var len__19538__auto___28779 = arguments.length;
var i__19539__auto___28780 = (0);
while(true){
if((i__19539__auto___28780 < len__19538__auto___28779)){
args__19545__auto__.push((arguments[i__19539__auto___28780]));

var G__28781 = (i__19539__auto___28780 + (1));
i__19539__auto___28780 = G__28781;
continue;
} else {
}
break;
}

var argseq__19546__auto__ = ((((0) < args__19545__auto__.length))?(new cljs.core.IndexedSeq(args__19545__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19546__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28776){
var map__28777 = p__28776;
var map__28777__$1 = ((((!((map__28777 == null)))?((((map__28777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28777):map__28777);
var opts = map__28777__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28775){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28775));
});

//# sourceMappingURL=client.js.map