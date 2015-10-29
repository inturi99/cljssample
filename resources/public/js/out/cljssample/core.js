// Compiled by ClojureScript 0.0-2843 {}
goog.provide('cljssample.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('goog.Uri');
goog.require('secretary.core');
goog.require('goog.net.Jsonp');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('goog.style');
cljssample.core.app = goog.dom.getElement("app");
cljssample.core.set_html_BANG_ = (function set_html_BANG_(el,content){
return el.innerHTML = content;
});
cljssample.core.hello = (function hello(name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"hello ",name], null);
});
cljssample.core.page1 = (function page1(body){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),"This is header"], null),body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.footer","div.footer",1103856744),"This is footer"], null)], null);
});
cljssample.core.row = (function row(label,input){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-5","div.col-md-5",1167007965),input], null)], null);
});
cljssample.core.radio = (function radio(label,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.radio","div.radio",1435221667),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),value], null)], null),label], null)], null);
});
cljssample.core.input = (function input(label,type,id){
return cljssample.core.row.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),type,new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null));
});
cljssample.core.registration_template = (function registration_template(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljssample.core.input.call(null,"Title",new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"title","title",636505583))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljssample.core.input.call(null,"URL",new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"url","url",276297046))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljssample.core.input.call(null,"Tags",new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"tags","tags",1771418977))], null)], null);
});
cljssample.core.page = (function page(body){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.padding","div.padding",-352689147)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Book Marks"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljssample.core.registration_template], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-primary.btn","button.btn-primary.btn",89053930),"CreateBookMarks"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.padding","div.padding",-352689147)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-footer","div.page-footer",1491962640),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Copyright \u00A92015 A TechnoIdentity Creations \u2014 All Rights Reserved."], null)], null)], null);
});
});
cljssample.core.search_url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
cljssample.core.home_html = [cljs.core.str("<h1>Wikipedia Search:</h1>"),cljs.core.str("<section>"),cljs.core.str(" <input id=\"query\" placeholder=\"Type your search...\" />"),cljs.core.str("  <button id=\"searchbutton\">Search</button>"),cljs.core.str("  <ul id=\"results\"></ul>"),cljs.core.str("</section>")].join('');
cljssample.core.render_results = (function render_results(results){
var results__$1 = cljs.core.js__GT_clj.call(null,results);
return cljs.core.reduce.call(null,((function (results__$1){
return (function (acc,result){
return [cljs.core.str(acc),cljs.core.str("<li>"),cljs.core.str(result),cljs.core.str("</li>")].join('');
});})(results__$1))
,"",cljs.core.second.call(null,results__$1));
});
cljssample.core.do_jsonp = (function do_jsonp(uri,callback){
var req = (new goog.net.Jsonp((new goog.Uri(uri))));
return req.send(null,callback);
});
var action__8907__auto___8994 = (function (params__8908__auto__){
if(cljs.core.map_QMARK_.call(null,params__8908__auto__)){
var map__8992 = params__8908__auto__;
var map__8992__$1 = ((cljs.core.seq_QMARK_.call(null,map__8992))?cljs.core.apply.call(null,cljs.core.hash_map,map__8992):map__8992);
cljssample.core.set_html_BANG_.call(null,cljssample.core.app,cljssample.core.home_html);

var on_response = ((function (map__8992,map__8992__$1){
return (function (results){
var html = cljssample.core.render_results.call(null,results);
return cljssample.core.set_html_BANG_.call(null,goog.dom.getElement("results"),html);
});})(map__8992,map__8992__$1))
;
var on_search_click = ((function (on_response,map__8992,map__8992__$1){
return (function (e){
var user_query = goog.dom.getElement("query").value;
var searchuri = [cljs.core.str(cljssample.core.search_url),cljs.core.str(user_query)].join('');
return cljssample.core.do_jsonp.call(null,searchuri,on_response);
});})(on_response,map__8992,map__8992__$1))
;
return goog.events.listen(goog.dom.getElement("searchbutton"),"click",on_search_click);
} else {
if(cljs.core.vector_QMARK_.call(null,params__8908__auto__)){
var vec__8993 = params__8908__auto__;
cljssample.core.set_html_BANG_.call(null,cljssample.core.app,cljssample.core.home_html);

var on_response = ((function (vec__8993){
return (function (results){
var html = cljssample.core.render_results.call(null,results);
return cljssample.core.set_html_BANG_.call(null,goog.dom.getElement("results"),html);
});})(vec__8993))
;
var on_search_click = ((function (on_response,vec__8993){
return (function (e){
var user_query = goog.dom.getElement("query").value;
var searchuri = [cljs.core.str(cljssample.core.search_url),cljs.core.str(user_query)].join('');
return cljssample.core.do_jsonp.call(null,searchuri,on_response);
});})(on_response,vec__8993))
;
return goog.events.listen(goog.dom.getElement("searchbutton"),"click",on_search_click);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__8907__auto___8994);

/**
* @param {...*} var_args
*/
cljssample.core.home_path = ((function (action__8907__auto___8994){
return (function() { 
var home_path__delegate = function (args__8906__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__8906__auto__);
};
var home_path = function (var_args){
var args__8906__auto__ = null;
if (arguments.length > 0) {
var G__8995__i = 0, G__8995__a = new Array(arguments.length -  0);
while (G__8995__i < G__8995__a.length) {G__8995__a[G__8995__i] = arguments[G__8995__i + 0]; ++G__8995__i;}
  args__8906__auto__ = new cljs.core.IndexedSeq(G__8995__a,0);
} 
return home_path__delegate.call(this,args__8906__auto__);};
home_path.cljs$lang$maxFixedArity = 0;
home_path.cljs$lang$applyTo = (function (arglist__8996){
var args__8906__auto__ = cljs.core.seq(arglist__8996);
return home_path__delegate(args__8906__auto__);
});
home_path.cljs$core$IFn$_invoke$arity$variadic = home_path__delegate;
return home_path;
})()
;})(action__8907__auto___8994))
;
var action__8907__auto___8999 = (function (params__8908__auto__){
if(cljs.core.map_QMARK_.call(null,params__8908__auto__)){
var map__8997 = params__8908__auto__;
var map__8997__$1 = ((cljs.core.seq_QMARK_.call(null,map__8997))?cljs.core.apply.call(null,cljs.core.hash_map,map__8997):map__8997);
var param = cljs.core.get.call(null,map__8997__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var message = [cljs.core.str("<h1>Parameter in url: <small>"),cljs.core.str(param),cljs.core.str("</small>!</h1>")].join('');
return cljssample.core.set_html_BANG_.call(null,cljssample.core.app,message);
} else {
if(cljs.core.vector_QMARK_.call(null,params__8908__auto__)){
var vec__8998 = params__8908__auto__;
var param = cljs.core.nth.call(null,vec__8998,(0),null);
var message = [cljs.core.str("<h1>Parameter in url: <small>"),cljs.core.str(param),cljs.core.str("</small>!</h1>")].join('');
return cljssample.core.set_html_BANG_.call(null,cljssample.core.app,message);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/:param",action__8907__auto___8999);

/**
* @param {...*} var_args
*/
cljssample.core.some_path = ((function (action__8907__auto___8999){
return (function() { 
var some_path__delegate = function (args__8906__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/:param",args__8906__auto__);
};
var some_path = function (var_args){
var args__8906__auto__ = null;
if (arguments.length > 0) {
var G__9000__i = 0, G__9000__a = new Array(arguments.length -  0);
while (G__9000__i < G__9000__a.length) {G__9000__a[G__9000__i] = arguments[G__9000__i + 0]; ++G__9000__i;}
  args__8906__auto__ = new cljs.core.IndexedSeq(G__9000__a,0);
} 
return some_path__delegate.call(this,args__8906__auto__);};
some_path.cljs$lang$maxFixedArity = 0;
some_path.cljs$lang$applyTo = (function (arglist__9001){
var args__8906__auto__ = cljs.core.seq(arglist__9001);
return some_path__delegate(args__8906__auto__);
});
some_path.cljs$core$IFn$_invoke$arity$variadic = some_path__delegate;
return some_path;
})()
;})(action__8907__auto___8999))
;
var action__8907__auto___9004 = (function (params__8908__auto__){
if(cljs.core.map_QMARK_.call(null,params__8908__auto__)){
var map__9002 = params__8908__auto__;
var map__9002__$1 = ((cljs.core.seq_QMARK_.call(null,map__9002))?cljs.core.apply.call(null,cljs.core.hash_map,map__9002):map__9002);
var name = cljs.core.get.call(null,map__9002__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljssample.core.page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljssample.core.hello,name], null)], null),document.body);
} else {
if(cljs.core.vector_QMARK_.call(null,params__8908__auto__)){
var vec__9003 = params__8908__auto__;
var name = cljs.core.nth.call(null,vec__9003,(0),null);
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljssample.core.page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljssample.core.hello,name], null)], null),document.body);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/hello/:name",action__8907__auto___9004);

/**
* @param {...*} var_args
*/
cljssample.core.hello_path = ((function (action__8907__auto___9004){
return (function() { 
var hello_path__delegate = function (args__8906__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/hello/:name",args__8906__auto__);
};
var hello_path = function (var_args){
var args__8906__auto__ = null;
if (arguments.length > 0) {
var G__9005__i = 0, G__9005__a = new Array(arguments.length -  0);
while (G__9005__i < G__9005__a.length) {G__9005__a[G__9005__i] = arguments[G__9005__i + 0]; ++G__9005__i;}
  args__8906__auto__ = new cljs.core.IndexedSeq(G__9005__a,0);
} 
return hello_path__delegate.call(this,args__8906__auto__);};
hello_path.cljs$lang$maxFixedArity = 0;
hello_path.cljs$lang$applyTo = (function (arglist__9006){
var args__8906__auto__ = cljs.core.seq(arglist__9006);
return hello_path__delegate(args__8906__auto__);
});
hello_path.cljs$core$IFn$_invoke$arity$variadic = hello_path__delegate;
return hello_path;
})()
;})(action__8907__auto___9004))
;
var action__8907__auto___9009 = (function (params__8908__auto__){
if(cljs.core.map_QMARK_.call(null,params__8908__auto__)){
var map__9007 = params__8908__auto__;
var map__9007__$1 = ((cljs.core.seq_QMARK_.call(null,map__9007))?cljs.core.apply.call(null,cljs.core.hash_map,map__9007):map__9007);
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljssample.core.page], null),document.body);
} else {
if(cljs.core.vector_QMARK_.call(null,params__8908__auto__)){
var vec__9008 = params__8908__auto__;
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljssample.core.page], null),document.body);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/registration/form",action__8907__auto___9009);

