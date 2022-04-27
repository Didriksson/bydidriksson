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

(defn display-message [message]
  (println (str "Hej"message))
  [:p (str message)])

(defn app []
  (map display-message ["foo" "bar"]))

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render))

(defn ^:dev/after-load reload! []
  (render))
