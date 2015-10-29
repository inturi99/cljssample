(ns cljssample.core
  (:require-macros [secretary.core :refer [defroute]]
                   [cljs.core.async.macros :refer [go]])
  (:require [goog.events :as events]
            [goog.dom :as dom]
            [goog.style :as style]
            [secretary.core :as secretary]
            [cljs.core.async :refer [<! put! chan]]
            [reagent.core :as reagent :refer [atom]])
  (:import goog.History
           goog.Uri
           goog.net.Jsonp))


(def app (dom/getElement "app"))

(defn set-html! [el content]
  (set! (.-innerHTML el) content))

(defn hello [name]
  [:div "hello " name])

(defn page1 [body]
  [:div.page
   [:div.header "This is header"]
   body
   [:div.footer "This is footer"]])

(defn row [label input]
  [:div.row
   [:div.col-md-2 [:label label]]
   [:div.col-md-5 input]])
(defn radio [label name value]
  [:div.radio
   [:label
    [:input {:field :radio :name name :value value}]
    label]])

(defn input [label type id]
  (row label [:input.form-control {:field type :id id}]))


(defn registration-template []
  [:div.form-group
  [:div (input "Title" :text :title)]
  [:div  (input "URL" :text :url)]
  [:div  (input "Tags":text :tags)]
   ])
(defn page [body]
(fn []
  [:div
   [:div.padding]
   [:div.page-header [:h1 "Book Marks"]]
   [registration-template]
   [:button.btn-primary.btn
     "CreateBookMarks"]
   [:div.padding]
   [:div.page-footer [:h6 "Copyright ©2015 A TechnoIdentity Creations — All Rights Reserved."]]
  ]))


(def search-url "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=")

(def home-html
  (str "<h1>Wikipedia Search:</h1>"
       "<section>"
       " <input id=\"query\" placeholder=\"Type your search...\" />"
       "  <button id=\"searchbutton\">Search</button>"
       "  <ul id=\"results\"></ul>"
       "</section>"))

(defn render-results [results]
  (let [results (js->clj results)]
    (reduce (fn [acc result]
              (str acc "<li>" result "</li>"))
            ""
            (second results))))

(defn do-jsonp
  [uri callback]
  (let [req (Jsonp. (Uri. uri))]
    (.send req nil callback)))

(defroute home-path "/" []
  (set-html! app home-html)
  (let [on-response (fn [results]
                      (let [html (render-results results)]
                        (set-html! (dom/getElement "results") html)))
        on-search-click (fn [e]
                          (let [user-query (.-value (dom/getElement "query"))
                                searchuri (str search-url user-query)]
                            (do-jsonp searchuri on-response)))]
    (events/listen (dom/getElement "searchbutton") "click" on-search-click)))

(defroute some-path "/:param" [param]
  (let [message (str "<h1>Parameter in url: <small>"param "</small>!</h1>")]
    (set-html! app message)))

(defroute hello-path "/hello/:name" [name]
  (reagent/render [page [hello name]] (.-body js/document)))

(defroute registration-path "/registration/form" []
  (reagent/render [page](.-body js/document)))

(defroute "*" []
  (set-html! app "<h1>Not Found</h1>"))

(defn main
  []
  (let [counter (atom 0)
        button (dom/getElement "button")
        display (dom/getElement "clicksnumber")]

    (set! (.-innerHTML display) @counter)
    (events/listen button "click"
                   (fn [event]
                     (swap! counter inc)
                     (set! (.-innerHTML display) @counter)))))

(defn main1
  []
  (secretary/set-config! :prefix "#")
  (let [history (History.)]
    (events/listen history "navigate"
                   (fn [event]
                     (secretary/dispatch! (.-token event))))
    (.setEnabled history true)))

;(main)
(main1)

