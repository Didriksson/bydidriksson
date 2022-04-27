(ns clojure-rest-blog-consumer.app.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require 
    [reagent.dom :as rdom]
    [reagent.core :as reagent :refer [atom]]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]
    ))

    (enable-console-print!)

    (def request-opts {:with-credentials? false
                   :headers {"Content-Type" "application/json"}})


(def message-response (atom []))

(defn make-remote-call [endpoint]
  (go (let [response (<! (http/get endpoint request-opts))]
        (println response)
        (reset! message-response (:body response)))))

(defn render-message [message]
  [:section {:class "text-gray-600 body-font overflow-hidden"}
 [:div {:class "container px-5 py-24 mx-auto"}
  [:div {:class "-my-8 divide-y-2 divide-gray-100"}
   [:div {:class "py-8 flex flex-wrap md:flex-nowrap"}
    [:div {:class "md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"}
     [:span {:class "font-semibold title-font text-gray-700"} "ID"]
     [:span {:class "mt-1 text-gray-500 text-sm"} (str (get message :id))]]
    [:div {:class "md:flex-grow"}
     [:h2 {:class "text-2xl font-medium text-gray-900 title-font mb-2"}
      (get message :author)]
     [:p {:class "leading-relaxed"}
      (get message :message)]]]
   
   ]]]  
)



(defn render-messages []
  (if (empty? @message-response) "I'm loading..."
    [:div (map render-message @message-response)])
  
)

      
(defn app [] 
  (fn []
    (do 
      (make-remote-call "http://localhost:3000")
      [render-messages]
      )))

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render))

(defn ^:dev/after-load reload! []
  (render))
