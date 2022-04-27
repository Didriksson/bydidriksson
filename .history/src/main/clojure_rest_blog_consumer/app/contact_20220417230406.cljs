(ns clojure-rest-blog-consumer.app.contact)

(defn contact-page []
  [:section {:class "text-gray-600 body-font"}
   [:div {:class "container px-5 py-24 mx-auto"}
    [:div {:class "flex flex-col text-center w-full mb-12"}
     [:h1 {:class "sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"} "Kontakta oss"]
     [:p {:class "lg:w-1/3 mx-auto leading-relaxed text-base"} "Hittar du inte det du söker efter? Har du en fråga till oss? Eller vill du bara berätta något annat? Tveka inte! Fyll i formuläret nedanför så återkommer vi så fort vi kan."]]
    [:div {:class "lg:w-1/2 md:w-2/3 mx-auto"}
     ]]])