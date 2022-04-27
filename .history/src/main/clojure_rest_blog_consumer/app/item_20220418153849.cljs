(ns clojure-rest-blog-consumer.app.item
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [cljs-http.client :as http]
   [clojure.core.async :refer [<!]]
   [reagent.core :as reagent :refer [atom]]))


(def state (atom nil))

(def request-opts {:with-credentials? false
                   :headers {"Content-Type" "application/json"}})

(defn make-remote-call [endpoint]
  (go (let [response (<! (http/get endpoint request-opts))]
        (reset! state (:body response)))))

(defn item-page
  [parameters]
  (if (nil? @state) 
    (do
      (make-remote-call (str "http://localhost:3000/" (:id (:path parameters))))
      [:p "Loading..."])
    [:section {:class "text-gray-600 body-font overflow-hidden"}
     [:div {:class "container px-5 py-24 mx-auto"}
      [:div {:class "lg:w-4/5 mx-auto flex flex-wrap"}
       [:img {:alt "ecommerce", :class "lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded", :src "https://dummyimage.com/400x400"}]
       [:div {:class "lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"}
        [:h2 {:class "text-sm title-font text-gray-500 tracking-widest"} "BRAND NAME"]
        [:h1 {:class "text-gray-900 text-3xl title-font font-medium mb-1"} "The Catcher in the Rye"]        
        [:p {:class "leading-relaxed"} "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan."]
        [:div {:class "flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"}
         [:div {:class "flex"}
          [:span {:class "mr-3"} "Color"]
          [:button {:class "border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"}]
          [:button {:class "border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"}]
          [:button {:class "border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"}]]
         [:div {:class "flex ml-6 items-center"}
          [:span {:class "mr-3"} "Size"]
          [:div {:class "relative"}
           [:select {:class "rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"}
            [:option "SM"]
            [:option "M"]
            [:option "L"]
            [:option "XL"]]
           [:span {:class "absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"}
            [:svg {:fill "none", :stroke "currentColor", :stroke-linecap "round", :stroke-linejoin "round", :stroke-width "2", :class "w-4 h-4", :viewbox "0 0 24 24"}
             [:path {:d "M6 9l6 6 6-6"}]]]]]]
        [:div {:class "flex"}
         [:span {:class "title-font font-medium text-2xl text-gray-900"} "$58.00"]
         [:button {:class "flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"} "Button"]
         [:button {:class "rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"}
          ]]]]]]))
