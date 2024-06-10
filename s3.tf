provider "aws" {
  region = "us-west-2"
}

resource "aws_s3_bucket" "example" {
  bucket = "my-tf-test-bucketclala123131"

  tags = {
    Name        = "My bucket"
    Environment = "Dev"
  }
}