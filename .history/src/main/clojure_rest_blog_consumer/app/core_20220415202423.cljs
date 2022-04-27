(ns clojure-rest-blog-consumer.app.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require 
    [reagent.dom :as rdom]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]
    ))

    (enable-console-print!)

    (def request-opts {:with-credentials? false
                   :headers {"Content-Type" "application/json"}})


(defn make-remote-call [endpoint]
  (go (let [response (<! (http/get endpoint request-opts))]
        ;;enjoy your data
        (-> response js->clj))))

(defn display-message [message]
  [:p (make-remote-call "package.json")])

(defn app []
  [:div (display-message [])])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render))

(defn ^:dev/after-load reload! []
  (render))
