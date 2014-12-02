Evernote::Application.routes.draw do
  root to: 'static_pages#root'
  resources :users
  resource :session

  namespace :api, defaults: { format: :json } do
    resources :notebooks, except: [:new, :edit]
    resources :notes, only: [:create, :show, :update, :destroy]
    resources :tags, only: [:index]
  end
end

