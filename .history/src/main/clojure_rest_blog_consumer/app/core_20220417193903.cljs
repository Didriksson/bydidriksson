(ns clojure-rest-blog-consumer.app.core
  (:require [accountant.core :as accountant]
            [clojure-rest-blog-consumer.app.home :refer [home-page]]
            [clojure-rest-blog-consumer.app.shop :refer [shop-page]]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [secretary.core :as secretary :include-macros true]))

(enable-console-print!)

(def selected-page (r/atom home-page))

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (reset! selected-page home-page))

(secretary/defroute "/shop" []
  (reset! selected-page shop-page))

(defn header []
  [:header {:class "text-gray-600 body-font"}
   [:div
    {:class
     "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"}
    [:a
     {:class
      "flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      :href "/"}
     [:img  {:class "w-24 h-24 text-white p-2 rounded-full" :src "logo.png"}]
     [:span {:class "ml-3 text-xl"} "by Didriksson"]]
    [:nav
     {:class
      "md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center"}
     [:a {:class "mr-5 hover:text-gray-900" :href "/shop"} "Butiken"]
     [:a {:class "mr-5 hover:text-gray-900" :href "/about"} "Om oss"]]
    [:a {:class "inline-flex items-center" :href "mailto:mattias.didriksson@gmail.com"}
     "Kontakta oss"]]
   [:div {:class "w-full border-t border-gray-300"}]])

(defn app []
  [:main
   [header]
   [@selected-page]])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (secretary/dispatch! path))
    :path-exists?
    (fn [path]
      (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (render))

(defn ^:dev/after-load reload! []
  (render))
