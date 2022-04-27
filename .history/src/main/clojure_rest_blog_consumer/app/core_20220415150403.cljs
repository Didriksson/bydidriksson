(ns clojure-rest-blog-consumer.app.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require 
    [reagent.dom :as rdom]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]
    ))

(defn make-remote-call [endpoint]
  (go (let [response (<! (http/get endpoint))]
        ;;enjoy your data
        (js/console.log (:body response)))))


(defn get-messages [] 
  (make-remote-call "http://localhost:3000")

(defn display-message [message]
  [:p (str message)])

(defn app []
  [:div (get (get-messages) :message)])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render))

(defn ^:dev/after-load reload! []
  (render))
