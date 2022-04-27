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


(def message-response (atom []))

(defn make-remote-call [endpoint]
  (go (let [response (<! (http/get endpoint request-opts))]
        ;;enjoy your data
        (reset! message-response (:body response)))))



      
(defn app [] 
  (do 
  (make-remote-call "http://localhost:3000")
  [:div (str @message-response)]
  )
  )

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render))

(defn ^:dev/after-load reload! []
  (render))
