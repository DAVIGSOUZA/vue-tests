#!/bin/sh

cd frontend-challenge
npm run build
cd ../base-project
rm -rf public/*
cp -r ../frontend-challenge/dist/* public/
npm start
