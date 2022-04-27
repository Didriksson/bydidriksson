(ns clojure-rest-blog-consumer.app.routes
  (:require [clojure-rest-blog-consumer.app.shop :as shop]
            [reagent.core :as r]
            [reitit.frontend.easy :as rfe]
            [reitit.frontend :as rf]
            ))


(defn default-view
  "To show before routes are loaded"
  []
  [:h1 "Loading..."])

(defonce current-view (r/atom default-view))


(def routes
  (rf/router
   ["/"
    [""
     {:name ::home
      :view #'shop/shop-page}]
    ["shop"
     {:name ::shop
      :view #'shop/shop-page}]]))

(defn init-routes!
  "Start the routing"
  []
  (rfe/start! routes
              (fn [m]
                (reset! current-view (get-in m [:data :view])))
              {:use-fragment false}))
