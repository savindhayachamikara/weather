# Use lightweight Nginx image
FROM nginx:alpine

# Copy static files
COPY src /usr/share/nginx/html

# Expose port 5000
EXPOSE 5000

# Override default Nginx config to listen on 5000
RUN sed -i 's/listen       80;/listen 5000;/' /etc/nginx/conf.d/default.conf

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]