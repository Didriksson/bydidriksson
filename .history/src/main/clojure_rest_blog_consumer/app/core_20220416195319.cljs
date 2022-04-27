(ns clojure-rest-blog-consumer.app.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require 
    [reagent.dom :as rdom]
    [reagent.core :as reagent :refer [atom]]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]
  ))

    (enable-console-print!)

    (def request-opts {:with-credentials? false
                   :headers {"Content-Type" "application/json"}})


(def message-response (atom []))

(defn make-remote-call [endpoint]
  (go (let [response (<! (http/get endpoint request-opts))]
        (println response)
        (reset! message-response (:body response)))))

(defn render-message [message]
        [:div {:class "py-8 flex flex-wrap md:flex-nowrap"}
          [:div {:class "md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"}
            [:span {:class "font-semibold title-font text-gray-700"} "ID"]
            [:span {:class "mt-1 text-gray-500 text-sm"} (str (get message :id))]]
            [:div {:class "md:flex-grow"}
            [:h2 {:class "text-2xl font-medium text-gray-900 title-font mb-2"}
            (get message :author)]
            [:p {:class "leading-relaxed"}
            (get message :message)]]])


(defn render-messages []
  (if (empty? @message-response) "I'm loading..."
      [:section {:class "text-gray-600 body-font overflow-hidden"}
        [:div {:class "container px-5 py-24 mx-auto"}
          [new-post-page]  
          [:div {:class "-my-8 divide-y-2 divide-gray-100"}
            (map render-message @message-response)]]]))  

(defn render-shop []
  ([:section.text-gray-600.body-font
  [:div.container.px-5.py-24.mx-auto
   [:div.flex.flex-wrap.-m-4
    [:div.lg:w-1/4.md:w-1/2.p-4.w-full
     [:a.block.relative.h-48.rounded.overflow-hidden
      [:img.object-cover.object-center.w-full.h-full.block
       {:src "https://dummyimage.com/420x260", :alt "ecommerce"}]]
     [:div.mt-4
      [:h3.text-gray-500.text-xs.tracking-widest.title-font.mb-1
       "CATEGORY"]
      [:h2.text-gray-900.title-font.text-lg.font-medium
       "The Catalyzer"]
      [:p.mt-1 "$16.00"]]]
    [:div.lg:w-1/4.md:w-1/2.p-4.w-full
     [:a.block.relative.h-48.rounded.overflow-hidden
      [:img.object-cover.object-center.w-full.h-full.block
       {:src "https://dummyimage.com/421x261", :alt "ecommerce"}]]
     [:div.mt-4
      [:h3.text-gray-500.text-xs.tracking-widest.title-font.mb-1
       "CATEGORY"]
      [:h2.text-gray-900.title-font.text-lg.font-medium
       "Shooting Stars"]
      [:p.mt-1 "$21.15"]]]
    [:div.lg:w-1/4.md:w-1/2.p-4.w-full
     [:a.block.relative.h-48.rounded.overflow-hidden
      [:img.object-cover.object-center.w-full.h-full.block
       {:src "https://dummyimage.com/422x262", :alt "ecommerce"}]]
     [:div.mt-4
      [:h3.text-gray-500.text-xs.tracking-widest.title-font.mb-1
       "CATEGORY"]
      [:h2.text-gray-900.title-font.text-lg.font-medium "Neptune"]
      [:p.mt-1 "$12.00"]]]
    [:div.lg:w-1/4.md:w-1/2.p-4.w-full
     [:a.block.relative.h-48.rounded.overflow-hidden
      [:img.object-cover.object-center.w-full.h-full.block
       {:src "https://dummyimage.com/423x263", :alt "ecommerce"}]]
     [:div.mt-4
      [:h3.text-gray-500.text-xs.tracking-widest.title-font.mb-1
       "CATEGORY"]
      [:h2.text-gray-900.title-font.text-lg.font-medium
       "The 400 Blows"]
      [:p.mt-1 "$18.40"]]]
    [:div.lg:w-1/4.md:w-1/2.p-4.w-full
     [:a.block.relative.h-48.rounded.overflow-hidden
      [:img.object-cover.object-center.w-full.h-full.block
       {:src "https://dummyimage.com/424x264", :alt "ecommerce"}]]
     [:div.mt-4
      [:h3.text-gray-500.text-xs.tracking-widest.title-font.mb-1
       "CATEGORY"]
      [:h2.text-gray-900.title-font.text-lg.font-medium
       "The Catalyzer"]
      [:p.mt-1 "$16.00"]]]
    [:div.lg:w-1/4.md:w-1/2.p-4.w-full
     [:a.block.relative.h-48.rounded.overflow-hidden
      [:img.object-cover.object-center.w-full.h-full.block
       {:src "https://dummyimage.com/425x265", :alt "ecommerce"}]]
     [:div.mt-4
      [:h3.text-gray-500.text-xs.tracking-widest.title-font.mb-1
       "CATEGORY"]
      [:h2.text-gray-900.title-font.text-lg.font-medium
       "Shooting Stars"]
      [:p.mt-1 "$21.15"]]]
    [:div.lg:w-1/4.md:w-1/2.p-4.w-full
     [:a.block.relative.h-48.rounded.overflow-hidden
      [:img.object-cover.object-center.w-full.h-full.block
       {:src "https://dummyimage.com/427x267", :alt "ecommerce"}]]
     [:div.mt-4
      [:h3.text-gray-500.text-xs.tracking-widest.title-font.mb-1
       "CATEGORY"]
      [:h2.text-gray-900.title-font.text-lg.font-medium "Neptune"]
      [:p.mt-1 "$12.00"]]]
    [:div.lg:w-1/4.md:w-1/2.p-4.w-full
     [:a.block.relative.h-48.rounded.overflow-hidden
      [:img.object-cover.object-center.w-full.h-full.block
       {:src "https://dummyimage.com/428x268", :alt "ecommerce"}]]
     [:div.mt-4
      [:h3.text-gray-500.text-xs.tracking-widest.title-font.mb-1
       "CATEGORY"]
      [:h2.text-gray-900.title-font.text-lg.font-medium
       "The 400 Blows"]
      [:p.mt-1 "$18.40"]]]]]])  
  )

(defn app [] 
  (fn []
    (do 
      (make-remote-call "http://localhost:3000")
      [render-messages]
      )))

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render))

(defn ^:dev/after-load reload! []
  (render))
