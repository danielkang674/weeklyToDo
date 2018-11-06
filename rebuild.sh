if [ "$1" == "nocontainer" ]; then
  echo "Starting new container.."
else
  echo "Restarting container.."
  docker stop weekly-client && docker rm -v weekly-client
fi
docker pull danielkang674/weekly-client:latest && docker run -v /data/weekly --name weekly-client -p 3000:3000 --network br0 -d danielkang674/weekly-client:latest
