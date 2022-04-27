(ns clojure-rest-blog-consumer.app.contact
  (:require 
   [reagent.core :as reagent :refer [atom]]))


(def request-opts {:with-credentials? false
                   :headers {"Content-Type" "application/json"}})

(defn make-remote-call [endpoint]
  (go (let [response (<! (http/get endpoint request-opts))]
        (swap! state/state assoc :shop-items (:body response)))))

(defn skicka []  
  (println "Skickar skickar.")
  )

(defn contact-page []
  (let [sent (atom false) emailform (atom { :email "" :name "" :message ""})]
    (fn [] [:section {:class "text-gray-600 body-font relative"}
            [:div {:class "container px-5 py-24 mx-auto"}
             [:div {:class "flex flex-col text-center w-full mb-12"}
              [:h1 {:class "sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"} "Kontakta oss"]
              [:p {:class "lg:w-1/3 mx-auto leading-relaxed text-base"} "Hittar du inte det du söker efter? Har du en fråga till oss? Eller vill du bara berätta något annat? Tveka inte! Fyll i formuläret nedanför så återkommer vi så fort vi kan."]]
             [:div {:class "lg:w-1/2 md:w-2/3 mx-auto"}
              [:div {:class "flex flex-wrap -m-2"}
               [:div {:class "p-2 w-1/2"}
                [:div {:class "relative"}
                 [:label {:for "name", :class "leading-7 text-sm text-gray-600"} "Namn"]
                 [:input {:type "text", :id "name", :name "name", :class "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          :on-change #(swap! emailform assoc :name (.-value (.-target %)))}]]]
               [:div {:class "p-2 w-1/2"}
                [:div {:class "relative"}
                 [:label {:for "email", :class "leading-7 text-sm text-gray-600"} "Epost"]
                 [:input {:type "email", :id "email", :name "email", :class "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          :on-change #(swap! emailform assoc :email (.-value (.-target %)))}]]]
               [:div {:class "p-2 w-full"}
                [:div {:class "relative"}
                 [:label {:for "message", :class "leading-7 text-sm text-gray-600"} "Meddelande"]
                 [:textarea {:id "message", :name "message", :class "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                             :on-change #(swap! emailform assoc :message (.-value (.-target %)))}]]]
               [:div {:class "p-2 w-full"}
                (if @sent
                  [:button {:class "flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 rounded text-lg disabled:opacity-50 disabled" :disabled true} "Tack!"]
                  [:button {:class "flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            :on-click #(do
                                         (skicka)
                                         (reset! sent true))} "Skicka"])]
               [:div {:class "p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"}
                [:a {:class "text-indigo-500"} "mattias.didriksson@gmail.com"]
                [:p {:class "leading-normal my-5"} "Gävle"
                 [:br] "Sverige"]]]]]]))
  )