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