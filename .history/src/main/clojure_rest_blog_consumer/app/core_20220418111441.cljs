(ns clojure-rest-blog-consumer.app.core
  (:require [accountant.core :as accountant]
            [clojure-rest-blog-consumer.app.header :as header]
            [clojure-rest-blog-consumer.app.shop :refer [shop-page]]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [reitit.core :as reitit]))

(enable-console-print!)

(def selected-page (r/atom shop-page))


(defn ping []
  (println "Hejsan"))

;; -------------------------
;; Routes
(def routes
  ["/"
   [""
    {:name      :routes/home
     :view      shop-page
     :link-text "Home"
     :controllers
     [{:start (fn []
                (println "Entering home page"))
       :stop  (fn []
                (println "Leaving home page"))}]}]])


(reitit/match-by-path routes "/")

;; (secretary/defroute "/" []
;;   (reset! selected-page shop-page))ó

;; (secretary/defroute "/shop" []
;;   (reset! selected-page shop-page))

;; (secretary/defroute "/about" []
;;   (reset! selected-page about-page))

;; (secretary/defroute "/contact" []
;;   (reset! selected-page contact-page))


(defn app []
  [:main
   [header/header]
   [@selected-page]])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render))

(defn ^:dev/after-load reload! []
  (render))

