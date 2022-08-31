export const config = {
    "dev": {
        "username": "udagramcollins",
        "password": "1grADZOfEW4YsDzfchSn",
        "database": "udagramcollinsdev",
        "host": "udagramcollinsdev.c5xugfojlrzc.us-east-1.rds.amazonaws.com",
        "dialect": "postgres",
        "aws_region": "us-east-1",
        "aws_profile": "default",
        "aws_media_bucket": "udagram-media-dev-s3"
    },
    "jwt": {
        "secret": "notagoodsecret"
    },
    "prod": {
        "username": "",
        "password": "",
        "database": "udagram_prod",
        "host": "",
        "dialect": "postgres"
    }
}
