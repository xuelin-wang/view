// Compiled by ClojureScript 1.8.51 {}
goog.provide('view.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
view.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app","title","app/title",636408784),"View",new cljs.core.Keyword("items","list","items/list",530343603),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"item 1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"item 2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"item 3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"item 4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"item 5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),"item 6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"item 7"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),"item 8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),"item 9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"item 10"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),"item 11"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),"item 12"], null)], null)], null));
if(typeof view.core.read !== 'undefined'){
} else {
view.core.read = (function (){var method_table__19393__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19394__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19395__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19396__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19397__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"view.core","read"),((function (method_table__19393__auto__,prefer_table__19394__auto__,method_cache__19395__auto__,cached_hierarchy__19396__auto__,hierarchy__19397__auto__){
return (function (env,key,params){
return key;
});})(method_table__19393__auto__,prefer_table__19394__auto__,method_cache__19395__auto__,cached_hierarchy__19396__auto__,hierarchy__19397__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19397__auto__,method_table__19393__auto__,prefer_table__19394__auto__,method_cache__19395__auto__,cached_hierarchy__19396__auto__));
})();
}
cljs.core._add_method.call(null,view.core.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__21779,key,params){
var map__21780 = p__21779;
var map__21780__$1 = ((((!((map__21780 == null)))?((((map__21780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21780):map__21780);
var env = map__21780__$1;
var state = cljs.core.get.call(null,map__21780__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4655__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__21782 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__21782,(0),null);
var value = cljs.core.nth.call(null,vec__21782,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
cljs.core._add_method.call(null,view.core.read,new cljs.core.Keyword("items","list","items/list",530343603),(function (p__21783,key,p__21784){
var map__21785 = p__21783;
var map__21785__$1 = ((((!((map__21785 == null)))?((((map__21785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21785):map__21785);
var env = map__21785__$1;
var state = cljs.core.get.call(null,map__21785__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__21786 = p__21784;
var map__21786__$1 = ((((!((map__21786 == null)))?((((map__21786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21786):map__21786);
var start = cljs.core.get.call(null,map__21786__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__21786__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.subvec.call(null,new cljs.core.Keyword("items","list","items/list",530343603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),start,end)], null);
}));
/**
 * @constructor
 */
view.core.ItemsList = (function view$core$ItemsList(){
var this__20620__auto__ = this;
React.Component.apply(this__20620__auto__,arguments);

if(!((this__20620__auto__.initLocalState == null))){
this__20620__auto__.state = this__20620__auto__.initLocalState();
} else {
this__20620__auto__.state = {};
}

return this__20620__auto__;
});

view.core.ItemsList.prototype = goog.object.clone(React.Component.prototype);

var x21793_21807 = view.core.ItemsList.prototype;
x21793_21807.componentWillUpdate = ((function (x21793_21807){
return (function (next_props__20556__auto__,next_state__20557__auto__){
var this__20555__auto__ = this;
if(((!((this__20555__auto__ == null)))?(((false) || (this__20555__auto__.om$next$Ident$))?true:false):false)){
var ident__20559__auto___21808 = om.next.ident.call(null,this__20555__auto__,om.next.props.call(null,this__20555__auto__));
var next_ident__20560__auto___21809 = om.next.ident.call(null,this__20555__auto__,om.next._next_props.call(null,next_props__20556__auto__,this__20555__auto__));
if(cljs.core.not_EQ_.call(null,ident__20559__auto___21808,next_ident__20560__auto___21809)){
var idxr__20561__auto___21810 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20555__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__20561__auto___21810 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__20561__auto___21810),((function (idxr__20561__auto___21810,ident__20559__auto___21808,next_ident__20560__auto___21809,this__20555__auto__,x21793_21807){
return (function (indexes__20562__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__20562__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__20559__auto___21808], null),cljs.core.disj,this__20555__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__20560__auto___21809], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__20555__auto__);
});})(idxr__20561__auto___21810,ident__20559__auto___21808,next_ident__20560__auto___21809,this__20555__auto__,x21793_21807))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__20555__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20555__auto__);
});})(x21793_21807))
;

x21793_21807.shouldComponentUpdate = ((function (x21793_21807){
return (function (next_props__20556__auto__,next_state__20557__auto__){
var this__20555__auto__ = this;
var next_children__20558__auto__ = next_props__20556__auto__.children;
var next_props__20556__auto____$1 = goog.object.get(next_props__20556__auto__,"omcljs$value");
var next_props__20556__auto____$2 = (function (){var G__21795 = next_props__20556__auto____$1;
if((next_props__20556__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__21795);
} else {
return G__21795;
}
})();
var or__18468__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20555__auto__),next_props__20556__auto____$2);
if(or__18468__auto__){
return or__18468__auto__;
} else {
var or__18468__auto____$1 = (function (){var and__18456__auto__ = this__20555__auto__.state;
if(cljs.core.truth_(and__18456__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20555__auto__.state,"omcljs$state"),goog.object.get(next_state__20557__auto__,"omcljs$state"));
} else {
return and__18456__auto__;
}
})();
if(cljs.core.truth_(or__18468__auto____$1)){
return or__18468__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__20555__auto__.props.children,next_children__20558__auto__);
}
}
});})(x21793_21807))
;

x21793_21807.componentWillUnmount = ((function (x21793_21807){
return (function (){
var this__20555__auto__ = this;
var r__20566__auto__ = om.next.get_reconciler.call(null,this__20555__auto__);
var cfg__20567__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20566__auto__);
var st__20568__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20567__auto__);
var indexer__20565__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20567__auto__);
if(cljs.core.truth_((function (){var and__18456__auto__ = !((st__20568__auto__ == null));
if(and__18456__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__20568__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__20555__auto__], null));
} else {
return and__18456__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__20568__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20555__auto__);
} else {
}

if((indexer__20565__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20565__auto__,this__20555__auto__);
}
});})(x21793_21807))
;

x21793_21807.componentDidUpdate = ((function (x21793_21807){
return (function (prev_props__20563__auto__,prev_state__20564__auto__){
var this__20555__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20555__auto__);
});})(x21793_21807))
;

x21793_21807.isMounted = ((function (x21793_21807){
return (function (){
var this__20555__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20555__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21793_21807))
;

x21793_21807.componentWillMount = ((function (x21793_21807){
return (function (){
var this__20555__auto__ = this;
var indexer__20565__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20555__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20565__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20565__auto__,this__20555__auto__);
}
});})(x21793_21807))
;

x21793_21807.render = ((function (x21793_21807){
return (function (){
var this__20554__auto__ = this;
var this$ = this__20554__auto__;
var _STAR_reconciler_STAR_21796 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21797 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21798 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21799 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21800 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__20554__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__20554__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__20554__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__20554__auto__);

om.next._STAR_parent_STAR_ = this__20554__auto__;

try{var map__21801 = om.next.props.call(null,this$);
var map__21801__$1 = ((((!((map__21801 == null)))?((((map__21801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21801):map__21801);
var title = cljs.core.get.call(null,map__21801__$1,new cljs.core.Keyword("app","title","app/title",636408784));
var list = cljs.core.get.call(null,map__21801__$1,new cljs.core.Keyword("items","list","items/list",530343603));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,title))),om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (map__21801,map__21801__$1,title,list,_STAR_reconciler_STAR_21796,_STAR_depth_STAR_21797,_STAR_shared_STAR_21798,_STAR_instrument_STAR_21799,_STAR_parent_STAR_21800,this$,this__20554__auto__,x21793_21807){
return (function (p__21803){
var vec__21804 = p__21803;
var i = cljs.core.nth.call(null,vec__21804,(0),null);
var name = cljs.core.nth.call(null,vec__21804,(1),null);
return React.DOM.li(null,om.util.force_children.call(null,[cljs.core.str(i),cljs.core.str(". "),cljs.core.str(name)].join('')));
});})(map__21801,map__21801__$1,title,list,_STAR_reconciler_STAR_21796,_STAR_depth_STAR_21797,_STAR_shared_STAR_21798,_STAR_instrument_STAR_21799,_STAR_parent_STAR_21800,this$,this__20554__auto__,x21793_21807))
,list))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21800;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21799;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21798;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21797;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21796;
}});})(x21793_21807))
;


view.core.ItemsList.prototype.constructor = view.core.ItemsList;

view.core.ItemsList.prototype.constructor.displayName = "view.core/ItemsList";

view.core.ItemsList.prototype.om$isComponent = true;

var x21805_21811 = view.core.ItemsList;
x21805_21811.om$next$IQueryParams$ = true;

x21805_21811.om$next$IQueryParams$params$arity$1 = ((function (x21805_21811){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x21805_21811))
;

x21805_21811.om$next$IQuery$ = true;

x21805_21811.om$next$IQuery$query$arity$1 = ((function (x21805_21811){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("items","list","items/list",530343603),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x21805_21811))
;


var x21806_21812 = view.core.ItemsList.prototype;
x21806_21812.om$next$IQueryParams$ = true;

x21806_21812.om$next$IQueryParams$params$arity$1 = ((function (x21806_21812){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x21806_21812))
;

x21806_21812.om$next$IQuery$ = true;

x21806_21812.om$next$IQuery$query$arity$1 = ((function (x21806_21812){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("items","list","items/list",530343603),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x21806_21812))
;


view.core.ItemsList.cljs$lang$type = true;

view.core.ItemsList.cljs$lang$ctorStr = "view.core/ItemsList";

view.core.ItemsList.cljs$lang$ctorPrWriter = (function (this__20622__auto__,writer__20623__auto__,opt__20624__auto__){
return cljs.core._write.call(null,writer__20623__auto__,"view.core/ItemsList");
});
view.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),view.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),view.core.read], null))], null));
om.next.add_root_BANG_.call(null,view.core.reconciler,view.core.ItemsList,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map