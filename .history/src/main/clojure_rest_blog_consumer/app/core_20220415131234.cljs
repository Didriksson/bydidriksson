(ns clojure-rest-blog-consumer.app.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require 
    [reagent.dom :as rdom]
    [ajax.core :refer [GET]]
    ))


(defn get-messages [] 
  (GET (str "http://localhost:3000")
         {
          :headers {"Access-Control-Allow-Headers" "Content-Type"
                       "Access-Control-Allow-Origin" "*"}
          :response-format :json
          :keywords? true}))

(defn app []
  [:h1 (get-messages)])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render))

(defn ^:dev/after-load reload! []
  (render))
