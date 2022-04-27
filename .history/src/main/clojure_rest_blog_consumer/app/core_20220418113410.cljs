(ns clojure-rest-blog-consumer.app.core
  (:require [clojure-rest-blog-consumer.app.header :as header]
            [clojure-rest-blog-consumer.app.routes :as routes :refer [current-view]]
            [reagent.dom :as rdom]))

(enable-console-print!)



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
   [@current-view]])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (routes/init-routes)
  (render))

(defn ^:dev/after-load reload! []
  (render))