/**
* @param {...*} var_args
*/
cljssample.core.registration_path = ((function (action__8907__auto___9009){
return (function() { 
var registration_path__delegate = function (args__8906__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/registration/form",args__8906__auto__);
};
var registration_path = function (var_args){
var args__8906__auto__ = null;
if (arguments.length > 0) {
var G__9010__i = 0, G__9010__a = new Array(arguments.length -  0);
while (G__9010__i < G__9010__a.length) {G__9010__a[G__9010__i] = arguments[G__9010__i + 0]; ++G__9010__i;}
  args__8906__auto__ = new cljs.core.IndexedSeq(G__9010__a,0);
} 
return registration_path__delegate.call(this,args__8906__auto__);};
registration_path.cljs$lang$maxFixedArity = 0;
registration_path.cljs$lang$applyTo = (function (arglist__9011){
var args__8906__auto__ = cljs.core.seq(arglist__9011);
return registration_path__delegate(args__8906__auto__);
});
registration_path.cljs$core$IFn$_invoke$arity$variadic = registration_path__delegate;
return registration_path;
})()
;})(action__8907__auto___9009))
;
var action__8907__auto___9014 = (function (params__8908__auto__){
if(cljs.core.map_QMARK_.call(null,params__8908__auto__)){
var map__9012 = params__8908__auto__;
var map__9012__$1 = ((cljs.core.seq_QMARK_.call(null,map__9012))?cljs.core.apply.call(null,cljs.core.hash_map,map__9012):map__9012);
return cljssample.core.set_html_BANG_.call(null,cljssample.core.app,"<h1>Not Found</h1>");
} else {
if(cljs.core.vector_QMARK_.call(null,params__8908__auto__)){
var vec__9013 = params__8908__auto__;
return cljssample.core.set_html_BANG_.call(null,cljssample.core.app,"<h1>Not Found</h1>");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"*",action__8907__auto___9014);

cljssample.core.main = (function main(){
var counter = reagent.core.atom.call(null,(0));
var button = goog.dom.getElement("button");
var display = goog.dom.getElement("clicksnumber");
display.innerHTML = cljs.core.deref.call(null,counter);

return goog.events.listen(button,"click",((function (counter,button,display){
return (function (event){
cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);

return display.innerHTML = cljs.core.deref.call(null,counter);
});})(counter,button,display))
);
});
cljssample.core.main1 = (function main1(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var history = (new goog.History());
goog.events.listen(history,"navigate",((function (history){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(history))
);

return history.setEnabled(true);
});
cljssample.core.main1.call(null);

//# sourceMappingURL=core.js.map