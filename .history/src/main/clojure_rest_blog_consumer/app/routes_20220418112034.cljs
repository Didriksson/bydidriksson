(ns clojure-rest-blog-consumer.app.routes
  (:require [reagent.core :as r]))


(defn default-view
  "To show before routes are loaded"
  []
  [:h1 "Loading..."])

(defonce current-view (r/atom default-view))
