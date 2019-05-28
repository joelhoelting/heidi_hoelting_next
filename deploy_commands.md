npm run build
npm run export
aws s3 cp out s3://heidihoelting.dev.com/ --recursive