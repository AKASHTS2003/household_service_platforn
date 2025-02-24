Rails.application.routes.draw do
  root "home#index"  # Set the homepage as the default page

  get "home/index"   # Explicit route for home/index (not necessary, but fine to keep)

  # Health check route
  get "up" => "rails/health#show", as: :rails_health_check

  # Uncomment these if you're using PWA features
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
end

