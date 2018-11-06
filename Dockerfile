FROM node:8.11

WORKDIR /data/weekly

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

ENV PORT 3000
EXPOSE 3000

CMD ["npm", "start"]