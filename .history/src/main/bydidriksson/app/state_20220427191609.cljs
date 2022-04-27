(ns bydidriksson.app.state
  (:require [reagent.core :as reagent :refer [atom]]))

(def state (atom {:shop-items nil :cart []}))
