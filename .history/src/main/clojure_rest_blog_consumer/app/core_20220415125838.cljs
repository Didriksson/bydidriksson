(ns clojure-rest-blog-consumer.app.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require 
    [reagent.dom :as rdom]
    [ajax.core :refer [GET]]
    ))


(defn get-messages [] 
  (println (GET (str "https://localhost:3000")
         {:response-format :json
          :keywords? true}))
  (GET (str "https://localhost:3000")
         {:response-format :json
          :keywords? true}))

(defn app []
  [:h1 (get-messages)])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render))

(defn ^:dev/after-load reload! []
  (render))
