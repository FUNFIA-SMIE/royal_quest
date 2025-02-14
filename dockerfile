# Step 1: Use an official Node.js image to build the app
FROM node:20 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package.json ./

# Step 4: Install dependencies
RUN npm install --legacy-peer-deps

# Step 5: Copy the rest of the app files
COPY . .

# Step 6: Build the Angular app for production
RUN npm run build -- --configuration production

#Step 7: Use a lightweight web server to serve the apps
FROM nginx:alpine

# Step 8: Copy the custom Nginx configuration into the conf.d folder (not nginx.conf)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Step 9: Test the Nginx configuration
RUN nginx -t

# Step 8: Copy the built app from the build stage to Nginx's public fosdslder
COPY --from=build /app/dist/ /usr/share/nginx/html

# Step 9: Expose port 80
EXPOSE 4200

# Step 10: Start the Nginx server to serve the apps
CMD ["nginx", "-g", "daemon off;"]

