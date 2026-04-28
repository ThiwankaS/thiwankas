# syntax=docker/dockerfile:1

FROM caddy:2-alpine

# Caddy serves from /usr/share/caddy by default
COPY site/ /usr/share/caddy/
COPY Caddyfile /etc/caddy/Caddyfile
