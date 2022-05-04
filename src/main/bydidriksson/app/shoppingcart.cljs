(ns bydidriksson.app.shoppingcart
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [bydidriksson.app.config :as config]
            [bydidriksson.app.state :as state]
            [reagent.core :as reagent :refer [atom]]
            [cljs-http.client :as http]
            [clojure.core.async :refer [<!]]))

(defn remove-item [cart-item]
  (let [new-cart (remove #(= (:id cart-item) (:id %)) (:cart @state/state))]
    (swap! state/state assoc :cart new-cart)))

(defn shopping-item [cart-item]
  (let [item (:item cart-item)]
    [:div {:class "flex justify-between items-center mt-6 pt-6 border-t"}
     [:div {:class "flex items-center"}
      [:img {:src (str (:backend @config/configuration) "/" (get item :image)), :width "60", :class "rounded-full "}]
      [:div {:class "flex flex-col ml-3 "}
       [:span {:class "text-xs title-font text-gray-500 tracking-widest"} (:brand item)]
       [:span {:class "text-md font-medium"} (:name item)]
       [:span {:class "text-xs font-light text-gray-400"} (str "#" (:id item))]]]
     [:div {:class "flex justify-center items-center"}
      [:div {:class "pr-8"}
       [:span {:class "text-xs font-medium"} (:price item)] " kr"]
      [:button {:class "w-10 px-2 py-0 text-black-100 rounded" :on-click #(remove-item cart-item)} "X"]
      [:div " "
       [:i {:class "fa fa-close text-xs font-medium"}] " "]]]))


(defn calculate-shipping [_cart]
  30)

(defn price-excluding-shipping [cart]
  (reduce + (map js/parseFloat (map :price (map :item cart)))))

(defn price-summary []
  [:div
   [:div {:class "flex justify-between items-center mt-6 pt-6 border-t"}
    [:div {:class "flex justify-center items-center"}
     [:span {:class "text-sm font-medium text-gray-400 mr-1"} "Varor:"]
     " "]
    [:div {:class "flex justify-center items-center"}
     [:span {:class "pr-8 text-base font-semibold text-gray-800"} (.toFixed (price-excluding-shipping (:cart @state/state)) 2) " kr"]
     " "]]
   [:div {:class "flex justify-between items-center"}
    [:div {:class "flex justify-center items-center"}
     [:span {:class "text-sm font-medium text-gray-400 mr-1"} "Frakt:"]
     " "]
    [:div {:class "flex justify-center items-center"}
     [:span {:class "pr-8 text-base font-semibold text-gray-800"} (.toFixed (calculate-shipping (:cart @state/state)) 2) " kr"]
     " "]]
   [:div {:class "flex justify-between items-center pt-6"}
    [:div {:class "flex justify-center items-center"}
     [:span {:class "text-sm font-medium font-bold text-gray-600 mr-1"} "Totalt:"]
     " "]
    [:div {:class "flex justify-center items-center"}
     [:span {:class "pr-8 text-lg font-bold text-gray-800"} (.toFixed (+ (price-excluding-shipping (:cart @state/state)) (calculate-shipping (:cart @state/state))) 2) " kr"]
     " "]]])

(defn item-summary [pageState]
  [:div {:class "h-screen"}
   [:div {:class "py-12"}
    [:div {:class "max-w-md mx-auto shadow-lg rounded-lg md:max-w-5xl"}
     [:div {:class "md:flex "}
      [:div {:class "w-full p-4 px-5 py-5"}
       [:div {:class "md:grid md:grid-cols-2 gap-1 "}
        [:div {:class "col-span-2 p-5"}
         [:h1 {:class "text-xl font-medium "} "Kundvagn"]
         (map shopping-item (:cart @state/state))
         [price-summary]
         [:div {:class "flex justify-between items-center mt-6 pt-6 border-t"}
          [:button {:href "/checkout"
                    :on-click #(do
                                 (reset! pageState :checkout))
                    :class "flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"} "Till betalning"]]]]]]]]])



(defn process-order [contact-info page-state]
  (let [order (->
               (assoc contact-info :ordernumber (:ordernumber @state/state))
               (assoc :order (:cart @state/state)))]
    (go (let [response (<! (http/post (str (:backend @config/configuration) "/order") {:with-credentials? false :json-params order}))]
          (when (= (:status response) 200)
            (reset! page-state :ordercomplete))))))

(defn checkout-page [ordernummer page-state]
  (let [form (atom {:email "" :phone "" :message ""})]
    (fn [] [:section {:class "text-gray-600 body-font relative"}
            [:div {:class "container px-5 py-24 mx-auto"}
             [:div {:class "flex flex-col text-center w-full mb-12"}
              [:h1 {:class "sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"} "Tack för att du väljer byDidriksson!"]
              [:p {:class "lg:w-1/3 mx-auto leading-relaxed text-base"}
               "Vi har inte hunnit växa till oss. Det betyder tyvärr att betalsätten är begränsade. I framtiden hoppas vi kunna erbjuda fler alternativ."]]
             [:div {:class "flex flex-col text-center w-full mb-12"}
              [:p {:class "lg:w-1/3 mx-auto leading-relaxed text-base"}
               "Idag stödjer vi endast " [:span {:class "font-bold inline"} "swish."] " Inkludera ordernummer " [:span {:class "font-bold inline"} ordernummer]
               " i meddelandet. Du kommer få ett e-post när vi bekräftat din beställning och betalning. Var därför noga med att fylla i dina kontaktuppgifter korrekt."]]
             [:table {:class "table-auto mx-auto text-left whitespace-no-wrap"}
              [:tbody
               [:tr
                [:td {:class "px-4 py-3"} "Mottagare:"]
                [:td {:class "px-4 py-3"} [:p {:class "font-bold"} "0761349991"]]]
               [:tr
                [:td {:class "px-4 py-3"} "Namn på mottagare:"]
                [:td {:class "px-4 py-3"} [:p {:class "font-bold"} "Mattias Didriksson"]]]
               [:tr
                [:td {:class "px-4 py-3"} "Meddelande:"]
                [:td {:class "px-4 py-3"} [:p {:class "font-bold"} ordernummer]]]]]


             [:div {:class "w-full"} [:img {:src "swish.png" :class "mx-auto"}]]
             [:div {:class "lg:w-1/2 md:w-2/3 mx-auto"}
              [:div {:class "flex flex-wrap -m-2"}
               [:div {:class "p-2 w-full"}
                [:div {:class "relative"}
                 [:label {:for "name", :class "leading-7 text-sm text-gray-600"} "Fullständigt namn"]
                 [:input {:type "name", :id "name", :name "name", :class "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          :on-change #(swap! form assoc :name (.-value (.-target %)))}]]]
               [:div {:class "p-2 w-full"}
                [:div {:class "relative"}
                 [:label {:for "adress1", :class "leading-7 text-sm text-gray-600"} "Gata"]
                 [:input {:type "adress1", :id "adress1", :name "adress1", :class "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          :on-change #(swap! form assoc :adress1 (.-value (.-target %)))}]]]
               [:div {:class "p-2 w-1/2"}
                [:div {:class "relative"}
                 [:label {:for "zipcode", :class "leading-7 text-sm text-gray-600"} "Postnummer"]
                 [:input {:type "zipcode", :id "zipcode", :name "zipcode", :class "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          :on-change #(swap! form assoc :zipcode (.-value (.-target %)))}]]]
               [:div {:class "p-2 w-1/2"}
                [:div {:class "relative"}
                 [:label {:for "city", :class "leading-7 text-sm text-gray-600"} "Postort"]
                 [:input {:type "city", :id "city", :name "city", :class "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          :on-change #(swap! form assoc :city (.-value (.-target %)))}]]]

               [:div {:class "p-2 w-1/2"}
                [:div {:class "relative"}
                 [:label {:for "phone", :class "leading-7 text-sm text-gray-600"} "Telefonnummer"]
                 [:input {:type "text", :id "phone", :name "phone", :class "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          :on-change #(swap! form assoc :phone (.-value (.-target %)))}]]]
               [:div {:class "p-2 w-1/2"}
                [:div {:class "relative"}
                 [:label {:for "email", :class "leading-7 text-sm text-gray-600"} "Epost"]
                 [:input {:type "email", :id "email", :name "email", :class "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          :on-change #(swap! form assoc :email (.-value (.-target %)))}]]]

               [:div {:class "p-2 w-full"}
                [:div {:class "relative"}
                 [:label {:for "message", :class "leading-7 text-sm text-gray-600"} "Övrigt"]
                 [:textarea {:id "message", :placeholder "Om du har några övriga instruktioner eller frågor kan du skriva in det här." :name "message", :class "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                             :on-change #(swap! form assoc :message (.-value (.-target %)))}]]]

               [:div {:class "p-2 w-full"}
                [:button {:class "flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                          :on-click #(process-order @form page-state)} "Skicka"]]]]]])))

(defn ordercomplete [ordernumber]
  [:section {:class "text-gray-600 body-font"}
   [:div {:class "container px-5 py-24 mx-auto"}
    [:div {:class "flex flex-col text-center w-full mb-20"}
     [:h2
      {:class
       "text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"}
      "byDidriksson"]
     [:h1
      {:class "sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"}
      "Din beställning är slutförd!"]
     [:p {:class "lg:w-2/3 mx-auto leading-relaxed text-base"}
      "Nu återstår det bara att vänta. Vi kommer påbörja och skicka din order så snart som möjligt. Om du har några frågor eller funderingar så tveka inte att " [:a {:href "/contact" :class "underline"} "höra av dig." ] " Glöm inte inkludera ditt ordernummer: " [:span {:class "font-bold inline"} ordernumber]]
     [:p {:class "lg:w-2/3 pt-5 mx-auto leading-relaxed text-base"}
      "Tack för att du väljer byDidriksson."]
     ]]])

(defn shopping-cart-page []
  (let [page-state (atom :summary)]
    (fn []
      (cond
        (= :summary @page-state) (item-summary page-state)
        (= :checkout @page-state) [checkout-page (:ordernumber @state/state) page-state]
        (= :ordercomplete @page-state) (ordercomplete (:ordernumber @state/state))))))



