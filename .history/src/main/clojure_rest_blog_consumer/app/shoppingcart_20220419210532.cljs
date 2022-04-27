(ns clojure-rest-blog-consumer.app.shoppingcart)

(defn shopping-cart-page []
  [:div {:class "h-screen"}
   [:div {:class "py-12"}
    [:div {:class "max-w-md mx-auto shadow-lg rounded-lg md:max-w-5xl"}
     [:div {:class "md:flex "}
      [:div {:class "w-full p-4 px-5 py-5"}
       [:div {:class "md:grid md:grid-cols-2 gap-1 "}
        [:div {:class "col-span-2 p-5"}
         [:h1 {:class "text-xl font-medium "} "Shopping Cart"]
         
         [:div {:class "flex justify-between items-center mt-6 pt-6 border-t"}
          [:div {:class "flex items-center"}
           [:i {:class "fa fa-arrow-left text-sm pr-2"}]
           [:span {:class "text-md font-medium text-blue-500"} "Continue Shopping"] " "]
          [:div {:class "flex justify-center items-end"}
           [:span {:class "text-sm font-medium text-gray-400 mr-1"} "Subtotal:"]
           [:span {:class "text-lg font-bold text-gray-800 "} " $24.90"] " "]]]]]]]]])