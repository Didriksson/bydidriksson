(ns clojure-rest-blog-consumer.app.core
  (:require [clojure-rest-blog-consumer.app.header :as header]
            [clojure-rest-blog-consumer.app.routes :as routes :refer [current-view]]
            [reagent.dom :as rdom]
            [reagent.core :as reagent :refer [atom]]
            ))

(enable-console-print!)

(defn app []
  [:main
   [header/header]
   (when @current-view
     (let [view (:view (:data @current-view))]
       [view (:parameters @current-view)]))
   ])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (routes/init-routes!)
  (render))

(defn ^:dev/after-load reload! []
  (render))

