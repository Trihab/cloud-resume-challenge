output "function_url" {
  description = "Direct HTTPS URL of the function"
  value       = google_cloudfunctions2_function.gcp_fn.url
}