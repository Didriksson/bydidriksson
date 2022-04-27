(ns clojure-rest-blog-consumer.app.header)

(defn header []
  [:header {:class "text-gray-600 body-font"}
   [:div
    {:class
     "flex flex-wrap p-5 flex-col md:flex-row items-center justify-center"}
    [:a
     {:class
      "flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      :href "/"}
     [:img  {:class "w-24 h-24 text-white p-2 rounded-full" :src "/logo.png"}]
     [:span {:class "ml-3 text-xl"} "by Didriksson"]]
    [:nav
     {:class
      "md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center"}
     [:a {:class "mr-5 hover:text-gray-900" :href "/shop"} "Butiken"]
     [:a {:class "mr-5 hover:text-gray-900" :href "/about"} "Om oss"]
     [:a {:class "mr-5 hover:text-gray-900" :href "/contact"} "Kontakta oss"]]
    ]
   [:div {:class "w-full border-t border-gray-300"}]])