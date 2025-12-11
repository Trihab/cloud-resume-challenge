resource "google_cloudfunctions2_function" "gcp_fn" {
  name        = var.function_name
  location    = "europe-west9"
  description = "CRC View Counter"

  build_config {
    runtime     = "ruby33"
    entry_point = "counter_update"
    source {
      storage_source {
        bucket = var.function_bucket_name
        object = var.function_object_name
      }
    }
  }

  service_config {
    service_account_email            = google_service_account.fn_runtime.email
    available_cpu                    = "1"
    available_memory                 = "512M"
    timeout_seconds                  = 30
    ingress_settings                 = "ALLOW_ALL"
    max_instance_request_concurrency = 2
  }
}