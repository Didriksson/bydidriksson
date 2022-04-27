(ns clojure-rest-blog-consumer.app.shop
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [cljs-http.client :as http]
   [clojure.core.async :refer [<!]]
   [reagent.core :as reagent :refer [atom]]
   [clojure.string :as string]))

(def request-opts {:with-credentials? false
                   :headers {"Content-Type" "application/json"}})

(def state (atom []))


(defn make-remote-call [endpoint]
  (go (let [response (<! (http/get endpoint request-opts))]
        (reset! state (:body response)))))

(defn render-item [item]
  ^{:key item} [:div {:className "lg:w-1/4 md:w-1/2 p-4 w-full"}
   [:a {:className "block relative h-48 rounded overflow-hidden"}
    [:img
     {:alt "ecommerce",
      :className "object-cover object-center w-full h-full block",
      :src (str "http://localhost:3000/" (get item :image))}]]
   [:div {:className "mt-4"}
    [:h3
     {:className
      "text-gray-500 text-xs tracking-widest title-font mb-1"}
     (-> (get item :category) (string/upper-case))]
    [:h2 {:className "text-gray-900 title-font text-lg font-medium"}
     (get item :name)]
    [:p {:className "leading-relaxed mb-3"} (get item :short-description)]
    [:p {:className "mt-1"} (str "$" (get item :price))]]])

(defn render-items []
  (if (empty? @state)
    (do
      (make-remote-call "http://localhost:3000")
      [:p "Loading items..."])
    (map render-item @state)))

(defn shop-page []
  [:section {:className "text-gray-600 body-font"}
   [:div {:className "container px-5 py-24 mx-auto"}
    [:div {:className "flex flex-wrap -m-4 justify-center"}
     (render-items)]]])