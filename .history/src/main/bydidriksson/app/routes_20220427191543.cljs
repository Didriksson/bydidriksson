(ns bydidriksson.app.routes
  (:require [bydidriksson.app.about :as about]
            [bydidriksson.app.contact :as contact]
            [bydidriksson.app.item :as item]
            [bydidriksson.app.shop :as shop]
            [bydidriksson.app.shoppingcart :as shoppingcart]
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
    ["shopping-cart"
     {:name ::shoppingcart
      :view #'shoppingcart/shopping-cart-page}]   
    ["items/:id"
     {:name ::item
      :view #'item/item-page
      :parameters {:path {:id int?}}}]]))   
    
(defn init-routes!
  "Start the routing"
  []
  (rfe/start! routes
              (fn [m]
                (reset! current-view m))
              {:use-fragment false}))
