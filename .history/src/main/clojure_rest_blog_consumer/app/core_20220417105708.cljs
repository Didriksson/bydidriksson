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

(defn render-item [item]
  [:div {:className "lg:w-1/4 md:w-1/2 p-4 w-full"}
   [:a {:className "block relative h-48 rounded overflow-hidden"}
    [:img
     {:alt "ecommerce",
      :className "object-cover object-center w-full h-full block",
      :src (str "http://localhost:3000/" (get item :image))}]]
   [:div {:className "mt-4"}
    [:h3
     {:className
      "text-gray-500 text-xs tracking-widest title-font mb-1"}
     (-> (get item :category) (clojure.string/upper-case))]
    [:h2 {:className "text-gray-900 title-font text-lg font-medium"}
     (get item :name)]
    [:p {:className "leading-relaxed mb-3"} (get item :short-description)]
    [:p {:className "mt-1"} (str "$" (get item :price))]
    ]])    

(defn render-items []
  (if (empty? @message-response) [:p "Loading items..."]
      (map render-item @message-response))
)    

(defn render-shop []
  [:section {:className "text-gray-600 body-font"}
   [:div {:className "container px-5 py-24 mx-auto"}
    [:div {:className "flex flex-wrap -m-4 justify-center"}
     (render-items)]]])

(defn header []
  [:header {:class "text-gray-600 body-font"}
   [:div
    {:class
     "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"}
    [:a
     {:class
      "flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      :href "/"}
     [:img  {:class "w-24 h-24 text-white p-2 rounded-full" :src "logo.png"}]
     [:span {:class "ml-3 text-xl"} "by Didriksson"]]
    [:nav
     {:class
      "md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center"}
     [:a {:class "mr-5 hover:text-gray-900"} "Butiken"]
     [:a {:class "mr-5 hover:text-gray-900"} "Om oss"]]]
   [:div {:class "w-full border-t border-gray-300"}]
   
   ])

(defn app [] 
  (fn []
    (do 
      (make-remote-call "http://localhost:3000")
      [:main
       [header]
       [render-shop]]
      
      )))

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render))

(defn ^:dev/after-load reload! []
  (render))
