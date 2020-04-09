#!/bin/bash

if [ ! -f .env.local ]; then
  cp env.local .env.local
fi

if [ ! -f .env.development ]; then
  cp env.development .env.development.local
fi

if [ ! -f .env.production ]; then
  cp env.production .env.production.local
fi

yarn react-scripts start