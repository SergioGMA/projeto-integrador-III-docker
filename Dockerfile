FROM python:3.10.6
ADD . /code
WORKDIR /code
RUN pip install -r requirements.txt


#FROM nginx:alpine
#VOLUME /var/cache/nginx
#COPY --from=python code/interface /usr/share/nginx/html
#COPY ./nginx.conf /etc/nginx/conf.d/default.conf
