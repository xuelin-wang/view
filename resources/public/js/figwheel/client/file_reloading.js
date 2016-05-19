// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18468__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18468__auto__){
return or__18468__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18468__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18468__auto__)){
return or__18468__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26551_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26551_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26556 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26557 = null;
var count__26558 = (0);
var i__26559 = (0);
while(true){
if((i__26559 < count__26558)){
var n = cljs.core._nth.call(null,chunk__26557,i__26559);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26560 = seq__26556;
var G__26561 = chunk__26557;
var G__26562 = count__26558;
var G__26563 = (i__26559 + (1));
seq__26556 = G__26560;
chunk__26557 = G__26561;
count__26558 = G__26562;
i__26559 = G__26563;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26556);
if(temp__4657__auto__){
var seq__26556__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26556__$1)){
var c__19279__auto__ = cljs.core.chunk_first.call(null,seq__26556__$1);
var G__26564 = cljs.core.chunk_rest.call(null,seq__26556__$1);
var G__26565 = c__19279__auto__;
var G__26566 = cljs.core.count.call(null,c__19279__auto__);
var G__26567 = (0);
seq__26556 = G__26564;
chunk__26557 = G__26565;
count__26558 = G__26566;
i__26559 = G__26567;
continue;
} else {
var n = cljs.core.first.call(null,seq__26556__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26568 = cljs.core.next.call(null,seq__26556__$1);
var G__26569 = null;
var G__26570 = (0);
var G__26571 = (0);
seq__26556 = G__26568;
chunk__26557 = G__26569;
count__26558 = G__26570;
i__26559 = G__26571;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26610_26617 = cljs.core.seq.call(null,deps);
var chunk__26611_26618 = null;
var count__26612_26619 = (0);
var i__26613_26620 = (0);
while(true){
if((i__26613_26620 < count__26612_26619)){
var dep_26621 = cljs.core._nth.call(null,chunk__26611_26618,i__26613_26620);
topo_sort_helper_STAR_.call(null,dep_26621,(depth + (1)),state);

var G__26622 = seq__26610_26617;
var G__26623 = chunk__26611_26618;
var G__26624 = count__26612_26619;
var G__26625 = (i__26613_26620 + (1));
seq__26610_26617 = G__26622;
chunk__26611_26618 = G__26623;
count__26612_26619 = G__26624;
i__26613_26620 = G__26625;
continue;
} else {
var temp__4657__auto___26626 = cljs.core.seq.call(null,seq__26610_26617);
if(temp__4657__auto___26626){
var seq__26610_26627__$1 = temp__4657__auto___26626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26610_26627__$1)){
var c__19279__auto___26628 = cljs.core.chunk_first.call(null,seq__26610_26627__$1);
var G__26629 = cljs.core.chunk_rest.call(null,seq__26610_26627__$1);
var G__26630 = c__19279__auto___26628;
var G__26631 = cljs.core.count.call(null,c__19279__auto___26628);
var G__26632 = (0);
seq__26610_26617 = G__26629;
chunk__26611_26618 = G__26630;
count__26612_26619 = G__26631;
i__26613_26620 = G__26632;
continue;
} else {
var dep_26633 = cljs.core.first.call(null,seq__26610_26627__$1);
topo_sort_helper_STAR_.call(null,dep_26633,(depth + (1)),state);

var G__26634 = cljs.core.next.call(null,seq__26610_26627__$1);
var G__26635 = null;
var G__26636 = (0);
var G__26637 = (0);
seq__26610_26617 = G__26634;
chunk__26611_26618 = G__26635;
count__26612_26619 = G__26636;
i__26613_26620 = G__26637;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26614){
var vec__26616 = p__26614;
var x = cljs.core.nth.call(null,vec__26616,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26616,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26616,x,xs,get_deps__$1){
return (function (p1__26572_SHARP_){
return clojure.set.difference.call(null,p1__26572_SHARP_,x);
});})(vec__26616,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26650 = cljs.core.seq.call(null,provides);
var chunk__26651 = null;
var count__26652 = (0);
var i__26653 = (0);
while(true){
if((i__26653 < count__26652)){
var prov = cljs.core._nth.call(null,chunk__26651,i__26653);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26654_26662 = cljs.core.seq.call(null,requires);
var chunk__26655_26663 = null;
var count__26656_26664 = (0);
var i__26657_26665 = (0);
while(true){
if((i__26657_26665 < count__26656_26664)){
var req_26666 = cljs.core._nth.call(null,chunk__26655_26663,i__26657_26665);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26666,prov);

var G__26667 = seq__26654_26662;
var G__26668 = chunk__26655_26663;
var G__26669 = count__26656_26664;
var G__26670 = (i__26657_26665 + (1));
seq__26654_26662 = G__26667;
chunk__26655_26663 = G__26668;
count__26656_26664 = G__26669;
i__26657_26665 = G__26670;
continue;
} else {
var temp__4657__auto___26671 = cljs.core.seq.call(null,seq__26654_26662);
if(temp__4657__auto___26671){
var seq__26654_26672__$1 = temp__4657__auto___26671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26654_26672__$1)){
var c__19279__auto___26673 = cljs.core.chunk_first.call(null,seq__26654_26672__$1);
var G__26674 = cljs.core.chunk_rest.call(null,seq__26654_26672__$1);
var G__26675 = c__19279__auto___26673;
var G__26676 = cljs.core.count.call(null,c__19279__auto___26673);
var G__26677 = (0);
seq__26654_26662 = G__26674;
chunk__26655_26663 = G__26675;
count__26656_26664 = G__26676;
i__26657_26665 = G__26677;
continue;
} else {
var req_26678 = cljs.core.first.call(null,seq__26654_26672__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26678,prov);

var G__26679 = cljs.core.next.call(null,seq__26654_26672__$1);
var G__26680 = null;
var G__26681 = (0);
var G__26682 = (0);
seq__26654_26662 = G__26679;
chunk__26655_26663 = G__26680;
count__26656_26664 = G__26681;
i__26657_26665 = G__26682;
continue;
}
} else {
}
}
break;
}

var G__26683 = seq__26650;
var G__26684 = chunk__26651;
var G__26685 = count__26652;
var G__26686 = (i__26653 + (1));
seq__26650 = G__26683;
chunk__26651 = G__26684;
count__26652 = G__26685;
i__26653 = G__26686;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26650);
if(temp__4657__auto__){
var seq__26650__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26650__$1)){
var c__19279__auto__ = cljs.core.chunk_first.call(null,seq__26650__$1);
var G__26687 = cljs.core.chunk_rest.call(null,seq__26650__$1);
var G__26688 = c__19279__auto__;
var G__26689 = cljs.core.count.call(null,c__19279__auto__);
var G__26690 = (0);
seq__26650 = G__26687;
chunk__26651 = G__26688;
count__26652 = G__26689;
i__26653 = G__26690;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26650__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26658_26691 = cljs.core.seq.call(null,requires);
var chunk__26659_26692 = null;
var count__26660_26693 = (0);
var i__26661_26694 = (0);
while(true){
if((i__26661_26694 < count__26660_26693)){
var req_26695 = cljs.core._nth.call(null,chunk__26659_26692,i__26661_26694);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26695,prov);

var G__26696 = seq__26658_26691;
var G__26697 = chunk__26659_26692;
var G__26698 = count__26660_26693;
var G__26699 = (i__26661_26694 + (1));
seq__26658_26691 = G__26696;
chunk__26659_26692 = G__26697;
count__26660_26693 = G__26698;
i__26661_26694 = G__26699;
continue;
} else {
var temp__4657__auto___26700__$1 = cljs.core.seq.call(null,seq__26658_26691);
if(temp__4657__auto___26700__$1){
var seq__26658_26701__$1 = temp__4657__auto___26700__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26658_26701__$1)){
var c__19279__auto___26702 = cljs.core.chunk_first.call(null,seq__26658_26701__$1);
var G__26703 = cljs.core.chunk_rest.call(null,seq__26658_26701__$1);
var G__26704 = c__19279__auto___26702;
var G__26705 = cljs.core.count.call(null,c__19279__auto___26702);
var G__26706 = (0);
seq__26658_26691 = G__26703;
chunk__26659_26692 = G__26704;
count__26660_26693 = G__26705;
i__26661_26694 = G__26706;
continue;
} else {
var req_26707 = cljs.core.first.call(null,seq__26658_26701__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26707,prov);

var G__26708 = cljs.core.next.call(null,seq__26658_26701__$1);
var G__26709 = null;
var G__26710 = (0);
var G__26711 = (0);
seq__26658_26691 = G__26708;
chunk__26659_26692 = G__26709;
count__26660_26693 = G__26710;
i__26661_26694 = G__26711;
continue;
}
} else {
}
}
break;
}

