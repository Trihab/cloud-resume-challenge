variable "bucket_name" {
  type        = string
  description = "Name of the Bucket that will host the website."
}

variable "function_name" {
  type = string
}

variable "function_bucket_name" {
  type = string
}

variable "function_object_name" {
  type = string
}