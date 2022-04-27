(ns clojure-rest-blog-consumer.app.item
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [clojure.core.async :refer [<!]]
            [clojure.string :as string]
            [reagent.core :as reagent :refer [atom]]))



(def request-opts {:with-credentials? false
                   :headers {"Content-Type" "application/json"}})

(defn make-remote-call [endpoint item]
  (go (let [response (<! (http/get endpoint request-opts))]
        (reset! item (:body response)))))

(defn item-page
  [parameters]
  (let [item (atom nil)]
    (if (nil? @item)
      (do
        (make-remote-call (str "http://localhost:3000/" (:id (:path parameters))) item)
        [:p "Loading..."])
      [:section {:class "text-gray-600 body-font overflow-hidden"}
       [:div {:class "container px-5 py-24 mx-auto"}
        [:div {:class "lg:w-4/5 mx-auto flex flex-wrap"}
         [:img {:alt "ecommerce", :class "lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded", :src (str "http://localhost:3000/" (get @item :image))}]
         [:div {:class "lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"}
          [:h2 {:class "text-sm title-font text-gray-500 tracking-widest"} (-> (get @item :brand) (string/upper-case))]
          [:h1 {:class "text-gray-900 text-3xl title-font font-medium mb-1"} (get @item :name)]
          [:p {:class "leading-relaxed"} (get @item :description)]
          [:div {:class "flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"}
           [:div {:class "flex ml-6 items-center"}]]
          [:div {:class "flex"}
           [:span {:class "title-font font-medium text-2xl text-gray-900"} (str "$" (get @item :price))]
           [:button {:class "flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"} "Köp"]]]]]]))
  )