var G__26712 = cljs.core.next.call(null,seq__26650__$1);
var G__26713 = null;
var G__26714 = (0);
var G__26715 = (0);
seq__26650 = G__26712;
chunk__26651 = G__26713;
count__26652 = G__26714;
i__26653 = G__26715;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26720_26724 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26721_26725 = null;
var count__26722_26726 = (0);
var i__26723_26727 = (0);
while(true){
if((i__26723_26727 < count__26722_26726)){
var ns_26728 = cljs.core._nth.call(null,chunk__26721_26725,i__26723_26727);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26728);

var G__26729 = seq__26720_26724;
var G__26730 = chunk__26721_26725;
var G__26731 = count__26722_26726;
var G__26732 = (i__26723_26727 + (1));
seq__26720_26724 = G__26729;
chunk__26721_26725 = G__26730;
count__26722_26726 = G__26731;
i__26723_26727 = G__26732;
continue;
} else {
var temp__4657__auto___26733 = cljs.core.seq.call(null,seq__26720_26724);
if(temp__4657__auto___26733){
var seq__26720_26734__$1 = temp__4657__auto___26733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26720_26734__$1)){
var c__19279__auto___26735 = cljs.core.chunk_first.call(null,seq__26720_26734__$1);
var G__26736 = cljs.core.chunk_rest.call(null,seq__26720_26734__$1);
var G__26737 = c__19279__auto___26735;
var G__26738 = cljs.core.count.call(null,c__19279__auto___26735);
var G__26739 = (0);
seq__26720_26724 = G__26736;
chunk__26721_26725 = G__26737;
count__26722_26726 = G__26738;
i__26723_26727 = G__26739;
continue;
} else {
var ns_26740 = cljs.core.first.call(null,seq__26720_26734__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26740);

var G__26741 = cljs.core.next.call(null,seq__26720_26734__$1);
var G__26742 = null;
var G__26743 = (0);
var G__26744 = (0);
seq__26720_26724 = G__26741;
chunk__26721_26725 = G__26742;
count__26722_26726 = G__26743;
i__26723_26727 = G__26744;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18468__auto__ = goog.require__;
if(cljs.core.truth_(or__18468__auto__)){
return or__18468__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26745__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26745 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26746__i = 0, G__26746__a = new Array(arguments.length -  0);
while (G__26746__i < G__26746__a.length) {G__26746__a[G__26746__i] = arguments[G__26746__i + 0]; ++G__26746__i;}
  args = new cljs.core.IndexedSeq(G__26746__a,0);
} 
return G__26745__delegate.call(this,args);};
G__26745.cljs$lang$maxFixedArity = 0;
G__26745.cljs$lang$applyTo = (function (arglist__26747){
var args = cljs.core.seq(arglist__26747);
return G__26745__delegate(args);
});
G__26745.cljs$core$IFn$_invoke$arity$variadic = G__26745__delegate;
return G__26745;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26749 = cljs.core._EQ_;
var expr__26750 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26749.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26750))){
var path_parts = ((function (pred__26749,expr__26750){
return (function (p1__26748_SHARP_){
return clojure.string.split.call(null,p1__26748_SHARP_,/[\/\\]/);
});})(pred__26749,expr__26750))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26749,expr__26750){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26752){if((e26752 instanceof Error)){
var e = e26752;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26752;

}
}})());
});
;})(path_parts,sep,root,pred__26749,expr__26750))
} else {
if(cljs.core.truth_(pred__26749.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26750))){
return ((function (pred__26749,expr__26750){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26749,expr__26750){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26749,expr__26750))
);

return deferred.addErrback(((function (deferred,pred__26749,expr__26750){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26749,expr__26750))
);
});
;})(pred__26749,expr__26750))
} else {
return ((function (pred__26749,expr__26750){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26749,expr__26750))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26753,callback){
var map__26756 = p__26753;
var map__26756__$1 = ((((!((map__26756 == null)))?((((map__26756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26756):map__26756);
var file_msg = map__26756__$1;
var request_url = cljs.core.get.call(null,map__26756__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26756,map__26756__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26756,map__26756__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto__){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto__){
return (function (state_26780){
var state_val_26781 = (state_26780[(1)]);
if((state_val_26781 === (7))){
var inst_26776 = (state_26780[(2)]);
var state_26780__$1 = state_26780;
var statearr_26782_26802 = state_26780__$1;
(statearr_26782_26802[(2)] = inst_26776);

(statearr_26782_26802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (1))){
var state_26780__$1 = state_26780;
var statearr_26783_26803 = state_26780__$1;
(statearr_26783_26803[(2)] = null);

(statearr_26783_26803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (4))){
var inst_26760 = (state_26780[(7)]);
var inst_26760__$1 = (state_26780[(2)]);
var state_26780__$1 = (function (){var statearr_26784 = state_26780;
(statearr_26784[(7)] = inst_26760__$1);

return statearr_26784;
})();
if(cljs.core.truth_(inst_26760__$1)){
var statearr_26785_26804 = state_26780__$1;
(statearr_26785_26804[(1)] = (5));

} else {
var statearr_26786_26805 = state_26780__$1;
(statearr_26786_26805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (6))){
var state_26780__$1 = state_26780;
var statearr_26787_26806 = state_26780__$1;
(statearr_26787_26806[(2)] = null);

(statearr_26787_26806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (3))){
var inst_26778 = (state_26780[(2)]);
var state_26780__$1 = state_26780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26780__$1,inst_26778);
} else {
if((state_val_26781 === (2))){
var state_26780__$1 = state_26780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26780__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26781 === (11))){
var inst_26772 = (state_26780[(2)]);
var state_26780__$1 = (function (){var statearr_26788 = state_26780;
(statearr_26788[(8)] = inst_26772);

return statearr_26788;
})();
var statearr_26789_26807 = state_26780__$1;
(statearr_26789_26807[(2)] = null);

(statearr_26789_26807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (9))){
var inst_26766 = (state_26780[(9)]);
var inst_26764 = (state_26780[(10)]);
var inst_26768 = inst_26766.call(null,inst_26764);
var state_26780__$1 = state_26780;
var statearr_26790_26808 = state_26780__$1;
(statearr_26790_26808[(2)] = inst_26768);

(statearr_26790_26808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (5))){
var inst_26760 = (state_26780[(7)]);
var inst_26762 = figwheel.client.file_reloading.blocking_load.call(null,inst_26760);
var state_26780__$1 = state_26780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26780__$1,(8),inst_26762);
} else {
if((state_val_26781 === (10))){
var inst_26764 = (state_26780[(10)]);
var inst_26770 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26764);
var state_26780__$1 = state_26780;
var statearr_26791_26809 = state_26780__$1;
(statearr_26791_26809[(2)] = inst_26770);

(statearr_26791_26809[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (8))){
var inst_26760 = (state_26780[(7)]);
var inst_26766 = (state_26780[(9)]);
var inst_26764 = (state_26780[(2)]);
var inst_26765 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26766__$1 = cljs.core.get.call(null,inst_26765,inst_26760);
var state_26780__$1 = (function (){var statearr_26792 = state_26780;
(statearr_26792[(9)] = inst_26766__$1);

(statearr_26792[(10)] = inst_26764);

return statearr_26792;
})();
if(cljs.core.truth_(inst_26766__$1)){
var statearr_26793_26810 = state_26780__$1;
(statearr_26793_26810[(1)] = (9));

} else {
var statearr_26794_26811 = state_26780__$1;
(statearr_26794_26811[(1)] = (10));

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
});})(c__23608__auto__))
;
return ((function (switch__23496__auto__,c__23608__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23497__auto__ = null;
var figwheel$client$file_reloading$state_machine__23497__auto____0 = (function (){
var statearr_26798 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26798[(0)] = figwheel$client$file_reloading$state_machine__23497__auto__);

(statearr_26798[(1)] = (1));

return statearr_26798;
});
var figwheel$client$file_reloading$state_machine__23497__auto____1 = (function (state_26780){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_26780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e26799){if((e26799 instanceof Object)){
var ex__23500__auto__ = e26799;
var statearr_26800_26812 = state_26780;
(statearr_26800_26812[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26813 = state_26780;
state_26780 = G__26813;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23497__auto__ = function(state_26780){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23497__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23497__auto____1.call(this,state_26780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23497__auto____0;
figwheel$client$file_reloading$state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23497__auto____1;
return figwheel$client$file_reloading$state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto__))
})();
var state__23610__auto__ = (function (){var statearr_26801 = f__23609__auto__.call(null);
(statearr_26801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto__);

return statearr_26801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto__))
);

return c__23608__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26814,callback){
var map__26817 = p__26814;
var map__26817__$1 = ((((!((map__26817 == null)))?((((map__26817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26817):map__26817);
var file_msg = map__26817__$1;
var namespace = cljs.core.get.call(null,map__26817__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26817,map__26817__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26817,map__26817__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26819){
var map__26822 = p__26819;
var map__26822__$1 = ((((!((map__26822 == null)))?((((map__26822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26822):map__26822);
var file_msg = map__26822__$1;
var namespace = cljs.core.get.call(null,map__26822__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18456__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18456__auto__){
var or__18468__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18468__auto__)){
return or__18468__auto__;
} else {
var or__18468__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18468__auto____$1)){
return or__18468__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18456__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26824,callback){
var map__26827 = p__26824;
var map__26827__$1 = ((((!((map__26827 == null)))?((((map__26827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26827):map__26827);
var file_msg = map__26827__$1;
var request_url = cljs.core.get.call(null,map__26827__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26827__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23608__auto___26915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto___26915,out){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto___26915,out){
return (function (state_26897){
var state_val_26898 = (state_26897[(1)]);
if((state_val_26898 === (1))){
var inst_26875 = cljs.core.nth.call(null,files,(0),null);
var inst_26876 = cljs.core.nthnext.call(null,files,(1));
var inst_26877 = files;
var state_26897__$1 = (function (){var statearr_26899 = state_26897;
(statearr_26899[(7)] = inst_26875);

(statearr_26899[(8)] = inst_26876);

(statearr_26899[(9)] = inst_26877);

return statearr_26899;
})();
var statearr_26900_26916 = state_26897__$1;
(statearr_26900_26916[(2)] = null);

(statearr_26900_26916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (2))){
var inst_26877 = (state_26897[(9)]);
var inst_26880 = (state_26897[(10)]);
var inst_26880__$1 = cljs.core.nth.call(null,inst_26877,(0),null);
var inst_26881 = cljs.core.nthnext.call(null,inst_26877,(1));
var inst_26882 = (inst_26880__$1 == null);
var inst_26883 = cljs.core.not.call(null,inst_26882);
var state_26897__$1 = (function (){var statearr_26901 = state_26897;
(statearr_26901[(11)] = inst_26881);

(statearr_26901[(10)] = inst_26880__$1);

return statearr_26901;
})();
if(inst_26883){
var statearr_26902_26917 = state_26897__$1;
(statearr_26902_26917[(1)] = (4));

} else {
var statearr_26903_26918 = state_26897__$1;
(statearr_26903_26918[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (3))){
var inst_26895 = (state_26897[(2)]);
var state_26897__$1 = state_26897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26897__$1,inst_26895);
} else {
if((state_val_26898 === (4))){
var inst_26880 = (state_26897[(10)]);
var inst_26885 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26880);
var state_26897__$1 = state_26897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26897__$1,(7),inst_26885);
} else {
if((state_val_26898 === (5))){
var inst_26891 = cljs.core.async.close_BANG_.call(null,out);
var state_26897__$1 = state_26897;
var statearr_26904_26919 = state_26897__$1;
(statearr_26904_26919[(2)] = inst_26891);

(statearr_26904_26919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (6))){
var inst_26893 = (state_26897[(2)]);
var state_26897__$1 = state_26897;
var statearr_26905_26920 = state_26897__$1;
(statearr_26905_26920[(2)] = inst_26893);

(statearr_26905_26920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (7))){
var inst_26881 = (state_26897[(11)]);
var inst_26887 = (state_26897[(2)]);
var inst_26888 = cljs.core.async.put_BANG_.call(null,out,inst_26887);
var inst_26877 = inst_26881;
var state_26897__$1 = (function (){var statearr_26906 = state_26897;
(statearr_26906[(12)] = inst_26888);

(statearr_26906[(9)] = inst_26877);

return statearr_26906;
})();
var statearr_26907_26921 = state_26897__$1;
(statearr_26907_26921[(2)] = null);

(statearr_26907_26921[(1)] = (2));


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
});})(c__23608__auto___26915,out))
;
return ((function (switch__23496__auto__,c__23608__auto___26915,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23497__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23497__auto____0 = (function (){
var statearr_26911 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26911[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23497__auto__);

(statearr_26911[(1)] = (1));

return statearr_26911;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23497__auto____1 = (function (state_26897){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_26897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e26912){if((e26912 instanceof Object)){
var ex__23500__auto__ = e26912;
var statearr_26913_26922 = state_26897;
(statearr_26913_26922[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26923 = state_26897;
state_26897 = G__26923;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23497__auto__ = function(state_26897){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23497__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23497__auto____1.call(this,state_26897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23497__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23497__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto___26915,out))
})();
var state__23610__auto__ = (function (){var statearr_26914 = f__23609__auto__.call(null);
(statearr_26914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto___26915);

return statearr_26914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto___26915,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26924,opts){
var map__26928 = p__26924;
var map__26928__$1 = ((((!((map__26928 == null)))?((((map__26928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26928):map__26928);
var eval_body__$1 = cljs.core.get.call(null,map__26928__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26928__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18456__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18456__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18456__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26930){var e = e26930;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26931_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26931_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26936){
var vec__26937 = p__26936;
var k = cljs.core.nth.call(null,vec__26937,(0),null);
var v = cljs.core.nth.call(null,vec__26937,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26938){
var vec__26939 = p__26938;
var k = cljs.core.nth.call(null,vec__26939,(0),null);
var v = cljs.core.nth.call(null,vec__26939,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26943,p__26944){
var map__27191 = p__26943;
var map__27191__$1 = ((((!((map__27191 == null)))?((((map__27191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27191):map__27191);
var opts = map__27191__$1;
var before_jsload = cljs.core.get.call(null,map__27191__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27191__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27191__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27192 = p__26944;
var map__27192__$1 = ((((!((map__27192 == null)))?((((map__27192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27192):map__27192);
var msg = map__27192__$1;
var files = cljs.core.get.call(null,map__27192__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27192__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27192__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23608__auto__,map__27191,map__27191__$1,opts,before_jsload,on_jsload,reload_dependents,map__27192,map__27192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23609__auto__ = (function (){var switch__23496__auto__ = ((function (c__23608__auto__,map__27191,map__27191__$1,opts,before_jsload,on_jsload,reload_dependents,map__27192,map__27192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27345){
var state_val_27346 = (state_27345[(1)]);
if((state_val_27346 === (7))){
var inst_27209 = (state_27345[(7)]);
var inst_27207 = (state_27345[(8)]);
var inst_27208 = (state_27345[(9)]);
var inst_27206 = (state_27345[(10)]);
var inst_27214 = cljs.core._nth.call(null,inst_27207,inst_27209);
var inst_27215 = figwheel.client.file_reloading.eval_body.call(null,inst_27214,opts);
var inst_27216 = (inst_27209 + (1));
var tmp27347 = inst_27207;
var tmp27348 = inst_27208;
var tmp27349 = inst_27206;
var inst_27206__$1 = tmp27349;
var inst_27207__$1 = tmp27347;
var inst_27208__$1 = tmp27348;
var inst_27209__$1 = inst_27216;
var state_27345__$1 = (function (){var statearr_27350 = state_27345;
(statearr_27350[(7)] = inst_27209__$1);

(statearr_27350[(11)] = inst_27215);

(statearr_27350[(8)] = inst_27207__$1);

(statearr_27350[(9)] = inst_27208__$1);

(statearr_27350[(10)] = inst_27206__$1);

return statearr_27350;
})();
var statearr_27351_27437 = state_27345__$1;
(statearr_27351_27437[(2)] = null);

(statearr_27351_27437[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (20))){
var inst_27249 = (state_27345[(12)]);
var inst_27257 = figwheel.client.file_reloading.sort_files.call(null,inst_27249);
var state_27345__$1 = state_27345;
var statearr_27352_27438 = state_27345__$1;
(statearr_27352_27438[(2)] = inst_27257);

(statearr_27352_27438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (27))){
var state_27345__$1 = state_27345;
var statearr_27353_27439 = state_27345__$1;
(statearr_27353_27439[(2)] = null);

(statearr_27353_27439[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (1))){
var inst_27198 = (state_27345[(13)]);
var inst_27195 = before_jsload.call(null,files);
var inst_27196 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27197 = (function (){return ((function (inst_27198,inst_27195,inst_27196,state_val_27346,c__23608__auto__,map__27191,map__27191__$1,opts,before_jsload,on_jsload,reload_dependents,map__27192,map__27192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26940_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26940_SHARP_);
});
;})(inst_27198,inst_27195,inst_27196,state_val_27346,c__23608__auto__,map__27191,map__27191__$1,opts,before_jsload,on_jsload,reload_dependents,map__27192,map__27192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27198__$1 = cljs.core.filter.call(null,inst_27197,files);
var inst_27199 = cljs.core.not_empty.call(null,inst_27198__$1);
var state_27345__$1 = (function (){var statearr_27354 = state_27345;
(statearr_27354[(14)] = inst_27195);

(statearr_27354[(15)] = inst_27196);

(statearr_27354[(13)] = inst_27198__$1);

return statearr_27354;
})();
if(cljs.core.truth_(inst_27199)){
var statearr_27355_27440 = state_27345__$1;
(statearr_27355_27440[(1)] = (2));

} else {
var statearr_27356_27441 = state_27345__$1;
(statearr_27356_27441[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (24))){
var state_27345__$1 = state_27345;
var statearr_27357_27442 = state_27345__$1;
(statearr_27357_27442[(2)] = null);

(statearr_27357_27442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (39))){
var inst_27299 = (state_27345[(16)]);
var state_27345__$1 = state_27345;
var statearr_27358_27443 = state_27345__$1;
(statearr_27358_27443[(2)] = inst_27299);

(statearr_27358_27443[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (46))){
var inst_27340 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27359_27444 = state_27345__$1;
(statearr_27359_27444[(2)] = inst_27340);

(statearr_27359_27444[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (4))){
var inst_27243 = (state_27345[(2)]);
var inst_27244 = cljs.core.List.EMPTY;
var inst_27245 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27244);
var inst_27246 = (function (){return ((function (inst_27243,inst_27244,inst_27245,state_val_27346,c__23608__auto__,map__27191,map__27191__$1,opts,before_jsload,on_jsload,reload_dependents,map__27192,map__27192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26941_SHARP_){
var and__18456__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26941_SHARP_);
if(cljs.core.truth_(and__18456__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26941_SHARP_));
} else {
return and__18456__auto__;
}
});
;})(inst_27243,inst_27244,inst_27245,state_val_27346,c__23608__auto__,map__27191,map__27191__$1,opts,before_jsload,on_jsload,reload_dependents,map__27192,map__27192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27247 = cljs.core.filter.call(null,inst_27246,files);
var inst_27248 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27249 = cljs.core.concat.call(null,inst_27247,inst_27248);
var state_27345__$1 = (function (){var statearr_27360 = state_27345;
(statearr_27360[(12)] = inst_27249);

(statearr_27360[(17)] = inst_27243);

(statearr_27360[(18)] = inst_27245);

return statearr_27360;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27361_27445 = state_27345__$1;
(statearr_27361_27445[(1)] = (16));

} else {
var statearr_27362_27446 = state_27345__$1;
(statearr_27362_27446[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (15))){
var inst_27233 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27363_27447 = state_27345__$1;
(statearr_27363_27447[(2)] = inst_27233);

(statearr_27363_27447[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (21))){
var inst_27259 = (state_27345[(19)]);
var inst_27259__$1 = (state_27345[(2)]);
var inst_27260 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27259__$1);
var state_27345__$1 = (function (){var statearr_27364 = state_27345;
(statearr_27364[(19)] = inst_27259__$1);

return statearr_27364;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27345__$1,(22),inst_27260);
} else {
if((state_val_27346 === (31))){
var inst_27343 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27345__$1,inst_27343);
} else {
if((state_val_27346 === (32))){
var inst_27299 = (state_27345[(16)]);
var inst_27304 = inst_27299.cljs$lang$protocol_mask$partition0$;
var inst_27305 = (inst_27304 & (64));
var inst_27306 = inst_27299.cljs$core$ISeq$;
var inst_27307 = (inst_27305) || (inst_27306);
var state_27345__$1 = state_27345;
if(cljs.core.truth_(inst_27307)){
var statearr_27365_27448 = state_27345__$1;
(statearr_27365_27448[(1)] = (35));

} else {
var statearr_27366_27449 = state_27345__$1;
(statearr_27366_27449[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (40))){
var inst_27320 = (state_27345[(20)]);
var inst_27319 = (state_27345[(2)]);
var inst_27320__$1 = cljs.core.get.call(null,inst_27319,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27321 = cljs.core.get.call(null,inst_27319,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27322 = cljs.core.not_empty.call(null,inst_27320__$1);
var state_27345__$1 = (function (){var statearr_27367 = state_27345;
(statearr_27367[(20)] = inst_27320__$1);

(statearr_27367[(21)] = inst_27321);

return statearr_27367;
})();
if(cljs.core.truth_(inst_27322)){
var statearr_27368_27450 = state_27345__$1;
(statearr_27368_27450[(1)] = (41));

} else {
var statearr_27369_27451 = state_27345__$1;
(statearr_27369_27451[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (33))){
var state_27345__$1 = state_27345;
var statearr_27370_27452 = state_27345__$1;
(statearr_27370_27452[(2)] = false);

(statearr_27370_27452[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (13))){
var inst_27219 = (state_27345[(22)]);
var inst_27223 = cljs.core.chunk_first.call(null,inst_27219);
var inst_27224 = cljs.core.chunk_rest.call(null,inst_27219);
var inst_27225 = cljs.core.count.call(null,inst_27223);
var inst_27206 = inst_27224;
var inst_27207 = inst_27223;
var inst_27208 = inst_27225;
var inst_27209 = (0);
var state_27345__$1 = (function (){var statearr_27371 = state_27345;
(statearr_27371[(7)] = inst_27209);

(statearr_27371[(8)] = inst_27207);

(statearr_27371[(9)] = inst_27208);

(statearr_27371[(10)] = inst_27206);

return statearr_27371;
})();
var statearr_27372_27453 = state_27345__$1;
(statearr_27372_27453[(2)] = null);

(statearr_27372_27453[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (22))){
var inst_27259 = (state_27345[(19)]);
var inst_27263 = (state_27345[(23)]);
var inst_27262 = (state_27345[(24)]);
var inst_27267 = (state_27345[(25)]);
var inst_27262__$1 = (state_27345[(2)]);
var inst_27263__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27262__$1);
var inst_27264 = (function (){var all_files = inst_27259;
var res_SINGLEQUOTE_ = inst_27262__$1;
var res = inst_27263__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27259,inst_27263,inst_27262,inst_27267,inst_27262__$1,inst_27263__$1,state_val_27346,c__23608__auto__,map__27191,map__27191__$1,opts,before_jsload,on_jsload,reload_dependents,map__27192,map__27192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26942_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26942_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27259,inst_27263,inst_27262,inst_27267,inst_27262__$1,inst_27263__$1,state_val_27346,c__23608__auto__,map__27191,map__27191__$1,opts,before_jsload,on_jsload,reload_dependents,map__27192,map__27192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27265 = cljs.core.filter.call(null,inst_27264,inst_27262__$1);
var inst_27266 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27267__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27266);
var inst_27268 = cljs.core.not_empty.call(null,inst_27267__$1);
var state_27345__$1 = (function (){var statearr_27373 = state_27345;
(statearr_27373[(26)] = inst_27265);

(statearr_27373[(23)] = inst_27263__$1);

(statearr_27373[(24)] = inst_27262__$1);

(statearr_27373[(25)] = inst_27267__$1);

return statearr_27373;
})();
if(cljs.core.truth_(inst_27268)){
var statearr_27374_27454 = state_27345__$1;
(statearr_27374_27454[(1)] = (23));

} else {
var statearr_27375_27455 = state_27345__$1;
(statearr_27375_27455[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (36))){
var state_27345__$1 = state_27345;
var statearr_27376_27456 = state_27345__$1;
(statearr_27376_27456[(2)] = false);

(statearr_27376_27456[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (41))){
var inst_27320 = (state_27345[(20)]);
var inst_27324 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27325 = cljs.core.map.call(null,inst_27324,inst_27320);
var inst_27326 = cljs.core.pr_str.call(null,inst_27325);
var inst_27327 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27326)].join('');
var inst_27328 = figwheel.client.utils.log.call(null,inst_27327);
var state_27345__$1 = state_27345;
var statearr_27377_27457 = state_27345__$1;
(statearr_27377_27457[(2)] = inst_27328);

(statearr_27377_27457[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (43))){
var inst_27321 = (state_27345[(21)]);
var inst_27331 = (state_27345[(2)]);
var inst_27332 = cljs.core.not_empty.call(null,inst_27321);
var state_27345__$1 = (function (){var statearr_27378 = state_27345;
(statearr_27378[(27)] = inst_27331);

return statearr_27378;
})();
if(cljs.core.truth_(inst_27332)){
var statearr_27379_27458 = state_27345__$1;
(statearr_27379_27458[(1)] = (44));

} else {
var statearr_27380_27459 = state_27345__$1;
(statearr_27380_27459[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (29))){
var inst_27265 = (state_27345[(26)]);
var inst_27259 = (state_27345[(19)]);
var inst_27263 = (state_27345[(23)]);
var inst_27262 = (state_27345[(24)]);
var inst_27299 = (state_27345[(16)]);
var inst_27267 = (state_27345[(25)]);
var inst_27295 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27298 = (function (){var all_files = inst_27259;
var res_SINGLEQUOTE_ = inst_27262;
var res = inst_27263;
var files_not_loaded = inst_27265;
var dependencies_that_loaded = inst_27267;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27265,inst_27259,inst_27263,inst_27262,inst_27299,inst_27267,inst_27295,state_val_27346,c__23608__auto__,map__27191,map__27191__$1,opts,before_jsload,on_jsload,reload_dependents,map__27192,map__27192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27297){
var map__27381 = p__27297;
var map__27381__$1 = ((((!((map__27381 == null)))?((((map__27381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27381):map__27381);
var namespace = cljs.core.get.call(null,map__27381__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27265,inst_27259,inst_27263,inst_27262,inst_27299,inst_27267,inst_27295,state_val_27346,c__23608__auto__,map__27191,map__27191__$1,opts,before_jsload,on_jsload,reload_dependents,map__27192,map__27192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27299__$1 = cljs.core.group_by.call(null,inst_27298,inst_27265);
var inst_27301 = (inst_27299__$1 == null);
var inst_27302 = cljs.core.not.call(null,inst_27301);
var state_27345__$1 = (function (){var statearr_27383 = state_27345;
(statearr_27383[(28)] = inst_27295);

(statearr_27383[(16)] = inst_27299__$1);

return statearr_27383;
})();
if(inst_27302){
var statearr_27384_27460 = state_27345__$1;
(statearr_27384_27460[(1)] = (32));

} else {
var statearr_27385_27461 = state_27345__$1;
(statearr_27385_27461[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (44))){
var inst_27321 = (state_27345[(21)]);
var inst_27334 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27321);
var inst_27335 = cljs.core.pr_str.call(null,inst_27334);
var inst_27336 = [cljs.core.str("not required: "),cljs.core.str(inst_27335)].join('');
var inst_27337 = figwheel.client.utils.log.call(null,inst_27336);
var state_27345__$1 = state_27345;
var statearr_27386_27462 = state_27345__$1;
(statearr_27386_27462[(2)] = inst_27337);

(statearr_27386_27462[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (6))){
var inst_27240 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27387_27463 = state_27345__$1;
(statearr_27387_27463[(2)] = inst_27240);

(statearr_27387_27463[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (28))){
var inst_27265 = (state_27345[(26)]);
var inst_27292 = (state_27345[(2)]);
var inst_27293 = cljs.core.not_empty.call(null,inst_27265);
var state_27345__$1 = (function (){var statearr_27388 = state_27345;
(statearr_27388[(29)] = inst_27292);

return statearr_27388;
})();
if(cljs.core.truth_(inst_27293)){
var statearr_27389_27464 = state_27345__$1;
(statearr_27389_27464[(1)] = (29));

} else {
var statearr_27390_27465 = state_27345__$1;
(statearr_27390_27465[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (25))){
var inst_27263 = (state_27345[(23)]);
var inst_27279 = (state_27345[(2)]);
var inst_27280 = cljs.core.not_empty.call(null,inst_27263);
var state_27345__$1 = (function (){var statearr_27391 = state_27345;
(statearr_27391[(30)] = inst_27279);

return statearr_27391;
})();
if(cljs.core.truth_(inst_27280)){
var statearr_27392_27466 = state_27345__$1;
(statearr_27392_27466[(1)] = (26));

} else {
var statearr_27393_27467 = state_27345__$1;
(statearr_27393_27467[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (34))){
var inst_27314 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
if(cljs.core.truth_(inst_27314)){
var statearr_27394_27468 = state_27345__$1;
(statearr_27394_27468[(1)] = (38));

} else {
var statearr_27395_27469 = state_27345__$1;
(statearr_27395_27469[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (17))){
var state_27345__$1 = state_27345;
var statearr_27396_27470 = state_27345__$1;
(statearr_27396_27470[(2)] = recompile_dependents);

(statearr_27396_27470[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (3))){
var state_27345__$1 = state_27345;
var statearr_27397_27471 = state_27345__$1;
(statearr_27397_27471[(2)] = null);

(statearr_27397_27471[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (12))){
var inst_27236 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27398_27472 = state_27345__$1;
(statearr_27398_27472[(2)] = inst_27236);

(statearr_27398_27472[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (2))){
var inst_27198 = (state_27345[(13)]);
var inst_27205 = cljs.core.seq.call(null,inst_27198);
var inst_27206 = inst_27205;
var inst_27207 = null;
var inst_27208 = (0);
var inst_27209 = (0);
var state_27345__$1 = (function (){var statearr_27399 = state_27345;
(statearr_27399[(7)] = inst_27209);

(statearr_27399[(8)] = inst_27207);

(statearr_27399[(9)] = inst_27208);

(statearr_27399[(10)] = inst_27206);

return statearr_27399;
})();
var statearr_27400_27473 = state_27345__$1;
(statearr_27400_27473[(2)] = null);

(statearr_27400_27473[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (23))){
var inst_27265 = (state_27345[(26)]);
var inst_27259 = (state_27345[(19)]);
var inst_27263 = (state_27345[(23)]);
var inst_27262 = (state_27345[(24)]);
var inst_27267 = (state_27345[(25)]);
var inst_27270 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27272 = (function (){var all_files = inst_27259;
var res_SINGLEQUOTE_ = inst_27262;
var res = inst_27263;
var files_not_loaded = inst_27265;
var dependencies_that_loaded = inst_27267;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27265,inst_27259,inst_27263,inst_27262,inst_27267,inst_27270,state_val_27346,c__23608__auto__,map__27191,map__27191__$1,opts,before_jsload,on_jsload,reload_dependents,map__27192,map__27192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27271){
var map__27401 = p__27271;
var map__27401__$1 = ((((!((map__27401 == null)))?((((map__27401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27401):map__27401);
var request_url = cljs.core.get.call(null,map__27401__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27265,inst_27259,inst_27263,inst_27262,inst_27267,inst_27270,state_val_27346,c__23608__auto__,map__27191,map__27191__$1,opts,before_jsload,on_jsload,reload_dependents,map__27192,map__27192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27273 = cljs.core.reverse.call(null,inst_27267);
var inst_27274 = cljs.core.map.call(null,inst_27272,inst_27273);
var inst_27275 = cljs.core.pr_str.call(null,inst_27274);
var inst_27276 = figwheel.client.utils.log.call(null,inst_27275);
var state_27345__$1 = (function (){var statearr_27403 = state_27345;
(statearr_27403[(31)] = inst_27270);

return statearr_27403;
})();
var statearr_27404_27474 = state_27345__$1;
(statearr_27404_27474[(2)] = inst_27276);

(statearr_27404_27474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (35))){
var state_27345__$1 = state_27345;
var statearr_27405_27475 = state_27345__$1;
(statearr_27405_27475[(2)] = true);

(statearr_27405_27475[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (19))){
var inst_27249 = (state_27345[(12)]);
var inst_27255 = figwheel.client.file_reloading.expand_files.call(null,inst_27249);
var state_27345__$1 = state_27345;
var statearr_27406_27476 = state_27345__$1;
(statearr_27406_27476[(2)] = inst_27255);

(statearr_27406_27476[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (11))){
var state_27345__$1 = state_27345;
var statearr_27407_27477 = state_27345__$1;
(statearr_27407_27477[(2)] = null);

(statearr_27407_27477[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (9))){
var inst_27238 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27408_27478 = state_27345__$1;
(statearr_27408_27478[(2)] = inst_27238);

(statearr_27408_27478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (5))){
var inst_27209 = (state_27345[(7)]);
var inst_27208 = (state_27345[(9)]);
var inst_27211 = (inst_27209 < inst_27208);
var inst_27212 = inst_27211;
var state_27345__$1 = state_27345;
if(cljs.core.truth_(inst_27212)){
var statearr_27409_27479 = state_27345__$1;
(statearr_27409_27479[(1)] = (7));

} else {
var statearr_27410_27480 = state_27345__$1;
(statearr_27410_27480[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (14))){
var inst_27219 = (state_27345[(22)]);
var inst_27228 = cljs.core.first.call(null,inst_27219);
var inst_27229 = figwheel.client.file_reloading.eval_body.call(null,inst_27228,opts);
var inst_27230 = cljs.core.next.call(null,inst_27219);
var inst_27206 = inst_27230;
var inst_27207 = null;
var inst_27208 = (0);
var inst_27209 = (0);
var state_27345__$1 = (function (){var statearr_27411 = state_27345;
(statearr_27411[(7)] = inst_27209);

(statearr_27411[(32)] = inst_27229);

(statearr_27411[(8)] = inst_27207);

(statearr_27411[(9)] = inst_27208);

(statearr_27411[(10)] = inst_27206);

return statearr_27411;
})();
var statearr_27412_27481 = state_27345__$1;
(statearr_27412_27481[(2)] = null);

(statearr_27412_27481[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (45))){
var state_27345__$1 = state_27345;
var statearr_27413_27482 = state_27345__$1;
(statearr_27413_27482[(2)] = null);

(statearr_27413_27482[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (26))){
var inst_27265 = (state_27345[(26)]);
var inst_27259 = (state_27345[(19)]);
var inst_27263 = (state_27345[(23)]);
var inst_27262 = (state_27345[(24)]);
var inst_27267 = (state_27345[(25)]);
var inst_27282 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27284 = (function (){var all_files = inst_27259;
var res_SINGLEQUOTE_ = inst_27262;
var res = inst_27263;
var files_not_loaded = inst_27265;
var dependencies_that_loaded = inst_27267;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27265,inst_27259,inst_27263,inst_27262,inst_27267,inst_27282,state_val_27346,c__23608__auto__,map__27191,map__27191__$1,opts,before_jsload,on_jsload,reload_dependents,map__27192,map__27192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27283){
var map__27414 = p__27283;
var map__27414__$1 = ((((!((map__27414 == null)))?((((map__27414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27414):map__27414);
var namespace = cljs.core.get.call(null,map__27414__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27414__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27265,inst_27259,inst_27263,inst_27262,inst_27267,inst_27282,state_val_27346,c__23608__auto__,map__27191,map__27191__$1,opts,before_jsload,on_jsload,reload_dependents,map__27192,map__27192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27285 = cljs.core.map.call(null,inst_27284,inst_27263);
var inst_27286 = cljs.core.pr_str.call(null,inst_27285);
var inst_27287 = figwheel.client.utils.log.call(null,inst_27286);
var inst_27288 = (function (){var all_files = inst_27259;
var res_SINGLEQUOTE_ = inst_27262;
var res = inst_27263;
var files_not_loaded = inst_27265;
var dependencies_that_loaded = inst_27267;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27265,inst_27259,inst_27263,inst_27262,inst_27267,inst_27282,inst_27284,inst_27285,inst_27286,inst_27287,state_val_27346,c__23608__auto__,map__27191,map__27191__$1,opts,before_jsload,on_jsload,reload_dependents,map__27192,map__27192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27265,inst_27259,inst_27263,inst_27262,inst_27267,inst_27282,inst_27284,inst_27285,inst_27286,inst_27287,state_val_27346,c__23608__auto__,map__27191,map__27191__$1,opts,before_jsload,on_jsload,reload_dependents,map__27192,map__27192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27289 = setTimeout(inst_27288,(10));
var state_27345__$1 = (function (){var statearr_27416 = state_27345;
(statearr_27416[(33)] = inst_27282);

(statearr_27416[(34)] = inst_27287);

return statearr_27416;
})();
var statearr_27417_27483 = state_27345__$1;
(statearr_27417_27483[(2)] = inst_27289);

(statearr_27417_27483[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (16))){
var state_27345__$1 = state_27345;
var statearr_27418_27484 = state_27345__$1;
(statearr_27418_27484[(2)] = reload_dependents);

(statearr_27418_27484[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (38))){
var inst_27299 = (state_27345[(16)]);
var inst_27316 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27299);
var state_27345__$1 = state_27345;
var statearr_27419_27485 = state_27345__$1;
(statearr_27419_27485[(2)] = inst_27316);

(statearr_27419_27485[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (30))){
var state_27345__$1 = state_27345;
var statearr_27420_27486 = state_27345__$1;
(statearr_27420_27486[(2)] = null);

(statearr_27420_27486[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (10))){
var inst_27219 = (state_27345[(22)]);
var inst_27221 = cljs.core.chunked_seq_QMARK_.call(null,inst_27219);
var state_27345__$1 = state_27345;
if(inst_27221){
var statearr_27421_27487 = state_27345__$1;
(statearr_27421_27487[(1)] = (13));

} else {
var statearr_27422_27488 = state_27345__$1;
(statearr_27422_27488[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (18))){
var inst_27253 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
if(cljs.core.truth_(inst_27253)){
var statearr_27423_27489 = state_27345__$1;
(statearr_27423_27489[(1)] = (19));

} else {
var statearr_27424_27490 = state_27345__$1;
(statearr_27424_27490[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (42))){
var state_27345__$1 = state_27345;
var statearr_27425_27491 = state_27345__$1;
(statearr_27425_27491[(2)] = null);

(statearr_27425_27491[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (37))){
var inst_27311 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27426_27492 = state_27345__$1;
(statearr_27426_27492[(2)] = inst_27311);

(statearr_27426_27492[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (8))){
var inst_27219 = (state_27345[(22)]);
var inst_27206 = (state_27345[(10)]);
var inst_27219__$1 = cljs.core.seq.call(null,inst_27206);
var state_27345__$1 = (function (){var statearr_27427 = state_27345;
(statearr_27427[(22)] = inst_27219__$1);

return statearr_27427;
})();
if(inst_27219__$1){
var statearr_27428_27493 = state_27345__$1;
(statearr_27428_27493[(1)] = (10));

} else {
var statearr_27429_27494 = state_27345__$1;
(statearr_27429_27494[(1)] = (11));

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
}
});})(c__23608__auto__,map__27191,map__27191__$1,opts,before_jsload,on_jsload,reload_dependents,map__27192,map__27192__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23496__auto__,c__23608__auto__,map__27191,map__27191__$1,opts,before_jsload,on_jsload,reload_dependents,map__27192,map__27192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23497__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23497__auto____0 = (function (){
var statearr_27433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27433[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23497__auto__);

(statearr_27433[(1)] = (1));

return statearr_27433;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23497__auto____1 = (function (state_27345){
while(true){
var ret_value__23498__auto__ = (function (){try{while(true){
var result__23499__auto__ = switch__23496__auto__.call(null,state_27345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23499__auto__;
}
break;
}
}catch (e27434){if((e27434 instanceof Object)){
var ex__23500__auto__ = e27434;
var statearr_27435_27495 = state_27345;
(statearr_27435_27495[(5)] = ex__23500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27496 = state_27345;
state_27345 = G__27496;
continue;
} else {
return ret_value__23498__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23497__auto__ = function(state_27345){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23497__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23497__auto____1.call(this,state_27345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23497__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23497__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23497__auto__;
})()
;})(switch__23496__auto__,c__23608__auto__,map__27191,map__27191__$1,opts,before_jsload,on_jsload,reload_dependents,map__27192,map__27192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23610__auto__ = (function (){var statearr_27436 = f__23609__auto__.call(null);
(statearr_27436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23608__auto__);

return statearr_27436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(c__23608__auto__,map__27191,map__27191__$1,opts,before_jsload,on_jsload,reload_dependents,map__27192,map__27192__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23608__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27499,link){
var map__27502 = p__27499;
var map__27502__$1 = ((((!((map__27502 == null)))?((((map__27502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27502):map__27502);
var file = cljs.core.get.call(null,map__27502__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__27502,map__27502__$1,file){
return (function (p1__27497_SHARP_,p2__27498_SHARP_){
if(cljs.core._EQ_.call(null,p1__27497_SHARP_,p2__27498_SHARP_)){
return p1__27497_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__27502,map__27502__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27508){
var map__27509 = p__27508;
var map__27509__$1 = ((((!((map__27509 == null)))?((((map__27509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27509):map__27509);
var match_length = cljs.core.get.call(null,map__27509__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27509__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27504_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27504_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27511 = [];
var len__19538__auto___27514 = arguments.length;
var i__19539__auto___27515 = (0);
while(true){
if((i__19539__auto___27515 < len__19538__auto___27514)){
args27511.push((arguments[i__19539__auto___27515]));

var G__27516 = (i__19539__auto___27515 + (1));
i__19539__auto___27515 = G__27516;
continue;
} else {
}
break;
}

var G__27513 = args27511.length;
switch (G__27513) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27511.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27518_SHARP_,p2__27519_SHARP_){
return cljs.core.assoc.call(null,p1__27518_SHARP_,cljs.core.get.call(null,p2__27519_SHARP_,key),p2__27519_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27520){
var map__27523 = p__27520;
var map__27523__$1 = ((((!((map__27523 == null)))?((((map__27523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27523):map__27523);
var f_data = map__27523__$1;
var file = cljs.core.get.call(null,map__27523__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27525,files_msg){
var map__27532 = p__27525;
var map__27532__$1 = ((((!((map__27532 == null)))?((((map__27532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27532):map__27532);
var opts = map__27532__$1;
var on_cssload = cljs.core.get.call(null,map__27532__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27534_27538 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27535_27539 = null;
var count__27536_27540 = (0);
var i__27537_27541 = (0);
while(true){
if((i__27537_27541 < count__27536_27540)){
var f_27542 = cljs.core._nth.call(null,chunk__27535_27539,i__27537_27541);
figwheel.client.file_reloading.reload_css_file.call(null,f_27542);

var G__27543 = seq__27534_27538;
var G__27544 = chunk__27535_27539;
var G__27545 = count__27536_27540;
var G__27546 = (i__27537_27541 + (1));
seq__27534_27538 = G__27543;
chunk__27535_27539 = G__27544;
count__27536_27540 = G__27545;
i__27537_27541 = G__27546;
continue;
} else {
var temp__4657__auto___27547 = cljs.core.seq.call(null,seq__27534_27538);
if(temp__4657__auto___27547){
var seq__27534_27548__$1 = temp__4657__auto___27547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27534_27548__$1)){
var c__19279__auto___27549 = cljs.core.chunk_first.call(null,seq__27534_27548__$1);
var G__27550 = cljs.core.chunk_rest.call(null,seq__27534_27548__$1);
var G__27551 = c__19279__auto___27549;
var G__27552 = cljs.core.count.call(null,c__19279__auto___27549);
var G__27553 = (0);
seq__27534_27538 = G__27550;
chunk__27535_27539 = G__27551;
count__27536_27540 = G__27552;
i__27537_27541 = G__27553;
continue;
} else {
var f_27554 = cljs.core.first.call(null,seq__27534_27548__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27554);

var G__27555 = cljs.core.next.call(null,seq__27534_27548__$1);
var G__27556 = null;
var G__27557 = (0);
var G__27558 = (0);
seq__27534_27538 = G__27555;
chunk__27535_27539 = G__27556;
count__27536_27540 = G__27557;
i__27537_27541 = G__27558;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27532,map__27532__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27532,map__27532__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map