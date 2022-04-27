(ns clojure-rest-blog-consumer.app.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.dom :as rdom]))


(GET (str "https://localhost:3000" film-name)
         {:response-format :json
          :keywords? true})

(defn app []
  [:h1 "Create Reagent App"])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render))

(defn ^:dev/after-load reload! []
  (render))
