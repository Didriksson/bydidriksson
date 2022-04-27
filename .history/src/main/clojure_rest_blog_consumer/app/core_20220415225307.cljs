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
      "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer."]
     [:a {:class "text-indigo-500 inline-flex items-center mt-4"}
      "Learn More\n            "
      [:svg
       {:class "w-4 h-4 ml-2",
        :fill "none",
        :stroke "currentColor",
        :stroke-linecap "round",
        :stroke-linejoin "round",
        :stroke-width "2",
        :viewBox "0 0 24 24"} [:path {:d "M5 12h14"}]
       [:path {:d "M12 5l7 7-7 7"}]]]]]
   
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
