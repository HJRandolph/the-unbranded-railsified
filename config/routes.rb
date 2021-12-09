Rails.application.routes.draw do
  root "main_pages#index"
  get "/main_pages", to: "main_pages#index"

  get "/articles", to: "articles#index"
  get "/articles/:id", to: "articles#show"

  resources :contacts, only: [:new, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
