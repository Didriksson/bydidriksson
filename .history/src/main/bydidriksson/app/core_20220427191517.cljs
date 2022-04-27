(ns bydidriksson.app.core
  (:require [bydidriksson.app.header :as header]
            [bydidriksson.app.routes :as routes :refer [current-view]]
            [reagent.dom :as rdom]
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

