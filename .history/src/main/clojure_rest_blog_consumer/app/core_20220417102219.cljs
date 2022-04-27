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
    [:div {:className "flex flex-wrap -m-4"}
     (render-items)]]])

(defn header []
  [:header {:class "text-gray-600 body-font"}
   [:div
    {:class
     "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"}
    [:a
     {:class
      "flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"}
     [:img  {:class "w-24 h-24 text-white p-2 rounded-full" :src "logo.png"}]
     [:span {:class "ml-3 text-xl"} "Tailblocks"]]
    [:nav
     {:class
      "md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"}
     [:a {:class "mr-5 hover:text-gray-900"} "First Link"]
     [:a {:class "mr-5 hover:text-gray-900"} "Second Link"]
     [:a {:class "mr-5 hover:text-gray-900"} "Third Link"]
     [:a {:class "mr-5 hover:text-gray-900"} "Fourth Link"]]
    [:button
     {:class
      "inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"}
     "Button\n      "
     [:svg
      {:class "w-4 h-4 ml-1",
       :fill "none",
       :stroke "currentColor",
       :stroke-linecap "round",
       :stroke-linejoin "round",
       :stroke-width "2",
       :viewBox "0 0 24 24"} [:path {:d "M5 12h14M12 5l7 7-7 7"}]]]]])

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
