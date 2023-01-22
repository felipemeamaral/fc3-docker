FROM golang:alpine3.11 AS builder

WORKDIR /build

COPY hello-world.go .

RUN GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o hello-world

FROM scratch

COPY --from=builder /build/hello-world /app/hello-world

ENTRYPOINT [ "/app/hello-world" ]