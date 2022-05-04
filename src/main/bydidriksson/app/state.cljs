(ns bydidriksson.app.state
  (:require [reagent.core :as reagent :refer [atom]]
            [clojure.string :as string]))

(defonce state (atom {:shop-items nil :cart [] :ordernumber (apply str (take 6 (string/upper-case (str (random-uuid)))))}))
