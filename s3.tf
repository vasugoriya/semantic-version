provider "aws" {
  region = "us-west-2"
}

resource "aws_s3_bucket" "example" {
  bucket = "my-tf-test-bucketclala12313"

  tags = {
    Name        = "My bucket"
    Environment = "Dev"
  }
}