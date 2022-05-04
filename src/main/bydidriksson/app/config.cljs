(ns bydidriksson.app.config)


(defonce configuration
  (atom {;;:backend "http://localhost:3000"
         :backend "https://bydidriksson-backend.herokuapp.com"}))