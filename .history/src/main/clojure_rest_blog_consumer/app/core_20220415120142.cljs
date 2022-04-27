(ns clojure-rest-blog-consumer.app.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]])
  (:require [reagent.dom :as rdom]))


(go (let [response (<! (http/get "https://api.github.com/users"
                                 {:with-credentials? false
                                  :query-params {"since" 135}}))]
      (prn (:status response))
      (prn (map :login (:body response)))))

(defn app []
  [:h1 "Create Reagent App"])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render))

(defn ^:dev/after-load reload! []
  (render))
