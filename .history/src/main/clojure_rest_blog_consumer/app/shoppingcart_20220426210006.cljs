(ns clojure-rest-blog-consumer.app.shoppingcart
  (:require [clojure-rest-blog-consumer.app.state :as state]))

(defn remove-item [cart-item]
  (let [new-cart (remove #(= (:id cart-item) (:id %)) (:cart @state/state))]
    (swap! state/state assoc :cart new-cart)))

(defn shopping-item [cart-item]
  (let [item (:item cart-item)]
    [:div {:class "flex justify-between items-center mt-6 pt-6 border-t"}
     [:div {:class "flex items-center"}
      [:img {:src (str "http://localhost:3000/" (get item :image)), :width "60", :class "rounded-full "}]
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


(defn item-summary []
  [:div {:class "h-screen"}
   [:div {:class "py-12"}
    [:div {:class "max-w-md mx-auto shadow-lg rounded-lg md:max-w-5xl"}
     [:div {:class "md:flex "}
      [:div {:class "w-full p-4 px-5 py-5"}
       [:div {:class "md:grid md:grid-cols-2 gap-1 "}
        [:div {:class "col-span-2 p-5"}
         [:h1 {:class "text-xl font-medium "} "Kundvagn"]
         (map shopping-item (:cart @state/state))
         [:div {:class "flex justify-between items-center mt-6 pt-6 border-t"}
          [:div {:class "flex justify-center items-center"}
           [:span {:class "text-sm font-medium text-gray-400 mr-1"} "Frakt:"]
           " "]
          [:div {:class "flex justify-center items-center"}
           [:span {:class "pr-8 text-base font-semibold text-gray-800"} (.toFixed (reduce + (map js/parseFloat (map :price (map :item (:cart @state/state))))) 2) " kr"]
           " "]]
         [:div {:class "flex justify-between items-center pt-6"}
          [:div {:class "flex justify-center items-center"}
           [:span {:class "text-sm font-medium font-bold text-gray-600 mr-1"} "Totalt:"]
           " "]
          [:div {:class "flex justify-center items-center"}
           [:span {:class "pr-8 text-lg font-bold text-gray-800"} (.toFixed (reduce + (map js/parseFloat (map :price (map :item (:cart @state/state))))) 2) " kr"]
           " "]]
         [:div {:class "flex justify-between items-center mt-6 pt-6 border-t"}
          [:a {:href "/checkout" :class "flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"} "Lägg din beställning"]]]]]]]]])

(defn checkout-page []
  (let [form (atom {:email "" :name "" :message ""})]
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
                          :on-change #(swap! form assoc :name (.-value (.-target %)))}]]]
               [:div {:class "p-2 w-1/2"}
                [:div {:class "relative"}
                 [:label {:for "email", :class "leading-7 text-sm text-gray-600"} "Epost"]
                 [:input {:type "email", :id "email", :name "email", :class "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          :on-change #(swap! form assoc :email (.-value (.-target %)))}]]]
               [:div {:class "p-2 w-full"}
                [:div {:class "relative"}
                 [:label {:for "message", :class "leading-7 text-sm text-gray-600"} "Meddelande"]
                 [:textarea {:id "message", :name "message", :class "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                             :on-change #(swap! form assoc :message (.-value (.-target %)))}]]]
               [:div {:class "p-2 w-full"}
                (if @sent
                  [:button {:class "flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 rounded text-lg disabled:opacity-50 disabled" :disabled true} "Tack!"]
                  [:button {:class "flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            :on-click #(do
                                         (checka-ut @form))} "Skicka"])]
               [:div {:class "p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"}
                [:a {:class "text-indigo-500"} "mattias.didriksson@gmail.com"]
                [:p {:class "leading-normal my-5"} "Gävle"
                 [:br] "Sverige"]]]]]])))

(defn shopping-cart-page []
  (let [page-state (atom {:stage 1})]
    (fn []
      [item-summary]
      (when (> @page-state 1)
        [checkout-page])))  
  )



