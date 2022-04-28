(ns clojure-rest-blog-consumer.app.shoppingcart)

(defn shopping-cart-page []

  [:div {:class "container mx-auto mt-10"}
   [:div {:class "flex shadow-md my-10"}
    [:div {:class "w-3/4 bg-white px-10 py-10"}
     [:div {:class "flex justify-between border-b pb-8"}
      [:h1 {:class "font-semibold text-2xl"} "Shopping Cart"]
      [:h2 {:class "font-semibold text-2xl"} "3 Items"]]
     [:div {:class "flex mt-10 mb-5"}
      [:h3 {:class "font-semibold text-gray-600 text-xs uppercase w-2/5"} "Product Details"]
      [:h3 {:class "font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"} "Quantity"]
      [:h3 {:class "font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"} "Price"]
      [:h3 {:class "font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"} "Total"]]
     [:div {:class "flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"}
      [:div {:class "flex w-2/5"} " " "<!-- product -->"
       [:div {:class "w-20"}
        [:img {:class "h-24", :src "https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"}]]
       [:div {:class "flex flex-col justify-between ml-4 flex-grow"}
        [:span {:class "font-bold text-sm"} "Iphone 6S"]
        [:span {:class "text-red-500 text-xs"} "Apple"]
        [:a {:href "#", :class "font-semibold hover:text-red-500 text-gray-500 text-xs"} "Remove"]]]
      [:div {:class "flex justify-center w-1/5"}
       [:svg {:class "fill-current text-gray-600 w-3", :viewbox "0 0 448 512"}
        [:path {:d "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}]]
       [:input {:class "mx-2 border text-center w-8", :type "text", :value "1"}]
       [:svg {:class "fill-current text-gray-600 w-3", :viewbox "0 0 448 512"}
        [:path {:d "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}]]]
      [:span {:class "text-center w-1/5 font-semibold text-sm"} "$400.00"]
      [:span {:class "text-center w-1/5 font-semibold text-sm"} "$400.00"]]
     [:div {:class "flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"}
      [:div {:class "flex w-2/5"} " " "<!-- product -->"
       [:div {:class "w-20"}
        [:img {:class "h-24", :src "https://drive.google.com/uc?id=10ht6a9IR3K2i1j0rHofp9-Oubl1Chraw"}]]
       [:div {:class "flex flex-col justify-between ml-4 flex-grow"}
        [:span {:class "font-bold text-sm"} "Xiaomi Mi 20000mAh"]
        [:span {:class "text-red-500 text-xs"} "Xiaomi"]
        [:a {:href "#", :class "font-semibold hover:text-red-500 text-gray-500 text-xs"} "Remove"]]]
      [:div {:class "flex justify-center w-1/5"}
       [:svg {:class "fill-current text-gray-600 w-3", :viewbox "0 0 448 512"}
        [:path {:d "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}]]
       [:input {:class "mx-2 border text-center w-8", :type "text", :value "1"}]
       [:svg {:class "fill-current text-gray-600 w-3", :viewbox "0 0 448 512"}
        [:path {:d "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}]]]
      [:span {:class "text-center w-1/5 font-semibold text-sm"} "$40.00"]
      [:span {:class "text-center w-1/5 font-semibold text-sm"} "$40.00"]]
     [:div {:class "flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"}
      [:div {:class "flex w-2/5"} " " "<!-- product -->"
       [:div {:class "w-20"}
        [:img {:class "h-24", :src "https://drive.google.com/uc?id=1vXhvO9HoljNolvAXLwtw_qX3WNZ0m75v"}]]
       [:div {:class "flex flex-col justify-between ml-4 flex-grow"}
        [:span {:class "font-bold text-sm"} "Airpods"]
        [:span {:class "text-red-500 text-xs"} "Apple"]
        [:a {:href "#", :class "font-semibold hover:text-red-500 text-gray-500 text-xs"} "Remove"]]]
      [:div {:class "flex justify-center w-1/5"}
       [:svg {:class "fill-current text-gray-600 w-3", :viewbox "0 0 448 512"}
        [:path {:d "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}]]
       [:input {:class "mx-2 border text-center w-8", :type "text", :value "1"}]
       [:svg {:class "fill-current text-gray-600 w-3", :viewbox "0 0 448 512"}
        [:path {:d "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}]]]
      [:span {:class "text-center w-1/5 font-semibold text-sm"} "$150.00"]
      [:span {:class "text-center w-1/5 font-semibold text-sm"} "$150.00"]]
     [:a {:href "#", :class "flex font-semibold text-indigo-600 text-sm mt-10"}
      [:svg {:class "fill-current mr-2 text-indigo-600 w-4", :viewbox "0 0 448 512"}
       [:path {:d "M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"}]] "Continue Shopping"]]
    [:div {:id "summary", :class "w-1/4 px-8 py-10"}
     [:h1 {:class "font-semibold text-2xl border-b pb-8"} "Order Summary"]
     [:div {:class "flex justify-between mt-10 mb-5"}
      [:span {:class "font-semibold text-sm uppercase"} "Items 3"]
      [:span {:class "font-semibold text-sm"} "590$"]]
     [:div
      [:label {:class "font-medium inline-block mb-3 text-sm uppercase"} "Shipping"]
      [:select {:class "block p-2 text-gray-600 w-full text-sm"}
       [:option "Standard shipping - $10.00"]]]
     [:div {:class "py-10"}
      [:label {:for "promo", :class "font-semibold inline-block mb-3 text-sm uppercase"} "Promo Code"]
      [:input {:type "text", :id "promo", :placeholder "Enter your code", :class "p-2 text-sm w-full"}]]
     [:button {:class "bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"} "Apply"]
     [:div {:class "border-t mt-8"}
      [:div {:class "flex font-semibold justify-between py-6 text-sm uppercase"}
       [:span "Total cost"]
       [:span "$600"]]
      [:button {:class "bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"} "Checkout"]]]]])