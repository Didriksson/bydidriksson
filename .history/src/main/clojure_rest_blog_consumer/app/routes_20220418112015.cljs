(ns clojure-rest-blog-consumer.app.routes
  (:require [reagent.core :as r]))


(defn default-view
  "To show before routes are loaded"
  []
  [:h1 "Loading..."])

(def selected-page (r/atom default-view))
