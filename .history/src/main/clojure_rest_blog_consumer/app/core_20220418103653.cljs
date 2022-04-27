(ns clojure-rest-blog-consumer.app.core
  (:require [accountant.core :as accountant]
            [clojure-rest-blog-consumer.app.about :refer [about-page]]
            [clojure-rest-blog-consumer.app.contact :refer [contact-page]]
            [clojure-rest-blog-consumer.app.header :as header]
            [clojure-rest-blog-consumer.app.shop :refer [shop-page]]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [secretary.core :as secretary :include-macros true]))

(enable-console-print!)

(def selected-page (r/atom shop-page))

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (reset! selected-page shop-page))

(secretary/defroute "/shop" []
  (reset! selected-page shop-page))

(secretary/defroute #"/items/(\d+)" [id {:keys [query-params]}]
  (js/console.log (str "User: " id))
  (js/console.log (pr-str query-params)))

(secretary/defroute "/about" []
  (reset! selected-page about-page))

(secretary/defroute "/contact" []
  (reset! selected-page contact-page))


(defn app []
  [:main
   [header/header]
   [@selected-page]])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (secretary/dispatch! path))
    :path-exists?
    (fn [path]
      (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (render))

(defn ^:dev/after-load reload! []
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (secretary/dispatch! path))
    :path-exists?
    (fn [path]
      (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (render))

