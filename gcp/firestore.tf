resource "google_firestore_database" "my_db" {
  project     = "cloud-resume-challenge-479820"
  name        = "(default)"
  location_id = "nam5"
  type        = "FIRESTORE_NATIVE"

  depends_on = [google_project_service.apis, google_cloudfunctions2_function.gcp_fn]
}

resource "google_firestore_document" "counter_seed" {
  project     = "cloud-resume-challenge-479820"
  database    = "(default)"
  collection  = "counter"
  document_id = "global"

  fields = jsonencode({
    count = { integerValue = 0 }
  })

  depends_on = [google_firestore_database.my_db]
}