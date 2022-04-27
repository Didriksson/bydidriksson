(ns clojure-rest-blog-consumer.app.routes
  (:require [clojure-rest-blog-consumer.app.contact :as contact]
            [clojure-rest-blog-consumer.app.shop :as shop]
            [reagent.core :as r]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]))


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
      :view #'shop/shop-page}]
    ["contact"
     {:name ::contact
      :view #'contact/contact-page}]]))

(defn init-routes!
  "Start the routing"
  []
  (rfe/start! routes
              (fn [m]
                (reset! current-view (get-in m [:data :view])))
              {:use-fragment false}))
