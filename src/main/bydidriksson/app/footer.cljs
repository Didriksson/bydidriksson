(ns bydidriksson.app.footer)


(defn footer []
  [:div {:class "p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"}
   [:a {:class "text-indigo-500"} "mattias.didriksson@gmail.com"]
   [:p {:class "leading-normal my-5"} "Gävle"
    [:br] "Sverige"]])