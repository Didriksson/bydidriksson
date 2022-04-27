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
         [:div {:class "flex ml-6 items-center"}
          ]]
        [:div {:class "flex"}
         [:span {:class "title-font font-medium text-2xl text-gray-900"} "$58.00"]
         [:button {:class "flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"} "Button"]]]]]]))
