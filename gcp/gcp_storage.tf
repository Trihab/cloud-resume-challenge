resource "google_storage_bucket" "portfolio_website" {
  name          = var.bucket_name
  location      = "EUROPE-WEST9"
  force_destroy = true
  storage_class = "STANDARD"
  uniform_bucket_level_access = true

  website {
    main_page_suffix = "index.html"
    not_found_page   = "404.html"
  }
#   cors {
#     origin          = ["http://image-store.com"]
#     method          = ["GET", "HEAD", "PUT", "POST", "DELETE"]
#     response_header = ["*"]
#     max_age_seconds = 3600
#   }
#   cors {
#     origin            = ["http://image-store.com"]
#     method            = ["GET", "HEAD", "PUT", "POST", "DELETE"]
#     response_header   = ["*"]
#     max_age_seconds   = 0
#   }
}

resource "google_storage_bucket_iam_binding" "public_access" {
  bucket = google_storage_bucket.portfolio_website.name
  role = "roles/storage.objectViewer"
  members = [ 
    "allUsers",
   ]
}