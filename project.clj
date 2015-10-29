(defproject cljssample "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
  ;; Backend dependencies
  [compojure "1.3.4"]
  [ring/ring-core "1.3.2" :exclusions [javax.servlet/servlet-api]]
  [ring/ring-servlet "1.3.2" :exclusions [javax.servlet/servlet-api]]
  [ring/ring-defaults "0.1.2" :exclusions [javax.servlet/servlet-api]]
  [cc.qbits/jet "0.5.4"]
  [org.clojure/clojurescript "0.0-2843"]
  [secretary "1.2.3"]
  [reforms "0.4.0"]
  [reagent "0.5.1"]]

:source-paths ["src/clj"]
:main cljssample.core
:plugins [[lein-cljsbuild "1.0.4"]]
:cljsbuild {:builds
            [{:id "app"
              :source-paths ["src/cljs"]
              :compiler {:output-to "resources/public/js/app.js"
                         :output-dir "resources/public/js/out"
                         :source-map true
                         :optimizations :none
                         :asset-path "/static/js/out"
                         :main "cljssample.core"
                         :pretty-print true}}]})

