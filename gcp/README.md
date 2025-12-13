# Terraform X GCP section

I use Terraform to deploy my infrastructure in GCP. 

## Authentication

I created a Service Account for Terraform deployment with Infrastructure Administrator rights. For this project, I had to manage my service account's permissions while adhering to the principle of least privilege.
To connect we use a json key that we can export to env variable. We can also export it to our `.bashrc` to make it permanent.

```bash
export GOOGLE_APPLICATION_CREDENTIALS=<PATH_TO_KEY>
```

Edit and reload `.bashrc` :

```bash
vim ~/.bashrc
source ~/.bashrc
```

## Ansible Configuration

I created a vault to store the gcp service account key so that I could safely push it to my git repository. My ansible playbook create a temp file for the credential. My gcp credential file is now stored in my ansible vault file.

## Domain Ownership

I had to verify the ownership of my domain through Google Search Console. When you deploy a bucket with a domain name as a bucket name you need to prove that you are the owner of it. So I added my service account as owner of my domain to solve any issue.

## Cloud CDN

It seems that cloud CDN is expensive so I will use a cost effective solution. I will try with CloudFlare instead. CloudFlare has a free tier for CDN service it fits perfectly my budget :)

## CloudFlare and GCP

GCP expects the header to be the same the domain for static website hosting.
To properly redirect I need to create rules within CloudFlare. But I will need a worker to serve content from the bucket.

## Terraform State

To store my tf state remotely I set up a S3 bucket on AWS. I created a `backend.tf` file with the configuration in my `config.s3.tfbackend`.

Inside the config file, you need to set those variables:

```bash
region = "<REGION>"
bucket= "<BUCKET_NAME>"
key = "<STATE_FILE_NAME>"
use_lockfile = true # Avoid being used by multiple deployment at the same time causing errors
```

Whenever I need to init terraform I just run: 
```bash
terraform init -backend-config="./config.s3.tfbackend"
```

## Function

I use Ruby to code my cloud function because it is supported by GCP Function. It is an opportunity for me to discover new language other than python.

Init ruby function:

```bash
# To make sure you don't need sudo
bundle config set --local path 'vendor/bundle'
# Install dependencies
bundle install
# Ensure Cloud Functions support the platform
bundle lock --add-platform x86_64-linux
```

To try it out before deploying it, you can run:
```bash
bundle exec functions-framework --target <FUNCTION_NAME> --port 8080
```

## Issues

I ran into an issue while bundling Ruby. Cloud build was not able to fetch the latest version of gRPC and Google-protobuf. The solution I found was to downgrade from `Ruby 3.4` to `Ruby 3.3`. Then I did fix versions that are compatible to `Ruby 3.3` :
 - google-protobuf (~> 3.25)
 - grpc (= 1.67)
