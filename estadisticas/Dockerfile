# 1. Usamos la imagen base de Nginx
FROM nginx:alpine

# 2. Copiamos los archivos del sitio al directorio que Nginx sirve
COPY . /usr/share/nginx/html

# 3. Exponemos el puerto 80 (puerto HTTP por defecto)
EXPOSE 80

# 4. Nginx ya se inicia automáticamente en esta imagen base
