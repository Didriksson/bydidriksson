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

(defn render-item [item]
  [:div {:className "lg:w-1/4 md:w-1/2 p-4 w-full"}
   [:a {:className "block relative h-48 rounded overflow-hidden"}
    [:img
     {:alt "ecommerce",
      :className "object-cover object-center w-full h-full block",
      :src (str "http://localhost:3000/" (get item :image))}]]
   [:div {:className "mt-4"}
    [:h3
     {:className
      "text-gray-500 text-xs tracking-widest title-font mb-1"}
     (-> (get item :category) (clojure.string/upper-case))]
    [:h2 {:className "text-gray-900 title-font text-lg font-medium"}
     (get item :name)]
    [:p {:className "leading-relaxed mb-3"} (get item :short-description)]
    [:p {:className "mt-1"} (str "$" (get item :price))]
    ]])    

(defn render-items []
  (if (empty? @message-response) [:p "Loading items..."]
      (map render-item @message-response))
)    

(defn render-shop []
  [:section {:className "text-gray-600 body-font"}
   [:div {:className "container px-5 py-24 mx-auto"}
    [:div {:className "flex flex-wrap -m-4"}
     (render-items)]]])

(defn header []
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
      [header]
      [render-shop]
      )))

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render))

(defn ^:dev/after-load reload! []
  (render))
