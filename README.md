
backend docker:

docker build -f ./backend/Dockerfile.api -t app-backend --no-cache .

docker run --rm -p 5000:5000 app-backend