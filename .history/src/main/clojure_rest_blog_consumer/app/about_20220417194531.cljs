(ns clojure-rest-blog-consumer.app.about)

(defn about-page []
  [:section {:class "text-gray-600 body-font"}
 [:div {:class "container px-5 py-24 mx-auto"}
  [:div {:class "flex flex-col text-center w-full mb-20"}
   [:h2
    {:class
     "text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"}
    "ROOF PARTY POLAROID"]
   [:h1
    {:class "sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"}
    "Master Cleanse Reliac Heirloom"]
   [:p {:class "lg:w-2/3 mx-auto leading-relaxed text-base"}
    "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag."]]]])