(ns view.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(def app-state
  (atom 
    {:app/title "View"
     :items/list
     [[1 "item 1"] [2 "item 2"] [3 "item 3"] [4 "item 4"]
      [5 "item 5"] [6 "item 6"] [7 "item 7"] [8 "item 8"]
      [9 "item 9"] [10 "item 10"] [11 "item 11"] [12 "item 12"]
      ]}))

(defmulti read (fn [env key params] key))

(defmethod read :default
  [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(defmethod read :items/list
  [{:keys [state] :as env} key {:keys [start end]}]
  {:value (subvec (:items/list @state) start end)})

(defui ItemsList
  static om/IQueryParams
  (params [this]
    {:start 0 :end 10})
  static om/IQuery
  (query [this]
    '[:app/title (:items/list {:start ?start :end ?end})])
  Object
  (render [this]
    (let [{:keys [app/title items/list]} (om/props this)]
      (dom/div nil
        (dom/h2 nil title)
        (apply dom/ul nil
          (map
            (fn [[i name]]
              (dom/li nil (str i". " name)))
            list))))))

(def reconciler
  (om/reconciler
    {:state app-state
     :parser (om/parser {:read read })}))

(om/add-root! reconciler
  ItemsList (gdom/getElement "app"))
