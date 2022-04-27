(ns clojure-rest-blog-consumer.app.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require 
    [reagent.dom :as rdom]
    [ajax.core :refer [GET]]
    ))


(defn get-messages [] 
  (GET (str "http://localhost:3000")
         {
           :response-format :json
          :keywords? true}))

(defn app []
  [:p(get-messages)])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render))

(defn ^:dev/after-load reload! []
  (render))
