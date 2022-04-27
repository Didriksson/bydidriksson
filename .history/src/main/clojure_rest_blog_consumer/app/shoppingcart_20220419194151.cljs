(ns clojure-rest-blog-consumer.app.shoppingcart)

(defn shopping-cart-page []
  [:div {:class "h-screen bg-gray-300"}
   [:div {:class "py-12"}
    [:div {:class "max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl"}
     [:div {:class "md:flex "}
      [:div {:class "w-full p-4 px-5 py-5"}
       [:div {:class "md:grid md:grid-cols-2 gap-5 "}
        [:div {:class "col-span-2 p-5"}
         [:h1 {:class "text-xl font-medium "} "Shopping Cart"]
         [:div {:class "flex justify-between items-center mt-6 pt-6"}
          [:div {:class "flex items-center"}
           [:img {:src "https://i.imgur.com/EEguU02.jpg", :width "60", :class "rounded-full "}]
           [:div {:class "flex flex-col ml-3"}
            [:span {:class "md:text-md font-medium"} "Chicken momo"]
            [:span {:class "text-xs font-light text-gray-400"} "#41551"] " "]]
          [:div {:class "flex justify-center items-center"}
           [:div {:class "pr-8 flex "}
            [:span {:class "font-semibold"} "-"]
            [:input {:type "text", :class "focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2", :value "1"}]
            [:span {:class "font-semibold"} "+"] " "]
           [:div {:class "pr-8 "}
            [:span {:class "text-xs font-medium"} "$10.50"] " "]
           [:div " "
            [:i {:class "fa fa-close text-xs font-medium"}] " "]]]
         [:div {:class "flex justify-between items-center pt-6 mt-6 border-t"}
          [:div {:class "flex items-center"}
           [:img {:src "https://i.imgur.com/Uv2Yqzo.jpg", :width "60", :class "rounded-full "}]
           [:div {:class "flex flex-col ml-3 "}
            [:span {:class "text-md font-medium w-auto"} "Spicy Mexican potatoes"]
            [:span {:class "text-xs font-light text-gray-400"} "#66999"] " "]]
          [:div {:class "flex justify-center items-center"}
           [:div {:class "pr-8 flex"}
            [:span {:class "font-semibold"} "-"]
            [:input {:type "text", :class "focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2", :value "1"}]
            [:span {:class "font-semibold"} "+"] " "]
           [:div {:class "pr-8"}
            [:span {:class "text-xs font-medium"} "$10.50"] " "]
           [:div " "
            [:i {:class "fa fa-close text-xs font-medium"}] " "]]]
         [:div {:class "flex justify-between items-center mt-6 pt-6 border-t"}
          [:div {:class "flex items-center"}
           [:img {:src "https://i.imgur.com/xbTAITF.jpg", :width "60", :class "rounded-full "}]
           [:div {:class "flex flex-col ml-3 "}
            [:span {:class "text-md font-medium"} "Breakfast"]
            [:span {:class "text-xs font-light text-gray-400"} "#86577"] " "]]
          [:div {:class "flex justify-center items-center"}
           [:div {:class "pr-8 flex"}
            [:span {:class "font-semibold"} "-"]
            [:input {:type "text", :class "focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2", :value "1"}]
            [:span {:class "font-semibold"} "+"] " "]
           [:div {:class "pr-8"}
            [:span {:class "text-xs font-medium"} "$10.50"] " "]
           [:div " "
            [:i {:class "fa fa-close text-xs font-medium"}] " "]]]
         [:div {:class "flex justify-between items-center mt-6 pt-6 border-t"}
          [:div {:class "flex items-center"}
           [:i {:class "fa fa-arrow-left text-sm pr-2"}]
           [:span {:class "text-md font-medium text-blue-500"} "Continue Shopping"] " "]
          [:div {:class "flex justify-center items-end"}
           [:span {:class "text-sm font-medium text-gray-400 mr-1"} "Subtotal:"]
           [:span {:class "text-lg font-bold text-gray-800 "} " $24.90"] " "]]]]]]]]])