# Terraform X GCP section

I manage Terraform using Infrastructure Manager in GCP. 

## Authentication

I created a Service Account for Terraform deployment with Infrastructure Administrator rights.
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

Whenever I need to init terraform I just run: 
```bash
terraform init -backend-config="./config.s3.tfbackend"
```