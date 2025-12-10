## Activate apis
resource "google_project_service" "apis" {
  for_each = toset([
    "cloudfunctions.googleapis.com",
    "run.googleapis.com",
    "cloudbuild.googleapis.com",
    "artifactregistry.googleapis.com",
    "eventarc.googleapis.com",
    "logging.googleapis.com",
    "storage.googleapis.com",
    "firestore.googleapis.com",
  ])
  service            = each.key
  disable_on_destroy = false
}

## Storage Bucket
resource "google_storage_bucket_iam_binding" "public_access" {
  bucket = google_storage_bucket.portfolio_website.name
  role   = "roles/storage.objectViewer"
  members = [
    "allUsers",
  ]
}

## Firestore
resource "google_project_iam_member" "fn_firestore_user" {
  project = "cloud-resume-challenge-479820"
  role    = "roles/datastore.user"
  member  = "serviceAccount:${google_service_account.fn_runtime.email}"
}

## Cloud Function
resource "google_cloud_run_service_iam_member" "public_invoker" {
  service = google_cloudfunctions2_function.gcp_fn.name
  role    = "roles/run.invoker"
  member  = "allUsers"
  location = google_cloudfunctions2_function.gcp_fn.location

  depends_on = [google_cloudfunctions2_function.gcp_fn]
}

resource "google_service_account" "fn_runtime" {
  account_id   = "fn-viewcounter-runtime"
  display_name = "Runtime SA for View Counter (Cloud Functions Gen2)"
}