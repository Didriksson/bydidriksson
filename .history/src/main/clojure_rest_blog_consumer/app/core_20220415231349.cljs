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
        [:div {:class "py-8 flex flex-wrap md:flex-nowrap"}
          [:div {:class "md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"}
            [:span {:class "font-semibold title-font text-gray-700"} "ID"]
            [:span {:class "mt-1 text-gray-500 text-sm"} (str (get message :id))]]
            [:div {:class "md:flex-grow"}
            [:h2 {:class "text-2xl font-medium text-gray-900 title-font mb-2"}
            (get message :author)]
            [:p {:class "leading-relaxed"}
            (get message :message)]]])


(defn new-post-page []
           [:div {:className "container px-5 py-24 mx-auto flex"}
            [:div
             {:className
                "lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 shadow-md"}
             [:h2
              {:className "text-gray-900 text-lg mb-1 font-medium title-font"}
              "Dela med dig till resten av världen!"]
             [:p {:className "leading-relaxed mb-5 text-gray-600"}
              "Håll det rumsrent"]
             [:div {:className "relative mb-4"}
              [:label
               {:htmlFor "email", :className "leading-7 text-sm text-gray-600"}
               "Email"]
              [:input
               {:type "email",
                :id "email",
                :name "email",
                :className
                  "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"}]]
             [:div {:className "relative mb-4"}
              [:label
               {:htmlFor "message",
                :className "leading-7 text-sm text-gray-600"} "Message"]
              [:textarea
               {:id "message",
                :name "message",
                :className
                  "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out",
                :defaultValue ""}]]
             [:button
              {:className
                 "text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"}
              "Button"]
             [:p {:className "text-xs text-gray-500 mt-3"}
              "Chicharrones blog helvetica normcore iceland tousled brook viral artisan."]]])

(defn render-messages []
  (if (empty? @message-response) "I'm loading..."
      [:section {:class "text-gray-600 body-font overflow-hidden"}
        [:div {:class "container px-5 py-24 mx-auto"}
          [new-post-page]  
          [:div {:class "-my-8 divide-y-2 divide-gray-100"}
            (map render-message @message-response)]]]))  

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
