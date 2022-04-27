(ns clojure-rest-blog-consumer.app.shoppingcart 
  (:require [clojure-rest-blog-consumer.app.state :as state]))


(defn shopping-item [item]
  [:div {:class "flex justify-between items-center mt-6 pt-6 border-t"}
          [:div {:class "flex items-center"}
           [:img {:src (str "http://localhost:3000/" (get item :image)), :width "60", :class "rounded-full "}]
           [:div {:class "flex flex-col ml-3 "}
            [:span {:class "text-xs title-font text-gray-500 tracking-widest"} (:brand item)]
            [:span {:class "text-md font-medium"} (:name item)]
            [:span {:class "text-xs font-light text-gray-400"} "#86577"]]]
          [:div {:class "flex justify-center items-center"}
           [:div {:class "pr-8"}
            [:span {:class "text-xs font-medium"} (:price item)] " "]
           [:button {:class "px-2 py-0 text-black-100 rounded"} "X"]
           [:div " "
            [:i {:class "fa fa-close text-xs font-medium"}] " "]]
   ]
  )

(defn shopping-cart-page []
  [:div {:class "h-screen"}
   [:div {:class "py-12"}
    [:div {:class "max-w-md mx-auto shadow-lg rounded-lg md:max-w-5xl"}
     [:div {:class "md:flex "}
      [:div {:class "w-full p-4 px-5 py-5"}
       [:div {:class "md:grid md:grid-cols-2 gap-1 "}
        [:div {:class "col-span-2 p-5"}
         [:h1 {:class "text-xl font-medium "} "Shopping Cart"]
         (map shopping-item (:cart @state/state))
         [:div {:class "flex justify-between items-center mt-6 pt-6 border-t"}
          [:div {:class "flex items-center"}
           [:i {:class "fa fa-arrow-left text-sm pr-2"}]
           [:span {:class "text-sm font-medium text-gray-400 mr-1"} "Totalt:"] " "]
          [:div {:class "flex justify-center items-end"}
           [:span {:class "text-lg font-bold text-gray-800 "} (reduce + (map js/parseFloat (map :price (:cart @state/state))))] " "]
          [:button {:class "px-2 py-0 text-black-100 rounded" :display "none"} "X"]]
         [:div {:class "flex justify-between items-center mt-6 pt-6 border-t"}
          [:span {:class "text-md font-medium text-blue-500"} "Continue Shopping"]]]]]]]]])