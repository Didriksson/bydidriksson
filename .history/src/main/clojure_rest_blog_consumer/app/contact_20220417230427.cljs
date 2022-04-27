(ns clojure-rest-blog-consumer.app.contact)

(defn contact-page []
  [:section {:class "text-gray-600 body-font"}
   [:div {:class "container px-5 py-24 mx-auto"}
    [:div {:class "flex flex-col text-center w-full mb-12"}
     [:h1 {:class "sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"} "Kontakta oss"]
     [:p {:class "lg:w-1/3 mx-auto leading-relaxed text-base"} "Hittar du inte det du söker efter? Har du en fråga till oss? Eller vill du bara berätta något annat? Tveka inte! Fyll i formuläret nedanför så återkommer vi så fort vi kan."]]
    [:div {:class "lg:w-1/2 md:w-2/3 mx-auto"}
     [:div {:class "flex flex-wrap -m-2"}
      
      [:div {:class "p-2 w-full"}
       [:button {:class "flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"} "Skicka"]]
      [:div {:class "p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"}
       [:a {:class "text-indigo-500"} "mattias.didriksson@gmail.com"]
       [:p {:class "leading-normal my-5"} "Gävle"
        [:br] "Sverige"]]]]]])