FROM php:8-fpm
RUN apt-get update
RUN apt-get install -y tesseract-ocr
RUN apt-get update && apt-get install -y tesseract-ocr-por

RUN docker-php-ext-install pdo pdo_mysql mysqli
RUN apt-get install -y autoconf pkg-config libssl-dev

