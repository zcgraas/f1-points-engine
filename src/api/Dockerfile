FROM golang:latest

WORKDIR /usr/app/server
COPY ./src/api .
COPY ./go.mod .
RUN go build -o server .

EXPOSE 8080

CMD ["./server"]