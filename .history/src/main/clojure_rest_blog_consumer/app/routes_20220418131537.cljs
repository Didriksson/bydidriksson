(ns clojure-rest-blog-consumer.app.routes
  (:require [clojure-rest-blog-consumer.app.about :as about]
            [clojure-rest-blog-consumer.app.contact :as contact]
            [clojure-rest-blog-consumer.app.item :as item]
            [clojure-rest-blog-consumer.app.shop :as shop]
            [reagent.core :as r]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]))


(defonce current-view (r/atom nil))


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
      :view #'contact/contact-page}]
    ["about"
     {:name ::about
      :view #'about/about-page}]
    ["items"
     {:name ::item
      :view #'item/item-page
      :parameters {:path {:id int?}}}]]))   
    

(defn init-routes!
  "Start the routing"
  []
  (rfe/start! routes
              (fn [m]
                (reset! current-view (get-in m [:data :view])))
              {:use-fragment false}))
