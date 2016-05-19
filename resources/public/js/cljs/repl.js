// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27575_27589 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27576_27590 = null;
var count__27577_27591 = (0);
var i__27578_27592 = (0);
while(true){
if((i__27578_27592 < count__27577_27591)){
var f_27593 = cljs.core._nth.call(null,chunk__27576_27590,i__27578_27592);
cljs.core.println.call(null,"  ",f_27593);

var G__27594 = seq__27575_27589;
var G__27595 = chunk__27576_27590;
var G__27596 = count__27577_27591;
var G__27597 = (i__27578_27592 + (1));
seq__27575_27589 = G__27594;
chunk__27576_27590 = G__27595;
count__27577_27591 = G__27596;
i__27578_27592 = G__27597;
continue;
} else {
var temp__4657__auto___27598 = cljs.core.seq.call(null,seq__27575_27589);
if(temp__4657__auto___27598){
var seq__27575_27599__$1 = temp__4657__auto___27598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27575_27599__$1)){
var c__19279__auto___27600 = cljs.core.chunk_first.call(null,seq__27575_27599__$1);
var G__27601 = cljs.core.chunk_rest.call(null,seq__27575_27599__$1);
var G__27602 = c__19279__auto___27600;
var G__27603 = cljs.core.count.call(null,c__19279__auto___27600);
var G__27604 = (0);
seq__27575_27589 = G__27601;
chunk__27576_27590 = G__27602;
count__27577_27591 = G__27603;
i__27578_27592 = G__27604;
continue;
} else {
var f_27605 = cljs.core.first.call(null,seq__27575_27599__$1);
cljs.core.println.call(null,"  ",f_27605);

var G__27606 = cljs.core.next.call(null,seq__27575_27599__$1);
var G__27607 = null;
var G__27608 = (0);
var G__27609 = (0);
seq__27575_27589 = G__27606;
chunk__27576_27590 = G__27607;
count__27577_27591 = G__27608;
i__27578_27592 = G__27609;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27610 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18468__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18468__auto__)){
return or__18468__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27610);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27610)))?cljs.core.second.call(null,arglists_27610):arglists_27610));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27579 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27580 = null;
var count__27581 = (0);
var i__27582 = (0);
while(true){
if((i__27582 < count__27581)){
var vec__27583 = cljs.core._nth.call(null,chunk__27580,i__27582);
var name = cljs.core.nth.call(null,vec__27583,(0),null);
var map__27584 = cljs.core.nth.call(null,vec__27583,(1),null);
var map__27584__$1 = ((((!((map__27584 == null)))?((((map__27584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27584):map__27584);
var doc = cljs.core.get.call(null,map__27584__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27584__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27611 = seq__27579;
var G__27612 = chunk__27580;
var G__27613 = count__27581;
var G__27614 = (i__27582 + (1));
seq__27579 = G__27611;
chunk__27580 = G__27612;
count__27581 = G__27613;
i__27582 = G__27614;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27579);
if(temp__4657__auto__){
var seq__27579__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27579__$1)){
var c__19279__auto__ = cljs.core.chunk_first.call(null,seq__27579__$1);
var G__27615 = cljs.core.chunk_rest.call(null,seq__27579__$1);
var G__27616 = c__19279__auto__;
var G__27617 = cljs.core.count.call(null,c__19279__auto__);
var G__27618 = (0);
seq__27579 = G__27615;
chunk__27580 = G__27616;
count__27581 = G__27617;
i__27582 = G__27618;
continue;
} else {
var vec__27586 = cljs.core.first.call(null,seq__27579__$1);
var name = cljs.core.nth.call(null,vec__27586,(0),null);
var map__27587 = cljs.core.nth.call(null,vec__27586,(1),null);
var map__27587__$1 = ((((!((map__27587 == null)))?((((map__27587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27587):map__27587);
var doc = cljs.core.get.call(null,map__27587__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27587__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27619 = cljs.core.next.call(null,seq__27579__$1);
var G__27620 = null;
var G__27621 = (0);
var G__27622 = (0);
seq__27579 = G__27619;
chunk__27580 = G__27620;
count__27581 = G__27621;
i__27582 = G__27622;
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
}
});

//# sourceMappingURL=repl.js.map