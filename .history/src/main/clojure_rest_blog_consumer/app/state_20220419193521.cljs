(ns clojure-rest-blog-consumer.app.state
  (:rquire [reagent.core :as reagent :refer [atom]]))


(def state (atom {:shop-items nil :cart []}))
